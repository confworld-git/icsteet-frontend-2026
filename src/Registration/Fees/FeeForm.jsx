import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { calculatePricing } from "../../utils/pricingCalculator";

// selectedJournal and selectedAddons are lifted to Fees.jsx and passed as props
const FeeForm = ({ selectedFee, selectedJournal, selectedAddons }) => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, watch } = useForm();

  const participantCategory = watch("Participant_Category");

  const [hasMembership, setHasMembership] = useState(false);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponValidating, setCouponValidating] = useState(false);
  const [pricing, setPricing] = useState(null);

  // ── Recalculate pricing whenever any dependency changes ─────────
  React.useEffect(() => {
    if (selectedFee.amount && participantCategory) {
      updatePricing();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedFee.amount,
    participantCategory,
    hasMembership,
    appliedCoupon,
    selectedJournal,
    selectedAddons,
  ]);

  const updatePricing = () => {
    const journalAmount = selectedJournal?.specialPrice || 0;
    const addonsAmount = selectedAddons.reduce((sum, a) => sum + a.price, 0);

    // Discounts apply to the COMBINED total (base + journal + addons)
    const combinedBase = selectedFee.amount + journalAmount + addonsAmount;

    const calculations = calculatePricing({
      baseAmount: combinedBase,
      participantCategory,
      hasMembership,
      hasCoupon: !!appliedCoupon,
      currency: "USD",
    });

    // Attach breakdown extras for display & submission
    calculations.registrationBase = selectedFee.amount;
    calculations.journalAmount = journalAmount;
    calculations.addonsAmount = addonsAmount;

    setPricing(calculations);
  };

  // ── Membership toggle ───────────────────────────────────────────
  const handleMembershipToggle = () => {
    setHasMembership(!hasMembership);
  };

  // ── Coupon handlers ─────────────────────────────────────────────
  const handleCouponApply = async () => {
    if (!couponCode.trim()) {
      toast.error("Please enter a coupon code");
      return;
    }
    if (!selectedFee.amount) {
      toast.error("Please select a registration fee first");
      return;
    }
    setCouponValidating(true);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}api/coupons/validate`,
        { code: couponCode }
      );
      if (response.data.success) {
        setAppliedCoupon(response.data.coupon);
        toast.success(`Coupon "${couponCode}" applied successfully!`);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Invalid coupon code");
      setAppliedCoupon(null);
    } finally {
      setCouponValidating(false);
    }
  };

  const handleCouponRemove = () => {
    setCouponCode("");
    setAppliedCoupon(null);
  };

  // ── Form submit ─────────────────────────────────────────────────
  const onSubmit = async (data) => {
    try {
      if (!selectedFee.amount || !pricing) {
        toast.error("Please Select a Fee From Registration Fee Table! ⚠️");
        return;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_API_LINK}Registration`,
        {
          ...data,
          selectedFee,
          Total: pricing.total,
          pricingData: {
            // Base registration fee (before journal/addons)
            baseAmount: selectedFee.amount,

            // Journal publication support
            journalSupport: selectedJournal
              ? {
                  tier: selectedJournal.tier,
                  package: selectedJournal.package,
                  amount: selectedJournal.specialPrice,
                }
              : null,
            journalAmount: pricing.journalAmount,

            // Add-ons
            addons: selectedAddons.map((a) => ({
              label: a.label,
              sublabel: a.sublabel,
              amount: a.price,
            })),
            addonsAmount: pricing.addonsAmount,

            // Discounts (applied to combined total)
            finalAmount: pricing.finalAmount,
            hasMembership,
            membershipFee: pricing.membershipFee,
            couponCode: appliedCoupon?.code || null,
            couponDiscount: pricing.couponDiscount,
            membershipDiscount: pricing.membershipDiscount,
          },
        }
      );

      const { order_id, amount } = response.data;

      const options = {
        key: import.meta.env.RAZORPAY_KEY,
        amount,
        currency: "USD",
        name: "Confworld Educational Research and Development Association (CERADA)",
        description: "Payment for Conference Registration",
        image: "https://i.postimg.cc/Fz2qpsWf/logo.png",
        order_id,
        handler: function (response) {
          axios
            .post(`${import.meta.env.VITE_API_LINK}verify-payment`, {
              payment_id: response.razorpay_payment_id,
              order_id: response.razorpay_order_id,
              signature: response.razorpay_signature,
            })
            .then(() => {
              toast.success("Payment Successful!");
              reset();
              navigate("/Payment_Success_Page", {
                state: {
                  paymentStatus: "Success",
                  amount,
                  time: new Date().toLocaleString(),
                  Category: selectedFee.category,
                  Type: selectedFee.type,
                  Title: selectedFee.Title,
                },
              });
            })
            .catch((error) => {
              console.error("Payment verification failed:", error);
            });
        },
        prefill: {
          name: data.First_Name,
          email: data.Email,
          contact: data.Mobile_Number,
        },
        theme: { color: "#0F0E4A" },
        modal: {
          ondismiss: async () => {
            const validateRes = await axios.post(
              `${import.meta.env.VITE_API_LINK}payment/cancellation`,
              { order_id }
            );
            toast.error(validateRes.data.msg);
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.log(error);
      toast.error("Registration failed. Please try again.");
    }
  };

  // ── Whether to show the optional sections ───────────────────────
  const feeSelected = !!selectedFee.amount;

  return (
    <form
      className="registration_form_paper"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* ── STEP 1: Personal details form ───────────────────────── */}
      <div className="registration-form">
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <select
            id="title"
            required
            {...register("Title", { required: "Title is required" })}
          >
            <option disabled value="">Select Title</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            placeholder="Enter your first name"
            id="first-name"
            required
            {...register("First_Name", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            placeholder="Enter your last name"
            id="last-name"
            required
            {...register("Last_Name", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="certificate-name">Certificate Name</label>
          <input
            type="text"
            placeholder="Enter certificate name"
            id="certificate-name"
            required
            {...register("Certificate_Name", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="date"
            id="dob"
            required
            {...register("Date_Of_Birth", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="nationality">Nationality</label>
          <input
            type="text"
            placeholder="Enter your nationality"
            id="nationality"
            required
            {...register("Nationality", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="department">Department</label>
          <input
            type="text"
            placeholder="Enter your department"
            id="department"
            required
            {...register("Department", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            placeholder="Enter your institution"
            id="institution"
            required
            {...register("Institution", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile-number">Mobile number with country code</label>
          <PhoneInput
            international
            defaultCountry="US"
            limitMaxLength
            placeholder="Enter mobile number"
            id="mobile-number"
            required
            {...register("Mobile_Number", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            placeholder="Enter your email"
            id="email"
            required
            {...register("Email", { required: true })}
          />
        </div>

        <div className="form-group">
          <label htmlFor="participant-category">Participant Category</label>
          <select
            id="participant-category"
            required
            {...register("Participant_Category", { required: true })}
          >
            <option disabled value="">Select Participant Category</option>
            <option value="academician">Academicians</option>
            <option value="delegate">Delegates</option>
            <option value="research-scholar">Research Scholars</option>
            <option value="student">Student</option>
          </select>
        </div>

        <div className="form-group">
          <label>Presentation Category</label>
          <div>
            <label>
              <input
                type="radio"
                value="oral"
                required
                {...register("Presentation_Category")}
              />
              Oral/Live
            </label>
            <label>
              <input
                type="radio"
                value="poster"
                required
                {...register("Presentation_Category")}
              />
              Poster
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Presentation Type</label>
          <div>
            <label>
              <input
                type="radio"
                value="Virtual"
                required
                {...register("Presentation_Type")}
              />
              Virtual
            </label>
            <label>
              <input
                type="radio"
                value="Physical"
                required
                {...register("Presentation_Type")}
              />
              Physical
            </label>
          </div>
        </div>
      </div>

      {/* ── STEP 2: Membership + Coupon + Pricing breakdown ─────── */}
      {/* (Journal Support and Add-ons are rendered in Fees.jsx, above the form) */}
      <div className="cash">
        {/* Membership */}
        {feeSelected && participantCategory && (
          <div className="membership-section">
            <div className="membership-header">
              <div>
                <h3 className="membership-title">
                  Premium Membership ($
                  {participantCategory?.toLowerCase().includes("student")
                    ? "15"
                    : "20"}
                  )
                </h3>
                <p className="membership-desc">
                  Get 5% discount on registration fee
                </p>
              </div>
              <label className="toggle-switch">
                <input
                  type="checkbox"
                  checked={hasMembership}
                  onChange={handleMembershipToggle}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>
        )}

        {/* Coupon */}
        {feeSelected && (
          <div className="coupon-section">
            <h3 className="coupon-title">
              Get 5% Discount with a coupon code!
            </h3>
            {!appliedCoupon ? (
              <div className="coupon-input-group">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) =>
                    setCouponCode(e.target.value.toUpperCase())
                  }
                  placeholder="Enter coupon code"
                  className="coupon-input"
                />
                <button
                  type="button"
                  onClick={handleCouponApply}
                  disabled={couponValidating}
                  className="coupon-apply-btn"
                >
                  {couponValidating ? "Validating..." : "Apply"}
                </button>
              </div>
            ) : (
              <div className="coupon-applied">
                <div>
                  <p className="coupon-success">
                    ✓ Coupon "{appliedCoupon.code}" applied
                  </p>
                  {appliedCoupon.description && (
                    <p className="coupon-desc">{appliedCoupon.description}</p>
                  )}
                </div>
                <button
                  type="button"
                  onClick={handleCouponRemove}
                  className="coupon-remove-btn"
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        )}

        {/* Pricing Breakdown */}
        {pricing && (
          <div className="pricing-breakdown">
            <h3 className="pricing-title">Price Breakdown</h3>

            {/* Registration base */}
            <div className="pricing-row">
              <span>Base Registration Fee:</span>
              <span>${pricing.registrationBase}</span>
            </div>

            {/* Journal line */}
            {pricing.journalAmount > 0 && (
              <div className="pricing-row">
                <span>
                  Journal Support ({selectedJournal?.tier}):
                </span>
                <span>+ ${pricing.journalAmount.toLocaleString()}</span>
              </div>
            )}

            {/* Addons line */}
            {pricing.addonsAmount > 0 && (
              <div className="pricing-row">
                <span>
                  Add-ons ({selectedAddons.length} selected):
                </span>
                <span>+ ${pricing.addonsAmount}</span>
              </div>
            )}

            {/* Combined subtotal before discounts */}
            {(pricing.journalAmount > 0 || pricing.addonsAmount > 0) && (
              <div className="pricing-row" style={{ borderTop: "1px dashed #e0e0e0", paddingTop: "8px", marginTop: "4px" }}>
                <span>Combined Subtotal:</span>
                <span>
                  $
                  {(
                    pricing.registrationBase +
                    pricing.journalAmount +
                    pricing.addonsAmount
                  ).toLocaleString()}
                </span>
              </div>
            )}

            {/* Discounts */}
            {(hasMembership || appliedCoupon) && (
              <>
                {hasMembership && appliedCoupon ? (
                  <div className="pricing-row discount">
                    <span>Combined Discount (10%):</span>
                    <span>- ${pricing.totalDiscount}</span>
                  </div>
                ) : (
                  <>
                    {hasMembership && (
                      <div className="pricing-row discount">
                        <span>Membership Discount (5%):</span>
                        <span>- ${pricing.membershipDiscount}</span>
                      </div>
                    )}
                    {appliedCoupon && (
                      <div className="pricing-row discount">
                        <span>Coupon Discount (5%):</span>
                        <span>- ${pricing.couponDiscount}</span>
                      </div>
                    )}
                  </>
                )}
              </>
            )}

            {/* Membership fee add-back */}
            {hasMembership && (
              <div className="pricing-row">
                <span>Membership Fee:</span>
                <span>+ ${pricing.membershipFee}</span>
              </div>
            )}

            <div className="pricing-row subtotal">
              <span>Subtotal:</span>
              <span>${pricing.finalAmount}</span>
            </div>

            <div className="pricing-row">
              <span>Bank Convenience Charge:</span>
              <span>${pricing.bankTax}</span>
            </div>

            <div className="pricing-row total">
              <span>Total Amount:</span>
              <span>${pricing.total}</span>
            </div>

            {(hasMembership || appliedCoupon) && (
              <div className="savings-badge">
                🎉 You saved ${pricing.totalDiscount?.toFixed(2)}!
              </div>
            )}
          </div>
        )}

        <button type="submit" className="form-button">
          Check Out
        </button>
      </div>
    </form>
  );
};

export default FeeForm;