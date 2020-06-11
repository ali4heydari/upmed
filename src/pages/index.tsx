import React from "react"
import tw from "twin.macro"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png"
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"

const IndexPage = () => {
  const { t, i18n } = useTranslation()

  return (
    <Layout>
      <SEO title="Make your Staff and Workspace Happy" />
      <div className={"page-header home"}>
        <h1>{t("hi")}</h1>
        <p>
          HiStaff gives your complex the opportunity to increase the percentage
          of happiness
          <br />
          and enjoyment of your staff and as a result, bring productivity to
          your workspace.
        </p>
        <img alt={"Dashboard"} src={featureImage} />
      </div>

      <div className={"container"}>
        <div className={"features"}>
          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Event"} src={thumbnailEvent} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>{t(StringKeys.MEASUREMENT_OF_TREATMENT_OUTPUT)}</h2>
                  <p>
                    {t(
                      StringKeys.ABILITY_TO_MEASURE_THE_OUTPUT_OF_TREATMENT_AND_PATIENT_SATISFACTION_IN_QUANTITATIVE_AND_STATISTICAL_TERMS
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>{t(StringKeys.ANALYTICAL_DASHBOARDS)}</h2>
                  <p>
                    {t(
                      StringKeys.ACCESS_TO_ANALYTICAL_DASHBOARDS_AND_DATA_TO_MEASURE_THE_QUALITY_OF_TREATMENT_AND_THE_PERFORMANCE_OF_THE_TREATMENT_TEAM
                    )}
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Board"} src={thumbnailBoard} />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"News"} src={thumbnailNews} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>{t(StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION)}</h2>
                  <p>
                    {t(
                      StringKeys.BETTER_UNDERSTAND_YOUR_SITUATION_AND_GET_THE_NECESSARY_INFORMATION_AND_KNOWLEDGE_ABOUT_THE_DISEASE_AND_TREATMENT
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>{t(StringKeys.DETECTION_OF_PROBLEMS)}</h2>
                  <p>
                    {t(
                      StringKeys.EARLY_DETECTION_OF_PROBLEMS_AND_PREVENTION_OF_POSSIBLE_LOSSES_AND_PENALTIES
                    )}
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Team"} src={thumbnailTeams} />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Users"} src={thumbnailStaff} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>
                    {t(
                      StringKeys.EASIER_ACCESS_TO_THE_PATIENTS_INFORMATION_AND_BACKGROUND_IF_NEEDED
                    )}
                  </h2>
                  <p>
                    {t(
                      StringKeys.EASIER_ACCESS_TO_THE_PATIENTS_INFORMATION_AND_BACKGROUND_IF_NEEDED
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>{t(StringKeys.IDENTIFY_PROBLEMS_AFTER_TREATMENT)}</h2>
                  <p>
                    {t(
                      StringKeys.IDENTIFY_AND_RESOLVE_PROBLEMS_QUICKLY_THAT_MAY_ARISE_FOR_THE_PATIENT_AFTER_TREATMENT
                    )}
                  </p>
                </div>
              </div>

              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Team"} src={thumbnailTeams} />
                </div>
              </div>
            </div>
          </div>

          <div className={"feature__item"}>
            <div className={"row"}>
              <div className={"col-6 first"}>
                <div className={"thumbnail"}>
                  <img alt={"Users"} src={thumbnailStaff} />
                </div>
              </div>

              <div className={"col-6"}>
                <div className={"feature__content"}>
                  <h2>{t(StringKeys.IMPROVING_THE_QUALITY_OF_TREATMENT)}</h2>
                  <p>
                    {t(
                      StringKeys.IMPROVING_THE_QUALITY_OF_TREATMENT_AND_REDUCING_THE_DURATION_OF_TREATMENT
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"call-to-action"}>
        <div className={"container"}>
          <div className={"call-to-action__content"}>
            <h2>Sign up for free</h2>
            <p>
              Sign up and start increasing the productivity of your business
              with HiStaff.
            </p>
          </div>

          <div className={"button"}>
            <a href="https://app.histaff.io" target={"_blank"}>
              {t(StringKeys.GET_STARTED)}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
