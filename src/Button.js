const Button = (props) => {
    const {onClick, text} = props
    return (
        <div style={styles.container} onClick={onClick}>
            {text}
        </div>
    )
}

const styles = {
    container: {
        border: '2px solid steelblue',
        background: 'steelblue',
        color:'white',
        margin:'4px',
        padding:'15px',
        borderRadius:'5px',
        cursor: 'pointer',
        width:'150px'
    }
}

export default Button