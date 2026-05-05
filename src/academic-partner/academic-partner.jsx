import React from "react";

export default function AcademicPartnerCard() {
  return (
    <section className="py-8">
        <h1 className="text-3xl text-violet-950 font-extrabold text-center">Academic Partner</h1>
<div className="bg-white rounded-2xl shadow-xl hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-center text-center max-w-lg mx-auto">
      {/* Logo */}
      <img
        src="/images/sdcalogo.webp"
        alt="Academic Partner"
        className="w-80 h-40 object-contain mb-4"
      />

      {/* Title */}
      <div className="w-full bg-blue-800 text-white font-semibold text-sm md:text-base py-3 px-4 rounded-xl">
        St. Dominic College of Asia, Philippines
      </div>
    </div>
    </section>
    
  );
}
