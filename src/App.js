import "./App.css";
import UseClients from "./hooks/UseClients";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import ClientDetails from "./components/ClientDetails";

function App() {
  const { clients, loading, active, handlePagination } = UseClients();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              key={clients.count}
              clients={clients}
              loading={loading}
              active={active}
              handlePagination={handlePagination}
            />
          }
        ></Route>
        <Route
          path="/client"
          element={
            <Home
              key={clients.count}
              clients={clients}
              loading={loading}
              active={active}
              handlePagination={handlePagination}
            />
          }
        >
          <Route path=":id" element={<ClientDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
