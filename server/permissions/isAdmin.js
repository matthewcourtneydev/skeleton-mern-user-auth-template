function isAdmin(req, res, next) {
    console.log(res.member.isAdmin)
    if(!res.member.isAdmin) {
        res.json({ message: 'You are not an admin. Permission denied'})
    }
    next()
}

module.exports = {
    isAdmin
}