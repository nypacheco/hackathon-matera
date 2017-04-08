import axios from 'axios';
/*import { ADD_ACTION } from './types';*/

export function login(obj){
    return dispatch => {
        return axios.post('/api/auth', obj).then(res => {
            console.log(res);
        });
    }
}