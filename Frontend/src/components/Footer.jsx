
function Footer() {
  return (
    <>
    {/* Desktop View */}
    <section id="footer" className="hidden md:flex flex-col  items-center bg-[#1D2122] w-full h-[491px] ">
        <div className="flex flex-col justify-between w-[1202px] h-[253px] mt-[160px]">
        <div className="flex justify-between text-white">
            <div className="flex flex-col gap-8">
                <p className="text-[16px] font-semibold">Social Links</p>
                <div className="flex gap-2">
                    <img src="/images/facebook.png" className="w-[40px] h-[40px]"/>
                    <img src="/images/twit.png" className="w-[40px] h-[40px]"/>
                    <img src="/images/instagram.png" className="w-[40px] h-[40px]"/>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold">Menu</p>
                <div className="text-[16px] font-normal text-[#A3A3A3] flex-col gap-4">
                    <p>About</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold">Service</p>
                <div className="text-[16px] font-normal text-[#A3A3A3] flex-col gap-4">
                    <p>Design</p>
                    <p>Development</p>
                    <p>Marketing</p>
                    <p>See More</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold">Subscribe</p>
                <p className="text-[16px] font-normal text-[#A3A3A3] w-[251px]">leap into electronic remaining essentially unchanged.</p>
                <div className="flex gap-2">
                <input name='email' className='rounded-[4px] p-4 h-[36px] w-[155px] text-[12px] font-medium text-[#A3A3A3] bg-[#1D2122] border border-white' type='email' placeholder='Enter your email'/>
                <button className=" bg-green-custom px-1 py-1 text-white rounded-[4px] w-[73px] h-[36px] hover:bg-green-700 transition">Send</button> 
                </div>
            </div>
        </div>
        <div className="flex justify-center">
        <div className="w-[1170px] h-[1px] bg-[#F5F5F5] mix-blend-overlay"></div>
        </div>
        <div className="flex justify-between">
           <p className="text-[16px] font-normal text-[#A3A3A3]">Copyright © 2023 pmcmarkagency. All Rights Reserved.</p>
           <div className="flex justify-between gap-24">
            <p className="text-[16px] font-normal text-[#A3A3A3]">Terms of Use</p>
            <p className="text-[16px] font-normal text-[#A3A3A3]">Privacy Policy</p>
           </div>
        </div>
        </div>
    </section>


    {/* Mobile View */}
    <section id="footer" className="bg-[#1D2122] w-full max-w-[400px] h-[888px] flex flex-col items-center font-poppins-font gap-4 py-14 md:hidden ">
        <div className="flex flex-col justify-between gap-8 text-white">
            <div className="flex flex-col gap-8">
                <p className="text-[16px] font-semibold">Social Links</p>
                <div className="flex gap-2">
                    <img src="/images/facebook.png" className="w-[40px] h-[40px]"/>
                    <img src="/images/twit.png" className="w-[40px] h-[40px]"/>
                    <img src="/images/instagram.png" className="w-[40px] h-[40px]"/>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold">Menu</p>
                <div className="text-[16px] font-normal text-[#A3A3A3] flex-col gap-4">
                    <p>About</p>
                    <p>Services</p>
                    <p>Blog</p>
                    <p>Contact</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold">Service</p>
                <div className="text-[16px] font-normal text-[#A3A3A3] flex-col gap-4">
                    <p>Design</p>
                    <p>Development</p>
                    <p>Marketing</p>
                    <p>See More</p>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <p className="text-[16px] font-semibold">Subscribe</p>
                <p className="text-[16px] font-normal text-[#A3A3A3] w-[251px]">leap into electronic remaining essentially unchanged.</p>
                <div className="flex flex-col gap-2">
                <input name='email' className='rounded-[4px] p-4 h-[36px] w-[155px] text-[12px] font-medium text-[#A3A3A3] bg-[#1D2122] border border-white' type='email' placeholder='Enter the email'/>
                <button className=" bg-green-custom px-1 py-1 text-white rounded-[4px] w-[73px] h-[36px] hover:bg-green-700 transition">Send</button> 
                </div>
            </div>
        </div>
        <div className="flex flex-col justify-center">
        <div className="w-[313px] h-[1px] bg-[#F5F5F5] mix-blend-overlay"></div>
        </div>
        <div className="flex flex-col pl-12 gap-2">
        <div className="flex flex-col gap-2">
            <p className="text-[16px] font-normal text-[#A3A3A3]">Terms of Use</p>
            <p className="text-[16px] font-normal text-[#A3A3A3]">Privacy Policy</p>
        </div>
        <div className="flex flex-col">
           <p className="text-[16px]  w-[298px] h-[48px] font-normal text-[#A3A3A3]">Copyright © 2023 pmcmarkagency. All Rights Reserved.</p>
        </div>
        </div>
    </section>
    </>
  )
}

export default Footer