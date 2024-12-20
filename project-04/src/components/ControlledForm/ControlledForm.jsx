import React, {useState} from 'react'
import ControlledFormCSS from './ControlledForm.module.css'


export default function ControlledForm() {

    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value);
        // console.log(e.target.value);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(name);
    }

  return (
    <div className={ControlledFormCSS.container}>
        <form onSubmit={handleSubmit}>
            <input type="text" className={ControlledFormCSS.input} onChange={handleChange} value={name} />
            <button type='submit' className={ControlledFormCSS.submit}>Submit</button>
        </form>
    </div>
  )
}
