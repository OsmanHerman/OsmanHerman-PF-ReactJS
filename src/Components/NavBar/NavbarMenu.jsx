import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <Stack spacing={0} direction="row" style={{color: "white"}}>
      <Link style={{
        textDecoration: "none", 
        color: "white"
        }} to="/" >
        <Button variant="Text" style={{fontSize: "0.85em", fontWeight: "600", textDecoration: "none"}}>Todas</Button>
      </Link>
      <Link style={{
        textDecoration: "none", 
        color: "white"
        }} to="/category/abrigos" >
        <Button variant="Text" style={{fontSize: "0.85em", fontWeight: "600"}}>Abrigos</Button>
      </Link>
      <Link style={{
        textDecoration: "none", 
        color: "white"
        }} to="/category/camisetas" >
        <Button variant="Text" style={{fontSize: "0.85em", fontWeight: "600"}}>Camisetas</Button>
      </Link>
      <Link style={{
        textDecoration: "none", 
        color: "white"
        }} to="/category/pantalones" >
        <Button variant="Text" style={{fontSize: "0.85em", fontWeight: "600"}}>Pantalones</Button>
      </Link>
    </Stack>
    
  );
};

export default NavbarMenu;