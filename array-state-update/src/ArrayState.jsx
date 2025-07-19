import React, {useState} from 'react'

function ArrayState(){
    const [Fruits, setFruits] = useState(['Mango','Stawberry'])
    function handleAddFruit(){
        const newFruit = document.getElementById('inputFruit').value 
        setFruits(f=>[...f, newFruit])
        document.getElementById('inputFruit').value = ''
    }
    function handleRemoveFruit(index){
        setFruits(f=>(f.filter((_,i)=>i!==index)))
    }
    return(
        <div style={{width:'60%', margin:'0 auto',fontSize:'1.5rem'}}>
            <h1>List Of Fruits</h1>
            <ul>
                {Fruits.map((fruit,index)=>(
                    <li key={index} onClick={()=>handleRemoveFruit(index)}>{fruit}</li>
                ))}
            </ul>
            <input type="text" id="inputFruit" />
            <button onClick={handleAddFruit}>Add Fruit</button>
        </div>
    )
}
export default ArrayState