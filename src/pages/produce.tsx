import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

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
  const { data: allProduce, isLoading } = api.seasonality.getAll.useQuery();
  const [filterMonth, setFilterMonth] = useState<boolean>(false);
  const currentMonth = getCurrentMonth();

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
                A table of produce and the months they are in season.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/january`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "january"}
                    >
                      January
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/february`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "february"}
                    >
                      February
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/march`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "march"}
                    >
                      March
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/april`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "april"}
                    >
                      April
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/may`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "may"}
                    >
                      May
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/june`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "june"}
                    >
                      June
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/july`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "july"}
                    >
                      July
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/august`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "august"}
                    >
                      August
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/september`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "september"}
                    >
                      September
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/october`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "october"}
                    >
                      October
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/november`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "november"}
                    >
                      November
                    </Link>
                  </TableHead>
                  <TableHead>
                    <Link
                      href={`/produce/month/december`}
                      className="hover:underline"
                      hidden={filterMonth && currentMonth !== "december"}
                    >
                      December
                    </Link>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {allProduce?.map((produce, index) => (
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
                    <TableCell
                      className={
                        produce.january === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "january"}
                    >
                      {produce.january}
                    </TableCell>
                    <TableCell
                      className={
                        produce.february === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "february"}
                    >
                      {produce.february}
                    </TableCell>
                    <TableCell
                      className={
                        produce.march === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "march"}
                    >
                      {produce.march}
                    </TableCell>
                    <TableCell
                      className={
                        produce.april === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "april"}
                    >
                      {produce.april}
                    </TableCell>
                    <TableCell
                      className={
                        produce.may === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "may"}
                    >
                      {produce.may}
                    </TableCell>
                    <TableCell
                      className={
                        produce.june === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "june"}
                    >
                      {produce.june}
                    </TableCell>
                    <TableCell
                      className={
                        produce.july === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "july"}
                    >
                      {produce.july}
                    </TableCell>
                    <TableCell
                      className={
                        produce.august === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "august"}
                    >
                      {produce.august}
                    </TableCell>
                    <TableCell
                      className={
                        produce.september === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "september"}
                    >
                      {produce.september}
                    </TableCell>
                    <TableCell
                      className={
                        produce.october === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "october"}
                    >
                      {produce.october}
                    </TableCell>
                    <TableCell
                      className={
                        produce.november === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "november"}
                    >
                      {produce.november}
                    </TableCell>
                    <TableCell
                      className={
                        produce.december === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                      hidden={filterMonth && currentMonth !== "december"}
                    >
                      {produce.december}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Produce;
