import { calculateInvestmentResults, formatter } from "../util/investment"

export default function OutputTable({inputData}) {
    // handle recieve the data from the user input and display it in a table
    const results = calculateInvestmentResults(inputData)
    // intial investemnt for year 1
    const intialInvestment = 
        results[0].valueEndOfYear - 
        results[0].interest - 
        results[0].annualInvestment
    return (
        <div id="result">
            <table>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>Ivestement Value</th>
                        <th>Intreset (year) </th>
                        <th>Total Interest</th>
                        <th>Invested Capital</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((result) => {
                        // calculate the total interest for each year
                        const totalInterest = result.valueEndOfYear - intialInvestment - (result.annualInvestment * result.year)
                        const totalAmountInvested = result.valueEndOfYear - totalInterest
                        return (
                            <tr key={result.year}>
                                <td>{result.year}</td>
                                <td>{formatter.format(result.valueEndOfYear)}</td>
                                <td>{formatter.format(result.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}