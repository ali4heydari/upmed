import React from "react"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"
import { StringKeys } from "../utils/enums"

const features = [
  {
    titleStringKey: StringKeys.MEASUREMENT_OF_TREATMENT_OUTPUT,
    descriptionStringKey:
      StringKeys.ABILITY_TO_MEASURE_THE_OUTPUT_OF_TREATMENT_AND_PATIENT_SATISFACTION_IN_QUANTITATIVE_AND_STATISTICAL_TERMS,
    image: "/images/feature-event.png",
  },
  {
    titleStringKey: StringKeys.ANALYTICAL_DASHBOARDS,
    descriptionStringKey:
      StringKeys.ACCESS_TO_ANALYTICAL_DASHBOARDS_AND_DATA_TO_MEASURE_THE_QUALITY_OF_TREATMENT_AND_THE_PERFORMANCE_OF_THE_TREATMENT_TEAM,
    image: "/images/feature-board.png",
  },
  {
    titleStringKey: StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION,
    descriptionStringKey:
      StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION_AND_GET_THE_NECESSARY_INFORMATION_AND_KNOWLEDGE_ABOUT_THE_DISEASE_AND_TREATMENT,
    image: "/images/feature-news.png",
  },
  {
    titleStringKey: StringKeys.DETECTION_OF_PROBLEMS,
    descriptionStringKey:
      StringKeys.EARLY_DETECTION_OF_PROBLEMS_AND_PREVENTION_OF_POSSIBLE_LOSSES_AND_PENALTIES,
    image: "/images/feature-team.png",
  },
  {
    titleStringKey: StringKeys.IDENTIFY_PROBLEMS_AFTER_TREATMENT,
    descriptionStringKey:
      StringKeys.IDENTIFY_AND_RESOLVE_PROBLEMS_QUICKLY_THAT_MAY_ARISE_FOR_THE_PATIENT_AFTER_TREATMENT,
    image: "/images/feature-user.png",
  },
]

const FeaturesSection = () => {
  const { t } = useTranslation()
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
      {features.map((feature, index) => (
        <div
          key={feature.titleStringKey}
          //TODO handle data-sal for ltr direction by reversing condition
          data-sal={index % 2 === 0 ? "slide-right" : "slide-left"}
          data-sal-delay="200"
          data-sal-easing="ease"
          css={tw`flex items-center flex-wrap mb-20`}
        >
          {index % 2 === 0 ? (
            <div css={tw`w-full md:w-1/2`}>
              <img src={feature.image} alt={t(feature.titleStringKey)} />
            </div>
          ) : null}
          <div css={tw`w-full md:w-1/2`}>
            <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
              {t(feature.titleStringKey)}
            </h4>
            <p css={tw`text-gray-600 mb-8`}>
              {t(feature.descriptionStringKey)}
            </p>
          </div>
          {index % 2 === 0 ? null : (
            <div css={tw`w-full md:w-1/2`}>
              <img src={feature.image} alt={t(feature.titleStringKey)} />
            </div>
          )}
        </div>
      ))}
    </section>
  )
}

export default FeaturesSection
