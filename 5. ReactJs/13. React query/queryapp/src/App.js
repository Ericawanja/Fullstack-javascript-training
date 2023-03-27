import "./App.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client ={queryClient}>
      <div className="App">
        <h1>App</h1>
      </div>
    </QueryClientProvider>
  );
}

export default App;
