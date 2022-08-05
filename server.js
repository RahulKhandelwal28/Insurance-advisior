const express = require('express');
const path  = require('path');
var nodemailer = require('nodemailer');
const dotnev = require('dotenv');


dotnev.config();
let initialPath = path.join(__dirname, "public");
let app = express();

app.use(express.static(initialPath));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(initialPath, "queries.html"));
})

app.post('/mail', (req, res) => {
    const { firstname, lastname, email, contact_number, select_your_insurance_policy, policy_number, Enter_Your_Query_Here } = req.body;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    var mailOptions = {
        from: 'enter sender email here',
        to: 'enter reciever email here',
        subject: 'Message regarding query',
        text: `First name: ${firstname}, \nLast name: ${lastname}, \nEmail: ${email}, \nContact number: ${contact_number}, \nSelect Your Insurance Policy: ${select_your_insurance_policy},
         \nEnter Your Policy Number: ${policy_number}, \nEnter Your Query Here: ${Enter_Your_Query_Here}`
    };





    transporter.sendMail(mailOptions, (err, result) => {
        if (err){
            console.log(err);
            res.json('Opps! it seems like some error occured plz. try again.');
        } else{
            console.log('Email sent: ' + result.response);
            res.json('Email sent' + 'thanks for e-mailing me. I will reply to you within 2 working days');
        }

    })

    exports.someAction = function (request, reply) {
        var postParams = request.payload } 

})


app.listen('3000', () => {
    console.log('listening.....');
})