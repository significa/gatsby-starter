import React from 'react'

import { Wrapper, Content, Link } from './Header.css'

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Content>
      <Link to="/">{siteTitle}</Link>
    </Content>
  </Wrapper>
)

Header.defaultProps = {
  siteTitle: '',
}

export default Header
