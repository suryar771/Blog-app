function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue = requestAnimationFrame.cookies[cookieName]
        if(!tokenCookieValue){
            next();

        }
        try{

            const userPayload = vallidateToken(tokenCookieValue);
            req.user = userPayload;

        
        }
        catch(error){
        }
        next();
    }
}