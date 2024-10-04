import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";

export function App() {
  return (
    <div className="p-10 xl:p-16">
      <Nav/>
      <ShoeDetail/>
    </div>
  );
}

