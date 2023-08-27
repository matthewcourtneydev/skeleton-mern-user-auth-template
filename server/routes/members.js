const express = require('express');
const router = express.Router();
const Member = require('../models/member')

// GETTING ALL
router.get('/', async (req, res) => {
    try {
        const members = await Member.find()
        res.json(members)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
// GETTING ONE
router.get('/:id', getMember, (req, res) => {
    res.json(res.member)
})
// CREATING ONE
router.post('/', async (req, res) => {
    const member = new Member({
        name: req.body.name,
        email: req.body.email
    })
    
    try {
        const newMember = await member.save();
        res.status(201).json(newMember)
    } catch (err) {
        res.status(400).json(err)
    }
})
// UPDATING ONE
router.patch('/:id', getMember, async (req, res) => {
    if (req.body.name != null) {
        res.member.name = req.body.name
    }
    if (req.body.email != null) {
        res.member.email = req.body.email
    }

    try {
        const updatedMember = await res.member.save();
        res.json(updatedMember)
    } catch(err) {
        res.status(400).json({ message: err.message })
    }
})
// DELETING ONE
router.delete('/:id', getMember, async (req, res) => {
    try {
        await res.member.deleteOne();
        res.json({message: "deleted member"})
    } catch(err) {
        res.status(500).json({ message: err.message})
    }
})

async function getMember(req, res, next) {  
    let member
    try {
        member = await Member.findById(req.params.id)
       if (member == null) {
        return res.status(404).json({ message: 'member not found' })
       }
    } catch (err) {
        return res.status(500).json({ message: err.message})
    }

    res.member = member
    next()
}

module.exports = router