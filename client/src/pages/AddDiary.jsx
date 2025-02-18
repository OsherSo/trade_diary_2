import { useNavigate } from "react-router-dom";

import { Modal } from "../components/common";
import { DiaryForm } from "../components/diaries";

const AddDiary = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard/diaries");
  };

  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      title="Create New Diary"
      description="Add a new trading diary to track your trades"
    >
      <DiaryForm onCancel={handleClose} />
    </Modal>
  );
};

export default AddDiary;
