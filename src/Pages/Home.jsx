import React from 'react'
import Header from '../Components/Header'
import ImageSlider from '../Components/ImageSlider'
import AddButton from '../Components/AddButton'
import CategorySlider from '../Components/CategorySlider'
import Choices from '../Components/Choices'

const Home = () => {
  return (
  <>
  <Header />
  <ImageSlider />
  <AddButton />

  <CategorySlider />
  <Choices />
  </>
 
  )
}

export default Home