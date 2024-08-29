import express from 'express';
import nodemailer from 'nodemailer';
const routes = express.Router();

routes.get('/', (req, res) => {
    res.render('index');
});

routes.get('/career', (req, res) => {
    res.render('careers');
});

routes.get('/about', (req, res) => {
    res.render('about');
});

routes.get('/services', (req, res) => {
    res.render('services');
});

routes.get('/contact', (req, res) => {
    res.render('contact');
});

routes.post('/submit-contactform', (req, res) => {
    console.log("Contact Form Submitted");
    console.log(req.body);

    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            user: 'noreply.ssoffice@gmail.com', 
            pass: 'rdaj oitr lbft sbwa' 
        }
    });

    const mailOptions = {
        from: email,
        to: 'ca@ssoffice.in',
        subject: `Contact Form Submission: ${subject}`,
        text: `Subject: ${subject}\nYou have a new message from ${name} (${email}):\n\n${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).send('Error sending email');
        } else {
            console.log('Email sent to recipient: ' + info.response);

            const confirmationMailOptions = {
                from: 'noreply.ssoffice@gmail.com',
                to: email,
                subject: 'Thank you for reaching out!',
                text: `Dear ${name},\n\nThank you for contacting us. We have received your message and will get back to you shortly.\n\nBest regards,\nSSAR & CO`
            };

            transporter.sendMail(confirmationMailOptions, (error, info) => {
                if (error) {
                    console.log(error);
                    return res.status(500).send('Error sending confirmation email');
                } else {
                    console.log('Confirmation email sent to sender: ' + info.response);
                    // Redirect only after all emails are sent successfully
                    return res.redirect('/');
                }
            });
        }
    });
});

export { routes };
