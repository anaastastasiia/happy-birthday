import { motion } from 'framer-motion';

const Conclusion = () => {
    return (
        <div className="stepThird">
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                <iframe
                    src="https://drive.google.com/file/d/1gRFUEirv_MzkWtwECiA6Oiz5dg5-FwL7/preview"
                    width="700"
                    height="400"
                    allow="autoplay"
                ></iframe>
            </motion.div>
        </div>
    );
};

export default Conclusion;
