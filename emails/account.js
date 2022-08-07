const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(SENDGRID_API_KEY)

const sendEmailVerificationEmail = (email, name, verificationCode) => {
    sgMail.send({
        to: email,
        from: 'osmdrcn@gmail.com',
        subject: 'Thanks for joining us... ',
        html: `<h1>Email Verification</h1>
        <h2>Hello ${name}</h2>
        <p>Thank you for subscribing. Please verify your email by clicking on the following link</p>
       <a href=http://localhost:3000/users/verify/${verificationCode}> Click here</a>

        </div>`,
    })
}
{/* <a href=http://localhost:5000/api/v1/users/verify/${verificationCode}> Click here</a> */ }


const sendEventAttendanceMail = (email, name, eventName) => {
    sgMail.send({
        to: email,
        from: 'osmdrcn@gmail.com',
        subject: `${eventName}`,
        html: `<h1>EVENT : ${eventName}</h1>
        <h2>Hello ${name}</h2>
        <p>You have been registered as an attendee for ${eventName}</p>
        </div>`,
    })
}

const sendEventCancelMail = (email, name, eventName, message) => {
    sgMail.send({
        to: email,
        from: 'osmdrcn@gmail.com',
        subject: `CANCELLED : ${eventName}`,
        html: `<h1>EVENT CANCELLED: ${eventName}</h1>
        <h2>Hello ${name}</h2>
        <p>${message}</p>
        </div>`,
    })
}


module.exports = { sendEmailVerificationEmail, sendEventAttendanceMail, sendEventCancelMail }