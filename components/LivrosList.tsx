import { useEffect, useState } from 'react';
import { getLivros, deleteLivros } from '../services/api';
import { Link } from 'react-router-dom';
interface Livros {
 id: string;
 name: string;
 description: string;
 price: number;
 quantity: number;
}
function LivrosList() {
 const [Livross, setLivross] = useState<Livros[]>([]);
 useEffect(() => {
 loadLivross();
 }, []);
 const loadLivross = async () => {
 const response = await getLivros();
 setLivross(response.data);
 };
 const handleDelete = async (id: string) => {
 await deleteLivros(id);
 loadLivross();
 };
 return (
 <div>
 <h1>Livros List</h1>
 <Link to="/add">Add Livros</Link>
 <ul>
 {Livross.map((Livros) => (
 <li key={Livros.id}>
 {Livros.name} - ${Livros.price} - {Livros.quantity} units
 <Link to={`/edit/${Livros.id}`}>Edit</Link>
 <button onClick={() => handleDelete(Livros.id)}>Delete</button>
 </li>
 ))}
 </ul>
 </div>
 );
}
export default LivrosList;
