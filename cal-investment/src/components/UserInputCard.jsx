import UserInput from "./UserInput";

export default function UserInputCard({ onChange }) {
    const labels = ['initialInvestment', 'annualInvestment', 'expectedReturn', 'duration']
    return (
        <section id="user-input">
            <div className="input-group">
                {labels.map((label) => <UserInput key={label} label={label} required onChange={onChange} />)}
            </div>
        </section>
    )
}