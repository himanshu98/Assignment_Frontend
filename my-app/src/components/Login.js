import React from "react";
const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <form>
        <p>User Name: <input type="text" name="username" /></p>
        <p>Password: <input type="password" name="userpassword" /></p>
        <p><input type="Submit" value="Login" /></p>
      </form>
    </>);
}
export default Login;