import './App.css';
import Marcas from './components/Marca/Marca';
function App() {
  return (
    <>
    <div>
      <h1>Consulte a tabela FIPE</h1>
    </div>
    <div>
      <form>
        <div>
        <input type="select">
        </input>
        <Marcas />
        </div>
        <div>
        <input type="select">
        </input>
        <div>
        </div>
        <input type="select">
        </input>
        </div>
      </form>
      <button>Enviar</button>
    </div>
    </>
  );
}

export default App;
