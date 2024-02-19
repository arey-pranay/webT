import logo from "./assets/neonDc.gif";
export default function App() {
  return (
    <div className="flex w-screen h-screen bg-slate-500">
      <div className="w-[50vw] h-screen bg-black">
        <h1 className="text-blue-800">hola</h1>
      </div>
      <div className="w-[50vw] h-screen">
        <img src={logo} alt="logos" />
      </div>
    </div>
  );
}
