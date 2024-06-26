import { LazyLoadImage } from "react-lazy-load-image-component"
import { FindImages } from "../assets"
import Button from "./Button"

export default function Find() {
    return (
        <div className="find space">
            <div className="container flex justify-between items-center max-[799px]:flex-col-reverse max-[799px]:gap-16 max-[799px]:text-center left-animation-scroll">
                <div className="left text-white w-1/2 max-[799px]:w-full">
                    <h1 className="font-bold leading-normal text-4xl">Find a better card deal in few easy steps.</h1>
                    <p className="txt my-5">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <Button>Get Started</Button>
                </div>
                <div className="right w-1/2  max-[799px]:w-full">
                    <LazyLoadImage src={FindImages.card} alt="" className=" w-5/6 max-[799px]:w-full ml-auto" />
                </div>
            </div>
        </div>
    )
}