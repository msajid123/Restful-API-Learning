class Validator {
    isEmail(email,error) {
        if (!email.includes("@")) {
            // console.log( 'checking',email.includes("@"),"  email: ",email)
            error.push("invalid email")
        }
        else {
            let recipient = email.substring(0, email.indexOf("@")), domain = email.substring(email.indexOf("@") + 1, email.length)
            if (recipient.length < 3 || domain.length < 3) {
                error.push("Invalid Email");
            }
        }
        return error;
    }
    isUsername(username,error) {
        if (username.indexOf(" ") !== -1) {
            error.push("username should not have space")
        }
        if (username.length < 3 || username.length > 15) {
            error.push("username length must between 3 to 15")
        }
        return error;
    }
    isPassword(password, confirmPassword,error) {
        if (password !== confirmPassword) {
            error.push("Password not match")
        }
        if (password.length < 8) {
            error.push("password have atleast 8 characters")
        }
        return error;
    }
    isMobile(mobile,error) {
        if (mobile.length < 11 || mobile.length > 14) {
            error.push("Please enter valid mobile number")
        }
        if (!(mobile[0] === "0" || mobile.substr(0, 3) === "+92" || mobile.substr(0, 2) === "92")) {
            error.push("Please enter valid mobile number")
        }
        return error;
    }
    isEmpty(field,error) {
        if (field.length == 0) {
            error.push("Fields should not be empty")
        }
        return error;
    }
}

module.exports=Validator;