import { Button, CircularProgress } from "@mui/material";

interface LoadingButtonProps {
  loading?: boolean;
  onClick?: () => void;
  buttonText?: string;
}

const LoadingButton = ({
  loading = false,
  onClick,
  buttonText = "Submit",
}: LoadingButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={loading}
      type="submit"
      variant="contained"
      fullWidth
    >
      {loading ? <CircularProgress /> : buttonText}
    </Button>
  );
};

export default LoadingButton;
