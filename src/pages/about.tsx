import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import { OurTeam } from "../components/our-team"
import { Contributors } from "../components/contributors"

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <SEO title={t(StringKeys.ABOUT_US)} />
      <OurTeam />
      <Contributors />
    </Layout>
  )
}
export default AboutPage
