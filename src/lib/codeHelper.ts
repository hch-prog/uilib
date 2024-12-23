export const codeSnippets = {

  buttons: `

export default function Buttons() {
  return (
    <div className="flex flex-wrap gap-4 justify-center items-center p-4 md:p-8">
      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 animate-bounce\`}>
        Bouncing Button
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group\`}>
        <span className="flex items-center space-x-2">
          <span>Spinning Icon</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:animate-spin" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        </span>
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 relative overflow-hidden group\`}>
        <span className="relative z-10">Shimmering Effect</span>
        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-300 dark:via-zinc-500 to-transparent transform -skew-x-12 -translate-x-full transition-transform duration-1000 ease-out group-hover:translate-x-full"></span>
      </button>

      <button className={\`inline-flex items-center justify-center rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background h-10 py-2 px-4 bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 group transform hover:scale-105 transition-transform duration-200\`}>
        <span className="flex items-center space-x-2">
          <span>Pulsing Dot</span>
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-slate-900 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white dark:bg-slate-900"></span>
          </span>
        </span>
      </button>
    </div>
  );
}`, accordions: `

export default function Accordions() {
  return (
    <div className="flex flex-col gap-8">
      {/* Default Accordion */}
      <div>
        <h3 className="mb-4 font-medium text-sm">Default Accordion</h3>
        <Accordion type={type} collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.title} value={item.title}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Card Style Accordion */}
      <div>
        <h3 className="mb-4 font-medium text-sm">Card Style Accordion</h3>
        <Accordion type="single" collapsible className="w-full space-y-2">
          {items.map((item, index) => (
            <AccordionItem 
              key={index} 
              value={item.title}
              className="border-zinc-200 dark:border-zinc-800 border rounded-lg"
            >
              <AccordionTrigger className="px-4">{item.title}</AccordionTrigger>
              <AccordionContent className="px-4">{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Modern Style Accordion */}
      <div>
        <h3 className="mb-4 font-medium text-sm">Modern Style Accordion</h3>
        <div className="space-y-2">
          {items.map((item, index) => (
            <ModernAccordionItem
              key={index}
              title={item.title}
              content={item.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}`,
  toast: `
import Toast from "@/components/toast";

// Basic usage
<Toast 
  message="Successfully saved!"
  type="success"
  position="top-right"
  duration={3000}
/>

// Different types
<Toast message="Operation successful!" type="success" />
<Toast message="Something went wrong!" type="error" />
<Toast message="Please note!" type="info" />
<Toast message="Be careful!" type="warning" />

// Different positions
<Toast message="Top left message" position="top-left" />
<Toast message="Bottom right message" position="bottom-right" />
<Toast message="Bottom left message" position="bottom-left" />

// Custom duration
<Toast message="I'll stay longer" duration={5000} />
`,
  carousel: `
import Carousel from "@/components/carousel";

// Basic usage with images
const items = [
  {
    id: 1,
    content: (
      <img 
        src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7"
        alt="Slide 1"
        className="w-full h-[400px] object-cover rounded-lg"
      />
    )
  },
  {
    id: 2,
    content: (
      <img 
        src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8"
        alt="Slide 2"
        className="w-full h-[400px] object-cover rounded-lg"
      />
    )
  },
  {
    id: 3,
    content: (
      <img 
        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70"
        alt="Slide 3"
        className="w-full h-[400px] object-cover rounded-lg"
      />
    )
  }
];

// Render the carousel
<div className="w-full max-w-4xl mx-auto">
  <Carousel
    items={items}
    autoPlay={true}
    interval={5000}
    showArrows={true}
    showDots={true}
  />
</div>
`
}
