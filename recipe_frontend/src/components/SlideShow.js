
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import recipe1 from './images/recipe1.jpeg'
import recipe2 from './images/recipe2.jpeg'
import recipe3 from './images/recipe3.jpeg'


const slideImages = [
  {
    url: {recipe1},
    caption: 'Slide 1'
  },
  {
    url: {recipe2},
    caption: 'Slide 2'
  },
  {
    url: {recipe3},
    caption: 'Slide 3'
  },
];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Slide>
       {slideImages.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))} 
      </Slide>
    </div>
  )
}
export default SlideShow