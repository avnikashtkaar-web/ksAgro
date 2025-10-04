import React from 'react';
import Link from 'next/link';
import { assets } from '../../assets/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const SideBar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: 'Add Product', path: '/admindashboard', icon: assets.add_icon },
    { name: 'Product List', path: '/admindashboard/product-list', icon: assets.product_list_icon },
    { name: 'Orders', path: '/admindashboard/orders', icon: assets.order_icon },
  ];

  return (
    <div className='md:w-64 w-16 border-r min-h-screen text-base border-gray-300 py-2 flex flex-col bg-green-50'>
      {menuItems.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link href={item.path} key={item.name} passHref>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(220, 252, 231, 0.6)' }}
              transition={{ type: 'spring', stiffness: 300 }}
              className={`flex items-center py-3 px-4 gap-3 cursor-pointer transition-colors duration-300 rounded-r-lg ${
                isActive
                  ? 'border-r-4 md:border-r-[6px] bg-green-200 border-green-500'
                  : ''
              }`}
            >
              <Image
                src={item.icon}
                alt={`${item.name.toLowerCase()}_icon`}
                className="w-7 h-7"
              />
              <p className='md:block hidden text-center font-medium'>{item.name}</p>
            </motion.div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
