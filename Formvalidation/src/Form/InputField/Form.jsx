import InputField from '../../InputField/InputField';
import './form.css';

const Form =()=>{
return(
    <form action="" >
   <div className="form-group">
     <div className="row">
     <InputField type="text" placeholder="First Name" name="firstname" label="First Name" required="*"/>
     <InputField type="text" placeholder="Middle Name" name="middlename" label="Middle Name"/>
     <InputField type="text" placeholder="Last Name" name="lastname" label="Last Name" required="*"/>
     </div>
   </div>
  </form>
);
}
export default Form;