"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "../lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export interface CarouselProps {
  items: {
    id: string | number
    content: React.ReactNode
  }[]
  autoPlay?: boolean
  interval?: number
  showArrows?: boolean
  showDots?: boolean
  className?: string
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = true,
  interval = 5000,
  showArrows = true,
  showDots = true,
  className
}) => {
  const [[page, direction], setPage] = React.useState([0, 0])
  const [touchStart, setTouchStart] = React.useState<number | null>(null)

  const imageIndex = Math.abs(page % items.length)

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection])
  }

  React.useEffect(() => {
    if (autoPlay) {
      const timer = setInterval(() => {
        paginate(1)
      }, interval)

      return () => clearInterval(timer)
    }
  }, [autoPlay, interval, page])

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    if (Math.abs(diff) > 50) {
      paginate(diff > 0 ? 1 : -1)
    }

    setTouchStart(null)
  }

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl",
        className
      )}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full h-full"
          >
            {items[imageIndex].content}
          </motion.div>
        </AnimatePresence>
      </div>

      {showArrows && (
        <>
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {showDots && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => setPage([index, index - imageIndex])}
              className={cn(
                "w-2 h-2 rounded-full transition-colors",
                index === imageIndex ? "bg-white" : "bg-white/50"
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Carousel
