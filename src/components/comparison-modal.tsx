import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

interface ComparisonModalProps {
  isOpen: boolean
  onClose: () => void
  schemes: any[]
}

export function ComparisonModal({ isOpen, onClose, schemes }: ComparisonModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>Scheme Comparison</DialogTitle>
        </DialogHeader>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              {schemes.map(scheme => (
                <TableHead key={scheme.id}>{scheme.name}</TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Category</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>{scheme.category}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Eligibility</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>
                  <div className="flex items-center space-x-2">
                    <Progress value={scheme.eligibility} className="w-full" />
                    <span>{scheme.eligibility}%</span>
                  </div>
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Benefit</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>{scheme.benefit}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Deadline</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>{scheme.deadline.toLocaleDateString()}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Potential Savings</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>{scheme.potentialSavings}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Impact Metric</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>{scheme.impactMetric}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Missing Documents</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>
                  {scheme.missingDocuments.length > 0 ? scheme.missingDocuments.join(', ') : 'None'}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell>Key Benefits</TableCell>
              {schemes.map(scheme => (
                <TableCell key={scheme.id}>
                  <ul className="list-disc list-inside">
                    {scheme.keyBenefits.map((benefit: string, index: number) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </DialogContent>
    </Dialog>
  )
}

