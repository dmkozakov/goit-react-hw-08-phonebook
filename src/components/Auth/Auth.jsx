import { Box, Button } from '@mui/material';
import * as S from 'components/Layout/Layout.styled';

export function Auth() {
  return (
    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
      <Button sx={{ my: 2, color: 'white', display: 'block' }}>
        <S.Link to="/signup">Sign up</S.Link>
      </Button>

      <Button sx={{ my: 2, color: 'white', display: 'block' }}>
        <S.Link to="/login">Login</S.Link>
      </Button>
    </Box>
  );
}
