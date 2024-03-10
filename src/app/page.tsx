import { Header } from "@/components/header";
import { Main } from "@/components/main";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-8">
      <Header />
      <Main />
    </main>
  );
}
