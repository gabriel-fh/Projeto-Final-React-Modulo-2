import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0) 0px 8px 24px;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  justify-content: space-between;
  position: sticky;
  padding: 0 32px;
  height: 80px;
  top: 0px;
  z-index: 999999999;
  background: linear-gradient( to bottom, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 100% );

`;

export const Logo = styled.img`
  height: 24px;
  z-index: 1;
  position: relative;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 99999;

`;

export const MenuItem = styled.div<{ $active?: boolean }>`
  font-size: 16px;
  font-weight: 600;
  margin: 0px 20px;
  color: #d9d9d9;
  cursor: pointer;
  border-bottom: 2px solid transparent;

  &:hover {
    color: #fff;
  }

  ${({ $active }) =>
    $active &&
    `
    color: #fff;
    border-bottom: 2px solid #fff;
  `}
`;

export const StyledLink = styled(Link) `
    text-decoration: none;
    color: #fff;
    z-index: 99999;
`