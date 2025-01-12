import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ProfileCardData {
    description: string;
    socialMediaIcon: string;
    name: string;
    oneLineDescription: string;
    profilePhoto: string;
}

interface ProfileCardSliderProps {
    profiles: ProfileCardData[]; 
}

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const ProfileCardSlider: React.FC<ProfileCardSliderProps> = ({ profiles }) => {
    return (
        <Slider {...settings}>
            {profiles.map((profile, index) => (
                <div key={index} className="profile-card flex  p-4 min-h-[50rem] min-w-35rem gap-[2rem] bg-[#e5ebdd] m-[2rem] border border-white">
                    <div className='flex flex-col justify-between h-full  gap-[2rem] p-4'>
                        <div className='flex h-[50%]'>
                            <p className="description mb-[3rem] text-[#325442] text-[1.5rem]">{profile.description}</p>
                        </div>
                        <div className='flex flex-col h-[50%]'>
                            <img src={profile.socialMediaIcon} alt="Social Media Icon" className="social-media-icon mb-2 w-8 h-8" />
                            <h2 className="name text-xl font-semibold">{profile.name}</h2>
                            <p className="one-line-description text-[1.2rem] font-light mb-2 text-gray-500">{profile.oneLineDescription}</p>
                            <img src={profile.profilePhoto} alt="Profile" className="profile-photo" />
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
};

export default ProfileCardSlider;
