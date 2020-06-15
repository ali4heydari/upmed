import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"
import { StringKeys } from "../utils/enums"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { Get_Team_ImagesQuery } from "../../graphql-types"

const team = {
  "alireza-fatemi.jpg": {
    nameStringKey: StringKeys.ALIREZA_FATEMI,
    roleStringKey: StringKeys.DEVELOPER,
  },
  "siyavash-ganji.jpg": {
    nameStringKey: StringKeys.SIYAVASH_GANJI,
    roleStringKey: StringKeys.DEVELOPER,
  },
  "ali-heydari.jpg": {
    nameStringKey: StringKeys.ALI_HEYDARI,
    roleStringKey: StringKeys.DEVELOPER,
  },
}

const getTeamImages = graphql`
  query GET_TEAM_IMAGES {
    allFile(
      filter: {
        relativePath: {
          in: [
            "team/alireza-fatemi.jpg"
            "team/siyavash-ganji.jpg"
            "team/ali-heydari.jpg"
          ]
        }
      }
    ) {
      edges {
        node {
          relativePath
          base
          childImageSharp {
            fluid {
              base64
              src
              srcSet
              sizes
              aspectRatio
            }
          }
        }
      }
    }
  }
`

const AboutPage = () => {
  const { t } = useTranslation()
  const { allFile } = useStaticQuery<Get_Team_ImagesQuery>(getTeamImages)
  console.log("allFile", allFile)
  return (
    <Layout>
      <SEO title={t(StringKeys.ABOUT_US)} />
      <section css={tw`text-gray-700`}>
        <div css={tw`container px-5 py-24 mx-auto`}>
          <div css={tw`flex flex-col text-center w-full mb-20`}>
            <h1 css={tw`text-2xl mb-4 text-gray-900`}>
              {t(StringKeys.OUR_TEAM)}
            </h1>
            {/*<p css={tw`lg:w-2/3 mx-auto leading-relaxed text-base`}>
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them.
            </p>*/}
          </div>
          <div css={tw`flex flex-wrap`}>
            {allFile.edges.map(({ node }, index) => (
              <div
                key={team[node.base].nameStringKey}
                data-sal="zoom-in"
                data-sal-delay={(index + 1) * 100}
                data-sal-easing="ease"
                css={tw`p-4 lg:w-1/4 md:w-1/2`}
              >
                <div css={tw`h-full flex flex-col items-center text-center`}>
                  <Img
                    alt={t(team[node.base].nameStringKey)}
                    css={tw`flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4`}
                    // @ts-ignore
                    fluid={node.childImageSharp!.fluid}
                  />
                  <div css={tw`w-full`}>
                    <h2 css={tw`font-medium text-lg text-gray-900`}>
                      {t(team[node.base].nameStringKey)}
                    </h2>
                    <h3 css={tw`text-gray-500 mb-3`}>
                      {t(team[node.base].roleStringKey)}
                    </h3>
                    <span css={tw`inline-flex`}>
                      <a css={tw`text-gray-500`}>
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          css={tw`w-5 h-5`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                        </svg>
                      </a>
                      <a css={tw`ml-2 text-gray-500`}>
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          css={tw`w-5 h-5`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>
                      </a>
                      <a css={tw`ml-2 text-gray-500`}>
                        <svg
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          css={tw`w-5 h-5`}
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default AboutPage
