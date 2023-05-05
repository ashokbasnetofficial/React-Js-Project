import Option from "./Option/Option";


const Select = (props) => {
  return (
    <>
      <label htmlFor={props.name}>{props.label} <span style={{ color: 'red' }}>{props.required}</span></label>
      <select class="form-select" disabled={props.disabled}>
        {

          props.value.map((value) => {
            return <Option value={value} option_name={value} />
          })
        }
      </select>
    </>
  )
}
export default Select;