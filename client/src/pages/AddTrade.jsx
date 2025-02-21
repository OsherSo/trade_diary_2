import { useNavigate } from "react-router-dom";
import { Modal } from "../components/common";
import { TradeForm } from "../components/trades";

const AddTrade = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      title="Add New Trade"
      description="Record a new trade in your trading journal"
      wide={true}
    >
      <TradeForm onCancel={handleClose} />
    </Modal>
  );
};

export default AddTrade;
