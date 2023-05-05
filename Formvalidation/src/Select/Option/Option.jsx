import './option.css'

const Option = (props) => {
    return (
        <>
            <option value={props.value}>{props.option_name}</option>
        </>
    )
}
export default Option;