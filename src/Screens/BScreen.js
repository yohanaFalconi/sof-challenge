import React from 'react';
import { useState, useEffect } from "react";
import '../Styles/BScreen.css'
import { useNavigate } from 'react-router-dom';

export default function BScreen() {
    const navigate = useNavigate();
    const [number, setNumber] = useState({ firstNumber: 0, secondNumber: 0 });
    const [addition, setAddition] = useState();


    useEffect(() => {
        const { firstNumber, secondNumber } = number;
        setAddition(Number(firstNumber) + Number(secondNumber));
    }, [number]);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setNumber({ ...number, [name]: value });
    };

    return (
        <div className="container-b">
            <h1 className='letter'>B</h1>
            <div className="containSum">
                <input type="number" onChange={handleInput} name="firstNumber" value={number.firstNumber} placeholder="Número 1" />
                <h1>+</h1>{" "}
                <input type="number" onChange={handleInput} name="secondNumber" value={number.secondNumber} placeholder="Número 2" />
            </div>
            <div>
                <h2>Resultado total</h2>
                <input type="number" className="inputSum" value={addition} />
            </div>
            <div>
                <input type="button" onClick={() => navigate("/c-screen")} value="Continuar" className="button" />
            </div>
            <div>
                <input type="button" onClick={() => navigate("/a-screen")} value="Volver" className="button" />
            </div>
        </div>
    );
}
