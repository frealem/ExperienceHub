import {CssBaseline,ThemeProvider} from "@mui/material"
import {createTheme} from "@mui/material/styles";
import { useMemo } from "react";
import {useSelector} from 'react-redux';
import { themeSettings } from "./assets/theme";
import {BrowserRouter,Navigate,Route,Router,Routes} from "react-router-dom";
import Layout from "./components/Layout";
import FeedPage from "./pages/feedpage";
function App() {
  const mode = useSelector((state) => state.global.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout />}>
<Route path="/" element={<Navigate to="/feedpage" replace/>}/>
<Route path="/feedpage" element={<FeedPage/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
