import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import {
  IoHomeOutline,
  IoPersonOutline,
  IoDocumentTextOutline,
  IoCallOutline,
  IoDownloadOutline,
} from "react-icons/io5";
import { HiLogout } from "react-icons/hi";
import { BsPerson } from "react-icons/bs";
import { MdOutlineRecordVoiceOver } from "react-icons/md";
import { FcGallery } from "react-icons/fc";
import { IoMdTrendingUp } from "react-icons/io";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { MdOutlineAppRegistration } from "react-icons/md";
import { RiFilePaper2Line } from "react-icons/ri";
import { HiDownload } from "react-icons/hi";
import { MdCall } from "react-icons/md";
import { MdPersonAdd } from "react-icons/md";
import { TbBookDownload } from "react-icons/tb";
import { useForm } from "react-hook-form";
import DeadlineForm from "./DeadlineForm";
import EssentialFiles from "./EssentialFiles";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import * as XLSX from "xlsx";
import { HiMiniXMark } from "react-icons/hi2";
import CouponManagement from "./CouponManagement";

const Dashboard = () => {
  const navigate = useNavigate();
  // const { AuthName } = useOutletContext();
  const [data, setData] = useState({
    Submission: [],
    Contact: [],
    Committee: [],
    Registration: [],
    TotalAmount: 0,
  });
  const [show, setShow] = useState(false);
  const [showSub, setShowSub] = useState(false);
  const [showMem, setShowMem] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      Speaker_Name: "",
      Speaker_About_One: "",
      Speaker_About_Two: "",
      Speaker_About_Three: "",
      Speaker_About_Four: "",
      Speaker_Image: "",
      position: 0,
    },
  });

  const [imagePreview, setImagePreview] = useState(null);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();

      Object.keys(data).forEach((key) => {
        if (key === "Speaker_Image" && data[key] && data[key][0]) {
          formData.append(key, data[key][0]);
        } else if (data[key]) {
          formData.append(key, data[key]);
        }
      });

      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Speakers_Details`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data) {
        console.log("Success");
        setImagePreview(null);
        reset();
        FetchSpeakerDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const imageFile = watch("Speaker_Image");

  useEffect(() => {
    if (imageFile && imageFile[0]) {
      const file = imageFile[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [imageFile]);

  const handleFormDataAll = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}api/ICSTEET_2026/Data/All`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFormDataAll();
  }, []);

  useEffect(() => {
    const LoginDetails = localStorage.getItem("ICSTEET_AuthToken");
    if (!LoginDetails) {
      navigate("/ICSTEET_2026_Login");
    }
  }, []);
  const [speakers, setSpeakers] = useState([]);

  const FetchSpeakerDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}api/Speaker_Details`
      );
      setSpeakers(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    FetchSpeakerDetails();
  }, []);

  const welcomeAddress = speakers?.Welcome_Address || [];
  const guestOfHonour = speakers?.Guest_of_Honour || [];
  const conferenceChair = speakers?.Conference_Chair || [];
  const keynoteSpeakers = speakers?.Keynote_Speakers || [];
  const SessionSpeakers = speakers?.Session_Speakers || [];
  const SessionChair = speakers?.Session_Chair || [];
  const ScientificCommittee = speakers?.Scientific_Committee || [];
  const ReviewCommittee = speakers?.Review_Committee || [];

  const DownloadExcel = (data, name) => {
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
    XLSX.writeFile(workbook, `${name}.xlsx`);
  };

  const handleDownload = (buffer, name) => {
    const blob = new Blob([new Uint8Array(buffer)], {
      type: "application/octet-stream",
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  const handleDeleteSpeaker = async (id, title) => {
    try {
      const response = await axios.delete(
        `${import.meta.env.VITE_API_LINK}Speaker/${title}/${id}`
      );
      console.log("Response:", response.data);
      if (response.data) {
        FetchSpeakerDetails();
      }
    } catch (error) {
      console.error("Error uploading data:", error);
    }
  };

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const showData = (id) => {};

  return (
    <div className="dashboard">
      <div className="divide">
        <div className="first-dash">
          <p>Dashboard Menu</p>
          <ul>
            <li>
              {/* <a href="#home"> */}
              <NavLink to="#home">
                <IoHomeOutline /> Home
              </NavLink>
              {/* </a> */}
            </li>
            <li onClick={() => setShow(true)}>
              <IoPersonOutline /> Registration
            </li>
            <li onClick={() => setShowSub(true)}>
              <IoDocumentTextOutline /> Submission
            </li>
            <li onClick={() => setShowMem(true)}>
              <BsPerson /> Committee Member
            </li>
            <li>
              <a href="#Contact_Data">
                <IoCallOutline /> Contact
              </a>
            </li>
            <li>
              <a href="#Downloads_Data">
                <IoDownloadOutline /> Downloads
              </a>
            </li>
            <li>
              <a href="#Coupon_Data">
                <IoDownloadOutline /> Coupon
              </a>
            </li>
            <li className="special">
              <a href="#speaker">
                <MdOutlineRecordVoiceOver /> Add Speaker
              </a>
            </li>
            {/* <li href="#ocm" className="special">
              <MdOutlineRecordVoiceOver /> Add Ocm
            </li> */}
          </ul>
          <button
            style={{ color: "white" }}
            onClick={() => {
              localStorage.removeItem(`ICSTEET_AuthToken`);
              navigate("/");
            }}
          >
            Log Out <HiLogout />
          </button>
        </div>

        <div className="second-dash">
          <h1 id="home">Home</h1>
          <div className="analysis">
            <div>
              <div>
                <i>
                  <IoMdTrendingUp />
                </i>
                <p>Total Amount</p>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "5px",
                }}
              >
                <h1>{Number(data?.TotalAmount || 0)}</h1>
                <span>
                  <FaIndianRupeeSign />
                  {(Number(data?.TotalAmount || 0) * 87.47).toFixed(2)} Rupees
                </span>
                <div
                  className="progress"
                  style={{
                    "--gradient-percentage": `${Math.round(
                      (data?.TotalAmount || 0) / 100
                    )}%`,
                  }}
                >
                  <p>{Math.round((data?.TotalAmount || 0) / 100)}%</p>
                </div>
              </div>
            </div>
            <div onClick={() => setShow(true)}>
              <div>
                <i style={{ backgroundColor: "#FF7782" }}>
                  <MdOutlineAppRegistration />
                </i>
                <p>Total Registration</p>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "5px",
                }}
              >
                <h1>{data?.Registration?.length || 0}</h1>
                <span>From Till Date</span>
                <div
                  className="download-excel"
                  onClick={() =>
                    DownloadExcel(data?.Registration, "Registration Data")
                  }
                >
                  <abbr title="Download Excel File">
                    <TbBookDownload />
                  </abbr>
                </div>
              </div>
            </div>
            <div onClick={() => setShowSub(true)}>
              <div>
                <i style={{ backgroundColor: "#CDD951" }}>
                  <RiFilePaper2Line />
                </i>
                <p>Total Submission</p>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "5px",
                }}
              >
                <h1>{data?.Submission?.length || 0}</h1>
                <span>From Till Date</span>
                <div
                  className="download-excel"
                  onClick={() =>
                    DownloadExcel(data?.Submission, "Submission Data")
                  }
                >
                  <abbr title="Download Excel File">
                    <TbBookDownload />
                  </abbr>
                </div>
              </div>
            </div>
            <div onClick={() => setShowMem(true)}>
              <div>
                <i style={{ backgroundColor: "#9B73FF" }}>
                  <MdPersonAdd />
                </i>
                <p>Total Member</p>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "5px",
                }}
              >
                <h1>{data?.Committee?.length || 0}</h1>
                <span>From Till Date</span>
                <div
                  className="download-excel"
                  onClick={() =>
                    DownloadExcel(data?.Committee, "Committee Member Data")
                  }
                >
                  <abbr title="Download Excel File">
                    <TbBookDownload />
                  </abbr>
                </div>
              </div>
            </div>
            <div>
              <div>
                <i style={{ backgroundColor: "#0CACEB" }}>
                  <HiDownload />
                </i>
                <p>Total Downloads</p>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "5px",
                }}
              >
                <h1>{data?.Download?.length || 0}</h1>
                <span>From Till Date</span>
                <div
                  className="download-excel"
                  onClick={() => DownloadExcel(data?.Download, "Download Data")}
                >
                  <abbr title="Download Excel File">
                    <TbBookDownload />
                  </abbr>
                </div>
              </div>
            </div>
            <div>
              <div>
                <i style={{ backgroundColor: "#BA198B" }}>
                  <MdCall />
                </i>
                <p>Total Contact</p>
              </div>
              <div
                style={{
                  flexDirection: "column",
                  alignItems: "start",
                  gap: "5px",
                }}
              >
                <h1>{data?.Contact?.length || 0}</h1>
                <span>From Till Date</span>
                <div
                  className="download-excel"
                  onClick={() => DownloadExcel(data?.Contact, "Contact Data")}
                >
                  <abbr title="Download Excel File">
                    <TbBookDownload />
                  </abbr>
                </div>
              </div>
            </div>

            <div className="Printing_data" id="Contact_Data">
              <h1>Contact Data</h1>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Message</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.Contact?.map((value) => {
                    return (
                      <tr key={value.id}>
                        <td>{value.Full_Name}</td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${value.Email}`}
                          >
                            {value.Email}
                          </a>
                        </td>
                        <td>{value.Mobile_Number}</td>
                        <td>{value.Message}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="Printing_data" id="Downloads_Data">
              <h1>Download Data</h1>
              <table border={1}>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Link</th>
                    <th>Info</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.Download?.map((value) => {
                    return (
                      <tr key={value.id}>
                        <td>{value.Name}</td>
                        <td>
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${value.Email}`}
                          >
                            {value.Email}
                          </a>
                        </td>
                        <td>{value.Number}</td>
                        <td>
                          <a href={value.Link}>Social Media </a>
                        </td>
                        <td>{value.Info}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div  id="Coupon_Data" style={{ display: "block" }}>
              <CouponManagement />
            </div>

            <div
              id="Registration_Data"
              className="table-container"
              style={{ display: show ? "block" : "none" }}
            >
              <h1>
                Registration Data
                <i onClick={() => setShow(false)}>
                  <HiMiniXMark />
                </i>
              </h1>
              <div className="data-container">
                <table border={1} className="data-table">
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Full Name</th>
                      <th>Certificate Name</th>
                      <th>DOB</th>
                      <th>Nationality</th>
                      <th>Department</th>
                      <th>Institution</th>
                      <th>Number</th>
                      <th>Email</th>
                      <th>Part Category</th>
                      <th>Pres Category</th>
                      <th>Pres Type</th>
                      <th>Status</th>
                      <th>Order ID</th>
                      <th>Fees</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.Registration?.map((reg, index) => {
                      return (
                        <tr key={index}>
                          <td>{reg.Title}</td>
                          <td>
                            {reg.First_Name}
                            {reg.Last_Name}
                          </td>
                          <td>{reg.Certificate_Name}</td>
                          <td>
                            {new Date(reg.Date_Of_Birth).toLocaleDateString()}
                          </td>
                          <td>{reg.Nationality}</td>
                          <td>{reg.Department}</td>
                          <td>{reg.Institution}</td>
                          <td>{reg.Mobile_Number}</td>
                          <td>
                            <a
                              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${reg.Email}`}
                            >
                              Email
                            </a>
                          </td>
                          <td>{reg.Participant_Category}</td>
                          <td>{reg.Presentation_Category}</td>
                          <td>{reg.Presentation_Type}</td>
                          <td>{reg.status}</td>
                          <td>{reg.order_id}</td>
                          <td>{reg.selectedFee?.amount}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div
              id="Registration_Data"
              className="table-container"
              style={{ display: showSub ? "block" : "none" }}
            >
              <h1>
                Submission Data
                <i onClick={() => setShowSub(false)}>
                  <HiMiniXMark />
                </i>
              </h1>
              <table border={1} className="data-table">
                <thead>
                  <tr>
                    <th>Paper Title</th>
                    <th>Author Name</th>
                    <th>Co-Author Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Whatsapp Number</th>
                    <th>Publication Required</th>
                    <th>Presentation Category</th>
                    <th>Presentation Type</th>
                    <th>Institution Name</th>
                    <th>Department</th>
                    <th>Designation</th>
                    <th>Conference Source</th>
                    <th>Message</th>
                    <th>Submission ID</th>
                    <th>Paper</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.Submission?.map((submission, index) => (
                    <tr key={index}>
                      <td>{submission.Paper_Title}</td>
                      <td>{submission.Author_Name}</td>
                      <td>{submission.Co_Author_Name}</td>
                      <td>
                        <a
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${submission.Corresponding_Email}`}
                        >
                          Email
                        </a>
                      </td>
                      <td>{submission.Mobile_Number}</td>
                      <td>{submission.Whatsapp_Number}</td>
                      <td>{submission.Publication_Required}</td>
                      <td>{submission.Presentation_Category}</td>
                      <td>{submission.Presentation_Type}</td>
                      <td>{submission.Institution_Name}</td>
                      <td>{submission.Department}</td>
                      <td>{submission.Designation}</td>
                      <td>{submission.Conference_Source}</td>
                      <td>{submission.Message}</td>
                      <td>{submission.Submission_ID}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleDownload(
                              submission.File.buffer.data,
                              submission.File.originalname
                            )
                          }
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div
              id="Registration_Data"
              className="table-container"
              style={{ display: showMem ? "block" : "none" }}
            >
              <h1>
                Committee Member Data
                <i onClick={() => setShowMem(false)}>
                  <HiMiniXMark />
                </i>
              </h1>
              <table border={1} className="data-table">
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>First Name</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Number</th>
                    <th>Member Category</th>
                    <th>Organization</th>
                    <th>Qualification</th>
                    <th>Professional Experience</th>
                    <th>Department</th>
                    <th>Specialization</th>
                    <th>h-index</th>
                    <th>Associated Cerada</th>
                    <th>Publication</th>
                    <th>SCI Published</th>
                    <th>Journals</th>
                    <th>Resume/CV</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.Committee?.map((member, index) => (
                    <tr key={index}>
                      <td>{member.Title}</td>
                      <td>{member.First_Name}</td>
                      <td>
                        <a
                          target="_blank"
                          href={`https://mail.google.com/mail/?view=cm&fs=1&to=${member.Email}`}
                        >
                          Email
                        </a>
                      </td>
                      <td>{member.Country}</td>
                      <td>{member.Number}</td>
                      <td>{member.Member_Category}</td>
                      <td>{member.Organization}</td>
                      <td>{member.Qualification}</td>
                      <td>{member.Professional_Experience}</td>
                      <td>{member.Department}</td>
                      <td>{member.Specialization}</td>
                      <td>{member.h_index}</td>
                      <td>{member.Associated_Cerada}</td>
                      <td>{member.Publication}</td>
                      <td>{member.SCI_Published}</td>
                      <td>{member.Journals}</td>
                      <td>
                        <button
                          onClick={() =>
                            handleDownload(
                              member.Uploaded_File.buffer.data,
                              member.Uploaded_File.originalname
                            )
                          }
                        >
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div id="Add-Speaker" className="add-speaker">
              <h1 id="speaker">Add Speakers</h1>
              <div>
                <li>
                  <input
                    type="radio"
                    value="Welcome_Address"
                    id="speaker-title-1"
                    hidden
                    {...register("Title", { required: true })}
                  />
                  <label htmlFor="speaker-title-1">Welcome Address</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="Guest_of_Honour"
                    id="speaker-title-2"
                    hidden
                    {...register("Title", { required: true })}
                  />
                  <label htmlFor="speaker-title-2">Guest of Honour</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="Conference_Chair"
                    id="speaker-title-3"
                    hidden
                    {...register("Title", { required: true })}
                  />
                  <label htmlFor="speaker-title-3">Conference Chair</label>
                </li>
                <li>
                  <input
                    type="radio"
                    value="Keynote_Speakers"
                    id="speaker-title-4"
                    hidden
                    {...register("Title", { required: true })}
                  />
                  <label htmlFor="speaker-title-4">Keynote Speakers</label>
                </li>
                <li>
                  <input
                    type="radio"
                    {...register("Title", { required: true })}
                    value="Session_Speakers"
                    id="speaker-title-5"
                    hidden
                  />
                  <label htmlFor="speaker-title-5">Session Speakers</label>
                </li>
                <li>
                  <input
                    type="radio"
                    {...register("Title", { required: true })}
                    value="Session_Chair"
                    id="speaker-title-6"
                    hidden
                  />
                  <label htmlFor="speaker-title-6">Session Chair</label>
                </li>
                <li>
                  <input
                    type="radio"
                    {...register("Title", { required: true })}
                    value="Scientific_Committee"
                    id="speaker-title-7"
                    hidden
                  />
                  <label htmlFor="speaker-title-7">Scientific Committee</label>
                </li>
                <li>
                  <input
                    type="radio"
                    {...register("Title", { required: true })}
                    value="Review_Committee"
                    id="speaker-title-8"
                    hidden
                  />
                  <label htmlFor="speaker-title-8">Review Committee</label>
                </li>
              </div>
              <section className="speakers-inputs">
                <div>
                  <label htmlFor="speakers-image">
                    {imagePreview && (
                      <img loading="lazy" src={imagePreview} alt="" />
                    )}
                    {!imagePreview && (
                      <>
                        Choose or Drop your Image Here <br /> <FcGallery />
                      </>
                    )}
                  </label>
                  <input
                    type="file"
                    id="speakers-image"
                    hidden
                    accept="image/*"
                    name="Image"
                    {...register("Speaker_Image", { required: true })}
                  />
                  <textarea
                    type="text"
                    name="Name"
                    placeholder="Speaker Name"
                    {...register("Speaker_Name", { required: true })}
                  ></textarea>
                  <textarea
                    type="text"
                    name="About_1"
                    placeholder="Speaker About One"
                    {...register("Speaker_About_One", { required: true })}
                  ></textarea>
                  <textarea
                    type="text"
                    name="About_2"
                    placeholder="Speaker About Two"
                    {...register("Speaker_About_Two", { required: true })}
                  ></textarea>
                  <textarea
                    type="text"
                    name="About_3"
                    placeholder="Speaker About Three"
                    {...register("Speaker_About_Three")}
                  ></textarea>
                  <textarea
                    type="text"
                    rows={1}
                    name="About_4"
                    placeholder="Speaker About Four"
                    {...register("Speaker_About_Four")}
                  ></textarea>
                  <input
                    type="number"
                    name="position"
                    placeholder="Position number"
                    {...register("position")}
                  />
                  <div>
                    <button type="button" onClick={handleSubmit(onSubmit)}>
                      Add
                    </button>
                  </div>
                </div>
              </section>
              {/* Welcome Address Members */}
              <section>
                <h1>Welcome Address</h1>
                {welcomeAddress.length > 0 ? "" : <p>Add Welcome Address.</p>}
                <section className="skeleton">
                  {welcomeAddress.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(speaker._id, "Welcome_Address")
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* Guest Of Honour Members */}

              <section>
                <h1>Guest Of Honour</h1>
                {guestOfHonour.length > 0 ? "" : <p>Add Guest Of Honour.</p>}
                <section className="skeleton">
                  {guestOfHonour.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(speaker._id, "Guest_of_Honour")
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* Conference Chair Members */}
              <section>
                <h1>Conference Chair</h1>
                {conferenceChair.length > 0 ? "" : <p>Add Conference Chair.</p>}
                <section className="skeleton">
                  {conferenceChair.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(speaker._id, "Conference_Chair")
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* Keynote Speakers Members */}

              <section>
                <h1>Keynote Speakers</h1>
                {keynoteSpeakers.length > 0 ? "" : <p>Add Keynote Speakers.</p>}
                <section className="skeleton">
                  {keynoteSpeakers.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(speaker._id, "Keynote_Speakers")
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* Session Speakers Members */}
              <section>
                <h1>Session Speakers</h1>
                {SessionSpeakers.length > 0 ? "" : <p>Add Session Speakers.</p>}
                <section className="skeleton">
                  {SessionSpeakers.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(speaker._id, "Session_Speakers")
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* Session Chair Members */}
              <section>
                <h1>Session Chair</h1>
                {SessionChair.length > 0 ? "" : <p>Add Session Chair.</p>}
                <section className="skeleton">
                  {SessionChair.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(speaker._id, "Session_Chair")
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* Scientific Committee Members */}
              <section>
                <h1>Scientific Committee </h1>
                {ScientificCommittee.length > 0 ? (
                  ""
                ) : (
                  <p>Add Scientific Committee .</p>
                )}
                <section className="skeleton">
                  {ScientificCommittee.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(
                              speaker._id,
                              "Scientific_Committee"
                            )
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              {/* Review Committee Members */}
              <section>
                <h1>Review Committee </h1>
                {ReviewCommittee.length > 0 ? (
                  ""
                ) : (
                  <p>Add Review Committee .</p>
                )}
                <section className="skeleton">
                  {ReviewCommittee.map((speaker, index) => {
                    if (!speaker || !speaker.Speaker_Image) {
                      console.warn(`Speaker data missing for index: ${index}`);
                      return null;
                    }
                    const byteArray = new Uint8Array(
                      speaker.Speaker_Image.data.data
                    );
                    const blob = new Blob([byteArray], {
                      type: speaker.Speaker_Image.contentType,
                    });
                    const imageUrl = URL.createObjectURL(blob);

                    return (
                      <div key={index} className="speaker-person">
                        <img
                          loading="lazy"
                          src={imageUrl}
                          alt={`${speaker.Speaker_Name}'s image`}
                        />
                        <h1>{speaker.Speaker_Name}</h1>
                        <p>{speaker.Speaker_About_One}</p>
                        <p>{speaker.Speaker_About_Two}</p>
                        <p>{speaker.Speaker_About_Three}</p>
                        <p>{speaker.Speaker_About_Four}</p>
                        <p>position : {speaker.position}</p>
                        <button
                          onClick={() =>
                            handleDeleteSpeaker(speaker._id, "Review_Committee")
                          }
                          style={{
                            backgroundColor: "#FF6B5E",
                            width: "100%",
                            padding: "5px",
                            borderRadius: "5px",
                            color: "white",
                          }}
                        >
                          Delete
                        </button>
                      </div>
                    );
                  })}
                </section>
              </section>
              <DeadlineForm />
              <EssentialFiles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
