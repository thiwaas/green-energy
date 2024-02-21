import { AiFillDashboard, AiOutlineShoppingCart } from 'react-icons/ai';
import { BiCategory, BiLoaderCircle  } from 'react-icons/bi';
import { FiUsers } from 'react-icons/fi';
import { CiChat1 } from 'react-icons/ci';
import { BsCurrencyDollar } from 'react-icons/bs';

export const allNav = [
    {
        id: 1,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'admin',
        path: '/admin/dashboard'
    },
    {
        id: 2,
        title: 'Oders',
        icon: <AiOutlineShoppingCart />,
        role: 'admin',
        path: '/admin/dashboard/orders'
    },
    {
        id: 3,
        title: 'Category',
        icon: <BiCategory />,
        role: 'admin',
        path: '/admin/dashboard/category'
    },
    {
        id: 4,
        title: 'Sellers',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/sellers'
    },
    {
        id: 5,
        title: 'Payment Request',
        icon: <BsCurrencyDollar />,
        role: 'admin',
        path: '/admin/dashboard/payment-request'
    },
    {
        id: 6,
        title: 'Deactive Seller',
        icon: <FiUsers />,
        role: 'admin',
        path: '/admin/dashboard/deactive-seller'
    },
    {
        id: 7,
        title: 'Seller Request',
        icon: <BiLoaderCircle />,
        role: 'admin',
        path: '/admin/dashboard/seller-request'
    },
    {
        id: 8,
        title: 'Chat Seller',
        icon: <CiChat1 />,
        role: 'admin',
        path: '/admin/dashboard/chat-seller'
    }
]