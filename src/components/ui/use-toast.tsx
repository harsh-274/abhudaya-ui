import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"

const ToastContext = React.createContext<any>(null)

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = (toast: any) => setToasts((prev) => [...prev, toast])

  return (
    <ToastContext.Provider value={{ toasts, addToast }}>
      <ToastPrimitives.Provider>
        {children}
        {toasts.map((toast, idx) => (
          <ToastPrimitives.Root key={idx}>
            {toast.message}
          </ToastPrimitives.Root>
        ))}
      </ToastPrimitives.Provider>
    </ToastContext.Provider>
  )
}

export function useToast() {
  return React.useContext(ToastContext)
}
