import { cleanup, render, screen } from '@testing-library/react';
import ResultBox from './ResultBox';
import '@testing-library/jest-dom/extend-expect';

  describe('Component ResultBox', () => {
    it('should render without crashing', () => { 
        render(<ResultBox from="PLN" to="USD" amount={100} />)
    });
    it('should return proper amount of converted money from PLN to USD', () => {
        const amounts = [
            {amountPLN: 100.00, amountUSD: 28.57},
            {amountPLN: 20.00, amountUSD: 5.71},
            {amountPLN: 200.00, amountUSD: 57.14},
            {amountPLN: 345.00, amountUSD: 98.57}
        ]
        for(const amount of amounts){
        render(<ResultBox from="PLN" to="USD" amount={amount.amountPLN} />)
        const output = screen.getByTestId('result')
        expect(output).toHaveTextContent('PLN ' + amount.amountPLN + '.00 = $' + amount.amountUSD);
        cleanup();
        }
    });
    it('should return proper amount of converted money from USD to PLN', () => {
        const amounts = [
            {amountUSD: 100.00, amountPLN: 350},
            {amountUSD: 20.00, amountPLN: 70},
            {amountUSD: 200.00, amountPLN: 700},
            {amountUSD: 150.00, amountPLN: 525}
        ]
        for(const amount of amounts){
        render(<ResultBox from="USD" to="PLN" amount={amount.amountUSD} />)
        const output = screen.getByTestId('result')
        expect(output).toHaveTextContent('$' + amount.amountUSD + '.00 = PLN ' + amount.amountPLN + '.00');
        cleanup();
        }
    });
    it('should return proper amount on both side if from and to is same for PLN', () => {
        const amounts = [
            {amountPLN: 100.00},
            {amountPLN: 20.00},
            {amountPLN: 200.00},
            {amountPLN: 150.00}
        ]
        for(const amount of amounts){
        render(<ResultBox from="PLN" to="PLN" amount={amount.amountPLN} />)
        const output = screen.getByTestId('result')
        expect(output).toHaveTextContent('PLN ' + amount.amountPLN + '.00 = PLN ' + amount.amountPLN + '.00');
        cleanup();
        }
    });
    it('should return proper amount on both side if from and to is same for USD', () => {
        const amounts = [
            {amountUSD: 100.00},
            {amountUSD: 20.00},
            {amountUSD: 200.00},
            {amountUSD: 150.00}
        ]
        for(const amount of amounts){
        render(<ResultBox from="USD" to="USD" amount={amount.amountUSD} />)
        const output = screen.getByTestId('result')
        expect(output).toHaveTextContent('$' + amount.amountUSD + '.00 = $' + amount.amountUSD + '.00');
        cleanup();
        }
    });
    it('should return text Wrong value', () => {
        const amounts = [
            {amountUSD: -100.00},
            {amountUSD: -20.00},
            {amountUSD: -200.00},
            {amountUSD: -150.00}
        ]
        for(const amount of amounts){
        render(<ResultBox from="USD" to="USD" amount={amount.amountUSD} />)
        const output = screen.getByTestId('result')
        expect(output).toHaveTextContent('Wrong Value = Wrong Value');
        cleanup();
        }
    });
  });