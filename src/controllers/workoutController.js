const workoutService = require('../services/workoutService')

const getAllWorkouts = (req, res) => {
    try {
        const allWorkouts = workoutService.getAllWorkouts();
        res.send({ status: "OK", data: allWorkouts});
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};

const getOneWorkout = (req, res) => {
    const { params: { workoutId }} = req;
    if(!workoutId) {
        res.status(400).send({ status: "FAILED", data: { error: "Parameter ':workoutId' can not be empty" }, });
    };
    try {
        const workout = workoutService.getOneWorkout(workoutId);
        res.send({ status: "OK", data: workout });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
   
};

const createNewWorkout = (req, res) => {
    const { body } = req;
    if (
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ) {
        res.status(400).send({ status: "FAILED", data: {error: "Missing keys" }});
    }
    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };
    try {
        const createdWorkout = workoutService.createNewWorkout(newWorkout);
        res.status(201).send({ status: "OK", data: createdWorkout });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
};


const updateOneWorkout = (req, res) => {
    const { body, params: { workoutId }} = req;
    if (!workoutId) {
        res.status(400).send({ status: "FAILED", data: {error: "Parameter ':workoutId' can not be empty" }});
    };
    try {
        const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
        res.send({ status: "OK", data: updatedWorkout });
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
        
};

//try the same try-catch thing here
const deleteOneWorkout = (req, res) => {
    const { params: { workoutId }} = req;
    if (!workoutId) {
        res.status(400).send({ status: "FAILED", data: {error: "Parameter ':workoutId' can not be empty" }});
    };
    workoutService.deleteOneWorkout(workoutId);
    res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};