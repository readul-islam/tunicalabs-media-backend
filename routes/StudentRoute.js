
const express = require('express');
const StudentModel = require('../models/StudentModel');
const router = express.Router();
// get all students
router.get('/all-students', async (req, res) => {
    const result = await StudentModel.find({})
    res.send(result)
})
// create a new student
router.post('/student', async (req, res) => {
    const result = await StudentModel.create(req.body)
    res.send(result)
})

// filtering students
router.get('/students', async (req, res) => {
    const query = req.query;
    const { name, age, school, divison } = query;
    if (name && age && school && divison && query.class) {
        const result = await StudentModel.find(
            {
                $and: [{
                    name: { $eq: name },
                    age: { $eq: age },
                    class: { $eq: query.class },
                    school: { $eq: school },
                    divison: { $eq: divison }

                }]
            }
        );
        res.send(result)
    } else {

        const result = await StudentModel.find({
            $or: [{ name: { $eq: name } },
            { age: { $eq: age } },
            { class: { $eq: query.class } },
            { school: { $eq: school } },
            { divison: { $eq: divison } }]
        })
        res.send(result)
    }


})

// delete by id

router.delete('/student/:id', async (req, res) => {

    const id = req.params.id;
    const result = await StudentModel.findOneAndDelete({ _id: id })
    res.send(result)

})

// update by id
router.patch('/student/:id', async (req, res) => {
    const id = req.params.id;
    const update = req.body
    const result = await StudentModel.findByIdAndUpdate(id, { $set: update })
    res.send(result)

})



module.exports = router;