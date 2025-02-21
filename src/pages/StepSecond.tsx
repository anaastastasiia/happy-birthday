import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import child1 from '../assets/sticker2.webp';
import child2 from '../assets/sticker3.webp';
import child3 from '../assets/sticker4.webp';

const StepSecond = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/stepThird');
    };

    return (
        <div className="stepSecond">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="age"
            >
                <div style={{ fontSize: '30px' }}>
                    Поглянь на себе n років тому та подякуй за все
                </div>
                <div style={{ fontSize: '15px', marginTop: '10px' }}>
                    Подякую за те, де ти зараз є та ким ти стала. Я ж би хотіла
                    в свою чергу подякувати за те, що ти в мене є. Ти -
                    неймовірна людина! Про таку подругу як ти - інші можуть лише
                    мріяти. Дякую тобі за всю твою підтримку, турботу, старання.
                    Дякую, що ти поруч в найкращі та найзворушливіші моменти
                    мого життя. Дякую, що ніколи не залишиш мене та завжди
                    підставиш своє плече. Дякую за твою щирість та відданість!
                </div>
                <div className="images">
                    <img src={child1} />
                    <img src={child3} />
                    <img src={child2} />
                </div>
                <button
                    onClick={nextStep}
                    className="submit"
                    style={{ width: '30%' }}
                >
                    Я не плачу!
                </button>
            </motion.div>
        </div>
    );
};

export default StepSecond;
