import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  BarChart2,
  Users,
  Settings,
  Box,
  FileText,
  Mail,
  Calendar,
  MessageSquare,
  ShoppingCart,
  CreditCard,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '../../utils/helpers';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
}

interface MenuItem {
  title: string;
  path?: string;
  icon?: React.ReactNode;
  submenu?: MenuItem[];
}

function Sidebar({ isOpen }: SidebarProps) {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState<string[]>([]);

  const menuItems: MenuItem[] = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <LayoutDashboard size={20} />
    },
    {
      title: 'Analytics',
      path: '/analytics',
      icon: <BarChart2 size={20} />
    },
    {
      title: 'Objects',
      icon: <Box size={20} />,
      submenu: [
        { title: 'All Objects', path: '/objects' },
        { title: 'Create Object', path: '/objects/new' },
        { title: 'Object Settings', path: '/objects/settings' }
      ]
    },
    {
      title: 'Records',
      icon: <FileText size={20} />,
      submenu: [
        { title: 'View Records', path: '/records' },
        { title: 'Import Records', path: '/records/import' },
        { title: 'Export Records', path: '/records/export' }
      ]
    },
    {
      title: 'Users',
      icon: <Users size={20} />,
      submenu: [
        { title: 'All Users', path: '/users' },
        { title: 'Add User', path: '/users/new' },
        { title: 'User Roles', path: '/users/roles' }
      ]
    },
    {
      title: 'Communication',
      icon: <Mail size={20} />,
      submenu: [
        { title: 'Email', path: '/email' },
        { title: 'Chat', path: '/chat' },
        { title: 'Calendar', path: '/calendar' }
      ]
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <Settings size={20} />
    }
  ];

  const toggleSubmenu = (title: string) => {
    setOpenMenus(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const renderMenuItem = (item: MenuItem) => {
    const isActive = item.path ? location.pathname === item.path : false;
    const hasSubmenu = item.submenu && item.submenu.length > 0;
    const isSubmenuOpen = openMenus.includes(item.title);

    return (
      <div key={item.title} className="mb-2">
        {item.path ? (
          <Link
            to={item.path}
            className={cn(
              'nav-item',
              isActive && 'active'
            )}
          >
            {item.icon}
            <span className={cn(
              'text-sm font-medium duration-200',
              !isOpen && 'opacity-0'
            )}>
              {item.title}
            </span>
          </Link>
        ) : (
          <button
            onClick={() => toggleSubmenu(item.title)}
            className={cn(
              'nav-item w-full',
              isSubmenuOpen && 'bg-primary/10'
            )}
          >
            {item.icon}
            <span className={cn(
              'text-sm font-medium flex-1 text-left',
              !isOpen && 'opacity-0'
            )}>
              {item.title}
            </span>
            {hasSubmenu && (
              isSubmenuOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />
            )}
          </button>
        )}

        {hasSubmenu && isSubmenuOpen && (
          <div className="ml-4 mt-2 space-y-2">
            {item.submenu?.map(subItem => (
              <Link
                key={subItem.title}
                to={subItem.path || '#'}
                className={cn(
                  'nav-item pl-8',
                  location.pathname === subItem.path && 'active'
                )}
              >
                <span className="text-sm">{subItem.title}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={cn(
      'bg-white border-r border-stroke dark:border-strokedark dark:bg-boxdark duration-300 h-screen fixed left-0 top-0 z-50',
      isOpen ? 'w-72' : 'w-20'
    )}>
      <div className="flex h-[96px] items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link to="/">
          <div className="flex items-center gap-2.5">
            <LayoutDashboard size={32} className="text-primary" />
            <span className={cn(
              'text-xl font-semibold text-black dark:text-white duration-300',
              !isOpen && 'opacity-0'
            )}>
              LightningCRM
            </span>
          </div>
        </Link>
      </div>

      <div className="px-4 py-4 custom-scrollbar overflow-y-auto h-[calc(100vh-96px)]">
        <nav>
          {menuItems.map(renderMenuItem)}
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;