import { motion } from "framer-motion";
// components
import Button from "../../components/Button";
import { MotionViewport, varFade } from "../../components/animate";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";

export default function ContactForm() {
  // Initialize our states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Yup error message overrides
  const errMess = {
    req: "Please fill this out",
  };

  // Our Yup Schema for this form
  const ContactSchema = yup.object().shape({
    name: yup.string().label("Full Name").required(errMess.req).min(3).max(20),
    email: yup
      .string()
      .label("Email Address")
      .required(errMess.req)
      .email("Invalid Email Address"),
    subject: yup.string().label("Subject").required(errMess.req).min(3).max(20),
    message: yup
      .string()
      .label("Message")
      .required(errMess.req)
      .min(10)
      .max(1000),
  });

  // Destruct useForm() and set our Yup schema as the validation resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  // Send our valid form data to our back-end API
  const submitForm = async (data) => {
    setIsSubmitting(true);

    const res = await axios({
      method: "POST",
      url: "/api/contact-form",
      data: data,
    })
      .then((res) => {
        setIsSubmitting(false);
        return res;
      })
      .catch((e) => {
        alert("An error occurred. See log for details.");
        console.error(e);
      });

    if (res?.data.status === 1) {
      setIsSubmitted(true);
    } else {
      alert(res?.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit((data) => submitForm(data))} noValidate>
      <MotionViewport className="grid grid-cols-3 gap-y-6 md:gap-6">
        <motion.div
          variants={varFade().inUp}
          className="col-span-3 md:col-span-1"
        >
          <input
            className={`${
              errors.name ? "border-error" : "focus:border-primary"
            } border-[1px] w-full px-6 py-3 rounded-3xl focus:border-[1px] focus:outline-none`}
            type="text"
            name="name"
            placeholder="YOUR NAME"
            {...register("name")}
          />
          <div className="text-error text-xs">{errors.name?.message}</div>
        </motion.div>
        <motion.div
          variants={varFade().inUp}
          className="col-span-3 md:col-span-1"
        >
          <input
            className={`${
              errors.email ? "border-error" : "focus:border-primary"
            } border-[1px] w-full px-6 py-3 rounded-3xl focus:border-[1px] focus:outline-none`}
            type="email"
            name="email"
            placeholder="YOUR EMAIL"
            {...register("email")}
            onInvalid={(e) => e.preventDefault()}
          />
          <div className="text-error text-xs">{errors.email?.message}</div>
        </motion.div>
        <motion.div
          variants={varFade().inUp}
          className="col-span-3 md:col-span-1"
        >
          <input
            className={`${
              errors.subject ? "border-error" : "focus:border-primary"
            } border-[1px] w-full px-6 py-3 rounded-3xl focus:border-[1px] focus:outline-none`}
            type="text"
            name="subject"
            placeholder="YOUR SUBJECT"
            {...register("subject")}
            onInvalid={(e) => e.preventDefault()}
          />
          <div className="text-error text-xs">{errors.subject?.message}</div>
        </motion.div>
        <motion.div variants={varFade().inUp} className="col-span-3">
          <textarea
            className={`${
              errors.message ? "border-error" : "focus:border-primary"
            } border-[1px] w-full px-6 py-3 rounded-3xl h-40 overflow-hidden focus:border-[1px] focus:outline-none`}
            name="message"
            placeholder="YOUR MESSAGE"
            {...register("message")}
          ></textarea>
          <div className="text-error text-xs">{errors.message?.message}</div>
        </motion.div>
        <motion.div variants={varFade().inUp} className="col-span-3">
          <Button type="submit" icon={<FaPaperPlane />}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </motion.div>
        <motion.div variants={varFade().inUp} className="col-span-3 ">
          <span
            className={`block leading-8 h-8  text-white rounded-full text-center font-semibold uppercase ${
              isSubmitted && !isSubmitting ? "bg-primary" : ""
            }`}
          >
            {isSubmitted && !isSubmitting ? "MESSAGE SENT!" : ""}
          </span>
        </motion.div>
      </MotionViewport>
    </form>
  );
}
