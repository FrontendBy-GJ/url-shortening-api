import Card from './Card';

function Cards({ cards }) {
  return (
    <div className="relative z-50 mt-20 grid grid-cols-1 gap-20 lg:grid-cols-3 lg:gap-5">
      <div
        aria-hidden="true"
        className="absolute left-1/2 -z-10 h-full w-2 -translate-x-1/2 bg-Primary-cyan lg:top-1/2 lg:h-2 lg:w-full lg:max-w-6xl lg:-translate-y-9"
      />
      {cards.map((card, index) => (
        <Card key={card.title} {...card} index={index} />
      ))}
    </div>
  );
}

export default Cards;
