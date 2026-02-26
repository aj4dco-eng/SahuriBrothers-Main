import React, { useState } from 'react'
import './ClientsCarousel.css'
import { useLanguage } from '../context/LanguageContext'

interface Client {
  id: number
  name: string
  url: string
}

const ClientsCarousel: React.FC = () => {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const clients: Client[] = [
    { id: 1, name: 'Sahuri', url: '/logo.png' },
    { id: 2, name: 'Sahuri', url: '/logo.png' },
    { id: 3, name: 'Sahuri', url: '/logo.png' },
    { id: 4, name: 'Sahuri', url: '/logo.png' },
    { id: 5, name: 'Sahuri', url: '/logo.png' },
    { id: 6, name: 'Sahuri', url: '/logo.png' },
    { id: 7, name: 'Sahuri', url: '/logo.png' },
    { id: 8, name: 'Sahuri', url: '/logo.png' },
    { id: 9, name: 'Sahuri', url: '/logo.png' },
    { id: 10, name: 'Sahuri', url: '/logo.png' },
    { id: 11, name: 'Sahuri', url: '/logo.png' },
  ]

  const itemsPerView = 6
  const maxStart = Math.max(0, clients.length - itemsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxStart, prev + 1))
  }

  return (
    <section className="section clients-section">
      <div className="section-title">
        <h2>{t('clients.title')}</h2>
        <p className="section-subtitle">{t('clients.subtitle')}</p>
      </div>

      <div className="clients-carousel">
        <div className="carousel-wrapper">
          {clients.map((client, index) => (
            <div
              key={client.id}
              className={`client-item ${
                index >= currentIndex && index < currentIndex + itemsPerView
                  ? 'visible'
                  : 'hidden'
              }`}
            >
              <img src={client.url} alt={client.name} title={client.name} />
            </div>
          ))}
        </div>

        <button
          className="carousel-nav prev"
          onClick={handlePrev}
          aria-label="הקודם"
        >
          ›
        </button>
        <button
          className="carousel-nav next"
          onClick={handleNext}
          aria-label="הבא"
        >
          ‹
        </button>
      </div>
    </section>
  )
}

export default ClientsCarousel
