import React, { useEffect, useState } from "react";
import "./Speaker.css";
import CardSkeleton from "./CardSkeleton";
import axios from "axios";

const Speaker = () => {
  const [speakers, setSpeakers] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
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

  return (
    <div className="speaker">
      {/* <section>
        <h1>Welcome Address</h1>
        {welcomeAddress.length > 0 ? (
          ""
        ) : (
          <p>Information about our Welcome Address will be updated soon.</p>
        )}
        <section className="skeleton">
          {welcomeAddress.map((speaker, index) => {
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
              length: Math.max(4 - welcomeAddress.length, 0),
            }).map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)}
        </section>
      </section> */}

      {/* <section>
        <h1>Guest Of Honour</h1>
        {guestOfHonour.length > 0 ? (
          ""
        ) : (
          <p>Information about our Guest Of Honour will be updated soon.</p>
        )}
        <section className="skeleton">
          {guestOfHonour.map((speaker, index) => {
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
              length: Math.max(4 - guestOfHonour.length, 0),
            }).map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)}
        </section>
      </section> */}

      <section>
        <h1>Conference Chair</h1>
        {conferenceChair.length > 0 ? (
          ""
        ) : (
          <p>Information about our Conference Chair will be updated soon.</p>
        )}
        <section className="skeleton">
          {conferenceChair.map((speaker, index) => {
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
              length: Math.max(4 - conferenceChair.length, 0),
            }).map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)}
        </section>
      </section>

      <section>
        <h1>Keynote Speakers</h1>
        {keynoteSpeakers.length > 0 ? (
          ""
        ) : (
          <p>Information about our Keynote Speakers will be updated soon.</p>
        )}
        <section className="skeleton">
          {keynoteSpeakers.map((speaker, index) => {
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
              length: Math.max(4 - keynoteSpeakers.length, 0),
            }).map((_, index) => <CardSkeleton key={`skeleton-${index}`} />)}
        </section>
      </section>

      <section>
        <h1>Session Speakers</h1>
        {SessionSpeakers.length === 0 ? (
          <p>Information about our Session Speakers will be updated soon.</p>
        ) : (
          ""
        )}
        <section className="skeleton">
          {SessionSpeakers.map((speaker, index) => {
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
            Array.from({ length: Math.max(4 - SessionSpeakers.length, 0) }).map(
              (_, index) => <CardSkeleton key={`skeleton-${index}`} />
            )}
        </section>
      </section>

      <section>
        <h1>Session Chairs</h1>
        {SessionChair.length === 0 ? (
          <p>Information about our Session Chairs will be updated soon.</p>
        ) : (
          ""
        )}
        <section className="skeleton">
          {SessionChair.map((speaker, index) => {
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
            Array.from({ length: Math.max(4 - SessionChair.length, 0) }).map(
              (_, index) => <CardSkeleton key={`skeleton-${index}`} />
            )}
        </section>
      </section>
    </div>
  );
};

export default Speaker;
