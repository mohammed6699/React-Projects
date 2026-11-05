import { useState } from "react"

export default function UserInput({label, onChange, ...props}) {
    const inputId = label.toLowerCase().replace(/\s+/g, '-')
    
    
    return (
        <p {...props}>
            <label htmlFor={inputId}>{label}</label>
            <input id={inputId} type="number" onChange={(e) => onChange(label, Number(e.target.value))} />
        </p>
    )
}