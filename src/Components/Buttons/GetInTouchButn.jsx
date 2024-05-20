import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function GetInTouchButn() {
  return (
    <div className="ButtonContainer">
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          sx={{
            color: "#061e5a",
            borderColor: "#D6E4F0",
            borderWidth: 2,
            backgroundColor: "#D6E4F0",
            "&:hover": {
              backgroundColor: "#163172",
              borderColor: "#163172",
              color: "white",
              borderWidth: 2,
            },
            textTransform: "none",
          }}
        >
          Get In Toutch
        </Button>
      </Stack>
    </div>
  );
}

export default GetInTouchButn;
