import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { User, UserPlus, FileText, AlertTriangle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface FamilyMember {
  id: string
  name: string
  relationship: string
  avatar?: string
  documents: { name: string; status: 'valid' | 'missing' | 'expiring' }[]
}

export default function FamilyProfiles() {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    {
      id: '1',
      name: 'John Doe',
      relationship: 'Self',
      avatar: '/placeholder-avatar.jpg',
      documents: [
        { name: 'Aadhaar', status: 'valid' },
        { name: 'PAN Card', status: 'valid' },
        { name: 'Income Certificate', status: 'missing' },
      ]
    },
    {
      id: '2',
      name: 'Mary Doe',
      relationship: 'Wife',
      avatar: '/placeholder-avatar-2.jpg',
      documents: [
        { name: 'Aadhaar', status: 'valid' },
        { name: 'Marriage Certificate', status: 'valid' },
      ]
    },
    {
      id: '3',
      name: 'Anna Doe',
      relationship: 'Daughter',
      avatar: '/placeholder-avatar-3.jpg',
      documents: [
        { name: 'Aadhaar', status: 'valid' },
        { name: 'Birth Certificate', status: 'valid' },
        { name: 'School Certificate', status: 'expiring' },
      ]
    },
  ])

  const [newMemberName, setNewMemberName] = useState('')
  const [newMemberRelationship, setNewMemberRelationship] = useState('')

  const addFamilyMember = () => {
    if (newMemberName && newMemberRelationship) {
      setFamilyMembers([...familyMembers, {
        id: Date.now().toString(),
        name: newMemberName,
        relationship: newMemberRelationship,
        documents: []
      }])
      setNewMemberName('')
      setNewMemberRelationship('')
    }
  }

  return (
    <Tabs defaultValue="overview">
      <TabsList className="mb-4">
        <TabsTrigger value="overview">Family Overview</TabsTrigger>
        <TabsTrigger value="add">Add Family Member</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {familyMembers.map((member) => (
            <Card key={member.id} className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Avatar>
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p>{member.name}</p>
                    <p className="text-sm text-muted-foreground">{member.relationship}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-2">
                  {member.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <span className="text-sm">{doc.name}</span>
                      {doc.status === 'valid' && <FileText className="w-4 h-4 text-green-500" />}
                      {doc.status === 'missing' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                      {doc.status === 'expiring' && <AlertTriangle className="w-4 h-4 text-yellow-500" />}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardContent className="pt-0">
                <Button variant="outline" className="w-full">Manage Documents</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="add">
        <Card>
          <CardHeader>
            <CardTitle>Add Family Member</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  value={newMemberName} 
                  onChange={(e) => setNewMemberName(e.target.value)}
                  placeholder="Enter family member's name"
                />
              </div>
              <div>
                <Label htmlFor="relationship">Relationship</Label>
                <Input 
                  id="relationship" 
                  value={newMemberRelationship} 
                  onChange={(e) => setNewMemberRelationship(e.target.value)}
                  placeholder="Enter relationship (e.g., Wife, Son)"
                />
              </div>
              <Button onClick={addFamilyMember}>
                <UserPlus className="w-4 h-4 mr-2" />
                Add Family Member
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}

