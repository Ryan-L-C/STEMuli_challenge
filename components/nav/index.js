import classNames from "classnames";
import React, { useContext, useState } from "react";
import usePrevious from "../../hooks/usePrevious";
import { WindowSizeContext } from "../../providers/windowSize";
import NavSection from './navSection';
import NavItem from './navItem';
import Upsell from './upsell';
import WelcomeHeader from './welcomeHeader';
import Search from './search';
import AccountItem from './accountItem';
import Notifications from './notifications';

// Stores the open/close state of the sidebar
const SidebarStateContext = React.createContext();

const LogoAndBurger = () => {
    const isMenuOpen = useContext(SidebarStateContext);
    const windowSize = useContext(WindowSizeContext);
    return isMenuOpen ? (
        <div className='flex flex-row pl-5 pt-10 relative'>
            <img className='w-44' src='/imgs/logo_large.svg' alt='logo' />
            { windowSize.width < 1024 && <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <img src='/imgs/burger.svg' className='h-8 w-8 absolute right-0 top-1/2 lg:hidden' />
            </button>}
        </div>
    ) : (
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}><img src='/imgs/burger.svg' className='h-8 w-8 m-8 ml-8 lg:hidden' /></button>
    );
};

const Nav = ({ children }) => {
    const [menuState, setIsMenuOpen] = useState(true);
    const windowSize = useContext(WindowSizeContext);
    const previousWidth = usePrevious(windowSize.width);

    // if the window is resized to be smaller than 1024 then close the sidebar
    if (menuState && windowSize.width < 1024 && previousWidth >= 1024) {
        setIsMenuOpen(false);
    }
    // if the window is bigger than 1024 then always treat the sidebar as opened
    const isMenuOpen = menuState || windowSize.width >= 1024;

    return (
        <SidebarStateContext.Provider value={isMenuOpen} >
            <div className='flex flex-row h-screen'>
                {/* The flex container holding the sidebar */}
                <nav className={classNames({
                    'transform top-0 left-0 bg-white border-r border-gray-300 h-max overflow-auto ease-in-out transition-all duration-300 z-30 flex flex-col flex-shrink-0 mobile:hidden': true,
                    'px-5 w-64': isMenuOpen,
                    'divide-y dividy-gray-300 w-24': !isMenuOpen,
                })}>
                    <LogoAndBurger />
                    {/* The main navigation stack */}
                    <div className='flex flex-col divide-y dividy-gray-300'>
                        <NavSection text={!isMenuOpen ? 'Admin' : 'Admin tools'} icon={isMenuOpen ? null : <img className='w-10 ml-3' src='/imgs/logo_small.svg' alt='logo' />}>
                            <NavItem iconName='Activity' text='Overview' />
                            <NavItem iconName='Bag' text='Products' />
                            <NavItem iconName='Chart' text='Campaigns' />
                            <NavItem iconName='Discovery' text='Schedules' />
                            <NavItem iconName='Wallet' text='Payouts' />
                            <NavItem iconName='Document' text='Statement' />
                            <NavItem iconName='Setting' text='Settings' />
                        </NavSection>
                        <NavSection text='Insights' >
                            <NavItem iconName='Message' text='Inbox' notificationCount={18} />
                            <NavItem iconName='Notification' text='Notifications' notificationCount={2} />
                            <NavItem iconName='Chat' text='Comments' notificationCount={20} />
                        </NavSection>
                    </div>
                    <div className='flex-grow' style={{ borderWidth: 0 }} />
                    {isMenuOpen && <Upsell />}
                    <AccountItem />
                </nav>
                {/* The page header */}
                <div className='flex flex-col overflow-scroll w-full'>
                    {/* Handle the header when not on mobile */}
                    <div className='h-36 w-full mobile:hidden flex flex-row justify-start items-center '>
                        <WelcomeHeader />
                        <div className='flex-grow' />
                        <Search />
                        <Notifications />
                    </div>
                    {/* Heandle the header when on mobile */}
                    <div className='flex flex-col non-mobile:hidden' >
                        <div className='flex flex-row justify-end items-center  border-b border-gray-300 '>
                            <button className='rounded-full h-16 w-16 flex justify-center items-center pl-8 flex-shrink-0' onClick={() => setIsMenuOpen(!isMenuOpen)}><img src='/imgs/burger.svg' className='h-8 w-8' /></button>
                            <div className='flex-grow'></div>
                            <div className='m-7'>
                                <Search />
                            </div>
                            <div className='transform translate-y-1'>
                                <Notifications />
                            </div>
                            <div className='m-7 ml-0 flex-shrink-0'>
                                <img src='/imgs/avatar.svg' className={classNames({ 'h-10 w-10 ': true })} />
                            </div>
                        </div>
                        <WelcomeHeader />

                    </div>
                    {children}
                </div>

            </div>
        </SidebarStateContext.Provider>
    );
};

export { SidebarStateContext };
export default Nav;