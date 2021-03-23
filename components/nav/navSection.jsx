import classNames from "classnames";
import { useContext } from "react";
import { SidebarStateContext } from "./index";

const NavSection = ({ text, children, icon }) => {
    const isMenuOpen = useContext(SidebarStateContext);
    return (
        <div className={classNames({ 'flex flex-col pb-8 pt-10': true, 'items-center': !isMenuOpen })}>
            {icon}
            <div className='px-5 pb-4'>
                <h4 className='font-inter font-semibold text-xs text-secondary w-max'>{text}</h4>
            </div>
            {children}
        </div>
    )
}

export default NavSection;