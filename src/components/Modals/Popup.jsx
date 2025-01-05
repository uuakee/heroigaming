// src/components/Modals/Popup.jsx

import { Gamepad } from 'lucide-react';
import React, { useEffect } from 'react';
import { CloseIcon } from '../utils/icons';

import '../../App.css';

export default function Popup({ onClose }) {
    useEffect(() => {
        // Impede o scroll ao abrir o modal
        document.body.classList.add('overflow-hidden');

        return () => {
            // Habilita o scroll ao fechar o modal
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center flex-col justify-center">
            {/* Fundo com blur e opacidade */}
            <div 
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={onClose} // Fecha o modal ao clicar no fundo
            ></div>

            {/* Conteúdo do popup */}
            <div className="relative z-10 w-[400px] rounded-2xl bg-background-500 m-2 p-4 shadow-lg">
                <div className="flex items-center gap-4">
                    <span className="shrink-0 rounded-full bg-defaultskin-500 p-2 text-white">
                        <Gamepad />
                    </span>

                    <p className="font-medium sm:text-lg">Nova mensagem!</p>
                </div>

                <p className="mt-4 text-gray-500">
                🎁 Prêmio Super Day Member - Hero iGaming 🎁 <br/>
                ⏰ Será distribuído às 21h do dia 07/01/2025!<br/>
                💰 Não perca a chance de ganhar até 88.888 R$!<br/><br/>

                📢 Compartilhe esta oportunidade com seus amigos para que todos possam aproveitar benefícios incríveis! 

                </p>

                <div className="mt-6 sm:flex sm:gap-4">
                    <a
                        className="inline-block w-full rounded-lg bg-defaultskin-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
                        href="#"
                    >
                        Depósitar
                    </a>
                </div>
            </div>
            <div className='z-50'>
                <button onClick={onClose}>
                    <CloseIcon />
                </button>
            </div>
        </div>
    );
}
