import { LazyLoadImage } from "react-lazy-load-image-component"
import { CardsImages } from "../assets"

export default function Cards() {
    return (
        <div className="cards space" id="two">
            <div className="container flex flex-col justify-between items-center">
                <div className="head w-full flex justify-between max-[767px]:flex-col max-[767px]:text-center max-[767px]:gap-14 items-center text-white">
                    <h1 className="font-bold leading-normal text-4xl w-1/4 max-[767px]:w-4/5 left-animation-scroll">What people are saying about us</h1>
                    <p className="txt w-407px max-[767px]:w-auto right-animation-scroll">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>

                <div className="content pt-14 grid grid-cols-3 gap-7 max-[992px]:grid-cols-2 max-[767px]:grid-cols-1">
                    <div className="bottom-animation-scroll box rounded-2xl asd px-4 py-12 text-white flex flex-col justify-between">
                        <div className="icon">
                            <LazyLoadImage src={CardsImages.quotes} alt="" />
                        </div>
                        <p className="my-8 text-lg font-normal">
                            Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.
                        </p>
                        <div className="person flex justify-start gap-4 items-center">
                            <LazyLoadImage src={CardsImages.people01} alt="" className="w-12" />
                            <div className="info">
                                <h3 className="text-xl font-normal leading-8">Herman Jensen</h3>
                                <span className="text-base leading-normal">Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-animation-scroll-200 box rounded-2xl asd px-4 py-12 text-white flex flex-col justify-between">
                        <div className="icon">
                            <LazyLoadImage src={CardsImages.quotes} alt="" />
                        </div>
                        <p className="my-8 text-lg font-normal">
                            Money makes your life easier. If you`re lucky to have it, you`re lucky.
                        </p>
                        <div className="person flex justify-start gap-4 items-center">
                            <LazyLoadImage src={CardsImages.people02} alt="" className="w-12" />
                            <div className="info">
                                <h3 className="text-xl font-normal leading-8">Steve Mark</h3>
                                <span className="text-base leading-normal">Founder & Leader</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-animation-scroll-300 box rounded-2xl asd px-4 py-12 text-white flex flex-col justify-between">
                        <div className="icon">
                            <LazyLoadImage src={CardsImages.quotes} alt="" />
                        </div>
                        <p className="my-8 text-lg font-normal">
                            It is usually people in the money business, finance, and international trade that are really rich.
                        </p>
                        <div className="person flex justify-start gap-4 items-center">
                            <LazyLoadImage src={CardsImages.people03} alt="" className="w-12" />
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