import { Box } from "@mui/material";
import image from '../../src/assets/images/chatapp.jpeg'
const UserImage = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        // src={`http://localhost:3001/assets/${image}`}
        src={image}
      />
    </Box>
  );
};

export default UserImage;