import menu from "../Images/menu.png"
import logo from "../Images/logo.png"
import search from "../Images/search.svg"
import notification from "../Images/notification.svg"
import create from "../Images/create.png"
import user from "../Images/user.png"
const Header = () => {
    return (
        <>
            <div className="py-3 flex items-center justify-between">
                <div className="md:w-12 w-28 flex justify-center items-center">
                    <img src={menu} alt="hamburger" className="md:h-5 h-3 md:ml-28 md:w-12 w-3 -ml-3 hover:cursor-pointer" />
                    <div className="flex items-center">
                        <img src={logo} alt="YouTube" className="md:h-10 h-4 relative md:left-7 left-3" />
                        <p className="text-white relative md:left-8 left-3 md:text-2xl text-sm font-semibold font-sans tracking-tighter">YouTube</p>
                        </div>
                </div>
                <div className="flex">
                    <input type="text" placeholder="Search" className="rounded-tl-full rounded-bl-full text-white bg-[#121212] border-[1px] border-gray-600 md:w-[33rem] w-44 md:h-10 h-6 placeholder: pl-3 pb-1 md:text-lg text-xs" />
                    <div className="md:w-16 w-5 md:h-10 h-6 border-[1px] border-gray-600 rounded-tr-full rounded-br-full bg-[#FFFFFF14] hover:cursor-pointer">
                        <img src={search} alt="search" className="md:mt-2 mt-[0.35rem] md:ml-5 ml-[0.15rem] md:w-5 w-3"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <img src={create} alt="create" className="md:block hidden md:w-10 w-4 md:mr-6 hover:cursor-pointer"/>
                    <img src={notification} alt="notification" className="md:w-7 w-4 md:mr-6 mr-2 hover:cursor-pointer"/>
                    <img src={user} alt="user" className="md:w-[1.85rem] w-4 md:mr-6 mr-2 hover:cursor-pointer"/>
                </div>
        </div>
        </>
    );    
}
export default Header;