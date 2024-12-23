import React from 'react'
import './Rectagle7.scss'
import Rectangle from './Rectangle7Api'
function Rectangle7() {
  return (
    <div className='rectangle7-container'>
      {Rectangle.map((rectangle) =>
        <div className="rectangle7-container-box">
          <div className="rectangle7-container-left">
            {rectangle.rightText.map((rightText) =>
              <div className="rectangle7-container-left-title">
                <div className="title">
                  {rightText.title.map((title) =>
                    <p key={title.id}>{title.text}</p>
                  )}
                </div>
                <div className="top-text">
                  {rightText.TopText.map((topText) =>
                    <p key={topText.id}>{topText.text}</p>
                  )}
                </div>
              </div>
            )}
            <div className="rectangle-text-map">
              <div className="rectangle-text-map-box">
                {rectangle.rectangleText.map((rectangleTextMap) =>
                  <div className="text-map" key={rectangleTextMap.id}>
                    <div className="text-map-img">
                      <img src={rectangleTextMap.img} alt="" key={rectangleTextMap.id} />
                    </div>
                    <div className="text-map-p">
                      <p>{rectangleTextMap.title}</p>
                      <p>{rectangleTextMap.textLorem}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="rectangle-button-text">
              {rectangle.buttonText.map((buttonText) =>
                <button key={buttonText.id}>{buttonText.text}</button>
              )}
            </div>
          </div>
          <div className="rectangle-container-right">
            <div className="rectangle-container-right-box">
              {rectangle.leftImg.map((leftImg) =>
                <img src={leftImg.img} alt="" key={leftImg.id} />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Rectangle7