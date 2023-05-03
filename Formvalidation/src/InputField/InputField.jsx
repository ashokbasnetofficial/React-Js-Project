import './inputfield.css';

const InputField =(props)=>{
return(
   <div className="input-box col-3">
      <label htmlFor={props.name}>{props.label} <span style={{color:'red'}}>{props.required}</span></label>
    <input type={props.type} className='inputfield form-control' placeholder={props.placeholder} name={props.name} value={props.value}/> 
   </div>
);
}
export default InputField;