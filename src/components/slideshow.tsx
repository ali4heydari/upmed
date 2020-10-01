import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"
import tw from "twin.macro"
import GatsbyImage from "gatsby-image"
import { useTranslation } from "react-i18next"
import { Namespaces, StringKeys } from "../utils/enums"

export function SlideShow() {
  const [selectedSlide, setSelectedSlide] = useState(0)
  const { t } = useTranslation(Namespaces.TRANSLATIONS)
  const {
    allFile: { edges },
  } = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          dir: { regex: "/screenshots/" }
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
  `)

  const onClickNavs = (selected: number) => {
    if (selected > edges.length - 1) {
      setSelectedSlide(0)
    } else if (selected < 0) {
      setSelectedSlide(edges.length - 1)
    } else {
      setSelectedSlide(selected)
    }
  }

  return (
    <section css={tw`mx-auto max-w-2xl`} id="screenshots">
      <h2 css={tw`text-4xl text-center tracking-wide leading-loose mb-2`}>
        {t(StringKeys.SCREEN_SHOTS)}
      </h2>
      <div css={tw`shadow-2xl relative`}>
        {edges.map(({ node }, idx) => (
          <div
            key={node.base}
            css={idx !== selectedSlide ? tw`hidden` : tw`block`}
          >
            <GatsbyImage
              fluid={node.childImageSharp.fluid}
              alt={node.base}
              css={[tw`w-full object-cover`]}
            />
          </div>
        ))}
        <button
          css={tw`absolute left-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold`}
          onClick={() => onClickNavs(selectedSlide - 1)}
        >
          ❮
        </button>
        <button
          css={tw`absolute right-0 inset-y-0 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold`}
          onClick={() => onClickNavs(selectedSlide + 1)}
        >
          ❯
        </button>
        <div
          css={tw`text-center text-white font-light tracking-wider bg-gray-800 py-2`}
        >
          {edges.flatMap(({ node }, idx) =>
            idx === selectedSlide ? [<p>{node.base}</p>] : []
          )}
        </div>
        <div css={tw`flex overflow-x-scroll w-full`}>
          {edges.map(({ node }, idx) => (
            <div key={node.base} onClick={() => setSelectedSlide(idx)}>
              <GatsbyImage
                fluid={node.childImageSharp.fluid}
                css={[
                  tw`h-24 w-24 opacity-50 hover:opacity-100 cursor-pointer`,
                  idx === selectedSlide ? tw`opacity-100` : undefined,
                ]}
                alt={node.base}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
