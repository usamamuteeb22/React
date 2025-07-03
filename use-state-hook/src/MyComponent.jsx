import React, {useState} from "react"

function MyComponent(){
    const [name, setName] = useState('Guest')
    const Displayname = () =>{
        setName('Usama')
    } 
    const [age, setAge] = useState(0)
    // const GetAge = () => {
    //     setAge(age + 1)
    // }
    const [employement, setStatus] = useState()
    const employementStatus = () =>{
        setStatus(!employement)
    }

    return(
        <div className="fcontainer">
            <h2>Name : {name}</h2>
            <button onClick={Displayname}>Get Name</button>
            <h2>Age : {age}</h2>
            {/* <button onClick={GetAge}>Age++</button> */}
            <button onClick={()=>setAge(age+2)}>Age++</button>
            <h2>isEmployeed {employement ? "Yes" : 'No'}</h2>
            <button onClick={employementStatus}>Status</button>
        </div>
    )
}
export default MyComponent