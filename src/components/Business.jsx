import Button from "./Button"

export default function Business() {
    return (
        <div className="business text-white space overflow-x-hidden scroll-m-20" id="one">
            <div className="container flex justify-between items-center gap-3">
                <div className="left w-1/2 left-animation-scroll">
                    <h2 className="font-bold text-4xl leading-normal mb-5">You do the business, we’ll handle the money.</h2>
                    <p>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <Button className="mt-4" >Get Started</Button>
                </div>
                <div className="right flex flex-col justify-between gap-4 w-1/2">
                    <div className="flex p-2 right-animation-scroll">
                        <div className="icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M29.4696 23.7122C29.0552 24.1138 28.8648 24.6946 28.9592 25.2642L30.3816 33.1362C30.5016 33.8034 30.22 34.4786 29.6616 34.8642C29.1144 35.2642 28.3864 35.3122 27.7896 34.9922L20.7032 31.2962C20.4568 31.165 20.1832 31.0946 19.9032 31.0866H19.4696C19.3192 31.109 19.172 31.157 19.0376 31.2306L11.9496 34.9442C11.5992 35.1202 11.2024 35.1826 10.8136 35.1202C9.86639 34.941 9.23439 34.0386 9.38959 33.0866L10.8136 25.2146C10.908 24.6402 10.7176 24.0562 10.3032 23.6482L4.52559 18.0482C4.04239 17.5794 3.87439 16.8754 4.09519 16.2402C4.30959 15.6066 4.85679 15.1442 5.51759 15.0402L13.4696 13.8866C14.0744 13.8242 14.6056 13.4562 14.8776 12.9122L18.3816 5.72817C18.4648 5.56817 18.572 5.42097 18.7016 5.29617L18.8456 5.18417C18.9208 5.10097 19.0072 5.03217 19.1032 4.97617L19.2776 4.91217L19.5496 4.80017H20.2232C20.8248 4.86257 21.3544 5.22257 21.6312 5.76017L25.1816 12.9122C25.4376 13.4354 25.9352 13.7986 26.5096 13.8866L34.4616 15.0402C35.1336 15.1362 35.6952 15.6002 35.9176 16.2402C36.1272 16.8818 35.9464 17.5858 35.4536 18.0482L29.4696 23.7122Z" fill="#00F6FF" />
                            </svg>
                        </div>
                        <div className="text ml-4">
                            <h3 className="font-smebold">Rewards</h3>
                            <p className="">The best credit cards offer some tantalizing combinations of promotions and prizes</p>
                        </div>
                    </div>
                    <div className="flex p-2 right-animation-scroll-200">
                        <div className="icon">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M19.565 35.8619C19.7422 35.9544 19.9403 36.0015 20.1384 35.9999C20.3366 35.9984 20.5331 35.9497 20.7119 35.8556L26.4205 32.8039C28.0393 31.941 29.307 30.9761 30.296 29.8527C32.4464 27.4051 33.6207 24.2813 33.5997 21.0602L33.5321 10.4352C33.5256 9.21138 32.7219 8.11938 31.5331 7.72243L20.9132 4.1593C20.2737 3.94279 19.5731 3.94749 18.9448 4.17029L8.36524 7.8605C7.18293 8.27314 6.39364 9.37298 6.40009 10.5983L6.46774 21.2155C6.48868 24.4413 7.70321 27.551 9.88904 29.9735C10.8877 31.0812 12.1667 32.032 13.8032 32.8808L19.565 35.8619ZM18.0538 23.3743C18.2922 23.6034 18.6014 23.7163 18.9107 23.7132C19.22 23.7116 19.5276 23.5955 19.7628 23.3633L26.0014 17.213C26.4701 16.7501 26.4653 16.0064 25.9917 15.5498C25.5165 15.0933 24.7514 15.0964 24.2827 15.5593L18.893 20.8718L16.6862 18.7505C16.211 18.294 15.4475 18.2987 14.9772 18.7615C14.5085 19.2244 14.5133 19.9681 14.9885 20.4246L18.0538 23.3743Z" fill="#00F6FF" />
                            </svg>
                        </div>
                        <div className="text ml-4">
                            <h3 className="font-smebold">100% Secured</h3>
                            <p className="">We take proactive steps make sure your information and transactions are secure.</p>
                        </div>
                    </div>
                    <div className="flex p-2 right-animation-scroll-300">
                        <div className="icon">
                            <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.4965 4.93117C33.6962 4.10976 32.5117 3.80374 31.4072 4.12586L5.6527 11.6152C4.48742 11.939 3.66148 12.8683 3.43899 14.0489C3.2117 15.2504 4.00562 16.7757 5.04285 17.4135L13.0957 22.3629C13.9217 22.8702 14.9877 22.743 15.6712 22.0537L24.8926 12.7749C25.3568 12.2917 26.1251 12.2917 26.5893 12.7749C27.0535 13.242 27.0535 13.999 26.5893 14.4821L17.3519 23.7625C16.6668 24.4503 16.5388 25.5213 17.043 26.3524L21.9634 34.486C22.5396 35.4524 23.532 36 24.6205 36C24.7485 36 24.8926 36 25.0206 35.9839C26.2691 35.8228 27.2615 34.9692 27.6297 33.7612L35.2648 8.03967C35.601 6.94445 35.2968 5.75259 34.4965 4.93117" fill="#00F6FF" />
                            </svg>
                        </div>
                        <div className="text ml-4">
                            <h3 className="font-smebold">Balance Transfer</h3>
                            <p className="">A balance transfer credit card can save you a lot of money in interest charges.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}