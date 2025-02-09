import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text, style }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <button type="submit" className={style} disabled={isSubmitting}>
      {isSubmitting ? "Submitting" : text}
    </button>
  );
};

export default SubmitBtn;
