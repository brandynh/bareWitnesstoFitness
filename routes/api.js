const mongoose = require('mongoose');
const router = require('express').Router();
const Workout = require('../models/Workout');


// Get database workout data
router.get('/api/workouts', (req, res) => {

    //Using aggregate for dynamic arithmatic
    Workout.aggregate([
        {
            $addFields: {

                totalDuration: { $sum: "$exercises.duration", },

            },

        },

    ])

        .sort({ date: -1 })

        .then((workoutData) => {

            res.json(workoutData);
        })

        .catch((err) => {

            res.status(400).json(err);

        });

});

// Get database workout data for stats page

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([
        {
            $addFields: {

                totalDuration: { $sum: '$exercises.duration'},

                totalWeight: { $sum: 'exercises.weight' }

            },
        },
    ]) 

    .limit(8)

    .sort({ date: -1 })

    .then((workoutData) => {

        res.json(workoutData);

    })
    
    .catch((err) => {

        res.status(400).json(err);

    });

});

// Creating new workout to add to database

router.post('/api/workouts', ({ body }, res) =>{
    Workout.create(body)

    .then((workoutData) => {

        console.log(workoutData);

        res.json(workoutData);

    })

    .catch((err) => {

        res.status(400).json(err);

    });

});

// Update workout by ID

router.put('/api/workouts/:id', ({ body, params }, res) => {
    Workout.findByIdAndUpdate(

        { _id: params.id },
        { $push: { exercises: body } },
        { new: true }

    )

    .then((workoutData) => {

        res.json(workoutData);

    })

    .catch((err) => {

        res.status(400).json(err);

    });

});

module.exports = router;