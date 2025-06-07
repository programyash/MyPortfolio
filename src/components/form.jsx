import React from 'react'
import '../scss/form.scss'

const form = () => {
  return (
    <div>
        <form name="submit-to-google-sheet" action="">
        <h2>Fill the form</h2>
        <h3>Full Name</h3>
        <input type="name" name="name" placeholder="   Eg: John Wick" id="name" required />
        <h3>Branch and Sem</h3>
        <input type="branch and sem" name="branchandsem" placeholder="   Eg: Cse, 3rd Sem" id="branch" required />
        <h3>Contact no.</h3>
        <input type="contact" name="contact" placeholder="   Eg: 0000000000" id="contact" required />
        <h3>Email</h3>
        <input type="email" name="mail" placeholder="   Eg: johnwick@gmail.com" id="email" required />

        <button type="submit" id="submitbtn">Submit</button>
        </form>
    </div>
  )
}

export default form