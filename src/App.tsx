import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./pages/auth/PrivateRoutes";
import Register from "./pages/auth/register";
import { mainPage } from "./utils/getAuthKey";
import "./i18n";
import "./index.css";
import Bookshelf from "./pages/bookshelf";
import { useTranslation } from "react-i18next";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: 1,
    },
  },
});

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/register" element={<Register />} />

          {/* Private routes */}
          <Route element={<PrivateRoutes />}>
            <Route path={mainPage} element={<Bookshelf />} />
          </Route>

          {/* Catch all */}
          <Route path="/*" element={<h2>{t("Not found")}</h2>} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
