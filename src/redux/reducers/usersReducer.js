


export  default function usersReducer(state=[],action) {
    switch (action.type) {
        case "GET_USERS":
            return action.payload;

        case "DELETE_USER":

            const newState=state.filter(user=>user.id!==action.payload)
            return newState;

        case "ADD_USER":
            return [...state,{...action.payload}];

        default:
            return state
        }
}