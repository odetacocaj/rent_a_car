"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";
function MainBanner() {
  const handleScroll = () => {};
  return (
    <div className="main-banner">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="main-banner__title">
          Hit the road in style with our hassle-free car rentals!
        </h1>
        <p className="main-banner__subtitle">Book your car today and start your adventure!</p>

        <CustomButton
          title="Explore Cars"
          className="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="main-banner__image-container">
        <div className="main-banner__image">
          <Image src="/hero.png" alt="Car banner image" fill className="object-contain" />
        </div>
        <div className="main-banner__image-overlay"></div>
      </div>
    </div>
  );
}

export default MainBanner;
