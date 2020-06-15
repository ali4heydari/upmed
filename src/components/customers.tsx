import tw from "twin.macro"
import { StringKeys } from "../utils/enums"
import React from "react"
import { useTranslation } from "react-i18next"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Get_Customers_ImagesQuery } from "../../graphql-types"

const customers = {
  "sina-hospital.jpg": {
    stringKey: StringKeys.SINA_HOSPITAL,
  },
}

const getCustomersImages = graphql`
  query GET_CUSTOMERS_IMAGES {
    allFile(filter: { relativePath: { in: ["sina-hospital.jpg"] } }) {
      edges {
        node {
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
    }
  }
`

export function OurCustomers() {
  const { t } = useTranslation()
  const {
    allFile: { edges: customerImages },
  } = useStaticQuery<Get_Customers_ImagesQuery>(getCustomersImages)

  return (
    <section css={tw`bg-gray-100`}>
      <div css={tw`container mx-auto px-6 py-20`}>
        <h2 css={tw`text-4xl font-bold text-center text-gray-800 mb-8`}>
          {t(StringKeys.OUR_CUSTOMERS)}
        </h2>
        <div css={tw`flex flex-wrap`}>
          <div css={tw`sm:w-1/4 p-2`}>
            {customerImages.map(({ node }) => (
              <div
                key={node.base}
                css={tw`bg-white px-6 py-8 shadow-lg text-center`}
              >
                <div css={tw`mb-3`}>
                  <Img
                    css={tw`w-auto mx-auto`}
                    // @ts-ignore
                    fluid={node?.childImageSharp?.fluid}
                    alt={t(customers[node.base].stringKey)}
                  />
                </div>
                <h2 css={tw`text-xl font-medium text-gray-700`}>
                  {t(customers[node.base].stringKey)}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
