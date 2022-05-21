const Workout = require("../database/Workout");
const { v4: uuid } = require("uuid");

const getAllWorkouts = () => {
  const allWorkouts = Workout.getAllWorkouts();
  //console.log(allWorkouts);
  return allWorkouts;
};

const getOneWorkout = (id) => {
  const workoutById = Workout.getWorkoutById(id);
  return workoutById;
};

const createNewWorkout = (newWorkout) => {
  //Here we insert a workout but we add new properties to it
  const workoutToInsert = {
    ...newWorkout,
    id: uuid(),
    createdAt: new Date().toLocaleDateString("en-US", {
      timeZone: "UTC",
    }),
    updatedAt: new Date().toLocaleDateString("en-US", {
      timeZone: "UTC",
    }),
  };
  const createdWorkout = Workout.createNewWorkout(workoutToInsert);
  return createdWorkout;
};

const updateOneWorkout = () => {
  return;
};

const deleteOneWorkout = () => {
  return;
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
