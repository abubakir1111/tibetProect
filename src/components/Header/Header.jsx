import React from 'react'
import './Header.scss'
import HeaderJs from './HeaderApi'


function Header() {
    return (
        <div className='header-container'>
            {HeaderJs.map((headerApi) =>
                <div className="header-container-box">
                    <div className="navbar">
                        {headerApi.navbar.map((navbar) =>
                            <div className="navbar-box">
                                <div className="navbar-img-logo">
                                    {navbar.HeaderImg.map((navbarImg) =>
                                        <img src={navbarImg.img} alt="" />
                                    )}
                                </div>
                                <div className="navbar-text-text">
                                    {navbar.navbarText.map((navbarText) =>
                                        <p>{navbarText.text}</p>
                                    )}
                                </div>
                                <div className="navbar-button">
                                    {navbar.navbarButtonText.map((buttonText) =>
                                        <button>{buttonText.buttonText}</button>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="header-input-container">
                        {headerApi.headerInput.map((headerInput) =>
                            <div className="header-input-container-box">
                                <div className="header-input-container-map">
                                    <div className='input-container-flex'>
                                        {headerInput.input.map((input) =>
                                            <div className='input-div-flex-p'>
                                                <input type="text" placeholder={input.textInput} key={input.id} />
                                                <p key={input.id}>{input.inputTextP}</p>
                                    <div className='header-input-div-icon'>
                                            <img src={input.img} alt="" key={input.id} />
                                    </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="header-button-container">
                                    <button></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Header