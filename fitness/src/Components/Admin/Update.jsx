import { useState, useEffect } from "react";

function Update({ currRecord }) {
  let initialValues = {
    name: "",
    email: "",
    mobile: "",
    password: "",
    repeatPassword: "",
  };
  const [data, setData] = useState(initialValues);
  useEffect(() => {
    setData(currRecord);
  }, [currRecord]);
  const handleEdit = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setData({ ...data, [name]: value });
  };
  const handleSubmit = () => {
    alert("update");
  };
  return (
    <div>
      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
        <div className="d-flex flex-row align-items-center ">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="form3Example1c"
              className="form-control"
              name="userName"
              value={data.name}
              onChange={handleEdit}
            />
            <label className="form-label" htmlFor="form3Example1c">
              User Name
            </label>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center ">
          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="text"
              id="mobile"
              className="form-control"
              name="mobile"
              value={data.mobile}
              onChange={handleEdit}
            />
            <label className="form-label" htmlFor="mobile">
              Mobile Number
            </label>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="email"
              id="form3Example3c"
              name="email"
              className="form-control"
              value={data.email}
              onChange={handleEdit}
            />
            <label className="form-label" htmlFor="form3Example3c">
              Your Email
            </label>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="password"
              name="password"
              id="form3Example4c"
              className="form-control"
              value={data.password}
              onChange={handleEdit}
            />
            <label className="form-label" htmlFor="form3Example4c">
              Password
            </label>
          </div>
        </div>

        <div className="d-flex flex-row align-items-center">
          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
          <div className="form-outline flex-fill mb-0">
            <input
              type="password"
              name="confirmPassword"
              id="form3Example4cd"
              className="form-control"
              value={data.password}
              onChange={handleEdit}
            />
            <label className="form-label" htmlFor="form3Example4cd">
              Repeat your password
            </label>
          </div>
        </div>
        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
          <button type="submit" className="btn btn-primary btn-lg">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default Update;
