import React from "react";
import SpeakersData from "./SpeakersData";

const ROLE_ORDER = [
  "Welcome Address",
  "Guest of Honour",
  "Conference Chair",
  "Keynote Speakers",
  "Session Speakers",
  "Session Chairs",
];

const ROLE_COLORS = {
  "Welcome Address": "text-green-600",
  "Guest of Honour": "text-green-600",
  "Conference Chair": "text-green-600",
  "Keynote Speakers": "text-green-600",
  "Session Speakers": "text-green-600",
  "Session Chairs": "text-green-600",
};

const BADGE_COLORS = {
  "Welcome Address": "bg-green-50 text-green-700 border border-green-200",
  "Guest of Honour": "bg-green-50 text-green-700 border border-green-200",
  "Conference Chair": "bg-green-50 text-green-700 border border-green-200",
  "Keynote Speakers": "bg-green-50 text-green-700 border border-green-200",
  "Session Speakers": "bg-green-50 text-green-700 border border-green-200",
  "Session Chairs": "bg-orange-50 text-orange-700 border border-orange-200",
};

const Speakers = () => {
  const speakersByRole = SpeakersData.reduce((acc, speaker) => {
    const role = speaker.role || "Session Speakers";
    if (!acc[role]) acc[role] = [];
    acc[role].push(speaker);
    return acc;
  }, {});

  const sortedRoles = ROLE_ORDER.filter((role) => speakersByRole[role]);

  return (
    <div className="relative">
      {/* Banner Section */}
      {/* <div className="relative" data-aos="fade-up">
        <img
          className="absolute z-[-10] h-full w-full object-cover"
          src="/images/speakers-banner.webp"
          alt="speakers-banner"
          width={800}
          height={400}
          loading="lazy"
        />
        <h1 className="relative">
          <svg
            viewBox="0 0 500 60"
            className="w-full h-20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <text
              x="50%"
              y="50%"
              dominantBaseline="middle"
              textAnchor="middle"
              style={{
                fontSize: "45px",
                fontWeight: "bold",
                fill: "none",
                stroke: "white",
                strokeWidth: "2px",
                paintOrder: "stroke",
                strokeLinejoin: "round",
              }}
              className="text-[30px] sm:text-[45px]"
            >
              Conference Speakers
            </text>
          </svg>
        </h1>
      </div> */}

      {/* Role Sections */}
      {sortedRoles.map((role, roleIndex) => (
        <div
          key={role}
          className={`${roleIndex > 0 ? "mt-16 pt-8 border-t border-gray-200" : "mt-12"}`}
          
        >
          {/* Role Title */}
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${ROLE_COLORS[role]}`}>
              {role}
            </h2>
          </div>

          {/* Speakers Grid */}
          <section
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 md:px-12 mb-12"
            
          >
            {speakersByRole[role].map(
              ({ image, name, title, title2, title3, title4, title5, title6, country, back }, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 p-5 flex flex-col items-center h-[450px] border border-green-100"
                >
                  {/* Speaker Image */}
                  <img
                    src={image}
                    alt={name}
                    style={{
                      objectPosition: back === "top" ? "top" : "center",
                    }}
                    width={200}
                    height={200}
                    loading="lazy"
                    className="w-[200px] h-[200px] rounded-full object-cover border-4 border-green-400 p-1 mb-3"
                  />

                  {/* Speaker Name */}
                  <h2 className="text-base font-semibold text-center mb-2 min-h-[40px] flex items-center text-green-700">
                    {name}
                  </h2>

                  {/* Speaker Info */}
                  <div className="text-center text-xs space-y-0.5 flex-1 overflow-y-auto w-full">
                    {title && <p>{title}</p>}
                    {title2 && <p>{title2}</p>}
                    {title3 && <p>{title3}</p>}
                    {title4 && <p>{title4}</p>}
                    {title5 && <p>{title5}</p>}
                    {title6 && <p>{title6}</p>}
                    {/* {country && (
                      <p className="font-bold text-black pt-3">
                        Country:{" "}
                        <span className="font-bold text-orange-600">{country}</span>
                      </p>
                    )} */}
                  </div>

                  {/* Role Badge */}
                  {/* <span
                    className={`mt-3 px-3 py-1 rounded-full text-[11px] font-semibold ${BADGE_COLORS[role]}`}
                  >
                    {role}
                  </span> */}
                </div>
              )
            )}
          </section>
        </div>
      ))}
    </div>
  );
};

export default Speakers;