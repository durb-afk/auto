
import React from 'react';
import Sidebar from '@/components/sidebar';
import InfoBar from '@/components/inforbar';

interface Props {
    children: React.ReactNode;
    showSidebar?: boolean;  // prop in charge of showing Sidebar or not
    showInfoBar?: boolean;  // prop in charge of showing InfoBar or not
}

const Layout: React.FC<Props> = ({
    children,
    showSidebar = true, // true by default
    showInfoBar = true, // true by default
}) => {
    return (
        <div className={`flex ${showSidebar || showInfoBar ? 'overflow-hidden' : ''} h-screen pr-40`}>
            {showSidebar && <Sidebar />}
            <div className={`w-full ${showInfoBar ? '' : 'flex-1'}`}>
                {showInfoBar && <InfoBar />}
                <div className="flex flex-1 items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;
