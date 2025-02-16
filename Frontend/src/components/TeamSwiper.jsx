import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";


const teamMembers = [
  { id: 1, name: "John Smith", role: "CEO", image: "/images/T1.png" },
  { id: 2, name: "Siman Adams", role: "CTO", image: "/images/T2.png" },
  { id: 3, name: "Paul Jones", role: "Design Lead", image: "/images/T3.png" },
  { id: 4, name: "Sara Hardin", role: "Project Manager", image: "/images/T4.png" },
  { id: 5, name: "John Smith", role: "CEO", image: "/images/T1.png" },
  { id: 6, name: "Siman Adams", role: "CTO", image: "/images/T2.png" },
  { id: 7, name: "Paul Jones", role: "Design Lead", image: "/images/T3.png"  },
  { id: 8, name: "Sara Hardin", role: "Project Manager", image: "/images/T4.png" },
  { id: 9, name: "John Smith", role: "CEO", image: "/images/T1.png" },
  { id: 10,name: "Siman Adams", role: "CTO", image: "/images/T2.png" },
  { id: 11, name: "Paul Jones", role: "Design Lead", image: "/images/T3.png"  },
  { id: 12, name: "Sara Hardin", role: "Project Manager", image: "/images/T4.png"  },
];

const teamMembers2 = [
  { id: 1, name: "John Smith", role: "CEO", image: "/images/T1.png" },
  { id: 2, name: "Jane Doe", role: "CTO, Company", image: "/images/T2.png" },
  { id: 3, name: "Michael Smith", role: "CFO, Company", image: "/images/T3.png" },
  { id: 4, name: "Emily Johnson", role: "COO, Company", image: "/images/T4.png" },
];

function TeamSwiper() {
  return (
    <>
    {/* Desktop Team Section */}
    <section id="meet-our-team" className="hidden md:flex justify-center mt-[54px] font-poppins-font">
      <div className="w-[1204px] h-[542px] flex flex-col gap-6">
        <h2 className="text-[48px] font-semibold text-[#04293C] leading-[64px] w-[373px] h-[64px]">Meet Our Team</h2>
        
        <div className="relative">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            slidesPerGroup={4}
            pagination={{
              clickable: true,
              el: ".custom-pagination ",
            }}
            loop={false} 
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id} className="flex justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-2 w-[277px] h-[322px] bg-white rounded-[10px] p-5 font-poppins-font shadow-lg border border-gray-300">
                  <img src={member.image} className="w-[157px] h-[157px] rounded-full mb-2" alt={`${member.name} Image`} />
                  <h6 className="text-[24px] font-medium leading-none text-[#1D2130]">{member.name}</h6>
                  <p className="text-[16px] font-medium  leading-none text-[#04293C] opacity-[0.7]">{member.role}</p>
                  <div className="flex gap-2 mt-2">
                    <img src="/images/I1.png" className="w-[20px] h-[20px]" alt="Icon 1" />
                    <img src="/images/I2.png" className="w-[20px] h-[20px]" alt="Icon 2" />
                    <img src="/images/I3.png" className="w-[20px] h-[20px]" alt="Icon 3" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="custom-pagination "></div>
        </div>
      </div>
    </section>

    {/* Mobile Team Section */}
    <section id="meet-our-team" className="md:hidden flex justify-center mt-6 font-poppins-font w-full max-w-[400px] pl-[24px]">
    <div className="w-[360px] max-w-xs flex flex-col gap-6">
      <h2 className="text-[32px] font-semibold text-[#04293C] h-[40px] w-[249px]">Meet Our Team</h2>
      
      <div className="relative">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{ clickable: true, el: ".custom-pagination-mobile" }}
          loop={false}
        >
          {teamMembers2.map((member) => (
            <SwiperSlide key={member.id} className="flex justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-2 w-[277px] h-[322px] bg-white rounded-lg p-5 shadow-lg border border-gray-300 font-poppins-font">
                <img src={member.image} className="w-[157px] h-[157px] rounded-full mb-4" alt={`${member.name} Image`} />
                <h6 className="text-[24px] font-medium text-[#04293C] leading-none">{member.name}</h6>
                <p className="text-[16px] font-medium text-[#04293C] leading-none opacity-[0.7]">{member.role}</p>
                <div className="flex gap-2 mt-2">
                  <img src="/images/I1.png" className="w-[20px] h-[20px]" alt="Icon 1" />
                  <img src="/images/I2.png" className="w-[20px] h-[20px]" alt="Icon 2" />
                  <img src="/images/I3.png" className="w-[20px] h-[20px]" alt="Icon 3" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="custom-pagination-mobile flex justify-center mt-4"></div>
      </div>
    </div>
  </section>
  </>
  );
}

export default TeamSwiper;
