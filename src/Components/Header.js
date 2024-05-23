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
                <div className="w-12 flex justify-center items-center">
                    <img src={menu} alt="hamburger" className="h-5 ml-28 hover:cursor-pointer" />
                    <div className="flex items-center">
                        <img src={logo} alt="YouTube" className="h-10 relative left-7" />
                        <p className="text-white relative left-8 text-2xl font-semibold font-sans tracking-tighter">YouTube</p>
                        </div>
                </div>
                <div className="flex">
                    <input type="text" placeholder="Search" className="rounded-tl-full rounded-bl-full text-white bg-black border-[1px] border-gray-600 w-[33rem] h-10 placeholder: pl-3 pb-1 text-lg" />
                    <div className="w-16 border-[1px] border-gray-600 rounded-tr-full rounded-br-full bg-[#FFFFFF14] hover:cursor-pointer">
                        <img src={search} alt="search" className="mt-2 ml-5 w-5"/>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <img src={create} alt="create" className="w-10 mr-6 hover:cursor-pointer"/>
                    <img src={notification} alt="notification" className="w-7 mr-6 hover:cursor-pointer"/>
                    <img src={user} alt="user" className="w-[1.85rem] mr-6 hover:cursor-pointer"/>
                </div>
        </div>
        </>
    );    
}
export default Header;