import logo from '../assets/logo.png';
// import classes from './header.module.css'
import styled from 'styled-components';
// here we replaced the styled css for header with Header from styled
// but in case I need to add the child tags like img, p, h1 using the styled components we can simply handle that using &
// so we will simply grap all the assigned styles for header here and rplace all the header with &
// by the way in case you need to handle the hover state we have to do the same with it using &
// but this time we will write it as this &:hover without any white spaces in between unlike the child component
// we can also create these components that I will be using in a sperate file and import them like buttons 
const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

& img {
  object-fit: contain;
  margin-bottom: 2rem;
  width: 11rem;
  height: 11rem;
}

& h1 {
  font-size: 1.5rem;
  font-weight: 600;
  letter-spacing: 0.4em;
  text-align: center;
  text-transform: uppercase;
  color: #9a3412;
  font-family: 'Pacifico', cursive;
  margin: 0;
}

& p {
  text-align: center;
  color: #a39191;
  margin: 0;
}

@media (min-width: 768px) {
  & {
    margin-bottom: 4rem;
  }

  & h1 {
    font-size: 2.25rem;
  }
}
`
export default function Header() {
  return (
    // <header className={classes.header}>
    //   <img src={logo} alt="A canvas" className={classes.image}/>
    //   <h1 className={classes.title}>ReactArt</h1>
    //   <p className={classes.paragraph}>A community of artists and art-lovers.</p>
    // </header>
     <StyledHeader>
      <img src={logo} alt="A canvas"/>
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
    </StyledHeader>
  );
}
