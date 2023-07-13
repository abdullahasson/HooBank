import pho1 from "../assets/airbnb.png"
import pho2 from "../assets/binance.png"
import pho3 from "../assets/coinbase.png"
import pho4 from "../assets/dropbox.png"

export default function Markets() {
    return (
        <div className="market space" id="three">
            <div className="container grid grid-cols-4 max-[767px]:grid-cols-2 gap-4">
                <div className="pho w-full flex justify-center items-center">
                    <img src={pho1} alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src={pho2} alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src={pho3} alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src={pho4} alt="" className="w-2/3" />
                </div>
            </div>
        </div>
    )
}