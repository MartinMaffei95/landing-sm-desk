import useHasWindow from '@/hooks/useHasWindow'
import { useState, useEffect } from 'react'

export type InitSizes = {
  initHeight?: number
  initWidht?: number
}

const useResize = ({ initHeight, initWidht }: InitSizes = {}) => {
  const [width, setWidth] = useState<number>(0)
  // Screen size
  const [screen, setScreen] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  })
  console.log(initHeight, initHeight)
  // OpenwindowDIV size
  const [size, setSize] = useState({
    width: initWidht ? initWidht : screen?.width * 0.7,
    height: initHeight ? initHeight : screen?.height * 0.9,
  })

  const { hasWindow } = useHasWindow()

  // Function to resize.
  // - Set the widt of window
  // - Set the screen sizes (x & y)
  // - Set the size of the open div of RnD. That size is used for RnD Div size.
  const handleResize = () => {
    setWidth(window.innerWidth)
    setScreen({
      width: window.innerWidth,
      height: window.innerHeight,
    })
    setSize({
      width: initWidht ? initWidht : screen?.width * 0.7,
      height: initHeight ? initHeight : screen?.height * 0.9,
    })
  }

  //First render if the window exist (next SSR)
  useEffect(() => {
    if (hasWindow) {
      setWidth(window.innerWidth)
      setScreen({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      setSize({
        width: initWidht ? initWidht : window.innerWidth * 0.7,
        height: initHeight ? initHeight : window.innerHeight * 0.9,
      })
    }
  }, [hasWindow])

  //second render if the windowSize change
  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize)
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [width])

  return {
    size,
    setSize,
  }
}

export default useResize
