"use client"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calculator, MessageCircle, Sparkles, Timer, ShieldCheck } from "lucide-react"
import { Service } from "@/app/page"

export default function QuoteCalculator({services}:{services: Service[]}) {
  const [m2, setM2] = useState('')
  const [servico, setServico] = useState('')

  const zapLink = () => {
    const msg = `Olá! Gostaria de um orçamento para ${servico || 'serviço de gesso'} em uma área de ${m2 || '___'}m².`
    return `https://wa.me/554784839769?text=${encodeURIComponent(msg)}`
  }

  const insights = [
    {
      icon: <Timer className="h-4 w-4" />,
      label: 'Resposta média',
      value: 'até 2h úteis',
    },
    {
      icon: <ShieldCheck className="h-4 w-4" />,
      label: 'Garantia estrutural',
      value: '3 anos',
    },
    {
      icon: <Sparkles className="h-4 w-4" />,
      label: 'Acabamento premium',
      value: 'Supervisionado',
    },
  ]

  return (
    <div className="grid gap-8 rounded-[32px] border border-white/40 bg-gradient-to-br from-white via-white to-stone-50 p-8 shadow-[0_30px_70px_rgba(15,15,15,0.08)] lg:grid-cols-[1fr_0.8fr]">
      <div className="space-y-6">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Orçamento guiado</p>
          <h3 className="text-3xl font-serif text-primary">Simule o seu projeto</h3>
          <p className="text-sm text-muted-foreground">
            Informe o tipo de serviço e a metragem para receber um contato especializado com todas as etapas e cronograma detalhado.
          </p>
        </div>
        <Card className="border-white/60 bg-white/80 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calculator className="h-5 w-5" /> Estimativa rápida
            </CardTitle>
            <CardDescription>Dados suficientes para nossa equipe retornar em até 2h úteis.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Tipo de Serviço</Label>
              <Select onValueChange={setServico}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o serviço" />
                </SelectTrigger>
                <SelectContent>
                  {services.reduce((acc: Service[], el) => acc.filter(it => it._id == el._id).length > 0 ? acc : [...acc, el ],[]).map((option) => (
                    <SelectItem key={option._id} value={option._id}>
                      {option.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Metragem (m²)</Label>
              <Input
                type="number"
                placeholder="Ex: 25"
                value={m2}
                onChange={(e) => setM2(e.target.value)}
              />
            </div>
            <Button
              className="w-full rounded-full bg-accent text-white shadow-lg shadow-accent/30"
              disabled={!m2 || !servico}
              onClick={() => window.open(zapLink(), '_blank')}
            >
              <MessageCircle className="mr-2 h-4 w-4" /> Pedir proposta detalhada
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col justify-between gap-6 rounded-[28px] border border-white/60 bg-white/70 p-6">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">O que entregamos</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li>• Visita técnica e levantamento preciso</li>
            <li>• Memorial de materiais com marcas premium</li>
            <li>• Cronograma e acompanhamento semanal</li>
            <li>• Instalação limpa e entrega com checklist</li>
          </ul>
        </div>
        <div className="grid gap-3 sm:grid-cols-3">
          {insights.map((insight) => (
            <div key={insight.label} className="rounded-2xl border border-white/60 bg-white/80 p-4 text-center">
              <span className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white shadow">
                {insight.icon}
              </span>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{insight.label}</p>
              <p className="text-base font-serif text-primary">{insight.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
