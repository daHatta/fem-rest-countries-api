
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { PiMoon, PiMoonFill } from "react-icons/pi";

const ThemeSwitcher = () => {

    const [ mounted, setMounted ] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();

    useEffect(() => setMounted(true), []);

    if (!mounted)
        return (
          <Image
            src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
            width={25}
            height={25}
            sizes="20x20"
            alt="Loading Light/Dark Toggle"
            priority={false}
            title="Loading Light/Dark Toggle"
          />
        );
    
      if (resolvedTheme === "dark") {
        return (
          <button
            className="flex justify-center items-center gap-x-[10px]"
            onClick={() => setTheme("light")}
          >
            <PiMoonFill />
            <span>Dark Mode</span>
          </button>
        );
      }
    
      if (resolvedTheme === "light") {
        return (
          <button
            className="flex justify-center items-center gap-x-[10px]"
            onClick={() => setTheme("dark")}
          >
            <PiMoon />
            <span>Dark Mode</span>
          </button>
        );
      }
    };

export default ThemeSwitcher