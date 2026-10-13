export function SiteIcon({ name, className }: { name: "arrow" | "leaf" | "check" | "sun" | "phone" | "whatsapp"; className?: string }) {
  return <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {name === "arrow" && <path d="M4 12h15m-6-6 6 6-6 6" />}
    {name === "leaf" && <><path d="M20 4c-9-1-16 3-16 9a7 7 0 0 0 7 7c6 0 10-7 9-16Z" /><path d="m4 20 11-11M9 15V9m0 6h6" /></>}
    {name === "check" && <><circle cx="12" cy="12" r="9" /><path d="m8 12 3 3 5-6" /></>}
    {name === "sun" && <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" /></>}
    {name === "phone" && <path d="m7 3 3 5-2 2c1 3 3 5 6 6l2-2 5 3-1 4C10 23 1 14 3 4l4-1Z" />}
    {name === "whatsapp" && <><path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.7-4.5A9 9 0 1 1 21 11.5Z" /><path d="m8 7 2 3-1 1c.7 1.8 1.7 2.8 3.5 3.5l1-1 3 2c-1 3-5.1 1.7-7.5-.7S5 8 8 7Z" /></>}
  </svg>;
}
