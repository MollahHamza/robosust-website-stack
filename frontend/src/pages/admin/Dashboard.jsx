import { useState, useEffect } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import {
  checkAuth, logout, seedData,
  getAchievements, createAchievement, updateAchievement, deleteAchievement,
  getInitiatives, createInitiative, updateInitiative, deleteInitiative,
  getWorkshops, createWorkshop, updateWorkshop, deleteWorkshop,
  getAlumni, createAlumni, updateAlumni, deleteAlumni,
  getProjects, createProject, updateProject, deleteProject,
  getBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost,
  getForumPosts, deleteForumPost
} from '../../api';

function Dashboard() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const res = await checkAuth();
        if (res.data.authenticated) {
          setAuthenticated(true);
        } else {
          navigate('/admin');
        }
      } catch (error) {
        navigate('/admin');
      } finally {
        setLoading(false);
      }
    };
    checkAuthentication();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/admin');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleSeedData = async () => {
    try {
      await seedData();
      alert('Data seeded successfully!');
      window.location.reload();
    } catch (error) {
      console.error('Seed error:', error);
      alert('Error seeding data');
    }
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div className="spinner"></div>
      </div>
    );
  }

  if (!authenticated) return null;

  return (
    <div className="admin-container">
      <aside className="admin-sidebar">
        <div style={{ padding: '20px 25px', borderBottom: '1px solid var(--color-2)' }}>
          <h3 style={{ color: '#fff', fontSize: '1.2rem' }}>RoboSUST Admin</h3>
        </div>
        <nav style={{ marginTop: '20px' }}>
          <NavLink to="/admin/dashboard" end className="admin-nav-link">Dashboard</NavLink>
          <NavLink to="/admin/dashboard/achievements" className="admin-nav-link">Achievements</NavLink>
          <NavLink to="/admin/dashboard/initiatives" className="admin-nav-link">Initiatives</NavLink>
          <NavLink to="/admin/dashboard/workshops" className="admin-nav-link">Workshops</NavLink>
          <NavLink to="/admin/dashboard/alumni" className="admin-nav-link">Alumni</NavLink>
          <NavLink to="/admin/dashboard/projects" className="admin-nav-link">Projects</NavLink>
          <NavLink to="/admin/dashboard/blog" className="admin-nav-link">Blog</NavLink>
          <NavLink to="/admin/dashboard/forum" className="admin-nav-link">Forum</NavLink>
        </nav>
        <div style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', padding: '0 25px' }}>
          <button onClick={handleLogout} className="btn btn-sm" style={{ width: '100%', background: 'rgba(255,255,255,0.1)', color: '#fff', border: 'none' }}>
            Logout
          </button>
        </div>
      </aside>

      <main className="admin-content">
        <Routes>
          <Route path="dashboard" element={<DashboardHome onSeedData={handleSeedData} />} />
          <Route path="dashboard/achievements" element={<CrudPage title="Achievements" fetchFn={getAchievements} createFn={createAchievement} updateFn={updateAchievement} deleteFn={deleteAchievement} fields={achievementFields} />} />
          <Route path="dashboard/initiatives" element={<CrudPage title="Initiatives" fetchFn={getInitiatives} createFn={createInitiative} updateFn={updateInitiative} deleteFn={deleteInitiative} fields={initiativeFields} />} />
          <Route path="dashboard/workshops" element={<CrudPage title="Workshops" fetchFn={getWorkshops} createFn={createWorkshop} updateFn={updateWorkshop} deleteFn={deleteWorkshop} fields={workshopFields} />} />
          <Route path="dashboard/alumni" element={<CrudPage title="Alumni" fetchFn={getAlumni} createFn={createAlumni} updateFn={updateAlumni} deleteFn={deleteAlumni} fields={alumniFields} />} />
          <Route path="dashboard/projects" element={<CrudPage title="Projects" fetchFn={getProjects} createFn={createProject} updateFn={updateProject} deleteFn={deleteProject} fields={projectFields} />} />
          <Route path="dashboard/blog" element={<CrudPage title="Blog Posts" fetchFn={() => getBlogPosts(false)} createFn={createBlogPost} updateFn={updateBlogPost} deleteFn={deleteBlogPost} fields={blogFields} />} />
          <Route path="dashboard/forum" element={<ForumAdmin />} />
        </Routes>
      </main>
    </div>
  );
}

