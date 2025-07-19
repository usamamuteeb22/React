import React, {useState} from 'react';
function ColorPicker(){
    const [color, selectColor] = useState('grey')
    return(
        <div className='container'>
            <h1>Color Picker</h1>
            <div className='color-cont' style={{backgroundColor:color}}>
                <h2>Selected Color : {color}</h2>
            </div>
            <input type="color" value={color} onChange={(e)=>selectColor(e.target.value)} className='color' />
        </div>
    )
}
export default ColorPicker