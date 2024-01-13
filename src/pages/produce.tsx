import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import type { Seasonality } from "@prisma/client";

import { PageLayout } from "~/components/Layout";
import { api } from "~/utils/api";

import { capitaliseFirstLetters, getCurrentMonth } from "~/utils/func";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Checkbox } from "~/components/ui/checkbox";

const Produce: NextPage = () => {
  const { data: allProduce } = api.seasonality.getAll.useQuery();
  const [filterMonth, setFilterMonth] = useState<boolean>(false);
  const currentMonth = getCurrentMonth();
  const months = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "november",
    "december",
  ];

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
        <div className="flex flex-col items-center justify-center py-8 text-center">
          <h2
            className="mb-2 text-xl font-bold tracking-tight text-seasoned-green"
            style={{ whiteSpace: "pre-line" }}
          >
            Produce
          </h2>
          <div className="items-top flex space-x-2">
            <Checkbox
              id="filter-month"
              checked={filterMonth}
              onCheckedChange={() => setFilterMonth(!filterMonth)}
            />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="filter-month"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Only show produce in season this month
              </label>
            </div>
          </div>
          <div className="container">
            <Table>
              <TableCaption>
                {filterMonth
                  ? "A table of produce in season this month"
                  : "A table of produce and the months they are in season."}
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  {months.map((month) => (
                    <TableHead
                      key={month}
                      hidden={filterMonth && currentMonth !== month}
                    >
                      <Link
                        href={`/produce/month/${month}`}
                        className="hover:underline"
                      >
                        {capitaliseFirstLetters(month)}
                      </Link>
                    </TableHead>
                  ))}
                </TableRow>
              </TableHeader>
              <TableBody>
                {allProduce?.map((produce, index) => {
                  if (produce[currentMonth] === "Unavailable" && filterMonth) {
                    return null;
                  }

                  return (
                    <TableRow key={index}>
                      <TableCell className="object-cover object-center">
                        <Image
                          width={64}
                          height={64}
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
                      </TableCell>
                      <TableCell>
                        <Link
                          href={`/produce/${produce.name}`}
                          className="block text-sm text-seasoned-green hover:underline"
                        >
                          {capitaliseFirstLetters(produce.name)}
                        </Link>
                      </TableCell>
                      {months.map((month) => (
                        <TableCell
                          key={month}
                          className={
                            produce[month as keyof Seasonality] === "Available"
                              ? "bg-green-100"
                              : "bg-red-100"
                          }
                          hidden={
                            filterMonth && currentMonth.toLowerCase() !== month
                          }
                        >
                          {String(produce[month as keyof Seasonality])}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Produce;
