"use client";

import { useState } from "react";

import ClientSide from "@/components/clientSide/ClientSide";
import validator from "email-validator";

interface FormState {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface Response {
  ok: boolean;
  message: string;
}

const initialFormState = { name: "", email: "", phone: "", company: "", message: "", responseMessage: "", responseOk: true };
const initialResponseState = { ok: true, message: "" };

const ContactForm = () => {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [responseData, setResponseData] = useState(initialResponseState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setResponseData(initialResponseState);
  };

  const validateFormData = (formData: FormState) => {
    if (formData.name == "") {
      setResponseData({ ok: false, message: "Name must be entered" });
      return false;
    }

    if (!validator.validate(formData.email)) {
      setResponseData({ ok: false, message: "Valid email address must be entered" });
    }

    if (formData.message == "") {
      setResponseData({ ok: false, message: "Message must be entered" });
      return false;
    }

    return true;
  };

  const sendContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateFormData(formData)) return;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormData(initialFormState);
        setResponseData({ ok: response.ok, message: "Message successfully sent" });
      } else {
        console.log(`Response not ok from sending contact email: ${response}`)
        setResponseData({ ok: false, message: "Message could not be sent" });
      }
    } catch (error) {
      console.log(`Error sending contact email: ${error}`);
      setResponseData({ ok: false, message: "There was an error sending the error" });
    }
  };

  return (
    <div>
      <ClientSide>
        <form onSubmit={sendContact}>
          <div className="flex flex-wrap justify-center m-auto w-4/5 max-w-[1000px]">
            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Name">Name*</label>
              <input type="text" required className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark mr-2" onChange={handleChange} value={formData.name} name="name" onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => e.target.setCustomValidity("Name must be entered")} onInput={(e: React.ChangeEvent<HTMLInputElement>) => e.target.setCustomValidity("")} />
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Email">Email*</label>
              <input type="email" required className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" onChange={handleChange} value={formData.email} name="email" onInvalid={(e: React.ChangeEvent<HTMLInputElement>) => e.target.setCustomValidity("Valid email address must be entered")} onInput={(e: React.ChangeEvent<HTMLInputElement>) => e.target.setCustomValidity("")} />
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Phone">Phone</label>
              <input type="text" className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark mr-2" onChange={handleChange} value={formData.phone} name="phone" />
            </div>

            <div className="flex flex-col w-full md:w-1/2 mt-3">
              <label htmlFor="Company">Company</label>
              <input type="text" className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" onChange={handleChange} value={formData.company} name="company" />
            </div>

            <div className="flex flex-col w-full mt-3">
              <label htmlFor="Company">Message*</label>
              <textarea required className="p-3 border-b-2 bg-secondary-light dark:bg-secondary-dark border-primary-light dark:border-primary-dark" onChange={handleChange} value={formData.message} name="message" onInvalid={(e: React.ChangeEvent<HTMLTextAreaElement>) => e.target.setCustomValidity("Message must be entered")} onInput={(e: React.ChangeEvent<HTMLTextAreaElement>) => e.target.setCustomValidity("")} />
            </div>

            <div className={`flex flex-col w-full mt-3 ${responseData.ok ? "" : " text-red-500 "}`}>{responseData.message != "" && <div className="p-3 text-center">{responseData.message}</div>}</div>

            <button className="p-3 w-[160px] mt-8 rounded-full bg-secondary-dark dark:bg-secondary-light text-primary-dark dark:text-primary-light dark:hover:button-shadow-light hover:button-shadow-dark">Send Message</button>
          </div>
        </form>
      </ClientSide>
    </div>
  );
};

export default ContactForm;
