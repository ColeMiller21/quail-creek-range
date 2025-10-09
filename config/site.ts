export const siteConfig = {
  name: "Quail Creek Range",
  description: "North Texas Premier Outdoor Shooting Range",
  url: "https://quailcreekrange.com",
  preview: {
    enabled: true,
  },
};

// Utility function to reset preview dialog (for testing)
export const resetPreviewDialog = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("preview-dialog-dismissed");
  }
};
