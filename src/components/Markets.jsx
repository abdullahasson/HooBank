import airbnb from "../assets/airbnb.png"
import binance from "../assets/binance.png"
import coinbase from "../assets/coinbase.png"
import dropbox from "../assets/dropbox.png"

export default function Markets() {
    return (
        <div className="market space" id="three">
            <div className="container grid grid-cols-4 max-[767px]:grid-cols-2 gap-4">
                <div className="pho w-full flex justify-center items-center">
                    <img src={airbnb} alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src={binance} alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src={coinbase} alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src={dropbox} alt="" className="w-2/3" />
                </div>
            </div>
        </div>
    )
}