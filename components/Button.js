
const Button = (props) => {
  function handleClick(e){
    props.onClick();
    e.preventDefault();
  }
  return (
    <div className="form-group">
        <button onClick={handleClick} className="submit-btn btn-style-one" disabled={props.disabled}>
            <span className="btn-wrap">
                <span className="text-one">{props.name}</span>
                <span className="text-two">{props.name}</span>
            </span>
        </button>
    </div>
  )
}

export default Button