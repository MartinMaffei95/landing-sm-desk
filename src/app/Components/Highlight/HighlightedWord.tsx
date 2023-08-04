import { CSSProperties, FC } from 'react'
type Props = {
  text: string
  style?: CSSProperties
}

const breakString = (text: string): string[] => {
  const firstLetter = text.charAt(0)
  const rest = text.slice(1)

  return [firstLetter, rest]
}

const HighlightedWord: FC<Props> = ({ text, style }) => {
  const t = breakString(text)
  const whitPen: CSSProperties = {
    display: 'flex',
    width: '100%',
    position: 'absolute',
    bottom: '.25rem',
    left: 0,
    height: '40%',
    transform: 'rotate(-1deg) skewX(12deg)',
    background: ' rgb(6 182 212)',
    ...style,
  }
  return (
    <div
      className={` flex w-fit text-neutral-900 text-3xl font-bold relative  break-words`}
    >
      <div
        style={{
          ...whitPen,
        }}
      />
      <p className="z-10 px-2">
        {t[0]}
        {t[1]}
      </p>
    </div>
  )
}

export default HighlightedWord
