const Footer = () => {
  return (
    <>
      <div>
        <div className="bg-red-700 border-t-2 w-full bottom-0 ">
          <div className="text-gray-50 flex items-center justify-between mx-2 gap-2 md:mx-10 py-2">
            <div className="text-xs md:text-base">
              @{new Date().getFullYear()}, All Rights Reserved | Privacy | Terms
              of Service
            </div>
            <p className="text-xs md:text-base">Made By Rahul R Yadav</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
