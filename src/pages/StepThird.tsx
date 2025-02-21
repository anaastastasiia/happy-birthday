import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import child1 from '../assets/sticker5.webp';
import child2 from '../assets/sticker6.webp';
import child3 from '../assets/sticker7.webp';

const StepThird = () => {
    const navigate = useNavigate();

    const nextStep = () => {
        navigate('/love');
    };

    return (
        <div className="stepThird">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="age"
            >
                <div style={{ fontSize: '30px' }}>
                    Щоб ти там не просльозилася, згадай якими кумедними ми були
                    (та напевне залишилися)
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
                    Треш
                </button>
            </motion.div>
        </div>
    );
};

export default StepThird;
