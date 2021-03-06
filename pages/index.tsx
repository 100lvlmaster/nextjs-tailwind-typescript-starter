import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { saveTheme, getTheme } from "../utils/theme_helper";
const Home = () => {
  const [mounted, setMount] = useState(false);
  const { theme, setTheme } = useTheme();

  /// Change theme
  const onChangeTheme = (val: string) => {
    setTheme(val);
    saveTheme(val);
    if (!mounted) setMount(!mounted);
  };
  /// Call on mount
  useEffect(() => onChangeTheme(getTheme()), []);

  return (
    <div className="flex flex-col">
      <div className="p-10">
        <button
          aria-label="Toggle Dark Mode"
          type="button"
          className="bg-gray-200 flex flex-col justify-cente items-center dark:bg-gray-800 rounded p-2.5 h-8 w-8"
          onClick={() => onChangeTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              className="h-4 w-4 text-gray-800 dark:text-gray-200"
            >
              {theme === "dark" ? (
                <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
              ) : (
                <path d="M20.354 15.354 A 9 9 0 0 1 8.646 3.646 A 9.003 9.003 0 0 0 12 21 a 9.003 9.003 0 0 0 8.354 -5.646 Z" />
              )}
            </svg>
          )}
        </button>
      </div>
      <div className="flex flex-grow flex-col justify-items-center items-center text-center p-40 text-3xl font-bold space-y-10">
        <div>
          Welcome to the{" "}
          <a
            href="https://nextjs.org"
            target="_blank_"
            className="text-blue-600 hover:underline"
          >
            Next.ts
          </a>{" "}
          starter
        </div>
        <a href="https://nextjs.org/docs" target="_blank_">
          <div className="border p-20 rounded border-gray-300 hover:shadow-lg">
            {" "}
            Visit the officical documentation{" "}
          </div>
        </a>
      </div>
    </div>
  );
};
export default Home;
