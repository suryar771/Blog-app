const { validateToken } = require("../services/authenticatin");

function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue = req.cookies[cookieName];
        if(!tokenCookieValue){
            next();

        }
        try{

            const userPayload = validateToken(tokenCookieValue);
            req.user = userPayload;

        
        }
        catch(error){
        }
        next();
    }
}
module.exports = {
    checkForAuthenticationCookie,
    
}