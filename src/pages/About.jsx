import React from 'react';

const About = () => {
  return (
    <div className=" p-6">

      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-semibold text-yellow-500 font-serif italic mb-4">About Us</h1>
        <p className="text-xl font-serif italic text-white ">Learn more about our journey and what makes us special.</p>
      </section>

      {/* Mission & Vision Section */}
      <section className="mt-10">
        <h2 className="text-3xl font-semibold font-serif italic text-center mb-6 text-purple-800">Our Mission <span className='text-yellow-400'>& Vision</span></h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Mission */}
          <div className="p-6  rounded-lg shadow-md bg-purple-500 bg-opacity-35">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400 italic font-serif">Our Mission</h3>
            <p className="text-lg text-white font-serif italic">Our mission is to provide users with a seamless and enjoyable experience in booking their dream stays at the best hotels worldwide.</p>
          </div>

          {/* Vision */}
          <div className="p-6  rounded-lg shadow-md bg-purple-500 bg-opacity-40">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400 font-serif italic">Our Vision</h3>
            <p className="text-lg text-white font-serif italic">Our vision is to be the most trusted and innovative hotel booking platform globally, creating unforgettable experiences for our users.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mt-12">
        <h2 className="text-3xl font-semibold text-center mb-6 text-purple-800 font-serif italic">Meet Our <span className='text-yellow-400'>Team</span></h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Team Member 1 */}
          <div className="text-center p-6  rounded-lg shadow-md bg-purple-500 bg-opacity-40">
            <img src="https://www.columbuspm.org/wp-content/uploads/2015/09/team-member-sample.jpg"
             alt="Team Member 1" 
             className="mx-auto mb-4 w-36 h-36 rounded-full" />
            <h3 className="text-2xl font-semibold text-yellow-400 italic font-serif">John Doe</h3>
            <p className="text-white text-lg font-serif italic">Founder & CEO</p>
            <p className="mt-2 text-white font-serif italic">Passionate about creating innovative user experiences in the travel industry and building strong teams.</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center p-6  rounded-lg shadow-md bg-purple-500 bg-opacity-40">
            <img src="https://d1h36vgosc7o6x.cloudfront.net/web/production/uploads/gallery/blogs/13fb8897-cb4a-4047-a91f-79b25c0c24f3/asian-businesswoman-sitting-office-portrait-executive-woman.jpg?f=webp" 
            alt="Team Member 2" 
            className="mx-auto mb-4 w-36 h-36 rounded-full" />
            <h3 className="text-2xl font-serif italic font-semibold text-yellow-400">Jane Smith</h3>
            <p className="text-white text-lg font-serif italic">Co-Founder & CTO</p>
            <p className="mt-2 text-white font-serif italic">Focused on building robust and scalable systems to ensure platform reliability and security.</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center p-6  rounded-lg shadow-md bg-purple-500 bg-opacity-40">
            <img src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=" 
            alt="Team Member 3" 
            className="mx-auto mb-4 w-36 h-36 rounded-full" />
            <h3 className="text-2xl font-semibold text-yellow-400 font-serif italic">Michael Brown</h3>
            <p className="text-white text-lg font-serif italic">Head of Marketing</p>
            <p className="mt-2 text-white font-serif italic">Expert in marketing strategies, ensuring our platform reaches the right audience and grows rapidly.</p>
          </div>
        </div>
      </section>


      

    </div>
  );
};

export default About;
