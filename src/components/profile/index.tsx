import React, { useRef } from 'react'
import moment from 'moment'
import { createPortal } from 'react-dom'
import { useClickAway } from 'react-use'
import { useUser } from '../../context/user'
import useGlobalState from '../../state'

const Profile: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [user] = useUser()
  const [showProfile, setShowProfile] = useGlobalState((s) => [s.showProfile, s.setShowProfile])
  useClickAway(ref, () => {
    setShowProfile(false)
  })
  const element = (
    <div
      ref={ref}
      css={`
        z-index: 10000;
        position: fixed;
        top: 0;
        right: 0;
        height: 100vh;
        width: 380px;
        padding: 30px;
        background: #ffffff;
        border-radius: 20px 0px 0px 20px;
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={`
          align-self: flex-end;
        `}
      >
        <ProfileNameAvatar />
      </div>
      <div
        css={`
          margin-top: 50px;
          .line {
            height: 1px;
            background: #e6e6e6;
            margin: 20px 0;
          }
        `}
      >
        <ProfileData record="First Name" value={user.firstName} />
        <ProfileData record="Last Name" value={user.lastName} />
        <ProfileData record="Email" value={user.email || ''} />
        <ProfileData record="Country" value={user.country} />
        <div className="line" />
        <ProfileData record="ID" value={user.id + ''} />
        <ProfileData record="Gen" value={user.gen === 'm' ? 'Male' : 'Female'} />
        <ProfileData record="Birth Day" value={moment(user.bday).format('MMMM Do YYYY')} />
        <ProfileData record="Adresa" value={user.adress} />
      </div>
    </div>
  )
  return showProfile ? createPortal(element, document.body) : null
}

const ProfileData: React.FC<{ record: string; value: string }> = ({ value, record }) => {
  return (
    <div
      css={`
        padding: 10px 0;
      `}
    >
      <p
        css={`
          font-weight: 600;
          font-size: 18px;
          color: #011f3b;
        `}
      >
        {record}
      </p>
      <p
        css={`
          font-weight: normal;
          font-size: 16px;
          color: #011f3b;
          margin-top: 8px;
        `}
      >
        {value}
      </p>
    </div>
  )
}

export const ProfileNameAvatar: React.FC = () => {
  const [user] = useUser()
  const setShowProfile = useGlobalState((s) => s.setShowProfile)
  return (
    <div
      onClick={() => setShowProfile(true)}
      css={`
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        img {
          width: 50px;
          background: #c4c4c4;
          border-radius: 10px;
        }
      `}
    >
      <div
        css={`
          font-weight: 600;
          font-size: 20px;
          color: #011f3b;
          margin-right: 20px;
        `}
      >
        {user.firstName} {user.lastName}
      </div>
      <img
        src={
          user.photoURL || user.gen === 'f'
            ? 'https://cdn.discordapp.com/attachments/716268889729663017/779405731685466122/website_-_female_user-512.png'
            : 'https://cdn.discordapp.com/attachments/716268889729663017/779405884643737651/boycharactermanusericon-1320085976934394387.png'
        }
      />
    </div>
  )
}

export default Profile
