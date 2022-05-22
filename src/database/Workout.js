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

/**DB.workouts.forEach((workout)=>{
  console.log(workout.id + "--" + typeof workout.name + "---" + workout.name); 
});
const test = DB.workouts.find((workout) => {
  if (workout.name === "Perreo 2 Testeo") {
    return workout;
  } else {
    return;
  }
});
console.log("---> " + test.name);*/

module.exports = { getAllWorkouts, createNewWorkout, getWorkoutById };
