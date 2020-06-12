import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import FeaturesSection from "../components/features-section"
import sinaLogo from "../../static/images/sina-hospital.jpg"

const IndexPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <SEO title={t(StringKeys.HOME)} />
      <div
        css={tw`py-20`}
        style={{
          background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
        }}
      >
        <div css={tw`container mx-auto px-6`}>
          <h2 css={tw`text-4xl font-bold mb-2 text-white`}>
            Smart Health Monitoring Wristwatch!
          </h2>
          <h3 css={tw`text-2xl mb-8 text-gray-200`}>
            Monitor your health vitals smartly anywhere you go.
          </h3>

          <button
            css={tw`bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider`}
          >
            Pre Order
          </button>
        </div>
      </div>

      <FeaturesSection />

      <section css={tw`bg-gray-100`}>
        <div css={tw`container mx-auto px-6 py-20`}>
          <h2 css={tw`text-4xl font-bold text-center text-gray-800 mb-8`}>
            {t(StringKeys.OUR_CUSTOMERS)}
          </h2>
          <div css={tw`flex flex-wrap`}>
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
