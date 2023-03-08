import React from 'react'

type Props = {
    subtitle: string
}

const Header = ({subtitle}: Props) => {
  return (
    <h1>{subtitle}</h1>
  )
}

export default Header