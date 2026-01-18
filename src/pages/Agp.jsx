import React from 'react';

const Agp = () => {
    return (
        <>
            {/* Header */}
            <section className="py-9 overflow-hidden text-center">
                <div
                    className="background-holder overlay overlay-1 parallax"
                    style={{ backgroundImage: 'url(/assets/images/home/agpbanner.png)' }}
                ></div>
                <div className="container">
                    <div className="row" data-zanim-timeline="{}" data-zanim-trigger="scroll">
                        <div className="col">
                            <div className="overflow-hidden">
                                <h1 className="fs-5 fs-sm-6 color-white mb-3" data-zanim='{"delay":0}'>AGP</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About AGP Section */}
            <section style={{ maxWidth: '90%', margin: 'auto', padding: '30px', background: '#ffffff', borderRadius: '12px', boxShadow: '0px 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', transition: '0.3s ease-in-out', marginTop: '40px' }}>
                <h2 style={{ color: '#d61c4e', fontSize: '40px', marginBottom: '15px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    🚀 Auto Grand Prix (AGP) 🚀
                </h2>
                <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.8', marginBottom: '20px', padding: '0 10px' }}>
                    <strong>Auto Grand Prix (AGP)</strong> is an exciting <span style={{ color: '#d61c4e', fontWeight: 'bold' }}>line follower robot competition</span> designed for the <strong>freshers of Robo SUST</strong>.
                    This event serves as a gateway for newcomers to explore <strong>robotics, automation,</strong> and <strong>artificial intelligence.</strong>
                    Participants will build and program <strong>autonomous robots</strong> to navigate a track with speed and precision.
                    AGP is more than just a competition—it's a <span style={{ color: '#d61c4e', fontWeight: 'bold' }}>learning experience</span> that fosters creativity,
                    problem-solving, and technical skills.
                </p>
                <p style={{ color: '#d61c4e', fontSize: '24px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '20px' }}>
                    Join AGP & Kickstart Your Robotics Journey! 🚀
                </p>
            </section>

            {/* AGP Coming Soon V8 Section */}
            <section style={{ maxWidth: '90%', margin: '40px auto', padding: '50px 30px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '12px', boxShadow: '0px 8px 20px rgba(0,0,0,0.2)', textAlign: 'center', transition: '0.3s ease-in-out' }}>
                <h2 style={{ color: '#ffffff', fontSize: '48px', marginBottom: '20px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    🎯 Auto Grand Prix V8.0 🎯
                </h2>
                <p style={{ color: '#f0f0f0', fontSize: '28px', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Coming Soon!
                </p>
                <p style={{ color: '#ffffff', fontSize: '20px', lineHeight: '1.8', marginBottom: '25px', padding: '0 20px', maxWidth: '800px', margin: '0 auto 25px' }}>
                    Get ready for the <strong>8th edition</strong> of our flagship robotics competition!
                    The biggest and most exciting AGP event yet is on the horizon.
                </p>
                <p style={{ color: '#fff3cd', fontSize: '24px', fontWeight: 'bold', marginTop: '30px' }}>
                    🚀 Stay Tuned for Updates! 🚀
                </p>
                <p style={{ color: '#ffffff', fontSize: '16px', marginTop: '20px', opacity: 0.9 }}>
                    Follow us on social media for registration details and event announcements
                </p>
            </section>
        </>
    );
};

export default Agp;
