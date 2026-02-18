import { useState } from 'react'
import './App.css'
import {Box, Container, IconButton, Stack, TextField, Typography} from "@mui/material";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import type {MessagePayload} from "./types/types";
import {decodeMessage, encodeMessage} from "./AxiosApi/AxiosApi.ts";

const App = () => {
    const [decodedMessage, setDecodedMessage] = useState('');
    const [encodedMessage, setEncodedMessage] = useState('');
    const [password, setPassword] = useState('');

    const encodeProcess = async () => {
        if (!password || !decodedMessage) return;
        const payload: MessagePayload = { password, message: decodedMessage };
        try {
            const res = await encodeMessage(payload);
            setEncodedMessage(res.data.encoded);
            setDecodedMessage('');
        } catch (err) {
            console.error(err);
        }
    };

    const decodeProcess = async () => {
        if (!password || !encodedMessage) return;
        const payload: MessagePayload = { password, message: encodedMessage };
        try {
            const res = await decodeMessage(payload);
            setDecodedMessage(res.data.decoded);
            setEncodedMessage('');
        } catch (error) {
            console.error(error);
        }
    };

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
                  <IconButton color="primary" aria-label="decode" size="large" onClick={decodeProcess}>
                      <ArrowUpwardIcon fontSize="inherit" />
                  </IconButton>

                  <IconButton color="primary" aria-label="encode" size="large" onClick={encodeProcess}>
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
