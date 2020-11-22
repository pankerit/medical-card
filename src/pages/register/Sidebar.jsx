import React from 'react'
import { css } from 'styled-components'
import logo from '../../assets/logo.svg'
import progress from '../../assets/progress.svg'
import './Sidebar.css'
const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src={logo}
          css={css`
            width: 48px;
            width: 48px;
          `}
        ></img>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <p>MEDICAL</p>
          <p>CARD</p>
        </div>
      </div>
      <div className="progress">
        <div style={{ width: '48px', display: 'flex', justifyContent: 'center' }}>
          <img src={props.progress}></img>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', width: '200px', justifyContent: ' space-between' }}>
          <div
            style={{
              flexWrap: 'wrap',
              display: 'flex',
              height: '28px',
              alignContent: 'center',
              opacity: `${props.opacity[0]}`,
            }}
          >
            User details
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              height: '28px',
              alignContent: 'center',
              opacity: `${props.opacity[1]}`,
            }}
          >
            Personal datails{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
