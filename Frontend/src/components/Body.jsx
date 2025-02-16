import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TeamSwiper from "./TeamSwiper";
import Contact from "./Contact";
import Details from "./Details";
import Footer from "./Footer";

function Body() {
    const images = [
        "/images/1.png",
        "/images/2.png",
        "/images/3.png",
        "/images/4.png",
        "/images/5.png",
        "/images/6.png"
      ];
      const Testimonial = [
        { id: 1, name: "Ren Delan", role: "Founder",icon:"/images/col.png",image: "/images/p1.png",text:'“During our partnership with WSI, we were shown promising new ways to market our company."' },
        { id: 2, name: "Bob Barbarick", role: "Owner",icon:"/images/col.png", image: "/images/p2.png",text:'"We have a great business relationship with WSI.”' },
        { id: 3, name: "Julio", role: "Founder",icon:"/images/col.png", image: "/images/p3.png",text:'"highly recommend to any business that needs a hand their business."' },
        { id: 4, name: "Ren Delan", role: "Founder",icon:"/images/col.png",image: "/images/p1.png",text:'“During our partnership with WSI, we were shown promising new ways to market our company."' },
        { id: 5, name: "Bob Barbarick", role: "Owner",icon:"/images/col.png", image: "/images/p2.png",text:'"We have a great business relationship with WSI.”' },
        { id: 6, name: "Julio", role: "Founder",icon:"/images/col.png", image: "/images/p3.png",text:'"highly recommend to any business that needs a hand their business."' },
        { id: 7, name: "Ren Delan", role: "Founder",icon:"/images/col.png",image: "/images/p1.png",text:'“During our partnership with WSI, we were shown promising new ways to market our company."' },
        { id: 8, name: "Bob Barbarick", role: "Owner",icon:"/images/col.png", image: "/images/p2.png",text:'"We have a great business relationship with WSI.”' },
        { id: 9, name: "Julio", role: "Founder",icon:"/images/col.png", image: "/images/p3.png",text:'"highly recommend to any business that needs a hand their business."' },
      ];
  return (
    <>
    {/* Growing Business Desktop View */}
<section id="growing-business" className="hidden md:block bg-[#04293C] mt-[10px] relative font-poppins-font h-[480px]">
    <img src="/images/bg-img.png" className="w-[1440px] h-[480px] opacity-5"/>
    <img src="/images/Website site.png" className="w-[413px] h-[406px] absolute left-[851px] top-[37px]"/>
    <h1 className="font-semibold text-[54px] text-white absolute top-[137px] left-[122px]">Growing Business</h1>
    <p className="text-white font-krub font-medium absolute left-[122px] top-[226px] w-[486px] h-[48px] text-[16px] ">Following the successful launch of its pectate site, Pet Culture, Woolworths again turned to Luminary</p>
    <button className="absolute top-[306px] left-[122px] bg-green-custom w-[121px] px-2 py-2 text-white rounded text-[16px] font-medium hover:bg-green-700 transition">Know More</button>
    <div className="absolute top-[442.4px] left-[-18.2px] w-[72.9px] h-[19.55px] opacity-20 rounded-[50px] rotate-[-45.96deg] bg-[#7BBF0D]"/>
    <img src="/images/l1.png" className="w-[26px] absolute top-[430.4px] left-[435px]"/>
    <img src="/images/clock.png" className="w-[26px] absolute bottom-6 left-1/2 transform -translate-x-1/2"/>
    <img src="/images/l3.png" className="absolute bottom-6 right-[280px] mix-blend-overlay"/>
    <img src="/images/l4.png" className="absolute top-14 right-0"/>
    <img src="/images/l5.png" className="absolute top-20 left-1/2 transform -translate-x-1/2"/>
    <img src="/images/l6.png" className="absolute left-0 top-1/2 mix-blend-overlay"/>
    <img src="/images/l7.png" className="absolute right-28 bottom-6 h-[1px] w-[140px]"/>
</section>

{/* Growing Business Mobile View */}
<section id="growing-business" className="md:hidden h-[620px] bg-[#04293C] mt-[10px] relative flex flex-col items-center w-[360px]">
    <img src="/images/bg-img.png" className="absolute inset-0 w-[360px] h-[620px] object-cover opacity-5" />
    <img src="/images/grp-bg.png" className="h-[266px] w-[264px] relative mt-[40px]" />
    <div className="relative flex flex-col w-[309px] mt-[20px] font-poppins-font">
        <h1 className="font-semibold text-[32px] w-[294px] text-white self-start">Growing Business</h1>
        <p className="text-white font-medium text-[16px] leading-[24.24px] w-[309px] self-start font-krub">
            Following the successful launch of its pectate site, Pet Culture, Woolworths again turned to Luminary
        </p>
        <button className="mt-4 bg-green-custom w-[121px] h-[36px] flex items-center justify-center text-white font-medium text-[16px] rounded-[4px] self-start hover:bg-green-700 transition">
            Know More
        </button>
    </div>
    <div className="absolute bottom-4 left-[-38.78px] w-[72.9px] h-[19.55px] opacity-20 rounded-[50px] rotate-[-45.96deg] bg-[#7BBF0D]"/>
    <img src="/images/clock.png" className="w-[26px] absolute bottom-10 left-1/2 transform -translate-x-1/2"/>
    <img src="/images/l8.png" className="absolute top-[280px] right-20 mix-blend-overlay"/>
    <img src="/images/l9.png" className="absolute top-[330px] right-0"/>
    <img src="/images/l10.png" className="absolute top-12 right-0"/>
    <img src="/images/l11.png" className="absolute left-0 top-[230px] mix-blend-overlay"/>
</section>

{/* Brand Logos Desktop View */}
<section id="brand-logos" className="hidden md:flex justify-center">
      <div className="flex justify-between my-[72px] w-[1186px] h-[50px]">
        <img src="/images/1.png" className="w-[158px] h-[50px]"/>
        <img src="/images/2.png" className="w-[158px] h-[50px]"/>
        <img src="/images/3.png" className="w-[158px] h-[50px]"/>
        <img src="/images/4.png" className="w-[158px] h-[50px]"/>
        <img src="/images/5.png" className="w-[158px] h-[50px]"/>
        <img src="/images/6.png" className="w-[158px] h-[50px]"/>
      </div>
</section>

{/* Brand Logos Mobile View */}
<section id="brand-logos" className="md:hidden flex justify-center items-center h-[170px] w-[360px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: true }}
        className="w-[80%] h-[100px] flex flex-col justify-between"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img src={src} className="w-[150px] h-auto" alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </Swiper>
</section>

{/* About Us Section Desktop View */}
<section className="hidden md:block h-[764px] font-poppins-font bg-slate-100" id="about-us">
        <h1 className="ml-[120px] pt-[31px] font-semibold text-[48px] font-poppins-font text-[#282938]">About us</h1>
        <p className="ml-[120px] w-[571.43px] h-[56px] font-medium text-[16px] leading-[28px] text-[#282938]">Established in 2007 by experienced professionals, dedicated to providing quality client services with a focus on ethics, knowledge.</p>
        <div className="ml-[120px] pt-[31px]">
            <div className="relative">
               <img src="/images/Ellipse.png" className="w-[50.06px] h-[185.79px] absolute left-[398px] top-[22px]" />
                <img src="/images/mimi.png" className="w-[400.67px] h-[357px] object-cover absolute rounded-[10px]" alt="Cropped Image" />
                <img src="/images/desola.png" className="w-[349.46px] h-[260px] object-cover rounded-[10px] absolute left-[130px] top-[242px]" alt="Styled Image" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[36px] w-[672px] h-[380px] absolute left-[520px] top-[20px]">
                    <div className="flex flex-col w-[330px]">
                        <img src="/images/Group1.png" className="w-[60px] h-[60px] rounded-md" alt="Image 1"/>
                        <h3 className="text-lg font-semibold mt-4 text-[#04293C]">Data Analytics</h3>
                        <p className="text-[#04293C] font-medium mt-3 leading-[28px]">Financial services are heavily regulated to ensure consumer protection.</p>
                    </div>

                    <div className="flex flex-col w-[330px] ">
                        <img src="/images/Group2.png" className="w-[60px] h-[60px]  rounded-md" alt="Image 2"/>
                        <h3 className="text-lg font-semibold mt-4 text-[#04293C]">Consumer Product</h3>
                        <p className="text-[#04293C] font-medium mt-3 leading-[28px]">A consumer product is any use or consumption by individuals.</p>
                    </div>

                    <div className="flex flex-col w-[330px]">
                        <img src="/images/Group3.png" className="w-[60px] h-[60px]  rounded-md" alt="Image 3"/>
                        <h3 className="text-lg font-semibold mt-4 text-[#04293C]">SEO</h3>
                        <p className="text-[#04293C] font-medium mt-3 leading-[28px]">Search Engine Optimization (SEO) is the online content to improve (SERPs).</p>
                    </div>

                    <div className="flex flex-col w-[330px]">
                        <img src="/images/Group4.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
                        <h3 className="text-lg font-semibold mt-4 text-[#04293C]">Web Development</h3>
                        <p className="text-[#04293C] font-medium mt-3 leading-[28px]">Web development is the process of creating, building, web applications.</p>
                    </div>
                    <button className="mt-4 bg-green-custom w-[121px] px-2 py-2 text-white font-semibold text-[16px] rounded ml-[25px] mb-[14px] absolute top-[410px] left-[-25px] hover:bg-green-700 transition">Know More</button>
               </div>
        </div>
        </div>
</section>

{/* Consulting Services Section Desktop View */}
<section id="consulting-services" className="hidden md:flex justify-center gap-[48px] text-white font-poppins-font mt-[72px] mb-[72px]">
        <div className="flex flex-col w-[380px] h-[300px] bg-[#04293C] rounded-[10px] p-[43px]">
            <div className="flex flex-col w-[294px] h-[84px] gap-4">
            <img src="/images/Group2.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
            <h3 className="text-lg font-semibold">Best Consulting</h3>
            <p className="text-[16px] font-medium leading-[28px]">A consultant is a professional who provides expert advice, or achieves their goals.</p>
            </div>
        </div>

        <div className="flex flex-col w-[380px] h-[300px] bg-[#04293C] rounded-[10px] p-[43px]">
            <div className="flex flex-col  w-[294px] h-[84px] gap-4">
            <img src="/images/Group-2.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
            <h3 className="text-lg font-semibold">Marketing Growth</h3>
            <p className="text-[16px] font-medium leading-[28px]">Marketing growth refers to the process of increasing a company's market share, and tactics.</p>
            </div>
        </div>

        <div className="flex flex-col w-[380px] h-[300px] bg-[#04293C] rounded-[10px] p-[43px]">
            <div className="flex flex-col w-[294px] h-[84px] gap-4">
            <img src="/images/Group-3.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
            <h3 className="text-lg font-semibold ">On Time Services</h3>
            <p className="text-[16px] font-medium leading-[28px]">On-time services refer to providing products expectations and deadlines efficiently.</p>
            </div>
        </div>
</section>


{/* Consulting Services Section Mobile View */}
<section id="consulting-services" className="md:hidden flex justify-center items-center w-[360px]">
    <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1} 
        pagination={{ clickable: true }}
        className="w-[312px] h-[320px] flex justify-center"
    >
        <SwiperSlide className="flex justify-center items-center text-white ">
            <div className="flex flex-col items-start gap-[24px] w-[312px] h-[268px] bg-[#0a2c44] rounded-[10px] p-[20px] font-poppins-font">
                <img src="/images/Group2.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
                <h3 className="text-[24px] font-semibold">Best Consulting</h3>
                <p className=" text-[16px] font-medium leading-[28px]">A consultant is a professional who provides expert advice, or achieves their goals.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center text-white">
            <div className="flex flex-col items-start gap-[18px] w-[312px] h-[268px] bg-[#0a2c44] rounded-[10px] p-[20px] font-poppins-font">
                <img src="/images/Group-2.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
                <h3 className="text-[24px] font-semibold">Marketing Growth</h3>
                <p className="text-[16px] font-medium leading-[28px]">Marketing growth refers to the process of increasing a company's market share, and tactics.</p>
            </div>
        </SwiperSlide>

        <SwiperSlide className="flex justify-center items-center text-white ">
            <div className="flex flex-col items-start gap-[24px] w-[312px] h-[268px] bg-[#0a2c44] rounded-[10px] p-[20px] font-poppins-font">
                <img src="/images/Group-3.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
                <h3 className="text-[24px] font-semibold ">On Time Services</h3>
                <p className=" text-[16px] font-medium leading-[28px]">On-time services refer to providing products expectations and deadlines efficiently.</p>
            </div>
        </SwiperSlide>
    </Swiper>
</section>


{/*Services Section*/}
<section className="font-poppins-font bg-[#F4F6FC] w-[360px] h-[1712px] md:w-full md:h-[892px] md:pt-10 flex flex-col  md:items-start" id="services">
    <div className="md:w-[1200px] md:h-[748px] ml-[24px] md:ml-[120px]">
    <h2 className="font-semibold text-[32px] md:text-[48px] pt-[31px] text-[#04293C]">Services</h2>
    <p className="w-[310px] h-[112px] md:w-[630px] md:h-[56px] font-medium text-[16px] leading-[28px] text-[#04293C]">A service is an intangible action or assistance provided to customers, fulfilling specific needs or tasks without producing a physical product.</p>
    <div className="pt-4 md:pt-[31px]">
    <div className="grid grid-cols-1 md:grid-cols-2 md:w-[1201px] h-[628px] md:h-[570px] gap-x-[20px] gap-y-[20px]">
            <div className="flex flex-col w-[312px] h-[340px] md:w-[588px] md:h-[278px] rounded-[10px] bg-white">
                <h3 className="text-[#04293C] text-lg font-semibold w-[262px] md:w-[417.3396301269531px] pl-[16px] md:pl-[42px] pt-[18px] md:pt-[34px]">Business Process Re-engineering</h3>
                <p className="text-[#04293C] md:w-[520px] h-[168px] md:h-[112px] text-[16px] font-medium pl-[16px] pr-[16px] md:pl-[42px] pt-[18px] leading-[28px]">Revitalize internal controls, enhance efficiency, and align organization strategically through thorough process evaluation, regular implementation, and compliance-auditing.</p>
                <a className="pl-[16px] md:pl-[42px] pt-10 md:pt-[34px] text-green-custom">Know More &#8594;</a>
            </div>
            <div className="flex flex-col w-[312px] h-[340px] md:w-[588px] md:h-[278px] rounded-[10px] bg-white">
                <h3 className="text-[#04293C] text-lg font-semibold w-[262px] md:w-[417.3396301269531px] pl-[16px] md:pl-[42px] pt-[18px] md:pt-[34px]">ERP Implementation</h3>
                <p className="text-[#04293C] w-[305px]  md:w-full h-[168px] md:h-[112px] text-[16px] font-medium pl-[16px] pr-[16px] md:pl-[42px] pt-[18px]  leading-[28px]">Optimize workflows and ensure functionality conformity with requirement definition, process mapping, testing, and outsourcing to ensure functional conformity.</p>
                <a className="pl-[16px] md:pl-[42px] pt-16 md:pt-[34px] text-green-custom">Know More &#8594;</a>
            </div>
            <div className="flex flex-col w-[312px] h-[340px] md:w-[588px] md:h-[278px] rounded-[10px] bg-white">
                <h3 className="text-[#04293C] text-lg font-semibold w-[262px] md:w-[417.3396301269531px] pl-[16px] md:pl-[42px] pt-[18px] md:pt-[34px]">Governance, Risk, and Compliance</h3>
                <p className="text-[#04293C] w-[305px]  md:w-[525px] h-[168px] md:h-[112px] text-[16px] font-medium pl-[16px] pr-[16px] md:pl-[42px] pt-[18px]  leading-[28px]">Ensure robust governance, compliance, and data security through effective risk management, specialized engagements, and data protection.</p>
                <a className="pl-[16px] md:pl-[42px] pt-10 md:pt-[34px] text-green-custom">Know More &#8594;</a>
            </div>
            <div className="flex flex-col w-[312px] h-[340px] md:w-[588px] md:h-[278px] rounded-[10px] bg-white">
                <h3 className="text-[#04293C] text-lg font-semibold w-[262px] md:w-[417.3396301269531px] pl-[16px] md:pl-[42px] pt-[18px] md:pt-[34px]">Financial Planning and Analysis</h3>
                <p className="text-[#04293C] w-[305px]  md:w-[525px] h-[168px] md:h-[112px] text-[16px] font-medium pl-[16px] pr-[16px] md:pl-[42px] pt-[18px]  leading-[28px]">Enable strategic financial management with reporting systems, capital advice, performance analysis, and stock exchange support, driving informed decision-making.</p>
                <a className="pl-[16px] md:pl-[42px] pt-10 md:pt-[34px] text-green-custom">Know More &#8594;</a>
            </div>
        </div>
      </div>
    </div>  
</section>

{/* Business Achievement Section (Mobile View) */}
<section className="md:hidden">
  <div className="bg-[#04293C] pt-14  w-[360px] h-[934px] flex flex-col items-center justify-center text-center gap-8 font-poppins-font"style={{ backgroundImage: "url('/images/bt-m.png')" }}>
    <h2 className="w-[238px] h-[92px] text-white text-[32px] font-semibold leading-[40px] font-poppins-font">
      Our Business Achievement
    </h2>
    <div className="flex flex-col items-center gap-8 w-full">
      <div className="flex flex-col items-center gap-4 ">
        <img src="/images/BA1.png" alt="Experience Icon" className="h-[60px] w-[60px]" />
        <h3 className="text-white text-[40px] font-epilogue  font-bold">15</h3>
        <p className="text-white font-400 font-Epilogue text-[20px] w-[121px] h-[64px] leading-[32px]">Years of experience</p>
      </div>
      <div className="w-[132px] h-[5px] rounded-[50px] rotate-180 mix-blend-overlay bg-[#5FA7BF]"></div>
      <div className="flex flex-col items-center gap-4">
        <img src="/images/BA2.png" alt="Projects Icon" className="h-[60px] w-[60px]" />
        <h3 className="text-white text-[40px] font-epilogue  font-bold">350+</h3>
        <p className="text-white font-400 font-Epilogue text-[20px] w-[121px] h-[64px] leading-[32px] ">Agency Members</p>
      </div>
      <div className="w-[132px] h-[5px] rounded-[50px] rotate-180 mix-blend-overlay bg-[#5FA7BF]"></div>
      <div className="flex flex-col items-center gap-4">
        <img src="/images/BA4.png" alt="Clients Icon" className="h-[60px] w-[60px]" />
        <h3 className="text-white text-[40px] font-epilogue font-bold">215</h3>
        <p className="text-white font-400 font-Epilogue text-[20px] w-[121px] h-[64px] leading-[32px]">Projects complete</p>
      </div>
    </div>
  </div>
</section>

{/* Financial Potential Section - Desktop View */}
<section id="financial-potential" className="hidden md:block">
    <div className="bg-[#04293C] w-full h-[337px] pb-10 flex flex-col items-center justify-center text-center gap-8 font-poppins-font" style={{ backgroundImage: "url('/images/gt-dv.png')"}}>
        <h3 className="w-[353px] h-[96px] text-white text-[32px] font-medium leading-[48px]">Unlock Your Financial Potential Today!</h3>
        <button className=" bg-green-custom w-[121px] px-2 py-2 text-white rounded-[4px] font-medium text-[16px] hover:bg-green-700 transition">Contact Us</button>    
    </div>
</section>

{/* Financial Potential Section - Mobile View */}
<section  className="md:hidden mt-[-1px]">
    <div className="bg-[#04293C] w-[360px] h-[256px] flex flex-col items-center justify-center text-center gap-8 font-poppins-font" style={{ backgroundImage: "url('/images/bt-m3.png')"}}>
        <h3 className="w-[281px] h-[60px] text-white text-[24px] font-medium leading-[30px]">Unlock Your Financial Potential Today!</h3>
        <button className=" bg-green-custom w-[121px] px-2 py-2 text-white rounded-[4px] font-medium text-[16px] hover:bg-green-700 transition">Contact Us</button>    
    </div>
</section>


{/* About Us Section Mobile View */}
<section id="about" className="md:hidden flex flex-col items-center gap-8 h-[1558px] mt-[36px] font-poppins-font bg-slate-100 w-[360px]">
        <h1 className="w-screen h-[54px] font-semibold text-[48px] font-poppins-font ml-[48px] mt-[42px] text-[#282938]">About us</h1>
        <p className="w-[312px] h-[112px] font-medium text-[16px] leading-[28px] text-[#282938]">Established in 2007 by experienced professionals, dedicated to providing quality client services with a focus on ethics, knowledge.</p>
        <div className="">
            <div className="relative">
                <img src="/images/GrpImg.png" className="w-[311px] h-[328px] rounded-[10px]" alt="Cropped Image" />
                <div className="grid grid-cols-1 gap-2 font-poppins-font mt-[42px]">
                    <div className="flex flex-col w-[312px] h-[212px]">
                        <img src="/images/Group1.png" className="w-[60px] h-[60px] rounded-md" alt="Image 1"/>
                        <h3 className="text-[24px] font-semibold mt-3 text-[#04293C]">Data Analytics</h3>
                        <p className="text-[16px] font-medium w-[312px] h-[84px] mt-2 leading-[28px] text-[#04293C]">Financial services are heavily regulated to ensure consumer protection.</p>
                    </div>

                    <div className="flex flex-col w-[312px] h-[198px] ">
                        <img src="/images/Group2.png" className="w-[60px] h-[60px]  rounded-md" alt="Image 2"/>
                        <h3 className="text-[24px] font-semibold mt-3 text-[#04293C]">Consumer Product</h3>
                        <p className="text-[16px] font-medium w-[312px] h-[84px] mt-2 leading-[28px] text-[#04293C]">A consumer product is any use or consumption by individuals.</p>
                    </div>

                    <div className="flex flex-col w-[312px] h-[198px]">
                        <img src="/images/Group3.png" className="w-[60px] h-[60px]  rounded-md" alt="Image 3"/>
                        <h3 className="text-[24px] font-semibold mt-3 text-[#04293C]">SEO</h3>
                        <p className="text-[16px] font-medium w-[312px] h-[84px] mt-2 leading-[28px] text-[#04293C]">Search Engine Optimization (SEO) is the online content to improve (SERPs).</p>
                    </div>

                    <div className="flex flex-col w-[312px] h-[198px]">
                        <img src="/images/Group4.png" className="w-[60px] h-[60px] rounded-md" alt="Image 4"/>
                        <h3 className="text-[24px] font-semibold mt-3 text-[#04293C]">Web Development</h3>
                        <p className="text-[16px] font-medium w-[312px] h-[84px] mt-2 leading-[28px] text-[#04293C]">Web development is the process of creating, building, web applications.</p>
                    </div>
                    <button className=" bg-green-custom w-[122px] h-[36px] flex items-center justify-center text-white text-[16px] font-semibold font-poppins-font rounded-[4px] hover:bg-green-700 transition">Know More</button>
               </div>
        </div>
        </div>
</section>

{/* Team Swiper Section */}
<TeamSwiper/>

{/* Business Achievement Section (Desktop View) */}
<section id="business-achievement" className="hidden md:block">
  <div className="bg-[#04293C] w-full h-[417px] flex flex-col items-center justify-center text-center gap-16 font-poppins-font" style={{ backgroundImage: "url('/images/bt-d1.png')"}}>
    <h2 className="w-[664px] h-[64px] text-white text-[48px] font-semibold leading-[64px] font-poppins-font">
      Our Business Achievement
    </h2>
    <div className="flex justify-evenly items-center w-[992px]">
      <div className="flex flex-col items-center">
        <img src="/images/BA1.png" alt="Experience Icon" className="h-[60px] w-[60px]" />
        <h3 className="text-white text-[36px] font-bold">15</h3>
        <p className="text-white font-normal font-epilogue text-[20px] w-[121px] h-[64px] leading-[32px]">Years of experience</p>
      </div>
      <div className="w-[132px] h-[5px] rounded-[50px] rotate-90 mix-blend-overlay bg-[#5FA7BF]"></div>
      <div className="flex flex-col items-center">
        <img src="/images/BA2.png" alt="Projects Icon" className="h-[60px] w-[60px]" />
        <h3 className="text-white text-[36px] font-bold">350+</h3>
        <p className="text-white font-normal font-epilogue text-[20px] w-[121px] h-[64px] leading-[32px] ">Agency Members</p>
      </div>
      <div className="w-[132px] h-[5px] rounded-[50px] rotate-90 mix-blend-overlay bg-[#5FA7BF]"></div>
      <div className="flex flex-col items-center">
        <img src="/images/BA4.png" alt="Clients Icon" className="h-[60px] w-[60px]" />
        <h3 className="text-white text-[36px] font-bold">215</h3>
        <p className="text-white font-normal font-epilogue text-[20px] w-[121px] h-[64px] leading-[32px]">Projects complete</p>
      </div>
    </div>
  </div>
</section>

{/* Testimonial Swiper Section */}
<section id="testimonial-swiper" className="flex justify-center h-auto py-[64px] pl-[24px]">
  <div className="w-[360px] md:h-[540px] md:w-[1201px] flex flex-col sm:items-start items-center gap-4 font-poppins-font">
    <h2 className="text-[32px] md:text-[48px] font-semibold mr-[120px] text-[#04293C]">Testimonial</h2>
    <p className="text-[16px] font-medium leading-[28px] w-[306px] md:w-[410px] h-[56px] text-[#04293C]">
      A short statement of our satisfied clients say for our service
    </p>
    <div className="hidden md:block w-[1201px] h-[312px]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={3}
        pagination={{
          clickable: true,
          type: 'bullets',
          el: '.testimonial-pagination',
        }}
        loop={false}
      >
        {Testimonial.map((member) => (
          <SwiperSlide key={member.id} className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-4 w-[379px] h-[312px] bg-white rounded-[10px] p-5 font-poppins-font shadow-lg border border-gray-300">
              <img src={member.icon} className="w-[30.36px] h-[24px]" alt={`${member.name} Image`} />
              <p className="text-[24px] font-medium leading-[30px] italic w-[310px] h-[126px] text-center text-[#04293C]">{member.text}</p>
              <div className="flex gap-4 w-[194.27px] h-[66px]">
                <img src={member.image} className="w-[66.78px] h-[66px] rounded-full" alt="Icon 1" />
                <div className="w-[143px] flex flex-col justify-center">
                  <h3 className="text-[20px] font-medium text-[#04293C] w-[143px]">{member.name}</h3>
                  <p className="text-[14px] font-medium text-[#04293C]">{member.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-pagination"></div>
    </div>

    {/* Mobile View */}
    <div className="w-full md:hidden flex justify-center">
      <Swiper
        modules={[Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        pagination={{ clickable: true, el: ".testimonial-pagination-mobile" }}
        loop={false}
      >
        {Testimonial.map((member) => (
          <SwiperSlide key={member.id} className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center gap-6 w-[272px] h-[248px] bg-white rounded-[10px] p-4 shadow-lg border border-gray-300 ml-[26px]">
              <img src={member.icon} className="w-[24px] h-[20px]" alt={`${member.name} Image`} />
              <p className="text-[16px] font-medium leading-[22px] italic w-[224.18px] h-[78px] text-center">
                {member.text}
              </p>
              <div className="flex gap-3 w-[185.32px] h-[66px]">
                <img src={member.image} className="w-[66.54px] h-[66px] rounded-full" alt="Client" />
                <div className="flex flex-col justify-center">
                  <h3 className="text-[14px] font-medium  text-[#04293C]">{member.name}</h3>
                  <p className="text-[12px] font-medium text-[#04293C]">{member.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    <div className="testimonial-pagination-mobile flex justify-center mt-4"></div>
  </div>
</section>
<Contact/>
<Details/>
<Footer/>


    </>
  )
}

export default Body