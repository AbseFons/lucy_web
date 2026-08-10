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

function App() {
  const [started, setStarted] = useState(false)

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
            <Intro onEnter={() => setStarted(true)} />
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
            <StoryIntro />
            <BeforeUs />
            <Reconnection />
            <RelationshipMoment />
            <section className="section section--cream">
              <RelationshipCounter />
            </section>
            <OurFourteens />
            <MemoriesGallery />

            <section className="section section--navy section--ending-placeholder">
              <div className="section__inner section__inner--center">
                <p className="eyebrow eyebrow--light">Continuará</p>
                <h2 className="display display--light">Esto recién empieza.</h2>
                <p className="body-copy body-copy--light">
                  Aquí iremos sumando lugares, canciones, videos, recuerdos, cartas y todo
                  lo que todavía nos falta vivir.
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
