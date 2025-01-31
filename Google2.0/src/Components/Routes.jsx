import { Routes, Route, Navigate } from 'react-router-dom';
import Results from './Results';

const AppRoutes = () => {
    return (
        <div className="p-4">
            <Routes>
                {/* Redirect from '/' to '/search' */}
                <Route path="/" element={<Navigate to="/search" />} />

                {/* Define routes for search, images, news, and videos */}
                <Route path="/search" element={<Results />} />
                <Route path="/images" element={<Results />} />
                <Route path="/news" element={<Results />} />
                <Route path="/videos" element={<Results />} />
            </Routes>
        </div>
    );
};

export default AppRoutes;
