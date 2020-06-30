
export const loginValidation = (email, password) => {

    let error = null

    if (!email) {
        error = 'Email address or Username is required.'
    } else if (!password) {
        error = 'Password is required.'
    } else {
        error = null
    }
    
    return error ? error : false
}
