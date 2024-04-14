import { LazyLoadImage } from "react-lazy-load-image-component"
import bill from "../assets/bill.png"
import apple from "../assets/apple.svg"
import play from "../assets/play.svg"

export default function Easily() {
    return (
        <div className="easily space">
            <div className="container flex justify-between items-center max-[799px]:flex-col max-[799px]:gap-16">
                <div className="left w-1/2 max-[799px]:w-full">
                    <LazyLoadImage
                        src={bill} alt="" className=" w-5/6 max-[799px]:w-full"
                    />
                </div>
                <div className="right w-1/2 text-white max-[799px]:w-full max-[799px]:text-center right-animation-scroll-200">
                    <h1 className="font-bold leading-normal text-4xl">Easily control your billing & invoicing.</h1>
                    <p className="txt my-5">Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                    <div className="buttons flex justify-start gap-4 items-center max-[799px]:justify-center">
                        <button>
                            <LazyLoadImage src={apple} alt="" />
                        </button>
                        <button>
                            <LazyLoadImage src={play} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}