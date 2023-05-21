import { type NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { PageLayout } from "~/components/Layout";
import { Calendar } from "~/components/ui/calendar";

const CalendarPage: NextPage = () => {
  const [date, setDate] = useState<Date | undefined>(undefined);

  const DisplayDate = () => {
    if (date) {
      return (
        <div className="text-center">
          <p className="text-2xl font-bold">{date.toLocaleDateString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <Head>
        <title>Seasoned</title>
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
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="rounded-md border"
        />
        <DisplayDate />
      </PageLayout>
    </>
  );
};

export default CalendarPage;
