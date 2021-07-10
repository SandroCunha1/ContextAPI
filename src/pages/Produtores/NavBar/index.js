import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useContext } from 'react';
import { CarrinhoContext } from 'common/contexts/Carrinho';

export default function NavBar() {
  const { carrinho } = useContext(CarrinhoContext);
  return (
    <Nav>
      <Logo />
      <IconButton>
        <Badge
          badgeContent={carrinho.length}
          color="primary"
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}