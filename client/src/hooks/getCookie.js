import Cookie from 'js-cookie'

const GetCookie = (cookiename)=>{
    console.log("HERE IN GET" + cookiename.data)
    return Cookie.get(cookiename);


};
export default GetCookie;