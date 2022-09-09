const recordService = require('../services/recordService');

const getRecordForWorkout = (req, res) => {
    const { params: { workoutId }} = req;
    try {
        const records = recordService.getRecordForWorkout(workoutId);
        res.send({ status: "OK", data: records});
    } catch (error) {
        res.status(error?.status || 500).send({ status: "FAILED", data: { error: error?.message || error } });
    }
}

module.exports = {
    getRecordForWorkout
}