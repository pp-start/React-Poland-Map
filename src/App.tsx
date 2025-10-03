import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Common, Error, Main } from './main';
import CacheBuster from 'react-cache-buster';
import Loading from './components/Loading';
import packageInfo from '../package.json';

export default function App() {

    useEffect(() => {

        document.title = 'Poland map';

    }, []);

    const isProduction: boolean = import.meta.env.MODE === 'production';

    return (
        <CacheBuster
            currentVersion={packageInfo.version}
            isEnabled={isProduction} 
            isVerboseMode={false} 
            loadingComponent={<Loading />} 
            metaFileDirectory={'.'}
            onCacheClear={() => window.location.reload()}
        >
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Common />}>
                            <Route index element={<Main />} />
                            <Route path='*' element={<Error />} />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        </CacheBuster>
    );
}