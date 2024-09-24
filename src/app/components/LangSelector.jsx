"use client";
import { usePathname, useRouter } from "next/navigation";

const LangSelector = ({ locale }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (e) => {
    const newLocale = e.target.value;
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };
  const langs = ["tr", "en", "ar"];
  return (
    <div>
      <select
        className="p-2 border rounded-full shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition duration-300"
        value={locale}
        onChange={handleChange}
      >
        {langs.map((lang) => (
          <option key={lang} value={lang}>
            {lang.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LangSelector;
