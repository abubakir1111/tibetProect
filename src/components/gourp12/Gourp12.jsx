import React from 'react'
import './Gourp12.scss'
import Gourp12Api from './Gourp12Api'
function Gourp12() {
    return (
        <div className='gourp12-container'>
            {Gourp12Api.map((gourp12) =>
                <div className="gourp12-container-box">
                    <div className="gourp12-container-title">
                        {gourp12.GourpTitle12.map((gourp12Title) =>
                        <p key={gourp12Title.id}>{gourp12Title.title}</p>
                        )}
                    </div>
                    <div className="gourp12-container-img">
                        <div className="gorp12-contianer-img-box">
                            {gourp12.GourpImg.map((GourpImg) =>
                            <img src={GourpImg.img} alt="" key={GourpImg.id}/>
                            )}
                        </div>
                        <div className="gourp-container-button">
                            {gourp12.GourpButtonText.map((gourp12Button) =>
                            <button>{gourp12Button.buttonText}</button>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gourp12