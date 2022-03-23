import classnames from "classnames"

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={classnames('button', className, {
        'button--outlint': outline
      })}>
      {children}
    </button>
  )
}

export default Button