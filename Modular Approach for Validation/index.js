const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const Validator = require("./utils/validate")


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
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}


app.post('/register', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let confirmPassword = req.body.confirmPassword;
    let mobile = req.body.mobile;
    let email = req.body.email;
    let error = []
    let validator = new Validator();

    validator.isEmail(email,error)
    validator.isEmpty(username,error)
    validator.isEmpty(email,error)
    validator.isEmpty(mobile,error)
    validator.isEmpty(password,error)
    validator.isEmpty(confirmPassword,error)
    validator.isUsername(username,error)
    validator.isPassword(password,confirmPassword,error)
    validator.isMobile(mobile,error)

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
        sucess: true,
        message: "Thankyou for feedback, We will cosider ASAP"
    })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})