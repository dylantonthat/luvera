interface BentoGridProps extends React.ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    className?: string;
  }
  
  interface BentoCardProps extends React.ComponentPropsWithoutRef<"div"> {
    name: string;
    className: string;
    background: React.ReactNode;
    description: string;
    href: string;
    cta: string;
  }
  
  const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
    return (
      <div className={`grid w-full auto-rows-[22rem] grid-cols-3 gap-4 ${className}`} {...props}>
        {children}
      </div>
    );
  };
  
  const BentoCard = ({
    name,
    className,
    background,
    description,
    href,
    cta,
    ...props
  }: BentoCardProps) => (
    <div
      key={name}
      className={`group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-xl bg-white shadow-lg dark:bg-black dark:border dark:border-neutral-700 ${className}`}
      {...props}
    >
      <div className="flex justify-center">{background}</div>
      <div className="z-10 flex flex-col gap-2 p-6 transition-all duration-300">
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
        <p className="text-neutral-500">{description}</p>
      </div>
  
      <div className="absolute bottom-0 flex w-full transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <a href={href} className="text-brand-dark font-medium hover:underline">{cta}</a>
      </div>
    </div>
  );
  
  export { BentoCard, BentoGrid };
  