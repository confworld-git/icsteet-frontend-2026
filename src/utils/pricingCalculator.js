export const calculatePricing = ({ 
  baseAmount, 
  participantCategory, 
  hasMembership, 
  hasCoupon,
  currency = "USD" 
}) => {
  // Convert baseAmount to number if it's a string
  const base = typeof baseAmount === 'string' ? parseFloat(baseAmount) : Number(baseAmount);
  
  // Validate that we have a valid number
  if (isNaN(base) || base <= 0) {
    console.error('Invalid baseAmount:', baseAmount, 'converted to:', base);
    return null;
  }
  
  const isStudent = participantCategory?.toLowerCase().includes("student");
  
  // Membership fee based on category
  const membershipFee = hasMembership ? (isStudent ? 15 : 20) : 0;
  
  // Calculate discounts
  let membershipDiscount = 0;
  let couponDiscount = 0;
  let totalDiscountPercent = 0;
  
  if (hasMembership && hasCoupon) {
    // Combined discount: 10%
    totalDiscountPercent = 0.10;
  } else if (hasMembership) {
    // Membership only: 5%
    totalDiscountPercent = 0.05;
    membershipDiscount = base * 0.05;
  } else if (hasCoupon) {
    // Coupon only: 5%
    totalDiscountPercent = 0.05;
    couponDiscount = base * 0.05;
  }
  
  const totalDiscount = base * totalDiscountPercent;
  
  // If both selected, split discount evenly for display
  if (hasMembership && hasCoupon) {
    membershipDiscount = totalDiscount / 2;
    couponDiscount = totalDiscount / 2;
  }
  
  // Calculate final amount
  const discountedAmount = base - totalDiscount;
  const finalAmount = discountedAmount + membershipFee;
  
  // Bank tax (5.8%)
  const bankTax = finalAmount * 0.060;
  const total = finalAmount + bankTax;
  
  return {
    baseAmount: Number(base.toFixed(2)),
    membershipFee: Number(membershipFee.toFixed(2)),
    membershipDiscount: Number(membershipDiscount.toFixed(2)),
    couponDiscount: Number(couponDiscount.toFixed(2)),
    totalDiscount: Number(totalDiscount.toFixed(2)),
    finalAmount: Number(finalAmount.toFixed(2)),
    bankTax: Number(bankTax.toFixed(2)),
    total: Number(total.toFixed(2)),
    currency
  };
};