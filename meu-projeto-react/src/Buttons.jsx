export default function Button({action, symbol}) {
  return (
    <button onClick={action} className="switch_btn">{symbol}</button>
  )
}