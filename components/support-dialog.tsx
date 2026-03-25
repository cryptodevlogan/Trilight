"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

interface SupportDialogProps {
  children: React.ReactNode
}

export default function SupportDialog({ children }: SupportDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Support</DialogTitle>
          <DialogDescription>
            Need help? Our team is here to assist you with any questions or concerns.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <Button asChild className="w-full h-16 text-lg bg-black hover:bg-gray-800 text-white">
            <a href="mailto:willy@trilight.store?subject=Support Request">
              <Mail className="mr-2 h-5 w-5" />
              Email Support
            </a>
          </Button>
          <div className="text-center text-sm text-gray-500">
            <p>We typically respond within 24 hours</p>
            <p className="mt-2 font-medium text-gray-700">willy@trilight.store</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
