import React from "react";

interface LovableWrapperProps extends React.HTMLAttributes<HTMLDivElement> {}

export const LovableContainer = React.forwardRef<HTMLDivElement, LovableWrapperProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`charming-container ${className || ""}`} {...props}>
      {children}
    </div>
  );
});

export const LovableSection = React.forwardRef<HTMLDivElement, LovableWrapperProps>(({ children, className, ...props }, ref) => {
  return (
    <section ref={ref} className={`charming-section ${className || ""}`} {...props}>
      {children}
    </section>
  );
});

export const LovableBox = React.forwardRef<HTMLDivElement, LovableWrapperProps>(({ children, className, ...props }, ref) => {
  return (
    <div ref={ref} className={`charming-box ${className || ""}`} {...props}>
      {children}
    </div>
  );
});
