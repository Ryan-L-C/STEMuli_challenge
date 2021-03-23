import classNames from "classnames";
import React, { useState } from "react";
import { Iconly } from "react-iconly";

const Notifications = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [open, setOpen] = useState(false);
    const iconColors = isHovered || open ? { primaryColor: '#FFFFFF', secondaryColo: '#FFFFFF' } : { primaryColor: '#11142D', secondaryColo: '#11142D' };
    const notificationCount = 5;
    const hasNotifications = notificationCount && notificationCount > 0;
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ width: 60, height: 56 }} className='mr-14 relative'>
            <button
                className={classNames({
                    'h-12 w-12 flex justify-center items-center rounded-full': true,
                    'bg-white non-mobile:shadow-md': !isHovered && !open,
                    'bg-primary': isHovered || open
                })}
                onClick={() => setOpen(!open)}
            >
                <Iconly style={{ width: 30, height: 29 }} className='' name='Notification' {...iconColors} />
            </button>
            {hasNotifications && (<div className='absolute top-0 right-0 w-6 h-6 bg-accent2 rounded-full flex items-center justify-center'>
                <p className='font-inter font-semibold text-xs text-white text-center'>{notificationCount}</p>
            </div>)}
        </div>
    );
};

export default Notifications