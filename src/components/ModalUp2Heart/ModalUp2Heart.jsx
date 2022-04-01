import "./ModalUp2Heart.scss";

function ModalUp2Heart({ active, setActive, children, props }) {
  return (
    <>
      <div
        className={active ? "Modal active" : "Modal"}
        onClick={() => setActive(false)}
      >
        <div className="Modal__Inner" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  );
}

export default ModalUp2Heart;
