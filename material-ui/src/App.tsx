import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ToDoList from './ToDoList';
import Counter from './Counter';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Technical test
        </Typography>
        <ToDoList />
        <Counter />
      </Box>
    </Container>
  );
}
