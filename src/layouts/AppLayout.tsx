import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from '../components/navigation/Sidebar';
import Header from '../components/navigation/Header';

interface AppLayoutProps {
  children: React.ReactNode;
}

function AppLayout({ children }: AppLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dark:bg-boxdark-2 dark:text-bodydark">
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={isSidebarOpen} />
        
        <div className={cn(
          "relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden",
          isSidebarOpen ? 'ml-72' : 'ml-20'
        )}>
          <Header toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
          
          <main>
            <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;