import Navbar from "./components/Navbar";
export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <Navbar />
      <h1 className="text-4xl font-bold text-blue-600">
        Hello React + Tailwind 🚀
      </h1>
    </div>
  );
}
