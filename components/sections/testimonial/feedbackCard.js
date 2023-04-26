import { StarIcon } from "@heroicons/react/24/solid";
import {
  Avatar,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";

export default function FeedBackCard({ name, star, description }) {
  const rating = [];
  for (let i = 0; i < (star || 5); i++) {
    rating.push(
      <StarIcon
        className="h-4 w-4 md:h-5 md:w-5 text-yellow-700 dark:text-yellow-300 text-xs"
        key={i}
      />
    );
  }

  return (
    <div className="mx-1">
      <Card
        color="transparent"
        shadow={false}
        className="w-full max-w-[50rem] mx-auto bg-white px-5 py-1 shadow-md mb-4 dark:bg-gray-800 border dark:border-gray-700 dark:text-white"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-5"
        >
          <Avatar
            size="xl"
            variant="rounded"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="candice wu"
            className="rounded-full"
          />
          <div className="flex w-full gap-0.5 justify-start md:justify-between flex-col md:flex-row">
            <div className="flex flex-col">
              <Typography
                variant="h5"
                color="blue-gray"
                className="dark:text-gray-300"
              >
                {name}
              </Typography>
              <Typography
                color="blue-gray"
                className="dark:text-gray-400 text-xs font-medium"
              >
                Frontend Lead @ Google
              </Typography>
            </div>
            <div className="5 flex items-center gap-0">
              {/* <StarIcon className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
              <StarIcon className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
              <StarIcon className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
              <StarIcon className="h-5 w-5 text-yellow-700 dark:text-yellow-300" />
              <StarIcon className="h-5 w-5 text-yellow-700 dark:text-yellow-300" /> */}
              {rating}
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0">
          <Typography className="text-center dark:text-gray-300">
            {description}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
}
