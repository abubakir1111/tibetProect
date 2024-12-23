import React from 'react'
import './Gourp11.scss'
import Gourp11Api from './Gourp11Api'
function Gourp11() {
    return (
        <div className='gourp11-container'>
            {Gourp11Api.map((gourpApi) =>
                <div className="gourp11-container-box">
                    <div className="gourp-container-box-title">
                        {gourpApi.gourpTitle.map((gourpApiTitle) =>
                            <p key={gourpApiTitle.id}>{gourpApiTitle.text}</p>
                        )}
                    </div>
                    <div className="gourp-container-card">
                        <div className="gourp-container-box-card">
                            {gourpApi.gourpcard.map((card) =>
                                <div className="card">
                                    <div className="card-img">
                                        <img src={card.img} alt="" />
                                    </div>
                                    <div className="card-text">
                                        <div className="card-text-title">
                                            {card.cardTitle.map((cardTitle) =>
                                                <p key={cardTitle.id}>{cardTitle.title}</p>
                                            )}
                                        </div>
                                        <div className="card-theDate">
                                            {card.theDate.map((theDate) =>
                                                <p key={theDate.id}>{theDate.thedate}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="gourp-button">
                        {gourpApi.gourpCardButtonText.map((gourpButtonText) =>
                            <button key={gourpButtonText.id}>{gourpButtonText.text}</button>
                        )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Gourp11