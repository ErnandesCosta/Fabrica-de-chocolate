import { AppRoutes } from './routes/AppRoutes';
// Importe o CSS global se ainda não o fez em 'main.tsx'
import './App.css'; 

function App() {
  // O AppRoutes agora cuida de tudo
  return <AppRoutes />;
}

export default App;