import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Main from './pages/MainPage';
import StepFirst from './pages/StepFirst';
import StepSecond from './pages/StepSecond';
import StepThird from './pages/StepThird';
import Love from './pages/LoveStep';
import Career from './pages/CareerStep';
import Conclusion from './pages/Conclusion';

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
                    <Route path="/stepFirst" element={<StepFirst />} />
                    <Route path="/stepSecond" element={<StepSecond />} />
                    <Route path="/stepThird" element={<StepThird />} />
                    <Route path="/love" element={<Love />} />
                    <Route path="/career" element={<Career />} />
                    <Route path="/conclusion" element={<Conclusion />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
