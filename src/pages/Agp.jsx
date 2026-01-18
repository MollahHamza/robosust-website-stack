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

            {/* AGP V7.0 Section */}
            <section style={{ maxWidth: '90%', margin: '40px auto', padding: '30px', background: '#fff3cd', borderRadius: '12px', boxShadow: '0px 5px 15px rgba(0,0,0,0.1)', textAlign: 'center', borderLeft: '8px solid #ff9800', transition: '0.3s ease-in-out' }}>
                <h2 style={{ color: '#d61c4e', fontSize: '36px', marginBottom: '15px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    🚀 Auto Grand Prix V7.0 🚀
                </h2>
                <p style={{ color: '#333', fontSize: '20px', lineHeight: '1.8', marginBottom: '20px', padding: '0 10px' }}>
                    It's finally time to unveil our much-awaited flagship event on campus—<strong>"Auto Grand Prix V7.0"</strong>—marking its <strong>seventh consecutive year!</strong>
                </p>
                <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.7', marginBottom: '20px', padding: '0 10px' }}>
                    This event is your chance to put what you learned in the LFR workshop into practice. But more than that,
                    it's a stepping stone into the world of <strong>competitive robotics</strong>, opening doors to endless opportunities.
                </p>
                <p style={{ color: '#333', fontSize: '20px', fontWeight: 'bold', background: '#ff9800', padding: '10px 15px', borderRadius: '8px', display: 'inline-block' }}>
                    🏆 Prize Pool: 8K! 🥇 Winner: 5K 🥈 Runner-up: 3K
                </p>
                <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.7', marginTop: '20px' }}>
                    📍 <strong>Venue:</strong> IICT Building, 2nd Floor, SUST
                    <br />
                    🔗 <strong>Registration Link:</strong>{' '}
                    <a href="https://forms.gle/BBsCeWc5SA718fZu6" target="_blank" rel="noopener noreferrer" style={{ color: '#d61c4e', textDecoration: 'none', fontWeight: 'bold' }}>
                        Register Now!
                    </a>
                    <br />
                    📅 <strong>Deadline:</strong> 20th February, 2025
                </p>

                <p id="countdown" style={{ color: '#d61c4e', fontSize: '24px', fontWeight: 'bold', marginTop: '20px' }}></p>

                <p style={{ color: '#d61c4e', fontSize: '22px', fontWeight: 'bold', textTransform: 'uppercase', marginTop: '20px' }}>
                    Don't miss this opportunity! Register NOW! 🚀
                </p>
            </section>
        </>
    );
};

export default Agp;
