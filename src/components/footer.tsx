import React from "react"
import { useTranslation } from "react-i18next"
import tw from "twin.macro"
import { StringKeys } from "../utils/enums"
import SiteConfigs from "../../SiteConfigs"
import { Links } from "../utils/enums/Links"
import { Logo } from "./Logo"

const Footer = () => {
  const { t, i18n } = useTranslation()
  return (
    <footer css={tw`text-gray-700`}>
      <div css={tw`container px-5 py-24 mx-auto`}>
        <div css={tw`flex flex-wrap md:text-left text-center order-first`}>
          <div css={tw`lg:w-1/4 md:w-1/2 w-full px-4`}>
            <h2
              css={tw`font-medium text-gray-900 tracking-widest text-sm mb-3`}
            >
              {t(StringKeys.WEBSITE_NAME)}
            </h2>
            <nav css={tw`list-none mb-10`}>
              <li>
                <a
                  href={`/${Links.ABOUT_US}`}
                  css={tw`text-gray-600 hover:text-gray-800`}
                >
                  {t(StringKeys.ABOUT_US)}
                </a>
              </li>
            </nav>
          </div>
          <div css={tw`lg:w-1/4 md:w-1/2 w-full px-4`}>
            <h2
              css={tw`font-medium text-gray-900 tracking-widest text-sm mb-3`}
            >
              {t(StringKeys.SUPPORT)}
            </h2>
            <nav css={tw`list-none mb-10`}>
              <li>
                <a
                  href={`/${Links.CONTACT_US}`}
                  css={tw`text-gray-600 hover:text-gray-800`}
                >
                  {t(StringKeys.CONTACT_US)}
                </a>
              </li>
              <li>
                <a
                  href={`/${Links.TERMS}`}
                  css={tw`text-gray-600 hover:text-gray-800`}
                >
                  {t(StringKeys.TERMS)}
                </a>
              </li>
            </nav>
          </div>
          {/*<div css={tw`lg:w-1/4 md:w-1/2 w-full px-4`}>
            <h2
              css={tw`font-medium text-gray-900 tracking-widest text-sm mb-3`}
            >
              CATEGORIES
            </h2>
            <nav css={tw`list-none mb-10`}>
              <li>
                <a css={tw`text-gray-600 hover:text-gray-800`}>First Link</a>
              </li>
              <li>
                <a css={tw`text-gray-600 hover:text-gray-800`}>Second Link</a>
              </li>
              <li>
                <a css={tw`text-gray-600 hover:text-gray-800`}>Third Link</a>
              </li>
              <li>
                <a css={tw`text-gray-600 hover:text-gray-800`}>Fourth Link</a>
              </li>
            </nav>
          </div>*/}
          <div css={tw`lg:w-1/4 md:w-1/2 w-full px-4`}>
            <h2
              css={tw`font-medium text-gray-900 tracking-widest text-sm mb-3`}
            >
              {t(StringKeys.SUBSCRIBE)}
            </h2>
            <div
              css={tw`flex xl:flex-no-wrap md:flex-no-wrap lg:flex-wrap flex-wrap justify-center md:justify-start`}
            >
              <input
                css={tw`w-40 sm:w-auto bg-gray-100 rounded xl:mr-4 lg:mr-0 sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base py-2 px-4`}
                placeholder={t(StringKeys.ENTER_EMAIL_ADDRESS)}
                type="text"
                autoComplete="email"
              />
              <button
                css={tw`lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded`}
              >
                {t(StringKeys.SUBSCRIBEING)}
              </button>
            </div>
            <p css={tw`text-gray-500 text-sm mt-2 md:text-left text-center`}>
              {t(StringKeys.BE_THE_FIRST_TO_KNOW_ABOUT_THE_NEWS)}
            </p>
          </div>
        </div>
      </div>
      <div css={tw`bg-gray-200`}>
        <div
          css={tw`container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col`}
        >
          <a
            css={tw`flex font-medium items-center md:justify-start justify-center text-gray-900`}
          >
            <Logo />
            <span css={tw`ml-3 text-xl`}>{t(StringKeys.WEBSITE_NAME)}</span>
          </a>
          <p css={tw`text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4`}>
            {t(StringKeys.COPYRIGHT)} ©{" "}
            {new Date(Date.now())
              .getFullYear()
              .toLocaleString(i18n.language, { useGrouping: false })}{" "}
            <a
              href="/"
              rel="noopener noreferrer"
              css={tw`text-gray-600 ml-1`}
              target="_blank"
            >
              {t(StringKeys.WEBSITE_NAME)}
            </a>{" "}
            — {t(StringKeys.ALL_RIGHTS_RESERVED)}
          </p>
          <span
            css={tw`inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start`}
          >
            <a
              href={`https://facebook.com/${SiteConfigs.FACEBOOK_ID}`}
              css={tw`text-gray-500`}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                css={tw`w-5 h-5`}
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a
              href={`https://twitter.com/${SiteConfigs.TWITTER_ID}`}
              css={tw`ml-3 text-gray-500`}
            >
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                css={tw`w-5 h-5`}
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a
              href={`https://instagram.com/${SiteConfigs.INSTAGRAM_ID}`}
              css={tw`ml-3 text-gray-500`}
            >
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                css={tw`w-5 h-5`}
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a
              href={`https://linkedin.com/${SiteConfigs.LINKEDIN_ID}`}
              css={tw`ml-3 text-gray-500`}
            >
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                css={tw`w-5 h-5`}
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
