import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Auth
export const login = (username, password) => api.post('/auth/login', { username, password });
export const logout = () => api.post('/auth/logout');
export const checkAuth = () => api.get('/auth/check');
export const changePassword = (currentPassword, newPassword) =>
  api.post('/auth/change-password', { current_password: currentPassword, new_password: newPassword });

// Achievements
export const getAchievements = () => api.get('/achievements');
export const createAchievement = (data) => api.post('/achievements', data);
export const updateAchievement = (id, data) => api.put(`/achievements/${id}`, data);
export const deleteAchievement = (id) => api.delete(`/achievements/${id}`);

// Initiatives
export const getInitiatives = () => api.get('/initiatives');
export const createInitiative = (data) => api.post('/initiatives', data);
export const updateInitiative = (id, data) => api.put(`/initiatives/${id}`, data);
export const deleteInitiative = (id) => api.delete(`/initiatives/${id}`);

// Workshops
export const getWorkshops = () => api.get('/workshops');
export const createWorkshop = (data) => api.post('/workshops', data);
export const updateWorkshop = (id, data) => api.put(`/workshops/${id}`, data);
export const deleteWorkshop = (id) => api.delete(`/workshops/${id}`);

// Alumni
export const getAlumni = () => api.get('/alumni');
export const createAlumni = (data) => api.post('/alumni', data);
export const updateAlumni = (id, data) => api.put(`/alumni/${id}`, data);
export const deleteAlumni = (id) => api.delete(`/alumni/${id}`);

// Projects
export const getProjects = () => api.get('/projects');
export const createProject = (data) => api.post('/projects', data);
export const updateProject = (id, data) => api.put(`/projects/${id}`, data);
export const deleteProject = (id) => api.delete(`/projects/${id}`);

// Blog
export const getBlogPosts = (publishedOnly = true) => api.get(`/blog?published=${publishedOnly}`);
export const getBlogPost = (id) => api.get(`/blog/${id}`);
export const createBlogPost = (data) => api.post('/blog', data);
export const updateBlogPost = (id, data) => api.put(`/blog/${id}`, data);
export const deleteBlogPost = (id) => api.delete(`/blog/${id}`);

// Forum
export const getForumCategories = () => api.get('/forum/categories');
export const createForumCategory = (data) => api.post('/forum/categories', data);
export const getForumPosts = (categoryId) => api.get(`/forum/posts${categoryId ? `?category_id=${categoryId}` : ''}`);
export const getForumPost = (id) => api.get(`/forum/posts/${id}`);
export const createForumPost = (data) => api.post('/forum/posts', data);
export const deleteForumPost = (id) => api.delete(`/forum/posts/${id}`);
export const createForumReply = (postId, data) => api.post(`/forum/posts/${postId}/replies`, data);
export const deleteForumReply = (id) => api.delete(`/forum/replies/${id}`);

// Seed data
export const seedData = () => api.post('/seed');

export default api;
