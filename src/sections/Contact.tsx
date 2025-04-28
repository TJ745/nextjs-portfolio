import Link from "next/link";
import React from "react";
import {
  RiArrowRightUpLine,
  RiCheckboxCircleFill,
  RiFacebookFill,
  RiLinkedinFill,
  RiMailSendFill,
  RiMessengerFill,
  RiTwitterXFill,
  RiWhatsappFill,
} from "react-icons/ri";

const cinfo = [
  {
    icon: <RiMailSendFill />,
    title: "E-mail",
    subtitle: "tj@gmail.com",
    link: (
      <Link href="mailto:tj@gmail.com" target="_blank" className="flex">
        Send a message <RiArrowRightUpLine />
      </Link>
    ),
  },
  {
    icon: <RiWhatsappFill />,
    title: "Whatsapp",
    subtitle: "+966 53 841 8406",
    link: (
      <Link
        href="https://api.whatsapp.com/send?phone=00966538418406"
        target="_blank"
        className="flex"
      >
        Send a message <RiArrowRightUpLine />
      </Link>
    ),
  },
  {
    icon: <RiMessengerFill />,
    title: "Messenger",
    subtitle: "Tee Jay",
    link: (
      <Link href="mailto:tj@gmail.com" target="_blank" className="flex">
        Send a message <RiArrowRightUpLine />
      </Link>
    ),
  },
];

const sinfo = [
  {
    icon: <RiFacebookFill />,
  },
  {
    icon: <RiTwitterXFill />,
  },
  {
    icon: <RiLinkedinFill />,
  },
];

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container pt-[6em] pb-[5em]">
        <div className="relative w-full h-full">
          <div className="flex justify-center items-center flex-col mb-[25px]">
            <h3 className="text-3xl font-bold mb-2 text-heading">Contact Me</h3>
            <p>Get in Touch</p>
          </div>
          <div className="flex justify-center items-center flex-wrap gap-x-8 gap-y-8 mb-6">
            {/* con container */}
            <div className="relative flex justify-center items-center gap-x-14">
              {/* con info */}
              <div>
                <h3 className="font-medium uppercase mb-4">Contact Info</h3>

                {cinfo.map((item, index) => (
                  <div key={index} className="flex items-center gap-x-6 mb-4">
                    <div className="text-4xl bg-dark-secondary w-20 h-20 flex justify-center items-center rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <span className="up">{item.title}</span>
                      <h4 className="font-medium">{item.subtitle}</h4>
                      {item.link}
                    </div>
                  </div>
                ))}

                <h3 className="font-medium uppercase mb-4">Social Info</h3>

                <div className="flex gap-x-4  w-full">
                  {sinfo.map((item, index) => (
                    <div
                      key={index}
                      className="text-3xl bg-dark-secondary w-20 h-20 flex gap-x-6 justify-center items-center rounded-[50%]"
                    >
                      <Link href={""}>{item.icon}</Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* con form container */}
              <div className="relative w-full px-12 py-8 rounded-[35px] bg-dark-secondary">
                <h2 className="font-bold text-xl mb-2 uppercase">
                  Let&apos;s work
                  <span className="text-heading">together.</span>
                </h2>
                <p className="mb-4 text-sm">
                  Please fill out the form on this section to contact with me. I
                  will get back to you as soon as possible. Thank you for your
                  interest!
                </p>
                <form
                  action=""
                  method="post"
                  id="contact-form"
                  className="flex flex-col gap-y-2"
                >
                  <div>
                    <input
                      type="text"
                      name="full-name"
                      placeholder="Your Name"
                      required
                      className="w-full border-white border-2 outline-hidden py-2 px-5 rounded-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full border-white border-2 outline-hidden py-2 px-5 rounded-lg"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      required
                      className="w-full border-white border-2 outline-hidden py-2 px-5 rounded-lg"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      className="w-full border-white border-2 outline-hidden py-2 px-5 rounded-lg h-30 resize-none"
                    ></textarea>
                  </div>
                  <div className="flex justify-between items-center">
                    <button
                      name="submit"
                      type="submit"
                      className="w-[150px] py-3 px-2 mt-2 bg-heading rounded-4xl"
                    >
                      Send Message
                    </button>
                    <div>
                      <span>Your message sent successfully!</span>
                      <RiCheckboxCircleFill />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
