"use client"

import * as React from "react"
import { Variants, motion, AnimatePresence } from "framer-motion"
import { cn } from "../lib/utils"
import { CheckCircle, XCircle, AlertCircle, Info } from 'lucide-react'

export interface ToastProps {
  message: string
  type?: "success" | "error" | "warning" | "info"
  duration?: number
  onClose?: () => void
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left"
  className?: string
}

const toastVariants: Variants = {
  initial: { opacity: 0, y: 50, scale: 0.3 },
  animate: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9, 
    transition: { 
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    } 
  }
}

const Toast: React.FC<ToastProps> = ({
  message,
  type = "info",
  duration = 3000,
  onClose,
  position = "top-right",
  className
}) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onClose])

  const getPositionClasses = () => {
    switch (position) {
      case "top-right":
        return "top-4 right-4"
      case "top-left":
        return "top-4 left-4"
      case "bottom-right":
        return "bottom-4 right-4"
      case "bottom-left":
        return "bottom-4 left-4"
      default:
        return "top-4 right-4"
    }
  }

  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5" />
      case "error":
        return <XCircle className="w-5 h-5" />
      case "warning":
        return <AlertCircle className="w-5 h-5" />
      case "info":
        return <Info className="w-5 h-5" />
      default:
        return <Info className="w-5 h-5" />
    }
  }

  const getTypeClasses = () => {
    switch (type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/30 dark:border-green-800 dark:text-green-300"
      case "error":
        return "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/30 dark:border-red-800 dark:text-red-300"
      case "warning":
        return "bg-yellow-50 border-yellow-200 text-yellow-800 dark:bg-yellow-900/30 dark:border-yellow-800 dark:text-yellow-300"
      case "info":
        return "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300"
      default:
        return "bg-blue-50 border-blue-200 text-blue-800 dark:bg-blue-900/30 dark:border-blue-800 dark:text-blue-300"
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        variants={toastVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className={cn(
          "fixed z-50 flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg border backdrop-blur-sm",
          "min-w-[300px] max-w-[400px]",
          getTypeClasses(),
          getPositionClasses(),
          className
        )}
      >
        {getIcon()}
        <div className="flex-1 text-sm font-medium">{message}</div>
        <button
          onClick={onClose}
          className="ml-4 opacity-70 hover:opacity-100 transition-opacity focus:outline-none"
        >
          <XCircle className="w-4 h-4" />
        </button>
      </motion.div>
    </AnimatePresence>
  )
}

export default Toast
