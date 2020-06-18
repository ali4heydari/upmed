import React, { Fragment, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import tw, { css } from "twin.macro"
import { StringKeys } from "../utils/enums"
import { Links } from "../utils/enums/Links"
import MenuIcon from "mdi-react/MenuIcon"
import { Logo } from "./Logo"

const PATHS = [
  {
    to: `/${Links.ABOUT_US}`,
    stringKey: StringKeys.ABOUT_US,
  },
  {
    to: `/${Links.CONTACT_US}`,
    stringKey: StringKeys.CONTACT_US,
  },
  {
    to: `/${Links.TERMS}`,
    stringKey: StringKeys.TERMS,
  },
]

const Header = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (isOpen) document.body.style.setProperty("overflow", "hidden")
      else document.body.style.removeProperty("overflow")
    }
  }, [isOpen])
  return (
    <Fragment>
      <header css={tw`text-gray-700 bg-white`}>
        <div
          css={tw`container mx-auto flex flex-wrap p-5 flex-row md:flex-row items-center`}
        >
          <nav
            css={tw`hidden lg:flex lg:w-2/5 flex-wrap items-center text-base`}
          >
            {PATHS.map(path => (
              <Link
                to={path.to}
                css={[tw`mr-5 hover:text-gray-900`]}
                key={path.to}
              >
                {t(path.stringKey)}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)}
            css={tw`lg:hidden text-black`}
          >
            <MenuIcon />
          </button>

          <Link
            to="/"
            css={tw`flex flex-auto lg:w-1/5 font-medium items-center text-gray-900 justify-center`}
          >
            <div
              css={css`
                margin-top: -20px;
                margin-bottom: -20px;
              `}
            >
              <Logo />
            </div>
            <span css={tw`ml-3 text-xl`}>{t(StringKeys.WEBSITE_NAME)}</span>
          </Link>

          <div
            css={tw`hidden lg:inline-flex lg:w-2/5 lg:justify-end ml-5 lg:ml-0`}
          >
            <a
              css={tw`inline-flex items-center bg-gray-200 border-0 py-1 px-3 focus:outline-none hover:bg-gray-300 rounded text-base mt-4 md:mt-0`}
              href={`${Links.TERMS}`}
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
            </a>
          </div>
        </div>
      </header>
      <aside
        css={[
          tw`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30`,
          isOpen ? tw`translate-x-0` : tw`translate-x-full`,
        ]}
      >
        {PATHS.map(path => (
          <Link
            to={path.to}
            css={[tw`block p-4 hover:bg-indigo-500 hover:text-gray-900`]}
            key={path.to}
          >
            {t(path.stringKey)}
          </Link>
        ))}
      </aside>
      <div
        css={[
          isOpen ? tw`opacity-100` : tw`opacity-0`,
          tw`ease-out transition-opacity`,
        ]}
      >
        {isOpen && (
          <div css={tw`z-10 fixed inset-0 transition-opacity`}>
            <div
              onClick={() => setIsOpen(false)}
              css={tw`absolute inset-0 bg-black opacity-50`}
            />
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Header
