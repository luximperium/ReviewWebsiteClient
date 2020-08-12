export default function validateSignup(username, email, password) {
    let errors = {}

    
    if(!username) {
        error.username = "Username is required"
    } else if (!/^(?=.*[A-Za-z])((?=.*\d)|(?=.*[@$!%*#?&]))[A-Za-z\d@$!%*#?&]{4,}$/.test(username)) {
        error.username = "Username is invalid"
    }
    if(!email) {
        error.email = "Email is required"
    } else if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) {
        error.email = "Email is invalid"
    }
    if(!password) {
        error.password = "Password is required"
    } else if (password.length < 5) {
        error.password = "Password must be 5 or more characters"
    }


    return errors;
}