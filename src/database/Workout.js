const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
    try {
        return DB.workouts;
    } catch (error) {
        throw {status: 500, message: error}
    }
};

const getOneWorkout = (workoutId) => {
    try {
        const workout = DB.workouts.find((workout) => workout.id === workoutId);
        if (!workout) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            };
        }
        return workout;
    } catch (error) {
        throw {status: error?.status || 500, message: error?.message || error}
    }
    
};

const createNewWorkout = (newWorkout) => {
    try {
        const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
        if (isAlreadyAdded) {
            throw {
                status: 400,
                message: `Workout with the name '${newWorkout.name}' already exists`,
            };
        }
        DB.workouts.push(newWorkout);
        saveToDatabase(DB);
        return newWorkout;
    } catch (error) {
        //A little downside of just throwing is that we don't get a stack trace.
        throw { status:  error?.status || 500, message: error?.message || error }; //Optional chaining ?.
    }
};

const updateOneWorkout = (workoutId, changes) => {
    try {
        const indexForUpdate = DB.workouts.findIndex(
            (workout) => workout.id === workoutId
        );
        if (indexForUpdate === -1) {
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            }
        }
        const updatedWorkout = {
            ...DB.workouts[indexForUpdate],
            ...changes,
            updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
        };
        DB.workouts[indexForUpdate] = updatedWorkout;
        saveToDatabase(DB);
        return updatedWorkout;
    } catch (error) {
        throw { status: error?.status || 500, message: error?.message || error };
    }
};

//Do the same try-catch thing as above
const deleteOneWorkout = (workoutId) => {
    const indexForDeletion = DB.workouts.findIndex(
        (workout) => workout.id === workoutId
    );
    if (indexForDeletion === -1) {
        return;
    }
    DB.workouts.splice(indexForDeletion, 1);
    saveToDatabase(DB);
};

module.exports = { 
    getAllWorkouts,
    createNewWorkout,
    getOneWorkout,
    updateOneWorkout,
    deleteOneWorkout,
 };