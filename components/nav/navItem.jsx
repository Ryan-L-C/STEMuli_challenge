import classNames from "classnames";
import React, { useContext, useState } from "react";
import { Iconly } from "react-iconly";
import { SidebarStateContext } from ".";


const NavItem = ({ iconName, text, notificationCount }) => {
    const [isHovered, setIsHovered] = useState(false);
    const iconColors = isHovered ? { primaryColor: '#FFFFFF', secondaryColo: '#FFFFFF' } : {};
    const isMenuOpen = useContext(SidebarStateContext);
    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={classNames({ 'w-fill hover:bg-primary group rounded-xl cursor-pointer': true, 'mx-4': !isMenuOpen })}>
            <div className={classNames({ 'flex flex-row items-center relative': true, 'justify-start': isMenuOpen, 'justify-center': !isMenuOpen })}>
                <Iconly className='m-5' name={iconName} {...iconColors} />
                {isMenuOpen && (
                    <React.Fragment>
                        <menu className='font-inter font-semibold text-sm text-secondary pl-4 group-hover:text-white'>{text}</menu>
                        <div className='flex-grow' />
                    </React.Fragment>
                )}
                {notificationCount && notificationCount > 0 && (
                    <div className={classNames({
                        'rounded-full flex items-center justify-center bg-accent2 ': true,
                        'w-6 h-6': isMenuOpen,
                        'w-2.5 h-2.5 absolute top-4 right-4': !isMenuOpen,
                    })}>
                        {isMenuOpen && <p className='font-inter font-semibold text-xs text-white text-center'>{notificationCount}</p>}
                    </div>
                )}

            </div>
        </div >
    );
};

export default NavItem;