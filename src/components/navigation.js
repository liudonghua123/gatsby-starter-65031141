import React from "react"
import Link from "gatsby-link"
import GithubIcon from "react-icons/lib/go/mark-github"
import TwitterIcon from "react-icons/lib/fa/twitter"

import DiscordIcon from "../components/discord"
import logo from "../gatsby-negative.svg"
import typography, { rhythm, scale } from "../utils/typography"
import presets from "../utils/presets"
import { vP, vPHd, vPVHd, vPVVHd } from "./gutters"

const navItemStyles = {
  ...scale(-1 / 3),
  boxSizing: `border-box`,
  display: `inline-block`,
  color: `inherit`,
  textDecoration: `none`,
  textTransform: `uppercase`,
  letterSpacing: `0.03em`,
  lineHeight: `calc(${presets.headerHeight} - 4px)`,
  padding: `4px ${rhythm(0.5)} 0`,
  position: `relative`,
  top: 0,
  transition: `color .15s ease-out`,
  "&:hover": {
    opacity: 0.8,
  },
}
const NavItem = ({ linkTo, children }) => (
  <li
    css={{
      display: `inline-block`,
      margin: 0,
    }}
  >
    <Link to={linkTo} css={navItemStyles}>
      {children}
    </Link>
  </li>
)

export default ({ pathname }) => {
  let styles = {}
  styles.backgroundColor = `#fff`
  styles[presets.Tablet] = {
    borderBottomColor: `transparent`,
    position: `absolute` ,
    backgroundColor: presets.sidebar,
  }
  const socialIconsStyles = {
    color: presets.brandLight,
    [presets.Phablet]: {
      color: false,
    },
  }
  const gutters = {}

  return (
    <div
      role="navigation"
      css={{
        borderBottom: `1px solid ${presets.veryLightPurple}`,
        backgroundColor: `rgba(255,255,255,0.975)`,
        position: false,
        height: presets.headerHeight,
        zIndex: `1`,
        left: 0,
        right: 0,
        [presets.Tablet]: {
          position: `absolute` ,
        },
        ...styles,
      }}
    >
      <div
        css={{
          //maxWidth: rhythm(presets.maxWidth),
          margin: `0 auto`,
          paddingLeft: rhythm(3 / 4),
          paddingRight: rhythm(3 / 4),
          ...gutters,
          fontFamily: typography.options.headerFontFamily.join(`,`),
          display: `flex`,
          alignItems: `center`,
          width: `100%`,
          height: `100%`,
        }}
      >
        <ul
          css={{
            display: `none`,
            [presets.Tablet]: {
              display: `block`,
              margin: 0,
              padding: 0,
              listStyle: `none`,
            },
          }}
        >
          <NavItem linkTo="/">首页</NavItem>
          <NavItem linkTo="/tags">标签</NavItem>
        </ul>
        <div
          css={{
            marginLeft: `auto`,
            [presets.Phablet]: {
              marginLeft: `auto`,
            },
          }}
        >
        </div>
      </div>
    </div>
  )
}
