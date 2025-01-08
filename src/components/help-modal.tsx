import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface HelpModalProps {
  isOpen: boolean
  onClose: () => void
}

export function HelpModal({ isOpen, onClose }: HelpModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Help & FAQs</DialogTitle>
        </DialogHeader>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I check my eligibility?</AccordionTrigger>
            <AccordionContent>
              Your eligibility is calculated based on the information in your profile and the documents you've uploaded. The circular progress bar on each scheme card shows your current eligibility percentage. Make sure your profile is complete and all required documents are uploaded for the most accurate eligibility assessment.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>What should I do if I'm missing documents?</AccordionTrigger>
            <AccordionContent>
              If you're missing any required documents, you'll see a red alert on the scheme card. Click on the "Apply Now" or "View Details" button to see what's needed and get guidance on how to obtain or upload the necessary documents. Our AI recommendations may also suggest actions to improve your eligibility.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How can I compare schemes?</AccordionTrigger>
            <AccordionContent>
              To compare schemes, select two or more schemes by clicking the checkbox icon on each scheme card. A "Compare Selected" button will appear at the bottom of the page. Click this button to see a side-by-side comparison of the selected schemes, including benefits, eligibility, deadlines, and potential savings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>What do the different colors and icons mean?</AccordionTrigger>
            <AccordionContent>
              Each scheme category has a distinct color: blue for Housing, green for Health, yellow for Agriculture, and purple for Education. The icons next to each category in the sidebar represent the type of scheme. The circular progress bar on each card shows your eligibility, and badges like "Fully Eligible" provide quick status information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do I use the search and filter options?</AccordionTrigger>
            <AccordionContent>
              Use the search bar at the top to find specific schemes by name or keyword. You can also use voice search by clicking the microphone icon. The sidebar on the left allows you to filter schemes by category and eligibility percentage. Use these tools to quickly find the most relevant schemes for your needs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  )
}

