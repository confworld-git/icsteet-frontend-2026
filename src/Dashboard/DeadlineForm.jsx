import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const DeadlineForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const submitDeadline = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Deadline`,
        data
      );
      console.log(response.data);
      if (response.data) {
        reset();
        toast.success(response.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 id="Deadline_Date" style={{ marginTop: "50px" }}>Submission Deadline</h1>
      <form className="speakers-inputs" onSubmit={handleSubmit(submitDeadline)}>
        <div>
          <select
            name="Deadline_Title"
            {...register("Deadline_Title", { required: true })}
          >
            <option value="Select Category">Select Category</option>
            <option value="Early_bird_registration">
              Early bird registration
            </option>
            <option value="Abstract_Submission">Abstract submission</option>
            <option value="Full_Paper_Submission">Full paper submission</option>
            <option value="Final_Registration">Final registration</option>
          </select>
          <input
            type="number"
            {...register("Date", { required: true })}
            placeholder="Enter Date"
          />
          <input
            type="text"
            {...register("Super_Script", { required: true })}
            placeholder="Enter Super Script"
          />
          <input
            type="text"
            {...register("Month", { required: true })}
            placeholder="Enter Month"
          />
          <input
            type="text"
            {...register("Year", { required: true })}
            placeholder="Enter Year"
          />
          <button type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default DeadlineForm;
