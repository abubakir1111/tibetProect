import React from 'react'
import './Frame3.scss'
import FrameApi from './FrameApi'
function Frame3() {
  return (
    <div className='frame3-container'>
      {FrameApi.map((frame) =>
        <div className="frame3-container-box">
          <div className="frame3-container-img">
            {frame.frameImg.map((frameImg) =>
              <img src={frameImg.img} alt="" key={frameImg.id} />
            )}
          </div>
          <div className="frame3-contaiener-text">
            <div className="title">
              {frame.FrameText.map((title) =>
                <p>{title.text}</p>
              )}
            </div>
            <div className="button">
              {frame.frameButton.map((text_p) =>
                <p>{text_p.text}</p>
              )}
              {frame.frameButton.map((button_text) =>
                <button>{button_text.ButtonText}</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Frame3