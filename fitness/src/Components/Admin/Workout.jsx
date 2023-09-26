import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import WorkoutDetail from "./WorkoutDetail";
function Workout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:8080/create-workout", data)
      .then((response) => {
        console.log(response);
        if (response.data.message === "Workout Already Exist") {
          alert("Workout Already Exist, Try with different workout name");
        } else {
          alert("Workout Created Successfully");
        }
      })
      .catch((error) => {
        alert("Server Issue ,Please try again later");
        console.log(error);
      });
  };
  return (
    <div>
      <div className="text-center">
        <h3 class="display-4 my-5">Create workout</h3>
      </div>
      <form className="mx-1 mx-md-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-row align-items-center ">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example1c"
              className="form-control"
              name="workoutName"
              {...register("workoutName", {
                required: "Name of Workout is required",

                maxLength: {
                  value: 40,
                  message: "Length must be less than 40 ",
                },
              })}
            />
            <label className="form-label" htmlFor="form3Example1c">
              Workout Name
            </label>
          </div>
        </div>
        <div>
          <p className="ms-3 text-danger">{errors.workoutName?.message}</p>
        </div>

        <div className="d-flex flex-row align-items-center ">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="description"
              className="form-control"
              name="description"
              {...register("description", {
                required: "Description is required",

                maxLength: {
                  value: 100,
                  message: "Cannot exceed 100 Characters ",
                },
              })}
            />
            <label className="form-label" htmlFor="description">
              Description
            </label>
          </div>
        </div>
        <div>
          <p className="ms-3 text-danger">{errors.description?.message}</p>
        </div>

        <div className="d-flex flex-row align-items-center ">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="number"
              id="description"
              className="form-control"
              name="duration"
              {...register("duration", {
                required: "Duration is required",
                pattern: {
                  value: /^[0-9]*$/i,
                  message: "Only numbers are allowed",
                },
                max: {
                  value: 60,
                  message: "Cannot exceed 60",
                },
              })}
            />
            <label className="form-label" htmlFor="duration">
              Duration in Minutes
            </label>
          </div>
        </div>
        <div>
          <p className="ms-3 text-danger">{errors.duration?.message}</p>
        </div>

        <div className="d-flex flex-row align-items-center">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <select
              id="category"
              name="category"
              required
              className="form-control"
              {...register("category", {
                required: "Category is required",
              })}
            >
              <option value="Strength">Strength</option>
              <option value="Cardio">Cardio</option>
            </select>
            <label className="form-label" htmlFor="category">
              Category{" "}
            </label>
          </div>
        </div>
        <div>
          <p className="ms-3 text-danger">{errors.category?.message}</p>
        </div>

        <div className="d-flex flex-row align-items-center">
          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <textarea
              type="text"
              id="form3Example3c"
              name="workoutInfo"
              className="form-control"
              {...register("workoutInfo", {
                required: "Workout Information is required",
              })}
            />
            <label className="form-label" htmlFor="form3Example3c">
              Workout Information
            </label>
          </div>
        </div>
        <div>
          <p className="ms-3 text-danger">{errors.workoutInfo?.message}</p>
        </div>

        <div className="d-flex flex-row align-items-center">
          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <textarea
              type="text"
              id="form3Example3c"
              name="repeatDays"
              className="form-control"
              {...register("repeatDays", {
                required: "Workout Information is required",
                maxLength: {
                  value: 100,
                  message: "Cannot exceed 100 Characters ",
                },
                minLength: {
                  value: 6,
                  message: "Cannot be less than 6 Characters ",
                },
              })}
            />
            <label className="form-label" htmlFor="form3Example3c">
              Repeating Days
            </label>
          </div>
        </div>
        <div>
          <p className="ms-3 text-danger">{errors.repeatDays?.message}</p>
        </div>

        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Create Workout
          </button>
        </div>
      </form>
      <WorkoutDetail />
    </div>
  );
}

export default Workout;
