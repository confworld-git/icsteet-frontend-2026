import React, { useState } from "react";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import "./SubmissionForm.css";
import { toast } from "react-hot-toast";
import axios from "axios";

const SubmissionForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [mobile, setMobile] = useState("");
  const [whats, setWhats] = useState("");

  const onSubmit = async (data) => {
    if (data.File && data.File.length > 0) {
      const fileSizeInMB = data.File[0].size / (1024 * 1024);
      if (fileSizeInMB > 3) {
        toast.error("File size must be less than 3MB");
        return;
      }
    }
    const formData = new FormData();
    if (data.File && data.File.length > 0) {
      formData.append("File", data.File[0]);
    }
    Object.keys(data).forEach((key) => {
      if (key !== "File") {
        formData.append(key, data[key]);
      }
    });
    formData.append("Mobile_Number", mobile);
    formData.append("Whatsapp_Number", whats);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Submission_Form_Data`,
        formData
      );
      if (response.data) {
        reset();
        setMobile("");
        setWhats("");
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Internal server error");
    }
  };

  return (
    <div className="FORM">
      <h1
        className="form-title"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        Abstract/Full Paper Submission
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="submission-form"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <div className="form-group">
          <label htmlFor="submission-type" className="form-label">
            Submission Type:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                {...register("Submission_type", {
                  required: true,
                })}
                value="Abstract"
                className="form-radio"
              />
              Abstract
            </label>
            <label>
              <input
                type="radio"
                {...register("Submission_type", {
                  required: true,
                })}
                value="Full paper"
                className="form-radio"
              />
              Full paper
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="paper-title" className="form-label">
            Title of the Paper:
          </label>
          <input
            type="text"
            id="paper-title"
            {...register("Paper_Title")}
            className="form-input"
            required
            placeholder=" Title of the Paper"
          />
        </div>

        <div className="form-group">
          <label htmlFor="author-name" className="form-label">
            Author Name:
          </label>
          <input
            type="text"
            id="author-name"
            {...register("Author_Name")}
            className="form-input"
            required
            placeholder="Author Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="co-author-names" className="form-label">
            Co-author Names:
          </label>
          <input
            type="text"
            id="co-author-names"
            name="CoAuthorName"
            {...register("Co_Author_Name")}
            className="form-input"
            required
            placeholder="Co-author Names"
          />
        </div>

        <div className="form-group">
          <label htmlFor="corresponding-email" className="form-label">
            Corresponding Author Email:
          </label>
          <input
            type="email"
            id="corresponding-email"
            className="form-input"
            name="correspondingEmail"
            {...register("Corresponding_Email")}
            required
            placeholder="Corresponding Author Email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile-number" className="form-label">
            Mobile Number (With Country Code):
          </label>
          <PhoneInput
            id="MobileNumber"
            international
            defaultCountry="US"
            value={mobile}
            onChange={setMobile}
            required
            limitMaxLength
            placeholder="Mobile Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="whatsapp-number" className="form-label">
            Whatsapp Number (With Country Code):
          </label>
          <PhoneInput
            id="MobileNumber"
            international
            defaultCountry="US"
            value={whats}
            onChange={setWhats}
            required
            limitMaxLength
            placeholder="Whatsapp Number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="linkedin-url" className="form-label">
            LinkedIn URL:
          </label>
          <input
            type="url"
            {...register("Linkedin_URL")}
            id="linkedin-url"
            className="form-input"
            required
            placeholder="LinkedIn URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="facebook-url" className="form-label">
            Facebook URL:
          </label>
          <input
            type="url"
            {...register("Facebook_URL")}
            id="facebook-url"
            required
            className="form-input"
            placeholder="Facebook URL"
          />
        </div>

        <div className="form-group">
          <label htmlFor="presentation-type" className="form-label">
            Presentation Category:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                {...register("Presentation_Category", {
                  required: true,
                })}
                value="oral"
                className="form-radio"
              />
              Oral
            </label>
            <label>
              <input
                type="radio"
                {...register("Presentation_Category", {
                  required: true,
                })}
                value="poster"
                className="form-radio"
              />
              Poster
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="presentation-type" className="form-label">
            Presentation Type:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                {...register("Presentation_Type", {
                  required: true,
                })}
                value="Virtual"
                className="form-radio"
              />
              Virtual
            </label>
            <label>
              <input
                type="radio"
                {...register("Presentation_Type", {
                  required: true,
                })}
                value="Physical"
                className="form-radio"
              />
              Physical
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="institution-name" className="form-label">
            University/Institution Name:
          </label>
          <input
            type="text"
            id="institution-name"
            {...register("Institution_Name")}
            className="form-input"
            required
            placeholder="University/Institution Name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="department" className="form-label">
            Department:
          </label>
          <input
            type="text"
            {...register("Department")}
            id="department"
            className="form-input"
            required
            placeholder="Department"
          />
        </div>

        <div className="form-group">
          <label htmlFor="designation" className="form-label">
            Designation:
          </label>
          <input
            type="text"
            {...register("Designation")}
            id="designation"
            className="form-input"
            required
            placeholder="Designation"
          />
        </div>

        <div className="form-group">
          <label htmlFor="publication-required" className="form-label">
            Publication Required:
          </label>
          <div className="radio">
            <label>
              <input
                type="radio"
                {...register("Publication_Required", {
                  required: true,
                })}
                value="yes"
                className="form-radio"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                {...register("Publication_Required", {
                  required: true,
                })}
                value="no"
                className="form-radio"
              />
              No
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="file-upload" className="form-label">
            File Upload: (Accepted file format: Word (.doc, .docx). File size
            should be less than 3MB.)
          </label>
          <input
            type="file"
            id="file-upload"
            className="form-input"
            accept=".doc,.docx"
            {...register("File")}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="conference-source" className="form-label">
            How did you know about the conference?
          </label>
          <textarea
            type="text"
            {...register("Conference_Source")}
            id="conference-source"
            className="form-textarea"
            rows={2}
            placeholder="How did you know about the conference"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message" className="form-label">
            Message:
          </label>
          <textarea
            id="message"
            rows={2}
            {...register("Message")}
            placeholder="Message"
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="form-submit">
          Submit Your Paper
        </button>
      </form>
    </div>
  );
};

export default SubmissionForm;
