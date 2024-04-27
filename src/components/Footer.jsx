import { Logo } from "../assets/index"

export default function Footer() {
    return (
        <div className="footer addd">
            <div className="container flex justify-between items-center max-[767px]:flex-col">
                <div className="left py-20 max-[767px]:text-center max-[767px]:w-full">
                    <div className="logo flex flex-col max-[767px]:items-center left-animation-scroll">
                        <img src={Logo.logo} alt="" className="w-1/2 mb-6" />
                        <p className="txt w-3/5">
                            A new way to make the payments easy, reliable and secure.
                        </p>
                    </div>
                </div>
                <div className="right flex justify-between items-start gap-20 py-16 text-white max-[767px]:gap-16 max-[482px]:gap-8 max-[360px]:flex-col max-[360px]:text-center max-[360px]:items-center max-[360px]:gap-14">
                    <ul className="bottom-animation-scroll">
                        <p className="mb-5">Usefull Links</p>
                        <li className="txtt mb-3">Content</li>
                        <li className="txtt mb-3">How it Works</li>
                        <li className="txtt mb-3">Create</li>
                        <li className="txtt mb-3">Explore</li>
                        <li className="txtt">Terms & Services</li>
                    </ul>

                    <ul className="bottom-animation-scroll-200">
                        <p className="mb-5">Community</p>
                        <li className="txtt mb-3">Help Center</li>
                        <li className="txtt mb-3">Partners</li>
                        <li className="txtt mb-3">Suggestions</li>
                        <li className="txtt mb-3">Blog</li>
                        <li className="txtt">Newsletters</li>
                    </ul>
                    <ul className="bottom-animation-scroll-300">
                        <p className="mb-5">Partner</p>
                        <li className="txtt mb-3">Our Partner</li>
                        <li className="txtt">Become a Partner</li>
                    </ul>
                </div>
            </div>
            <div className="sm-footer p-6 border-t-[1px] border-[#888888] w-[98%] m-auto">
                <div className="text text-center">
                    <p className="txt">Copyright 2021 HooBank. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}