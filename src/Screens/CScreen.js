import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/CScreen.css'
export default function CScreen() {
    const navigate = useNavigate();

    return (
        <div className="containter-c">
            <h2>Total:</h2>

            <div>
                <input type="button" onClick={() => navigate("/d-screen")} value="Continuar" className="button" />
            </div>
            <div>
                <input type="button" onClick={() => navigate("/c-screen")} value="Volver" className="button" />
            </div>
        </div>
    )
}
