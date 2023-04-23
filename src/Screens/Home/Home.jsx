import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className='home-container'>
        <div className='home-left'>
          <div className='home-title'>
            <h1>Hai 👋, I'm <span>Dhinesh Kumar 😉</span></h1>
          </div>
          <div>
            <p>some content </p>
          </div>
          <div className='home-btn'>
              <button>Resume </button>
              <button>Contact Us</button>
          </div>
        </div>
      <div className='home-right-img'>
          <img className='home-img' src='src/assets/dhinesh-png.jpg' alt='my image' />
      </div>
        
      </div>  
    </>
  )
}

export default Home


// button clicking function
