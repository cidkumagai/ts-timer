import { Routes, Route } from 'react-router-dom';

import { Home } from './meditation/pages/Home';
import { Meditation } from './meditation/pages/Meditation';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/meditation' element={<Meditation />} />
        </Routes>
    );
}

export default App;
