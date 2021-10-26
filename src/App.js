import Editor from "./Components/Editor";
import "./App.css";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Editor />
      </div>
    </QueryClientProvider>
  );
}

export default App;
