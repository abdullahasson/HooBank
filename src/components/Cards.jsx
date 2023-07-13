import icon from "../assets/quotes.svg"
import pepO from "../assets/People01.png"
import pepT from "../assets/People02.png"
import pepTh from "../assets/People03.png"


export default function Cards() {
    return (
        <div className="cards space" id="two">
            <div className="container flex flex-col justify-between items-center">
                <div className="head w-full flex justify-between max-[767px]:flex-col max-[767px]:text-center max-[767px]:gap-14 items-center text-white">
                    <h1 className="font-bold leading-normal text-4xl w-1/4 max-[767px]:w-4/5">What people are saying about us</h1>
                    <p className="txt w-407px max-[767px]:w-auto">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>

                <div className="content pt-14 grid grid-cols-3 gap-7 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1">
                    <div className="box rounded-2xl asd px-4 py-12 text-white flex flex-col justify-between">
                        <div className="icon">
                            <img src={icon} alt="" />
                        </div>
                        <p className="my-8 text-lg font-normal">
                            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                        </p>
                        <div className="person flex justify-start gap-4 items-center">
                            <img src={pepO} alt="" className="w-12"/>
                            <div className="info">
                                <h3 className="text-xl font-normal leading-8">Herman Jensen</h3>
                                <span className="text-base leading-normal">Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                    <div className="box rounded-2xl asd px-4 py-12 text-white flex flex-col justify-between">
                        <div className="icon">
                            <img src={icon} alt=""/>
                        </div>
                        <p className="my-8 text-lg font-normal">
                            Money makes your life easier. If you`re lucky to have it, you`re lucky.
                        </p>
                        <div className="person flex justify-start gap-4 items-center">
                            <img src={pepT} alt="" className="w-12"/>
                            <div className="info">
                                <h3 className="text-xl font-normal leading-8">Steve Mark</h3>
                                <span className="text-base leading-normal">Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                    <div className="box rounded-2xl asd px-4 py-12 text-white flex flex-col justify-between">
                        <div className="icon">
                            <img src={icon} alt="" />
                        </div>
                        <p className="my-8 text-lg font-normal">
                            It is usually people in the money business, finance, and international trade that are really rich.
                        </p>
                        <div className="person flex justify-start gap-4 items-center">
                            <img src={pepTh} alt="" className="w-12"/>
                            <div className="info">
                                <h3 className="text-xl font-normal leading-8">Kenn Gallagher</h3>
                                <span className="text-base leading-normal">Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    )
}