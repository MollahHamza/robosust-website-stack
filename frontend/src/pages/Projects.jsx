import { useState, useEffect } from 'react';
import { getProjects } from '../api';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="page-header" style={{ backgroundImage: 'url(/assets/images/home/cover-3.png)' }}>
        <div className="container">
          <h1>Projects</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Innovation in Robotics</p>
        </div>
      </div>

      {/* Projects Section */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title">Current Projects</h2>
            <p className="section-subtitle">
              Explore our ongoing and completed projects pushing the boundaries of robotics technology.
            </p>
          </div>

          <div className="grid grid-3">
            {(projects.length > 0 ? projects : fallbackProjects).map((project, index) => (
              <div key={index} className="card">
                <img src={project.image} alt={project.title} className="card-img" />
                <div className="card-body">
                  <div style={{ marginBottom: '10px' }}>
                    <span className={`badge ${project.status === 'completed' ? 'badge-success' : 'badge-warning'}`}>
                      {project.status}
                    </span>
                  </div>
                  <h3 className="card-title">{project.title}</h3>
                  <p className="card-text">{project.description}</p>
                  {(project.github || project.demo) && (
                    <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                          GitHub
                        </a>
                      )}
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-accent">
                          Demo
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const fallbackProjects = [
  {
    title: 'Sign Language Recognition System',
    description: 'An IoT-based system that recognizes sign language gestures and converts them to text and speech.',
    image: '/assets/images/project/1.jpg',
    status: 'completed'
  },
  {
    title: 'Autonomous Water Vehicle',
    description: 'A self-navigating water vehicle with advanced collision avoidance capabilities.',
    image: '/assets/images/project/2.jpg',
    status: 'ongoing'
  },
  {
    title: 'Ribo - Social Humanoid Robot',
    description: "Bangladesh's first social humanoid robot that can speak Bengali.",
    image: '/assets/images/home/intro-1.jpeg',
    status: 'completed'
  }
];

export default Projects;
