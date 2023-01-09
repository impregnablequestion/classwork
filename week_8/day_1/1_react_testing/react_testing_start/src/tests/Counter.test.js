import Counter from '../components/Counter';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react'


describe("Counter", () => {

  let container;

  beforeEach(() => {
    container = render(<Counter/>)
  });

  it('should start the counter at zero', () => {
    
  });

  xit("should increment counter on click", () => {
    
  });

  xit("should decrement counter on click", () => {
   
  });

})