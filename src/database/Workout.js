const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getWorkoutById = (id) => {
  const workout = DB.workouts.find((workout) => {
    if (workout.id === id) {
      return workout;
    } else {
      return;
    }
  });
  return workout;
};
const createNewWorkout = (entryWorkout) => {
  const isCreatedAlready =
    DB.workouts.findIndex((workout) => {
      workout.name === entryWorkout.name;
    }) > -1;
  if (isCreatedAlready) {
    return;
  }
  DB.workouts.push(entryWorkout);
  saveToDatabase(DB);
  return entryWorkout;
};

const deleteWorkout = (workoutId) => {
  const exist = DB.workouts.findIndex((workout) => {
    workout.id === workoutId;
  });
  if (exist === -1) {
    return;
  }
  DB.workouts.splice(exist, 1);
  
};

module.exports = { getAllWorkouts, createNewWorkout, getWorkoutById };
