// code
// import Form from '@components/contact/Form';
// import Info from '@components/contact/Info';
// import Landing from '@components/contact/landing';
import MaxWidth from '@components/layout/MaxWidth';
import Image from 'next/image';
import SectionHeader from '@components/layout/SectionHeader';
import FAQ from '@components/contact/faq';
import { RecruitmentProps } from '@interfaces/recruitment';
import ContactInfoCard from './ContactInfoCard';

const Contact = ({ departmentFaq }: RecruitmentProps) => {
  return (
    <>
      <MaxWidth>
        <div className="mb-20 flex">
          <div className="mt-3 flex flex-wrap text-[24.48px] font-bold leading-8 text-[#002750] ">
            <div className="relative h-[52px] w-[47.46px]  sm:h-[100px] sm:w-[91.27px]">
              <Image
                src="/images/recruitment/Recruitment-logo.jpg"
                alt="Recruitment Logo"
                layout="fill"
              />
            </div>
            <h1 className="ml-4 mt-3 border-b-2 border-[#002750] sm:ml-6 sm:mt-10 sm:border-b-4 sm:text-6xl sm:leading-[4.538rem]">
              Contact Us
            </h1>
          </div>
        </div>
        <div className="hidden md:block">
          <SectionHeader
            color="green"
            title="Frequently Asked Questions"
            subtitle="Have a burning question? We have an answer for you."
          />
        </div>
        <div className="md:hidden">
          <SectionHeader
            color="green"
            title="Frequently Asked Questions"
            subtitle=""
          />
        </div>
        <FAQ departmentFaq={departmentFaq} />
        {/* <div className="section-my flex w-full flex-wrap text-lg md:text-xl lg:justify-around">
          <div className="mb-10 w-full lg:order-2 lg:flex lg:w-1/2">
            <div className="lg:w-5/6">
              <Info />
            </div>
          </div>
          <div className="w-full lg:order-1 lg:w-1/2">
            <div className="lg:w-5/6">
              <Form />
            </div>
          </div>
        </div> */}
      </MaxWidth>
      <ContactInfoCard />
    </>
  );
};

export default Contact;
