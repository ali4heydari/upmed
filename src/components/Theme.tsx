import React from "react"
import { StyleSheetManager, ThemeProvider } from "styled-components"
import resolveConfig from "tailwindcss/resolveConfig"
import tailwindConfig from "./../../tailwind.config.js"
import rtlPlugin from "stylis-plugin-rtl"

const { theme } = resolveConfig(tailwindConfig)

const Theme = props => (
  <StyleSheetManager stylisPlugins={[rtlPlugin]}>
    <ThemeProvider {...props} {...{ theme }} />
  </StyleSheetManager>
)

export default Theme
