'use client'

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export function NeedHelp() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="gap-2">
          <HelpCircle className="h-4 w-4" />
          Need Help?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Need Assistance?</h2>
          <p className="text-sm text-gray-600">
            If you have any questions or need support, feel free to reach out to our support team. We’re here to help!
          </p>
          <Button asChild>
            <a href="mailto:support@example.com">Contact Support</a>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}