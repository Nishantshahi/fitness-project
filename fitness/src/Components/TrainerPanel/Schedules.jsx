import CreatePlan from "./CreatePlan";

export default function Schedule() {
  return (
    <div className="container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Mobile</th>
            <th scope="col">Location</th>
            <th scope="col">Workout Plan</th>
            <th scope="col">User Calories Burnt</th>
            <th scope="col">Edit Schedule</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Mark</td>

            <td>Otto</td>
            <td>@mdo</td>
            <td>500</td>
            <td>
              <button class="btn btn-primary mx-3">Edit </button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Mark</td>
            <td>Thornton</td>
            <td>@fat</td>
            <td>500</td>

            <td>
              <button class="btn btn-primary mx-3">Edit </button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>Mark</td>

            <td>the Bird</td>
            <td>@twitter</td>
            <td>500</td>

            <td>
              <button class="btn btn-primary mx-3">Edit </button>
              <button class="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <CreatePlan />
    </div>
  );
}
