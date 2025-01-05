// src/components/Modals/RegisterPopup.jsx

import { Gamepad } from 'lucide-react';
import React, { useEffect } from 'react';
import { CloseIcon, LoginIcon, PasswordIconPP, PhoneIconPP, RegisterIcon, UserIconPP } from '../../utils/icons';

export default function Popup({ onClose }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return (
        <div className="fixed inset-0 z-50 flex items-center flex-col justify-center">
            <div 
                className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                onClick={onClose} 
            ></div>

            {/* Conteúdo do popup */}
            <div className="relative w-[400px] z-10 rounded-2xl bg-background-500 m-2 p-4 shadow-lg sm:p-6 lg:p-8">
                <div className="flex justify-center items-center gap-20">
                    <button className='flex items-center gap-2'>
                        <RegisterIcon />
                        <a className='text-sm'>
                            Registro
                        </a>
                    </button>

                    <button className='flex items-center gap-2'>
                        <LoginIcon />
                        <a className='text-sm'>
                            Acesso
                        </a>
                    </button>
                </div>
                {/* Divider line */}
                <div className="my-2 border-t border-background-400"></div>

                <div>
                    <form>
                        <p className="text-sm">Suporta apenas registro de conta</p>
                        <div className="mt-2 relative">
                            {/* Contêiner do ícone */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <UserIconPP className="w-5 h-5 text-gray-500" />
                            </div>
                            {/* Input com espaçamento para o ícone */}
                            <input
                                type="username"
                                id="username"
                                placeholder="Nome de usuário*"
                                className="mt-1 block w-full pl-9 pr-2 text-sm rounded-md h-10 bg-background-600 border border-background-400 focus:ring-defaultskin-500 focus:border-none"
                            />
                        </div>
                        <div className="mt-2 relative">
                            {/* Contêiner do ícone */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <PasswordIconPP className="w-5 h-5 text-gray-500" />
                            </div>
                            {/* Input com espaçamento para o ícone */}
                            <input
                                type="password"
                                id="password"
                                placeholder="Senha de segurança*"
                                className="mt-1 block w-full pl-9 pr-2 text-sm rounded-md h-10 bg-background-600 border border-background-400 focus:ring-defaultskin-500 focus:border-none"
                            />
                        </div>
                        {/* Mostrador de senha segura por niveis com quatro niveis*/}
                        <div className="flex items-baseline mt-2">
                            <p className="text-sm mr-2">Força da senha:</p>
                            <div className="flex items-center">
                                <div className="w-11 h-2 rounded-full bg-background-400 mr-1"></div>
                                <div className="w-11 h-2 rounded-full bg-background-400 mr-1"></div>
                                <div className="w-11 h-2 rounded-full bg-background-400 mr-1"></div>
                                <div className="w-11 h-2 rounded-full bg-background-400 mr-1"></div>
                            </div>
                        </div>
                        <div className="mt-2 relative">
                            {/* Contêiner do ícone */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <PasswordIconPP className="w-5 h-5 text-gray-500" />
                            </div>
                            {/* Input com espaçamento para o ícone */}
                            <input
                                type="password"
                                id="password"
                                placeholder="Confirme a senha de segurança*"
                                className="mt-1 block w-full pl-9 pr-2 text-sm rounded-md h-10 bg-background-600 border border-background-400 focus:ring-defaultskin-500 focus:border-none"
                            />
                        </div>
                        <div className="mt-2 relative">
                            {/* Contêiner do ícone */}
                            <div className="absolute inset-y-0 left-0 flex items-center pl-2">
                                <PhoneIconPP className="w-5 h-5 text-gray-500" />
                            </div>
                            {/* Input com espaçamento para o ícone */}
                            <input
                                type="phone"
                                id="phone"
                                placeholder="Número de telefone*"
                                className="mt-1 block w-full pl-9 pr-2 text-sm rounded-md h-10 bg-background-600 border border-background-400 focus:ring-defaultskin-500 focus:border-none"
                            />
                        </div>
                    </form>
                </div>
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
