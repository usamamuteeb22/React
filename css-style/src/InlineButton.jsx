function InlineButton(){
    const css = {
        fontSize: '2rem',
        padding: '15px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'aquamarine',
        color: 'black',
        cursor: 'pointer',
        fontWeight: 'bolder'
    }
    return(
        <button style={css}>Click Me</button>
    )
}
export default InlineButton