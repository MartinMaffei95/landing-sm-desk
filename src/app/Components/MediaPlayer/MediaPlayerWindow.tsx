'use client'
import { useEffect } from 'react'
import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer'
import MediaPlayer from '@/app/Components/MediaPlayer/MediaPlayer'
import { mq } from '@/config/mediaQueries'
import useMediaQuery from '@/hooks/useMediaQuery'
import React from 'react'
import useHasWindow from '@/hooks/useHasWindow'
import { FaPlayCircle } from 'react-icons/fa'
import Image from 'next/image'

const MediaPlayerWindow = () => {
  const { innerMedia, isBigPhone, isPhone, mediaQuery } = useMediaQuery(mq)
  const { hasWindow } = useHasWindow()

  return (
    <ExecutableContainer
      windowPosition={isPhone ? 'LEFT-TOP' : 'RIGHT-BOTTOM'}
      initPosition={isPhone ? { x: 0, y: 0 } : innerMedia}
      onClose="close"
      initSize={
        isPhone ? { initHeight: 400, initWidht: innerMedia?.x || 0 } : undefined
      }
      icon={
        <Image width={36} height={36} alt="wm icon" src="/ico/w98/ico/wm.ico" />
      }
      folderName="SocialMedia Player"
    >
      <MediaPlayer />
    </ExecutableContainer>
  )
}

export default MediaPlayerWindow
