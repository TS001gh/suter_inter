import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import BrandsList from "../components/BrandsList";
import mainImage from "../../../public/images/main-image-roza-park.jpg";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("HomePage");
  const locale = useLocale();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16 space-y-16 max-w-screen-xl">
        {/* Hero Section */}
        <section className="text-text-primary bg-gradient-to-tl from-primary/75 to-secondary py-20 rounded-3xl shadow-lg mt-20 transition duration-300 animate-fade-in-left">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-down">
              {t("hero.title")}
            </h1>
            <p className="text-xl mb-8 animate-fade-in-up">
              <strong className="block">{t("hero.subtitle")}</strong>
              {t("hero.description")}
            </p>
            <Link
              href={`/${locale}/products`}
              className="bg-secondary text-primary py-3 px-8 rounded-full text-lg font-semibold hover:bg-primary-dark hover:text-secondary transition duration-300 hover:shadow-lg inline-block"
            >
              {t("hero.cta")}
            </Link>
          </div>
        </section>
      /*  <section className="bg-gradient-to-tl from-primary/75 to-secondary rounded-3xl shadow-lg mt-20 transition duration-300 animate-fade-in-right">
          <Image
            src={mainImage}
            alt="main image"
            width={1000}
            height={1000}
            className="w-full rounded-3xl"
          />
        </section>*/
        {/* Brands List */}
        <BrandsList />
        {/* Who We Are Section */}
        <section className="bg-white py-16 rounded-3xl shadow-lg">
          <div className="max-w-4xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-8 text-text-primary">
              {t("whoWeAre.title")}
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              {t("whoWeAre.description")}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t("whoWeAre.mission.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("whoWeAre.mission.description")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t("whoWeAre.legacy.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("whoWeAre.legacy.description")}
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl col-span-1 md:col-span-2">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {t("whoWeAre.vision.title")}
                </h3>
                <p className="text-text-secondary">
                  {t("whoWeAre.vision.description")}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        {/* <section className="bg-primary py-16 px-4 rounded-3xl shadow-lg overflow-hidden relative">
          <div className="flex space-x-6 items-center absolute left-0 top-1/2 -translate-y-1/2">
            {[...brands, ...brands].map((item, idx) => {
              return <Brand image={item} key={idx} />;
            })}
          </div>
          <div className="max-w-3xl mx-auto text-center px-6">
            <h2 className="text-3xl font-bold mb-8 text-secondary">
              {t("aboutUs.title")}
            </h2>
            <p className="text-xl text-secondary mb-8">
              {t("aboutUs.description")}
            </p>
            <Link
              href="/contact"
              className="bg-secondary text-primary py-3 px-8 rounded-full text-lg font-semibold hover:bg-primary-dark hover:text-secondary transition duration-300 hover:shadow-lg inline-block"
            >
              {t("aboutUs.cta")}
            </Link>
          </div>
        </section> */}
      </div>
    </div>
  );
}
