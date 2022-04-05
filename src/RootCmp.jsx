import React from 'react';
import { Homepage } from './pages/Homepage';

export function RootCmp() {
  return (
    <main className='main-app-layout flex'>
      <Homepage />
    </main>
  );
}
