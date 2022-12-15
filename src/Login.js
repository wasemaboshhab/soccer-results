import {sendApiGetRequest, sendApiPostRequest} from "./AppResponse";

import React from "react";
class Login extends  React.Component {

    state= {
        username: "",
        password: "",
        responseFromGetRequest: "",
        responseFromPostRequest: "",
        errorMessage: ""
    }

    addUserName = (e) => {
        this.setState({
            username: e.target.value
        })
    }

    addUserPassword = (e) => {
        this.setState({
            password: e.target.value
        })
        console.log(this.state)
    }


    check = () =>{
        if(this.state.username.length>0){
            alert("hello")
        }
    }

    getRequest=()=> {
        //let username=this.state.username;
        // let password=this.state.password;

        sendApiPostRequest("http://localhost:8989/sign-in", {
            username:this.state.username,
            password:this.state.password
        }, (response) => {

            if (response.data.success) {
                this.setState({
                    username: response.data.user.username
                })
                alert(response.data.user.username)
            } else {
                if (response.data.errorCode == 1) {
                    this.setState({
                        errorMessage: "No Such User"
                    })
                } else if (response.data.errorCode == 2) {
                    this.setState({
                        errorMessage: "Password Incorrect"
                    })

                }
            }

        })
        if(this.state.errorMessage !== ""){
            alert(this.state.errorMessage)
        }
    }

    render(){
        return (
            <div>
                <div className={"login"}>
                    <input type = "text" value={this.state.username} onChange={this.addUserName} placeholder={"username"}/>
                    <br/>
                    <input  type = "text" value={this.state.password} onChange={this.addUserPassword} placeholder={"password"}/>
                    <br/>

                </div>
                <button type = "login"  onClick={this.getRequest} disabled={false}>Login</button>
            </div>
        );

    }
}
export default Login;