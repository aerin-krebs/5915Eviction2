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
    <Dialog open={open} onClose={() => handleChoice("no")}>
      <DialogTitle>Are You Facing Eviction?</DialogTitle>
      <DialogActions>
        <Button
          onClick={() => handleChoice("yes")}
          variant="contained"
          sx={{ backgroundColor: "#fca311", color: "#1d3747" }}
        >
          Yes
        </Button>
        <Button
          onClick={() => handleChoice("no")}
          variant="outlined"
          sx={{ borderColor: "#fca311", color: "#1d3747" }}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
}
