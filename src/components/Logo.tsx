import React from "react"

interface LogoProps {
  width?: number
}

export const Logo: React.FC<LogoProps> = ({ width= 60 }) => {
  return (
    <img src="/images/logo.png" width={width}/>
  )
}
