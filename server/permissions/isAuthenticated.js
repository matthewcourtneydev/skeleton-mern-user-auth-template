function authMember(req, res, next) {
    console.log(req.member)
    if(req.member == null) {
        res.status(403);
        return res.send("YOU NEED TO SIGN IN")
    }
    next()
}

module.exports = {
    authMember
}