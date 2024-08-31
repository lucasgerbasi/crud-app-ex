import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { createLivros, getLivrosById, updateLivros } from '../services/api';
interface Livros {
    name: string;
    description: string;
    price: number;
    quantity: number;
}
function LivrosForm() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [Livros, setLivros] = useState<Livros>({
        name: '',
        description: '',
        price: 0,
        quantity: 0,
    });
    useEffect(() => {
        if (id) {
            loadLivros();
        }
    }, [id]);
    const loadLivros = async () => {
        try {
            const response = await getLivrosById(id as string);
            setLivros(response.data);
        } catch (error) {
            console.error("Error loadingLivros data", error);
        }
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLivros({
            ...Livros,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (id) {
                await updateLivros(id, Livros);
            } else {
                await createLivros(Livros);
            }
            navigate('/');
        } catch (error) {
            console.error("Error saving Livros", error);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    value={Livros.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    value={Livros.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Price</label>
                <input
                    type="number"
                    name="price"
                    value={Livros.price}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    value={Livros.quantity}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Save</button>
        </form>
    );
}
export default LivrosForm;