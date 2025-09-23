"use client"

import { Icon } from "@iconify/react/dist/iconify.js";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { BoxText } from "./components/BoxText";
import FormControls, { TextAreaControls } from "./components/FormControls";
import { TitleSection } from "./components/TitleSection";
import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = ({ id }: { id: string }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    console.log('NEXT_PUBLIC_EMAILJS_SERVICE_ID', process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    console.log('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID', process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    console.log('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY', process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          subject: form.subject,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
      })
      .finally(() => {
        setLoading(false);
        setTimeout(() => setStatus(null), 3000); // auto close setelah 3 detik

        (e.target as HTMLFormElement).reset();
        setForm({ name: "", email: "", subject: "", message: "", phone: "" });
      });
  };


  return (
    <div className="section-portofolio mt-14" id={id}>
      <TitleSection topSubTitle="My Contact">
        <motion.span
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="block"
        >
          Let’s Work Together
        </motion.span>
        <motion.div
          initial={{ opacity: 0, translateX: 150 }}
          whileInView={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="block lg:pl-[60px]"
        >
          On Your Next {" "}
          <span className="text-[#FFAE00] underline font-playfair italic cursor-target">
            Project
          </span>
        </motion.div>
      </TitleSection>

      <form
        onSubmit={handleSubmit}
        className="mt-16">
        <BoxText>
          <h5 className="lg:text-[32px] text-2xl font-semibold leading-tight">
            Get In Touch
          </h5>

          <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mt-7">
            <FormControls type="text" placeholder="Name" name="name" value={form.name} handleChange={handleChange} required={true} />
            <FormControls type="email" placeholder="Email" name="email" value={form.email} handleChange={handleChange} required={true} />
            <FormControls type="text" placeholder="Phone Number" name="phone" value={form.phone} handleChange={handleChange} required={true} />
            <FormControls type="text" placeholder="Subject" name="subject" value={form.subject} handleChange={handleChange} required={true} />
            <div className="lg:col-span-2">
              <TextAreaControls placeholder="Message" name="message" value={form.message} handleChange={handleChange} required={true} />
            </div>
          </div>

          <button
            type="submit"
            className="flex justify-center items-center lg:gap-x-2 gap-x-1 mt-6 lg:px-5 px-5 lg:py-4 py-2.5 bg-amber-500 text-neutral-900 font-semibold lg:text-xl text-lg rounded-full w-max max-w-full hover:bg-transparent border-amber-500 border-2 hover:text-amber-500 transition-all cursor-target"
          >
            {loading ? "Sending..." : "SEND"}{" "}
            <Icon icon="pepicons-print:paper-plane" className="lg:w-auto w-5" width="24" height="24" />
          </button>
        </BoxText>
      </form>

      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4 }}
            className={`fixed top-[30px] right-[30px] transform  px-4 py-2 rounded-lg shadow-md text-white font-medium ${status === "success" ? "bg-green-600" : "bg-red-600"
              }`}
          >
            {status === "success"
              ? (<span><Icon className="inline" icon="line-md:email-check-twotone" width="24" height="24" /> Message sent successfully! </span>)
              : (<span><Icon className="inline" icon="line-md:close-circle-twotone" width="24" height="24" /> Failed to send message. </span>)}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactMe;
