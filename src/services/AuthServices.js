import AsyncStorage from '@react-native-community/async-storage';
import {fetchAPI, BACKEND_URL, storage} from '../helpers/Utils';

// Example auth services, delete it when not in use
export const exampleLogin = async (user, password) => {
    const url = BACKEND_URL+'api/url'

    const body = JSON.stringify({
        device_id: 'device_id',
        user: user,
        password: password
    })
    
    return fetchAPI(url, body, 'POST', false)
        .then( async (response) => {
            if(response.status === 201){
                AsyncStorage.setItem('AUTH_DATA', JSON.stringify(response.data));
            }
            return response
        });
}