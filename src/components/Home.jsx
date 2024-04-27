import { LazyLoadImage } from "react-lazy-load-image-component"
import { HomeImages } from "../assets/index";
import 'react-lazy-load-image-component/src/effects/blur.css';


export default function Home() {

    return (
        <div className="home h-screen relative" id='zero'>
            <div className="container flex justify-between flex-wrap items-center h-screen left-animation-scroll">
                <div className="left flex flex-col justify-between w-3/6">
                    <div className="motion flex items-center gap-2 rounded bg-slate-500 px-4 p-1 w-fit">
                        <LazyLoadImage src={HomeImages.discount} alt="" />
                        <h3><span>20%</span> DISCOUNT FOR <span>1 MONTH</span> ACCOUNT</h3>
                    </div>


                    <div className="tit text-white my-9">
                        <h1 className='font-semibold text-7xl'>The Next <span>Generation</span> Payment Method.</h1>
                    </div>

                    <div className="cont text-white w-">
                        <p className='text-lg w-2/3'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs.
                            We examine annual percentage rates, annual fees.</p>
                    </div>
                </div>
                <div className="right">
                </div>
            </div>
            <LazyLoadImage
                src={HomeImages.robotHand}
                className='rob absolute right-0'
                effect="opacity"
                alt=""
            />
        </div>
    )
}