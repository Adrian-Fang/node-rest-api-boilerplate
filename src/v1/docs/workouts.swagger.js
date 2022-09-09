const getWorkouts = {
    tags: ['Workouts'],
    summary: "Returns all workouts from the system that the user has access to",
    parameters: [
        {
            name: "mode",
            in: "query",
            description: "the mode of a workout",
            required: false,
            schema: {
                type: "string",
            }
        }
    ],
    responses: {
        "200": {          
            description: "A list of workouts.",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                example: "OK"
                            },
                            data: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Workout"
                                }
                            }
                        }
                    }
                }
            }
        },
        "5XX": {
            description: "Failed operations",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                example: "FAILED"
                            },
                            data: {
                                type: "object",
                                properties: {
                                    error: {
                                        type: "string",
                                        example: "Some error message"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

const createWorkouts = {
    tags: ['Workouts'],
    summary: "Create a new workout",
    requestBody: {
        content: {
            "application/x-www-form-urlencoded": {
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            description: "workout name",
                            type: "string"
                        },
                        mode: {
                            description: "mode of workout",
                            type: "string"
                        },
                        equipment: {
                            description: "equirements needed for the workout",
                            type: "array",
                            items: {
                                type: "string"
                            }
                        },
                        exercises: {
                            description: "Exercises of workout",
                            type: "array",
                            items: {
                                type: "string"
                            }
                        },
                        trainerTips: {
                            description: "trainer's tips for such workout",
                            type: "array",
                            items: {
                                type: "string"
                            }
                        }
                    },
                    required: ["name", "mode", "equipment", "exercises", "trainerTips"]
                }
            }
        }
    },
    responses: {
        "201": {          
            description: "Successfully created",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                example: "OK"
                            },
                            data: {
                                type: "array",
                                $ref: "#/components/schemas/Workout"
                            }
                        }
                    }
                }
            }
        },
        "5XX": {
            description: "Failed operations",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                example: "FAILED"
                            },
                            data: {
                                type: "object",
                                properties: {
                                    error: {
                                        type: "string",
                                        example: "Some error message"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

const getRecordForWorkout = {
    tags: ['Records'],
    summary: "Returns all records for a specific workout.",
    parameters: [
        {
            name: "workoutId",
            in: "path",
            description: "Specify an ID of a workout",
            required: true,
            schema: {
                type: "string",
            }
        }
    ],
    responses: {
        "200": {          
            description: "A list of workouts.",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                example: "OK"
                            },
                            data: {
                                type: "array",
                                items: {
                                    $ref: "#/components/schemas/Workout"
                                }
                            }
                        }
                    }
                }
            }
        },
        "5XX": {
            description: "Failed operations",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            status: {
                                type: "string",
                                example: "FAILED"
                            },
                            data: {
                                type: "object",
                                properties: {
                                    error: {
                                        type: "string",
                                        example: "Some error message"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

module.exports = {
    getWorkouts,
    createWorkouts,
    getRecordForWorkout,
} 