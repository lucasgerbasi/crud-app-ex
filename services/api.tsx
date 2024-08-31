import axios from 'axios';
const api = axios.create({
 baseURL: 'http://localhost:3001'
});
export const getLivros = () => api.get('/Livros');
export const getLivrosById = (id: string) => api.get(`/Livros/${id}`);
export const createLivros = (Livros: any) => api.post('/Livros', Livros);
export const updateLivros = (id: string, Livros: any) => api.put(`/Livros/${id}`, Livros);
export const deleteLivros = (id: string) => api.delete(`/Livros/${id}`);