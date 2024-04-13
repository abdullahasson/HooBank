import Button from "./Button"

export default function Try() {
    return (
        <div className="try pb-10">
            <div className="container">
                <div className="content asd flex justify-between max-[767px]:flex-col max-[767px]:gap-12 items-center rounded-3xl text-white px-14 py-12 w-full right-animation-scroll">
                    <div className="max-[767px]:text-center">
                        <h1 className="font-bold text-4xl leading-normal mb-5">Let’s try our service now!</h1>
                        <p className="txt w-9/12 max-[767px]:mx-auto">Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </div>
                    <Button className="" >Get Started</Button>
                </div>
            </div>
        </div>
    )
}