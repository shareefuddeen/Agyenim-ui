import ImageSlider from "./ImageSlider";

const Events = () => {
  return (
    <div className="h-[120vh] bg-gray-200 flex-col justify-center items-center p-4">
      <h1 className="mt-16 text-4xl text-center">
        Our latest contributions to communities
      </h1>
      <div className="w-[100%] mt-[4em]">
        <ImageSlider />
      </div>
    </div>
  );
};

export default Events;
