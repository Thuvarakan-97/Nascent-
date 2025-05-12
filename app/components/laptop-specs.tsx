import { Badge } from "@/components/ui/badge"

interface SpecsProps {
  brand: string
  model: string
  processor: string
  ram: string
  storage: string
  graphics: string
  display: string
  os: string
}

export function LaptopSpecs({ brand, model, processor, ram, storage, graphics, display, os }: SpecsProps) {
  return (
    <div className="mt-6 bg-slate-50 p-4 rounded-lg">
      <h3 className="font-semibold text-lg mb-3">Technical Specifications</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            Brand
          </Badge>
          <span>{brand}</span>
        </div>
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            Model
          </Badge>
          <span>{model}</span>
        </div>
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            Processor
          </Badge>
          <span>{processor}</span>
        </div>
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            RAM
          </Badge>
          <span>{ram}</span>
        </div>
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            Storage
          </Badge>
          <span>{storage}</span>
        </div>
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            Graphics
          </Badge>
          <span>{graphics}</span>
        </div>
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            Display
          </Badge>
          <span>{display}</span>
        </div>
        <div className="flex items-start gap-2">
          <Badge variant="outline" className="bg-slate-100 text-slate-700">
            OS
          </Badge>
          <span>{os}</span>
        </div>
      </div>
    </div>
  )
}
