export function TabButton({label, onClickProp, isSelected}) {
    
    return (
        <li>
            <button onClick={onClickProp} className={isSelected ? 'active' : ''}>{label}</button>
        </li>
    )
}
// we can use both approches using attributes or children 
export default TabButton