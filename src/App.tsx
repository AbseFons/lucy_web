import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Intro } from './sections/Intro/Intro'
import { StoryIntro } from './sections/StoryIntro/StoryIntro'
import { BeforeUs } from './sections/BeforeUs/BeforeUs'
import { Reconnection } from './sections/Reconnection/Reconnection'
import { RelationshipMoment } from './sections/RelationshipMoment/RelationshipMoment'
import { RelationshipCounter } from './components/RelationshipCounter'
import { AnniversaryBanner } from './components/AnniversaryBanner'
import { SiteProgress } from './components/SiteProgress'
import { OurFourteens } from './sections/OurFourteens/OurFourteens'
import { MemoriesGallery } from './sections/MemoriesGallery/MemoriesGallery'
import { OurPlaces } from './sections/OurPlaces/OurPlaces'
import { OurSoundtrack } from './sections/OurSoundtrack/OurSoundtrack'
import { FloatingMusicPlayer } from './components/music/FloatingMusicPlayer'
import { useMusicPlayer } from './context/MusicPlayerContext'
import { featuredSongIndex, musicSettings, songs } from './data/songs'

function App() {
  const [started, setStarted] = useState(false)
  const { selectTrack } = useMusicPlayer()

  const handleEnter = () => {
    setStarted(true)

    if (musicSettings.playFeaturedOnEnter && songs[featuredSongIndex]?.audioSrc) {
      selectTrack(featuredSongIndex, true)
    }
  }

  return (
    <div className="app-shell">
      <AnimatePresence mode="wait">
        {!started ? (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.8 }}
          >
            <Intro onEnter={handleEnter} />
          </motion.div>
        ) : (
          <motion.main
            key="story"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <SiteProgress />
            <AnniversaryBanner />
            <FloatingMusicPlayer />
            <StoryIntro />
            <BeforeUs />
            <Reconnection />
            <RelationshipMoment />
            <section className="section section--cream">
              <RelationshipCounter />
            </section>
            <OurFourteens />
            <MemoriesGallery />
            <OurPlaces />
            <OurSoundtrack />

            <section className="section section--navy section--ending-placeholder">
              <div className="section__inner section__inner--center">
                <p className="eyebrow eyebrow--light">Continuará</p>
                <h2 className="display display--light">Esto recién empieza.</h2>
                <p className="body-copy body-copy--light">
                  Aquí iremos sumando videos, recuerdos, cartas y todo lo que todavía
                  nos falta vivir.
                </p>
              </div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
