import Head from "next/head";
import { useRouter } from "next/router";

import type { NextPage } from "next";
import { api } from "~/utils/api";

import { PageLayout } from "~/components/Layout";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import Image from "next/image";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

import { Badge } from "~/components/ui/badge";

const ViewProduce: NextPage = () => {
  const router = useRouter();
  const { name } = router.query;
  const { data: produce, isLoading } = api.seasonality.getOne.useQuery({
    name: name as string,
  });

  const capitaliseFirstLetters = (string: string) => {
    return string
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const getAvailabilityClassName = (availability: string) => {
    if (availability === "Available" || availability === "Imported") {
      return "text-green-500";
    }
    if (availability.includes("Limited") || availability.includes("Imported")) {
      return "text-yellow-500";
    }
    if (availability === "Unavailable") {
      return "text-red-500";
    }
  };

  const getBadgeClassName = (type: string) => {
    // Vegetable
    // SpecialtyVegetable
    // Fruit
    // Berry
    // StoneFruit
    // SpecialtyFruit
    // Herb
    if (type.includes("Vegetable")) {
      return "border-sky-500";
    }
    if (type.includes("Fruit") || type.includes("Berry")) {
      return "border-rose-500";
    }
    if (type.includes("Herb")) {
      return "border-emerald-500";
    }
  };

  if (isLoading) {
    return (
      <>
        <Head>
          <title>Seasoned - Recipes</title>
          <meta
            name="description"
            content="Seasoned is a recipe app that allows users to search for recipes based on ingredients that are in season."
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
        </Head>
        <PageLayout>
          <LoadingSpinner size={64} />
        </PageLayout>
      </>
    );
  }

  if (!produce) {
    return (
      <>
        <Head>
          <title>Seasoned - Produce</title>
          <meta
            name="description"
            content="Seasoned is a recipe app that allows users to search for recipes based on ingredients that are in season."
          />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/apple-touch-icon.png"
          />
        </Head>
        <PageLayout>
          <h1 className="p-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
            Unable to fetch produce
          </h1>
          <p className="text-center text-lg font-semibold text-destructive">
            Sorry, Seasoned was unable to load the produce.
          </p>
        </PageLayout>
      </>
    );
  }

  const produceType = produce?.Produce?.[0]?.type
    .replaceAll("Specialty", "")
    .split(/(?=[A-Z])/)
    .join(" ");

  return (
    <>
      <Head>
        <title>Seasoned - Produce</title>
        <meta
          name="description"
          content="Seasoned is a recipe app that allows users to search for recipes based on ingredients that are in season."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
      </Head>
      <PageLayout>
        <div className="flex flex-col items-center gap-4 px-4">
          <div key={produce.id}>
            <h1 className="py-4 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
              {capitaliseFirstLetters(produce.name)}
            </h1>
            <Badge
              variant="outline"
              className={getBadgeClassName(produceType as string)}
            >
              {produceType}
            </Badge>
            <div className="flex justify-center">
              <Image
                width={256}
                height={256}
                alt={produce.name ? produce.name : "Produce"}
                src={`/images/produce/${
                  produce.name
                    ? produce.name
                        .toLowerCase()
                        .replaceAll(" - ", "-")
                        .replaceAll(" ", "-")
                    : "/images/produce.jpg"
                }.jpg`}
                quality={50}
                className="rounded-lg"
              />
            </div>
            <h2 className="py-4 text-center font-serif text-xl font-semibold tracking-wide">
              In Season
            </h2>
            <ul>
              {Object.entries(produce).map(([month, availability], index) => {
                if (availability === "Available") {
                  return <li key={index}>{capitaliseFirstLetters(month)}</li>;
                }
                return null;
              })}
            </ul>
            <h2 className="py-4 text-center font-serif text-xl font-semibold tracking-wide">
              <span className="font-serif text-xl font-semibold">
                Varieties
              </span>
            </h2>
            {produce.Produce.map((variety) => (
              <Accordion
                key={variety.id}
                type="single"
                collapsible
                className="max-w-md"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="font-sans text-base font-semibold">
                    {variety.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <h3 className="font-sans text-sm font-semibold">
                      Availability:
                    </h3>
                    <ol>
                      <li className="flex justify-between">
                        January{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.january
                          )}
                        >
                          {variety.availability.january
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        February{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.february
                          )}
                        >
                          {variety.availability.february
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        March{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.march
                          )}
                        >
                          {variety.availability.march
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        April{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.april
                          )}
                        >
                          {variety.availability.april
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        May{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.may
                          )}
                        >
                          {variety.availability.may
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        June{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.june
                          )}
                        >
                          {variety.availability.june
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        July{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.july
                          )}
                        >
                          {variety.availability.july
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        August{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.august
                          )}
                        >
                          {variety.availability.august
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        September{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.september
                          )}
                        >
                          {variety.availability.september
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        October{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.october
                          )}
                        >
                          {variety.availability.october
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        November{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.november
                          )}
                        >
                          {variety.availability.november
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                      <li className="flex justify-between">
                        December{" "}
                        <span
                          className={getAvailabilityClassName(
                            variety.availability.december
                          )}
                        >
                          {variety.availability.december
                            .split(/(?=[A-Z])/)
                            .join(" - ")}
                        </span>
                      </li>
                    </ol>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default ViewProduce;
