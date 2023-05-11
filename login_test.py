from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
from selenium.webdriver.common.alert import Alert
import ast
import time
from datetime import datetime



options = Options()
options.add_argument('--start-maximized')

service = Service()

dc = DesiredCapabilities.CHROME
dc['loggingPrefs'] = { 'browser':'ALL' }

driver = webdriver.Chrome(options=options, service=service, desired_capabilities=dc)

def Login():
    driver.get(r'http://localhost:3000/')

    email_input = driver.find_element('id',"textareaemail")

    email_input.send_keys(r"Example")    

    pass_input = driver.find_element('id',"textareapassword")

    pass_input.send_keys(r"123456789")                                                                      # check with input.txt and input-wrong.txt                                                     # check with input.txt and inputw.txt
    
    time.sleep(3)

    submitButton = driver.find_element('xpath', '//*[@id="root"]/div/div/button')
    submitButton.send_keys("\n")

def LoginValid():

    Login()
   
    time.sleep(3)
    current_url = driver.current_url

    assert current_url == "http://localhost:3000/Users_Home.js", "Login Failed"
    print("Validation succeeded")

    time.sleep(5)
    
    driver.quit()

# LoginValid()

def LoginDefect():
    driver.get(r'http://localhost:3000/')

    email_input = driver.find_element('id',"textareaemail")

    email_input.send_keys(r"Example")    

    pass_input = driver.find_element('id',"textareapassword")

    pass_input.send_keys(r"wrong-password")
    
    time.sleep(3)

    submitButton = driver.find_element('xpath', '//*[@id="root"]/div/div/button')
    submitButton.send_keys("\n")
    
    current_url = driver.current_url

    assert current_url == "http://localhost:3000/Users_Home.js", "Login Failed"

    time.sleep(5)
    
    driver.quit()

# LoginDefect()


def Requirement_valid():
    Login()
    time.sleep(3)
    driver.get(r'http://localhost:3000/Users_Requirements.js')
    time.sleep(5)
    commit_btn = driver.find_element('id',"add_commitment")
    commit_btn.send_keys("\n")      
    time.sleep(3)
    modal = driver.find_element('id',"addDis")
    commit_quant = modal.find_element('id','Comm_qty')
    commit_quant.send_keys("1")
    c_date = modal.find_element('id','Comm_date')
    c_date.send_keys(datetime.today().strftime("%m-%d-%Y"))
    exp_date = modal.find_element('id','E_delv_date')
    exp_date.send_keys(datetime.today().strftime("%m-%d-%Y"))
    add_btn = modal.find_element('id','bttn')
    add_btn.send_keys("\n")
    time.sleep(3)

    alert = Alert(driver)
    alert_text = alert.text

    assert alert_text == "Successfully Commited ", "Item Addition Failure"
    print("Commitment Validation succeeded")

    driver.quit()

def Requirement_Defect():
    Login()
    time.sleep(3)
    driver.get(r'http://localhost:3000/Users_Requirements.js')
    time.sleep(5)
    commit_btn = driver.find_element('id',"add_commitment")
    commit_btn.send_keys("\n")      
    time.sleep(3)
    modal = driver.find_element('id',"addDis")
    commit_quant = modal.find_element('id','Comm_qty')
    commit_quant.send_keys("99999")
    c_date = modal.find_element('id','Comm_date')
    c_date.send_keys(datetime.today().strftime("%m-%d-%Y"))
    exp_date = modal.find_element('id','E_delv_date')
    exp_date.send_keys(datetime.today().strftime("%m-%d-%Y"))
    add_btn = modal.find_element('id','bttn')
    add_btn.send_keys("\n")
    time.sleep(3)

    alert = Alert(driver)
    alert_text = alert.text

    assert alert_text == "Commit Quantity Should be less than Requested Quantity", 'Should not make Commitment for more than Requested Quantity'
    print("Commitment Failed, Test Succeded")
    

    driver.quit()

# Requirement_Defect()

