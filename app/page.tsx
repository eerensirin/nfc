"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    startWidget?: () => void;
  }
}

export default function Page() {
  useEffect(() => {
    // Widget scriptini ekle
    const script = document.createElement("script");
    script.type = "text/javascript";
    // Orijinal snippet protocol-relative idi (//...). HTTPS'e sabitliyoruz.
    script.src =
      "https://ckbogazici.alo-tech.com/click2connects/click2connect.js?widget_key=ahRzfm11c3RlcmktaGl6bWV0bGVyaXIhCxIUQ2xpY2syQ29ubmVjdFBhY2thZ2UYgIDaweTc7AkMogEXY2tib2dhemljaS5hbG8tdGVjaC5jb20";
    script.async = true;

    script.onload = () => {
      // Script yüklendikten sonra widget’ı başlat
      window.startWidget?.();
    };

    document.body.appendChild(script);

    return () => {
      // Temizlik
      script.remove();
    };
  }, []);

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: "url('/ck-bogazici.png')" }}
    >
      {/* İçerik alanın (isteğe bağlı) */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 flex items-end justify-end min-h-screen p-4">
        {/* Sağ altta küçük bir footer/etiket bırakmak istersen */}
        <div className="text-white/80 text-xs">
          {/* Buraya bir şey koymak zorunda değilsin, widget zaten sağ altta çıkacaktır */}
        </div>
      </div>
    </main>
  );
}
