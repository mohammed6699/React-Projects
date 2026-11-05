import { useState } from "react"

export default function Player({name, symbol, isActive, onChangeName}) {
    const [isEditing, setisEditing] = useState(false);
    const [playerName, setplayerName] = useState(name)
    function editBTn(){
        // setisEditing(!isEditing)
        setisEditing(editing => !editing);
        if(isEditing){
            onChangeName(symbol, playerName)
        }
    }
    function handleChage(event){
        setplayerName(event.target.value)
    }
    let EditPlayerName = <span className="player-name">{playerName}</span>
    if(isEditing){
        EditPlayerName = <input type="text" required value={playerName} onChange={handleChage}/>
    }
    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {EditPlayerName}
              
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={editBTn}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    )
}