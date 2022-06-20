
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const slideImages = [
  {
    src: './images/recipe1.jpeg',
    caption: 'Slide 1'
  },
  {
    src: './images/recipe2.jpeg',
    caption: 'Slide 2'
  },
  {
    src: './images/recipe3.jpeg',
    caption: 'Slide 3'
  },
];

const SlideShow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <div style={{'backgroundImage': `src(${slideImage.src})`}}>
                <span>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default SlideShow