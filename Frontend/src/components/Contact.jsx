import '../styles/contact.css';

function Contact() {

  return (
    <>
    <section className='flex justify-center items-center bg-secondary gap-12 px-5 py-10 bg-slate-100 md:h-[560px] min-w-full font-poppins-font' id='contact'>
      <div className='flex flex-col w-[313px] md:w-[664px] '>
          <h2 className='text-[48px] w-[269px] h-[64px] mb-5 font-semibold text-[#04293C]'>Contact Us</h2>
          <form className='flex flex-col gap-4 pb-5 w-full max-w-2xl'>
              <div className='flex flex-col gap-2 w-full'>
                  <h3 className='text-[16px] font-semibold text-[#04293C]'>Name</h3>
                  <input name='name' className='rounded-[8px] h-[52px] py-[12px] px-[32px] w-full md:w-full text-black text-[14px] font-normal' type='text' placeholder='Enter your name'/>
              </div>
              <div className='flex flex-col md:flex-row gap-4 w-full'>
                <div className='flex flex-col gap-2 w-full md:w-1/2'>
                <h3 className='text-[16px] font-semibold text-[#04293C]'>Phone</h3>
                <input name='mobile' className='rounded-[8px] h-[52px] py-[12px] px-[32px] w-full text-[14px] font-normal  text-black' type='number' placeholder='Enter your phone number'/>
                </div>
                <div className='flex flex-col gap-2 w-full md:w-1/2'>
                <h3 className='text-[16px] font-semibold text-[#04293C]'>Email</h3>
                <input name='email' className='rounded-[8px] h-[52px] py-[12px] px-[32px] w-full text-[14px] font-normal text-black' type='email' placeholder='Enter your email'/>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
              <h3 className='text-[16px] font-semibold text-[#04293C]'>Message</h3>
              <textarea name='message' className='rounded-[8px] pt-[12px] pb-[48px] px-[32px]  w-full h-[88px] text-[14px] font-normal text-black' cols="30" rows="6" placeholder='Enter your message'></textarea>
              </div>
              <button className=" bg-green-custom w-[90px] h-[36px]  text-white md:mt-4 rounded-[4px]">Submit</button>    
          </form>
          <img src='/images/Contact.png' className='md:hidden w-[251px] h-[284.9986267089844] md:w-[496.86px] md:h-[476px]'/>
      </div>
      <img src='/images/Contact.png' className='hidden md:block w-[251px] h-[284.9986267089844] md:w-[496.86px] md:h-[476px]'/>
  </section>
    </>
  )
}

export default Contact
