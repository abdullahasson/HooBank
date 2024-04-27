import { MarketsImages } from "../assets"


export default function Markets() {
    return (
        <div className="market  mb-16" id="three">

            <div className="relative flex overflow-x-hidden">
                <div className="py-12 animate-marquee whitespace-nowrap flex justify-between items-center">
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.airbnb} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.binance} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.coinbase} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.dropbox} alt="" className="w-2/3" />
                    </span>
                </div>
                <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap flex justify-between items-center">
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.airbnb} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.binance} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.coinbase} alt="" className="w-2/3" />
                    </span>
                    <span className="text-4xl mx-4">
                        <img src={MarketsImages.dropbox} alt="" className="w-2/3" />
                    </span>
                </div>
            </div>

        </div>
    )
}