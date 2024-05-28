import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function SubmitButn() {
  return (
    <div className="ButtonContainer">
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          type="submit"
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
          Submit
        </Button>
      </Stack>
    </div>
  );
}

export default SubmitButn;
