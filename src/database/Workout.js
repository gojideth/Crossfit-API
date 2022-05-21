const DB = require('./db.json');
const {saveToDatabase} = require('./utils');


const getAllWorkouts = ()=>{
  return DB.workouts;
};

const getWorkoutById = (id)=>{
  const workout = DB.workouts.find((workout)=>{
    workout.id === id
  });
  if(!workout){
    return;
  }
  console.log(workout);
  return workout;
}
const createNewWorkout = (entryWorkout)=>{
  const isCreatedAlready = DB.workouts.findIndex(
    (workout) =>{
      workout.name === entryWorkout.name
    }
  )>-1;
  if(isCreatedAlready){
    return;
  }
  DB.workouts.push(entryWorkout);
  saveToDatabase(DB);
  return entryWorkout;

}



module.exports = {getAllWorkouts, createNewWorkout, getWorkoutById};