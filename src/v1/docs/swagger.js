const { getWorkouts, createWorkouts, getRecordForWorkout } = require('./workouts.swagger')
const { workoutSchema } = require('./schemas.swagger')

module.exports = { 
  openapi: "3.0.3",
  info: { 
    version: "1.0.0",
    title: "Node-API-Boilerplate", 
    description: "This is just an example made with a Crossfit WOD",
    contact: {
      name: "Adrian Fang",
      email: "username@gmail.com",
      url: "https://google.com"
    }
  },
  servers:[
    {
      url: "http://localhost:3000/api/v1",
      description: "Local server"
    },
    {
      url: "http://app-dev.herokuapp.com/api/v1",
      description: "Dev server"
    },
  ],
  paths: {
    "/workouts" : {
      "get": getWorkouts,
      "post": createWorkouts,
    },
    "/workouts/{workoutId}/records": {
      "get": getRecordForWorkout
    }
  },
  components: {
    schemas: workoutSchema
  } 
};