import React from 'react'
import { StyledMenu } from './side-menu'
import logo from '../../assets/logo.svg'
import consultation from '../../assets/consultation.svg'
import doctors from '../../assets/doctors.svg'
import logout from '../../assets/logout.svg'

const SideMenu = () => {
  return (
    <StyledMenu>
      <div
        css={`
          margin-top: 40px;
          display: flex;
          img {
            width: 48px;
            margin-right: 12px;
          }
          .logo-text {
            font-size: 22px;
            font-weight: bold;
          }
        `}
      >
        <img src={logo} alt="" />
        <div className="logo-text">
          <div
            css={`
              color: #35a0ee;
            `}
          >
            MEDICAL
          </div>
          <div
            css={`
              color: #aebbc4;
            `}
          >
            CARD
          </div>
        </div>
      </div>
      <div
        css={`
          margin-top: 75px;
          button {
            background: #35a0ee;
            border-radius: 10px;
            font-weight: 600;
            font-size: 16px;
            color: #ffffff;
            padding: 14px 20px;
          }
        `}
      >
        <button>Online programming</button>
        <div
          css={`
            margin-top: 50px;
          `}
        >
          <SideMenuItem svg={consultation} text="Sessions" active={true} />
          <SideMenuItem svg={doctors} text="Doctors" active={false} />
          <SideMenuItem svg={logout} text="Log-out" active={false} />
        </div>
      </div>
    </StyledMenu>
  )
}

const SideMenuItem = ({ svg, text, active }) => {
  return (
    <div
      css={`
        display: flex;
        padding: 15px 0;
        .img {
          width: 30px;
          img {
            height: 27px;
          }
        }
        .text {
          font-style: normal;
          font-weight: 600;
          font-size: 16px;
          color: ${active ? 'black' : '#8DA1B5'};
          margin-left: 20px;
        }
      `}
    >
      <div className="img">
        <img src={svg} alt={text} />
      </div>
      <div className="text">{text}</div>
    </div>
  )
}

export default SideMenu
