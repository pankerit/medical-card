import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import RegisterPageOne from './RegisterPageOne'
import RegisterPageTwo from './RegisterPageTwo'
import Sidebar from './Sidebar'
import progress from '../../assets/progress.svg'
import progress2 from '../../assets/progress2.svg'
const Register = () => {
  const [pathname, setPathname] = useState(window.location.pathname)
  useEffect(() => {
    // Update the document title using the browser API
    setPathname(window.location.pathname)
  }, [pathname])
  console.log(pathname)
  return (
    <div style={{ display: 'flex', width: '100vw', flexWrap: 'wrap' }}>
      <Sidebar
        progress={pathname == '/register' ? progress : progress2}
        opacity={pathname == '/register' ? [1, 0.5] : [0.5, 1]}
      />
      <Route exact={true} path="/register" component={RegisterPageOne} />
      <Route path="/register2" component={RegisterPageTwo} />
    </div>
  )
}

export default Register
