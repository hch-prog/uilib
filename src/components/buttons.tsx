import { Home } from "lucide-react";
import { Button } from "./ui/button";


export default function Buttons() {
  return (
    <div className="flex flex-wrap items-center gap-8 p-8">
      <Button>Primary Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button variant="default" size="icon" onClick={() => alert("Home clicked!")}>
        <Home size={18} />
      </Button>
    </div>
  );
}
