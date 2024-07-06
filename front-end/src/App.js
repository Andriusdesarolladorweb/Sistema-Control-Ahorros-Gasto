import "./css/Login.css";

export default function App() {
  return (
    <div className="App bg-info vh-100 d-flex text-center justify-content-center  ">
      <div className="container bg-white text-black rounded-5   ">
        <br />
        <h1> Login</h1>
        <br />
        <form action="">
          <div className="">
            <input type="text" placeholder="Usuario" />
            <br />
            <br />
            <input type="password" placeholder="Contraseña" />
          </div>
          <br />
          <div className="">
            <button className="btn btn-info ">Ingresar</button>
          </div>
        </form>
      </div>
    </div>
  );
}
