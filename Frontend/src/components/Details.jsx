
function Details() {
  return (
    <>
    <section className="hidden md:flex justify-center relative w-full h-[190px] bg-white">
            <div className="bg-[#04293C] w-[1200px] h-[190px] flex justify-between px-8 items-center  text-white font-poppins-font rounded-[10px] absolute top-[95px] ">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center w-[177px] gap-6 ">
                        <img src="/images/phone.png" className="w-[60px] h-[60px]"/>
                        <p className="text-[24px] font-semibold">Phone</p>
                        </div>
                        <p className="text-[16px] font-medium">+91 XXXXXXXXXX</p>
                    </div>
                    <div className="w-[132px] h-[5px] rounded-[50px] rotate-90 mix-blend-overlay bg-[#5FA7BF]"></div>

                    <div className="flex flex-col gap-6">
                    <div className="flex items-center w-[177px] gap-6 ">
                        <img src="/images/email.png" className="w-[60px] h-[60px]"/>
                        <p className="text-[24px] font-semibold">Email</p>
                        </div>
                        <p className="text-[16px] font-medium">Copyright @2023, Promoveo Consulting</p>
                    </div>
                    <div className="w-[132px] h-[5px] rounded-[50px] rotate-90 mix-blend-overlay bg-[#5FA7BF]"></div>
                    <div className="flex flex-col gap-6">
                    <div className="flex items-center w-[177px] gap-6 ">
                        <img src="/images/address.png" className="w-[60px] h-[60px]"/>
                        <p className="text-[24px] font-semibold">Address</p>
                        </div>
                        <p className="text-[16px] font-medium">Jammi Building, Chennai, 600 004</p>
                    </div>
            </div>
    </section>
    <section className="md:hidden relative w-full h-[702px] bg-white flex justify-center items-center">
      <div className="bg-[#04293C] w-full h-[702px] flex flex-col justify-center gap-4 py-16 px-8 items-center text-white font-poppins-font ">
        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center gap-6">
            <img src="/images/phone.png" className="w-[60px] h-[60px]" />
            <p className="text-[24px] font-semibold">Phone</p>
          </div>
          <p className="text-[16px] font-medium text-center">+91 XXXXXXXXXX</p>
        </div>
        <div className="p-4">
  <div className="w-[132px] h-[5px] rounded-[50px] bg-[#11546a]"></div>
</div>

        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center gap-6">
            <img src="/images/email.png" className="w-[60px] h-[60px]" />
            <p className="text-[24px] font-semibold">Email</p>
          </div>
          <p className="text-[16px] w-[320px] font-medium leading-[32px] text-center">Copyright @2023,Promoveo Consulting</p>
        </div>

        <div className="p-4">
  <div className="w-[132px] h-[5px] rounded-[50px] bg-[#11546a]"></div>
</div>

        <div className="flex flex-col gap-6 items-center">
          <div className="flex flex-col items-center gap-6">
            <img src="/images/address.png" className="w-[60px] h-[60px]" />
            <p className="text-[24px] font-semibold">Address</p>
          </div>
          <p className="text-[16px] w-[313px] font-medium text-center">Jammi Building, Chennai, 600 004</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Details