export const convertPLNToUSD = (PLN) => {

if(isNaN(PLN)){
  return(NaN)
}else if(typeof PLN === 'string'){
  return(NaN);
}else if(PLN < 0){
  return(PLN = '$0.00')
}else if(typeof PLN !== 'number' && typeof PLN !== 'string'){
  return('Error')
}

  const PLNtoUSD = PLN / 3.5;
  const formatter = new Intl.NumberFormat('en-US', {

    style: 'currency',
    currency: 'USD',
  });
  return formatter.format(PLNtoUSD).replace(/\u00a0/g);
}