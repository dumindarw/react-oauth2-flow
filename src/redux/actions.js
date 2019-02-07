import {SAVE_TOKEN} from './actionTypes'

export const saveToken = data => ({
    type: SAVE_TOKEN,
    payload:{
         data
    }
});