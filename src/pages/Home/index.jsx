import React, { useState, useEffect }  from 'react';
import '../../App.css';
import Header from '../../components/Header';

// Quero que o Modals/Popup apareça toda vez que a página for carregada
import Popup from '../../components/Modals/Popup';
import RegisterPopup from '../../components/Modals/RegisterPopup';

import { Swiper, SwiperSlide } from 'swiper/react';
import Nav from '../../components/Nav';
import { ArrowBigDownDash, ArrowLeft, ArrowRight, Boxes, Clock, Gem, Gift, PiggyBank, Star } from 'lucide-react';
import LoggedHeader from '../../components/LoggedHeader';

function Home() {
    const [showPopup, setShowPopup] = useState(false); // Estado para o modal
    const [showRegisterPopup, setShowRegisterPopup] = useState(false);

    

    useEffect(() => {
        // Exibe o modal assim que o componente for montado
        setShowPopup(true);
    }, []);

    const handleClosePopup = () => {
        setShowPopup(false); // Fecha o popup normal
        setTimeout(() => {
            setShowRegisterPopup(true); // Abre o popup de registro após o primeiro ser fechado
        }, 300); // Adicione um pequeno delay se quiser transições mais suaves
    };


    const data = [
        {
            id: 1,
            image: 'https://i.imgur.com/Ic3pKA2.jpeg',
        },
        {
            id: 2,
            image: 'https://i.imgur.com/q1QQJ2r.jpeg',
        },
        {
            id: 3,
            image: 'https://i.imgur.com/0LvCS9b.jpeg',
        },
    ];

    const games = [
        {
            id: 1,
            image: './storage/PlayFiver/Pgsoft/126.png',
        },
        {
            id: 2,
            image: './storage/PlayFiver/Pgsoft/40.png',
        },
        {
            id: 3,
            image: './storage/PlayFiver/Pgsoft/60.png',
        },
        {
            id: 4,
            image: './storage/PlayFiver/Pgsoft/63.png',
        },
        {
            id: 5,
            image: './storage/PlayFiver/Pgsoft/69.png',
        },
        {
            id: 6,
            image: './storage/PlayFiver/Pgsoft/104.png',
        },
        {
            id: 7,
            image: './storage/PlayFiver/Pgsoft/1738001.png',
        },
        {
            id: 8,
            image: './storage/PlayFiver/Pgsoft/1543462.png',
        },
        {
            id: 9,
            image: './storage/PlayFiver/Pgsoft/asgardian-rs.png',
        },
    ];

    const games2 = [
        {
            id: 2,
            image: './storage/PlayFiver/Pgsoft/126.png',
        },
        {
            id: 1,
            image: './storage/PlayFiver/Pgsoft/40.png',
        },
        {
            id: 4,
            image: './storage/PlayFiver/Pgsoft/60.png',
        },
        {
            id: 3   ,
            image: './storage/PlayFiver/Pgsoft/63.png',
        },
        {
            id: 5,
            image: './storage/PlayFiver/Pgsoft/69.png',
        },
        {
            id: 6,
            image: './storage/PlayFiver/Pgsoft/104.png',
        },
        {
            id: 7,
            image: './storage/PlayFiver/Pgsoft/1738001.png',
        },
        {
            id: 8,
            image: './storage/PlayFiver/Pgsoft/1543462.png',
        },
        {
            id: 9,
            image: './storage/PlayFiver/Pgsoft/asgardian-rs.png',
        },
    ];

    return (
        <div className="app_center bg-background-600">
            <div>
            {showPopup && <Popup onClose={handleClosePopup} />}
            {showRegisterPopup && (
                <RegisterPopup onClose={() => setShowRegisterPopup(false)} />
            )}
                {/* <Header /> */}
                <Nav />
                <LoggedHeader />
                <div>
                    <div className="mt-2 mx-4">
                        <Swiper
                            className="rounded-lg"
                            slidesPerView={1}
                            autoplay={{ delay: 2500 }}
                        >
                            {data &&
                                data.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <img src={item.image} alt={item.id} />
                                    </SwiperSlide>
                                ))}
                        </Swiper>
                    </div>
                    <div className="mx-4 mt-2 flex items-center gap-2">
                        <div>
                            <img src="src/assets/icon_dt_pmd.webp" className="w-[20px]" />
                        </div>
                        <div className="w-full overflow-hidden relative">
                            {/* Gradiente nas laterais para efeito de suavidade */}
                            <div className="absolute inset-0 bg-gradient-to-r from-background-600 via-transparent to-background-600 pointer-events-none"></div>

                            {/* Texto animado */}
                            <p className="text-sm whitespace-nowrap animate-marquee relative z-10">
                                Acesse o lobby do Processo de Incentivos para se inscrever nos Incentivos que deseja. Os aplicativos de auto-atendimento tornam tudo mais rápido e conveniente. Obrigado
                            </p>
                        </div>
                    </div>

                    <div className='game_headline_popular mx-2 mt-2 flex justify-between items-center '>
                        <div className="flex items-center gap-2">
                            <img
                            className='w-[30px]' 
                            src="https://saesrtyuytr.xwinsoo.win/siteadmin/skin/lobby_asset/2-1-common/common/_sprite/icon_dtfl_rm_1.avif?manualVersion=1&version=d8102e6ae1" alt="" />
                            <div>
                                Popular
                            </div>
                        </div>
                        <div className=''>
                            <img src="src/assets/2025_ballons.avif"  className="w-[48px]" alt="" />
                        </div>
                        <div className='switch_pagination flex items-center w-fit h-7 rounded-full border gap-2 border-background-400'>
                            <div className='justify-center items-center flex ml-2'>
                                <ArrowLeft size={16} strokeWidth={1.5} /> 
                            </div>
                            <div className='flex justify-center items-center'>
                                Tudo
                            </div>
                            <div className='flex justify-center items-center mr-2'>
                                <ArrowRight size={16} strokeWidth={1.5} />
                            </div>
                        </div>
                    </div> 
                    <div className='relative'>
                        <div className='game_list_popular grid grid-cols-3 gap-4 mx-4 mt-4 '>
                            {games.map((game) => (
                                <div key={game.id} className='game_item_popular flex'>
                                    <div className='game_image_popular'>
                                        <img className='h-full rounded-md' src={game.image} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>
                    <div className='game_headline_slots mx-4 mt-4 flex justify-between items-center '>
                        <div className="flex items-center gap-2">
                            <img
                            className='w-[30px]' 
                            src="https://saesrtyuytr.xwinsoo.win/siteadmin/skin/lobby_asset/2-1-common/common/_sprite/icon_dtfl_dz_1.avif?manualVersion=1&version=12588989f7" alt="" />
                            <div>
                               Slots
                            </div>
                        </div>
                        <div className='switch_pagination flex items-center w-fit h-7 rounded-full border gap-2 border-background-400'>
                            <div className='justify-center items-center flex ml-2'>
                                <ArrowLeft size={16} strokeWidth={1.5} /> 
                            </div>
                            <div className='flex justify-center items-center'>
                                Tudo
                            </div>
                            <div className='flex justify-center items-center mr-2'>
                                <ArrowRight size={16} strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>
                    <div className='relative mb-20'>
                        <div className='game_list_popular grid grid-cols-3 gap-4 mx-4 mt-4 '>
                            {games2.map((game) => (
                                <div key={game.id} className='game_item_popular flex'>
                                    <div className='game_image_popular'>
                                        <img className='h-full rounded-md' src={game.image} alt="" />
                                    </div>
                                </div>
                            ))}
                        </div>      
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
