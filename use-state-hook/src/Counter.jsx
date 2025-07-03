import React, {useState} from 'react';

function Counter(){
    const [count, setCount] = useState(0)

    return(
        <div className='scontainer'>
            <p className='num'>{count}</p>
            <button className="counter" onClick={()=>setCount(count+1)}>Increament</button>
            <button className="counter" onClick={()=>setCount(0)}>Reset</button>
            <button className="counter" onClick={()=>setCount(count-1)}>Decreament</button>
        </div>
    )
}
export default Counter