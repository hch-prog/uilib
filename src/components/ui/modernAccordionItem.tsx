// ModernAccordionItem.tsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface ModernAccordionItemProps {
  title: string;
  content: string;
}

const ModernAccordionItem: React.FC<ModernAccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden">
      <motion.button
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center bg-white hover:bg-zinc-50 dark:hover:bg-zinc-800 dark:bg-zinc-900 p-4 w-full text-left transition-colors"
      >
        <span className="font-medium">{title}</span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </motion.div>
      </motion.button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div initial="hidden" animate="visible" exit="exit">
            <div className="bg-zinc-50 dark:bg-zinc-800/50 p-4">{content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ModernAccordionItem;
