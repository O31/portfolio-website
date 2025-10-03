// src/components/Popup/Popup.tsx
import React from "react"
import "./PopUp.css"

interface popUpProps {
  setPopUp: React.Dispatch<React.SetStateAction<boolean>>
}

function Popup({ setPopUp }: popUpProps) {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h3>Thank you for your interest!</h3>
        <button className="popup-close" onClick={() => setPopUp(false)}>
          Close
        </button>
      </div>
    </div>
  )
}

export default Popup
