import PropTypes from "prop-types";

export default function MobileButton({ text, link }) {
  return (
    <a
      href={link}
      className="mt-8 px-8 xs:px-20 py-2 text-xl font-bold text-white bg-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-500 border-2 border-gray-500 ease-in-out duration-300"
    >
      {text}
    </a>
  );
}

MobileButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};
