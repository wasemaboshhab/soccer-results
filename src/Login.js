import React from "react";
function Login() {
    return (
        <div>
            <input placeholder={"username"}/>
            <input placeholder={"password"}/>
            <br/>
            <button disabled={true}>Login</button>


        </div>
    );

}

export default Login;