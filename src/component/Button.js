const Button = ({btnName, click, btnText}) => {
    return(
        <div className="Button">
            <button className={`btn ${btnName}`} onClick={click}>{btnText}</button>
        </div>
    )
}

export default Button;