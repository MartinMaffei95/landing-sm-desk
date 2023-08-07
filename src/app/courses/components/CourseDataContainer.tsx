import HighlightedWord from '@/app/Components/Highlight/HighlightedWord'
import Image from 'next/image'
import { FC } from 'react'

type Props = {
  width: number
}
const CourseDataContainer: FC<Props> = ({ width }) => {
  return (
    <section
      className={`flex gap-4 items-center justify-center  w-full h-full ${
        width < 600 ? 'flex-wrap' : ''
      }`}
    >
      <div className=" basis-2/4 p-4 flex flex-col gap-4 w-full flex-shrink-0 flex-grow">
        <HighlightedWord
          style={{ background: 'yellow' }}
          text="Tu nueva plataforma de aprendizaje"
        />
        <p className="text-base font-normal tracking-wide">
          Conviértete en un experto del marketing digital con nuestros cursos
          especializados. Estamos comprometidos a ofrecerte la formación más
          actualizada y de alta calidad en el apasionante mundo del marketing
          digital. Nuestra plataforma educativa te brinda acceso a una amplia
          variedad de cursos diseñados para satisfacer las necesidades tanto de
          principiantes como de profesionales con experiencia.
        </p>

        <a
          className="bg-green-600 text-xl font-semibold p-2 text-center tracking-wider text-neutral-100 rounded-md"
          target="_blank"
          href="https://learning.socialmedia1989.com.ar"
        >
          Quiero ir a la plataforma!
        </a>
      </div>
      <aside
        className={`w-full h-full flex relative   ${
          width < 600 ? '' : 'basis-2/4'
        }`}
      >
        <Image
          fill
          className="object-cover center"
          alt="courses hero"
          src={'/images/courses-hero-woman.webp'}
        />
      </aside>
    </section>
  )
}

export default CourseDataContainer
