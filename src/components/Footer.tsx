import { site } from "@/content/site";
import { container } from "./Section";

export function Footer() {
  return (
    <footer className="border-t-4 border-ink bg-ink py-8 text-sm">
      <div
        className={`${container} flex flex-wrap justify-between gap-x-8 gap-y-3`}
      >
        <p>{site.footer.left}</p>
        <p>{site.footer.right}</p>
      </div>
    </footer>
  );
}
