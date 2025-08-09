import Cards from "./components/Cards";
import Form from "./components/Forms";

function App() {
  return (
    <div className="flex justify-center bg-gray-200 w-screen h-screen items-center gap-13">
      <Form />
      <Cards />
    </div>
  );
}

export default App;
