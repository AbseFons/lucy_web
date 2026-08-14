import { motion } from 'framer-motion'
import { Heart, LockKeyhole } from 'lucide-react'
import type { LoveNote } from '../../data/loveNotes'

type EnvelopeCardProps = {
  note: LoveNote
  opened: boolean
  unlocked: boolean
  onOpen: () => void
}

export function EnvelopeCard({
  note,
  opened,
  unlocked,
  onOpen,
}: EnvelopeCardProps) {
  return (
    <motion.button
      type="button"
      className={[
        'love-envelope',
        `love-envelope--${note.tone}`,
        opened ? 'love-envelope--opened' : '',
        !unlocked ? 'love-envelope--locked' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={onOpen}
      whileHover={unlocked ? { y: -5, rotate: note.number % 2 ? -0.5 : 0.5 } : {}}
      whileTap={unlocked ? { scale: 0.985 } : {}}
      aria-label={
        unlocked
          ? `Abrir sobre ${note.number}: ${note.title}`
          : `Sobre ${note.number} bloqueado hasta el 14 de agosto`
      }
    >
      <span className="love-envelope__number">
        {String(note.number).padStart(2, '0')}
      </span>

      <span className="love-envelope__paper">
        <span>{note.preview}</span>
      </span>

      <span className="love-envelope__body">
        <span className="love-envelope__flap" />
        <span className="love-envelope__left-fold" />
        <span className="love-envelope__right-fold" />

        <span className="love-envelope__seal">
          {unlocked ? <Heart size={16} fill="currentColor" /> : <LockKeyhole size={15} />}
        </span>
      </span>

      <span className="love-envelope__status">
        {!unlocked ? '14 AGO' : opened ? 'Abierto' : 'Abrir'}
      </span>
    </motion.button>
  )
}
