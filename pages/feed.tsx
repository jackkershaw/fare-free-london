import { useEffect } from "react";

export default function Feed() {
  useEffect(() => {
    window.location.href = "https://admin.farefreelondon.org/feed";
  }, []);

  return null;
}
