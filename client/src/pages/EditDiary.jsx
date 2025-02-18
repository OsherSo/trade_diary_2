import { useNavigate, useLoaderData } from "react-router-dom";

import Modal from "../components/common/Modal";
import DiaryForm from "../components/diaries/DiaryForm";

const EditDiary = () => {
  const { diary } = useLoaderData();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/dashboard/diaries");
  };

  return (
    <Modal
      isOpen={true}
      onClose={handleClose}
      title="Edit Diary"
      description="Update your trading diary details"
    >
      <DiaryForm onCancel={handleClose} defaultValues={diary} />
    </Modal>
  );
};

export default EditDiary;
