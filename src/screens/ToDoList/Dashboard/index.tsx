import { Button, Grid } from "@mui/material";
import useTodoContext from "../../../utils/todoContext/useTodoContext";
import { useNavigate } from "react-router-dom";

const TodoDashboard: React.FC = () => {
  const navigate = useNavigate();
  const data = useTodoContext();
  console.log({ data });

  const onBackup = () => {
    // Todo: backup the list
  };
  const onRecover = () => {
    // TODO: Recover the list
  };
  return (
    <Grid>
      <Button onClick={onBackup}>Backup</Button>
      <Button onClick={onRecover}>Recover</Button>
      <Button onClick={() => navigate("/todo/add")}>Add Todo</Button>
    </Grid>
  );
};

export default TodoDashboard;
