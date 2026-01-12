"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calculator, MessageCircle } from "lucide-react"

export default function CalculadoraOrcamento() {
  const [m2, setM2] = useState("")
  const [servico, setServico] = useState("")

  const zapLink = () => {
    const msg = `Olá! Gostaria de um orçamento para ${servico} em uma área de ${m2}m².`
    return `https://wa.me/554784839769?text=${encodeURIComponent(msg)}`
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5" /> Estimativa Rápida
        </CardTitle>
        <CardDescription>Escolha o serviço e a metragem aproximada.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label>Tipo de Serviço</Label>
          <Select onValueChange={setServico}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione o serviço" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Drywall">Drywall (Parede/Forro)</SelectItem>
              <SelectItem value="Sanca">Sanca de Gesso</SelectItem>
              <SelectItem value="Forro Liso">Forro Liso (Plaquinha)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label>Metragem (m²)</Label>
          <Input type="number" placeholder="Ex: 25" value={m2} onChange={(e) => setM2(e.target.value)} />
        </div>
        <Button 
          className="w-full bg-green-600 hover:bg-green-700 text-white" 
          disabled={!m2 || !servico}
          onClick={() => window.open(zapLink(), "_blank")}
        >
          <MessageCircle className="w-4 h-4 mr-2" /> Pedir Orçamento no Whats
        </Button>
      </CardContent>
    </Card>
  )
}
