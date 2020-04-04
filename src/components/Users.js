import React, {Component} from 'react';
import User from "./User";
import {connect} from  "react-redux"
import {bindActionCreators} from "redux";
import * as userActions from "../redux/actions/userActions"



class Users extends Component {

    componentDidMount() {
        this.props.actions.getUsers()
    }


    render() {
        //console.log(this.props.users)
        return (
            <div>
                {
                    this.props.users.map(user=>(
                        <User
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            department={user.department}
                            salary={user.salary}
                        />

                    ))
                }


            </div>
        );
    }
}



function mapStateToProps(state){
    return{
        users:state.usersReducer
    }
}

function mapDispatchToProps(dispatch) {

    return{
        actions:{
            getUsers:bindActionCreators(userActions.getUser,dispatch)
        }
    }

}



export default connect(mapStateToProps,mapDispatchToProps)(Users) ;