import { LazyLoadImage } from "react-lazy-load-image-component"
import logo from "../assets/logo.svg"

export default function Navbar() {

    function iconClick() {
        document.querySelector(".nav").classList.toggle("show")
    }

    function removeIconClick() {
        document.querySelector(".nav").classList.remove("show")
    }

    return (
        <div className="navbar fixed top-0 left-0 min-w-full z-50 backdrop-blur-lg">
            <div className="container flex justify-between items-center p-5">
                <div className="logo flex justify-between items-center gap-1">
                    <LazyLoadImage src={logo} alt="" />
                </div>

                <i className="fa-solid fa-bars fa-bounce text-white hidden max-[767px]:block cursor-pointer" onClick={iconClick}></i>

                <div className="nav max-[767px]:top-0 max-[767px]:absolute max-[767px]:transition-all">
                    <ul className="flex max-[767px]:flex-col gap-5 text-zinc-50">
                        <li><a href="#zero" className=" hover:text-cyan-500" onClick={removeIconClick}>Home</a></li>
                        <li><a href="#one" className=" hover:text-cyan-500" onClick={removeIconClick}>About Us</a></li>
                        <li><a href="#two" className=" hover:text-cyan-500" onClick={removeIconClick}>Features</a></li>
                        <li><a href="#three" className=" hover:text-cyan-500" onClick={removeIconClick}>Solution</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}