// FadeTransition.js
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './App.css'; // Add corresponding CSS styles

const FadeTransition = ({ children, ...props }) => (
  <CSSTransition {...props} timeout={500} classNames="fade">
    {children}
  </CSSTransition>
);

export default FadeTransition;