import React from 'react'
import './styles/home.css'
import { NavLink } from 'react-router-dom'

function Home(props){
    return(
        <section id="home" className="d-flex align-items-center ">
            <div className='container d-flex flex-column align-items-center shadow-lg p-4'>
              <h1 className='dispaly-1'>Malan</h1>
              <h2 className='display-5 text-center'>I'm  a proffesional MERN Stack Developer</h2>
              <NavLink to={`/about`} className="btn btn-outline-info"><i className="bi bi-person-fill"></i>About Me</NavLink>
           </div>
        </section>
    )
}
export default Home