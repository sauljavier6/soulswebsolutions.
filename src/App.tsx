import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.js';
import WhatsAppFloating from './components/WhatsAppFloating/WhatsAppFloating.js';

function App() {

  return (
    <>
      <Router>
        <AppRoutes />
      </Router>

      <WhatsAppFloating />
    </>
  )
}

export default App
