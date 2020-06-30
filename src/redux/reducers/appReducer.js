import {APP_THEME, APP_LANGUAGE} from '../constants/constants'
import I18n from 'react-native-i18n'

const initial_state = {
    theme: 'light',
    language: 'en',
}

const appReducer = (state = initial_state, action) => {
    
    switch(action.type){
        case APP_THEME: 
            return {
                ...state,
                theme: action.payload
            }
        break
        case APP_LANGUAGE:
            I18n.locale = action.payload
            return {
                ...state,
                language: action.payload
            }
        break
        default:
            return state
        break
    }


}

export default appReducer