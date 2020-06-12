import React from "react"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"
import { StringKeys } from "../utils/enums"
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
const FeaturesSection = () => {
  const { t, i18n } = useTranslation()
  return (
    <section css={tw`container mx-auto px-6 p-10`}>
      <h2 css={tw`text-4xl font-bold text-center text-gray-800 mb-8`}>
        Features
      </h2>
      <div css={tw`flex items-center flex-wrap mb-20`}>
        <div css={tw`w-full md:w-1/2`}>
          <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
            {t(StringKeys.MEASUREMENT_OF_TREATMENT_OUTPUT)}
          </h4>
          <p css={tw`text-gray-600 mb-8`}>
            {t(
              StringKeys.ABILITY_TO_MEASURE_THE_OUTPUT_OF_TREATMENT_AND_PATIENT_SATISFACTION_IN_QUANTITATIVE_AND_STATISTICAL_TERMS
            )}
          </p>
        </div>
        <div css={tw`w-full md:w-1/2`}>
          <img src={thumbnailEvent} alt="Monitoring" />
        </div>
      </div>

      <div css={tw`flex items-center flex-wrap mb-20`}>
        <div css={tw`w-full md:w-1/2`}>
          <img src={thumbnailBoard} alt="Reporting" />
        </div>
        <div css={tw`w-full md:w-1/2 pl-10`}>
          <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
            {t(StringKeys.ANALYTICAL_DASHBOARDS)}
          </h4>
          <p css={tw`text-gray-600 mb-8`}>
            {t(
              StringKeys.ACCESS_TO_ANALYTICAL_DASHBOARDS_AND_DATA_TO_MEASURE_THE_QUALITY_OF_TREATMENT_AND_THE_PERFORMANCE_OF_THE_TREATMENT_TEAM
            )}
          </p>
        </div>
      </div>

      <div css={tw`flex items-center flex-wrap mb-20`}>
        <div css={tw`w-full md:w-1/2`}>
          <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
            {t(StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION)}
          </h4>
          <p css={tw`text-gray-600 mb-8`}>
            {t(
              StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION_AND_GET_THE_NECESSARY_INFORMATION_AND_KNOWLEDGE_ABOUT_THE_DISEASE_AND_TREATMENT
            )}
          </p>
        </div>
        <div css={tw`w-full md:w-1/2`}>
          <img src={thumbnailNews} alt="Syncing" />
        </div>
      </div>
      <div css={tw`flex items-center flex-wrap mb-20`}>
        <div css={tw`w-full md:w-1/2`}>
          <img src={thumbnailTeams} alt="Reporting" />
        </div>
        <div css={tw`w-full md:w-1/2 pl-10`}>
          <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
            {t(StringKeys.DETECTION_OF_PROBLEMS)}
          </h4>
          <p css={tw`text-gray-600 mb-8`}>
            {t(
              StringKeys.EARLY_DETECTION_OF_PROBLEMS_AND_PREVENTION_OF_POSSIBLE_LOSSES_AND_PENALTIES
            )}
          </p>
        </div>
      </div>

      <div css={tw`flex items-center flex-wrap mb-20`}>
        <div css={tw`w-full md:w-1/2`}>
          <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
            {t(
              StringKeys.EASIER_ACCESS_TO_THE_PATIENTS_INFORMATION_AND_BACKGROUND_IF_NEEDED
            )}{" "}
          </h4>
          <p css={tw`text-gray-600 mb-8`}>
            {t(
              StringKeys.EASIER_ACCESS_TO_THE_PATIENTS_INFORMATION_AND_BACKGROUND_IF_NEEDED
            )}
          </p>
        </div>
        <div css={tw`w-full md:w-1/2`}>
          <img src={thumbnailStaff} alt="Syncing" />
        </div>
      </div>
      <div css={tw`flex items-center flex-wrap mb-20`}>
        <div css={tw`w-full md:w-1/2`}>
          <img src={thumbnailNews} alt="Reporting" />
        </div>
        <div css={tw`w-full md:w-1/2 pl-10`}>
          <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
            {t(StringKeys.IDENTIFY_PROBLEMS_AFTER_TREATMENT)}
          </h4>
          <p css={tw`text-gray-600 mb-8`}>
            {t(
              StringKeys.IDENTIFY_AND_RESOLVE_PROBLEMS_QUICKLY_THAT_MAY_ARISE_FOR_THE_PATIENT_AFTER_TREATMENT
            )}
          </p>
        </div>
      </div>

      <div css={tw`flex items-center flex-wrap mb-20`}>
        <div css={tw`w-full md:w-1/2`}>
          <h4 css={tw`text-3xl text-gray-800 font-bold mb-3`}>
            {t(StringKeys.IMPROVING_THE_QUALITY_OF_TREATMENT)}
          </h4>
          <p css={tw`text-gray-600 mb-8`}>
            {t(
              StringKeys.IMPROVING_THE_QUALITY_OF_TREATMENT_AND_REDUCING_THE_DURATION_OF_TREATMENT
            )}
          </p>
        </div>
        <div css={tw`w-full md:w-1/2`}>
          <img src={thumbnailStaff} alt="Syncing" />
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
