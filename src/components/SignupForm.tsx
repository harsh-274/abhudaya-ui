'use client'

import * as React from 'react'
import Link from 'next/link'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  mobileNumber: z.string().length(10, 'Phone number must be 10 digits'),
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  dateOfBirth: z.object({
    day: z.string().min(1).max(2),
    month: z.string().min(1).max(2),
    year: z.string().length(4),
  }),
  gender: z.string().min(1, 'Please select a gender'),
  username: z.string().min(4, 'Username must be at least 4 characters'),
  pin: z.string().length(6, 'PIN must be 6 digits'),
  confirmPin: z.string().length(6, 'PIN must be 6 digits'),
  terms: z.boolean().refine(val => val === true, 'You must accept the terms'),
}).refine((data) => data.pin === data.confirmPin, {
  message: "PINs don't match",
  path: ["confirmPin"],
})

export function SignupForm() {
  const [otpSent, setOtpSent] = React.useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobileNumber: '',
      fullName: '',
      dateOfBirth: {
        day: '',
        month: '',
        year: '',
      },
      gender: '',
      username: '',
      pin: '',
      confirmPin: '',
      terms: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  const handleGenerateOTP = () => {
    const mobileNumber = form.getValues('mobileNumber')
    if (mobileNumber.length === 10) {
      setOtpSent(true)
      // Add OTP generation logic here
    } else {
      form.setError('mobileNumber', {
        type: 'manual',
        message: 'Please enter a valid 10-digit number',
      })
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="mobileNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile Number*</FormLabel>
              <FormControl>
                <Input placeholder="Enter 10 digit mobile number" {...field} />
              </FormControl>
              <p className="text-sm text-red-500">
                Phone number should be 10 digit number.
              </p>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="button"
          onClick={handleGenerateOTP}
          className="w-32 bg-blue-600"
        >
          Generate OTP
        </Button>

        <FormField
          control={form.control}
          name="fullName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Full Name*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="dateOfBirth"
          render={() => (
            <FormItem>
              <FormLabel>Date of Birth</FormLabel>
              <div className="grid grid-cols-3 gap-2">
                <FormField
                  control={form.control}
                  name="dateOfBirth.day"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="dd" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth.month"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="mm" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="dateOfBirth.year"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="yyyy" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="gender"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select Gender*</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select gender" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username*</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PIN*</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="confirmPin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm PIN*</FormLabel>
              <FormControl>
                <Input type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="terms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I consent to{' '}
                  <Link href="#" className="text-blue-600 hover:underline">
                    terms of use
                  </Link>
                  .
                </FormLabel>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-600">
          Verify
        </Button>
      </form>
    </Form>
  )
}

