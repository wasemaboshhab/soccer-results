import {sendApiGetRequest, sendApiPostRequest} from "./AppResponse";

import React from "react";
import axios from "axios";
class Login extends  React.Component {

    state= {
        username: "",
        password: "",
        responseFromGetRequest: "",
        responseFromPostRequest: "",
        errorMessage: "",
        userExist: false,
        groupsNames: [],
        renderOption: false
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

    getAllTheTeams=()=> {
        sendApiGetRequest("http://localhost:8989/get-names-groups", {

        }, (response) => {

           // const array = response.data;
            this.setState({
                groupsNames: response.data
            })
        })

    }

    getRequest=()=> {

        sendApiPostRequest("http://localhost:8989/sign-in", {
            username:this.state.username,
            password:this.state.password
        }, (response) => {
            if (response.data.success) {
                this.setState({
                    username: response.data.user.username,
                    userExist: true,
                    renderOption: true
                })
                alert("sign in successfully!");
                this.getAllTheTeams();

            } else {
                if (response.data.errorCode === 1) {
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

    login = () => {
        return (
            <div>
                <div className={"login"}>
                    <input type="text" value={this.state.username} onChange={this.addUserName}
                           placeholder={"username"}/>
                    <br/>
                    <input type="password" value={this.state.password} onChange={this.addUserPassword}
                           placeholder={"password"}/>
                    <br/>


                </div>
                <button type="login" onClick={this.getRequest} disabled={this.state.userExist}>Login</button>

            </div>

        )
    }
       
    render(){
        {
           // let text = this.state.groupsNames.toString();
            return (

                this.state.renderOption ?

                    <select >
                        {
                            this.state.groupsNames.map((team) => {
                                return (
                                    <option>{team}</option>

                                )
                            })
                        }


                    </select>

                : this.login()



        );
    }
    }
}
export default Login;

