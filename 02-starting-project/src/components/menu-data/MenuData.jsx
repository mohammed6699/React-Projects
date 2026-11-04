import { useState } from "react";
import { EXAMPLES } from "../../data";
import TabButton from "../Tab/TabButton";
import SharedSection from '../shared/SharedSection'
function MenuData(){
    const [content, setContent] = useState('');
      function handleClick(selectedBtn) {
        setContent(selectedBtn);
      }
      return (
        <>
        {/* the problem here that id is not send to the shared component we can simply send the id as prop the opisiste is to use 
            ... + any name you choose this simply tells js to collect all the props with this tag not only the one I added 
            so now you can send id className and any thing you need
        */}
            <SharedSection title="Examples" id="examples">
                
                <menu>
                    <TabButton isSelected={content === 'components'} label="Components" onClick={() => handleClick('components')}/>
                    <TabButton isSelected={content === 'jsx'} label="JSX"  onClick={() => handleClick('jsx')}/>
                    <TabButton isSelected={content === 'props'} label="Props" onClick={() => handleClick('props')}/>
                    <TabButton isSelected={content === 'state'} label="State" onClick={() => handleClick('state')}/>
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
            </SharedSection>
        </>
      )

}
export default MenuData