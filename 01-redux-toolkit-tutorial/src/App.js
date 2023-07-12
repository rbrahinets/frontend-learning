import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from './components/Modal';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

const App = () => {
    const dispatch = useDispatch();
    const { cartItems, isLoading } = useSelector((store) => store.cart);
    const { isOpen } = useSelector((store) => store.modal);

    useEffect(() => {
        dispatch(calculateTotals());
    }, [dispatch, cartItems]);

    useEffect(() => {
        dispatch(getCartItems('random'));
    }, [dispatch]);

    if (isLoading) {
        return (
            <div className="loading">
                <h1>Loading...</h1>
            </div>
        );
    }

    return (
        <main>
            {isOpen && <Modal />}
            <Navbar />
            <CartContainer />
        </main>
    );
};

export default App;
