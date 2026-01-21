import { HeartHandshakeIcon, Star, StarHalf, User2 } from "lucide-react";
import { GradientButton, ReviewCard } from "@/components";

const reviews = [
  {
    rating: 3,
    name: "Malkit Pannu",
    answer: "Very secure and easy way to get payment",
  },
  {
    rating: 2.5,
    name: "Javed Iqbal12",
    answer:
      "Using first time got instantly payment very fast and secure, Using first time got instantly payment very fast and secure, , Using first time got instantly payment very fast and secure,  ,Using first time got instantly payment very fast and secure, ",
  },
  {
    rating: 1.5,
    name: "Javed Iqbal12",
    answer: "Using first time got instantly payment very fast and secure",
  },
  {
    rating: 3,
    name: "Malkit Pannu",
    answer: "Very secure and easy way to get payment",
  },
  {
    rating: 2.5,
    name: "Javed Iqbal12",
    answer:
      "Using first time got instantly payment very fast and secure, Using first time got instantly payment very fast and secure, , Using first time got instantly payment very fast and secure,  ,Using first time got instantly payment very fast and secure, ",
  },
  {
    rating: 1.5,
    name: "Javed Iqbal12",
    answer: "Using first time got instantly payment very fast and secure",
  },
  {
    rating: 3,
    name: "Malkit Pannu",
    answer: "Very secure and easy way to get payment",
  },
  {
    rating: 2.5,
    name: "Javed Iqbal12",
    answer:
      "Using first time got instantly payment very fast and secure, Using first time got instantly payment very fast and secure, , Using first time got instantly payment very fast and secure,  ,Using first time got instantly payment very fast and secure, ",
  },
  {
    rating: 1.5,
    name: "Javed Iqbal12",
    answer: "Using first time got instantly payment very fast and secure",
  },
  {
    rating: 1.5,
    name: "Javed Iqbal12",
    answer: "Using first time got instantly payment very fast and secure",
  },
  {
    rating: 3,
    name: "Malkit Pannu",
    answer: "Very secure and easy way to get payment",
  },
  {
    rating: 3,
    name: "Malkit Pannu",
    answer: "Very secure and easy way to get payment",
  },
];

const ReviewSection = () => {
  const total = reviews.length;
  const baseSize = Math.floor(total / 3);
  const extra = total % 3;

  const firstChunk = reviews.slice(0, baseSize + (extra > 0 ? 1 : 0));
  const secondChunk = reviews.slice(
    firstChunk.length,
    firstChunk.length + baseSize + (extra > 1 ? 1 : 0),
  );
  const thirdChunk = reviews.slice(
    firstChunk.length + secondChunk.length,
    total,
  );

  return (
    <div className="md:hero-grid font-inter relative min-h-[20vh] h-full flex flex-col justify-stretch items-center bg-mx-gray px-5 md:px-10">
      <div className="h-full w-full max-w-[1100px] flex flex-col items-center pt-20 pb-14 text-center">
        {/* Heading */}
        <div className="mb-5 flex flex-col items-center space-y-5">
          <GradientButton
            variant="secondary"
            className="rounded-full cursor-default text-sm md:text-base"
          >
            <HeartHandshakeIcon className="w-4 h-4 me-2" />
            Reviews
          </GradientButton>
          <div className="space-y-3">
            <h2 className="text-xl px-5 md:px-0 md:text-4xl text-gray-900 font-semibold">
              What our clients are saying about us
            </h2>
            <p className="text-gray-800 text-sm md:text-base px-5">
              Customer satisfaction is a primary goal for our company
            </p>
          </div>
        </div>

        {/* content */}
        <div className="w-full h-full p-10 flex flex-col items-center md:items-stretch md:flex-row gap-5">
          <div className="flex flex-col gap-5">
            {firstChunk.map((item, i) => (
              <ReviewCard key={`${item.name}-${i}`} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {secondChunk.map((item, i) => (
              <ReviewCard key={`${item.name}-${i}`} {...item} />
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {thirdChunk.map((item, i) => (
              <ReviewCard key={`${item.name}-${i}`} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
