import * as S from "./styles"

type SparkleItem = {
  top: string
  left: string
  delay: string
}

interface SparklesProps {
  items: SparkleItem[]
}

export function Sparkles({ items }: SparklesProps) {
  return (
    <>
      {items.map((s, i) => (
        <S.Sparkle key={i} {...s} />
      ))}
    </>
  )
}