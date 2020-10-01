import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"
import FeaturesSection from "../components/features-section"
import { OurCustomers } from "../components/customers"
import { Hero } from "../components/hero"
import { SlideShow } from "../components/slideshow"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <SEO title={t(StringKeys.HOME)} />
      <Hero />
      <FeaturesSection />
      <SlideShow />
      <OurCustomers />
    </Layout>
  )
}
export default IndexPage
