export default function Markets() {
    return (
        <div className="market space" id="three">
            <div className="container grid grid-cols-4 max-[767px]:grid-cols-2 gap-4">
                <div className="pho w-full flex justify-center items-center">
                    <img src="/HooBank/src/assets/airbnb.png" alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src="/HooBank/src/assets/binance.png" alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src="/HooBank/src/assets/coinbase.png" alt="" className="w-2/3" />
                </div>
                <div className="pho w-full flex justify-center items-center">
                    <img src="/HooBank/src/assets/dropbox.png" alt="" className="w-2/3" />
                </div>
            </div>
        </div>
    )
}