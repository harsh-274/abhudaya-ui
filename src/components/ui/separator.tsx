// File: components/ui/separator.js

export function Separator({ className = '', ...props }) {
    return (
      <div
        className={`w-full h-[1px] bg-gray-300 ${className}`}
        {...props}
      />
    );
  }
  