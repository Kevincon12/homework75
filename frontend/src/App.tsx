import { useState } from 'react'
import './App.css'
import {Box, Container, IconButton, Stack, TextField, Typography} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const App = () => {
    const [decodedMessage, setDecodedMessage] = useState('');
    const [encodedMessage, setEncodedMessage] = useState('');
    const [password, setPassword] = useState('');

  return (
      <Container maxWidth="sm" sx={{ mt: 5 }}>
          <Typography variant="h4" align="center" gutterBottom>
              Homework 75 Frontend
          </Typography>

          <Stack spacing={3}>
              <TextField
                  label="Decoded Message"
                  multiline
                  minRows={3}
                  value={decodedMessage}
                  onChange={(e) => setDecodedMessage(e.target.value)}
                  fullWidth
              />

              <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
              />

              <Box display="flex" justifyContent="center" gap={2}>
                  <IconButton color="primary" aria-label="decode" size="large">
                      <ArrowUpwardIcon fontSize="inherit" />
                  </IconButton>

                  <IconButton color="primary" aria-label="encode" size="large">
                      <ArrowDownwardIcon fontSize="inherit" />
                  </IconButton>
              </Box>

              <TextField
                  label="Encoded Message"
                  multiline
                  minRows={3}
                  value={encodedMessage}
                  onChange={(e) => setEncodedMessage(e.target.value)}
                  fullWidth
              />
          </Stack>
      </Container>
  )
};

export default App
