import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box, Container } from '@mui/system';

function detail() {
  return (
    <Container>
      <Box>
        <Stack spacing={2} direction="row">
          <Button variant="contained">Contained</Button>
        </Stack>
      </Box>
    </Container>
  );
}

export default detail