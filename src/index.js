import { createRoot } from 'react-dom/client';
import App from './App'; // Đảm bảo đường dẫn đúng đến component App của bạn

const root = document.getElementById('root');

// Sử dụng createRoot để render ứng dụng
const rootElement = createRoot(root);

// Render component App vào rootElement
rootElement.render(<App />);
