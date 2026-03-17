import React, { useEffect, useState } from 'react'
import './VideoSection.css'
import { useLanguage } from '../context/LanguageContext'

const PREFERRED_VIDEO_IMAGES = [
  '/video-01.jpg',
  '/video-02.jpg',
  '/video-03.jpg',
  '/video-04.jpg',
]

const FALLBACK_VIDEO_IMAGES = [
  '/0126sahuri-01.jpg',
  '/0126sahuri-02.jpg',
  '/0126sahuri-03.jpg',
  '/0126sahuri-04.jpg',
]

const VideoSection: React.FC = () => {
  const { t } = useLanguage()
  const [images, setImages] = useState<string[]>(FALLBACK_VIDEO_IMAGES)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    let active = true

    const checkPreferredImages = async () => {
      const checks = await Promise.all(
        PREFERRED_VIDEO_IMAGES.map(
          (src) =>
            new Promise<boolean>((resolve) => {
              const img = new Image()
              img.onload = () => resolve(true)
              img.onerror = () => resolve(false)
              img.src = src
            })
        )
      )

      if (active && checks.every(Boolean)) {
        setImages(PREFERRED_VIDEO_IMAGES)
      }
    }

    checkPreferredImages()

    return () => {
      active = false
    }
  }, [])

  const openLightbox = (i = 0) => {
    setIndex(i)
    setLightboxOpen(true)
  }

  const closeLightbox = () => setLightboxOpen(false)

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setIndex((i) => (i + 1) % images.length)

  return (
    <section className="section video-section">
      <div className="grid-rows">
        <div className="grid-row rtl-direction">
          <div
            className="grid-cell video-cell"
            onClick={() => openLightbox(0)}
            role="button"
            aria-label="Open media gallery"
            style={{ backgroundImage: `url(${images[0]})` }}
          >
            <div className="video-play">
              <div className="play-circle">
                <svg viewBox="0 0 24 24" width="36" height="36" fill="white">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="grid-cell text-cell">
            <div className="grid-row-text">
              <h2>{t('video.title')}</h2>
              <h3>{t('video.subtitle')}</h3>
              <p>{t('video.desc1')}</p>
              <p className="case-study-note">{t('video.desc2')}</p>

              <div className="video-thumbs">
                {images.map((src, i) => (
                  <button key={src} className="thumb" onClick={() => openLightbox(i)} aria-label={`Open image ${i + 1}`}>
                    <img src={src} alt={`thumb-${i + 1}`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox" role="dialog" aria-modal="true">
          <button className="lb-close" onClick={closeLightbox} aria-label="Close">&times;</button>
          <button className="lb-prev" onClick={prev} aria-label="Previous">&#8249;</button>
          <div className="lb-content">
            <img src={images[index]} alt={`gallery-${index + 1}`} />
          </div>
          <button className="lb-next" onClick={next} aria-label="Next">&#8250;</button>
        </div>
      )}
    </section>
  )
}

export default VideoSection
