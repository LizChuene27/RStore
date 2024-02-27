import React from 'react';
import { Route } from 'react-router-dom';
import InterestCalculator from './InterestCalculator';

function InterestCalculatorPage() {
  return (
    <Route path="/interest-calculator" element={<InterestCalculator />} />
  );
}

export default InterestCalculatorPage;
