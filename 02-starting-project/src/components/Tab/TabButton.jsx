export function TabButton({label, isSelected, ...props}) {
    //  ... + any name you choose this simply tells js to collect all the props with this tag not only the one I added 
    //         so now you can send id className and any thing you need
    return (
        <li>
            <button {...props} className={isSelected ? 'active' : ''}>{label}</button>
        </li>
    )
}
// we can use both approches using attributes or children 
export default TabButton