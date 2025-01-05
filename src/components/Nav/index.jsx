// src/components/Nav/index.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import '../../App.css';
import { DepositIcon, GiftIcon, HomeIcon, ProfileIcon, SupportIcon } from '../utils/icons';

const Nav = () => {
    return (
        <nav className='fixed bottom-0 z-40  w-full md:w-[430px] p-2 bg-background-700'>
            <ul className="flex items-center justify-center gap-7 md:gap-2">
                <li className='flex flex-col items-center'>
                    <HomeIcon />
                    <Link className='text-sm text-[#FFB707]' to="/">Inicio</Link>
                </li>
                <li className='flex flex-col items-center'>
                    <GiftIcon />
                    <Link className='text-sm' to="/agent">Promoção</Link>
                </li>
                <li className='flex flex-col items-center'>
                    <DepositIcon />
                    <Link className='text-sm' to="/deposit">Depósito</Link>
                </li>

                <li className='flex flex-col items-center'>
                    <SupportIcon />
                    <Link className='text-sm' to="/support">Suporte</Link>
                </li>

                <li className='flex flex-col items-center'>
                    <ProfileIcon />
                    <Link className='text-sm' to="/profile">Perfil</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;