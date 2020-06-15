import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import { Get_LogoQuery } from "../../graphql-types"

const getLogo = graphql`
  query GET_LOGO {
    file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        fixed(width: 60, height: 60) {
          width
          height
          src
          srcSet
          base64
          tracedSVG
          srcWebp
        }
      }
    }
  }
`

export const Logo: React.FC = () => {
  const { file } = useStaticQuery<Get_LogoQuery>(getLogo)
  const { t } = useTranslation()

  return (
    <Img
      // @ts-ignore
      fixed={file?.childImageSharp?.fixed}
      alt={t(StringKeys.WEBSITE_NAME)}
    />
  )
}
