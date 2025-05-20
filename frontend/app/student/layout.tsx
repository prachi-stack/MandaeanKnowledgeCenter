import Navbar from "./common/navbar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <main className="">
            <Navbar />
          {children}
        </main>
    </div>
  );
}
