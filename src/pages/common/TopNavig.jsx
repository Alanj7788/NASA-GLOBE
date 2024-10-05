import React from 'react';
import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import { useLocation, Link } from 'react-router-dom';

// TopNavig Component
const TopNavig = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <div>
      <Breadcrumb aria-label="Breadcrumb" className="bg-gray-50 px-5 py-3 dark:bg-gray-800">
        <Breadcrumb.Item>
          <Link to="/" className="flex items-center">
            <HiHome className="mr-2" />
            Home
          </Link>
        </Breadcrumb.Item>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const last = index === pathnames.length - 1;

          return (
            <Breadcrumb.Item key={to}>
              {last ? (
                value
              ) : (
                <Link to={to}>{value}</Link>
              )}
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    </div>
  );
}

export default TopNavig;
