import React from "react";
const Login = (props) => {
  const update=()=>{
    props.change();
  }
  return (
    <>
      <h1>Login Page</h1>
      <form>
        <p>User Name: <input type="text" name="username" /></p>
        <p>Password: <input type="password" name="userpassword" /></p>
        <p><input type="Submit" value="Login" onClick={update} /></p>
      </form>
    </>);
}
export default Login;