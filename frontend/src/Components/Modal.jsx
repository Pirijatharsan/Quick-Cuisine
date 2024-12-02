/* eslint-disable react/prop-types */
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-container">
          <div className="fixed inset-0 bg-black opacity-50"></div>
          <div className="absolute top-[30%] right-[40%] bg-white p-4 rounded-lg z-10 text-right">
            <button
              className="text-black font-semibold hover:text-gray-700 focus:outline-none mr-2"
              onClick={onClose}
            >
              X
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  )
}
export default Modal
