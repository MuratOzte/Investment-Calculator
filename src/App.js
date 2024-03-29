import { useState } from 'react';
import Header from './Components/Header';
import ResultTable from './Components/ResultTable';
import UserInput from './Components/UserInput';

function App() {
    const [userInput, setUserInput] = useState(null);

    const calculateHandler = (userI) => {
        setUserInput(userI);
    };

    const yearlyData = [];

    if (userInput) {
        let currentSavings = +userInput['current-savings'];
        const yearlyContribution = +userInput['yearly-contribution'];
        const expectedReturn = +userInput['expected-return'] / 100;
        const duration = +userInput['duration'];

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
                currentSavings: currentSavings,
                initialInvensment: +userInput['current-savings']
            });
        }
    }

    return (
        <div>
            <Header />
            <UserInput onCalculate={calculateHandler} />
            {!userInput && <p style={{textAlign:'center'}} >No investment calculated yet</p>}
            {userInput && <ResultTable data={yearlyData} />}
        </div>
    );
}

export default App;
