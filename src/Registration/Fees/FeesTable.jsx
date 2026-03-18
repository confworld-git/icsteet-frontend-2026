import React from "react";
import "./Fees.css";

const FeesTable = ({ feesData, setSelectedFee }) => {
  if (!feesData) return <p>Loading...</p>;

  const handleSelection = (category, type, Title, amount) => {
    console.log('Selected amount:', amount, 'Type:', typeof amount); // Debug log
    
    // Convert amount to number, handling both string and number inputs
    const numericAmount = typeof amount === 'string' ? parseFloat(amount) : Number(amount);
    
    if (isNaN(numericAmount)) {
      console.error('Invalid amount selected:', amount);
      return;
    }
    
    setSelectedFee({ 
      category, 
      type, 
      Title, 
      amount: numericAmount
    });
  };

  return (
    <section className="flex flex-col">
      <div
        className="registration_fee"
        data-aos-anchor-placement="top-bottom"
        data-aos="fade-up"
      >
        <div data-aos-anchor-placement="top-bottom" data-aos="fade-up">
          <h3>Physical (Onsite) Participants</h3>
          <table border="1" className="fee_table">
            <thead>
              <tr>
                <th>categories</th>
                <th>Early Bird (USD)</th>
                <th>Final (USD)</th>
                <th>On Spot (USD)</th>
              </tr>
            </thead>
            <tbody>
              {feesData[0].participation.physical_onsite.categories.map(
                (category, index) => (
                  <tr key={index}>
                    <td>{category.name.replace(/\//g, " / ")}</td>
                    <td id="fee_in">
                      <label className="line-through">
                        <input
                          type="radio"
                          name="fee"
                          value={category.early_bird_usd}
                          disabled
                          onChange={() =>
                            handleSelection(
                              category.name,
                              "Early Bird Registration",
                              "Physical",
                              category.early_bird_usd
                            )
                          }
                        />
                        <span>
                          ${category.early_bird_usd}
                        </span>
                      </label>
                    </td>
                    <td id="fee_in">
                      <label>
                        <input
                          type="radio"
                          name="fee"
                          value={category.final_usd}
                          onChange={() =>
                            handleSelection(
                              category.name,
                              "Final Registration",
                              "Physical",
                              category.final_usd
                            )
                          }
                        />
                        ${category.final_usd}
                      </label>
                    </td>
                    <td id="fee_in">
                      <label>
                        <input
                          type="radio"
                          name="fee"
                          value={category.on_spot}
                          onChange={() =>
                            handleSelection(
                              category.name,
                              "On Spot Registration",
                              "Physical",
                              category.on_spot
                            )
                          }
                        />
                        ${category.on_spot}
                      </label>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>

        <div data-aos-anchor-placement="top-bottom" data-aos="fade-up">
          <h3>Virtual (Online) Participants</h3>
          <table border="1" className="fee_table">
            <thead>
              <tr>
                <th>categories</th>
                <th>Early Bird (USD)</th>
                <th>Final (USD)</th>
              </tr>
            </thead>
            <tbody>
              {feesData[0].participation?.virtual_online?.categories?.map(
                (category, index) => (
                  <tr key={index}>
                    <td>{category.name.replace(/\//g, " / ")}</td>
                    <td id="fee_in">
                      <label className="line-through">
                        <input
                          type="radio"
                          name="fee"
                          disabled
                          value={category.early_bird_usd}
                          onChange={() =>
                            handleSelection(
                              category.name,
                              "Early Bird Registration",
                              "Virtual",
                              category.early_bird_usd
                            )
                          }
                        />
                        <span>
                          ${category.early_bird_usd}
                        </span>
                      </label>
                    </td>
                    <td id="fee_in">
                      <label>
                        <input
                          type="radio"
                          name="fee"
                          value={category.final_usd}
                          onChange={() =>
                            handleSelection(
                              category.name,
                              "Final Registration",
                              "Virtual",
                              category.final_usd
                            )
                          }
                        />
                        ${category.final_usd}
                      </label>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>

     
    </section>
  );
};

export default FeesTable;