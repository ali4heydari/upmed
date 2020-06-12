import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import { css } from "styled-components"
import SiteConfigs from "../../SiteConfigs"

const ContactPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t(StringKeys.CONTACT_US)} />
      <section css={tw`text-gray-700 relative`}>
        <div
          css={tw`container px-5 py-24 mx-auto flex sm:flex-no-wrap flex-wrap`}
        >
          <div
            css={tw`lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative`}
          >
            <iframe
              width="100%"
              height="100%"
              css={[
                tw`absolute inset-0`,
                css`
                  filter: grayscale(1) contrast(1.2) opacity(0.4);
                `,
              ]}
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=sharif+technology+service+complex&ie=UTF8&t=&z=14&iwloc=B&output=embed"
            />
            <div css={tw`bg-white relative flex flex-wrap py-6`}>
              <div css={tw`lg:w-1/2 px-6`}>
                <h2 css={tw`font-medium text-gray-900 tracking-widest text-sm`}>
                  {t(StringKeys.ADDRESS)}
                </h2>
                <p css={tw`leading-relaxed`}>{t(StringKeys.WEBSITE_ADDRESS)}</p>
              </div>
              <div css={tw`lg:w-1/2 px-6 mt-4 lg:mt-0`}>
                <h2 css={tw`font-medium text-gray-900 tracking-widest text-sm`}>
                  {t(StringKeys.EMAIL)}
                </h2>
                <a css={tw`text-indigo-500 leading-relaxed`}>
                  {SiteConfigs.CONTACT_EMAIL}
                </a>
                <h2
                  css={tw`font-medium text-gray-900 tracking-widest text-sm mt-4`}
                >
                  {t(StringKeys.PHONE)}
                </h2>
                <p dir="ltr" css={tw`leading-relaxed`}>
                  {SiteConfigs.CONTACT_PHONE}
                </p>
              </div>
            </div>
          </div>
          <div
            css={tw`lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0`}
          >
            <div css={tw`flex-grow`}>
              <h2 css={tw`text-gray-900 text-lg font-medium mb-3`}>
                {t(StringKeys.CONTACT_US)}
              </h2>
              <p css={tw`leading-relaxed text-base`}>
                {t(StringKeys.CONTACT_US_TEXT)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default ContactPage
