export default function validateSignup(username, email, password) {
    let errors = {}

    console.log(username)
    console.log(email)
    console.log(password)
    
    if(!username) {
        errors.username = "Username is required"
    } else if (!/^(?=.*[A-Za-z])((?=.*\d)|(?=.*[@$!%*#?&]))[A-Za-z\d@$!%*#?&]{4,}$/.test(username)) {
        errors.username = "Username is invalid"
    }
    if(!email) {
        errors.email = "Email is required"
    } else if(!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) {
        errors.email = "Email is invalid"
    }
    if(!password) {
        errors.password = "Password is required"
    } else if (password.length < 5) {
        errors.password = "Password must be 5 or more characters"
    }

    console.log(errors)
    return errors;
}