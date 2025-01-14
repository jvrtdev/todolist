import { Button } from "@/domain/shared/components/ui/button"
import { Input } from "@/domain/shared/components/ui/input"
import { Label } from "@/domain/shared/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/domain/shared/components/ui/popover"
import { Ellipsis, LucideCircleEllipsis, MenuIcon } from "lucide-react"
export function MenuPopover() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          <MenuIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Listas</h4>
            <p className="text-sm text-muted-foreground">
              Tags e categorias de tarefas
            </p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-center gap-1 bg-gray-200 rounded-lg p-2 ">
              <Label htmlFor="2" className="h-4  w-4 rounded-full bg-red-500"></Label>
              <p>Trabalho</p>
            </div>
            <div className="flex items-center gap-1 justify-between bg-gray-200 rounded-lg p-2 ">
              <div className="inline-flex items-center gap-1 ">
              <Label htmlFor="2" className="h-4  w-4 rounded-full bg-red-500"></Label>
              <p>Trabalho</p>
              </div>


            </div>

          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
