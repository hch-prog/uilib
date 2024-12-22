"use client"
import { Clipboard } from "lucide-react";
import { useState } from 'react';
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { codeSnippets } from '@/lib/codeHelper';
import Buttons from "@/components/buttons";
import CustomAccordion from "@/components/accordions";


type ComponentName = 'buttons' | 'accordions';

const components = [
  { name: 'buttons' as const, title: 'Buttons', Component: Buttons },
  { name: 'accordions' as const, title: 'Accordions', Component: CustomAccordion },
] as const;

export default function Page() {
  // Fix 3: Initialize state with all component names
  const [showCode, setShowCode] = useState<Record<ComponentName, boolean>>({
    buttons: false,
    accordions: false
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
  
  const components = [
    { name: 'buttons' as const, title: 'Buttons', Component: Buttons },
    {
      name: 'accordions' as const,
      title: 'Accordions',
      Component: () => <CustomAccordion items={accordionItems} />
    },
  ] as const;
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