import { useState, useEffect } from 'react';
import { getAchievements, getInitiatives, getWorkshops, getAlumni } from '../api';

function Home() {
  const [achievements, setAchievements] = useState([]);
  const [initiatives, setInitiatives] = useState([]);
  const [workshops, setWorkshops] = useState([]);
  const [alumni, setAlumni] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [achRes, initRes, workRes, alumRes] = await Promise.all([
          getAchievements(),
          getInitiatives(),
          getWorkshops(),
          getAlumni()
        ]);
        setAchievements(achRes.data);
        setInitiatives(initRes.data);
        setWorkshops(workRes.data);
        setAlumni(alumRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Use fallback data if API fails
        setAchievements(fallbackAchievements);
        setInitiatives(fallbackInitiatives);
        setWorkshops(fallbackWorkshops);
        setAlumni(fallbackAlumni);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/assets/images/home/cover-1.jpeg)' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">RoboSUST</h1>
          <p className="hero-subtitle">Robotics for Glory</p>
        </div>
      </section>

      {/* About Section */}
      <section className="section bg-white text-center">
        <div className="container">
          <h2 className="section-title">About RoboSUST</h2>
          <p className="section-subtitle">
            The only research-based robotics club of Shahjalal University of Science and Technology.
            We aspire to teach robotics education and represent Bangladesh on international platforms.
          </p>
          <div className="grid grid-3">
            <div className="card">
              <img src="/assets/images/home/intro-1.jpeg" alt="Ribo" className="card-img" />
              <div className="card-body">
                <h3 className="card-title">Ribo</h3>
                <p className="card-text">First social interaction robot in Bangladesh that can speak Bengali.</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/images/home/intro-2.webp" alt="Li" className="card-img" />
              <div className="card-body">
                <h3 className="card-title">Li</h3>
                <p className="card-text">Advanced humanoid robot with improved AI capabilities.</p>
              </div>
            </div>
            <div className="card">
              <img src="/assets/images/home/sustset.png" alt="SUSTsat-1" className="card-img" style={{ objectFit: 'contain', background: '#f5f5f5' }} />
              <div className="card-body">
                <h3 className="card-title">SUSTsat-1</h3>
                <p className="card-text">Cubesatellite project representing SUST in space technology.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section-banner" style={{ backgroundImage: 'url(/assets/images/home/agpbanner.png)' }}>
        <div className="container text-center text-white">
          <h2 className="section-title" style={{ color: '#fff' }}>Achievements</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            65+ robotics contest title wins and counting
          </p>
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            {(achievements.length > 0 ? achievements : fallbackAchievements).map((item, index) => (
              <div key={index} className="card">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ongoing Initiatives Section */}
      <section className="section-banner" style={{ backgroundImage: 'url(/assets/images/home/ongoing.jpg)' }}>
        <div className="container text-center text-white">
          <h2 className="section-title" style={{ color: '#fff' }}>Ongoing Initiatives</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pushing the boundaries of robotics in Bangladesh
          </p>
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            {(initiatives.length > 0 ? initiatives : fallbackInitiatives).map((item, index) => (
              <div key={index} className="card">
                <img src={item.image} alt={item.title} className="card-img" style={{ objectFit: 'contain', background: '#1a1a2e', padding: '20px' }} />
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-text">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section className="section-banner" style={{ backgroundImage: 'url(/assets/images/home/workshopandseminar.jpg)' }}>
        <div className="container text-center text-white">
          <h2 className="section-title" style={{ color: '#fff' }}>Workshops & Seminars</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Empowering the next generation of roboticists
          </p>
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            {(workshops.length > 0 ? workshops : fallbackWorkshops).map((item, index) => (
              <div key={index} className="card">
                <img src={item.image} alt={item.title} className="card-img" />
                <div className="card-body">
                  <h3 className="card-title">{item.title}</h3>
                  {item.description && <p className="card-text">{item.description}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section className="section-banner" style={{ backgroundImage: 'url(/assets/images/home/robosustal.jpg)' }}>
        <div className="container text-center text-white">
          <h2 className="section-title" style={{ color: '#fff' }}>Alumni Network</h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Our alumni making an impact worldwide
          </p>
          <div className="grid grid-3" style={{ marginTop: '40px' }}>
            {(alumni.length > 0 ? alumni : fallbackAlumni).map((item, index) => (
              <div key={index} className="alumni-card" style={{ background: 'rgba(255,255,255,0.95)', borderRadius: '10px' }}>
                <img src={item.image} alt={item.name} className="alumni-img" />
                <h4 className="alumni-name" style={{ color: '#161616' }}>{item.name}</h4>
                <p className="alumni-info">{item.department}, Batch {item.batch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

// Fallback data when API is unavailable
const fallbackAchievements = [
  { title: 'NASA Space Apps Challenge 2024', description: 'Team EcoQuest secured notable position with innovative environmental monitoring solution.', image: '/assets/images/work/NasaSpaceApp.jpg' },
  { title: 'BUET Chemical Fest 2024', description: 'Team ঘোড়ার গাড়ি showcased exceptional performance in the ChemiCar segment.', image: '/assets/images/work/Ghorar_gari.jpg' },
  { title: 'Smart Unibator Innovation Hub', description: 'Team Automama represented SUST with their autonomous vehicle project.', image: '/assets/images/work/Unovationhub_1.jpg' },
  { title: 'KUET LFR Contest', description: 'Team Void Sust achieved remarkable success in the KUET Calibration LFR Contest.', image: '/assets/images/work/KUET-1.jpg' },
  { title: 'BRAC IEEE Satellite Expedition', description: 'Team Ethereal Luminary participated in BRAC University IEEE Satellite competition.', image: '/assets/images/work/Comsot.jpg' },
  { title: 'KUET LFR Champion', description: 'Team SUST Mavericks emerged as champions in the Line Follower Robot segment.', image: '/assets/images/work/KUET-2.jpg' }
];

const fallbackInitiatives = [
  { title: 'Automama', description: "Bangladesh's first Level 2 autonomous car with lane keeping and collision avoidance.", image: '/assets/images/home/automama.png' },
  { title: 'Orca', description: 'Autonomous Underwater Vehicle (AUV) for underwater exploration and research.', image: '/assets/images/home/orca.png' },
  { title: 'ChemiCar', description: 'Custom battery powered car with color sensor based stopping mechanism.', image: '/assets/images/home/chemicar.png' }
];

const fallbackWorkshops = [
  { title: 'AI Awareness Workshop', description: 'AI awareness workshop in JSPSC', image: '/assets/images/workshop/1.jpg' },
  { title: 'Robotics Fundamentals', description: 'Introduction to robotics workshop', image: '/assets/images/workshop/2.jpg' },
  { title: 'Arduino Workshop', description: 'Hands-on Arduino programming session', image: '/assets/images/workshop/3.jpg' },
  { title: 'PCB Design Workshop', description: 'PCB design and fabrication training', image: '/assets/images/workshop/4.jpg' },
  { title: 'IoT Workshop', description: 'Internet of Things fundamentals', image: '/assets/images/workshop/5.jpg' },
  { title: 'Machine Learning Seminar', description: 'Introduction to ML for robotics', image: '/assets/images/workshop/6.jpg' }
];

const fallbackAlumni = [
  { name: 'Noushad Sojib', department: 'CSE', batch: '2009-10', image: '/assets/images/home/members/Nowshad.png' },
  { name: 'Md Farhanul Islam', department: 'EEE', batch: '2012-13', image: '/assets/images/home/members/Farhanul.png' },
  { name: 'Taufiq Rahman', department: 'IPE', batch: '2013-14', image: '/assets/images/home/members/Tawfiq.png' },
  { name: 'Umme Sumaya Jannat', department: 'CSE', batch: '2014-15', image: '/assets/images/home/members/Umme Sumaya Jannat.png' },
  { name: 'Ali Tarique Zaman', department: 'CEE', batch: '2015-16', image: '/assets/images/home/members/Ali Tarique Zaman.png' },
  { name: 'Anamul Haque', department: 'MEE', batch: '2016-17', image: '/assets/images/home/members/Anamul.png' }
];

export default Home;
