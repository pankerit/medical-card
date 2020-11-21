import React, { useRef, useState } from 'react'
import moment from 'moment'
import { FiMoreVertical } from 'react-icons/fi'
import useSessions from './hooks/useSessions'
import { Box } from './session.style'
import { SessionsI } from './session.interface'
import { useClickAway, useToggle } from 'react-use'

const Sessions = () => {
  const [filter, setFilter] = useState<'active' | 'finished'>('active')
  const [sessions, sessionsLoading] = useSessions()

  const filteredSessions = sessions.filter((el) =>
    filter === 'active' ? ['waiting', 'confirmed'].includes(el.status) : ['done', 'declined'].includes(el.status),
  )

  return (
    <div
      css={`
        margin-top: 40px;
      `}
    >
      <div
        css={`
          display: flex;
          justify-content: space-between;
        `}
      >
        <h2
          css={`
            font-weight: 600;
            font-size: 28px;
            color: #011f3b;
          `}
        >
          Sessions
        </h2>
        <div
          css={`
            display: flex;
            button:first-child {
              margin-right: 10px;
            }
            button.active {
              border: 2px solid #35a0ee;
              box-sizing: border-box;
              border-radius: 8px;
              span {
                color: #35a0ee;
              }
              span:last-child {
                background: #35a0ee;
              }
            }
            button {
              padding: 9px 16px;
              background: transparent;
              border: 2px solid transparent;
              display: flex;
              align-items: center;
              span {
                font-weight: 700;
                color: #8d98a3;
              }
              span:last-child {
                margin-left: 11px;
                width: 26px;
                height: 26px;
                background: #8d98a3;
                border-radius: 4px;
                color: white;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          `}
        >
          <button className={filter === 'active' ? 'active' : undefined} onClick={() => setFilter('active')}>
            <span>Active</span>
            <span>{filter === 'active' ? filteredSessions.length : sessions.length - filteredSessions.length}</span>
          </button>
          <button className={filter === 'finished' ? 'active' : undefined} onClick={() => setFilter('finished')}>
            <span>Finished</span>
            <span>{filter === 'finished' ? filteredSessions.length : sessions.length - filteredSessions.length}</span>
          </button>
        </div>
      </div>
      <div
        css={`
          margin-top: 48px;
          .session {
            ${Box} {
              font-weight: 600;
              box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
              margin-top: 17px;
              color: black;
            }
          }
          ${Box} {
            position: relative;
            display: flex;
            align-items: center;
            padding: 20px 20px 20px 34px;
            font-size: 18px;
            color: #7f7f7f;
            font-weight: 500;

            .doctor {
              min-width: 200px;
              width: 250px;
            }
            .data {
              min-width: 200px;
              width: 240px;
            }
            .service {
              min-width: 200px;
              width: 300px;
            }
            .price {
              min-width: 100px;
              width: 100px;
            }
            .action {
              margin-left: auto;
              margin-bottom: -5px;
              outline: none;
              border: none;
              background: transparent;
              svg {
                width: 20px;
              }
            }
            .drop-menu {
              z-index: 1;
              position: absolute;
              overflow: hidden;
              right: 35px;
              top: calc(100% - 10px);
              width: 191px;
              background: #fefefe;
              box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
              border-radius: 16px 0px 16px 16px;
              button {
                display: block;
                background: transparent;
                width: 100%;
                padding: 10px 3px 10px 20px;
                text-align: start;

                :hover {
                  background: #e7e7e7;
                }
              }
            }
          }
        `}
      >
        <Box>
          <div className="doctor">Doctor</div>
          <div className="data">Appointment Date</div>
          <div className="service">Service</div>
          <div className="price">Price</div>
          <div className="status">Status</div>
        </Box>
        {sessionsLoading
          ? 'Loading...'
          : filteredSessions.map((el, idx) => (
              <div className="session" key={idx}>
                <Session {...el} />
              </div>
            ))}
      </div>
    </div>
  )
}

const Session: React.FC<SessionsI> = ({ service, doctor, date, serviceName, price, status: statuss }) => {
  const [show, toggle] = useToggle(false)
  const ref = useRef<HTMLDivElement | null>(null)

  let status = 'Declined'
  let color = '#EB5757'
  if (statuss === 'confirmed') {
    status = 'Confirmed'
    color = '#619349'
  } else if (statuss === 'waiting') {
    status = 'Waiting'
    color = '#DC7D26'
  } else if (statuss === 'done') {
    status = 'Done'
    color = '#7F7F7F'
  }
  return (
    <Box key={service}>
      <div className="doctor">
        {doctor.firstName} {doctor.lastName}
      </div>
      <div className="data">{moment(date).format('MMMM DD, hh:mm A')}</div>
      <div className="service">{serviceName}</div>
      <div className="price">{price}$</div>
      <div className="status">
        <span style={{ color }}>{status}</span>
      </div>
      <button className="action" onClick={() => toggle()}>
        <FiMoreVertical />
      </button>
      {show && (
        <div ref={ref} className="drop-menu">
          <button>Edit</button>
          <button>Cancel</button>
        </div>
      )}
    </Box>
  )
}

export default Sessions
