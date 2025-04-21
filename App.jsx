import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import LabContent from './pages/LabContent';
import NotFound from './pages/NotFound';
import { labs } from './data/labs';

const App = () => {
  return (
    <Router>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <CssBaseline />
        <Header />
        
        <Container maxWidth="lg" sx={{ flexGrow: 1, py: 4 }}>
          <Box display="flex">
            <Box sx={{ width: 250, mr: 3 }}>
              <Menu />
            </Box>
            
            <Box sx={{ flexGrow: 1 }}>
              <Routes>
                <Route path="/" element={<Home />} />
                {labs.map((lab) => (
                  <Route
                    key={lab.id}
                    path={lab.path}
                    element={<LabContent lab={lab} />}
                  />
                ))}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </Box>
        </Container>

        <Footer />
      </Box>
    </Router>
  );
};

export default App;