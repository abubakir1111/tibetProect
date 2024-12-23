import React from 'react'
import ContactApi from './ContactApi'
import './Contact.scss'

function Contact() {
  return (
    <div className='contact-container'>
      {ContactApi.map((contact) =>
        <div className="contact-contaier-box">
          <div className="card">
            <div className="card-title">
              {contact.ContactTitle.map((contactTitle) =>
                <p key={contactTitle.id}>{contactTitle.title}</p>
              )}
            </div>
            <div className="card-content">
              <div className="card-content-title">
                {contact.ContactInput.map((inputTitle) =>
                <p key={inputTitle.id}>{inputTitle.text}</p>
                )}
              </div>
              <div className="card-content-input">
                {contact.ContactInput.map((input) =>
                <input type="text" placeholder={input.inputText} key={input.id}/>
                )}
                {contact.ContactInput.map((button) =>
                <button key={button.id}>{button.buttonText}</button>
                )}
              </div>
              <div className="card-content-text">
                {contact.ContactInput.map((textP) =>
                <p key={textP.id}>{textP.textP}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contact