import { useContext } from "react";
import { WindowSizeContext } from "../providers/windowSize";


const Banner = ({ title, subtitle, largeImage, smallImage, buttonText }) => {
    const windowSize = useContext(WindowSizeContext);
    return (
        <div className='w-full non-mobile:h-72 mobile:h-full rounded-3xl bg-primary relative' style={windowSize.width <= 730 ? { height: 540 } : {}}>
            <div className='absolute right-0 top-0 z-0 overflow-hidden mobile:hidden' >{largeImage}</div>
            <div className='w-full h-full absolute flex flex-col justify-center mobile:items-center non-mobile:justify-items-start non-mobile:ml-10 z-10'>
                <div className='non-mobile:hidden'>{smallImage}</div>
                <h3 className='font-poppins font-semibold non-mobile:text-5xl mobile:text-2xl py-4 text-white'>{title}</h3>
                <body className='font-poppins font-normal non-mobile:text-base mobile:text-sm pb-2 text-white mobile:mb-8'>{subtitle}</body>
                <button className='max-h-14 shadow-xl bg-white hover:bg-primaryShade rounded-2xl w-min'><div className='px-11 py-4 whitespace-nowrap text-primary'>{buttonText}</div></button>
            </div>
        </div>
    );
};

export default Banner;