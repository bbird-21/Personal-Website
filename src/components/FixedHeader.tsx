import '../styles/components/FixedHeader.css';

const FixedHeader = () => {

  return (
    <>
      <div className="header">
        <div className="top-left-name"> bbird.dev</div>
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
