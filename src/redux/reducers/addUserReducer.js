


export default function addUserReducer(state=[],action) {
        switch (action.type) {
            case "ADD_USER":
                return [...state,{...action.payload}];

          /*  case "DELETE_USER":
                console.log(state);
                return{
                    ...state,
                    users:state.users.filter(user=>console.log(user))
                };*/
            default:
                return state
        }
}