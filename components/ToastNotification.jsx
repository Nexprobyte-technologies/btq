"use client";

import { useStore } from "@/context/StoreContext";
import { Sparkles } from "./icons";

export default function ToastNotification() {
  const { toast } = useStore();

  if (!toast) return null;

  return (
    <div className="boutique-toast" role="status" aria-live="polite">
      <Sparkles size={16} />
      <span>{toast}</span>
    </div>
  );
}
