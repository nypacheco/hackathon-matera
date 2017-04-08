import { ADD_ACTION } from './types';

export function addAction(obj){
    return{
        type: ADD_ACTION,
        obj
    }
};