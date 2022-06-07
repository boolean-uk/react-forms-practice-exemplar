import { useState } from "react";
import "./App.css";
import CheckBox from "./components/CheckBox";
import RadioInput from "./components/RadioInput";
import TextArea from "./components/TextArea";
import TextInput from "./components/TextInput";

export default function App() {
  //TODO: Add your state fields here
  const [formData, setFormData] = useState({
      name: '',
      address: '',
      phone: '',
      email: '',
      complaint: '',
      contact: '',
      consent: false
  })

  const handleChange = (event) => {
    const { name, value, checked } = event.target

    setFormData({
        ...formData,
        [name]: name === 'consent' ? checked : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    
    console.log(formData)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <TextInput
            label='Full name'
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required={true}
          />

          <TextInput
            label='Address'
            type='text'
            name='address'
            value={formData.address}
            onChange={handleChange}
          />

          <TextInput
            label='Phone Number'
            type='tel'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
          />

          <TextInput
            label='Email'
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="form__section-right">
          <TextArea
            label='Write your complaint'
            name='complaint'
            rows={10}
            placeholder='You can complain here'
            value={formData.complaint}
            onChange={handleChange}
          />

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <RadioInput
                label='Phone'
                name='contact'
                value='phone'
                checkedOption={formData.contact}
                onChange={handleChange}
            />

            <RadioInput
                label='Email'
                name='contact'
                value='email'
                checkedOption={formData.contact}
                onChange={handleChange}
            />

            <RadioInput
                label='Slow Mail'
                name='contact'
                value='post'
                checkedOption={formData.contact}
                onChange={handleChange}
            />

            <RadioInput
                label='No contact!'
                name='contact'
                value='none'
                checkedOption={formData.contact}
                onChange={handleChange}
            />
          </div>

          <CheckBox
            label='I agree you take my data, and do whatever'
            name='consent'
            value={formData.consent}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
