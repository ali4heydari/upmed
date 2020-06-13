import React, { useEffect, useState } from "react"
import tw, { css } from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import FeaturesSection from "../components/features-section"
import { Link } from "gatsby"

const IndexPage = () => {
  const { t, i18n } = useTranslation()
  return (
    <Layout>
      <SEO title={t(StringKeys.HOME)} />
      <div
        css={[
          tw`relative flex flex-col h-full min-h-screen`,
          css`
            background-color: #376fa9;
          `
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
        <picture>
          <img
            src="/images/intro.png"
            alt="Man with a dog"
            css={[
              tw`z-0 w-full flex-auto justify-center`,
              css`
                object-fit: cover;
              `
            ]}
          />
        </picture>
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
                    src="/images/sina-hospital.jpg"
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
