import { useNavigate, useLoaderData } from "react-router-dom";

import { Modal } from "../components/common";
import { TradeForm } from "../components/trades";

const EditTrade = () => {
  const { trade } = useLoaderData();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      title="Edit Trade"
      description="Update your trade details"
    >
      <TradeForm
        onCancel={handleClose}
        defaultValues={trade}
        submitButtonText="Save Changes"
      />
    </Modal>
  );
};

export default EditTrade;
