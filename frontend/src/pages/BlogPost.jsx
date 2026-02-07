import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPost } from '../api';

function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await getBlogPost(id);
        setPost(res.data);
      } catch (error) {
        console.error('Error fetching blog post:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="section text-center">
        <div className="spinner" style={{ margin: '100px auto' }}></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="section text-center">
        <div className="container">
          <h2>Post not found</h2>
          <Link to="/blog" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Blog</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-header" style={{ backgroundImage: post.image ? `url(${post.image})` : 'url(/assets/images/home/workshopandseminar.jpg)' }}>
        <div className="container">
          <h1>{post.title}</h1>
          <p style={{ fontSize: '1rem', marginTop: '10px' }}>
            {post.author && `By ${post.author} • `}{formatDate(post.created_at)}
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/blog" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: 'var(--color-accent)' }}>
            ← Back to Blog
          </Link>
          <div style={{ lineHeight: '1.8', fontSize: '1.1rem' }}>
            {post.content.split('\n').map((paragraph, index) => (
              <p key={index} style={{ marginBottom: '1.5rem' }}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogPost;
