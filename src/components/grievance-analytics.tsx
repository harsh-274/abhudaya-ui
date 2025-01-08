import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const grievances = [
  { id: 1, type: "Application Delay", status: "Resolved", time: "2 days" },
  { id: 2, type: "Document Verification", status: "Pending", time: "5 days" },
  { id: 3, type: "Benefit Disbursement", status: "In Progress", time: "3 days" },
  { id: 4, type: "Eligibility Inquiry", status: "Resolved", time: "1 day" },
  { id: 5, type: "Technical Issue", status: "Pending", time: "4 days" },
]

export default function GrievanceAnalytics() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Grievance Analytics</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Resolution Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {grievances.map((grievance) => (
              <TableRow key={grievance.id}>
                <TableCell>{grievance.type}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      grievance.status === "Resolved"
                        ? "success"
                        : grievance.status === "Pending"
                        ? "destructive"
                        : "default"
                    }
                  >
                    {grievance.status}
                  </Badge>
                </TableCell>
                <TableCell>{grievance.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

