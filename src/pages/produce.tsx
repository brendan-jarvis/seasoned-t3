import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import { PageLayout } from "~/components/Layout";
import { api } from "~/utils/api";

import { capitaliseFirstLetters } from "~/utils/func";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

const Produce: NextPage = () => {
  const { data: allProduce, isLoading } = api.seasonality.getAll.useQuery();

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
          <div className="container">
            <Table>
              <TableCaption>
                A table of produce and the months they are in season.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>January</TableHead>
                  <TableHead>February</TableHead>
                  <TableHead>March</TableHead>
                  <TableHead>April</TableHead>
                  <TableHead>May</TableHead>
                  <TableHead>June</TableHead>
                  <TableHead>July</TableHead>
                  <TableHead>August</TableHead>
                  <TableHead>September</TableHead>
                  <TableHead>October</TableHead>
                  <TableHead>November</TableHead>
                  <TableHead>December</TableHead>
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
                    >
                      {produce.january}
                    </TableCell>
                    <TableCell
                      className={
                        produce.february === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.february}
                    </TableCell>
                    <TableCell
                      className={
                        produce.march === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.march}
                    </TableCell>
                    <TableCell
                      className={
                        produce.april === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.april}
                    </TableCell>
                    <TableCell
                      className={
                        produce.may === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.may}
                    </TableCell>
                    <TableCell
                      className={
                        produce.june === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.june}
                    </TableCell>
                    <TableCell
                      className={
                        produce.july === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.july}
                    </TableCell>
                    <TableCell
                      className={
                        produce.august === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.august}
                    </TableCell>
                    <TableCell
                      className={
                        produce.september === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.september}
                    </TableCell>
                    <TableCell
                      className={
                        produce.october === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.october}
                    </TableCell>
                    <TableCell
                      className={
                        produce.november === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
                    >
                      {produce.november}
                    </TableCell>
                    <TableCell
                      className={
                        produce.december === "Available"
                          ? "bg-green-100"
                          : "bg-red-100"
                      }
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
