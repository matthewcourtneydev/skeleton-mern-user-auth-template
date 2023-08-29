const Member = require('../models/member');

async function isEmailNew(req, res, next) {
    let existingEmail = await Member.findOne({ email: req.body.email });
    if (existingEmail) {
        res.status(409);
        return res.send("This email already exists")
    }

    next()
}

module.exports = {
    isEmailNew
}