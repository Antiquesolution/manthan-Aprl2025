// /pages/api/career-form.js

import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const{
        applyfor,firstname,lastname,email,mobilenumber,gender,qualification,linkedinProfile,experience,noticePeriod,currentCtc,expectedCtc,skill,personalAttribute,message,resume
    } = req.body;

    try {
         const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST1,
            port: 465,
            secure: true,
            auth:{
                user: process.env.SMTP_USER1,
                pass: process.env.SMTP_PASS1,
            },
        });
        const mailOptions = {
            from: `"Career Form" <${process.env.SMTP_USER1}>`,
            to: process.env.EMAIL_TO1,
            subject: `New Career Application from ${firstname} ${lastname}`,
            html: `
                <h2>Career Form Submission</h2>
                <p><strong>Apply For:</strong> ${applyfor}</p>
                <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mobile:</strong> ${mobilenumber}</p>
                <p><strong>Gender:</strong> ${gender}</p>
                <p><strong>Qualification:</strong> ${qualification}</p>
                <p><strong>LinkedIn:</strong> ${linkedinProfile}</p>
                <p><strong>Experience:</strong> ${experience}</p>
                <p><strong>Notice Period:</strong> ${noticePeriod}</p>
                <p><strong>Current CTC:</strong> ${currentCtc}</p>
                <p><strong>Expected CTC:</strong> ${expectedCtc}</p>
                <p><strong>Skill:</strong> ${skill}</p>
                <p><strong>Personal Attributes:</strong> ${personalAttribute}</p>
                <p><strong>Message:</strong> ${message}</p>
                <br />
                <br />
                ${resume}
            `,
            attachments: [
                {
                    filename: 'res',
                    content: resume.split(",")[1], // Base64-encoded content
                    encoding: 'base64',
                },
            ],
        };
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}