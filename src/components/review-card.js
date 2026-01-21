import { Star, StarHalf, User2 } from "lucide-react";
import GradientButton from "./ui/GradientButton";

const ReviewCard = ({ rating, name, answer }) => {
  const fullStar = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="border border-gray-200 rounded-md bg-white w-[90vw] md:w-full md:max-w-[350px] p-4 hover:hover-effect hover:scale-[103%] shadow-md">
      {/* card header */}
      <div className="flex gap-4">
        <GradientButton
          variant="secondary"
          className="custom-cursor rounded-full"
        >
          <User2 className="w-4 h-4" />
        </GradientButton>
        <div>
          <p className="font-medium">{name}</p>
          <div className="flex gap-1">
            {[...Array(fullStar)].map((_, i) => (
              <Star
                className="w-4 h-4 fill-yellow-300 stroke-gray-800"
                key={`fullStart-${i}`}
              />
            ))}
            {halfStar && (
              <StarHalf className="w-4 h-4 fill-yellow-300 stroke-gray-800" />
            )}
          </div>
        </div>
      </div>
      {/* card body */}
      <div className="text-left px-2 py-3 text-gray-800">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
