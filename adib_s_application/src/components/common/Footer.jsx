import React from 'react';

const Footer = () => {
  const allLinksItems = [
    'Credit industrys',
    'Credit Consulting', 
    'Business Credit industry',
    'Finance industry'
  ];

  const moreServiceItems = [
    'Ui Design',
    'Ux Design',
    'Digital Marketing',
    'Video Editing',
    'Pc Repairs'
  ];

  const socialIcons = [
    '/images/img_group_7865.svg',
    '/images/img_group_7864.svg',
    '/images/img_group_7863.svg',
    '/images/img_group_7862.svg'
  ];

  return (
    <footer 
      className="w-full bg-global-10 mt-[60px] sm:mt-[80px] lg:mt-[120px] pt-[28px] pb-[28px]"
      style={{
        backgroundImage: "url('/images/img_layer1.svg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
        <div className="flex flex-col gap-[60px] sm:gap-[80px] lg:gap-[122px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-[30px]">
            {/* Brand Section */}
            <div className="flex flex-col gap-[20px] sm:gap-[34px] w-full lg:w-[24%]">
              {/* Logo */}
              <div className="flex items-center gap-[10px]">
                <img src="/images/img_open_book_indigo_a700.svg" className="w-[28px] h-[28px] sm:w-[36px] sm:h-[36px]" alt="logo" />
                <span className="text-[24px] sm:text-[30px] font-inter font-bold leading-[37px] text-global-2">
                  Escola
                </span>
              </div>
              
              {/* Description */}
              <p className="text-[16px] sm:text-[18px] font-inter font-normal leading-[28px] sm:leading-[36px] text-global-2">
                Lorem Ipsum is simply dummy texis the printing Lorem Ips is simply dummy text
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-[10px]">
                {socialIcons?.map((icon, index) => (
                  <button key={index} className="hover:opacity-80 transition-opacity">
                    <img src={icon} className="w-[28px] h-[28px] sm:w-[34px] sm:h-[34px]" alt={`social-${index}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-4 w-full lg:w-[70%]">
              {/* All Links */}
              <div className="flex flex-col gap-[20px] sm:gap-[30px] w-full sm:w-auto">
                <h3 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] text-global-2 capitalize">
                  All Links
                </h3>
                <div className="flex flex-col gap-[10px]">
                  {allLinksItems?.map((item, index) => (
                    <div key={index} className="flex items-center gap-[20px]">
                      <img src="/images/img_group_5_blue_gray_900.svg" className="w-[12px] h-[14px]" alt="bullet" />
                      <span className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* More Services */}
              <div className="flex flex-col gap-[20px] sm:gap-[30px] w-full sm:w-auto">
                <h3 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] text-global-2 capitalize">
                  More Service
                </h3>
                <div className="flex flex-col gap-[10px]">
                  {moreServiceItems?.map((item, index) => (
                    <div key={index} className="flex items-center gap-[18px] sm:gap-[20px]">
                      <img src="/images/img_group_5_blue_gray_900.svg" className="w-[12px] h-[14px]" alt="bullet" />
                      <span className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Get In Touch */}
              <div className="flex flex-col gap-[20px] sm:gap-[28px] w-full sm:w-[32%]">
                <h3 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] text-global-2 capitalize">
                  Get In Touch
                </h3>
                <div className="flex flex-col gap-[12px]">
                  <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                    E-mail:example@mail.com
                  </p>
                  <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                    Call:+125 856 632
                  </p>
                  <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] sm:leading-[26px] text-global-2">
                    Location:3 Number Road ,C block, Housing,USA
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
            <p className="text-[16px] sm:text-[18px] font-inter font-normal leading-[22px] text-global-2 text-center sm:text-left">
              © Yoursitename 2023 | All Rights Reserved
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 lg:gap-[36%]">
              <span className="text-[16px] sm:text-[18px] font-inter font-normal leading-[22px] text-global-2">
                Trams & Condition
              </span>
              <a 
                href="#" 
                className="text-[16px] sm:text-[18px] font-inter font-normal leading-[22px] text-global-2 hover:text-header-1 transition-colors"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="text-[16px] sm:text-[18px] font-inter font-normal leading-[22px] text-global-2 hover:text-header-1 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;