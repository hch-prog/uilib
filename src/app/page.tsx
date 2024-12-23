"use client"
import { Clipboard } from "lucide-react";
import { useState } from 'react';
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { codeSnippets } from '@/lib/codeHelper';
import Buttons from "@/components/buttons";
import CustomAccordion from "@/components/accordions";
import Toast from "@/components/toast";
import Carousel from "@/components/carousel";

type ComponentName = 'buttons' | 'accordions' | 'toast' | 'carousel';

const components = [
  { name: 'buttons' as const, title: 'Buttons', Component: Buttons },
  {
    name: 'accordions' as const,
    title: 'Accordions',
    Component: CustomAccordion,
  },
  {
    name: 'toast' as const,
    title: 'Toast',
    Component: () => {
      const [isVisible, setIsVisible] = useState(false);
      const [toastType, setToastType] = useState<'success' | 'error' | 'warning' | 'info'>('success');
      const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>('top-right');

      return (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => {
                setToastType('success');
                setIsVisible(true);
              }}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Show Success Toast
            </button>
            <button
              onClick={() => {
                setToastType('error');
                setIsVisible(true);
              }}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Show Error Toast
            </button>
            <button
              onClick={() => {
                setToastType('warning');
                setIsVisible(true);
              }}
              className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Show Warning Toast
            </button>
            <button
              onClick={() => {
                setToastType('info');
                setIsVisible(true);
              }}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Show Info Toast
            </button>
          </div>
          <div className="flex flex-wrap gap-4">
            <select
              className="px-4 py-2 border rounded"
              value={position}
              onChange={(e) => setPosition(e.target.value as any)}
            >
              <option value="top-right">Top Right</option>
              <option value="top-left">Top Left</option>
              <option value="bottom-right">Bottom Right</option>
              <option value="bottom-left">Bottom Left</option>
            </select>
          </div>
          {isVisible && (
            <Toast
              message={`This is a ${toastType} message!`}
              type={toastType}
              position={position}
              onClose={() => setIsVisible(false)}
            />
          )}
        </div>
      );
    }
  },
  {
    name: 'carousel' as const,
    title: 'Carousel',
    Component: () => {
      const items = [
        {
          id: 1,
          content: (
            <div className="relative h-[400px] w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
                alt="Luxury Car 1"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
                <h3 className="text-2xl font-bold">Luxury Sports Car</h3>
                <p className="text-sm opacity-90">Experience the thrill of performance</p>
              </div>
            </div>
          )
        },
        {
          id: 2,
          content: (
            <div className="relative h-[400px] w-full bg-gradient-to-r from-green-500 to-teal-500 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
                alt="Luxury Car 2"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
                <h3 className="text-2xl font-bold">Classic Beauty</h3>
                <p className="text-sm opacity-90">Timeless design meets modern technology</p>
              </div>
            </div>
          )
        },
        {
          id: 3,
          content: (
            <div className="relative h-[400px] w-full bg-gradient-to-r from-orange-500 to-red-500 rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
                alt="Luxury Car 3"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent text-white rounded-b-lg">
                <h3 className="text-2xl font-bold">Modern Masterpiece</h3>
                <p className="text-sm opacity-90">Where innovation meets elegance</p>
              </div>
            </div>
          )
        }
      ];

      return (
        <div className="w-full space-y-6">
          <div className="max-w-4xl mx-auto">
            <Carousel
              items={items}
              autoPlay={true}
              interval={5000}
              showArrows={true}
              showDots={true}
            />
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              Auto-play enabled
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Touch enabled
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              Keyboard navigation
            </div>
          </div>
        </div>
      );
    }
  }
] as const;

export default function Page() {

  const [showCode, setShowCode] = useState<Record<ComponentName, boolean>>({
    buttons: false,
    accordions: false,
    toast: false,
    carousel: false
  });

  const toggleCodeVisibility = (component: ComponentName) => {
    setShowCode(prev => ({ ...prev, [component]: !prev[component] }));
  };
  const accordionItems = [
    {
      title: "What is this?",
      content: "This is a custom accordion component built with shadcn ui."
    },
    {
      title: "How does it work?",
      content: "Click on the headers to expand/collapse the content sections."
    }
  ];

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code)
      .then(() => toast("Code copied to clipboard!"))
      .catch(err => console.error("Failed to copy: ", err));
  };

  const renderComponent = ({ name, title, Component }: typeof components[number]) => (
    <div key={name} className="flex flex-col justify-center items-start gap-4 mt-4 w-full">
      <div className="flex sm:flex-row flex-col justify-between items-start sm:items-center gap-2 w-full">
        <div className="flex justify-start items-center gap-2">
          <h1 className="font-medium text-md">{title}</h1>
        </div>
        <div className="flex justify-start items-center gap-2">
          <Button
            variant="outline"
            onClick={() => toggleCodeVisibility(name)}
            className="w-full sm:w-auto"
          >
            {showCode[name] ? 'Hide Code' : 'View Code'}
          </Button>
        </div>
      </div>
      {showCode[name] ? (
        <div className="relative w-full h-[300px] sm:h-[400px]">
          <pre className="border-zinc-900 p-4 border rounded-lg w-full h-full text-xs sm:text-sm overflow-auto">
            <code>{codeSnippets[name]}</code>
          </pre>
          <Button
            size="icon"
            variant="outline"
            onClick={() => copyToClipboard(codeSnippets[name])}
            className="top-2 right-2 absolute flex justify-center items-center p-2 rounded-md"
          >
            <Clipboard className="w-4 h-4" />
          </Button>
        </div>
      ) : (
        <div className="w-full">
          <Component />
        </div>
      )}
    </div>
  );

  return (
    <main className="bg-white dark:bg-zinc-950 min-h-screen">
      <div className="mx-auto px-4 py-16 max-w-5xl">
        <div className="space-y-8">
          <div>
            <h1 className="font-medium text-2xl text-zinc-900 dark:text-zinc-50">UI Components</h1>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400">
              A minimal collection of UI components built with shadcn ui.
            </p>
          </div>

          <div className="border-zinc-200 dark:border-zinc-800 p-6 border rounded-lg">
            <h2 className="mb-4 font-medium text-lg text-zinc-900 dark:text-zinc-50">Installation</h2>
            <div className="space-y-3 text-sm text-zinc-500 dark:text-zinc-400">
              <p>how to install and run  this </p>
              <p>made with the use of shadcnui</p>
            </div>
            <a
              href="https://ui.shadcn.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-zinc-900 dark:text-zinc-50 hover:underline"
            >
              View Documentation →
            </a>
          </div>

          {components.map(renderComponent)}
        </div>
      </div>
    </main>
  )
}