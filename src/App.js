import './main.css';
import { HashRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Contact from './Pages/Contact'
import AboutMe from './Pages/AboutMe'
import Me from './Components/Me'
import Projects from './Pages/Projects'
import {useState} from 'react'

// Save the Component, key and path in an array of objects for each Route
// You could write all routes by hand but I'm lazy annd this lets me use
// the map method to just loop over them and make my routes
// SWITCH is used so that it only ever matches one route at a time
// If you don't want to use react router just rewrite the app component to not use it

const routes = [
  // {
  //   Component: Contact,
  //   key: 'Contact',
  //   path: '/contact'
  // },
  {
    Component: Projects,
    key: 'Projects',
    path: '/projects'
  },
  {
    Component: AboutMe,
    key: 'About Me',
    path: '/'
  }
]

export default function App () {
  // const [data, setData] = useState([])

  return (
    <Router>
      <nav className="nav">
        {routes.map(route => <Link className="navItems" key={route.key} to={route.path}>{route.key}</Link>)}
      </nav>
      < Me />
      <Switch>
        {
          routes.map(({key, Component, path}) => (
            <Route
              key={key}
              path={path}
              component={props => <Component {...props} page={key} />}
              />))
        }
      </Switch>
    </Router>
  )
}
