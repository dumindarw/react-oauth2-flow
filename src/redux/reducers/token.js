import {SAVE_TOKEN} from '../actionTypes'

const initialState = {
    accessToken: '',
    expiresIn: 0,
    refreshExpiresIn: 0,
    refreshToken: ''
}

export default function(state = initialState, action){

    switch(action.type){
        case SAVE_TOKEN:{
            const {access_token: accessToken,  expires_in: expiresIn,  refresh_expires_in: refreshExpiresIn, refresh_token: refreshToken} = action.payload.data.data;
            return {
                accessToken: accessToken,
                expiresIn: expiresIn,
                refreshExpiresIn: refreshExpiresIn,
                refreshToken: refreshToken
            }
        }
        default:
            return state;
    }

}