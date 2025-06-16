import styled from "styled-components";

export const NavbarContainer = styled.nav`
  /* padding: 2.25rem 10rem; */
`;

export const NavbarContent = styled.div`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const BrandFirst = styled.span`
  font-size: 1.5rem;
  font-family: Roboto;
  color: ${props => props.theme['paragraph']};
`;

export const BrandSecond = styled.span`
  font-size: 1.5rem;
  font-family: Roboto;
  font-weight: bold;
  color: ${props => props.theme['brand-primary']};
`;

export const Lista = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 2.6rem;
`;

export const ListItem = styled.li`
  a{
  font-family: Roboto;
  font-size: 1rem;

  color: ${props => props.theme['brand-primary']};
  
  text-decoration: none;

  line-height: 2.8rem;

  &:hover{
    font-weight:500;
    /* border-bottom: 2px solid ${props => props.theme['brand-primary']}; */
  }
  }
`;

export const Button = styled.button`
  height: 38px;
  width: 190px;
  padding: 0.8 2rem;

  border: 1px solid ${props => props.theme['brand-primary']};
  border-radius: 4rem;

  color: var(--primary-color);
  background: none;

  font-weight: 700;
  font-size: 0.8rem;

  cursor: pointer;

  transition: 0.2s;

  &:hover{
    background-color: ${props => props.theme['brand-primary']};
    color: ${props => props.theme['white']}
  }
`;