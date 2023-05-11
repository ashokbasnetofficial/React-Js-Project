import InputField from '../InputField/InputField';
import Option from '../Select/Option/Option';
import Select from '../Select/Select';

import './form.css';
const persnal_details = [
  {
    key: 1,
    type: "text",
    placeholder: "First Name",
    name: "firstname",
    label: "First Name",
    required: "*"
  },
  {
    key: 2,
    type: "text",
    placeholder: "Middle Name",
    name: "fname",
    label: "Middle Name",
  },
  {
    key: 3,
    type: "text",
    placeholder: "Last Name",
    name: "lastname",
    label: "Last Name",
    required: "*"
  },
  {
    key: 4,
    type: "date",
    placeholder: "Date Of Birth",
    name: "dob",
    label: "Date Of Birth",
    required: "*"
  },
  {
    key: 6,
    type: "text",
    placeholder: "Father Name",
    name: "fathername",
    label: "Father Name",
    required: "*"
  },
  {
    key: 7,
    type: "text",
    placeholder: "Grand Father Name",
    name: "grandfather",
    label: "Grand Father Name",
    required: "*"
  },
  {
    key: 8,
    type: "number",
    placeholder: "Contact No.",
    name: "contactnumber",
    label: "Contact No.",
  },
  {
    key: 9,
    type: "number",
    placeholder: "Phone No.",
    name: "phonenumber",
    label: "Phone No.",
    required: "*"
  },
  {
    key: 10,
    type: "email",
    placeholder: "example@mail.com",
    name: "email",
    label: "E-mail",
    required: "*"
  },
  {
    key: 11,
    type: "select",
    disabled: true,
    label: "Nationality",
    value: ["Nepal"],
    required: "*"
  },
  {
    key: 12,
    type: "text",
    placeholder: "Citizenship Number",
    name: "cnumber",
    label: "Citizenship Number",
    required: "*"
  },
  {
    key: 13,
    type: "date",
    placeholder: "Issued Date",
    name: "cissued",
    label: "Citizenship Issued Date",
    required: "*"
  },
  {
    key: 14,
    type: "select",
    disabled: false,
    label: "Citizenship Issued Place",
    value: [
      "--Select Option--",
      "Achham",
      "Arghakhanchi",
      "Baglung",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Banke",
      "Bara",
      "Bardiya",
      "Bhaktapur",
      "Bhojpur",
      "Chitwan",
      "Dadeldhura",
      "Dailekh",
      "Dang",
      "Darchula",
      "Dhading",
      "Dhankuta",
      "Dhanusa",
      "Dholkha",
      "Dolpa",
      "Doti",
      "Eastern Rukum",
      "Gorkha",
      "Gulmi",
      "Humla",
      "Ilam",
      "Jajarkot",
      "Jhapa",
      "Jumla",
      "Kailali",
      "Kalikot",
      "Kanchanpur",
      "Kapilvastu",
      "Kaski",
      "Kathmandu",
      "Kavrepalanchok",
      "Khotang",
      "Lalitpur",
      "Lamjung",
      "Mahottari",
      "Makwanpur",
      "Manang",
      "Morang",
      "Mugu",
      "Mustang",
      "Myagdi",
      "Nawalpur",
      "Nuwakot",
      "Okhaldhunga",
      "Palpa",
      "Panchthar",
      "Parasi",
      "Parbat",
      "Parsa",
      "Pyuthan",
      "Ramechhap",
      "Rasuwa",
      "Rautahat",
      "Rolpa",
      "Rupandehi",
      "Salyan",
      "Sankhuwasabha",
      "Saptari",
      "Sarlahi",
      "Sindhuli",
      "Sindhupalchok",
      "Siraha",
      "Solukhumbu",
      "Sunsari",
      "Surkhet",
      "Syangja",
      "Tanahu",
      "Taplejung",
      "Terhathum",
      "Udayapur",
      "Western Rukum"
    ],
    required: "*"
  },
];
const address_details = [
  {
    key: 1,
    type: "select",
    disabled: true,
    label: "Country",
    value: ["Nepal"],
    required: "*"
  },
  {
    key: 2,
    type: "select",
    disabled: false,
    label: "State",
    value: [
      "Province 1",
      "Province 2",
      "Bagmati Province",
      "Gandaki Province",
      "Lumbini Province",
      "Karnali Province",
      "Sudurpashchim Province"
    ],
    required: "*"
  },
  {
    key: 3,
    type: "select",
    disabled: false,
    label: "District",
    value: [
      "--Select Option--",
      "Achham",
      "Arghakhanchi",
      "Baglung",
      "Baitadi",
      "Bajhang",
      "Bajura",
      "Banke",
      "Bara",
      "Bardiya",
      "Bhaktapur",
      "Bhojpur",
      "Chitwan",
      "Dadeldhura",
      "Dailekh",
      "Dang",
      "Darchula",
      "Dhading",
      "Dhankuta",
      "Dhanusa",
      "Dholkha",
      "Dolpa",
      "Doti",
      "Eastern Rukum",
      "Gorkha",
      "Gulmi",
      "Humla",
      "Ilam",
      "Jajarkot",
      "Jhapa",
      "Jumla",
      "Kailali",
      "Kalikot",
      "Kanchanpur",
      "Kapilvastu",
      "Kaski",
      "Kathmandu",
      "Kavrepalanchok",
      "Khotang",
      "Lalitpur",
      "Lamjung",
      "Mahottari",
      "Makwanpur",
      "Manang",
      "Morang",
      "Mugu",
      "Mustang",
      "Myagdi",
      "Nawalpur",
      "Nuwakot",
      "Okhaldhunga",
      "Palpa",
      "Panchthar",
      "Parasi",
      "Parbat",
      "Parsa",
      "Pyuthan",
      "Ramechhap",
      "Rasuwa",
      "Rautahat",
      "Rolpa",
      "Rupandehi",
      "Salyan",
      "Sankhuwasabha",
      "Saptari",
      "Sarlahi",
      "Sindhuli",
      "Sindhupalchok",
      "Siraha",
      "Solukhumbu",
      "Sunsari",
      "Surkhet",
      "Syangja",
      "Tanahu",
      "Taplejung",
      "Terhathum",
      "Udayapur",
      "Western Rukum"
    ],
    required: "*"
  },
  {
    key: 3,
    type: "select",
    disabled: false,
    label: "Municipality",
    value: [
      "--Select Option--",
      "Terhathum",
      "Udayapur",
      "Western Rukum"
    ],
    required: "*"
  },
  {
    key: 2,
    type: "text",
    placeholder: "Ward Number",
    name: "wardnumber",
    label: "Ward No.",
    required: "*"
  },
  {
    key: 3,
    type: "text",
    placeholder: "Street/Tole",
    name: "phonenumber",
    label: "Street/Tole",
    required: "*"
  }
]
const bank_details = [
  {
    key: 3,
    type: "select",
    disabled: false,
    label: "Bank",
    value: [
      "Select Bank",
      "Nepal Bank Limited",
      "Rastriya Banijya Bank",
      "Agriculture Development Bank Limited",
      "Nepal Rastra Bank",
      "Nabil Bank Limited",
      "Nepal Investment Bank Limited",
      "Standard Chartered Bank Nepal Limited",
      "Himalayan Bank Limited",
      "Everest Bank Limited",
      "Laxmi Bank Limited",
      "Machhapuchchhre Bank Limited",
      "Kumari Bank Limited",
      "Nepal Bangladesh Bank Limited",
      "NIC Asia Bank Limited",
      "Global IME Bank Limited",
      "Mega Bank Nepal Limited",
      "Sanima Bank Limited",
      "Sunrise Bank Limited",
      "Prime Commercial Bank Limited",
      "Civil Bank Limited",
      "Century Commercial Bank Limited",
      "Siddhartha Bank Limited",
      "Prabhu Bank Limited",
      "NMB Bank Limited",
      "Janata Bank Nepal Limited",
      "Miteri Development Bank Limited",
      "Kamana Sewa Bikas Bank Limited",
      "Garima Bikas Bank Limited",
      "Gandaki Bikas Bank Limited",
      "Jyoti Bikas Bank Limited",
      "Kailash Bikas Bank Limited",
      "Muktinath Bikas Bank Limited",
      "Om Development Bank Limited",
      "Shangrila Development Bank Limited",
      "Sindhu Bikas Bank Limited",
      "Sahayogi Bikas Bank Limited",
      "Sana Kisan Bikas Bank Limited",
      "Shree Investment and Finance Company Limited",
      "Janaki Finance Company Limited",
      "Paschimanchal Finance Company Limited",
      "Unnati Microfinance Bittiya Sanstha Limited",
      "Nepal Community Development Bank Limited",
      "Guheswori Merchant Banking and Finance Limited",
      "Nepal Credit and Commerce Bank Limited",
      "Mega Capital Markets Limited",
      "Nepal Stock Exchange Limited",
      "Civil Laghubitta Bittiya Sanstha Limited",
      "Swabalamban Laghubitta Bittiya Sanstha Limited",
      "Mithila Laghubitta Bittiya Sanstha Limited",
      "Sana Kisan Laghubitta Bittiya Sanstha Limited",
      "Suryodaya Laghubitta Bittiya Sanstha Limited",
      "Mahila Sahayatra Microfinance Bittiya Sanstha Limited",
      "Chhimek Laghubitta Bittiya Sanstha Limited",
      "Sparsha Laghubitta Bittiya Sanstha Limited",
      "Jeevan Bikas Samaj",
      "Deprosc Development Bank Limited",
      "Manjushree Financial Institution Limited",
      "Sahara Bikas Bank Limited",
      "ICFC Finance Limited",
      "Green Development Bank Limited",
      "Excel Development Bank Limited",
      "Jebil's Finance Limited",
      "Unique Finance Limited",
      "Reliance Finance Limited",
      "Purnima Bikas Bank Limited",
      "Mirmire Microfinance Development Bank Limited",
      "Nepal Seva Laghubitta Bittiya Sanstha Limited",
      "Ghodighoda Laghubitta Bittiya Sanstha Limited",
      "Gorkha Finance Limited",
      "Hathway Finance Limited",
      "Jebils Finance"],
    required: "*"
  },
  {
    key: 3,
    type: "select",
    disabled: false,
    label: "Branch",
    value: [
      "Select Branch",
      "Terhathum",
      "Udayapur",
      "Western Rukum",
      "Ilam"
    ],
    required: "*"
  },
  {
    key: 3,
    type: "select",
    disabled: false,
    label: "Account Type",
    value: [
      "Current Account",
      "Saving Account",
      "Fixed Deposit Account",
      "Recurring Deposit Account",
      "Foreign Currency Account",
      "Credit Card Account",
      "Loan Account",
      "Remmitance Account",
      "Salary Account"

      // Add more account types here as needed
    ],
    required: "*"
  },
  {
    key: 2,
    type: "text",
    placeholder: "Account Number",
    name: "accnumber",
    label: "Account Number ",
    required: "*"
  },
];
const upload_field = [
  {
    key: 1,
    type: "file",
    name: "ppnumber",
    label: "Passport Size Photo ",
    required: "*"
  },
  {
    key: 2,
    type: "file",
    name: "cphoto",
    label: "Citizenship Frontside",
    required: "*"
  },
  {
    key: 3,
    type: "file",
    name: "cphoto",
    label: "Citizenship Backside",
    required: "*"
  },
  {
    key: 4,
    type: "file",
    name: "signature",
    label: "Signature",
    required: "*"
  },
]
const Form = () => {
  return (
    <div
      className="container bg-light py-3 px-3 my-4 "
      style={{ borderRadius: '10px' }}
    >
      <form action="" autocomplete="off">
        <div className="form-group ">
          <div className="form_title">
            <h3 className='text-center mt-5 mb-5'>Registration Form</h3>
          </div>

          <div className="personal-info">
            <div className="title">
              <h4>Personal Details</h4>
              <hr />
            </div>
            <div className="row">
              {
                persnal_details.map((data) => {
                  if (data.type !== 'select') {
                    return <div className='col-4 mt-3 mb-3'>

                      <InputField
                        type={data.type}
                        placeholder={data.placeholder}
                        name={data.name}
                        label={data.label}
                        class="form-control"
                        required={data.required}
                      />
                    </div>
                  }
                  else if (data.type === "select") {
                    return <div className="col-4 mt-3 mb-3">
                      <Select
                        label={data.label}
                        disabled={data.disabled}
                        required={data.required}
                        value={data.value}
                      />

                    </div>
                  }
                })
              }
            </div>
            <div className="row">
              <div className="col-6">
                <div className="radio_gender">
                  <h5>Gender</h5>
                  <InputField type="radio" value='male' name="gender" label="Male" class="form-check-input mx-2" />
                  <InputField type="radio" value='female' name="gender" label="Female" class="form-check-input mx-2" />
                </div>
              </div>
              <div className="col-6">
                <h5>Marital Status</h5>
                <InputField type="radio" value='married' name="marital_status" label="Married" class="form-check-input mx-2" />
                <InputField type="radio" value='unmarried' name="marital_status" label="Unmarried" class="form-check-input mx-2" />
              </div>
            </div>
            <div className="address-info mt-4">
              <div className="title">
                <h4>Address Details</h4>
                <hr />
                <div className="row">
                  {
                    address_details.map((data) => {
                      if (data.type !== 'select') {
                        return <div className='col-4 mt-3 mb-3'>

                          <InputField
                            type={data.type}
                            placeholder={data.placeholder}
                            name={data.name}
                            label={data.label}
                            class="form-control"
                            required={data.required}
                          />
                        </div>
                      }
                      else if (data.type === "select") {
                        return <div className="col-4 mt-3 mb-3">
                          <Select
                            label={data.label}
                            disabled={data.disabled}
                            required={data.required}
                            value={data.value}
                          />

                        </div>
                      }
                    })
                  }
                </div>
              </div>
            </div>
            <div className="address-info mt-4">
              <div className="title">
                <h4>Bank Details</h4>
                <hr />
                <div className="row">
                  {
                    bank_details.map((data) => {
                      if (data.type !== 'select') {
                        return <div className='col-4 mt-3 mb-3'>

                          <InputField
                            type={data.type}
                            placeholder={data.placeholder}
                            name={data.name}
                            label={data.label}
                            class="form-control"
                            required={data.required}
                          />
                        </div>
                      }

                      else if (data.type === "select") {
                        return <div className="col-4 mt-3 mb-3">
                          <Select
                            label={data.label}
                            disabled={data.disabled}
                            required={data.required}
                            value={data.value}
                          />

                        </div>
                      }
                    })
                  }
                </div>
              </div>
            </div>
            <div className="upload-info mt-4">
              <div className="title">
                <h4>Upload</h4>
                <hr />
                <div className="row">
                  {
                    upload_field.map((data) => {
                      if (data.name === 'cphoto') {
                        return <div className='col-6 mt-3 mb-3'>

                          <InputField
                            type={data.type}
                            name={data.name}
                            label={data.label}
                            class="form-control"
                            required={data.required}
                          />
                        </div>
                      }
                      else {
                        return <div className='col-8 mt-3 mb-3'>

                          <InputField
                            type={data.type}
                            name={data.name}
                            label={data.label}
                            class="form-control"
                            required={data.required}
                          />
                        </div>

                      }
                    })
                  }
                </div>
              </div>
            </div>
            <div className="submit">
              <div className="row mt-5 mb-3">
                <hr />
                <div className="col-5">

                  <InputField
                    type='submit'
                    name="submit"
                    class="btn btn-dark"
                    value="Submit"

                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Form;