import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";

function GitHubButn() {
  return (
    <div className="GitHubButtonContainer">
      <Stack direction="row" spacing={2}>
        <Button
          variant="contained"
          endIcon={<GitHubIcon sx={{ width: "35px", height: "35px" }} />}
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
              boxShadow: "0 0 10px 2px rgba(0, 0, 0, 0.7)",
            },
            textTransform: "none",
          }}
        >
          Visit My GitHub
        </Button>
      </Stack>
    </div>
  );
}

export default GitHubButn;
