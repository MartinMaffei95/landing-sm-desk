'use client'
import { useState, useEffect } from 'react'
import FooterBar from '@/app/Components/NewWindow/FooterBar'
import TopBar from '@/app/Components/NewWindow/TopBar'
import useResize from '@/hooks/useResize'
import React from 'react'
import { Position, Rnd } from 'react-rnd'
import useHasWindow from '@/hooks/useHasWindow'

type Props = {
  children: React.ReactNode
  folderName?: string
  onClose?: 'close' | 'back' | Function
  icon?: React.ReactNode
  backBtn?: boolean
  initPosition?: {
    x: number
    y: number
  }
  windowPosition?: string
  overflow?: boolean
}
const ExecutableContainer = ({
  children,
  folderName = '',
  onClose = 'close',
  icon,
  backBtn = false,
  initPosition = { x: 0, y: 0 },
  windowPosition,
  overflow = false,
}: Props) => {
  const { size, setSize } = useResize()
  const [actualPosition, setActualPosition] = useState<Position>(initPosition)
  const { hasWindow } = useHasWindow()
  useEffect(() => {
    console.log(windowPosition)
    if (windowPosition === 'RIGHT-BOTTOM' && hasWindow) {
      setActualPosition({
        x: initPosition.x - size.width,
        y: initPosition.y - size.height,
      })
    }
    if (windowPosition === 'LEFT-TOP' && hasWindow) {
      setActualPosition({
        x: 0,
        y: 0,
      })
    }
  }, [initPosition, windowPosition])
  return (
    <Rnd
      style={{
        position: 'absolute',
        overflow: 'hidden',
        display: 'flex',
        pointerEvents: 'all',
        height: size.height,
      }}
      dragHandleClassName="handle"
      size={{ width: size.width, height: size.height }}
      position={actualPosition}
      onDragStop={(e, d) => {
        setActualPosition({ x: d.x, y: d.y })
      }}
      onResize={(e, direction, ref, delta, position) => {
        setSize({
          width: ref.offsetWidth,
          height: ref.offsetHeight,
        })
        setActualPosition(position)
      }}
    >
      <div
        className={`flex flex-col min-w-full w-full h-full max-h-full overflow-hidden bg-neutral-100  select-none  folder-w98-style `}
      >
        <TopBar
          icon={icon}
          onClose={onClose}
          backBtn={backBtn}
          folderName={folderName}
        />
        <div
          className={`min-w-full w-full h-full max-h-full flex flex-col font-sans ${
            overflow ? 'overflow-x-hidden  overflow-y-scroll' : ''
          }`}
        >
          {children}
          <FooterBar />
        </div>
      </div>
    </Rnd>
  )
}

export default ExecutableContainer
