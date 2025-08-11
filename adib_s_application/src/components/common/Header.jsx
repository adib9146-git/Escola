import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const menuItems = [
    { 
      name: 'Home', 
      hasSubmenu: true,
      submenu: ['Home Page', 'Home Variants', 'Home Features']
    },
    { 
      name: 'About Us', 
      hasSubmenu: true,
      submenu: ['Our Story', 'Our Team', 'Our Mission']
    },
    { 
      name: 'Services', 
      hasSubmenu: true,
      submenu: ['Online Courses', 'Tutoring', 'Certification']
    },
    { 
      name: 'Projects', 
      hasSubmenu: true,
      submenu: ['Student Projects', 'Research', 'Case Studies']
    },
    { 
      name: 'Blog', 
      hasSubmenu: true,
      submenu: ['Latest Posts', 'Education Tips', 'News']
    },
    { 
      name: 'Page', 
      hasSubmenu: true,
      submenu: ['FAQ', 'Support', 'Resources']
    },
    { 
      name: 'Contact', 
      hasSubmenu: true,
      submenu: ['Contact Form', 'Office Locations', 'Support']
    }
  ];

  return (
    <header className="w-full bg-global-15 shadow-[0px_16px_52px_#0000000c]">
      <div className="w-full max-w-[1920px] mx-auto">
        {/* Top Contact Bar */}
        <div className="w-full bg-global-10 px-4 sm:px-6 lg:px-[80px] py-[10px]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            {/* Left Contact Info */}
            <div className="flex items-center gap-[10px]">
              <img src="/images/img_.svg" className="w-[12px] h-[16px]" alt="location" />
              <span className="text-[14px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                6391 Elgin St. Celina, 10299
              </span>
            </div>
            
            {/* Right Contact Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-[30px]">
              <div className="flex items-center gap-[10px]">
                <img src="/images/img_blue_gray_900.svg" className="w-[16px] h-[20px]" alt="phone" />
                <span className="text-[14px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                  (629) 555-0129
                </span>
              </div>
              <div className="flex items-center gap-[12px]">
                <img src="/images/img_blue_gray_900_16x16.svg" className="w-[16px] h-[16px]" alt="email" />
                <span className="text-[14px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                  info@example.com
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="w-full px-4 sm:px-6 lg:px-[80px] py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center gap-[10px]">
              <img src="/images/img_open_book.svg" className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px]" alt="logo" />
              <span className="text-[24px] sm:text-[30px] font-inter font-bold leading-[37px] text-global-2">
                Escola
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-[34px]">
              {menuItems?.map((item, index) => (
                <div key={index} className="relative group">
                  <button 
                    className="flex items-center gap-[4px] text-[16px] font-inter font-medium leading-[20px] text-global-2 hover:text-header-1 transition-colors"
                    role="menuitem"
                    aria-haspopup={item?.hasSubmenu}
                    aria-expanded="false"
                  >
                    {item?.name}
                    {item?.hasSubmenu && (
                      <img src="/images/img_blue_gray_900_10x8.svg" className="w-[8px] h-[10px]" alt="dropdown" />
                    )}
                  </button>
                  {item?.hasSubmenu && (
                    <ul 
                      role="menu" 
                      className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50"
                    >
                      {item?.submenu?.map((subItem, subIndex) => (
                        <li key={subIndex} role="menuitem">
                          <a 
                            href="#" 
                            className="block px-4 py-2 text-sm text-global-2 hover:bg-global-10 hover:text-header-1 transition-colors"
                          >
                            {subItem}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="flex items-center gap-2 sm:gap-[10px]">
              {/* Search Input - Hidden on mobile */}
              <div className="hidden md:block flex-1 max-w-[300px]">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e?.target?.value)}
                  className="w-full text-[16px] font-inter font-medium leading-[20px] text-global-3 border border-[#19233533] rounded-[5px] px-[18px] py-[18px] focus:outline-none focus:ring-2 focus:ring-header-1 focus:border-transparent"
                />
              </div>
              
              {/* Search Button */}
              <button className="bg-header-1 rounded-[5px] p-[15px] sm:p-[20px] hover:opacity-90 transition-opacity">
                <img src="/images/img_frame_163634.svg" className="w-[20px] h-[20px]" alt="search" />
              </button>
              
              {/* Cart Button */}
              <button className="bg-global-10 rounded-[5px] p-[15px] sm:p-[18px] hover:bg-global-9 transition-colors">
                <img src="/images/img_mdi_cart_outline.svg" className="w-[20px] h-[20px] sm:w-[24px] sm:h-[24px]" alt="cart" />
              </button>

              {/* Mobile Menu Button */}
              <button 
                className="block lg:hidden p-2" 
                aria-label="Open menu"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`block w-5 h-0.5 bg-global-2 transition-all ${menuOpen ? 'rotate-45 translate-y-1' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-global-2 mt-1 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`block w-5 h-0.5 bg-global-2 mt-1 transition-all ${menuOpen ? '-rotate-45 -translate-y-1' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className={`${menuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4`}>
            {/* Mobile Search */}
            <div className="mb-4">
              <input
                type="text"
                placeholder="Search"
                value={searchValue}
                onChange={(e) => setSearchValue(e?.target?.value)}
                className="w-full text-[16px] font-inter font-medium leading-[20px] text-global-3 border border-[#19233533] rounded-[5px] px-[18px] py-[18px] focus:outline-none focus:ring-2 focus:ring-header-1 focus:border-transparent"
              />
            </div>
            
            {/* Mobile Menu Items */}
            <div className="space-y-2">
              {menuItems?.map((item, index) => (
                <div key={index}>
                  <button 
                    className="w-full text-left flex items-center justify-between py-3 px-2 text-[16px] font-inter font-medium leading-[20px] text-global-2 hover:text-header-1 transition-colors"
                    role="menuitem"
                  >
                    {item?.name}
                    {item?.hasSubmenu && (
                      <img src="/images/img_blue_gray_900_10x8.svg" className="w-[8px] h-[10px]" alt="dropdown" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;