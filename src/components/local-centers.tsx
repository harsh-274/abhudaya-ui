"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { useState } from "react"

// Sample data for centers
const centers = [
  { name: "CSC Center 1", lat: 28.6139, lng: 77.2090, services: ["Aadhaar", "PAN"] },
  { name: "CSC Center 2", lat: 28.5355, lng: 77.3910, services: ["Passport", "Driving License"] },
  { name: "CSC Center 3", lat: 28.7041, lng: 77.1025, services: ["Voter ID", "Ration Card"] },
]

export function LocalCenters() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCenter, setSelectedCenter] = useState(null)

  const filteredCenters = centers.filter(center =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.services.some(service => service.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Local Centers Near Me</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex gap-2">
          <Input
            placeholder="Search centers or services..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>

        {/* Leaflet Map */}
        <MapContainer
          center={[28.6139, 77.2090]} // Default center (latitude, longitude)
          zoom={11}
          style={{ height: "300px", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {filteredCenters.map((center, index) => (
            <Marker
              key={index}
              position={[center.lat, center.lng]}
              eventHandlers={{
                click: () => setSelectedCenter(center),
              }}
            >
              <Popup>
                <h3>{center.name}</h3>
                <p>Services: {center.services.join(", ")}</p>
              </Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Center List */}
        <div className="mt-4 space-y-2">
          {filteredCenters.map((center, index) => (
            <div 
              key={index} 
              className="flex justify-between items-center p-2 bg-muted rounded-lg hover:bg-muted/80 cursor-pointer"
              onClick={() => setSelectedCenter(center)}
            >
              <div>
                <h4 className="font-semibold">{center.name}</h4>
                <p className="text-sm text-muted-foreground">
                  Services: {center.services.join(", ")}
                </p>
              </div>
              <Button variant="outline" size="sm">View Details</Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
