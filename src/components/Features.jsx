import brand from '../assets/icons/icon-brand-recognition.svg';
import records from '../assets/icons/icon-detailed-records.svg';
import customize from '../assets/icons/icon-fully-customizable.svg';
import { useEffect, useState } from 'react';
import LinksList from './LinksList';
import Cards from './Cards';
import ShortenLink from './ShortenLink';

const Features = () => {
  const [url, setUrl] = useState('');
  const [links, setLinks] = useState(() => {
    let value = localStorage.getItem('links');
    if (value !== null) {
      return JSON.parse(value);
    }
    return [];
  });
  const [shortLink, setShortLink] = useState('');
  const [emptyInputField, setEmptyInputField] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('links', JSON.stringify(links));
  }, [links]);

  function fetchShortLink(url) {
    fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
      .then((res) => res.json())
      .then((data) => {
        setShortLink(data.result.short_link);
        setLinks((prev) => [
          ...prev,
          {
            original: url,
            shortLink: data.result.short_link,
          },
        ]);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (url === '') {
      setEmptyInputField(true);
      setMessage('Please add a link');
    } else if (!/^https?:\/\/.+/.test(url)) {
      setEmptyInputField(true);
      setMessage('Please enter a valid URL');
      setUrl('');
    } else {
      fetchShortLink(url);
      setUrl('');
      setEmptyInputField(false);
    }
  }

  return (
    <section className="mt-44 bg-slate-100 pb-20 font-Poppins md:mt-32">
      <div className="mx-auto max-w-7xl px-6">
        <ShortenLink
          url={url}
          setUrl={setUrl}
          emptyInputField={emptyInputField}
          handleSubmit={handleSubmit}
          message={message}
        />

        {links.length !== 0 && <LinksList links={links} />}

        <div className="mx-auto max-w-lg text-center lg:px-5">
          <h2 className="text-3xl font-bold text-Neutral-darkBlue">
            Advance Statistics
          </h2>
          <p className="mt-4 text-Neutral-grayViolet">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        <Cards cards={cards} />
      </div>
    </section>
  );
};

const cards = [
  {
    icon: brand,
    title: 'Brand Recognition',
    content:
      'Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.',
  },
  {
    icon: records,
    title: 'Detailed Records',
    content:
      'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
  },
  {
    icon: customize,
    title: 'Fully Customizable',
    content:
      'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
  },
];

export default Features;
