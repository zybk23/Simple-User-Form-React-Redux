

export function getUserSuccess(data) {
    return {type:"GET_USERS",payload:data}
}




export function getUser() {
    return  function (dispatch){
        let url ="http://localhost:3000/users"

        return fetch(url)
            .then(response=>response.json())
            .then(result=>{
                dispatch(getUserSuccess(result))
            })
    }

}