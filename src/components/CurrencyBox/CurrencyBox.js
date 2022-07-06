import { useState } from 'react';
import CurrencyForm from './../CurrencyForm/CurrencyForm';
import ResultBox from './../ResultBox/ResultBox';

const CurrencyBox = () => {
  const [data, setData] = useState({
    amount: 0,
    from: 'Zł',
    to: '$'
  });
  const handleDataChange = data => {
      if(isNaN(data.amount)){return(setData(data))}
      else{setData(data)}
  };

  return (
    <main>
      <CurrencyForm action={handleDataChange} />
      { data.amount  ? <ResultBox {...data} /> : NaN }
    </main>
  );
};

export default CurrencyBox;