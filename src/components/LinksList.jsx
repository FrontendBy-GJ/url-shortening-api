import { useState } from 'react';
import Link from './Link';

const LinksList = ({ links }) => {
  const [copiedLink, setCopiedLink] = useState(null);

  function handleCopy(text) {
    navigator.clipboard.writeText(text);
    setCopiedLink(text);
  }

  return (
    <div className="-mt-12 mb-32 space-y-4">
      {links.map((link, index) => (
        <Link
          key={index}
          links={link}
          copiedLink={copiedLink}
          handleCopy={handleCopy}
        />
      ))}
    </div>
  );
};

export default LinksList;
