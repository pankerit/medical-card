import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Datepicker from './Datepicker'
import dropdown from '../../assets/DropDown.svg'
import arrowRight from '../../assets/arrowRight.svg'
const RegisterPageTwo = () => {
  const [country, setCountry] = useState('Male')
  const [clicked, setClicked] = useState(false)
  const dropdownmenu = (
    <div onClick={() => setClicked(!clicked)} className="dropdown-content1">
      <p onClick={() => setCountry('Male')}>Male</p>
      <p onClick={() => setCountry('Female')}>Female</p>
    </div>
  )
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexGrow: '1' }}>
        <div
          className="leftbar"
          style={{ display: 'flex', flexDirection: 'column', marginTop: '36px', width: '700px' }}
        >
          <div className="step"> STEP 2 OF 2</div>
          <div className="Register">Register</div>
          <div className="text">
            {' '}
            Welcome to Cartela medicala, we are glad to see you! Let’s get started by letting us know a little bit about
            you
          </div>
          <div className="name">
            <div className="firstName">
              Passport Number
              <input></input>
            </div>
          </div>
          {/*  INPUT CARE SE LATESTE*/}
          <div className="name">
            <div className="email">
              Gender
              <button onClick={() => setClicked(!clicked)} className="button">
                {country}
                <img style={{ float: 'right', marginTop: '4px' }} src={dropdown}></img>
              </button>
              {clicked ? dropdownmenu : ''}
            </div>
          </div>
          <Datepicker />
          <div className="name">
            <div className="email">
              Address
              <input type="text" />
            </div>
          </div>
          <div className="Register">Privacy Policy</div>
          <div className="text">
            {' '}
            We know you care about how your personal information is used and shared, so we take your privacy seriously
          </div>
          <div className="textalbastru">Expand privacy policy</div>
          <div>
            <Link to="/sessions">
              <button className="buttonNext">Register</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPageTwo
