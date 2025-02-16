import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './pages/MainPage';
import { motion } from 'framer-motion';

const App = () => {
    return (
        <div className="appContainer">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
                className="hbd"
            >
                Happy Birthday, Yuliok!
            </motion.div>
            <Router>
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
