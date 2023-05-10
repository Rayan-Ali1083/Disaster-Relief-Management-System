from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.desired_capabilities import DesiredCapabilities
import ast
import time


options = Options()
options.add_argument('--start-maximized')

service = Service()

dc = DesiredCapabilities.CHROME
dc['loggingPrefs'] = { 'browser':'ALL' }

driver = webdriver.Chrome(options=options, service=service, desired_capabilities=dc)

def validationTest():

    driver.get(r'http://localhost:3000/')

    email_input = driver.find_element('id',"textareaemail")

    email_input.send_keys(r"Example")    

    pass_input = driver.find_element('id',"textareapassword")

    pass_input.send_keys(r"123456789")                                                                      # check with input.txt and input-wrong.txt                                                     # check with input.txt and inputw.txt
    
    time.sleep(3)

    submitButton = driver.find_element('xpath', '//*[@id="root"]/div/div/button')
    submitButton.send_keys("\n")
    
    current_url = driver.current_url

    assert current_url != "http://localhost:3000/Users_Home.js"
    print("Validation succeeded")

    time.sleep(5)
    
    driver.quit()

validationTest()

def validationTest2():
    