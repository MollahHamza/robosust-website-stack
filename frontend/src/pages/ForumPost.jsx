import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getForumPost, createForumReply } from '../api';

function ForumPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [reply, setReply] = useState({ content: '', author_name: '', author_email: '' });
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetchPost();
  }, [id]);

  const fetchPost = async () => {
    try {
      const res = await getForumPost(id);
      setPost(res.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReply = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await createForumReply(id, reply);
      setReply({ content: '', author_name: '', author_email: '' });
      fetchPost();
    } catch (error) {
      console.error('Error creating reply:', error);
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
          <Link to="/forum" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Forum</Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="page-header" style={{ backgroundImage: 'url(/assets/images/home/cover2.jpg)', paddingTop: '120px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ fontSize: '2rem' }}>{post.title}</h1>
        </div>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link to="/forum" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', marginBottom: '30px', color: 'var(--color-accent)' }}>
            ← Back to Forum
          </Link>

          {/* Original Post */}
          <div className="forum-post">
            <p className="forum-post-meta" style={{ marginBottom: '15px' }}>
              Posted by <strong>{post.author_name}</strong> • {formatDate(post.created_at)}
              {post.category_name && ` • ${post.category_name}`}
            </p>
            <div style={{ lineHeight: '1.7' }}>
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} style={{ marginBottom: '1rem' }}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Replies */}
          {post.replies && post.replies.length > 0 && (
            <div style={{ marginTop: '30px' }}>
              <h4 style={{ marginBottom: '20px' }}>{post.replies.length} Replies</h4>
              {post.replies.map((reply) => (
                <div key={reply.id} className="forum-reply">
                  <p className="forum-post-meta" style={{ marginBottom: '10px' }}>
                    <strong>{reply.author_name}</strong> • {formatDate(reply.created_at)}
                  </p>
                  <p>{reply.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* Reply Form - Coming Soon */}
          <div style={{ marginTop: '40px', padding: '30px', background: 'var(--color-10)', borderRadius: '10px', textAlign: 'center' }}>
            <h4 style={{ marginBottom: '10px', color: 'var(--color-5)' }}>Replies Coming Soon</h4>
            <p style={{ color: 'var(--color-6)' }}>The reply feature will be available shortly.</p>
          </div>

          {/* UNCOMMENT TO ENABLE REPLY FORM
          <div style={{ marginTop: '40px', padding: '30px', background: 'var(--color-10)', borderRadius: '10px' }}>
            <h4 style={{ marginBottom: '20px' }}>Leave a Reply</h4>
            <form onSubmit={handleSubmitReply}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    className="form-control"
                    value={reply.author_name}
                    onChange={(e) => setReply({ ...reply, author_name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email (optional)</label>
                  <input
                    type="email"
                    className="form-control"
                    value={reply.author_email}
                    onChange={(e) => setReply({ ...reply, author_email: e.target.value })}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label">Reply *</label>
                <textarea
                  className="form-control"
                  value={reply.content}
                  onChange={(e) => setReply({ ...reply, content: e.target.value })}
                  required
                  style={{ minHeight: '100px' }}
                />
              </div>
              <button type="submit" className="btn btn-accent" disabled={submitting}>
                {submitting ? 'Posting...' : 'Post Reply'}
              </button>
            </form>
          </div>
          */}
        </div>
      </section>
    </>
  );
}

export default ForumPost;
