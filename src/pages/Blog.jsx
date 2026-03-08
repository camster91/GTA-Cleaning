import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  { id: 1, title: 'How to Prepare Your Home for Move-out', excerpt: 'Expert tips for a hassle-free move-out clean.', date: 'Mar 8, 2026' },
];

const Blog = () => (
  <div className="section">
    <div className="container">
      <h1>Blog</h1>
      <div className="blog-grid" style={{ display: 'grid', gap: '2rem', marginTop: '2rem' }}>
        {posts.map(post => (
          <div key={post.id} className="post-card" style={{ padding: '1rem', border: '1px solid #ccc' }}>
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <small>{post.date}</small>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Blog;