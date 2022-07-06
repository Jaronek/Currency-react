export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.5;
  let currency = 'USD';
  if(isNaN(PLNtoUSD)){
    currency = NaN;
  }
  
  const formatter = new Intl.NumberFormat('en-US', {

    style: 'currency',
    currency: currency
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, " ");
}