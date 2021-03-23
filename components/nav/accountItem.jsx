import classNames from "classnames";
import React, { useContext } from "react";
import { SidebarStateContext } from ".";

const AccountItem = () => {
    const userName = 'Ryan Callens';
    const accountType = 'Free Account';
    const isMenuOpen = useContext(SidebarStateContext);
    return (
        <div className={classNames({ 'flex flex-row pb-7 items-center': true, 'justify-center': !isMenuOpen, 'justify-between': isMenuOpen })} style={{ borderWidth: 0 }}>
            <img src='/imgs/avatar.svg' className={classNames({ 'h-10 w-10': true })} />
            {isMenuOpen && (<React.Fragment>
                <div className='flex flex-col justify-between'>
                    <p className='font-inter font-semibold text-sm text-primary'>{userName}</p>
                    <p className='font-inter font-semibold text-xs text-secondary '>{accountType}</p>
                </div>
                <img src='imgs/list_arrow_icon.svg' className='h-6 w-6' />
            </React.Fragment>)}
        </div>
    );
};

export default AccountItem;