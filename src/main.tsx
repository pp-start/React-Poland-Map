import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration.ts'
import './styles/style.scss'
import "@fontsource/roboto"

export { default as Common } from './components/Common';
export { default as Error } from './components/Error';
export { default as Main } from './components/Poland.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);serviceWorkerRegistration.register();