import "./Modal.css";
export default function Modal() {
  return (
    <div className="overlay">
      <div className="modal" role="dialog" aria-modal="true">
        <button className="modal__x" aria-label="Close">
          ×
        </button>

        <div class="modal__icon">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M20.285 6.709a1 1 0 0 1 0 1.414l-9.193 9.193a1 1 0 0 1-1.414 0L3.715 11.35a1 1 0 1 1 1.414-1.414l4.256 4.256 8.486-8.486a1 1 0 0 1 1.414 0z"
              fill="currentColor"
            />
          </svg>
        </div>

        <h2 class="modal__title">Form Submitted Successfully</h2>
        <p class="modal__desc">Your loan request has been received.</p>

        <button class="modal__btn">Close</button>
      </div>
    </div>
  );
}
