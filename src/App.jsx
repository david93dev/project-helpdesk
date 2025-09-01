import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import { Layout } from "./layout/Layout";
import { Dashboard } from "./pages/HomeDash";
import { ThemeProvider } from "./components/theme-provider";

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
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
