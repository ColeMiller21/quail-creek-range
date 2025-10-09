"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertTriangle } from "lucide-react";

export function PreviewDialog() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show if preview is enabled in config
    if (siteConfig.preview.enabled) {
      // Check if user has already dismissed the dialog
      const hasSeenPreview = localStorage.getItem("preview-dialog-dismissed");
      if (!hasSeenPreview) {
        setIsOpen(true);
      }
    }
  }, []);

  const handleDismiss = () => {
    setIsOpen(false);
    // Remember that user has seen the preview dialog
    localStorage.setItem("preview-dialog-dismissed", "true");
  };

  // Don't render if preview is disabled
  if (!siteConfig.preview.enabled) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            <DialogTitle className="text-amber-600">
              Website Preview
            </DialogTitle>
          </div>
          <DialogDescription className="text-left space-y-2">
            <div>
              This is a preview of your rebuilt website. Some features may not
              be fully functional as this is still in development.
            </div>
            <div className="text-xs text-muted-foreground">
              This preview is for demonstration purposes only and may not
              reflect the final production version.
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button onClick={handleDismiss} className="w-full">
            I Understand
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
