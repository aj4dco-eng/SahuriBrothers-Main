import React from 'react'
import './ClientsCarousel.css'
import { useLanguage } from '../context/LanguageContext'

interface Client {
  id: number
  name: string
  url: string
}

const ClientsCarousel: React.FC = () => {
  const { t } = useLanguage()

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

  // Duplicate clients for seamless loop
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="section clients-section">
      <div className="section-title">
        <h2>{t('clients.title')}</h2>
        <p className="section-subtitle">{t('clients.subtitle')}</p>
      </div>

      <div className="clients-carousel">
        <div className="carousel-track">
          {duplicatedClients.map((client, index) => (
            <div
              key={`${client.id}-${index}`}
              className="client-item"
            >
              <img src={client.url} alt={client.name} title={client.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientsCarousel
