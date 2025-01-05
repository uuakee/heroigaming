import { SidebarIcon } from "../utils/icons";

function Header() {
    return (
        <div className="bg-background-700/30 flex justify-between px-2 py-4 relative">
            <div className="left_side flex items-center gap-2">
                <SidebarIcon />
                <img src="src/assets/logo-01.png" alt="Logotype" className="h-[30px]" />
            </div>
            <div className="right_side flex items-center gap-2">
                <button className="bg-defaultskin-500 px-4 py-1 rounded-md items-center flex">
                    <a className="text-white text-sm">
                        Login
                    </a>
                </button>
                <button className="relative border border-defaultskin-500 px-4 py-1 rounded-md items-center flex">
                    <a className="text-defaultskin-500 text-sm">
                        Registro
                    </a>
                    <img
                        src="src/assets/gift_alert.gif"
                        className="absolute -top-3 -right-1 w-[20px]" 
                        alt="Gift Alert"
                    />
                </button>
            </div>
        </div>
    );
}

export default Header;
