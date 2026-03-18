import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const EssentialFiles = () => {
  const { register, handleSubmit, reset } = useForm();
  const submitFile = async (data) => {
    const file = data.Essential_File[0];
    try {
      const formData = new FormData();
      formData.append("Essential_File_Title", data.Essential_File_Title);
      formData.append("Essential_File", file);

      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Essential_Files_Updates`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        console.log(response.data);
        reset();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 id="Essential_Files" style={{ marginTop: "50px" }}>
        Essential Downloads
      </h1>
      <form className="speakers-inputs" onSubmit={handleSubmit(submitFile)}>
        <div>
          <select
            name="File_Title"
            style={{
              gridColumn: "span 2",
              widows: "100%",
            }}
            {...register("Essential_File_Title", { required: true })}
          >
            <option value="">Select File Type</option>
            <option value="ICSTEET Poster New.jpg">Poster</option>
            <option value="ICSTEET Brochure New.pdf">Brochure</option>
            <option value="Presentation Template.ppt">PPT Model</option>
            <option value="Registration Form.pdf">Registration Form</option>
            <option value="Abstract Template.docx">Abstract Template</option>
            <option value="Full Paper Template.docx">
              Full Paper Template
            </option>
          </select>
          <input
            style={{ gridColumn: "span 2", widows: "100%" }}
            type="file"
            {...register("Essential_File")}
            placeholder="Select File From Your Device"
            required
          />
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default EssentialFiles;
