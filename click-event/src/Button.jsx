
function Button(){
    let count = 0
    const ClickFun = (e) => e.target.textContent = 'Fuck Off'

    return(
        <button onClick={(e)=>ClickFun(e)}>Click Me</button>
    )
}
export default Button