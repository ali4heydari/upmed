import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/logo.svg"
import { useTranslation } from "react-i18next"
import { StringKeys } from "../utils/enums"

const Header = ({ siteTitle }) => {
  const { t } = useTranslation()
  return (
    <header>
      <div className={"container"}>
        <div className={"top-menu"}>
          <div className={"logo"}>
            <Link to="/" title={"HiStaff"}>
              <img alt={"Logo"} src={logo} />
            </Link>
          </div>

          <div className={"get-started"}>
            <a href={"https://app.histaff.io"}>{t(StringKeys.GET_STARTED)}</a>
          </div>
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
