import React from 'react'
import '../Styles/Home.css'
import { useNavigate } from 'react-router-dom';

export default function Home() {
    const navigate = useNavigate();
    return (
        <div className="home-main-box">
            <div className="button-box" >
                <input type="button" onClick={() => navigate("/a-screen")} value="Continuar" className="button" />
            </div>
        </div>
    )
}
