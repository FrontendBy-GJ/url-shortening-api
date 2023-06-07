const Form = ({ handleSubmit, url, setUrl, emptyInputField, message }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center gap-5 md:flex-row"
    >
      <div className="relative w-full flex-1">
        <input
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          type="text"
          placeholder="Shorten a link here..."
          className={`w-full rounded-md px-4 py-2 lg:px-6 ${
            emptyInputField
              ? 'outline outline-Secondary-red placeholder:text-Secondary-red/50'
              : ''
          }`}
        />
        {emptyInputField && (
          <span className="absolute inset-x-0 bottom-0 translate-y-7 text-sm italic text-Secondary-red">
            {message}
          </span>
        )}
      </div>
      <div className="w-full rounded-md bg-white md:w-auto">
        <button
          className={`w-full rounded-md bg-Primary-cyan px-8 py-2 text-slate-50 transition hover:bg-opacity-60 md:py-3 ${
            emptyInputField && 'mt-4 md:mt-0'
          }`}
        >
          Shorten It!
        </button>
      </div>
    </form>
  );
};

export default Form;
