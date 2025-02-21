import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import believe from '../assets/a964f197410b5e12a9b8f6cf63aff93f.jpg';

const Career = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/conclusion');
    };

    return (
        <div className="stepThird">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <div style={{ fontSize: '30px' }}>І я тебе!</div>
                <div style={{ fontSize: '15px', marginTop: '10px' }}>
                    Бажаю тобі завжди досягати своїх цілей та побудувати кар'єру
                    твоєї мрії. Я на 10000% впевнена, що в тебе все вийде. Ти
                    розумна, відповідальна та хороша людина і я впевнена, що ці
                    навички колись побачить багато людей, які будуть йти за
                    тобою!
                </div>
                <div className="images">
                    <img src={believe} />
                </div>
                <button
                    onClick={nextStep}
                    className="submit"
                    style={{ width: '30%' }}
                >
                    Думаєш?
                </button>
            </motion.div>
        </div>
    );
};

export default Career;
