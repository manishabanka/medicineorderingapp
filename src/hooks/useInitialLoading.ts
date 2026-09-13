import { useEffect, useState } from "react";

export function useInitialLoading(duration = 500) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), duration);

    return () => clearTimeout(timeout);
  }, [duration]);

  return isLoading;
}
