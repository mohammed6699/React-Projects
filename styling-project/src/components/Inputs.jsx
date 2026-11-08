import styled from "styled-components"

export const Label = styled.label`
display: block;
  margin-bottom: 0.5rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${({$invalid}) => $invalid ? '#f87171' : '#6b7280'};
`
// now I need to handle the dynamic styling here using styled components let's see that 
// so for that I will delete all the condition styling from tages starting with labels
// then I will add a name prop like invalid and assign it to the value I create for invalid inputs
// we can see that the dynamic invalid only change the text color as shown in the css file
// so let's handle it using styled components 

export const Input = styled.input`
width: 100%;
  padding: 0.75rem 1rem;
  line-height: 1.5;
  background-color: ${({$invalid}) => $invalid ? '#fed2d2' : '#d1d5db'};
  color: ${({$invalid}) => $invalid ? '#ef4444' : '#374151'};
  border: 1px solid ${({$invalid}) => $invalid ? '#f73f3f' : 'transparent'};
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  `