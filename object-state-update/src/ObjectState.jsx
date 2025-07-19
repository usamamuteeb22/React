import React, {useState} from 'react';
function ObjectState(){
    const [car, setCar] = useState({year:1965,make:'BMW',model:'M5'})
    function handleYear(e){
        setCar(car=>({...car,year:e.target.value}))
    }
    function handleMake(e){
        setCar(c=>({...c, make:e.target.value}))
    }
    function handleModel(e){
        setCar(c=>({...c, model:e.target.value}))
    }

    return(
        <div style={{width:'60%', margin:'0 auto'}}>
            <h1>You're talking about the {car.year} {car.make} {car.model}</h1>
            Year :  <input type="number" onChange={handleYear}/><br />
            Make :  <input type="text" onChange={handleMake}/><br />
            Model : <input type="text" onChange={handleModel}/>
        </div>
    )
}
export default ObjectState