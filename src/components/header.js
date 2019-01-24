import { Link as LinkBase } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`;

const Content = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

const Title = styled.h1`
  margin: 0;
`;

const Link = styled(LinkBase)`
  color: white;
  text-decoration: none;
`;

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Content>
      <Title>
        <Link to="/">
          {siteTitle}
        </Link>
      </Title>
    </Content>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
