import { useHistory } from "react-router-dom";

const Refresh = () => {
  const history = useHistory();
  history.goBack();
  return null;
};

export default Refresh;
