import React, { useState, memo } from "react";

/**
 * High-performance OptimizedImage component
 * Features:
 * - Native async image decoding (decoding="async")
 * - Priority fetching for hero LCP assets (fetchpriority="high", loading="eager")
 * - Lazy loading for off-screen assets (loading="lazy")
 * - Smooth skeleton pulse placeholder to eliminate Cumulative Layout Shift (CLS)
 * - Smooth fade-in on load (opacity transition)
 * - Error fallback handling
 * - Wrapped with React.memo to prevent unnecessary re-renders
 *
 * Props:
 * - wrapperClassName: classes applied to the outer <span> wrapper
 * - imgClassName: classes applied directly to the <img> tag (e.g. object-cover, max-h-*, drop-shadow)
 * - className: when used alone (no wrapperClassName/imgClassName), applies to BOTH wrapper and img
 */
const OptimizedImage = memo(function OptimizedImage({
  src,
  alt = "",
  className = "",
  wrapperClassName,
  imgClassName,
  style = {},
  imgStyle = {},
  priority = false,
  loading,
  decoding = "async",
  fetchPriority,
  fallbackSrc,
  onLoad,
  onError,
  ...props
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const effectiveLoading = loading || (priority ? "eager" : "lazy");
  const effectiveFetchPriority = fetchPriority || (priority ? "high" : "low");
  const currentSrc = isError && fallbackSrc ? fallbackSrc : src;

  // If explicit wrapperClassName/imgClassName are provided, use them separately.
  // Otherwise fall back to className applied to BOTH.
  const resolvedWrapperClass =
    wrapperClassName !== undefined ? wrapperClassName : className;
  const resolvedImgClass =
    imgClassName !== undefined ? imgClassName : className;

  return (
    <span
      className={`relative overflow-hidden block ${resolvedWrapperClass}`}
      style={style}
    >
      {/* Skeleton Shimmer Loading Placeholder */}
      {!isLoaded && !isError && (
        <span
          className="absolute inset-0 bg-stone-200/60 animate-pulse pointer-events-none z-10"
          aria-hidden="true"
        />
      )}

      {/* Image Element */}
      <img
        src={currentSrc}
        alt={alt}
        loading={effectiveLoading}
        decoding={decoding}
        fetchPriority={effectiveFetchPriority}
        onLoad={(e) => {
          setIsLoaded(true);
          if (onLoad) onLoad(e);
        }}
        onError={(e) => {
          setIsError(true);
          setIsLoaded(true);
          if (onError) onError(e);
        }}
        className={`transition-opacity duration-300 ease-in-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${resolvedImgClass}`}
        style={imgStyle}
        {...props}
      />
    </span>
  );
});

export default OptimizedImage;
