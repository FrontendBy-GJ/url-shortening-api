import Logo from '../assets/images/Logo';
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai';
import { BsPinterest } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="bg-Neutral-darkViolet">
      <section className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-14 lg:flex-row lg:items-start lg:justify-between xl:px-0">
        <Logo className="text-white" />

        <div className="flex flex-col gap-8 text-center font-Poppins lg:flex-row lg:gap-16 lg:text-left">
          {footerLinks.map(({ heading, links }) => (
            <div key={heading} className="">
              <h4 className="text-white">{heading}</h4>
              <div className="mt-5 space-y-2">
                {links.map((link) => (
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    key={link}
                    className="block text-Neutral-gray transition hover:text-Primary-cyan"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-5">
          {socials.map(({ Icon, id }) => (
            <a key={id} href="#" onClick={(e) => e.preventDefault()}>
              <Icon
                color="white"
                size={30}
                className="transition hover:fill-Primary-cyan"
              />
            </a>
          ))}
        </div>
      </section>
    </footer>
  );
};

const footerLinks = [
  {
    heading: 'Features',
    links: ['Link Shortening', 'Branded Links', 'Analytics'],
  },
  {
    heading: 'Resources',
    links: ['Blog', 'Developers', 'Support'],
  },
  {
    heading: 'Company',
    links: ['About', 'Our Team', 'Careers', 'Contact'],
  },
];

const socials = [
  {
    Icon: AiFillFacebook,
    id: 'facebook',
  },
  {
    Icon: AiOutlineTwitter,
    id: 'twitter',
  },
  {
    Icon: BsPinterest,
    id: 'pinterest',
  },
  {
    Icon: AiOutlineInstagram,
    id: 'instagram',
  },
];

export default Footer;
