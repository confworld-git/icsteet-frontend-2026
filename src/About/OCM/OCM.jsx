import React, { useEffect, useState } from "react";
import "./OCM.css";
import CardSkeleton from "../Speaker/CardSkeleton";
import axios from "axios";

const OCM = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

  const FetchSpeakerDetails = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_LINK}api/Speaker_Details`
      );
      setSpeakers(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    FetchSpeakerDetails();
  }, []);

  const ScientificCommittee = speakers?.Scientific_Committee || [];
  const ReviewCommittee = speakers?.Review_Committee || [];

  return (
    <div className="Members">
      <h1 className="ocm-h1" data-aos="fade-up">
        Organizing Committee Members
      </h1>
      <div className="speaker">
        <section data-aos="fade-up">
          <h1>Scientific Committee Members</h1>
          {ScientificCommittee.length === 0 ? (
            <p>
              Information about our Scientific Committee Members will be updated
              soon.
            </p>
          ) : (
            ""
          )}
          <section className="skeleton">
            {ScientificCommittee.map((speaker, index) => {
              if (!speaker || !speaker.Speaker_Image) {
                console.warn(`Speaker data missing for index: ${index}`);
                return null;
              }
              const byteArray = new Uint8Array(speaker.Speaker_Image.data.data);
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
                </div>
              );
            })}
            {loading &&
              Array.from({
                length: Math.max(4 - ScientificCommittee.length, 0),
              }).map((_, index) => {
                return <CardSkeleton key={`skeleton-${index}`} />;
              })}
          </section>
        </section>
        <section data-aos="fade-up">
          <h1>Review Committee Members</h1>
          {ReviewCommittee.length === 0 ? (
            <p>
              Information about our Review Committee Members will be updated
              soon.
            </p>
          ) : (
            ""
          )}
          <section className="skeleton">
            {ReviewCommittee.map((speaker, index) => {
              if (!speaker || !speaker.Speaker_Image) {
                console.warn(`Speaker data missing for index: ${index}`);
                return null;
              }
              const byteArray = new Uint8Array(speaker.Speaker_Image.data.data);
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
                </div>
              );
            })}
            {loading &&
              Array.from({
                length: Math.max(4 - ReviewCommittee.length, 0),
              }).map((_, index) => {
                return <CardSkeleton key={`skeleton-${index}`} />;
              })}
          </section>
        </section>
      </div>
    </div>
  );
};

export default OCM;
