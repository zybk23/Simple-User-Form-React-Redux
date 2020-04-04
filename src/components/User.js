import React, {Component} from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import * as userActions from "../redux/actions/userActions"
import * as deleteUserActions from "../redux/actions/deleteUserActions"
import posed from "react-pose";
import axios from "axios"




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


class User extends Component {
    state={
        isVisible:true
    };

    Hiden=()=>{
      this.setState({
          isVisible:!this.state.isVisible
      })
    };
    componentDidMount() {
        this.props.actions.getUser()
    }

    DeleteFromBase=async (id)=>{

        await axios.delete(`http://localhost:3000/users/${id}`);

        this.props.actions.deleteUser(id)
    };

    //removeItem=(id)=>{

    //};



    render() {
        const{id,name,department,salary}=this.props;
        const{isVisible}=this.state;
        return (
            <div className={"col-md-8 mb-4"}>
                <div  key={id} className="card mt-3">


                    <div className="card-header d-flex justify-content-between">
                        <h4 onClick={this.Hiden} style={{cursor:"pointer"}}
                            className={"d-inline"}>{name}</h4 >
                        <i  onClick={()=> this.DeleteFromBase(id)}
                            className={"far fa-trash-alt"} style={{cursor:"pointer"}}></i>
                    </div>
                    <Animation pose={isVisible?"visible":"hidden"}>
                    <div className="card-body">
                            <div className="card-text">Maaş:{salary}</div>
                            <div className="card-text mt-2">Department:{department}</div>
                        </div>
                    </Animation>

                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        users:state.usersReducer,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        actions:{
            getUser:bindActionCreators(userActions.getUser,dispatch),
            deleteUser:bindActionCreators(deleteUserActions.deleteUser,dispatch)
        }
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(User) ;

