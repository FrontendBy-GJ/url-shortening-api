const Link = ({ links, copiedLink, handleCopy }) => {
  return (
    <div className="flex flex-col rounded-md bg-white py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6 lg:px-6">
      <div className="flex flex-col divide-y lg:flex-1 lg:flex-row lg:justify-between lg:divide-y-0">
        <p className="break-words px-4 py-1.5 text-Neutral-darkBlue lg:p-0">
          {links.original}
        </p>
        <p className="px-4 py-1.5 text-Primary-cyan lg:p-0">
          {links.shortLink}
        </p>
      </div>
      <div className="mt-1.5 px-4 lg:mt-0 lg:px-0">
        <button
          onClick={() => handleCopy(links.shortLink)}
          className={`${
            copiedLink === links.shortLink
              ? 'bg-Primary-violet'
              : 'bg-Primary-cyan hover:bg-opacity-60'
          } w-full rounded-md px-5 py-1.5 text-white transition`}
        >
          {copiedLink === links.shortLink ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default Link;
