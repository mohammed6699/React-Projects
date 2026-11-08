import { useState } from 'react';
import styled from 'styled-components';
import { NewButton } from './Buttons.Jsx';
import { SignButton } from './Buttons.Jsx';
import { Input, Label } from './Inputs';
const ControlContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
`



export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
        <ControlContainer>
        <p>
          {/* the dynamic style gives us a huge chance to set styles accrding to more than an occasion
            like in this case I set the calss label ".label" that the fixed part here 
            in case this label is invalid I bind on invalid class or not ${emailNotValid ? 'invalid' : ''}
            here I merge more than one style
          
          */}
          {/* in order to not clash with the built in props like the invalid here we can simply add $ to it  */}
          <Label $invalid={emailNotValid}>Email</Label>
          <Input
            type="email"
            $invalid={emailNotValid}
            onChange={(event) => handleInputChange('email', event.target.value)}
          />
        </p>
        <p>
          {/* now the styled components library work as that  under the hood it creates a 
          label html tag and pass to it all it all the styles you create and also teh props that why you can see the 
          invalid class works here for the inputs we create using Label
          */}
          <Label $inavlid={passwordNotValid}>Password</Label>
          <Input
            type="password"
            $invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
        </p>
        </ControlContainer>
      <div className="actions">
        <NewButton type="button">
          Create a new account
        </NewButton>
        <SignButton onClick={handleLogin}>Sign In</SignButton>
      </div>
    </div>
  );
}
