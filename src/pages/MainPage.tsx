import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import number1 from '../assets/number-1.svg';
import number2 from '../assets/number-2.svg';
import smile from '../assets/smile.png';
import yuliia from '../assets/sticker.webp';
import yuliia1 from '../assets/sticker1.webp';
import './styles.scss';

const Main = () => {
    const navigate = useNavigate();
    const [imgSrc, setImgSrc] = useState(number1);

    useEffect(() => {
        const timeOut1 = setTimeout(() => setImgSrc(number2), 1000);
        const timeOut2 = setTimeout(() => setImgSrc('22'), 2000);

        return () => {
            clearTimeout(timeOut1);
            clearTimeout(timeOut2);
        };
    }, []);

    const handleNextStep = () => {
        navigate('/stepSecond');
    };

    return (
        <div className="container flex">
            <motion.img
                src={yuliia1}
                initial={{ x: '-100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            />
            <div className="introduce">
                <motion.div
                    className="numbers"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    {imgSrc === '22' ? (
                        <>
                            <img src={number2} width={'100px'} />
                            <img src={number2} width={'100px'} />
                            <img src={smile} width={'100px'} />
                        </>
                    ) : (
                        <img src={imgSrc} width={'100px'} />
                    )}
                </motion.div>

                <motion.button
                    onClick={handleNextStep}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="submit"
                >
                    Let's go!
                </motion.button>
            </div>
            <motion.img
                src={yuliia}
                initial={{ x: '100vw', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 100, damping: 10 }}
            />
        </div>
    );
};

export default Main;
