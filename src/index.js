require("dotenv").config();
const express = require("express");

//Importing routers
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/v1/workouts", v1WorkoutRouter);


app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});