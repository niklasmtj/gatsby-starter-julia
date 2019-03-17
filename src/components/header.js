import { Link } from "gatsby"
import {css} from '@emotion/core'
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    css={css`
      background: transparent;
      display:flex;
      align-content: center;
      justify-content: center;`
    }
  >
    <div
      css={css`
        max-width: 860px;
        padding: 1rem 1.0875rem;
        font-size: 1.2rem;`
      }
    >
      <p>
        <Link
          to="/"
          css={css`
            color: black;
            text-decoration: none;`
          }
        >
          {siteTitle}
        </Link>
        <Link
          to="/blog"
          css={css`
            color: black;
            text-decoration: none;
            margin-left: 15px;`
          }
        >
          Blog
        </Link>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
