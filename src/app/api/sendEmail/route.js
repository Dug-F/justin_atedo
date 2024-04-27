import { NextResponse } from "next/server";
import sendEmail from "@/functions/sendEmail";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    const emailSubject = `Received a contact request from Atedo Website from: ${name}`;
    const messageToSend = `
        <h2 style="margin-bottom: 0;">From</h2> 
        <p style="margin: 0;">${name}</p> 
        <h2 style="margin-bottom: 0;">Time</h2>
        <p style="margin: 0;">${new Date()}</p>
        <h2 style="margin-bottom: 0;">Email</h2>
        <p style="margin: 0;">${email}</p>
        <h2 style="margin-bottom: 0;">Phone</h2>
        <p style="margin: 0;">${phone}</p>
        <h2 style="margin-bottom: 0;">Company</h2>
        <p style="margin: 0;">${company}</p>
        <h2 style="margin-bottom: 0;">Message</h2>
        <p style="margin: 0;">${message}</p>
        `;
    const { ok, status, responseMessage } = await sendEmail(emailSubject, messageToSend);

    return NextResponse.json({ status: status }, { ok: ok }, { message: responseMessage });
  } catch (err) {
    console.log(`Error sending email: ${err}`);
    return NextResponse.json({ status: 500 }, { ok: false }, { message: `Error sending email: ${err}` });
  }
};
