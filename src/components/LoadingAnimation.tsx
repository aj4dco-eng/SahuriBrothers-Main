import React from 'react'
import './LoadingAnimation.css'

const LoadingAnimation: React.FC = () => {
  return (
    <div className="loading-screen">
      <div className="fan-container">
        <div className="fan">
          <div className="fan-blade"></div>
          <div className="fan-blade"></div>
          <div className="fan-blade"></div>
          <div className="fan-blade"></div>
        </div>
        <div className="fan-center"></div>
      </div>
      <div className="loading-text">Sahuri Brothers</div>
    </div>
  )
}

export default LoadingAnimation
