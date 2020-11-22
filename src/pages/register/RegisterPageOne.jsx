import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import dropdown from '../../assets/DropDown.svg'
import arrowRight from '../../assets/arrowRight.svg'
const RegisterPageOne = () => {
  const [country, setCountry] = useState('Moldova')
  const [clicked, setClicked] = useState(false)
  const dropdownmenu = (
    <div onClick={() => setClicked(!clicked)} className="dropdown-content">
      <p onClick={() => setCountry('Romania')}>Romania</p>
      <p onClick={() => setCountry('Ungaria')}>Ungaria</p>
      <p onClick={() => setCountry('Moldova')}>Moldova</p>
    </div>
  )
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexGrow: '1' }}>
      <div className="leftbar" style={{ display: 'flex', flexDirection: 'column', marginTop: '36px', width: '700px' }}>
        <div className="step"> STEP 1 OF 2</div>
        <div className="Register">Register</div>
        <div className="text">
          {' '}
          Welcome to Cartela medicala, we are glad to see you! Let’s get started by letting us know a little bit about
          you
        </div>
        <div className="name">
          <div className="firstName">
            First Name
            <input></input>
          </div>
          <div className="lastName">
            Last Name
            <input></input>
          </div>
        </div>
        {/*  INPUT CARE SE LATESTE*/}
        <div className="name">
          <div className="email">
            E-mail address
            <input type="text" />
          </div>
        </div>
        <div className="name" style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="firstName">Country</div>
          <button onClick={(e) => setClicked(!clicked)} className="button">
            {country}
            <img style={{ float: 'right', marginTop: '4px' }} src={dropdown}></img>
          </button>
        </div>
        {clicked ? dropdownmenu : ''}
        <div className="Register">Privacy Policy</div>
        <div className="text">
          {' '}
          We know you care about how your personal information is used and shared, so we take your privacy seriously
        </div>
        <div className="textalbastru">Expand privacy policy</div>
        <div>
          <Link to="/register2">
            <button className="buttonNext">
              Next Step <img style={{ paddingLeft: '5px' }} src={arrowRight}></img>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RegisterPageOne
