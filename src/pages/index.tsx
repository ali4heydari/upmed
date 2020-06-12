import React from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import FeaturesSection from "../components/features-section"
import sinaLogo from "../../static/images/sina-hospital.jpg"
import Header from "../components/header"
import { graphql, useStaticQuery } from "gatsby"

const IndexPage = () => {
  const { t, i18n } = useTranslation()
  const data = useStaticQuery(graphql`
    query HeaderQueryIndex {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <Layout showHeader={false}>
      <SEO title={t(StringKeys.HOME)} />
      <div css={[tw`relative flex flex-col min-h-screen h-full`]}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <picture>
          <img src="/images/listrunner_secondillo_dribbble_full_4x.png"
               alt="Man with a dog"
               css={[tw`absolute z-0 w-full h-full flex-auto justify-center`,css`object-fit: cover;`]}
          >
          </img>
        </picture>
        <div css={[tw`z-10 flex-grow text-white bg-transparent`]}>
          <div css={tw`container mx-auto flex flex-col px-5 py-24 justify-center items-center`}>
            <div css={tw`w-full md:w-2/3 flex flex-col mb-16 items-center text-center`}>
              <h1 css={tw`sm:text-4xl text-3xl mb-4 font-medium`}>Knausgaard typewriter
                readymade marfa</h1>
              <p css={tw`mb-8 leading-relaxed`}>Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo
                live-edge tumeric scenester copper mug flexitarian. Prism vice offal plaid everyday carry. Gluten-free
                chia VHS squid listicle artisan.</p>
            </div>
          </div>
        </div>
      </div>
      <FeaturesSection />

      <section css={tw`bg-gray-100`}>
        <div css={tw`container mx-auto px-6 py-20`}>
          <h2 css={tw`text-4xl font-bold text-center text-gray-800 mb-8`}>
            {t(StringKeys.OUR_CUSTOMERS)}
          </h2>
          <div
            data-sal="zoom-in"
            data-sal-delay="300"
            data-sal-easing="ease"
            css={tw`flex flex-wrap`}
          >
            <div css={tw`sm:w-1/4 p-2`}>
              <div
                css={tw`bg-white px-6 py-8 rounded-lg shadow-lg text-center`}
              >
                <div css={tw`mb-3`}>
                  <img
                    css={tw`w-auto mx-auto rounded-full`}
                    src={sinaLogo}
                    alt={t(StringKeys.SINA_HOSPITAL)}
                  />
                </div>
                <h2 css={tw`text-xl font-medium text-gray-700`}>
                  {t(StringKeys.SINA_HOSPITAL)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
