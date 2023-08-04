import ExecutableContainer from '@/app/Components/Executable/ExecutableContainer/ExecutableContainer'
import CourseDataContainer from '@/app/courses/components/CourseDataContainer'
import { FC, useState } from 'react'

type Props = {}
const CourseDataWindow: FC<Props> = ({}) => {
  const [width, setWidth] = useState<number>(256)

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
