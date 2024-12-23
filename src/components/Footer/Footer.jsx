import React, { Fragment } from 'react'
import './Footer.scss'
import footer from './FooterJs'

function Footer() {
    return (
        <div className='footer-container'>
            {footer.map((footer) =>
                <div className="footer-container-box">
                    {footer.footerContactText.map((footerText) =>
                    <Fragment> 
                        <div className="footer-text-container">
                            <div className="footer-contact-container-phone">
                                <div className="phone-container">
                                    {footerText.contactText.map((contactText) =>
                                        <p key={contactText.id}>{contactText.text}</p>
                                    )}
                                </div>
                                <div className="info-container">
                                    <div className='info-text'>
                                        {footerText.contactPhoneText.map((phone) =>
                                            <p key={phone.id}>{phone.text}</p>
                                        )}
                                    </div>
                                    <div className="info-container-icon">
                                        {footerText.footer_icon.map((icon) =>
                                            <img src={icon.icon} alt="" key={icon.id} />
                                        )}
                                    </div>
                                </div>

                            </div>
                            <div className='footer-contact-container-nashi-uslugi-div'>

                                {footer.nashiUslugi.map((nashiUslugi) =>
                                    <div className="footer-contact-container-nashi-uslugi" key={nashiUslugi.id}>
                                        <div className="footer-contact-container-nashi-title">
                                            {nashiUslugi.nashiUslugiTitle.map((nashiTitle) =>
                                                <p key={nashiTitle.id}>{nashiTitle.text}</p>
                                            )}
                                        </div>
                                        <div className="footer-contact-contaienr-text-map">
                                            {nashiUslugi.nashiUslugiText.map((nashiText) =>
                                                <div className='footer-contact-img' key={nashiText.id}>
                                                    <div className='footer-contact-icon'></div>
                                                    <p>{nashiText.textP}</p>
                                                </div>
                                            )}
                                        </div>

                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="rectangle-div">
                            <div className="rectangle-div-box">
                                <div className="rectangle-text">    
                            {footer.rectangle.map((rectangle) =>
                                <p key={rectangle.id}>{rectangle.text}</p>
                            )}
                            </div>
                            </div>
                        </div>
                        </Fragment>


                    )}
                </div>
            )}
        </div>
    )
}

export default Footer