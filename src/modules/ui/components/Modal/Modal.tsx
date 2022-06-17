import type { ReactNode } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { useEffect, useRef } from 'react'
import cn from 'classnames'
import { createPortal } from 'react-dom'

export interface ModalProps {
  className?: string
  opened: boolean
  children?: ReactNode

  onClose(): void
}

export function Modal({ className, opened, onClose, children }: ModalProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(
    function lockScroll() {
      if (containerRef.current) {
        opened
          ? disableBodyScroll(containerRef.current)
          : enableBodyScroll(containerRef.current)
      }
      return function unsubscribe() {
        clearAllBodyScrollLocks()
      }
    },
    [opened]
  )

  if (!opened) return null

  return createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-25 flex items-center justify-center z-10">
      <div
        className="absolute top-0 left-0 w-full h-full z-20"
        onClick={onClose}
      />
      <div
        ref={containerRef}
        className={cn(
          className,
          'w-full p-10 bg-white rounded-lg relative z-30'
        )}
      >
        {children}
      </div>
    </div>,
    document.getElementById('root-modal') as HTMLElement
  )
}
