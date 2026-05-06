import * as S from "./styles"

export type BlobColor = "primary" | "secondary"

export type BlobItem = {
  top?: string
  left?: string
  right?: string
  $color?: BlobColor
}

interface BlobsProps {
  items: BlobItem[]
}

export function Blobs({ items }: BlobsProps) {
  return (
    <>
      {items.map((b, i) => (
        <S.Blob key={i} {...b} />
      ))}
    </>
  )
}