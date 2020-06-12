import React, { useContext } from "react"
import { ThemeContext } from "styled-components"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import tw from "twin.macro"
import { StringKeys } from "../utils/enums"
import { Links } from "../utils/enums/Links"

const Header = ({ siteTitle }) => {
  const { t } = useTranslation()
  const themeContext = useContext(ThemeContext)
  console.log(themeContext)
  return (
    <header css={tw`text-gray-700 bg-white`}>
      <div
        css={tw`container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center`}
      >
        <nav
          css={tw`flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto`}
        >
          <a href={`/${Links.ABOUT_US}`} css={[tw`mr-5 hover:text-gray-900`]}>
            {t(StringKeys.ABOUT_US)}
          </a>
          <a href={`/${Links.CONTACT_US}`} css={[tw`mr-5 hover:text-gray-900`]}>
            {t(StringKeys.CONTACT_US)}
          </a>
          <a href={`/${Links.PRIVACY}`} css={tw`mr-5 hover:text-gray-900`}>
            {t(StringKeys.PRIVACY)}
          </a>
          <a href={`/${Links.TERMS}`} css={tw`mr-5 hover:text-gray-900`}>
            {t(StringKeys.TERMS)}
          </a>
        </nav>
        <a
          href="/"
          css={tw`flex order-first lg:order-none lg:w-1/5 font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            css={tw`w-10 h-10 text-white p-2 bg-indigo-500 rounded-full`}
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span css={tw`ml-3 text-xl`}>{t(StringKeys.WEBSITE_NAME)}</span>
        </a>
        <div css={tw`lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0`}>
          <button
            css={tw`inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0`}
          >
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              css={tw`w-4 h-4 ml-1`}
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            {t(StringKeys.GET_STARTED)}
          </button>
        </div>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
