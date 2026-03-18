import React, { useState } from "react";
import "./Contact.css";
import partner from "../assets/Images/partner.svg";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Contact = () => {
  const [mobileNumber, setMobileNumber] = useState();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Contact`,
        {
          ...data,
          Mobile_Number: mobileNumber,
        }
      );
      if (response.data) {
        console.log(response.data.message);
        reset();
        setMobileNumber(null);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal server error");
    }
  };

  return (
    <div
      className="partner_container"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
    >
      <div className="partner_with">
        <div>
          <h1 data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            Partner with CERADA Today
          </h1>
          <p>
            Explore Opportunities: Discover how CERADA sponsorship can benefit
            your organization.
          </p>
          <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            We look forward to partnering with you and creating a memorable and
            impactful experience at the CERADA International Conference.
          </p>
          <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            Contact Us: Reach out to our team to discuss customized sponsorship
            and exhibition packages at{" "}
            <a
              target="_blank"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=collaboration@confworld.org"
            >
              collaboration@confworld.org
            </a>
          </p>
          <p data-aos-anchor-placement="top-bottom" data-aos="fade-up">
            For more information or to secure your spot, please contact us
            today.
          </p>
          <div
            className="contact_person_1"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
          >
            <h1>
              Academic Partnership, Sponsorship and Promotional activities;
            </h1>
            <p>Name: Ms.Suhana S</p>
            <p>Mobile: +91 8610656424</p>
            <p>
              E-mail:{" "}
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=collaboration@confworld.org"
              >
                collaboration@confworld.org
              </a>
            </p>
          </div>
          <div
            className="contact_person_1"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
          >
            <h1>For any ICSTEET queries, please contact:</h1>
            <p>Name: Ms. Aishwarya S</p>
            <p>Mobile: +91 8072381719</p>
            <p>
              E-mail:{" "}
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@icsteet.com"
              >
                info@icsteet.com
              </a>
            </p>
            <br />
            <p>Name: Ms. Malathy G</p>
            <p>Mobile: +91 6383055014</p>
            <p>
              E-mail:{" "}
              <a
                target="_blank"
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@icsteet.com"
              >
                info@icsteet.com
              </a>
            </p>
          </div>
          <p
            style={{ marginTop: "15px" }}
            className="follow_us"
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
          >
            Follow us on{" "}
            <a href="">
              <FaFacebook />
            </a>{" "}
            <a href="">
              <RiInstagramFill />
            </a>{" "}
            <a href="">
              <RiTwitterXFill />
            </a>{" "}
            <a href="">
              <FaLinkedin />
            </a>{" "}
            for the latest updates.
          </p>
          <form
            className="Contact_form"
            onSubmit={handleSubmit(onSubmit)}
            data-aos-anchor-placement="top-bottom"
            data-aos="fade-up"
          >
            <h1>For Any Enquiries, Contact Us</h1>
            <input
              type="text"
              {...register("Full_Name", {
                required: true,
              })}
              required
              placeholder="Enter your full name*"
            />
            <input
              type="email"
              {...register("Email", { required: true })}
              placeholder="Enter your email*"
              required
            />
            <PhoneInput
              defaultCountry="US"
              international
              onChange={(e) => setMobileNumber(e)}
              value={mobileNumber}
              id="contact_number_select"
              limitMaxLength
              required
              placeholder="Enter your whatsapp number*"
            />
            <input
              type="text"
              {...register("Message", { required: true })}
              placeholder="How can we help you?"
              required
            />
            <input type="submit" />
          </form>
        </div>
        <div className="partner_img">
          <img
            loading="lazy"
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-in-up"
            src={partner}
            alt="Partner with CERADA Today"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
