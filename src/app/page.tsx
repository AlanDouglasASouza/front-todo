import Header from "./components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-cyan-50 bg-gray-800">
      <Header />
      <h1>Projeto Todo List</h1>
    </main>
  );
}
