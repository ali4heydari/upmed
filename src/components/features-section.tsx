import React from "react"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"
import { StringKeys } from "../utils/enums"
import { graphql, useStaticQuery } from "gatsby"
import { Get_Feature_ImagesQuery } from "../../graphql-types"
import Img from "gatsby-image"

const features = {
  "analysis.jpg": {
    titleStringKey: StringKeys.MEASUREMENT_OF_TREATMENT_OUTPUT,
    descriptionStringKey:
      StringKeys.ABILITY_TO_MEASURE_THE_OUTPUT_OF_TREATMENT_AND_PATIENT_SATISFACTION_IN_QUANTITATIVE_AND_STATISTICAL_TERMS,
  },
  "dashboard.jpg": {
    titleStringKey: StringKeys.ANALYTICAL_DASHBOARDS,
    descriptionStringKey:
      StringKeys.ACCESS_TO_ANALYTICAL_DASHBOARDS_AND_DATA_TO_MEASURE_THE_QUALITY_OF_TREATMENT_AND_THE_PERFORMANCE_OF_THE_TREATMENT_TEAM,
  },
  "understand.jpg": {
    titleStringKey: StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION,
    descriptionStringKey:
      StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION_AND_GET_THE_NECESSARY_INFORMATION_AND_KNOWLEDGE_ABOUT_THE_DISEASE_AND_TREATMENT,
  },
  "clock.jpg": {
    titleStringKey: StringKeys.SAVE_DOCTOR_TIME,
    descriptionStringKey:
      StringKeys.SAVE_DOCTOR_TIME_AND_BETTER_AND_MORE_ACCURATE_INFORMATION_TRANSFER_TO_THE_PATIENT,
  },
  "follow.jpg": {
    titleStringKey: StringKeys.IDENTIFY_PROBLEMS_AFTER_TREATMENT,
    descriptionStringKey:
      StringKeys.IDENTIFY_AND_RESOLVE_PROBLEMS_QUICKLY_THAT_MAY_ARISE_FOR_THE_PATIENT_AFTER_TREATMENT,
  },
}

const getFeatureImages = graphql`
  query GET_FEATURE_IMAGES {
    allFile(
      filter: {
        relativePath: {
          in: [
            "analysis.jpg"
            "dashboard.jpg"
            "understand.jpg"
            "clock.jpg"
            "follow.jpg"
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

const FeaturesSection = () => {
  const { t } = useTranslation()
  const { allFile } = useStaticQuery<Get_Feature_ImagesQuery>(getFeatureImages)
  return (
    <section css={tw`container mx-auto px-6 p-10`}>
      <h2
        data-sal="slide-up"
        data-sal-delay="200"
        data-sal-easing="ease"
        css={tw`text-4xl font-bold text-center text-gray-800 mb-8`}
      >
        {t(StringKeys.FEATURES)}
      </h2>
      {allFile.edges.map(({ node }, index) => (
        <div key={node.base} css={tw`flex items-center flex-wrap mb-20`}>
          {index % 2 === 0 ? (
            <div css={tw`w-full md:w-1/2 md:pr-10`}>
              <Img
                // @ts-ignore
                fluid={node.childImageSharp!.fluid}
                alt={t(features[node.base].titleStringKey)}
              />
            </div>
          ) : null}
          <div css={tw`w-full md:w-1/2`}>
            <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
              {t(features[node.base].titleStringKey)}
            </h4>
            <p css={tw`text-gray-600 mb-8`}>
              {t(features[node.base].descriptionStringKey)}
            </p>
          </div>
          {index % 2 === 0 ? null : (
            <div css={tw`w-full md:w-1/2`}>
              <Img
                // @ts-ignore
                fluid={node.childImageSharp!.fluid}
                alt={t(features[node.base].titleStringKey)}
              />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default FeaturesSection
