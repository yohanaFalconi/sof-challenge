import React from 'react'
import '../Styles/AScreen.css'
import { useNavigate } from 'react-router-dom';


export default function AScreen() {
    const navigate = useNavigate();

    return (
        <main className="main-box">
            <div>
                <h1 className='letter'>A</h1>
            </div>
            <div>
                <input type="button" onClick={() => navigate("/b-screen")} value="Continuar" className="button" />
            </div>
        </main>
    )
}
