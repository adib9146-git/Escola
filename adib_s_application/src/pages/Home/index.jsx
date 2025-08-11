import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Button from '../../components/ui/Button';
import EditText from '../../components/ui/EditText';
import TextArea from '../../components/ui/TextArea';

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    console.log('Form submitted:', formData);
  };

  const features = [
    {
      id: 1,
      icon: '/images/img_group.svg',
      title: 'Future Focus',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
      bgColor: 'bg-global-13'
    },
    {
      id: 2,
      icon: '/images/img_013_compass.svg',
      title: 'Smart Scholars',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
      bgColor: 'bg-global-9'
    },
    {
      id: 3,
      icon: '/images/img_group_yellow_a700.svg',
      title: 'Knowledge Hub',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
      bgColor: 'bg-global-14'
    },
    {
      id: 4,
      icon: '/images/img_035_magic_wand.svg',
      title: 'Learning Pathways',
      description: 'Lorem ipsum dolor sit amet consectetur. Nibh viverra dolor diam',
      bgColor: 'bg-global-11'
    }
  ];

  const courses = [
    {
      id: 1,
      instructor: 'Angela',
      students: '50 Students',
      category: 'Development',
      title: 'The Power of Personal Branding',
      rating: 5,
      price: 'Enroll Now'
    },
    {
      id: 2,
      instructor: 'Angela',
      students: '50 Students',
      category: 'Development',
      title: 'The Power of Personal Branding',
      rating: 5,
      price: 'Enroll Now'
    },
    {
      id: 3,
      instructor: 'Angela',
      students: '50 Students',
      category: 'Development',
      title: 'The Power of Personal Branding',
      rating: 5,
      price: 'Enroll Now'
    },
    {
      id: 4,
      instructor: 'Angela',
      students: '50 Students',
      category: 'Development',
      title: 'The Power of Personal Branding',
      rating: 5,
      price: 'Enroll Now'
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: 'Devon Lane',
      position: 'President of Sales',
      review: 'Web designing in a powerful way of just not an only professions, however, in a passion for our Company.',
      rating: 5
    },
    {
      id: 2,
      name: 'Jerome Bell',
      position: 'Medical Assistant',
      review: 'Web designing in a powerful way of just not an only professions, however, in a passion for our Company.',
      rating: 5
    },
    {
      id: 3,
      name: 'Devon Lane',
      position: 'President of Sales',
      review: 'Web designing in a powerful way of just not an only professions, however, in a passion for our Company.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      id: 1,
      date: '21\nFEB',
      image: '/images/img_rectangle_1167.png',
      title: 'Corporate culture refers to the values beliefs Manket',
      excerpt: 'Contrary to popular belief, Lorem Ipsum is not simply random text many kindsman ontrary to popular belief Lorem Ipsum.',
      category: 'Category',
      comments: 'Comments (05)'
    },
    {
      id: 2,
      date: '21\nFEB',
      image: '/images/img_rectangle_1167_300x410.png',
      title: 'Unleashing the full potential of your business',
      excerpt: 'Contrary to popular belief, Lorem Ipsum is not simply random text many kindsm anon trary to popular belief Lorem Ipsum.',
      category: 'Category',
      comments: 'Comments (05)'
    },
    {
      id: 3,
      date: '21\nFEB',
      image: '/images/img_rectangle_1167_1.png',
      title: 'Solving problems seizing opportunities',
      excerpt: 'Contrary to popular belief, Lorem Ipsum is not simply random text many kindsmanon trary to popular belief Lorem Ipsum.',
      category: 'Category',
      comments: 'Comments (05)'
    }
  ];

  const knowledgeFeatures = [
    'education is the key',
    'A Whole Lot of Digital Love for Less',
    'Know what your target market wants and needs',
    'A Whole Lot of Digital Love for Less'
  ];

  const brandLogos = [
    '/images/img_group_gray_500.svg',
    '/images/img_group_gray_500_40x130.svg',
    '/images/img_group_gray_500_30x130.svg',
    '/images/img_group_gray_500_60x130.svg',
    '/images/img_jasmine_logo.svg'
  ];

  return (
    <div className="w-full bg-global-15">
      <Header />
      {/* Hero Section */}
      <section 
        className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[906px] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/img_vector.png')" }}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px] pt-[24px] pb-[24px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            {/* Hero Content */}
            <div className="w-full lg:w-[66%]">
              <h1 className="text-[32px] sm:text-[48px] md:text-[60px] lg:text-[75px] font-inter font-bold leading-[40px] sm:leading-[56px] md:leading-[72px] lg:leading-[91px] text-global-2 mb-6 lg:mb-0">
                <span>Expand Your Horizons through </span>
                <span className="text-global-4">Education</span>
              </h1>
            </div>
            
            {/* Hero CTA */}
            <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-6 lg:mt-[48px]">
              <p className="text-[18px] sm:text-[21px] font-inter font-normal leading-[24px] sm:leading-[26px] text-global-2">
                Education for a Better Tomorrow.
              </p>
              <Button 
                variant="outline" 
                className="border border-header-1 text-global-2 bg-global-15 px-[24px] sm:px-[34px] py-[14px] sm:py-[18px] text-[13px] sm:text-[15px] font-medium leading-[19px] capitalize rounded-[5px] hover:bg-header-1 hover:text-global-6 transition-colors"
              >
                Contact us
              </Button>
              <img 
                src="/images/img_clip_path_group.svg" 
                className="w-[60px] sm:w-[76px] h-[120px] sm:h-[160px] mt-4 lg:mt-[78px] self-end" 
                alt="decoration" 
              />
            </div>
          </div>
        </div>

        {/* Hero Cards */}
        <div className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 lg:px-[314px] pb-8 lg:pb-0">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-4 lg:gap-[30px]">
            {/* Left Card */}
            <div className="w-full lg:w-[18%] bg-global-10 rounded-[20px] p-[18px] shadow-[0px_16px_52px_#00000011]">
              <div className="flex flex-col gap-[30px]">
                <img src="/images/img_isolation_mode.svg" className="w-full h-[120px] sm:h-[160px] object-contain" alt="chart" />
                <img src="/images/img_isolation_mode_white_a700.svg" className="w-full h-[100px] sm:h-[130px] object-contain" alt="progress" />
              </div>
            </div>

            {/* Center Card */}
            <div className="relative w-full lg:w-[32%] bg-global-6 rounded-[20px] h-[280px] sm:h-[370px]">
              <div className="absolute top-[8px] right-[56px] sm:right-[80px] bg-global-7 rounded-[0px_0px_20px_20px] p-[8px] w-[calc(100%-112px)] sm:w-[calc(100%-136px)] h-[calc(100%-8px)]">
                <div className="flex justify-end">
                  <div className="bg-global-12 rounded-[40px] p-[16px] shadow-[0px_10px_10px_#f8bc2699] mb-[324px]">
                    <img src="/images/img_frame.svg" className="w-[32px] sm:w-[44px] h-[32px] sm:h-[44px]" alt="icon" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Card */}
            <div className="w-full lg:w-[18%] bg-global-15 rounded-[10px] p-[8px] shadow-[0px_16px_52px_#00000011]">
              <img src="/images/img_isolation_mode_red_500.svg" className="w-full h-[280px] sm:h-[370px] object-contain" alt="chart" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="w-full py-[60px] sm:py-[80px] lg:py-[186px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[20px] sm:gap-[30px]">
            {features?.map((feature, index) => (
              <div 
                key={feature?.id} 
                className={`bg-global-15 rounded-[10px] p-[30px] shadow-[0px_16px_52px_#00000011] flex flex-col items-center gap-[18px] ${index === 1 || index === 3 ? 'mt-0 sm:mt-[40px]' : 'mb-0 sm:mb-[40px]'}`}
              >
                <div className={`${feature?.bgColor} rounded-[5px] p-[16px] flex items-center justify-center`}>
                  <img src={feature?.icon} className="w-[32px] sm:w-[44px] h-[32px] sm:h-[44px]" alt={feature?.title} />
                </div>
                <h3 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] text-center capitalize text-global-2">
                  {feature?.title}
                </h3>
                <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[24px] sm:leading-[26px] text-center text-global-2">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Knowledge Section */}
      <section className="w-full py-[60px] sm:py-[80px] lg:py-[116px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[116px]">
            {/* Left Content */}
            <div className="w-full lg:w-[60%] flex flex-col gap-[28px]">
              {/* Daily Activity Card */}
              <div className="bg-global-7 rounded-[5px] p-[14px] w-full">
                <div className="bg-global-15 rounded-[5px] p-[12px] shadow-[0px_4px_13px_#1310220f] w-full sm:w-[36%]">
                  <div className="flex items-center gap-[14px]">
                    <div className="bg-global-3 rounded-[30px] p-[12px]">
                      <img src="/images/img_frame_indigo_a700.svg" className="w-[38px] sm:w-[62px] h-[38px] sm:h-[62px]" alt="activity" />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] capitalize text-global-2">
                        Daily Activity
                      </h3>
                      <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                        Loream is ispam
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[32px]">
                <div className="bg-global-10 rounded-[5px] p-[24px] sm:p-[36px] flex-1">
                  <div className="flex items-center gap-[20px]">
                    <div className="bg-global-4 rounded-[32px] p-[16px]">
                      <img src="/images/img_frame_white_a700_64x64.svg" className="w-[48px] sm:w-[64px] h-[48px] sm:h-[64px]" alt="courses" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[51px] text-global-5">
                        200+
                      </span>
                      <span className="text-[18px] sm:text-[21px] font-inter font-medium leading-[26px] capitalize text-global-1">
                        Courses
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-global-10 rounded-[5px] p-[24px] sm:p-[34px] flex-1">
                  <div className="flex items-center gap-[20px] sm:gap-[24px]">
                    <div className="bg-global-4 rounded-[32px] p-[16px]">
                      <img src="/images/img_frame_64x64.svg" className="w-[48px] sm:w-[64px] h-[48px] sm:h-[64px]" alt="subjects" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[51px] text-global-5">
                        10k+
                      </span>
                      <span className="text-[18px] sm:text-[21px] font-inter font-medium leading-[26px] capitalize text-global-1">
                        Subjects
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[34%] flex flex-col gap-[42px]">
              <p className="text-[16px] sm:text-[18px] font-inter font-bold leading-[22px] text-center capitalize text-global-4">
                Top Popular Course
              </p>
              <h2 className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[54px] text-global-2">
                Knowledge is power education is the key
              </h2>
              <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[24px] sm:leading-[26px] text-global-2">
                Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training
              </p>
              
              <div className="flex flex-col gap-[36px]">
                {knowledgeFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-start gap-[20px]">
                    {index % 2 === 0 ? (
                      <img src="/images/img_frame_8248.svg" className="w-[20px] sm:w-[30px] h-[20px] sm:h-[30px] mt-1" alt="check" />
                    ) : (
                      <div className="bg-global-5 rounded-[10px] p-[4px] mt-1">
                        <img src="/images/img_group_9.svg" className="w-[12px] sm:w-[20px] h-[12px] sm:h-[20px]" alt="check" />
                      </div>
                    )}
                    <div className="flex flex-col gap-[12px]">
                      <h4 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] capitalize text-global-2">
                        {index % 2 === 0 ? 'Smart Scholars' : 'Knowledge Hub'}
                      </h4>
                      <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                        {feature}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="w-full py-[60px] sm:py-[80px] lg:py-[748px] relative">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="flex flex-col gap-[40px]">
            {/* Section Header */}
            <div className="flex flex-col gap-[14px]">
              <p className="text-[16px] sm:text-[18px] font-inter font-bold leading-[22px] text-center capitalize text-global-4">
                Services we are offering
              </p>
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 lg:gap-0">
                <h2 className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[54px] text-global-2 w-full lg:w-[34%]">
                  Navigating your path to success
                </h2>
                <div className="flex items-center gap-[20px] self-end">
                  <img src="/images/img_group_6_blue_gray_900.svg" className="w-[50px] sm:w-[66px] h-[50px] sm:h-[66px]" alt="prev" />
                  <button className="border-2 border-global-2 rounded-[32px] p-[18px] sm:p-[24px] hover:bg-global-2 hover:border-global-2 transition-colors">
                    <img src="/images/img_group_5_blue_gray_900.svg" className="w-[18px] sm:w-[24px] h-[18px] sm:h-[24px]" alt="next" />
                  </button>
                </div>
              </div>
            </div>

            {/* Courses Grid */}
            <div className="flex flex-nowrap gap-[20px] sm:gap-[30px] overflow-x-auto lg:overflow-x-visible">
              {courses?.map((course) => (
                <div key={course?.id} className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[410px] bg-global-15 rounded-[5px] shadow-[0px_0px_60px_#0000000c] p-[20px] sm:p-[30px]">
                  {/* Course Header */}
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-[10px]">
                      <div className="w-[32px] sm:w-[40px] h-[32px] sm:h-[40px] bg-global-7 border-2 border-[#2f57ef21] rounded-[20px]"></div>
                      <div className="flex flex-col">
                        <span className="text-[11px] sm:text-[13px] font-inter font-normal leading-[16px] text-global-2">
                          By <span className="font-medium">{course?.instructor}</span>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-[4px]">
                      <img src="/images/img_16x14.svg" className="w-[12px] sm:w-[14px] h-[12px] sm:h-[16px]" alt="students" />
                      <span className="text-[11px] sm:text-[13px] font-inter font-normal leading-[16px] text-global-2">
                        {course?.students}
                      </span>
                    </div>
                  </div>

                  {/* Course Image */}
                  <div className="w-full h-[180px] sm:h-[250px] bg-global-7 rounded-[5px] mb-4 relative">
                    <div className="absolute bottom-2 right-2">
                      <span className="bg-global-2 text-global-6 text-[11px] sm:text-[13px] font-inter font-medium leading-[16px] px-[10px] sm:px-[12px] py-[8px] sm:py-[12px] rounded-[5px]">
                        {course?.category}
                      </span>
                    </div>
                  </div>

                  {/* Course Content */}
                  <div className="flex flex-col gap-4">
                    {/* Rating */}
                    <div className="flex items-center gap-[6px]">
                      <img src="/images/img_1178_frame.svg" className="w-[60px] sm:w-[82px] h-[10px] sm:h-[12px]" alt="rating" />
                      <span className="text-[10px] sm:text-[12px] font-inter font-medium leading-[15px] text-global-2">
                        (15 Reviews)
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-[20px] sm:text-[25px] font-inter font-bold leading-[26px] sm:leading-[32px] text-global-2">
                      {course?.title}
                    </h3>

                    {/* CTA */}
                    <div className="flex items-center gap-[8px] mt-4">
                      <span className="text-[16px] sm:text-[18px] font-inter font-bold leading-[22px] text-global-4">
                        {course?.price}
                      </span>
                      <img src="/images/img_indigo_a700_16x14.svg" className="w-[12px] sm:w-[14px] h-[12px] sm:h-[16px]" alt="arrow" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-full bg-global-1 py-[60px] sm:py-[80px] lg:py-[118px] relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/img_frame_white_a700.svg')" }}
        ></div>
        
        <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            {/* Left Content */}
            <div className="w-full lg:w-[22%] flex flex-col gap-[46px]">
              <p className="text-[16px] sm:text-[18px] font-inter font-bold leading-[22px] capitalize text-global-6">
                testimonials
              </p>
              <h2 className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[54px] text-global-6 w-full lg:w-[92%]">
                Advanced Engine Services
              </h2>
              <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[24px] sm:leading-[26px] text-global-6 w-full lg:w-[86%]">
                Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching,
              </p>
              <div className="flex items-center gap-[20px]">
                <img src="/images/img_group_6.svg" className="w-[50px] sm:w-[66px] h-[50px] sm:h-[66px]" alt="prev" />
                <button className="border-2 border-global-6 rounded-[32px] p-[18px] sm:p-[24px] hover:bg-global-6 hover:text-global-1 transition-colors">
                  <img src="/images/img_group_5.svg" className="w-[18px] sm:w-[24px] h-[18px] sm:h-[24px]" alt="next" />
                </button>
              </div>
            </div>

            {/* Right Content - Testimonials */}
            <div className="w-full lg:w-[60%] flex flex-nowrap gap-[20px] sm:gap-[30px] overflow-x-auto lg:overflow-x-visible">
              {testimonials?.map((testimonial) => (
                <div key={testimonial?.id} className="flex-shrink-0 w-[300px] sm:w-[350px] lg:w-[410px] flex flex-col items-center">
                  {/* Avatar */}
                  <div className="w-[120px] sm:w-[150px] h-[120px] sm:h-[150px] bg-global-7 rounded-[75px] mb-[-36px] z-10"></div>
                  
                  {/* Testimonial Card */}
                  <div className="bg-global-15 border border-[#e3e3e3] rounded-[5px] p-[28px] sm:p-[38px] w-full text-center">
                    <h4 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] capitalize text-global-2 mt-[40px] sm:mt-[64px] mb-2">
                      {testimonial?.name}
                    </h4>
                    <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2 mb-6">
                      {testimonial?.position}
                    </p>
                    <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[24px] sm:leading-[26px] text-global-2 mb-8">
                      {testimonial?.review}
                    </p>
                    
                    {/* Rating Stars */}
                    <div className="flex justify-center items-center gap-[4px]">
                      {[...Array(testimonial?.rating)]?.map((_, index) => (
                        <img key={index} src="/images/img_amber_500.svg" className="w-[14px] sm:w-[16px] h-[12px] sm:h-[14px]" alt="star" />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action Card */}
        <div className="absolute top-[-82px] left-1/2 transform -translate-x-1/2 w-full max-w-[1440px] px-4 sm:px-6 lg:px-[314px]">
          <div className="bg-global-8 rounded-[5px] p-6 lg:p-0 flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-[56%] p-6 lg:p-[48px] flex flex-col gap-[48px]">
              <h3 className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[54px] text-global-6 w-full lg:w-[60%]">
                We made passion our raw material
              </h3>
              <div className="flex items-center gap-[12px]">
                <div className="border border-global-12 rounded-[30px] p-[6px]">
                  <div className="bg-global-12 rounded-[22px] p-[14px]">
                    <img src="/images/img_group_7.svg" className="w-[32px] sm:w-[46px] h-[32px] sm:h-[46px]" alt="phone" />
                  </div>
                </div>
                <div className="flex flex-col gap-[4px]">
                  <span className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-6">
                    Call us now
                  </span>
                  <span className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] capitalize text-global-6">
                    +44 7700 900217
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-[36%] relative">
              <div className="w-full h-[250px] sm:h-[330px] bg-global-7"></div>
              <img src="/images/img_frame_163633.svg" className="absolute inset-0 w-full h-full object-cover" alt="team" />
            </div>
          </div>
        </div>
      </section>
      {/* Knowledge Power Section */}
      <section className="w-full py-[60px] sm:py-[80px] lg:py-[116px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[116px]">
            {/* Left Image */}
            <div className="w-full lg:w-[48%]">
              <img src="/images/img_illu.svg" className="w-full h-auto max-w-[500px] sm:max-w-[630px]" alt="illustration" />
            </div>

            {/* Right Content */}
            <div className="w-full lg:w-[40%] flex flex-col gap-[40px]">
              <p className="text-[16px] sm:text-[18px] font-inter font-bold leading-[22px] text-center capitalize text-global-4">
                Top Popular Course
              </p>
              <h2 className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[54px] text-global-2 w-full lg:w-[88%]">
                Knowledge is power education is the key
              </h2>
              <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[24px] sm:leading-[26px] text-global-2">
                Education is the process of acquiring knowledge, skills, values, and attitudes through various methods such as teaching, training, or research. It plays a crucial role in
              </p>
              
              <div className="flex flex-col gap-[18px] sm:gap-[20px]">
                {knowledgeFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center gap-[10px]">
                    {index % 2 === 0 ? (
                      <img src="/images/img_frame_8248.svg" className="w-[16px] sm:w-[20px] h-[16px] sm:h-[20px]" alt="check" />
                    ) : (
                      <div className="bg-global-5 rounded-[10px] p-[4px]">
                        <img src="/images/img_group_9.svg" className="w-[12px] sm:w-[20px] h-[12px] sm:h-[20px]" alt="check" />
                      </div>
                    )}
                    <span className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Blog Section */}
      <section className="w-full py-[60px] sm:py-[80px] lg:py-[116px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="flex flex-col items-center gap-[50px]">
            {/* Section Header */}
            <div className="text-center">
              <p className="text-[16px] sm:text-[18px] font-inter font-bold leading-[22px] capitalize text-global-4 mb-2">
                Blog & Article
              </p>
              <h2 className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[54px] text-global-2 w-full max-w-[600px] mx-auto">
                Business strategy is the plan and actions
              </h2>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] w-full">
              {blogPosts?.map((post) => (
                <article key={post?.id} className="bg-global-15 rounded-[10px] shadow-[0px_16px_52px_#00000011] overflow-hidden">
                  {/* Blog Image */}
                  <div className="relative">
                    <img src={post?.image} className="w-full h-[200px] sm:h-[300px] object-cover" alt={post?.title} />
                    <div className="absolute top-[18px] left-[18px] bg-global-2 rounded-[5px_0px_5px_0px] p-[20px] text-center">
                      <span className="text-[18px] sm:text-[21px] font-inter font-bold leading-[24px] sm:leading-[31px] capitalize text-global-6 whitespace-pre-line">
                        {post?.date}
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-[20px] sm:p-[30px] flex flex-col gap-[18px]">
                    {/* Meta Info */}
                    <div className="flex items-start gap-4">
                      <div className="flex items-center gap-[10px]">
                        <img src="/images/img_indigo_a700.svg" className="w-[16px] sm:w-[18px] h-[14px] sm:h-[16px]" alt="category" />
                        <span className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                          {post?.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <img src="/images/img_indigo_a700_16x20.svg" className="w-[18px] sm:w-[20px] h-[14px] sm:h-[16px]" alt="comments" />
                        <span className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-global-2">
                          {post?.comments}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[18px] sm:text-[21px] font-inter font-bold leading-[26px] sm:leading-[31px] capitalize text-global-2">
                      {post?.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[15px] sm:text-[17px] font-inter font-normal leading-[24px] sm:leading-[26px] text-global-3">
                      {post?.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center gap-[8px] mt-4">
                      <a href="#" className="text-[13px] sm:text-[15px] font-inter font-medium leading-[19px] capitalize text-global-2 hover:text-global-4 transition-colors">
                        Read more
                      </a>
                      <img src="/images/img_indigo_a700_16x14.svg" className="w-[12px] sm:w-[14px] h-[12px] sm:h-[16px]" alt="arrow" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section className="w-full py-[60px] sm:py-[80px] lg:py-[120px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-[120px]">
            {/* Left Illustration */}
            <div className="w-full lg:w-[548px]">
              <img src="/images/img_illustration.svg" className="w-full h-auto" alt="contact illustration" />
            </div>

            {/* Right Contact Form */}
            <div className="w-full lg:w-[48%] flex flex-col gap-[60px]">
              <div className="flex flex-col gap-[10px]">
                <p className="text-[16px] sm:text-[18px] font-inter font-bold leading-[22px] text-center capitalize text-global-4">
                  GET IN TOUCH
                </p>
                <h2 className="text-[32px] sm:text-[42px] font-inter font-bold leading-[40px] sm:leading-[51px] text-global-2">
                  <span>Bringing your </span>
                  <span className="text-[#246bfd]">vision to life</span>
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] sm:gap-[30px]">
                {/* Name and Email Row */}
                <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px]">
                  <EditText
                    placeholder="Your Name"
                    value={formData?.name}
                    onChange={(e) => handleInputChange('name', e?.target?.value)}
                    className="flex-1 text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-center text-global-2 border border-[#e3e3e3] rounded-[5px] px-[18px] py-[18px] sm:py-[22px] bg-global-15"
                    fullWidth
                  />
                  <EditText
                    placeholder="Your Email"
                    type="email"
                    value={formData?.email}
                    onChange={(e) => handleInputChange('email', e?.target?.value)}
                    className="flex-1 text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-center text-global-2 border border-[#e3e3e3] rounded-[5px] px-[18px] py-[18px] sm:py-[22px] bg-global-15"
                    fullWidth
                  />
                </div>

                {/* Phone and Subject Row */}
                <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[30px]">
                  <EditText
                    placeholder="Phone Number"
                    type="tel"
                    value={formData?.phone}
                    onChange={(e) => handleInputChange('phone', e?.target?.value)}
                    className="flex-1 text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-center text-global-2 border border-[#e3e3e3] rounded-[5px] px-[18px] py-[18px] sm:py-[22px] bg-global-15"
                    fullWidth
                  />
                  <EditText
                    placeholder="Subject"
                    value={formData?.subject}
                    onChange={(e) => handleInputChange('subject', e?.target?.value)}
                    className="flex-1 text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-center text-global-2 border border-[#e3e3e3] rounded-[5px] px-[18px] py-[18px] sm:py-[22px] bg-global-15"
                    fullWidth
                  />
                </div>

                {/* Message */}
                <TextArea
                  placeholder="Message"
                  value={formData?.message}
                  onChange={(e) => handleInputChange('message', e?.target?.value)}
                  rows={5}
                  className="text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-center text-global-2 border border-[#e3e3e3] rounded-[5px] px-[20px] py-[18px] sm:py-[22px] bg-global-15"
                  fullWidth
                />

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full text-[15px] sm:text-[17px] font-inter font-normal leading-[21px] text-center text-global-6 bg-global-2 rounded-[5px] px-[34px] py-[18px] sm:py-[22px] hover:opacity-90 transition-opacity"
                >
                  submit now
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* Brand Logos Section */}
      <section className="w-full py-[40px] sm:py-[60px]">
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[314px]">
          <div className="flex flex-wrap justify-between items-center gap-8 sm:gap-4">
            {brandLogos?.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img src={logo} className="h-[24px] sm:h-[32px] lg:h-[40px] w-auto opacity-60 hover:opacity-100 transition-opacity" alt={`brand-${index}`} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Decorative Elements */}
      <div className="fixed top-[400px] sm:top-[500px] lg:top-[1478px] right-[20px] sm:right-[40px] lg:right-[160px] z-10">
        <img src="/images/img_group_878.svg" className="w-[60px] sm:w-[80px] lg:w-[106px] h-[50px] sm:h-[70px] lg:h-[86px]" alt="decoration" />
      </div>
      <div className="fixed top-[800px] sm:top-[1000px] lg:top-[3384px] right-[40px] sm:right-[60px] lg:right-[162px] z-10">
        <img src="/images/img_vector_blue_gray_900.svg" className="w-[40px] sm:w-[50px] lg:w-[56px] h-[45px] sm:h-[55px] lg:h-[64px]" alt="decoration" />
      </div>
      <div className="fixed bottom-[200px] sm:bottom-[300px] lg:bottom-[400px] right-[100px] sm:right-[140px] lg:right-[162px] z-10">
        <img src="/images/img_vector_amber_a200.svg" className="w-[35px] sm:w-[45px] lg:w-[52px] h-[55px] sm:h-[65px] lg:h-[78px]" alt="decoration" />
      </div>
      <Footer />
    </div>
  );
};

export default Home;