import Inputfield from "../Inputfield/Inputfield";
const form_field = [
  {
    type: "text",
    id: "userid",
    class: "form-control",
    placeholder: "Email or phone number"

  },
  {
    type: "password",
    id: "password",
    class: "form-control",
    placeholder: "Password"

  },
  {
    type: "submit",
    id: "submit",
    class: "btn btn-primary",
    value: 'Log in'
  }
]
const Form = () => {
  return (
    <form>
      <div class="form-group row px-4 py-5"
      >
        <p >Log Into Facebook</p>
        {
          form_field.map((element, key) => {
            return <Inputfield
              key={key}
              type={element.type}
              id={element.id}
              name={element.name}
              className={element.class + ' ' + 'my-2'}
              placeholder={element.placeholder}
              value={element.value} />
          })
        }
        <a href="#" className="text-center forgetpass">Forgot account?</a>
        <p className="or">or</p>
        <button className="btn createact btn-success mx-auto">Create new account</button>

      </div>

    </form>
  )
}
export default Form;