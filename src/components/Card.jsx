const Card = ({ title, icon, content, index }) => {
  return (
    <div
      className={`relative mx-auto grid h-80 max-w-sm place-content-center rounded-lg bg-white px-5 py-10 text-center lg:px-10 lg:text-left ${
        index === 1 ? 'lg:mt-12' : index === 2 ? 'lg:mt-24' : ''
      }`}
    >
      <img
        src={icon}
        alt={content}
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-Primary-violet p-4 lg:left-20"
      />
      <h3 className="mt-8 text-2xl font-bold text-Neutral-darkViolet">
        {title}
      </h3>
      <p className="mt-5 text-Neutral-grayViolet">{content}</p>
    </div>
  );
};

export default Card;
