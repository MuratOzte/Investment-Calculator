export default function ResultTable(props) {
    console.log(props.data);

    return (
        <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Yearly income from interest</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {props.data.map((element) => (
                    <tr key={element.year} >
                        <td>{element.year}</td>
                        <td>{Math.round(element.savingsEndOfYear)}</td>
                        <td>{Math.round(element.yearlyInterest)}</td>
                        <td>{Math.round(element.savingsEndOfYear - element.initialInvensment - element.yearlyContribution * element.year)}</td>
                        <td>{Math.round(element.initialInvensment + element.yearlyContribution * element.year)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
