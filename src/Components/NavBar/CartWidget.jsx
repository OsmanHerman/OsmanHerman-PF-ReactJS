import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import { fontSize } from '@mui/system';
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link style={{textDecoration: "none", color: "black"}} to="/Cart">
        <Button style={{fontSize: "1.1em"}} variant="Text" startIcon={<ShoppingCartIcon style={{fontSize:"25px"}}/>}>0</Button>
      </Link>
    </div>
  );
};

export default CartWidget;