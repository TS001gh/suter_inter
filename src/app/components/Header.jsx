"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import suter_inter_logo from "../../public/images/suter_inter.png";
import suter_logo from "../../public/images/brands/mr_suter.png";
import { useLocale, useTranslations } from "next-intl";
import LangSelector from "./LangSelector";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const t = useTranslations("Header");

  const locale = useLocale();

  return (
    <header
      className="fixed top-0 left-0 right-0 bg-secondary shadow-lg z-50 transition-all 
    lg:max-w-5xl max-w-[24rem] sm:max-w-2xl mx-auto mt-3 ease-in-out rounded-3xl"
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex justify-between gap-4 items-center max-h-12 overflow-hidden">
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={suter_inter_logo}
              alt="Suter International"
              width={35}
              height={35}
              className="md:w-12 md:h-12 w-10 h-10 object-contain rounded-full"
            />
          </Link>
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-300"
          >
            <Image
              src={suter_logo}
              alt="Mr.Suter International"
              width={90}
              height={90}
              className="object-contain rounded-full"
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link
            href={`/${locale}`}
            className="text-text-primary hover:text-primary hover:underline transition-colors duration-300"
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/products`}
            className="text-text-primary hover:text-primary hover:underline transition-colors duration-300"
          >
            {t("products")}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="text-text-primary hover:text-primary hover:underline transition-colors duration-300"
          >
            {t("contact")}
          </Link>
          <Link
            href={`/${locale}/brands`}
            className="text-text-primary hover:text-primary hover:underline transition-colors duration-300"
          >
            {t("brand")}
          </Link>
          <LangSelector locale={locale} />
        </div>
        <button
          className="md:hidden p-2 rounded-full hover:bg-primary hover:text-secondary transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-secondary shadow-inner pb-4">
          <Link
            href={`/${locale}`}
            className="block py-2 px-4 text-sm text-text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("home")}
          </Link>
          <Link
            href={`/${locale}/products`}
            className="block py-2 px-4 text-sm text-text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("products")}
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="block py-2 px-4 text-sm text-text-primary hover:bg-primary hover:text-secondary transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            {t("contact")}
          </Link>
          <Link
            href={`/${locale}/brands`}
            className="block py-2 px-4 text-sm text-text-primary hover:bg-primary hover:text-secondary transition-colors duration-300 mb-3"
            onClick={() => setIsOpen(false)}
          >
            {t("brand")}
          </Link>

          <div className="ml-2">
            <LangSelector locale={locale} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
