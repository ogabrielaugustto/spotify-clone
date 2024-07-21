import Footer from "@/components/footer";
import Inicio from "@/components/inicio";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1 gap-2 p-2">
        <Sidebar />
        <Inicio />
      </div>
      <Footer />{" "}
    </div>
  );
}
