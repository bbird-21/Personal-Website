import './FixedHeader.css';

const FixedHeader = () => {

  return (
    <>
      <div className="header">
        {/* Top Left Banner */}
        <div className="top-left-name"> bbird.dev</div>

        {/* Top Right Contact Button */}
        <button
          type="button"
          className="top-right-contact"
        >
          Contact
        </button>
      </div>

    </>
  );
};

export default FixedHeader;
