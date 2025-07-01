function Food(){
    const food1 = 'Orange'
    const food2 = 'Apple'
    return(
        <ul>
            <li>Mango</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food1}</li>
        </ul>
    )
}

export default Food