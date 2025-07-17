import Loader from './Loader'

export default function Button(props) {
  return (
    <button
      style={{
        width: props.width ? `${props.width}px` : 'auto'
      }}
      className={`btn btn-${props.variant}`}
      onClick={props.onClick}>
      {props.loading ? <Loader></Loader> : props.children}
    </button>
  )
}
