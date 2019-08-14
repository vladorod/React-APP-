
import md5 from 'md5';
const API = "https://uxcandy.com/~shapoval/test-task-backend/";
const SORTDER = "sort_direction";
const SORT = "sort_field"
const DEV = "&developer=Vlad";
const PAGE = "page=1";
const API_PAGE = (e) => {return `page=${e}`}

export const loadData = (p = '', dir = '', sortTag = '') => { 
 return dispatch => {    

    fetch(`${API}?${API_PAGE(p)}&${SORTDER}=${dir}&${SORT}=${sortTag}${DEV}`)
            .then(res => res.json())
            .then((res) => { 
               dispatch({
                   type: "CHANGE_DATA",
                   data: res.message.tasks,
                   task_count: res.message.total_task_count
               })
              })

 }
}

export const UpdataData = () => { 
 return dispatch => { 
    fetch(`${API}?${PAGE}${DEV}`)
            .then(res => res.json())
            .then((res) => { 
               dispatch({
                   type: "CHANGE_DATA",
                   data: res.message.tasks,
                   task_count: res.message.total_task_count
               })
              })

 }
}
export const addTask = (form) => { 
 return dispatch => {    
     fetch(`${API}create?&${DEV}`, {  
         method: 'post',
         headers: {
            "content-type": "application/x-www-form-urlencoded"
          },
          body: `email=${form.email}&text=${form.text}&username=${form.username}`
      })
      .then(res => res.json())  
      .then(function (data) {  
      })  
      .catch(function (error) {  
        console.log('Request failed', error);  
      });

 }
}
export const editTask = (status, text, id) => { 
 return dispatch => {    
     let massage = `status=${status}&text=${text}&token=beejee`;
     fetch(`${API}edit/${id}${DEV}`, {  
         method: 'post',
         headers: {
            "content-type": "application/x-www-form-urlencoded"
          },
          body: `${massage}&signature=${md5(massage)}`
      })
      .then(res => res.json())  
      .then(function (data) {  
      })  
      .catch(function (error) {  
        console.log('Request failed', error);  
      });
      dispatch({
        type: "EDIT_DATA",
        id: id,
        status: status,
        text: text
    })
    }
}      


export const setUser = (login) => { 
 return dispatch => { 
    dispatch({
        type: "CHENGE_LOGIN_FROM_DATA",
        login: login,
    })
 }
}
 

