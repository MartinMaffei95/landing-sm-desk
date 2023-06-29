import { MediaQuerys, MeqiaQuerysConfig, mq } from '@/config/mediaQueries'
import useHasWindow from '@/hooks/useHasWindow'
import { useState, useEffect } from 'react'

const useMediaQuery = (mq: MeqiaQuerysConfig) => {
  const [mediaQuery, setMediaQuery] = useState<string>('')
  const [innerMedia, setInnerMedia] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })
  const [isPhone, setIsPhone] = useState<boolean>(true)
  const [isBigPhone, setIsBigPhone] = useState<boolean>(true)
  const [isTablet, setIsTablet] = useState<boolean>(false)
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  const handleResize = () => {
    switch (true) {
      case window.innerWidth < mq.PHONE.size:
        setIsPhone(true)
        setIsBigPhone(false)
        setIsTablet(false)
        setIsDesktop(false)
        setMediaQuery(mq.PHONE.key)
        break

      case window.innerWidth >= mq.BIG_PHONE.size:
        setIsPhone(false)
        setIsBigPhone(true)
        setIsTablet(false)
        setIsDesktop(false)
        setMediaQuery(mq.TABLET.key)
        break

      case window.innerWidth >= mq.TABLET.size:
        setIsPhone(false)
        setIsBigPhone(false)
        setIsTablet(true)
        setIsDesktop(false)
        setMediaQuery(mq.TABLET.key)
        break

      case window.innerWidth >= mq.DESKTOP.size:
        setIsPhone(false)
        setIsBigPhone(false)
        setIsTablet(false)
        setIsDesktop(true)
        setMediaQuery(mq.DESKTOP.key)
        break

      default:
        setIsPhone(true)
        setIsBigPhone(false)

        setIsTablet(false)
        setIsDesktop(false)
        setMediaQuery(mq.PHONE.key)
        break
    }
    setInnerMedia({
      x: window.innerWidth,
      y: window.innerHeight,
    })
  }

  const { hasWindow } = useHasWindow()

  useEffect(() => {
    if (hasWindow) {
      setInnerMedia({
        x: window.innerWidth,
        y: window.innerHeight,
      })
      handleResize()
      window.addEventListener('resize', handleResize)
      return window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  useEffect(() => {
    if (hasWindow) {
      window.addEventListener('resize', handleResize)
    }
    return () => window.removeEventListener('resize', handleResize)
  }, [innerMedia])

  return { mediaQuery, isBigPhone, innerMedia, isPhone, isTablet, isDesktop }
}

export default useMediaQuery
