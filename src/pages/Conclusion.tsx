import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import img1 from '../assets/sticker8.webp';
import img2 from '../assets/sticker9.webp';
import img3 from '../assets/sticker10.webp';

const Conclusion = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/career');
    };

    return (
        <div className="stepThird">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <div style={{ fontSize: '30px' }}>Впевнена!</div>
                <div style={{ fontSize: '15px', marginTop: '10px' }}>
                    татата
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

export default Conclusion;
