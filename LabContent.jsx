import { Typography, Box } from '@mui/material';

const LabContent = ({ lab }) => {
  return lab ? (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        {lab.title}
      </Typography>
      <Typography variant="body1">
        {lab.content}
      </Typography>
    </Box>
  ) : (
    <Typography variant="h6" color="error">
      Работа не найдена
    </Typography>
  );
};

export default LabContent;