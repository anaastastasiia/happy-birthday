import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/sticker8.webp';
import img2 from '../assets/sticker9.webp';
import img3 from '../assets/sticker10.webp';

const Love = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/stepThird');
    };

    return (
        <div className="stepThird">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="age"
            >
                <div style={{ fontSize: '30px' }}>Кохай та будь кохана!</div>
                <div style={{ fontSize: '15px', marginTop: '10px' }}>
                    Бажаю тобі побудувати свою конфортну та теплу сім'ю. Нехай
                    люди, які тебе оточують роблять тебе лише щасливою та
                    допомагають в здійсненні твоїх мрій та бажань!
                </div>
                <div className="images">
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                </div>
                <button
                    onClick={nextStep}
                    className="submit"
                    style={{ width: '30%' }}
                >
                    Кохаю!
                </button>
            </motion.div>
        </div>
    );
};

export default Love;
