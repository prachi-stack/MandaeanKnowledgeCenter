import Navbar from "./common/navbar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <main className="p-6">
            <Navbar />
          {children}
        </main>
    </div>
  );
}
