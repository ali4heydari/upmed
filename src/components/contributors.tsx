import tw from "twin.macro"
import Img from "gatsby-image"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useTranslation } from "react-i18next"
import { Get_Contributors_ImagesQuery } from "../../graphql-types"
import { StringKeys } from "../utils/enums"

const contributors = {
  "1-mahdiye-soleymani.jpg": {
    nameStringKey: StringKeys.MAHDIYE_SOLEYMADI,
    jobStringKeys: [StringKeys.ASSISTANT_PROFESSOR],
    jobDepartmentStringKey: StringKeys.SHARIF_UNIVERSITY,
    roleStringKey: StringKeys.TEAM_SUPERVISOR,
  },
  "2-hale-ashraf.jpg": {
    nameStringKey: StringKeys.HALE_ASHRAF,
    jobStringKeys: [StringKeys.CARDIOLOGIST],
    jobDepartmentStringKey: StringKeys.SINA_HOSPITAL,
    roleStringKey: StringKeys.TEAM_ADVISER,
  },
  "3-abbas-soleymani.png": {
    nameStringKey: StringKeys.ABBAS_SOLEYMANI,
    jobStringKeys: [
      StringKeys.CARDIOLOGIST,
      StringKeys.FELLOWSHIP_INTERVENTION,
    ],
    jobDepartmentStringKey: StringKeys.SINA_HOSPITAL,
    roleStringKey: StringKeys.TEAM_ADVISER,
  },
  "4-sareh-zendehrouh.jpg": {
    nameStringKey: StringKeys.SAREH_ZENDEHROUH,
    jobStringKeys: [StringKeys.RESIDENT_RESEARCHER],
    jobDepartmentStringKey: StringKeys.IPM,
    roleStringKey: StringKeys.TEAM_ADVISER,
  },
  "5-zahra-shajari.jpg": {
    nameStringKey: StringKeys.ZAHRA_SHAJARI,
    jobStringKeys: [StringKeys.CARDIOLOGIST],
    jobDepartmentStringKey: StringKeys.SINA_HOSPITAL,
    roleStringKey: StringKeys.TEAM_ADVISER,
  },
  "6-hamid-behroozi.jpg": {
    nameStringKey: StringKeys.HAMID_BEHROOZI,
    jobStringKeys: [StringKeys.ASSOCIATE_PROFESSOR],
    jobDepartmentStringKey: StringKeys.SHARIF_UNIVERSITY,
    roleStringKey: StringKeys.TEAM_ADVISER,
  },
}

const getContributorsImages = graphql`
  query GET_CONTRIBUTORS_IMAGES {
    allFile(
      filter: {
        relativePath: {
          in: [
            "contributors/1-mahdiye-soleymani.jpg"
            "contributors/3-abbas-soleymani.png"
            "contributors/2-hale-ashraf.jpg"
            "contributors/4-sareh-zendehrouh.jpg"
            "contributors/5-zahra-shajari.jpg"
            "contributors/6-hamid-behroozi.jpg"
          ]
        }
      }
      sort: { fields: name }
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

export function Contributors() {
  const { allFile } = useStaticQuery<Get_Contributors_ImagesQuery>(
    getContributorsImages
  )

  const { t } = useTranslation()

  return (
    <section css={tw`text-gray-700`}>
      <div css={tw`container px-5 py-24 mx-auto`}>
        <div css={tw`flex flex-col text-center w-full mb-20`}>
          <h1 css={tw`text-2xl font-medium mb-4 text-gray-900 tracking-widest`}>
            {t(StringKeys.APPRECIATION)}
          </h1>
          <p css={tw`lg:w-2/3 mx-auto leading-relaxed text-base`}>
            {t(StringKeys.APPRECIATION_TEXT)}
          </p>
        </div>
        <div css={tw`flex flex-wrap -m-4`}>
          {allFile.edges.map(({ node }) => (
            <div css={tw`p-4 lg:w-1/2`} key={node.base}>
              <div
                css={tw`h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left`}
              >
                <Img
                  alt={t(contributors[node.base].nameStringKey)}
                  title={t(contributors[node.base].nameStringKey)}
                  css={tw`flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4`}
                  // @ts-ignore
                  fluid={node?.childImageSharp?.fluid}
                />
                <div css={tw`flex-grow sm:pl-8`}>
                  <h2 css={tw`font-medium text-lg text-gray-900`}>
                    {t(contributors[node.base].nameStringKey)}
                  </h2>
                  <h3 css={tw`text-gray-500`}>
                    {contributors[node.base].jobStringKeys
                      .map(jobStringKeys => t(jobStringKeys))
                      .join(" - ")}
                  </h3>
                  <h3 css={tw`text-gray-500 mb-3`}>
                    {t(contributors[node.base].jobDepartmentStringKey)}
                  </h3>
                  <p css={tw`mb-4`}>
                    {t(contributors[node.base].roleStringKey)}
                  </p>
                  <span css={tw`inline-flex`}>
                    <a css={tw`text-gray-500`}>
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        css={tw`w-5 h-5`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a css={tw`ml-2 text-gray-500`}>
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        css={tw`w-5 h-5`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a css={tw`ml-2 text-gray-500`}>
                      <svg
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        css={tw`w-5 h-5`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
