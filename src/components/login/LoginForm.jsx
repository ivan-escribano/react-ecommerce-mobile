import { useContext, useRef } from "react";
import { LoginContext } from "../../context/LoginProvider";
// import users from "../../data/user.json";
const users = [{ username: "ivan", password: "12345" }];
const LoginForm = () => {
  const value = useContext(LoginContext);
  //References of inputs and buttons
  const usernameRef = useRef();
  const passwordRef = useRef();
  const closeRef = useRef();
  // //Login click handle
  // const handleLogin = async (e) => {
  //   e.preventDefault();
  //   const userAuth = verifyUser();
  //   if (userAuth) {
  //     await onLogin();
  //     closeRef.current.click();
  //   }
  // };
  // //Verify user
  // const verifyUser = () => {
  //   const username = usernameRef.current.value;
  //   const password = passwordRef.current.value;
  //   const authUser = users.find(
  //     (userDb) => userDb.username === username && userDb.password === password
  //   );
  //   return authUser;
  // };
  return (
    <>
      <div
        className="modal fade"
        id="loginForm"
        tabIndex="-1"
        aria-labelledby="loginForm"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content p-4">
            <div class="modal-header">
              <h5 class="modal-title">Login</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                ref={closeRef}
              ></button>
            </div>
            <form className="my-3">
              <div className="mb-3">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  aria-describedby="usernameHelp"
                  ref={usernameRef}
                />
                <div id="usernameHelp" className="form-text">
                  We'll never share your data with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  ref={passwordRef}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-color"
                // onClick={handleLogin}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