function DashboardHome({ onSeedData }) {
  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>Dashboard</h1>
      <div className="admin-card">
        <h3>Welcome to RoboSUST Admin</h3>
        <p style={{ color: 'var(--color-5)', marginTop: '10px' }}>
          Use the sidebar to manage website content including achievements, initiatives, workshops, alumni, projects, blog posts, and forum discussions.
        </p>
        <button onClick={onSeedData} className="btn btn-accent" style={{ marginTop: '20px' }}>
          Seed Sample Data
        </button>
        <p style={{ color: 'var(--color-6)', marginTop: '10px', fontSize: '0.9rem' }}>
          Click above to populate the database with sample data from the original website.
        </p>
      </div>
      <div className="admin-card" style={{ marginTop: '20px' }}>
        <h3>Quick Links</h3>
        <div style={{ display: 'flex', gap: '15px', marginTop: '15px', flexWrap: 'wrap' }}>
          <a href="/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View Website</a>
          <a href="/blog" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View Blog</a>
          <a href="/forum" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">View Forum</a>
        </div>
      </div>
    </div>
  );
}

function CrudPage({ title, fetchFn, createFn, updateFn, deleteFn, fields }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const res = await fetchFn();
      setItems(res.data);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const openCreate = () => {
    setEditItem(null);
    setFormData(fields.reduce((acc, f) => ({ ...acc, [f.name]: f.default || '' }), {}));
    setShowModal(true);
  };

  const openEdit = (item) => {
    setEditItem(item);
    setFormData(fields.reduce((acc, f) => ({ ...acc, [f.name]: item[f.name] || '' }), {}));
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editItem) {
        await updateFn(editItem.id, formData);
      } else {
        await createFn(formData);
      }
      setShowModal(false);
      fetchItems();
    } catch (error) {
      console.error('Save error:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this item?')) {
      try {
        await deleteFn(id);
        fetchItems();
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
        <h1>{title}</h1>
        <button onClick={openCreate} className="btn btn-accent">Add New</button>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
            <div className="modal-header">
              <h3>{editItem ? 'Edit' : 'Add'} {title.replace(/s$/, '')}</h3>
              <button className="modal-close" onClick={() => setShowModal(false)}>&times;</button>
            </div>
            <form onSubmit={handleSubmit}>
              {fields.map((field) => (
                <div className="form-group" key={field.name}>
                  <label className="form-label">{field.label}</label>
                  {field.type === 'textarea' ? (
                    <textarea
                      className="form-control"
                      value={formData[field.name] || ''}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      required={field.required}
                    />
                  ) : field.type === 'select' ? (
                    <select
                      className="form-control"
                      value={formData[field.name] || ''}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                    >
                      {field.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  ) : field.type === 'checkbox' ? (
                    <input
                      type="checkbox"
                      checked={formData[field.name] || false}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.checked })}
                    />
                  ) : (
                    <input
                      type={field.type || 'text'}
                      className="form-control"
                      value={formData[field.name] || ''}
                      onChange={(e) => setFormData({ ...formData, [field.name]: e.target.value })}
                      required={field.required}
                    />
                  )}
                </div>
              ))}
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button type="button" className="btn btn-sm btn-primary" onClick={() => setShowModal(false)}>Cancel</button>
                <button type="submit" className="btn btn-sm btn-accent">Save</button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="admin-card">
        {loading ? (
          <div className="text-center"><div className="spinner" style={{ margin: '30px auto' }}></div></div>
        ) : items.length === 0 ? (
          <p style={{ color: 'var(--color-5)', textAlign: 'center', padding: '30px' }}>No items yet. Click "Add New" to create one.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                {fields.slice(0, 3).map((f) => <th key={f.name}>{f.label}</th>)}
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id}>
                  {fields.slice(0, 3).map((f) => (
                    <td key={f.name}>
                      {f.type === 'checkbox' ? (item[f.name] ? 'Yes' : 'No') :
                       typeof item[f.name] === 'string' && item[f.name].length > 50 ? item[f.name].substring(0, 50) + '...' : item[f.name]}
                    </td>
                  ))}
                  <td>
                    <button onClick={() => openEdit(item)} className="btn btn-sm btn-primary" style={{ marginRight: '5px' }}>Edit</button>
                    <button onClick={() => handleDelete(item.id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

function ForumAdmin() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await getForumPosts();
      setPosts(res.data);
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this post and all its replies?')) {
      try {
        await deleteForumPost(id);
        fetchPosts();
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>Forum Posts</h1>
      <div className="admin-card">
        {loading ? (
          <div className="text-center"><div className="spinner" style={{ margin: '30px auto' }}></div></div>
        ) : posts.length === 0 ? (
          <p style={{ color: 'var(--color-5)', textAlign: 'center', padding: '30px' }}>No forum posts yet.</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Category</th>
                <th>Replies</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.title}</td>
                  <td>{post.author_name}</td>
                  <td>{post.category_name || '-'}</td>
                  <td>{post.reply_count}</td>
                  <td>
                    <a href={`/forum/${post.id}`} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary" style={{ marginRight: '5px' }}>View</a>
                    <button onClick={() => handleDelete(post.id)} className="btn btn-sm btn-danger">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// Field configurations
const achievementFields = [
  { name: 'title', label: 'Title', required: true },
  { name: 'description', label: 'Description', type: 'textarea', required: true },
  { name: 'image', label: 'Image URL' },
  { name: 'order', label: 'Order', type: 'number', default: 0 }
];

const initiativeFields = [
  { name: 'title', label: 'Title', required: true },
  { name: 'description', label: 'Description', type: 'textarea', required: true },
  { name: 'image', label: 'Image URL' },
  { name: 'status', label: 'Status', type: 'select', options: [
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'completed', label: 'Completed' },
    { value: 'upcoming', label: 'Upcoming' }
  ]},
  { name: 'order', label: 'Order', type: 'number', default: 0 }
];

const workshopFields = [
  { name: 'title', label: 'Title', required: true },
  { name: 'description', label: 'Description', type: 'textarea' },
  { name: 'image', label: 'Image URL' },
  { name: 'location', label: 'Location' },
  { name: 'order', label: 'Order', type: 'number', default: 0 }
];

const alumniFields = [
  { name: 'name', label: 'Name', required: true },
  { name: 'department', label: 'Department' },
  { name: 'batch', label: 'Batch' },
  { name: 'image', label: 'Image URL' },
  { name: 'current_position', label: 'Current Position' },
  { name: 'linkedin', label: 'LinkedIn URL' },
  { name: 'order', label: 'Order', type: 'number', default: 0 }
];

const projectFields = [
  { name: 'title', label: 'Title', required: true },
  { name: 'description', label: 'Description', type: 'textarea', required: true },
  { name: 'image', label: 'Image URL' },
  { name: 'status', label: 'Status', type: 'select', options: [
    { value: 'ongoing', label: 'Ongoing' },
    { value: 'completed', label: 'Completed' }
  ]},
  { name: 'github', label: 'GitHub URL' },
  { name: 'demo', label: 'Demo URL' },
  { name: 'order', label: 'Order', type: 'number', default: 0 }
];

const blogFields = [
  { name: 'title', label: 'Title', required: true },
  { name: 'content', label: 'Content', type: 'textarea', required: true },
  { name: 'excerpt', label: 'Excerpt' },
  { name: 'image', label: 'Image URL' },
  { name: 'author', label: 'Author' },
  { name: 'published', label: 'Published', type: 'checkbox', default: false }
];

export default Dashboard;
