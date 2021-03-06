export default function validateLogin(username, password) {
    let errors = {};

    if(!username) {
        errors.username = "Username is required"
    } else if (!/^(?=.*[A-Za-z])((?=.*\d)|(?=.*[@$!%*#?&]))[A-Za-z\d@$!%*#?&]{4,}$/.test(username)) {
        errors.username = "Username is invalid"
    }
    if(!password) {
        errors.password = "Password is required"
    } else if (password.length < 5) {
        errors.password = "Password must be 5 or more characters"
    }

    return errors;
}