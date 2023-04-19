import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { Fade } from "react-reveal";
import swal from "sweetalert";
import ThankYouImg from "../../../assets/images/thank-you-envelope.png";
import Title from "../title";
import ContactInp from "./contactInp";
import SocialContact from "./socialContact";

export default function ContactMe() {
  const [loading, setLoading] = useState(false);
  const [showContactForm, setShowContactForm] = useState(true);
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    await emailjs
      .sendForm(
        "service_sob3n6t", //SERVICE ID
        "template_ol3bs8a", //TEMPLATE ID
        form.current,
        "q-Wr4qVce_T4pGFt2" // PUBLIC KEY
      )
      .then(
        (result) => {
          swal({
            title: "E-mail sent successful",
            icon: "success",
            button: "Close",
            dangerMode: true,
          }).then(setShowContactForm(false));
        },
        (err) => {
          swal({
            title: "Something went wrong",
            icon: "error",
            button: "close",
            dangerMode: true,
          });
        }
      );

    setLoading(false);
  };

  if (loading) {
    swal({
      title: "Sending message",
      icon: "warning",
      text: "Please wait ...",
      button: false,
      closeOnClickOutside: false,
    });
  }

  return (
    <>
      <div className="containerCustom gap">
        <Title title="CONTACT" />
        <div className="md:grid grid-cols-12 gap-4">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="w-full p-4 bg-white border rounded-lg shadow-md sm:p-6 dark:bg-gray-800 dark:border-gray-700">
              <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
                Tell me on
              </h5>
              <ul className="my-4 space-y-3">
                <SocialContact
                  icon="fa-solid fa-envelope"
                  name="email"
                  link="mailto:tahirahmad0234@gmail.com"
                  delay={100}
                />
                <SocialContact
                  icon="fa-brands fa-whatsapp"
                  name="whatsapp"
                  link="https://wa.me/+8801610881871/"
                  delay={150}
                />
                <SocialContact
                  icon="fa-brands fa-facebook-messenger"
                  name="messenger"
                  link="https://www.messenger.com/t/tahirahmad01"
                  delay={200}
                />
                <SocialContact
                  icon="fab fa-line"
                  name="line"
                  link="https://line.me/ti/p/DTFqKxFPcn"
                  delay={200}
                />
                <SocialContact
                  icon="fab fa-linkedin-in"
                  name="linkedin"
                  link="https://www.linkedin.com/in/tahirahmad01/"
                  delay={250}
                />
                <SocialContact
                  icon="fab fa-twitter"
                  name="twitter"
                  link="https://twitter.com/tahir_ahmad01"
                  delay={300}
                />
                <SocialContact
                  icon="fab fa-instagram"
                  name="instagram"
                  link="https://www.instagram.com/tahir_ahmad01/"
                  delay={350}
                />
              </ul>
            </div>
          </div>
          <div className="inline-flex justify-center items-center w-full md:hidden mt-4">
            <hr className="my-8 w-[70%] h-px bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="absolute left-1/2 px-3 font-medium text-gray-900 bg-gray-50 -translate-x-1/2 dark:text-white dark:bg-gray-900">
              or
            </span>
          </div>
          {showContactForm ? (
            <form
              ref={form}
              onSubmit={sendEmail}
              className="md:col-span-7 lg:col-span-8 w-full h-full flex flex-col justify-between"
            >
              <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 w-full mt-4 md:mt-0">
                <ContactInp
                  placeholder="Your Name"
                  type="text"
                  name="from_name"
                  required
                />
                <ContactInp
                  placeholder="Your Email"
                  type="email"
                  delay={150}
                  name="email"
                  required
                />
                <ContactInp
                  placeholder="Your phone number (optional)"
                  type="text"
                  delay={200}
                  name="phone"
                />
                <ContactInp
                  placeholder="Subject"
                  type="text"
                  delay={230}
                  name="subject"
                  required
                />
              </div>
              <div className="w-full  my-4 flex-1">
                <Fade up delay={240}>
                  <textarea
                    className="w-full  rounded-md shadow-md pr-5 border-1 border-gray-200 text-black focus:border-transparent focus:outline-transparent focus:ring-0 min-h-[200px] md:min-h-full lg:min-h-full"
                    placeholder="Your Message"
                    name="message"
                    required
                  />
                </Fade>
              </div>

              <Fade up delay={450}>
                <div className="text-center mt-1">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center text-white transition-all disabled:opacity-75 disabled:cursor-progress"
                    name="message"
                    disabled={loading}
                  >
                    Send Message
                  </button>
                </div>
              </Fade>
            </form>
          ) : (
            <div className="md:col-span-7 lg:col-span-8 w-full h-full flex items-center justify-center">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-32 h-32 flex items-center justify-center bg-green-500 rounded-full bg-gradient-to-tr from-green-400 via-blue-500 to-purple-600">
                  <img
                    src={ThankYouImg}
                    alt="thank-you-envelope"
                    border="0"
                    className="w-20"
                  />
                </div>
                <h1 className="text-4xl font-bold">Thank You !</h1>
                <p className="text-center">
                  for contacting with me, I will reply promptly once your
                  message is received.
                </p>
                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:bg-gradient-to-bl font-medium rounded-3xl text-sm px-7 md:hover:px-12 py-3.5 text-center text-white transition-all"
                  name="message"
                  onClick={() => setShowContactForm(true)}
                >
                  Send Another
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
