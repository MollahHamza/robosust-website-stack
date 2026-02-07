import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../api';

function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await getBlogPosts();
        setPosts(res.data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <div className="page-header" style={{ backgroundImage: 'url(/assets/images/home/workshopandseminar.jpg)' }}>
        <div className="container">
          <h1>Blog</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Latest News & Updates</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {loading ? (
            <div className="text-center">
              <div className="spinner" style={{ margin: '50px auto' }}></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center" style={{ padding: '60px 0' }}>
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="var(--color-8)" strokeWidth="1.5">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              <h3 style={{ marginTop: '20px', color: 'var(--color-5)' }}>No blog posts yet</h3>
              <p style={{ color: 'var(--color-6)' }}>Check back soon for exciting updates!</p>
            </div>
          ) : (
            <div className="grid grid-3">
              {posts.map((post) => (
                <Link to={`/blog/${post.id}`} key={post.id} className="blog-card">
                  {post.image && <img src={post.image} alt={post.title} className="blog-card-img" />}
                  <div className="blog-card-body">
                    <p className="blog-card-date">{formatDate(post.created_at)}</p>
                    <h3 className="blog-card-title">{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt || post.content.substring(0, 150)}...</p>
                    {post.author && <p style={{ fontSize: '0.85rem', color: 'var(--color-5)' }}>By {post.author}</p>}
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Blog;
