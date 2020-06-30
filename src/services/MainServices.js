import {fetchAPI, BACKEND_URL} from '../helpers/Utils';


// Example main services, delete it when not in use
export const example = (body) => {
    const url = BACKEND_URL+'/api/url'
    const body = JSON.stringify(body)

    return fetchAPI(url, body, 'GET', false)
        .then((response) => {
            return response
        });
}
