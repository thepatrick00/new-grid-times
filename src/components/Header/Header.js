import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <WrapperLeft>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
        </WrapperLeft>
        <Logo />
        <WrapperRight>
          <Button>Subscribe</Button>
          <a href='/'>Already a subscriber?</a>
        </WrapperRight>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  svg {
    display: block;
  }
`;

const WrapperLeft = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const WrapperRight = styled.div`
  display: none;
  
  
  a {
    color: var(--color-gray-900);
    text-decoration: underline;
    position: absolute;
    width: 100%;
    text-align: center;
    font-size: calc(14/16 * 1rem);
    margin-top: 8px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: revert;
    justify-self: end;
    align-self: center;
    position: relative;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    justify-content: revert;
    align-items: revert;
    display: grid;
    justify-content: center;
    grid-template-columns: 1fr auto 1fr;
    grid-template-rows: 130px;
  }
`;

export default Header;
