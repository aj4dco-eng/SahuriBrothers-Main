import React, { useState, useEffect } from 'react'
import './Hero.css'
import { useLanguage } from '../context/LanguageContext'

interface HeroImage {
  id: number
  url: string
  alt: string
}

const Hero: React.FC = () => {
  const { t } = useLanguage()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const heroImages: HeroImage[] = [
    { id: 1, url: '/0126sahuri-03.jpg', alt: `${t('hero.slide')} 1` },
    { id: 2, url: '/0126sahuri-01.jpg', alt: `${t('hero.slide')} 2` },
    { id: 3, url: '/0126sahuri-04.jpg', alt: `${t('hero.slide')} 3` },
    { id: 4, url: '/0126sahuri-02.jpg', alt: `${t('hero.slide')} 4` },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 4000)

    return () => clearInterval(timer)
  }, [isPlaying, heroImages.length])

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const scrollToContent = () => {
    const element = document.querySelector('.sections')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section className="hero-gallery">
      <div className="gallery-slider">
        {heroImages.map((image, index) => (
          <div
            key={image.id}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <div
              className="slide-bg"
              style={{
                backgroundImage: `url('${image.url}')`,
              }}
              aria-label={image.alt}
              role="img"
            />
            <div className="opacity-layer" />
          </div>
        ))}
      </div>

      <button
        className={`play-pause-btn ${isPlaying ? 'playing' : 'paused'}`}
        onClick={togglePlayPause}
        aria-label={isPlaying ? t('hero.pause') : t('hero.play')}
        aria-pressed={isPlaying}
      />

      <button
        className="hero-nav-arrow prev"
        onClick={prevSlide}
        aria-label={t('hero.previous') || 'Previous slide'}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <button
        className="hero-nav-arrow next"
        onClick={nextSlide}
        aria-label={t('hero.next') || 'Next slide'}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
        </svg>
      </button>

      <div className="slide-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`${t('hero.slide')} ${index + 1}`}
          />
        ))}
      </div>

      <button
        className="scroll-down-btn"
        onClick={scrollToContent}
        aria-label={t('hero.scroll')}
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 10l5 5 5-5z" />
        </svg>
      </button>
    </section>
  )
}

export default Hero
