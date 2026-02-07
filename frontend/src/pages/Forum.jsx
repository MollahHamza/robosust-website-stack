import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getForumCategories, getForumPosts, createForumPost } from '../api';

function Forum() {
  const [categories, setCategories] = useState([]);
  const [posts, setPosts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPost, setNewPost] = useState({ title: '', content: '', author_name: '', author_email: '', category_id: '' });
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [catRes, postRes] = await Promise.all([
        getForumCategories(),
        getForumPosts()
      ]);
      setCategories(catRes.data);
      setPosts(postRes.data);
    } catch (error) {
      console.error('Error fetching forum data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategoryChange = async (categoryId) => {
    setSelectedCategory(categoryId);
    try {
      const res = await getForumPosts(categoryId);
      setPosts(res.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleSubmitPost = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createForumPost(newPost);
      setNewPost({ title: '', content: '', author_name: '', author_email: '', category_id: '' });
      setShowNewPost(false);
      fetchData();
    } catch (error) {
      console.error('Error creating post:', error);
    } finally {
      setSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <>
      <div className="page-header" style={{ backgroundImage: 'url(/assets/images/home/cover2.jpg)' }}>
        <div className="container">
          <h1>Forum</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Community Discussions</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '15px' }}>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <button
                className={`btn btn-sm ${!selectedCategory ? 'btn-accent' : 'btn-primary'}`}
                onClick={() => handleCategoryChange(null)}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  className={`btn btn-sm ${selectedCategory === cat.id ? 'btn-accent' : 'btn-primary'}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <button className="btn btn-accent" onClick={() => setShowNewPost(true)}>
              New Post
            </button>
          </div>

          {showNewPost && (
            <div className="modal-overlay" onClick={() => setShowNewPost(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                  <h3>Create New Post</h3>
                  <button className="modal-close" onClick={() => setShowNewPost(false)}>&times;</button>
                </div>
                <form onSubmit={handleSubmitPost}>
                  <div className="form-group">
                    <label className="form-label">Your Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPost.author_name}
                      onChange={(e) => setNewPost({ ...newPost, author_name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email (optional)</label>
                    <input
                      type="email"
                      className="form-control"
                      value={newPost.author_email}
                      onChange={(e) => setNewPost({ ...newPost, author_email: e.target.value })}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Category</label>
                    <select
                      className="form-control"
                      value={newPost.category_id}
                      onChange={(e) => setNewPost({ ...newPost, category_id: e.target.value })}
                    >
                      <option value="">Select a category</option>
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Title *</label>
                    <input
                      type="text"
                      className="form-control"
                      value={newPost.title}
                      onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Content *</label>
                    <textarea
                      className="form-control"
                      value={newPost.content}
                      onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-accent" disabled={submitting}>
                    {submitting ? 'Posting...' : 'Post'}
                  </button>
                </form>
              </div>
            </div>
          )}

          {loading ? (
            <div className="text-center">
              <div className="spinner" style={{ margin: '50px auto' }}></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center" style={{ padding: '60px 0' }}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--color-8)" strokeWidth="1.5">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
              <h3 style={{ marginTop: '20px', color: 'var(--color-5)' }}>No discussions yet</h3>
              <p style={{ color: 'var(--color-6)' }}>Be the first to start a conversation!</p>
            </div>
          ) : (
            <div>
              {posts.map((post) => (
                <Link to={`/forum/${post.id}`} key={post.id} className="forum-post" style={{ display: 'block' }}>
                  <h3 className="forum-post-title">{post.title}</h3>
                  <p className="forum-post-meta">
                    Posted by {post.author_name} • {formatDate(post.created_at)}
                    {post.category_name && ` • ${post.category_name}`}
                    {post.reply_count > 0 && ` • ${post.reply_count} replies`}
                  </p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Forum;
