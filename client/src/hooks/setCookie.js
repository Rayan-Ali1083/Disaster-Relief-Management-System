import Cookie from 'js-cookie'

const SetCookie = (cookiename,usrin)=>{
    Cookie.set(cookiename,usrin,{

        expires:1,
        secure:true,
        sameSite:'strict',
        path:'/'

    })

console.log("HEREEEEE" + usrin)
console.log("HEREEEEE" + cookiename)
};
export default SetCookie;