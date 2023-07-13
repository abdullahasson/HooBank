export default function Num() {
    return (
        <div className="num">
            <div className="container flex justify-between items-center">
                <div className="sec flex items-center justify-start gap-3 p-2">
                    <h1 className="text-white text-3xl font-bold">3800+</h1>
                    <span className="text-sm">User Active</span>
                </div>
                <div className="cut bg-white h-4"></div>
                <div className="sec flex items-center flex-4 gap-3 justify-center p-2">
                    <h1 className="text-white text-3xl font-bold">230+</h1>
                    <span className="text-sm">TRUSTED BY COMPANY</span>
                </div>
                <div className="cut bg-white h-4"></div>
                <div className="sec flex items-center gap-3 justify- p-2">
                    <h1 className="text-white text-3xl font-bold">$230M+</h1>
                    <span className="text-sm">TRANSACTION</span>
                </div>
            </div>
        </div>
    )
}