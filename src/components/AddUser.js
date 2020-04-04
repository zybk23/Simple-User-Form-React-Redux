import React, {Component} from 'react';
import posed from "react-pose";
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as  addUserActions from "../redux/actions/addUserActions"
import axios from "axios"
import * as userActions from "../redux/actions/userActions";
import alertify from "alertifyjs"





const Animation=posed.div({
    visible:{
        opacity:1,
        applyAtStart:{
            display:"block"
        }
    },
    hidden:{
        opacity:0,
        applyAtStart: {
            display:"none"
        }
    }
});





class AddUser extends Component {
    state={
        visible:true,
        name:"",
        department:"",
        salary:"",

    };

    ChangeForm=()=>{
        this.setState({
            visible:!this.state.visible
        })
    };

    validateFrom=(e)=>{
        const{name,salary,department}=this.state;

        if(name==="" ||salary==="" ||department===""){
            return false;

        }
        else{

            return true;
        }
    };

    ChangeUser=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    };

    onSubmitUsers=async (e)=>{
        e.preventDefault();
        const{name,department,salary}=this.state;

        const newUser={
            name:name,
            department,
            salary
        };

        this.setState({
            name:"",
            department:"",
            salary: ""
        });

        if(!this.validateFrom()){
            alertify.error("Boş alanları doldurunuz")
            this.setState({
                error:true

            });
            return ;
        }

        const response=await axios.post("http://localhost:3000/users",newUser)
        alertify.success("Başarıyla eklendi");
        this.props.actions.AddUserTo(response.data);

        //Redirect
        this.props.history.push("/");

    };

    componentDidMount() {
        this.props.actions.getUser()
    }


    render() {
        const{visible,name,department,salary}=this.state;
        console.log(this.props.addUser);
        return (
            <div className={"col-md-8 mb-4"}>
                <button onClick={this.ChangeForm}
                    className={"btn btn-secondary mb-3"}>{visible?"Hide Form":"Show Form"}</button>
                <Animation pose={visible?"visible":"hidden"}>
                <div className="card">
                    <div className="card-header">Add User From</div>
                    <div className="card-body">
                        <form action="" onSubmit={this.onSubmitUsers}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text"
                                name={"name"}
                                value={name}
                                onChange={this.ChangeUser}
                                placeholder={"Enter the name"}
                                className={"form-control"}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="department">Department</label>
                                <input type="text"
                                       name={"department"}
                                       value={department}
                                       onChange={this.ChangeUser}
                                       placeholder={"Enter the department"}
                                       className={"form-control"}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">Salary</label>
                                <input type="text"
                                       name={"salary"}
                                       value={salary}
                                       onChange={this.ChangeUser}
                                       placeholder={"Enter the salary"}
                                       className={"form-control"}/>
                            </div>
                            <button type={"submit"} className={"btn btn-danger mt-3"}>Add User</button>
                        </form>
                    </div>
                </div>
                </Animation>
            </div>
        );
    }
}

function mapStateToProps(state) {
        return{
            addUser:state.addUserReducer
        }
}

function mapDispatchToProps(dispatch){
    return{
        actions:{
            getUser:bindActionCreators(userActions.getUser,dispatch),
            AddUserTo:bindActionCreators(addUserActions.AddUser,dispatch)
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddUser) ;