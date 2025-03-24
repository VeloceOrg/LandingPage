import { Logo } from "@/components/icons";
import Link from "next/link";

export const AnimatedLogo = () => {
  return (
    <Link 
      href="/" 
      className="flex items-center gap-2 group/logo"
    >
      {/* Logo with glow effect */}
      <div className="relative">
        <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-0 group-hover/logo:opacity-20 blur transition-all duration-300 group-hover/logo:duration-200" />
        <div className="relative transition-transform duration-300 group-hover/logo:scale-110">
          <Logo className="h-8 w-8" />
        </div>
      </div>

      {/* Animated text */}
      <div className="relative overflow-hidden">
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400">
          {["V", "e", "l", "o", "c", "e"].map((letter, i) => (
            <span
              key={`${letter}-${i}`}
              className="inline-block transition-transform duration-300 group-hover/logo:translate-y-[-100%]"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {letter}
            </span>
          ))}
        </p>
        <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 absolute top-0 left-0">
          {["V", "e", "l", "o", "c", "e"].map((letter, i) => (
            <span
              key={`${letter}-${i}-clone`}
              className="inline-block translate-y-[100%] transition-transform duration-300 group-hover/logo:translate-y-0"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {letter}
            </span>
          ))}
        </p>
      </div>
    </Link>
  );
}; 