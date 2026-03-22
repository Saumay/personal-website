export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-slate-500 text-sm">
          <span className="text-accent-primary">~/saumay</span>
          <span className="text-slate-600"> $ </span>
          <span>echo &quot;Built with ☕ and too much curiosity&quot;</span>
        </p>
        <p className="font-mono text-slate-600 text-xs">
          © {new Date().getFullYear()} Saumay Khandelwal
        </p>
      </div>
    </footer>
  );
}
