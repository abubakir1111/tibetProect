import React from 'react'
import frame11 from './Frame11Api'
import './Frame11.scss'
function Frame11() {
    return (
        <div className='frame11-container'>
            {frame11.map((frame11) =>
                <div className="frame11-container-box">
                    <div className="frame11-container-title">
                        {frame11.frame11Title.map((frameTitle) =>
                            <p key={frameTitle.id}>{frameTitle.text}</p>
                        )}
                    </div>
                    <div className="frame11-container-img">
                        <div className="frame11-img-container">
                            {frame11.frame11Img.map((frame11Img) =>
                                <div className="img" style={{ backgroundImage: `url(${frame11Img.img})` }}>
                                    <div className="frame11-img-container-papular">
                                        <div className="frame11-img-container-papular-div">
                                            <img src={frame11Img.icon} alt="" />
                                            <p>{frame11Img.papular}</p>
                                        </div>
                                    </div>
                                    <div className="frame11-container-fon">
                                        <div className="frame11-container-fon-box">
                                            <div className="frame11-contaier-text-fon">
                                                <p>{frame11Img.mountain}</p>
                                                <p>{frame11Img.mountainP}</p>
                                            </div>
                                            <div className="frame11-container-button-fon">
                                                <button>{frame11Img.buttonPrice}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                                <div className="frame11-container-button">
                            {frame11.frame11ButtonText.map((frameButon) =>
                                    <button key={frameButon.id}>{frameButon.text}</button>
                                )}
                                </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Frame11