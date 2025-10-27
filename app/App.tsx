"use client";

import { useCallback, useState } from "react";
import { ChatKitPanel, type FactAction } from "@/components/ChatKitPanel";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function App() {
  const { scheme, setScheme } = useColorScheme();
  const [showChat, setShowChat] = useState(false);

  const handleWidgetAction = useCallback(async (action: FactAction) => {
    if (process.env.NODE_ENV !== "production") {
      console.info("[ChatKitPanel] widget action", action);
    }
  }, []);

  const handleResponseEnd = useCallback(() => {
    if (process.env.NODE_ENV !== "production") {
      console.debug("[ChatKitPanel] response end");
    }
  }, []);

  const handleStartChat = () => {
    setShowChat(true);
  };

  const handleWhatsAppClick = () => {
    window.open('https://api.whatsapp.com/send/?phone=5584998561010&text=Olá&type=phone_number&app_absent=0', '_blank');
  };

  const handleMapsClick = () => {
    window.open('https://maps.app.goo.gl/v6StpsTBydrvGHBQ8', '_blank');
  };

  // Se mostrar chat, exibir apenas o ChatKitPanel
  if (showChat) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-end bg-slate-100 dark:bg-slate-950">
        <div className="mx-auto w-full max-w-5xl">
          <ChatKitPanel
            theme={scheme}
            onWidgetAction={handleWidgetAction}
            onResponseEnd={handleResponseEnd}
            onThemeRequest={setScheme}
          />
        </div>
      </main>
    );
  }

  // Página inicial (Hero Section) - Baseada no código fornecido
  return (
    <main className="flex min-h-screen flex-col bg-white font-montserrat">
      <div className="min-h-screen relative">
        <div className="relative w-full h-screen overflow-hidden">
          {/* Gradiente animado de fundo */}
          <div className="absolute inset-0 bg-gradient-animated opacity-20" />
          <div className="relative z-10 flex flex-col h-full bg-white">
            {/* Header */}
            <header className="absolute top-0 left-0 right-0 flex items-center justify-end p-5 h-[64px]">
              <button 
                className="text-gray-700 flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 transition-colors"
                onClick={() => window.location.reload()}
                aria-label="Atualizar"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
            </header>

            {/* Main Content */}
            <main className="flex flex-col flex-1 justify-center items-center px-4 w-full">
              <div className="flex flex-col items-center w-full">
                <div className="relative flex items-center gap-2 mb-3">
                  <h1 className="text-brand-green text-[36px] md:text-[48px] font-light tracking-[0.5px] font-poppins animate-fadeInUp">
                    Oi, sou a Mari
                  </h1>
                  <span className="text-[32px] md:text-[40px] absolute -top-4 -right-8 opacity-0 animate-fadeInStar">
                    ✨
                  </span>
                </div>
                <p className="text-gray-600 text-[15px] md:text-[18px] font-normal tracking-[0.3px] mb-[48px] font-poppins text-center">
                  Faça uma pergunta para mim
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex w-[88%] max-w-[480px] flex-col items-stretch gap-[14px]">
                <button 
                  className="group relative flex min-w-[84px] cursor-pointer items-center overflow-hidden rounded-[16px] h-[58px] px-5 bg-white text-gray-800 shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out active:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                  onClick={handleWhatsAppClick}
                >
                  <svg className="w-[22px] h-[22px] absolute left-5 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.934 6.953c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span className="truncate text-[17px] font-medium pl-[40px] text-left w-full font-poppins">
                    WhatsApp
                  </span>
                </button>

                <button 
                  className="group relative flex min-w-[84px] cursor-pointer items-center overflow-hidden rounded-[16px] h-[58px] px-5 bg-white text-gray-800 shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out active:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                  onClick={handleMapsClick}
                >
                  <svg className="w-[22px] h-[22px] absolute left-5 text-red-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                  <span className="truncate text-[17px] font-medium pl-[40px] text-left w-full font-poppins">
                    Nossa localização
                  </span>
                </button>

                <button 
                  className="group relative flex min-w-[84px] cursor-pointer items-center overflow-hidden rounded-[16px] h-[58px] px-5 bg-white text-gray-800 shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition-all duration-300 ease-in-out active:scale-[1.02] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
                  onClick={handleStartChat}
                >
                  <svg className="w-[22px] h-[22px] absolute left-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 14H6l-2 2V4h16v12z"/>
                  </svg>
                  <span className="truncate text-[17px] font-medium pl-[40px] text-left w-full font-poppins">
                    Iniciar Chat com Mari
                  </span>
                </button>
              </div>
            </main>

            {/* Footer with Input */}
            <footer className="absolute bottom-0 left-0 right-0 p-5 pb-[24px] bg-transparent">
              <label className="relative flex items-center h-[54px] w-[88%] mx-auto max-w-[600px]">
                <svg className="w-6 h-6 text-blue-600 absolute left-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <input 
                  className="w-full h-full rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none bg-white shadow-input placeholder:text-gray-400 pl-12 pr-12 text-base font-normal leading-normal font-poppins"
                  placeholder="Faça uma pergunta..."
                  type="text"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleStartChat();
                    }
                  }}
                  onFocus={handleStartChat}
                />
                <button 
                  className="absolute right-1.5 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  onClick={handleStartChat}
                  aria-label="Enviar pergunta"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </label>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
