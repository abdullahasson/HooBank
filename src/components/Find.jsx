export default function Find() {
    return (
        <div className="find space">
            <div className="container flex justify-between items-center max-[799px]:flex-col-reverse max-[799px]:gap-16 max-[799px]:text-center">
                <div className="left text-white w-1/2 max-[799px]:w-full">
                    <h1 className="font-bold leading-normal text-4xl">Find a better card deal in few easy steps.</h1>
                    <p className="txt my-5">Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <button className="btn">Get Started</button>
                </div>
                <div className="right w-1/2  max-[799px]:w-full">
                    <img src="/HooBank/src/assets/card.png" alt="" className=" w-5/6 max-[799px]:w-full ml-auto"/>
                </div>
            </div>
        </div>
    )
}