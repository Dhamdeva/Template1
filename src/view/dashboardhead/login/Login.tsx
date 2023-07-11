import { PersonFill, LockFill } from "react-bootstrap-icons";
import { Dashboardhead } from "../headoption/Dashboardhead";

export function Login() {
  return (
    <div className="login">
      <Dashboardhead />

      <div className="d-flex align-items-center justify-content-center mainpagehead">
        <div className="signup-body "></div>
        <div className="oo col-lg-9  col-11"></div>

        <div className="back col-lg-9  col-11">
          <form className="form-body">
            <div className="d-flex align-items-center justify-content-center w-100">
              <div className="form-img d-flex align-items-center justify-content-center">
                <img
                  className="img-fluid"
                  src={require("../../../asset/sample1/login.png")}
                ></img>
              </div>

              <div className=" form-content ">
                <h2 className="mb-2">𝐋𝐎𝐆𝐈𝐍</h2>

                <div className="input-div">
                  <i>
                    <PersonFill />
                  </i>
                  <input
                    className="input-field"
                    placeholder="name , email , number"
                    type="text"
                  />
                  <span className="bar"></span>
                </div>

                <div className="input-div">
                  <i>
                    <LockFill />
                  </i>
                  <input
                    className="input-field"
                    placeholder="Password"
                    type="password"
                  />
                  <span className="bar"></span>
                </div>

                <div className="col-12 mt-3 d-flex justify-content-center">
                  <button className="button col-md-4 col-8" type="submit">
                    Submit
                  </button>
                </div>
                <p className="mt-4 text-white">I am already a member</p>
                <a className="text-decoration-none text-white fs-5 " href="#">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <Dashboardfooter /> */}
    </div>
  );
}
