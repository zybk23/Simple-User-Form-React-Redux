import React, {Component} from 'react';
import '../App.css';
import Navbar from "./Navbar";
import Users from "./Users";
import AddUser from "./AddUser";
import {Route,Switch} from "react-router-dom"
import Contribute from "../pages/Contribute";




class App extends Component {

  render(){

  return (
    <div className="App ">
        <Navbar title={"User App 2"}/>
        <div className={"container"}>
            <Switch>
                <Route path={"/"} exact component={Users}/>
                <Route path={"/add"} exact component={AddUser}/>
                <Route path={"/github"} exact component={Contribute}/>

            </Switch>
        </div>
  </div>
  )};
}

export default App;
