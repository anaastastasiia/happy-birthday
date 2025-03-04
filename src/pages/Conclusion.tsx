import { motion } from 'framer-motion';
import video from '../assets/IMG_9783.mp4';

const Conclusion = () => {
    return (
        <div className="stepThird">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <video src={video} width="750" height="300" controls></video>
            </motion.div>
        </div>
    );
};

export default Conclusion;
