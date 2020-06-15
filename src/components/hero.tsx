import tw from "twin.macro"
import { StringKeys } from "../utils/enums"
import React from "react"
import { css } from "styled-components"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import { Get_Hero_ImageQuery } from "../../graphql-types"
import Img from "gatsby-image"

const getHeroImage = graphql`
  query GET_HERO_IMAGE {
    file(relativePath: { eq: "intro.png" }) {
      base
      childImageSharp {
        fluid {
          originalImg
          base64
          src
          srcSet
          sizes
          tracedSVG
          aspectRatio
        }
      }
    }
  }
`

export function Hero() {
  const { t } = useTranslation()
  const { file } = useStaticQuery<Get_Hero_ImageQuery>(getHeroImage)
  return (
    <div
      css={[
        tw`relative flex flex-col h-full min-h-screen`,
        css`
          background-color: #376fa9;
        `,
      ]}
    >
      <div
        css={tw`text-white container mx-auto flex flex-col px-5 justify-center items-center pt-12`}
      >
        <div css={tw`w-full md:w-2/3 flex flex-col items-center text-center`}>
          <h1 css={tw`sm:text-4xl text-3xl mb-4 font-medium`}>
            {t(StringKeys.SLOGAN)}
          </h1>
          <p css={tw`leading-relaxed`}>
            {t(StringKeys.WEBSITE_NAME)} {t(StringKeys.INTRODUCE_STARTUP)}
          </p>
        </div>
      </div>
      <Img
        // @ts-ignore
        fluid={file?.childImageSharp.fluid}
        alt={file?.base || t(StringKeys.WEBSITE_NAME)}
        css={[
          tw`z-0 w-full flex-auto justify-center`,
          css`
            object-fit: cover;
          `,
        ]}
      />
    </div>
  )
}
