import React from "react";

interface SubmitButtonProps {
  onClick: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => (
  <button
    type="submit"
    className="cursor-pointer submit-button"
    onClick={onClick}
  >
    Send
  </button>
);

export default SubmitButton;
