import nodemailer from 'nodemailer';
export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }
    const { yourname, companyname, email, phonenumber, message, services} = req.body;
    if (!yourname || !companyname || !email || !phonenumber || !message || !services) {
        return res.status(400).json({ message: 'Missing fields' });
    }
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 465,
            secure: true,
            auth:{
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        await transporter.sendMail({
            from: `${email}`,
            to: process.env.EMAIL_TO,
            subject: `Submission of ${services}`,
            html:`
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body>
                        <table style="vertical-align:top;width:100%;padding:0 20px;max-width:600px;background-color:#FCF9F3;margin:auto;font-family:math, sans-serif;font-size:18px;line-height:1.8;">
                            <tbody>
                                <tr>
                                    <td style="padding:30px 20px;border-bottom:1px solid #E0E0E0;text-align:center;">
                                        <a href="https://manthantech.in">
                                            <img alt="Manthanech Logo" src="/images/logo.svg" align="center">
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:0 20px;border-bottom:1px solid #E0E0E0;">
                                        <p style="margin-top:1rem"><strong>Hi</strong>, Rahul Patel</p>
                                        <p>Submission of ${services}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align:left;padding:0 20px">
                                        <p style="margin-top:1rem;"><strong>Full Name:</strong> ${yourname}</p>
                                        <p><strong>Company Name:</strong> ${companyname}</p>
                                        <p><strong>Service:</strong> ${services}</p>
                                        <p><strong>Email Address:</strong> ${email}</p>
                                        <p><strong>Phone Number:</strong> ${phonenumber}</p>
                                        <p><strong>Message:</strong> ${message}</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border-top:1px solid #E0E0E0;margin-top:20px;text-align:center;padding:0 20px;">
                                        <p style="margin-top:1rem;margin-bottom:0;">© 2025 Manthan Technologies All rights reserved</p>
                                        <p style="margin-top:0;">
                                            <a style="color:#DC1D47;text-decoration:none;" href="mailto:info@manhantech.in">info@manhantech.in</a> |
                                            <a style="color:#DC1D47;text-decoration:none;" href="https://manhantech.in">www.manhantech.in</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </body>
                </html>
            `
        });
        await transporter.sendMail({
            // from:"info@manthantech.in",
            from: `"Manthan Technologies"<info@manthantech.in>`,
            to: `${email}`,
            subject:`Thank You for Your ${services} Project Inquiry`,
            html: `
                <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    </head>
                    <body>
                        <table style="vertical-align:top;width:100%;padding:0 20px;max-width:600px;background-color:#FCF9F3;margin:auto;font-family:math, sans-serif;font-size:18px;line-height:1.8;">
                            <tbody>
                                <tr>
                                    <td style="padding:30px 0;border-bottom:1px solid #E0E0E0;text-align:center;">
                                        <img alt="Manthanech Logo" src="/images/logo.svg" align="center">
                                    </td>
                                </tr>
                                <tr>
                                    <td style="text-align:left;">
                                        <p><strong>Hi</strong>, ${yourname}</p>
                                        <p>Thank you for inquiring about your <strong>${services}</strong> project with us! We're thrilled that you're considering Manthan Technologies for your upcoming project. Our team is excited to learn more about your vision and how we can help bring it to life.</p>
                                        <p>We'll review your inquiry for <strong>${services}</strong> and get back to you within <span style="color:#DC1D47;font-weight:600;">48 hours</span> with more details. If you have any additional questions or specific requirements, feel free to reach out at any time.</p>
                                        <p>We're excited to explore collaboration opportunity with your organization.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4 style="margin:0;">Rahul Patel</h4>
                                        <p style="margin:0;font-size:16px;">Founder, CEO</p>
                                        <p style="margin-top:0;">Manthan Technologies</p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="border-top:1px solid #E0E0E0;margin-top:20px;text-align:center;">
                                        <p style="margin-bottom:0;">© 2025 Manthan Technologies All rights reserved</p>
                                        <p style="margin-top:0;">
                                            <a style="color:#DC1D47;text-decoration:none;" href="mailto:info@manhantech.in">info@manhantech.in</a> |
                                            <a style="color:#DC1D47;text-decoration:none;" href="https://manhantech.in">www.manhantech.in</a>
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </body>
                </html>
            `,
        });
        // res.status(200).json({ message: 'Email sent successfully' });
        res.redirect(302, '/thank-you');
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Something went wrong' });
    }
}