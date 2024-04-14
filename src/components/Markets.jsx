import { LazyLoadImage } from "react-lazy-load-image-component"
import airbnb from "../assets/airbnb.png"
import binance from "../assets/binance.png"
import coinbase from "../assets/coinbase.png"
import dropbox from "../assets/dropbox.png"


export default function Markets() {
    return (
        <div className="market  mb-16" id="three">

            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap flex justify-between items-center">
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={airbnb} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={binance} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={coinbase} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={dropbox} alt="" className="w-2/3" />
                    </span>
                </div>
                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex justify-between items-center">
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={airbnb} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={binance} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={coinbase} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <LazyLoadImage src={dropbox} alt="" className="w-2/3" />
                    </span>
                </div>
            </div>

        </div>
    )
}