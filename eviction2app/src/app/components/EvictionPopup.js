"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from "@mui/material";

export default function EvictionPopup() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    //popup appears only after the legal disclaimer is accepted
    if (
      sessionStorage.getItem("legalDisclaimerAccepted") &&
      !sessionStorage.getItem("evictionPopupSeen")
    ) {
      setOpen(true);
    }
  }, []);

  const handleChoice = (choice) => {
    setOpen(false);
    sessionStorage.setItem("evictionPopupSeen", "true");

    if (choice === "yes") {
      router.push("/decision-finder"); // Route to DecisionFinder
    }
  };

  return (
    <Dialog open={open} onClose={() => handleChoice("no")}>
      <DialogTitle>Are You Facing Eviction?</DialogTitle>
      <DialogContent>
        <Typography>No one should lose their home. Let’s find help together.</Typography>
      </DialogContent>
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
