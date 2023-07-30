import {Example} from 'components/Expample/Example';
import {Route, Routes} from 'react-router-dom';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Example text="root" />} />
                <Route path="drift" element={<Example text="drift" />} />
                <Route path="timeattack" element={<Example text="timeattack" />} />
                <Route path="forza" element={<Example text="forza" />} />
            </Route>
        </Routes>
    );
}
