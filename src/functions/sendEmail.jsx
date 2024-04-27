import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.EMAIL_SENDER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendEmail = async (subject, html) => {
  const mailOptions = {
    from: process.env.EMAIL_SENDER,
    to: process.env.EMAIL_SEND_TO,
    subject,
    html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    if (info.response.startsWith("250 2.0.0 OK")) {
      console.log(`Successfully sent email, response: ${info.response}`);
      return { ok: true, status: 200, response: info.response };
    }
    console.log(`Failed to sent email, response: ${info.response}`);
    return { ok: false, status: 500, response: info.response };
  } catch (error) {
    console.log(`Failed to sent email, error sending email ${error}`);
    return { ok: false, status: 500, response: error };
  }
};

export default sendEmail;
