import express from 'express';
import nodemailer from 'nodemailer';
const routes = express.Router();

routes.get('/', (req, res)=>{
    // console.log("Home Page");
    res.render('index');
});

routes.get('/career', (req, res)=>{
    // console.log("Career Page");
    res.render('careers');
});

routes.get('/about', (req, res)=>{
    // console.log("About Page");
    res.render('about');
});

routes.get('/services', (req, res)=>{
    // console.log("Service Page");
    res.render('services');
});

routes.get('/contact', (req, res)=>{
    // console.log("Contact Page");
    res.render('contact');
});

routes.post('/submit-contactform', (req, res) => {
    console.log("Contact Form Submitted");
    console.log(req.body);

    // Extracting form data from request body
    const { name, email, subject, message } = req.body;

    // Create the email transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'noreply.ssoffice@gmail.com',
            pass: 'rdaj oitr lbft sbwa' 
        }
    });

    // Email options for sending the email to the recipient
    const mailOptions = {
        from: email,
        to: 'ca@ssoffice.in', // recipient email
        subject: `Contact Form Submission: ${subject}`,
        text: `Subject: ${subject}\nYou have a new message from ${name} (${email}):\n\n${message}`
    };

    // Send the email to the recipient
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        } else {
            console.log('Email sent to recipient: ' + info.response);

            // Email options for sending the confirmation to the sender
            const confirmationMailOptions = {
                from: 'noreply.ssoffice@gmail.com', // your email
                to: email, // sender's email
                subject: 'Thank you for reaching out!',
                text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nSSAR & CO Charted Accountants`
            };

            // Send the confirmation email to the sender
            transporter.sendMail(confirmationMailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.status(500).send('Error sending confirmation email');
                } else {
                    console.log('Confirmation email sent to sender: ' + info.response);
                    return res.send('Email sent successfully');
                }
            });
        }
    });

    // Redirect back to the homepage after form submission
    res.redirect('/');
});

export {routes};