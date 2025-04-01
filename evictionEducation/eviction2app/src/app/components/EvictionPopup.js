'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

export default function EvictionPopup({ setEvictionPopupSeen }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleChoice = (choice) => {
    setOpen(false);
    setEvictionPopupSeen(true); // Mark it as seen in page
    if (choice === "yes") {
      router.push("/decision-finder");
    }
  };

  return (
    <Dialog
      open={open}
      onClose={() => handleChoice("no")}
      sx={{
        "& .MuiPaper-root": {
          borderRadius: "16px", //corners
          padding: "20px",
          textAlign: "center", 
        },
      }}
    >
      <DialogTitle sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
        Are You Facing Eviction?
      </DialogTitle>
      <DialogActions sx={{ justifyContent: "center", gap: 2, paddingBottom: 2 }}>
        <Button
          onClick={() => handleChoice("yes")}
          variant="contained"
          sx={{
            backgroundColor: "#fca311",
            color: "#1d3747",
            "&:hover": { backgroundColor: "#e6950d" }, // hover effect
            borderRadius: "8px", // round buttons
            padding: "8px 20px",
          }}
        >
          Yes
        </Button>
        <Button
          onClick={() => handleChoice("no")}
          variant="outlined"
          sx={{
            borderColor: "#fca311",
            color: "#1d3747",
            "&:hover": { backgroundColor: "#fca311", color: "#fff" },
            borderRadius: "8px",
            padding: "8px 20px",
          }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
  
}
