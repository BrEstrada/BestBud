import { AddProductPanel, AllProductsPanel } from 'components/panels';
import { Routes, Route } from 'react-router-dom';

import { LoginPage, DashboardPage, PageNotFound } from './pages';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="dashboard" element={<DashboardPage />}>
                    <Route
                        index
                        element={<AllProductsPanel title="All Products" />}
                    />
                    <Route
                        path="add"
                        element={<AddProductPanel title="Add New Product" />}
                    />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    );
}

export default App;
