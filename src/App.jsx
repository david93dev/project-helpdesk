import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { Layout } from "./layout/Layout";
import { Dashboard } from "./pages/HomeDash";
import { ThemeProvider } from "./components/theme-provider";
import NewCall from "./pages/NewCall";
import MyCall from "./pages/MyCall";
import CallDetail from "./pages/CallDetail";
import Profile from "./pages/Profile";
import ConfigPage from "./pages/ConfigPage";


function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            {/* sempre inicia no login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route path="/login" element={<Login />} />

            {/* rotas protegidas ou pós-login */}
            <Route path="/app" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="novo-chamado" element={<NewCall />} />
              <Route path="meus-chamados" element={<MyCall />} />
              <Route path="meus-chamados/:id" element={<CallDetail />} />
              <Route path="perfil" element={<Profile />} />
              <Route path="configuracao" element={<ConfigPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
