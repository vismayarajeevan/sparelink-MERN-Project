import React from 'react'
import OverallView from '../ReusableComponents/OverallView'
import { useLocation, useParams } from 'react-router-dom';


const CategoryView = () => {
     const { categoryName } = useParams(); // Access category name from URL

     const part = [
        {
          _id: "1",
          partName: "Car Part",
          image: "https://w0.peakpx.com/wallpaper/444/200/HD-wallpaper-engine-parts-car-parts-engine-connecting-rods-clutch-disc-car-parts-concepts-engine-repair.jpg",
          description: "High-performance processor for gaming and work.",
          price:"2000"
        },
        {
          _id: "2",
          partName: "Alternator Engine",
          image: "https://p.kindpng.com/picc/s/374-3748298_alternator-engine-car-vehicle-parts-part-spare-clipart.png",
          description: "Powerful GPU for smooth and realistic graphics.",
          price:"3000"
        },
        {
          _id: "3",
          partName: "RAM",
          image: "https://i.pinimg.com/550x/a4/70/c5/a470c5e6012cd03aaacc74ce1801668f.jpg",
          description: "Fast and efficient memory for multitasking.",
          price:"2000"
        },
        {
          _id: "4",
          partName: "SSD",
          image: "https://images.jdmagicbox.com/quickquotes/images_main/tata-automobile-part-2229176603-qgg4ei78.jpg",
          description: "Reliable and fast storage for all your needs.",
          price:"2000"
        },
      ];
    // Get items for the selected category
// const categoryItems = categories[categoryName.toLowerCase()] || [];

const location = useLocation();
const { parts } = location.state || { parts: [] }; // Retrieve parts from state
  return (
    <OverallView  items={part} title={`Category: ${categoryName}`} />

  )
}

export default CategoryView