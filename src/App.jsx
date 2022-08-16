import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider } from "@apollo/client";

import { Outline } from '@/components/Outline'
import Viewport from '@/Viewport';
import { theme } from '@/theme';
import { client } from '@/client'
import { View } from '@/View';

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client} >
        <CssBaseline />
        <Router>
          <Viewport>
            <Suspense fallback={<Outline visible={true} />}>
              <Routes>
                <Route exact path="/:view" element={<View />} />
                <Route default path="/" element={<View />} />
              </Routes>
            </Suspense>
          </Viewport>
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default App