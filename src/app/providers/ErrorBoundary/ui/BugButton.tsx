import { useEffect, useState } from "react";
import { Button } from "shared/ui/Button/Button";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={() => setError(true)}>{"Throw error"}</Button>;
};
