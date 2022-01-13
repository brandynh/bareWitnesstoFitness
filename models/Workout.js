const mongoose = require("mongoose");
const WorkoutSchema = mongoose.Schema;
const

const WorkoutModel = new WorkoutSchema({

    currentDay: {
        type: Date,
        default: Date.now,
    },

    workouts: [{

        type: {
            type: String,
        },

        name: {
            type: String,
        },

        duration: {
            type: Number,
        },

        reps: {
            type: Number,
        },

        sets: {
            type: Number,
        },

        weight: {
            type: Number,
        },

        distance: {
            type: Number,
        },
    }],

    totalDuration: {
        type: Number,
    },
});

const Workout = mongoose.model("Workout", WorkoutModel)

module.exports = Workout;