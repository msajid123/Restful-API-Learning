const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.use(express.json())


app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
})

app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    if (password == "1234" && username == "sajid") {
        res.status(200).json({
            sucess: true,
            message: "Successful Login",
            address: "KHI",
            state: "PK"
        })
    }
    else {
        res.status(401).json({
            sucess: false,
            message: "Invalid Credentials"
        })
    }
})

let randomGenerator = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4()  + s4() + s4() + s4() + s4() + s4() + s4();
}


app.post('/register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let error = []
    if (username.length == 0 || email.length == 0 || mobile.length == 0 || password.length == 0) {
        error.push("Fields should not be empty")
    }
    if (password !== confirmPassword) {
        error.push("Password not match")
    }
    if (password.length < 8) {
        error.push("password have atleast 8 characters")
    }
    if (username.indexOf(" ") !== -1) {
        error.push("username should not have space")
    }
    if (username.length < 3 || username.length > 15) {
        error.push("username length must between 3 to 15")
    }
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
    if (mobile.length < 11 || mobile.length > 14) {
        error.push("Please enter valid mobile number")
    }
    if (!(mobile[0] === "0" || mobile.substr(0, 3) === "+92" || mobile.substr(0, 2) === "92")) {
        error.push("Please enter valid mobile number")
    }
    if (error.length > 0) {
        res.status(401).json({
            sucess: false,
            error
        })
    }
    else {
        res.status(201).json({
            sucess: true,
            id: randomGenerator()
        })
    }
    // if() {
    //     res.status(401).json({
    //         sucess:false,
    //         message:"Invalid Credentials"
    //     })
    // }
})

/**
 * COMPLAINS @param title fullname phoneNo city address comment dop status action
 */
app.post('/complains', (req, res) => {
    let body = {
        title: req.body.title,
        fullname: req.body.fullname,
        city: req.body.city,
        address: req.body.address,
        comment: req.body.comment,
        dop: req.body.dop,
        status: req.body.status,
        action: req.body.action,
    }
    // OR ALTERNATIVE METHOD
    // let title = req.body.title;
    // let fullname = req.body.fullname;
    // let city = req.body.city;
    // let address = req.body.address;
    // let comment = req.body.comment;
    // let dop = req.body.dop;
    // let status = req.body.status;
    // let action = req.body.action;
    res.json({
        sucess:true,
        message: "Thankyou for feedback, We will cosider ASAP"
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})