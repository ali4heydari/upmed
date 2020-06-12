import React from "react"
import tw from "twin.macro"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import FeaturesSection from "../components/features-section"

const IndexPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <SEO title="Make your Staff and Workspace Happy" />
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
            Testimonials
          </h2>
          <div css={tw`flex flex-wrap`}>
            <div css={tw`w-full md:w-1/3 px-2 mb-4`}>
              <div css={tw`bg-white rounded shadow py-2`}>
                <p css={tw`text-gray-800 text-base px-6 mb-5`}>
                  Monitoring and tracking my health vitals anywhere I go and on
                  any platform I use has never been easier.
                </p>
                <p css={tw`text-gray-500 text-xs md:text-sm px-6`}>John Doe</p>
              </div>
            </div>
            <div css={tw`w-full md:w-1/3 px-2 mb-4`}>
              <div css={tw`bg-white rounded shadow py-2`}>
                <p css={tw`text-gray-800 text-base px-6 mb-5`}>
                  As an Athlete, this is the perfect product for me. I wear my
                  Smart Health Monitoring Wristwatch everywhere i go, even in
                  the bathroom since it's waterproof.
                </p>
                <p css={tw`text-gray-500 text-xs md:text-sm px-6`}>Jane Doe</p>
              </div>
            </div>
            <div css={tw`w-full md:w-1/3 px-2 mb-4`}>
              <div css={tw`bg-white rounded shadow py-2`}>
                <p css={tw`text-gray-800 text-base px-6 mb-5`}>
                  I don't regret buying this wearble gadget. One of the best
                  gadgets I own!.
                </p>
                <p css={tw`text-gray-500 text-xs md:text-sm px-6`}>James Doe</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default IndexPage
