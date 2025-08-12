import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default function RouteWrapper({ children, fallback, errorFallback }) {
  return (
    <ErrorBoundary FallbackComponent={errorFallback}>
      <Suspense fallback={fallback}>{children}</Suspense>
    </ErrorBoundary>
  );
}
