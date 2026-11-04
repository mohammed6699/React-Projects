import { CORE_CONCEPTS } from "../../data"
import SharedSection from "../shared/SharedSection"
function CoreConcept(props){
  return (
    <li>
      <img src={props.image} alt={props.title}/>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  )
}
function CoreConcepts (){
    return (
        <>
            <SharedSection id='core-concepts'>
              <h2>Core Concept</h2>
              <ul>
                {/* <CoreConcept title="Components" description="The core ui building block" image={componentImg}/> */}
                {CORE_CONCEPTS.map((conceptItem) => 
                  <CoreConcept 
                  key={conceptItem.title} 
                  {...conceptItem} />
                )}
              </ul>
            </SharedSection>
        </>
    )
}
export default CoreConcepts