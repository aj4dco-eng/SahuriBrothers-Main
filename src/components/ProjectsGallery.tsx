import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProjectsGallery.css'
import { useLanguage } from '../context/LanguageContext'
import { pickText, toUiLanguage } from '../lib/localized'
import TiltCard from './TiltCard'
import Skeleton from './Skeleton'

interface ProjectImage {
  id: number
  url: string
  alt: string
}

const ProjectsGallery: React.FC = () => {
  const { t, language } = useLanguage()
  const lang = toUiLanguage(language)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())

  const local = ['/0126sahuri-01.jpg', '/0126sahuri-02.jpg', '/0126sahuri-03.jpg', '/0126sahuri-04.jpg']
  const projectTitles = [
    { en: 'Luxury Villa', he: 'וילה יוקרתית', ar: 'فيلا فاخرة' },
    { en: 'Modern Office', he: 'משרד מודרני', ar: 'مكتب حديث' },
    { en: 'Residential Complex', he: 'מתחם מגורים', ar: 'مجمع سكني' },
    { en: 'Commercial Center', he: 'מרכז מסחרי', ar: 'مركز تجاري' },
  ]
  
  const projects: ProjectImage[] = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    url: local[i % local.length],
    alt: `${pickText(lang, {
      en: 'Project',
      he: 'פרויקט',
      ar: 'مشروع',
    })} ${i + 1}`,
  }))

  const itemsPerView = 4
  const maxStart = Math.max(0, projects.length - itemsPerView)

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxStart, prev + 1))
  }

  return (
    <section className="section projects-gallery-section">
      <div className="section-title">
        <h2>{t('gallery.title')}</h2>
        <p className="section-subtitle">{t('gallery.subtitle')}</p>
      </div>

      <div className="gallery-container">
        <div className="gallery-slider">
          <div className="slider-wrapper">
            {projects.map((project, index) => {
              const titleIndex = index % projectTitles.length
              const isVisible = index >= currentIndex && index < currentIndex + itemsPerView
              const isLoaded = loadedImages.has(project.id)
              return (
                <TiltCard
                  key={project.id}
                  className={`gallery-item ${isVisible ? 'visible' : 'hidden'}`}
                  intensity={6}
                >
                  {!isLoaded && <Skeleton height="100%" borderRadius="0" className="gallery-img-skeleton" />}
                  <img
                    src={project.url}
                    alt={project.alt}
                    onLoad={() => setLoadedImages(prev => new Set([...prev, project.id]))}
                    style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 0.4s ease' }}
                  />
                  <div className="gallery-item-overlay">
                    <h3>{pickText(lang, projectTitles[titleIndex])}</h3>
                    <p>{project.alt}</p>
                  </div>
                </TiltCard>
              )
            })}
          </div>

          <button
            className="slider-nav prev"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label={pickText(lang, {
              en: 'Previous projects',
              he: 'פרויקטים קודמים',
              ar: 'المشاريع السابقة',
            })}
          >
            {'>'}
          </button>
          <button
            className="slider-nav next"
            onClick={handleNext}
            disabled={currentIndex >= maxStart}
            aria-label={pickText(lang, {
              en: 'Next projects',
              he: 'פרויקטים הבאים',
              ar: 'المشاريع التالية',
            })}
          >
            {'<'}
          </button>
        </div>
      </div>

      <div className="content-section-btn">
        <Link to="/projects/private-projects" className="sec-button">
          {pickText(lang, {
            en: 'All projects',
            he: 'לכל הפרויקטים',
            ar: 'كل المشاريع',
          })}
        </Link>
      </div>
    </section>
  )
}

export default ProjectsGallery
