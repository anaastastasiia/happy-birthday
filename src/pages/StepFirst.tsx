import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import yuliia1 from '../assets/sticker1.webp';
import grandmoms from '../assets/1cbd96a5b3b37c92443edf2217e54d85.jpg';
import grandpa from '../assets/d6039297f6e0c35940e5a8289640478a.jpg';
import sad from '../assets/5e88e11680219e16e63ab71399e8c396.jpg';
import inOffice from '../assets/722f6d2b2ed45454d50650eef179bf76.jpg';
import what from '../assets/0d1582c9a928574e87bdd933d37b0605.jpg';
import cry from '../assets/2340329dbbcc29b27404739948072c93.jpg';
import tea from '../assets/65da77060454ce3085eddcdd5a5d0bb3.jpg';
import cat from '../assets/b74b295dab07424142a69055d88e21b7.jpg';
import aperol from '../assets/d798b650ed9bd30e6d25e08554e84101.jpg';
import glasses from '../assets/7886dd7bd8d6a7d7c165d803e7fac3b9.jpg';

const StepFirst = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [showAge, setShowAge] = useState(true);

    const onClick = () => {
        setShowAge(false);
        setTimeout(() => setIsOpen(true), 300);
    };

    const nextStep = () => {
        navigate('/stepSecond');
    };

    return (
        <div className="stepFirst">
            <AnimatePresence initial={false}>
                {showAge ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        className="age"
                    >
                        <div className="images">
                            <div className="imgGrid">
                                <img src={sad} />
                                <img src={what} />
                                <img src={inOffice} />
                                <img src={cry} />
                                <img src={tea} />
                                <img src={grandpa} />
                                <img src={cat} />
                                <img src={aperol} />
                                <img src={glasses} />
                            </div>
                            <div>
                                <div style={{ fontSize: '30px' }}>Тобі вже не 21, але ще й не 30</div>
                                <div>Бажаю щоб спина не боліла та ноги не крутили</div>
                            </div>
                            <img src={yuliia1} height={'100%'} />
                        </div>

                        <button
                            onClick={onClick}
                            className="submit"
                            style={{ width: '30%' }}
                        >
                            Не смішно!
                        </button>
                    </motion.div>
                ) : null}
            </AnimatePresence>
            {isOpen && (
                <motion.div
                    className="grandmoms"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div style={{ fontSize: '30px' }}>
                        Ти права, бо навіть в старості ми залишимося такими ж
                        класними дівчулями
                    </div>
                    <img
                        src={grandmoms}
                        width={'300px'}
                        style={{ paddingTop: '15px' }}
                    />
                    <button
                        onClick={nextStep}
                        className="submit"
                        style={{ width: '30%', marginTop: '15px' }}
                    >
                        Ну ладно
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default StepFirst;
