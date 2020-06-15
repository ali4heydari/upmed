import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import { Links } from "../utils/enums/Links"

import { Get_Agreement_ImageQuery } from "../../graphql-types"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const getAgreementImage = graphql`
  query GET_AGREEMENT_IMAGE {
    file(relativePath: { eq: "agreement.jpg" }) {
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
`

const TermsPage = () => {
  const { t } = useTranslation()
  const { file } = useStaticQuery<Get_Agreement_ImageQuery>(getAgreementImage)

  return (
    <Layout>
      <SEO title={t(StringKeys.TERMS)} />
      <section css={tw`text-gray-700`}>
        <div css={tw`container px-5 py-24 mx-auto flex flex-wrap`}>
          <div
            css={tw`flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10`}
          >
            <div css={tw`w-full sm:p-4 px-4 mb-6`}>
              <h1 css={tw`font-medium text-xl mb-2 text-gray-900`}>
                {t(StringKeys.TERMS)}
              </h1>
              <div css={tw`leading-relaxed`}>
                {t(StringKeys.CONTACT_US_TEXT)}
              </div>
            </div>
            <a
              href={`/${Links.CONTACT_US}`}
              css={tw`text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`}
            >
              {t(StringKeys.CONTACT_US)}
            </a>
            {/*<div css={tw`p-4 sm:w-1/2 lg:w-1/4 w-1/2`}>
              <h2 css={tw`font-medium text-3xl text-gray-900`}>1.8K</h2>
              <p css={tw`leading-relaxed`}>Subscribes</p>
            </div>
            <div css={tw`p-4 sm:w-1/2 lg:w-1/4 w-1/2`}>
              <h2 css={tw`font-medium text-3xl text-gray-900`}>35</h2>
              <p css={tw`leading-relaxed`}>Downloads</p>
            </div>
            <div css={tw`p-4 sm:w-1/2 lg:w-1/4 w-1/2`}>
              <h2 css={tw`font-medium text-3xl text-gray-900`}>4</h2>
              <p css={tw`leading-relaxed`}>Products</p>
            </div>*/}
          </div>
          <div
            css={tw`lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0`}
          >
            <Img
              css={tw`object-cover object-center w-full h-full`}
              // @ts-ignore
              fluid={file!.childImageSharp!.fluid}
              alt="agreement"
            />
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default TermsPage
