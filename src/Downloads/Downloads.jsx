import React, { useEffect, useState } from "react";
import "./Downloads.css";
import ppt from "../assets/Images/ppt.png";
import pdf from "../assets/Images/pdf.png";
import jpg from "../assets/Images/jpg.png";
import docx from "../assets/Images/docx.png";
import { HiDownload } from "react-icons/hi";
import download from "../assets/Images/download2.png";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { HiMiniXMark } from "react-icons/hi2";
import { toast } from "react-hot-toast";
import axios from "axios";

const Downloads = () => {
  const [DownloadForm, setDownloadForm] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const [phone, setPhone] = useState("");

  const Files = [
    { title: "Conference Poster.jpg", path: "/files/ICSTEET Poster.jpg" },
    { title: "Conference Brochure.pdf", path: "/files/ICSTEET Brochure.pdf" },
    { title: "Presentation Template.ppt", path: "/files/ICSTEET-2026 PPT Model.ppt" },
    { title: "Registration Form.pdf", path: "/files/ICSTEET-2026 Registration Form.pdf" },
    { title: "Abstract Template.docx", path: "/files/Abstract Template.docx" },
    { title: "Full Paper Template.docx", path: "/files/Full paper Template.doc" },
     // will open form
  ];

  const Images = { ppt, pdf, jpg, docx };

  const getFileIcon = (title) => {
    if (title.endsWith(".ppt") || title.endsWith(".pptx")) return Images.ppt;
    if (title.endsWith(".pdf")) return Images.pdf;
    if (
      title.endsWith(".jpg") ||
      title.endsWith(".jpeg") ||
      title.endsWith(".png")
    )
      return Images.jpg;
    if (title.endsWith(".doc") || title.endsWith(".docx")) return Images.docx;
    return jpg;
  };

  const handleDownload = (file) => {
    if (file.title === "Conference Brochure.pdf") {
      setDownloadForm(true);
    } else {
      const a = document.createElement("a");
      a.href = file.path;
      a.download = file.title;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const onsubmit = async (data) => {
    try {
      const AllData = { ...data, Number: phone };
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Download`,
        AllData
      );
      if (response.data) {
        reset();
        setPhone("");
        toast.success(response.data.message);

        // download from public
        const a = document.createElement("a");
        a.href = "/files/ICSTEET Brochure.pdf";
        a.download = "ConferenceBrochure.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        setDownloadForm(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal Server Error");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.toggle("NoScroll", DownloadForm);
    return () => {
      document.body.classList.remove("NoScroll");
    };
  }, [DownloadForm]);

  return (
    <div
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
      className="essential_downloads"
      style={{ overflow: DownloadForm ? "hidden" : "" }}
    >
      <img loading="lazy" src={download} alt="Downloads banner" />
      <h1>Essential Downloads</h1>

      <section
        className="downloads_files"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        {Files.map((file, index) => (
          <div
            key={index}
            data-aos-anchor-placement="top-bottom"
            data-aos="zoom-in-up"
          >
            <img
              loading="lazy"
              src={getFileIcon(file.title)}
              alt="file icon"
            />
            <p>{file.title}</p>
            <button onClick={() => handleDownload(file)}>
              Download <HiDownload />
            </button>
          </div>
        ))}
      </section>

      {/* Brochure Form */}
      <div
        className="dialog_download_form"
        style={DownloadForm ? {} : { display: "none" }}
      >
        <dialog
          open={DownloadForm}
          className="dialog_box"
          data-aos-anchor-placement="top-bottom"
          data-aos="zoom-in-up"
        >
          <HiMiniXMark onClick={() => setDownloadForm(false)} />
          <h1>Download ICSTEET-2026 Brochure</h1>
          <form onSubmit={handleSubmit(onsubmit)}>
            <input
              type="text"
              {...register("Name")}
              required
              placeholder="Enter your name"
            />
            <input
              type="email"
              {...register("Email")}
              required
              placeholder="Enter your email"
            />
            <PhoneInput
              onChange={(e) => setPhone(e)}
              value={phone}
              international
              limitMaxLength
              required
              defaultCountry="US"
              id="Download_Mobile_number"
            />
            <input
              type="link"
              {...register("Link")}
              placeholder="Social media profile link"
            />
            <input
              {...register("Info")}
              type="text"
              placeholder="How you heard about the conference?"
            />
            <input type="submit" />
          </form>
        </dialog>
      </div>
    </div>
  );
};

export default Downloads;
