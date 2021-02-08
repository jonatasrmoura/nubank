import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Home from './src/pages/Main';

export default function App() {
  return (
    <>
      <Home />
      <StatusBar style="light" backgroundColor="#8B10AE" />
    </>
  );
}
