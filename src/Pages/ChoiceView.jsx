import React from 'react'
import { useLocation } from 'react-router-dom';
import OverallView from '../ReusableComponents/OverallView';


const ChoiceView = () => {
    const location = useLocation();
  const { parts } = location.state || { parts: [] }; // Retrieve parts from state
  return (
    <OverallView items={parts} title="Your Choices" />
  )
}

export default ChoiceView