import React, { useState, useSyncExternalStore } from "react";
function Onchange(){
    const [name, setName] = useState()
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState('default')
    const [payment, setPayment] = useState()
    const [shipping, setShipping] = useState()

    return(
        <div>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)} /> <br />
            <input type="number" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/> <br />
            <input type="text" value={comment} onChange={(e)=>setComment(e.target.value)}/> <br />
            <select value={payment} onChange={(e)=>setPayment(e.target.value)}>
                <option value="">Select Option</option>
                <option value='VisaCard'>VisaCard</option>
                <option value='MasterCard'>MasterCard </option>
                <option value='JazzCash'>JazzCash</option>
            </select> <br />
            <label>
                <input type="radio" value='Pick Up' onChange={(e)=> setShipping(e.target.value)} checked={shipping==='Pick Up'}/>
                Pick Up
            </label>
            <label >
                <input type="radio" value="Delivery" onChange={(e)=> setShipping(e.target.value)} checked={shipping==='Delivery'}/>
                Delivery
            </label>
            <p>Name : {name}</p>
            <p>Quantity : {quantity}</p>
            <p>Comment : {comment}</p>
            <p>Payment : {payment}</p>
            <p>Shipping : {shipping}</p>
        </div>
    )
}
export default Onchange