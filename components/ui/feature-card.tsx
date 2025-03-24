import { IconSvgProps } from "@/types";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.FC<IconSvgProps>;
}

export const FeatureCard = ({ title, description, icon: Icon }: FeatureCardProps) => {
  return (
    <div className="p-8 rounded-xl bg-white/80 dark:bg-black/20 backdrop-blur-sm border border-gray-200 dark:border-white/5 hover:border-primary/30 transition-all duration-300 shadow-sm">
      <div className="flex flex-col gap-5">
        <div className="p-3 rounded-lg bg-primary/10 w-fit">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
}; 