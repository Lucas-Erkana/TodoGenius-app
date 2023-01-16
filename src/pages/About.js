import React from 'react'
import { Link, useLocation, Route } from "react-router-dom"
import SinglePage from './SinglePage'

const About = () => {
  const location = useLocation()
  const slug = location.pathname.split("/").pop()

  return (
    <div className="about__content">
      <ul className="about__list">
        <li>
          <Link to="/about/about-app">About App</Link>
        </li>
        <li>
          <Link to="/about/about-author">About Author</Link>
        </li>
      </ul>
      <Route path="/about/:slug">
        <SinglePage slug={slug} />
      </Route>
    </div>
  )
}
export default About
