import { Github, MapPinned } from "lucide-react";
import { Button } from "./ui/button";

export function Header() {
  return (
    <>
      <header className="flex w-full items-center justify-between border-b p-4 dark:border-zinc-800">
        <div className="flex items-center gap-8 dark:text-white">
          <div className="flex items-end gap-2">
            <MapPinned size={36} />
            <span className="text-xl font-semibold">Onde estou?</span>
          </div>
          <Button>Obter Localização</Button>
        </div>
        <nav className="dark:text-white">
          <Button variant={"outline"} size={"icon"}>
            <Github />
          </Button>
        </nav>
      </header>
    </>
  );
}
