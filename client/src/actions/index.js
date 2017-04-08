import axios from 'axios';

export function login(obj){
    return dispatch => {
        localStorage.setItem('username', obj.username);
        return axios.post('/api/auth', obj).then(res => {
            console.log(res);
        });
    }
}