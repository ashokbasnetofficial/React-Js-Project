// import './inputfield.css';

const InputField =(props)=>{
return(
  <>
      <label htmlFor={props.name}>{props.label} <span style={{color:'red'}}>{props.required}</span></label>
    <input type={props.type} className={props.class} placeholder={props.placeholder} name={props.name} value={props.value}/> 
   </>
);
}

export default InputField;