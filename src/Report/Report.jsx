import React, { useContext, useState } from "react";
import Header from "../Header/Header";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { UserContext } from "../main";

import "./Report.styles.css";

import githubIcon from "../assets/github icon.svg";
import instagramIcon from "../assets/instagram icon.svg";
import linkedinIcon from "../assets/linkedin icon.svg";
import twitterIcon from "../assets/twitter icon.svg";

function Report() {
  const [message, setMessage] = useState();
  const { user } = useContext(UserContext);

  const sendEmail = () => {
    const reportToast = toast.loading("Sending message ...", {
      style: {
        marginTop: "10px",
        marginRight: "30px",
        padding: "20px",
      },
    });

    const templateParams = {
      username: user.username,
      email: user.email,
      message: message,
      to_email: "22010101144@darshan.ac.in",
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        (res) => {
          toast.success("Message Sent Successfully", {
            id: reportToast,
          });

          console.log(res);
        },
        (error) => {
          toast.error("Failed to Send Message", {
            id: reportToast,
          });
          console.log(error);
        }
      );
  };

  return (
    <div className="report">
      <Header />
      <div className="report-container">
        <div className="report-div">
          <textarea
            id="report-message"
            className="report-input"
            placeholder="Leave a message here..."
            rows="14"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              sendEmail();
            }}
          >
            Send Message
          </button>
        </div>
        <div className="report-myself-div">
          <h3>Contact Me</h3>
          <p>You can fill the form or reach out to me via these channels</p>
          <div className="my-links">
            <div>
              <img src={linkedinIcon} alt="" />
              <a
                href="https://www.linkedin.com/in/jenish-patel-187b9326a"
                target="_blank"
              >
                Jenish Patel
              </a>
            </div>
            <div>
              <img src={githubIcon} alt="" />
              <a href="https://github.com/S-jenishPatel" target="_blank">
                Jenish Patel
              </a>
            </div>
            <div>
              <img src={twitterIcon} alt="" />
              <a
                href="https://twitter.com/Jenish49350562?t=fq-Nbf9fiSP1gy9qZ_KqYw&s=08"
                target="_blank"
              >
                _.Jenish._
              </a>
            </div>
            <div>
              <img src={instagramIcon} alt="" />
              <a
                href="https://www.instagram.com/_.j.e.n.i.s.h._"
                target="_blank"
              >
                _.j.e.n.i.s.h._
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Report;
