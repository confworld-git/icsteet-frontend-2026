export const calculatePricing = ({ 
  baseAmount,       // base registration fee ONLY
  journalAmount,    // journal support amount
  addonsAmount,     // addons total
  participantCategory, 
  hasMembership, 
  hasCoupon,
  currency = "USD" 
}) => {
  const base = typeof baseAmount === 'string' ? parseFloat(baseAmount) : Number(baseAmount);
  const journal = Number(journalAmount) || 0;
  const addons = Number(addonsAmount) || 0;

  if (isNaN(base) || base <= 0) {
    console.error('Invalid baseAmount:', baseAmount);
    return null;
  }

  const isStudent = participantCategory?.toLowerCase().includes("student");
  const membershipFee = hasMembership ? (isStudent ? 15 : 20) : 0;

  // Discounts apply to BASE REGISTRATION FEE only
  let membershipDiscount = 0;
  let couponDiscount = 0;
  let totalDiscountPercent = 0;

  if (hasMembership && hasCoupon) {
    totalDiscountPercent = 0.10;
  } else if (hasMembership) {
    totalDiscountPercent = 0.05;
  } else if (hasCoupon) {
    totalDiscountPercent = 0.05;
  }

  const totalDiscount = base * totalDiscountPercent;

  if (hasMembership && hasCoupon) {
    membershipDiscount = totalDiscount / 2;
    couponDiscount = totalDiscount / 2;
  } else if (hasMembership) {
    membershipDiscount = totalDiscount;
  } else if (hasCoupon) {
    couponDiscount = totalDiscount;
  }

  // Discounted base fee
  const discountedBase = base - totalDiscount;

  // Final amount = discounted base + journal + addons + membership fee
  const finalAmount = discountedBase + journal + addons + membershipFee;

  // Bank tax on final amount
  const bankTax = finalAmount * 0.060;
  const total = finalAmount + bankTax;

  return {
    baseAmount: Number(base.toFixed(2)),
    journalAmount: Number(journal.toFixed(2)),
    addonsAmount: Number(addons.toFixed(2)),
    membershipFee: Number(membershipFee.toFixed(2)),
    membershipDiscount: Number(membershipDiscount.toFixed(2)),
    couponDiscount: Number(couponDiscount.toFixed(2)),
    totalDiscount: Number(totalDiscount.toFixed(2)),
    discountedBase: Number(discountedBase.toFixed(2)),
    finalAmount: Number(finalAmount.toFixed(2)),
    bankTax: Number(bankTax.toFixed(2)),
    total: Number(total.toFixed(2)),
    currency
  };
};