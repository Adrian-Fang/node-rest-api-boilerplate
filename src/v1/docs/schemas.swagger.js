const workoutSchema = {
    Workout: {
        type: "object",
        properties: {
            id: {
                type: "string",
                example: "61dbae02-c147-4e28-863c-db7bd402b2d6"
            },
            name: {
                type: "string",
                example: "Tommy V"
            },
            mode: {
                type: "string",
                example: "For Time"
            },
            equipment: {
                type: "array",
                example: ["barbell", "rope"]
            },
            exercises: {
                type: "array",
                example: ["21 thrusters", "12 rope climbs, 15 ft", "15 thrusters", "9 rope climbs, 15 ft", "9 thrusters", "6 rope climbs, 15 ft"]
            },
            createdAt: {
                type: "string",
                example: "4/20/2022, 2:21:56 PM"
            },
            updatedAt: {
                type: "string",
                example: "4/20/2022, 2:21:56 PM"
            },
            trainerTips: {
                type: "array",
                example: ["Split the 21 thrusters as needed", "Try to do the 9 and 6 thrusters unbroken", "RX Weights: 115lb/75lb"]
            }
        }
    }
};

module.exports = {
    workoutSchema,
}