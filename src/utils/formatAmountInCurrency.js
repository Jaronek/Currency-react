export const formatAmountInCurrency = (amount, currency) => {
  console.log(amount)
  if(amount < 0) return(
    amount = 'Wrong Value'
  )
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  return formatter.format(amount).replace(/\u00a0/g, ' ');
};