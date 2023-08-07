'use client'
import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer'
import CourseDataContainer from '@/app/courses/components/CourseDataContainer'
import useHasWindow from '@/hooks/useHasWindow'
import { FC, useEffect, useState } from 'react'

type Props = {}
const CourseDataWindow: FC<Props> = ({}) => {
  const { hasWindow } = useHasWindow()
  const [width, setWidth] = useState<number>(256)
  useEffect(() => {
    if (hasWindow) {
      setWidth(window.innerWidth)
    }
  }, [hasWindow])

  return (
    <ExecutableContainer
      overflow
      onClose="close"
      folderName="Nuestros Cursos"
      onResize={(ref) => {
        setWidth(() => ref.offsetWidth)
      }}
    >
      <CourseDataContainer width={width} />
    </ExecutableContainer>
  )
}

export default CourseDataWindow
