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

  const handleBackToHome = () => {
    setShowChat(false);
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

  // Página inicial (Hero Section)
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <div className="min-h-screen relative flex items-center justify-center">
        {/* Gradiente animado de fundo */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-20">
          {/* Header */}
          <header className="absolute top-0 left-0 right-0 flex items-center justify-end p-5 h-[64px]">
            <button 
              className="text-gray-700 dark:text-gray-300 flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              onClick={() => window.location.reload()}
              aria-label="Atualizar"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </header>

          {/* Main Content */}
          <div className="flex flex-col items-center w-full max-w-2xl">
            {/* Título com animação */}
            <div className="relative flex items-center gap-2 mb-4">
              <h1 className="text-6xl md:text-7xl font-light tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                Olá, sou a Mari
              </h1>
              <span className="text-4xl md:text-5xl animate-pulse">✨</span>
            </div>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-light mb-12 text-center">
              Sua assistente virtual inteligente
              <br />
              <span className="text-sm">Como posso te ajudar hoje?</span>
            </p>

            {/* Botões de ação rápida */}
            <div className="flex flex-col w-full max-w-[480px] gap-4 mb-12">
              <button 
                className="group relative flex items-center overflow-hidden rounded-2xl h-16 px-6 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[1.02]"
                onClick={handleStartChat}
              >
                <div className="absolute left-6 w-6 h-6">
                  <svg className="w-full h-full text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 14H6l-2 2V4h16v12z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium pl-12">Iniciar conversa com a Mari</span>
                <div className="absolute right-6">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>

              <button 
                className="group relative flex items-center overflow-hidden rounded-2xl h-16 px-6 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[1.02]"
                onClick={() => document.querySelector('#ajuda')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <div className="absolute left-6 w-6 h-6">
                  <svg className="w-full h-full text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/>
                  </svg>
                </div>
                <span className="text-lg font-medium pl-12">Ver dicas e ajuda</span>
                <div className="absolute right-6">
                  <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </button>

              <button 
                className="group relative flex items-center overflow-hidden rounded-2xl h-16 px-6 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 active:scale-[1.02]"
                onClick={() => window.open('https://docs.openai.com/', '_blank')}
              >
                <div className="absolute left-6 w-6 h-6">
                  <svg className="w-full h-full text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-lg font-medium pl-12">Documentação OpenAI</span>
                <div className="absolute right-6">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Footer com Input */}
          <footer className="absolute bottom-0 left-0 right-0 p-5 pb-8 bg-transparent">
            <div className="relative flex items-center h-14 w-full max-w-[600px] mx-auto">
              <label className="absolute left-4 w-6 h-6 text-blue-600 dark:text-blue-400">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </label>
              <input 
                className="w-full h-full rounded-full text-gray-800 dark:text-gray-200 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 border-none bg-white shadow-lg placeholder:text-gray-400 dark:placeholder:text-gray-500 pl-14 pr-14 text-base font-normal leading-normal"
                placeholder="Digite uma pergunta para iniciar o chat..."
                type="text"
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleStartChat();
                  }
                }}
                onFocus={handleStartChat}
              />
              <button 
                className="absolute right-2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-md"
                onClick={handleStartChat}
                aria-label="Iniciar chat"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </footer>
        </div>
      </div>

      {/* Seção de Ajuda */}
      <section id="ajuda" className="min-h-screen bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-light mb-12 text-center text-gray-800 dark:text-gray-200">
            Como funciona?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Inicie uma conversa</h3>
              <p className="text-gray-600 dark:text-gray-400">Clique no botão acima e comece a falar com a Mari</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">IA Inteligente</h3>
              <p className="text-gray-600 dark:text-gray-400">Respostas precisas usando tecnologia avançada da OpenAI</p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-medium mb-2 text-gray-800 dark:text-gray-200">Rápido e eficiente</h3>
              <p className="text-gray-600 dark:text-gray-400">Obtenha respostas instantâneas para suas perguntas</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
