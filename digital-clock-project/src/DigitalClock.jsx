import React, {useState, useEffect} from 'react';
function DigitalClock(){
    const [time,setTime] = useState(new Date())

    useEffect(()=>{
        const interval = setInterval((
            setTime(new Date())
        ),1000)
        return()=>{
            clearInterval(interval)
        }
    })
    function createFormat(){
        let hours = time.getHours()
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const ampm = time>=12 ? "PM" : 'AM'
        hours = hours % 12 || 12
        return `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)} ${ampm}`
    }
    function addZero(number){
        return (number < 10 ? "0" : '') + number 
    }
    return(
        <div className='clock-container'>
            <div className="clock">
                <span>{createFormat()}</span>
            </div>
        </div>
    )
}
export default DigitalClock