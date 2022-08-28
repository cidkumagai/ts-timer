import { Routes, Route } from 'react-router-dom';

import { Home } from './meditation/pages/Home';
import { Meditation } from './meditation/pages/Meditation';

function App() {
    return (
        <Routes>
            <Route path='/ts-timer' element={<Home />} />
            <Route path='/ts-timer/meditation' element={<Meditation />} />
        </Routes>
    );
}

export default App;
