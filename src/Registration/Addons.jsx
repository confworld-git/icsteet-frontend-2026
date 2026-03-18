import React, { useState } from "react";
import { addonsList } from "../utils/journalData";

const Addons = ({ selectedAddons, setSelectedAddons }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleAddon = (addon) => {
    setSelectedAddons((prev) => {
      const exists = prev.find((a) => a.id === addon.id);
      if (exists) return prev.filter((a) => a.id !== addon.id);
      return [...prev, addon];
    });
  };

  const isSelected = (id) => selectedAddons.some((a) => a.id === id);
  const totalAddonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);

  return (
    <div className="py-6">
      {/* Toggle button */}
      <div className="flex justify-center mb-6">
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-sm hover:bg-green-700 transition-all duration-200 shadow-md shadow-green-200 hover:shadow-lg"
        >
          <span>☰</span>
          {expanded ? "Hide" : "Add"} Addons
          {selectedAddons.length > 0 && (
            <span className="bg-white text-green-700 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center ml-1">
              {selectedAddons.length}
            </span>
          )}
        </button>
      </div>

      {/* Addons grid */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          expanded ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {addonsList.map((addon) => {
            const selected = isSelected(addon.id);

            return (
              <button
                key={addon.id}
                type="button"
                onClick={() => toggleAddon(addon)}
                className={`
                  relative text-left rounded-2xl border-2 overflow-hidden transition-all duration-200 w-full
                  ${selected
                    ? "border-green-600 shadow-lg shadow-green-100 scale-[1.02]"
                    : "border-gray-200 bg-white shadow-sm hover:border-green-300 hover:shadow-md hover:scale-[1.01]"
                  }
                `}
              >
                {/* Solid green top strip */}
                <div className={`px-4 pt-4 pb-5 ${selected ? "bg-green-600" : "bg-green-600"}`}>
                  <div className="flex justify-between items-start">
                    <div className="text-2xl">{addon.icon}</div>
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                        selected
                          ? "bg-white border-white"
                          : "border-white/50 bg-white/20"
                      }`}
                    >
                      {selected && (
                        <span className="text-green-600 text-[10px] font-bold">✓</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card body */}
                <div className={`px-4 py-3 ${selected ? "bg-green-50" : "bg-white"}`}>
                  <p className="font-semibold text-gray-800 text-sm mb-0.5">
                    {addon.label}
                  </p>
                  {addon.sublabel && (
                    <p className="text-xs text-gray-400 mb-2">{addon.sublabel}</p>
                  )}
                  <p className={`text-lg font-extrabold ${selected ? "text-green-700" : "text-gray-900"}`}>
                    ${addon.price}{" "}
                    <span className="text-xs text-gray-400 font-normal">USD</span>
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Addons summary */}
        {selectedAddons.length > 0 && (
          <div className="mt-5 bg-green-50 border border-green-200 rounded-xl p-4">
            <p className="text-xs font-semibold text-green-700 uppercase tracking-wider mb-3">
              Selected Add-ons
            </p>
            <div className="space-y-2">
              {selectedAddons.map((addon) => (
                <div key={addon.id} className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 flex items-center gap-2">
                    <span>{addon.icon}</span>
                    {addon.label}
                    {addon.sublabel && (
                      <span className="text-gray-400">({addon.sublabel})</span>
                    )}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-sm text-green-700">
                      +${addon.price}
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleAddon(addon);
                      }}
                      className="text-red-400 hover:text-red-600 text-xs font-medium"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-green-200 flex justify-between">
              <span className="font-semibold text-sm text-green-800">Add-ons Total</span>
              <span className="font-bold text-green-700">+${totalAddonsAmount}</span>
            </div>
          </div>
        )}
      </div>

      {/* Collapsed summary */}
      {!expanded && selectedAddons.length > 0 && (
        <div className="mt-3 flex items-center justify-between bg-green-600 rounded-xl px-5 py-3 shadow-md shadow-green-200">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs font-bold">{selectedAddons.length}</span>
            </span>
            <span className="text-sm font-medium text-white">
              {selectedAddons.length} add-on{selectedAddons.length > 1 ? "s" : ""} selected
            </span>
          </div>
          <span className="font-bold text-white">+${totalAddonsAmount}</span>
        </div>
      )}
    </div>
  );
};

export default Addons;