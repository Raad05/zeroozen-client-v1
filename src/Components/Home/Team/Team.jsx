import React from 'react';
import TeamMember from '../TeamMember/TeamMember';

const Team = () => {
    const members = [
        { id: 1, name: 'Nahid Hasan', role: 'Founder and CEO', linkedIn: 'https://www.linkedin.com/in/nahidtg/' },
        { id: 2, name: 'Asif Ahnaf', role: 'Chief Evangelist', linkedIn: 'https://www.linkedin.com/in/asifahnaf/' },
        { id: 3, name: 'Shafayat Hossain', role: 'Chief Strategy Officer', linkedIn: 'https://www.linkedin.com/in/shafayathossain/' },
        { id: 4, name: 'Irfanul Arefin', role: 'Chief Technology Officer', linkedIn: 'https://www.linkedin.com/in/irfanul-arefin-3746b31a7/' },
        { id: 5, name: 'Ahnaf Atef', role: 'Chief Product Officer', linkedIn: 'https://www.linkedin.com/in/ahnaf-atef-20/' },
        { id: 6, name: 'Ashabul Yamin Raad', role: 'Software Engineer', linkedIn: 'https://www.linkedin.com/in/yaminraad/' },
        { id: 7, name: 'Mustafa Redwanul Kawsar Nehal', role: 'Creative Lead', linkedIn: 'https://www.linkedin.com/in/mustafa-redwanul-kawsar-nehal-2b6417131/' },
    ];

    return (
        <div id='team-section' className='team mb-0 md:mb-20'>
            <h3 className='text-yellow-500 text-xl md:text-5xl text-center py-5 font-bold' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500">Our Team</h3>
            {/* <p className='text-white text-md md:text-2xl text-center mx-10 md:mx-0' data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="1000">We are on a mission to unlock freedom for Electric Vehicles in Bangladesh.</p> */}
            <div className="container grid grid-cols md:grid-cols-3 mx-auto gap-y-4 md:gap-y-5 my-20 px-2 md:px-40" data-aos="fade-up" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-delay="500">
                {
                    members.map(member => <TeamMember
                        key={member.id}
                        member={member}
                    >
                    </TeamMember>)
                }
            </div>
        </div>
    );
};

export default Team;