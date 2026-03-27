import { useState } from "react";

const PLACE_ID = "ChIJS_XgkjTQlzMRwntJsQnM5iU";
const MAPS_URL = `https://maps.app.goo.gl/VCtnZBhr37oEb8eT7`;
const HOTEL_IMAGE = "/hotel.jpg"

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    const fill = Math.min(1, Math.max(0, rating - (i - 1)));
    stars.push(
      <span 
        key={i} 
        className="relative inline-block"
        style={{ 
          fontSize: "16px",
          position: "relative", 
          display: "inline-block" 
        }}
      >
        <span className="text-gray-300">★</span>
        <span
          className="absolute left-0 top-0 overflow-hidden text-amber-500"
          style={{ width: `${fill * 100}%` }}
        >★</span>
      </span>
    );
  }
  return <div className="flex gap-0.5">{stars}</div>;
};

export default function AcaciaHotelCard() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="flex items-center justify-center p-6 font-georgia">
      <div className="w-full max-w-[800px] h-[300px] flex rounded-[20px] overflow-hidden bg-white shadow-[0_30px_80px_rgba(0,0,0,0.4)] flex-row">
        {/* Photo */}
        <div className="flex-none w-[360px] h-full relative overflow-hidden bg-slate-200">
          {!imgError ? (
            <img
              src={HOTEL_IMAGE}
              alt="Acacia Hotel Manila"
              onError={() => setImgError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-600 text-[48px]">
              🏨
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 p-[32px_32px_28px] flex flex-col justify-between">
          {/* Header */}
          <div className="">
            <h1 className="m-0 mb-[12px] text-[22px] font-bold text-slate-900 leading-tight [-webkit-line-clamp:unset] [-webkit-box-orient:unset]">
              Acacia Hotel Manila
            </h1>
            <div className="flex items-center gap-3">
              <StarRating rating={4.3} />
              <span className="font-sans text-xs text-gray-500">
                4.3 · 4,154 reviews
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gray-100 mb-5" />

          {/* Info */}
          <div className="mb-auto">
            <div className="flex items-start gap-2.5 mb-4">
              <span className="text-xl mt-0.5 flex-shrink-0">📍</span>
              <p className="m-0 font-sans text-[13.5px] text-gray-700 leading-6">
                5400 E Asia Dr, Alabang<br />
                Muntinlupa, 1781 Metro Manila<br />
                Philippines
              </p>
            </div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="text-base flex-shrink-0">📞</span>
              <a href="tel:+6327720 2000" className="font-sans text-[13.5px] text-blue-600 no-underline">
                +63 2 7720 2000
              </a>
            </div>
          </div>

          {/* Button */}
          <div className="pt-3">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-[10px] w-full py-[13px] px-6 bg-gradient-to-r from-[#1a73e8] to-[#0d5fd4] text-white rounded-[12px] no-underline font-sans text-sm font-semibold tracking-[0.2px] box-border hover:opacity-90 transition-opacity duration-200"
              onMouseEnter={(e) => e.currentTarget.style.opacity = "0.88"}
              onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" fill="white"/>
                <circle cx="12" cy="9" r="2.5" fill="#1a73e8"/>
              </svg>
              <h1 className="text-white">View on Google Maps</h1>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
