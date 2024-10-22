import "./App.css";
import HistoryPage from "./components/history-page";
import HomePage from "./components/home-page";
import LoginPage from "./components/login-page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ContactsProvider } from "./contexts/contacts-context";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ContactsProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/contato" element={<HistoryPage />} />
            </Routes>
          </Router>
        </QueryClientProvider>
      </ContactsProvider>
    </>
  );
}

export default App;
