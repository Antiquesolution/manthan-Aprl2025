import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const {
        applyfor, firstname, lastname, email, mobilenumber, gender,
        qualification, linkedinProfile, experience, noticePeriod,
        currentCtc, expectedCtc, skill, personalAttribute, message,
        resume, resumeName
    } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST1,
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER1,
                pass: process.env.SMTP_PASS1,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_TO1,
            subject: `Submission of ${applyfor}`,
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
                <p><strong>Resume:</strong> <a href="${resume}" download="${resumeName || 'resume.pdf'}">Click here to download resume</a></p>
            `,
            attachments: [
                {
                    filename: resumeName || "resume.pdf",
                    content: resume.split("base64,")[1],
                    encoding: 'base64'
                }
            ]
        });

        await transporter.sendMail({
            from: `"Manthan Technologies"<info@manthantech.in>`,
            to: `${email}`,
            subject: `Submission of ${applyfor}`,
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
            `,
            attachments: [
                {
                    filename: resumeName || "resume.pdf",
                    content: resume.split("base64,")[1],
                    encoding: 'base64'
                }
            ]
        });

        return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Email sending error:', error);
        return res.status(500).json({ message: 'Failed to send email' });
    }
}
