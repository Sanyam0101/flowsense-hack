import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100 text-gray-900">
        <Sidebar />
        <div className="flex flex-col flex-1">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add more routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
