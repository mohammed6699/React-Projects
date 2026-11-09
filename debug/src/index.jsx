import ReactDOM from 'react-dom/client';

import App from './App.jsx';
import './index.css';
import { StrictMode } from 'react';

ReactDOM.createRoot(document.getElementById('root')).render(
    // introduce the STrictMode and how can I use it to resolve issues 
    <StrictMode>        
        <App />
    </StrictMode>
);
