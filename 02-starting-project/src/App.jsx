import Header from './components/Header/Header';
import TabButton from './components/Tab/TabButton';
import { CORE_CONCEPTS } from './data';
import { useState } from 'react';
import { EXAMPLES } from './data';
function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}

function App() {
  const [content, setContent] = useState('');
  function handleClick(selectedBtn) {
    setContent(selectedBtn);
  }
  return (

    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concept</h2>
          <ul>
            {/* <CoreConcept title="Components" description="The core ui building block" image={componentImg}/> */}
            {CORE_CONCEPTS.map((conceptItem) => 
              <CoreConcept 
              key={conceptItem.title} 
              {...conceptItem} />
            )}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={content === 'components'} label="Components" onClickProp={() => handleClick('components')}/>
              <TabButton isSelected={content === 'jsx'} label="JSX"  onClickProp={() => handleClick('jsx')}/>
              <TabButton isSelected={content === 'props'} label="Props" onClickProp={() => handleClick('props')}/>
              <TabButton isSelected={content === 'state'} label="State" onClickProp={() => handleClick('state')}/>
          </menu>
        <div id='tab-content'>
            {content ? (
              <>
                <h3>{EXAMPLES[content].title}</h3>
                <p>{EXAMPLES[content].description}</p>
                <pre>
                  <code>{EXAMPLES[content].code}</code>
                </pre>
              </>
            ) : (
              <p>Please select a topic.</p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App