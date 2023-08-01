import { Box, Button, Container, Typography } from '@mui/material';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import * as S from 'components/Layout/Layout.styled';

export default function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Container maxWidth="xl">
      <div>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '100px 0',
          }}
        >
          <Typography
            variant="h1"
            align="center"
            fontWeight={700}
            fontSize={64}
            width={'60%'}
          >
            {isLoggedIn
              ? 'Hello, you can create a new contact here'
              : 'Hello, you can create a contact book here'}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {isLoggedIn ? (
            <ContactForm btnText={'Add contact'} />
          ) : (
            <S.Link to="/signup">
              <Button variant="contained" size="large">
                Create
              </Button>
            </S.Link>
          )}
        </Box>
      </div>
    </Container>
  );
}
