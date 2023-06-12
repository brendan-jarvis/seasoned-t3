import { type NextPage } from "next";
import Link from "next/link";
import Head from "next/head";

import { PageLayout } from "~/components/Layout";
import { LoadingSpinner } from "~/components/LoadingSpinner";
import dayjs from "dayjs";
import { toast } from "react-hot-toast";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { Button } from "~/components/ui/button";
import { CheckCircle, MinusCircle, Trash2, Star, StarHalf } from "lucide-react";

import { api } from "~/utils/api";

const Favourites: NextPage = () => {
  const {
    data: favourites,
    isLoading,
    error,
  } = api.favourites.getAll.useQuery();

  const { mutate, isLoading: isDeletingFavourite } =
    api.favourites.deleteOne.useMutation({
      onSuccess: () => {
        toast.success(`Removed recipe from favorites!`);
      },
      onError: (e) => {
        const errorMessage = e.data?.zodError?.fieldErrors.content;
        const errorCode = e.data?.code;
        if (errorMessage && errorMessage[0]) {
          toast.error(errorMessage[0]);
        }
        if (errorCode === "INTERNAL_SERVER_ERROR") {
          toast.error("Recipe already deleted!");
        } else {
          toast.error(
            "Failed to remove recipe from favorites! Please try again later."
          );
        }
      },
    });

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating); // Get the integer part of the rating
    const hasHalfStar = rating % 1 !== 0; // Check if there is a decimal part

    const stars = [];

    // Render full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} />);
    }

    // Render half star if necessary
    if (hasHalfStar) {
      stars.push(<StarHalf key={fullStars} />);
    }

    return stars;
  };

  if (isLoading) {
    return (
      <PageLayout>
        <LoadingSpinner size={64} />
      </PageLayout>
    );
  }

  return (
    <>
      <Head>
        <title>Seasoned - Favourites</title>
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
        <div className="px-4">
          <h1 className="py-8 text-center font-serif text-4xl font-bold tracking-wide text-seasoned-green">
            Favourites
          </h1>

          {error ? (
            <>
              <h2 className="text-center font-serif text-xl text-destructive">
                {error.message === "UNAUTHORIZED"
                  ? "Error: not signed in"
                  : `Error: ${error.message}`}
              </h2>
              <p className="font-sans text-base ">
                Please sign in to view your favourites.
              </p>
            </>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>
                  {/* <TableHead>Rating</TableHead> */}
                  <TableHead>Completed</TableHead>
                  <TableHead>Added On</TableHead>
                  <TableHead>Last Updated</TableHead>
                  <TableHead>Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {favourites.map((favourite) => (
                  <TableRow key={favourite.recipeId}>
                    <TableCell>
                      <Link
                        href={`/recipes/${favourite.recipeId}`}
                        className="text-blue-500 hover:text-blue-700 focus:text-blue-700"
                      >
                        {favourite.recipe.title}
                      </Link>
                    </TableCell>
                    {/* <TableCell>
                      {favourite.rating ? renderStars(favourite.rating) : null}
                    </TableCell> */}
                    <TableCell>
                      {favourite.completed ? <CheckCircle /> : <MinusCircle />}
                    </TableCell>
                    <TableCell>
                      {dayjs(favourite.createdAt).format("D MMM YYYY")}
                    </TableCell>
                    <TableCell>
                      {dayjs(favourite.updatedAt).format("D MMM YYYY")}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        onClick={() => {
                          mutate({
                            recipeId: favourite.recipeId,
                          });
                        }}
                        className="px-2"
                      >
                        <Trash2 />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default Favourites;
