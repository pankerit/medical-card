import { divide } from 'lodash'
import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Main from '../components/main'
import Profile, { ProfileNameAvatar } from '../components/profile'
import Search from '../components/search'
import SideMenu from '../components/side-menu'
import { useUser } from '../context/user'
import Session from '../pages/session'

function App() {
  const [user, loading] = useUser()
  if (loading) return null
  return (
    <div
      className="App"
      css={`
        display: flex;
      `}
    >
      <SideMenu />
      <Main>
        <Search />
        <Route exact={true} path="/sessions" component={Session} />
        <div
          css={`
            position: absolute;
            top: 0;
            right: 0;
          `}
        >
          <ProfileNameAvatar />
        </div>
      </Main>
      <Profile />
    </div>
  )
}

export default App
