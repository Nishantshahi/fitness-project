import { useState, useEffect } from "react";
import axios from "axios";

function WorkoutDetail() {
  const [workouts, setWorkouts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/workoutData")
      .then((response) => {
        setWorkouts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="container">
      <div className="text-center">
        <h3 class="display-4 my-5">Workouts</h3>
      </div>
      <table class="table text-center">
        <thead>
          <tr>
            <th scope="col">Workout Name</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Category</th>
            <th scope="col">Workout Info</th>
            <th scope="col">Repeat Days</th>

            <th scope="col">Edit or Delete</th>
          </tr>
        </thead>
        <tbody>
          {workouts.map((workout, index) => {
            return (
              <tr>
                <td>{workout.workoutName}</td>
                <td>{workout.description}</td>
                <td>{workout.duration}</td>
                <td>{workout.category}</td>
                <td>{workout.workoutInfo}</td>
                <td>{workout.repeatDays}</td>
                <td>
                  <button
                    className="btn btn-primary me-3"
                    style={{ backgroundColor: "#007BFE" }}
                  >
                    Edit
                  </button>
                  <button class="btn btn-danger">Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default WorkoutDetail;
