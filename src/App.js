import React from 'react';
import { Navigation } from './components';
import { Route, Routes } from 'react-router-dom';
import { Home, Settings, Recommends } from './pages';
import { Container } from '@mui/material';

const App = () => {
  return (
    <>
      <Navigation />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="recommendations" element={<Recommends />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
