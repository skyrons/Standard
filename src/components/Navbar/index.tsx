import { BrandFirst, BrandSecond, Button, Lista, ListItem, NavbarContainer, NavbarContent } from "./styles";

export function Navbar(){
  return(
    <NavbarContainer>
      <NavbarContent>
        <div>
          <BrandFirst>Doctor</BrandFirst>
          <BrandSecond>Care</BrandSecond>
        </div>

        <Lista>
          <ListItem>
            <a href="">Início</a>
          </ListItem>
          <ListItem>
            <a href="">Sobre</a>
          </ListItem>
          <ListItem>
            <a href="">Serviços</a>
          </ListItem>
        </Lista>

        <Button>AGENDE SUA CONSULTA</Button>
      </NavbarContent>
      
    </NavbarContainer>
    
  )
}