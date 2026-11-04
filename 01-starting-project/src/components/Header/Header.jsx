import imagePath from '../../assets/react-core-concepts.png';

const reactDescription = ['Fundemental', 'Crucial', 'Core'];
function getRandom(max){
  return Math.floor(Math.random() * (max + 1))
}

function Header(){
  const description = reactDescription[getRandom(2)]
  return (
    <header>
        <img src={imagePath} alt="Stylized atom" />
        <h1>React Essentials</h1>
        <p>
          {description} Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
export default Header