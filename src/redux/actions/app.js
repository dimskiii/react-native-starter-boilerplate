import { APP_THEME, APP_LANGUAGE } from '../constants/constants'

export function appTheme(payload) {
    return {
        type: APP_THEME,
        payload: payload
    }
}

export function appLanguage(payload) {
    return {
        type: APP_LANGUAGE,
        payload: payload
    }
}
