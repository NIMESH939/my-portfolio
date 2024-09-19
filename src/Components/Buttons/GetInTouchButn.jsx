import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-scroll";

function GetInTouchButn() {
  return (
    <div className="ButtonContainer">
      <Stack spacing={2} direction="row">
        <Link to="Contact" smooth={true} duration={500}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#163172",
              borderColor: "#163172",
              borderWidth: 2,
              color: "white",
              "&:hover": {
                color: "#163172",
                borderColor: "#D6E4F0",
                borderWidth: 2,
                backgroundColor: "#D6E4F0",
              },
              textTransform: "none",
            }}
          >
            Get In Touch
          </Button>
        </Link>
      </Stack>
    </div>
  );
}

export default GetInTouchButn;
