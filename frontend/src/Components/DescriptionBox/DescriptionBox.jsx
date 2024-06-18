import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>

        <div className="descriptionbox-description">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima beatae 
                impedit dignissimos, maxime est nulla mollitia 
                aperiam tempora recusandae perferendis porro, 
                omnis nam totam possimus ab consectetur corporis, 
                delectus aliquam.
            </p>

            <p>
                Lorem ipsum dolor sit, amet consectetur 
                adipisicing elit. Inventore iure, asperiores 
                maxime temporibus non cum laboriosam ipsam qui 
            </p>
        </div>



    </div>
  )
}

export default DescriptionBox
