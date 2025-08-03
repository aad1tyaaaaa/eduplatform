import * as React from "react"
import { OTPInput, OTPInputContext } from "input-otp"
import { Dot } from "lucide-react"

import { cn } from "@/lib/utils"
import { LovableContainer, LovableBox } from "./LovableWrappers"

const InputOTP = React.forwardRef<
  React.ElementRef<typeof OTPInput>,
  React.ComponentPropsWithoutRef<typeof OTPInput>
>(({ className, containerClassName, ...props }, ref) => (
  <OTPInput
    ref={ref}
    containerClassName={cn(
      "flex items-center gap-3 has-[:disabled]:opacity-50 rounded-md bg-gray-50 p-4 shadow-md",
      containerClassName
    )}
    className={cn(
      "disabled:cursor-not-allowed rounded-md border border-gray-300 bg-beige text-center text-lg font-semibold text-gray-900 shadow-sm transition focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 disabled:opacity-50",
      className
    )}
    {...props}
  />
))
InputOTP.displayName = "InputOTP"

const InputOTPGroup = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <LovableContainer
    ref={ref}
    className={cn(
      "flex items-center justify-center rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 shadow-lg",
      className
    )}
    {...props}
  />
))
InputOTPGroup.displayName = "InputOTPGroup"

const InputOTPSlot = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div"> & { index: number }
>(({ index, className, ...props }, ref) => {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index]

  return (
    <LovableBox
      ref={ref}
      className={cn(
        "relative flex h-14 w-14 items-center justify-center rounded-md border border-gray-300 bg-beige text-2xl font-bold text-gray-900 shadow-md transition-all first:rounded-l-lg first:border-l last:rounded-r-lg last:border-r",
        isActive && "z-10 ring-2 ring-indigo-500 ring-offset-2",
        className
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-6 w-px animate-caret-blink bg-indigo-600 duration-1000" />
        </div>
      )}
    </LovableBox>
  )
})
InputOTPSlot.displayName = "InputOTPSlot"

const InputOTPSeparator = React.forwardRef<
  React.ElementRef<"div">,
  React.ComponentPropsWithoutRef<"div">
>(({ ...props }, ref) => (
  <LovableBox
    ref={ref}
    role="separator"
    className="flex items-center justify-center rounded-md bg-beige p-2 shadow"
    {...props}
  >
    <Dot className="text-indigo-500" />
  </LovableBox>
))
InputOTPSeparator.displayName = "InputOTPSeparator"

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }
