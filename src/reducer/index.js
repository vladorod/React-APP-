let defaultState={ 
    data: [],
    task_count: "",
    login: "",
    password: "",
    users: [
        {username: "admin", password: "123"}
    ],
}

const mainReduser = (state=defaultState, {type, data, login, task_count, form, id, status, text}) => {
    switch (type) {
        case "CHANGE_DATA":
            let i = 0;
            return { 
                ...state,
                data,
                task_count,
                id: i++
            }
        case "CHENGE_LOGIN_FROM_DATA":
            return { 
                ...state,
                login: login,
            }
        case "ADD_TASK": 
           state.push(form)
           return { 
               ...state
           }  
        
        case "EDIT_DATA": 
         state.data.forEach(e => {
               if (e.id === id) { 
                   e.status = status;
                   e.text = text;
               }
           });
           return {...state, id, status, text}  

        default:
            return {...state};
    }
 }

 export default mainReduser;