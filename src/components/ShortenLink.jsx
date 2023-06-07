import bgShortenDesktop from '../assets/images/desktop/bg-shorten-desktop.svg';
import bgShortenMobile from '../assets/images/mobile/bg-shorten-mobile.svg';
import Form from './Form';

const ShortenLink = ({
  url,
  setUrl,
  emptyInputField,
  handleSubmit,
  message,
}) => {
  return (
    <div className="relative h-[160px] -translate-y-20 overflow-hidden rounded-xl bg-Primary-violet">
      <picture>
        <source media="(min-width:768px)" srcSet={bgShortenDesktop} />
        <img
          src={bgShortenMobile}
          alt=""
          className="h-full w-full object-cover object-left"
        />
      </picture>
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 px-5 md:px-10 lg:max-w-4xl xl:max-w-6xl">
        <Form
          url={url}
          setUrl={setUrl}
          emptyInputField={emptyInputField}
          handleSubmit={handleSubmit}
          message={message}
        />
      </div>
    </div>
  );
};

export default ShortenLink;
