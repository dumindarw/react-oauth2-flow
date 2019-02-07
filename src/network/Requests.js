import { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux'
import {saveToken} from '../redux/actions'
import {AUTH} from '../constants'

class Requests extends Component{

    static loginRequest = (username, password, context) => {

        axios.defaults.baseURL = AUTH.KEYCLOAK_BASE_URL;
    
        const requestBody = `username=${username}&password=${password}&grant_type=password`;
           
        const headers = {
                'Authorization': `Basic ${AUTH.KEYCLOAK_AUTH_HEADER_VALUE}`,
                'Content-Type': 'application/x-www-form-urlencoded'
        }
            
        axios.post(AUTH.KEYCLOAK_TOKEN_EP, requestBody, {headers : headers})
        .then(function(data){
            context.props.saveToken(data)
        })
        .catch(function(error){
            console.error(error)
        });
    
      }
   
}

export default connect(
    null,
    {saveToken}
)(Requests)
