import { useState } from "react";
import { format } from 'date-fns';

const dateColors = ['#FFE2AC', '#CDF4FF', '#FFEBF6'];


const Event = ({ title, subtitle, timestamp }) => {
    const [dateColor] = useState(dateColors[Math.floor(Math.random() * dateColors.length)])
    return (<div className='flex flex-row justify-between flex-grow group hover:bg-primary rounded-xl'>
        <div className='flex flex-row justify-between flex-grow m-3'>
            <div className='rounded-xl flex flex-col justify-center items-center' style={{ width: 88, height: 80, backgroundColor: dateColor }}>
                <p className='font-inter font-medium text-xs text-secondary'>{format(timestamp, 'E')}</p>
                <h4 className='font-poppins font-medium text-4xl text-primary'>{format(timestamp, 'dd')}</h4>
            </div>
            <div className='flex flex-col justify-center justify-items-start mx-2' >
                <h4 className='font-poppins font-semibold text-base text-primary group-hover:text-white'>{title}</h4>
                <h4 className='font-poppins font-medium text-xs text-secondary group-hover:text-white'>{subtitle}</h4>
                <div className='font-inter font-semi-bold text-xs text-white group-hover:text-link text-center rounded-lg bg-primary group-hover:bg-white p-1 mt-2 '>{format(timestamp, 'HH:mm')}</div>
            </div>
            <div>
                <div className='font-poppins font-semibold text-base text-white'>&gt;</div>
            </div>
        </div>
    </div>)
};

const SmallTimeline = ({ data }) => {
    return (
        <div className='w-full shadow-xl rounded-3xl'>
            <div className='flex flex-col justify-start justify-items-start m-8 space-y-8'>
                <h6 className='font-poppins font-medium text-lg text-primary'>Small Timeline</h6>
                <div className='flex flex-row flex-wrap'>{data.map(d => <Event title={d.title} subtitle={d.subtitle} timestamp={d.timestamp} />)}</div>
                <button className='w-full flex justify-center items-center bg-secondary rounded-2xl h-14'><div className='text-white font-inter font-bold text-sm'>Add more</div></button>
            </div>
        </div>
    );
};


export default SmallTimeline;