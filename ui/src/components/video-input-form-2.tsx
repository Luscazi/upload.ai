import { Wand2 } from "lucide-react";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Separator } from "./ui/separator";
import { Slider } from "./ui/slider";

export function VideoInputForm2() {
  return (
    <form className="space-y-6">
      <div className="space-y-2">
        <Label>Prompt</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Selecione um prompt..."/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="yt-title">Título do Youtube</SelectItem>
            <SelectItem value="yt-description">Descrição do Youtube</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Separator />

      <div className="space-y-2">
        <Label>Modelo</Label>
        <Select defaultValue="gpt3.5" disabled>
          <SelectTrigger>
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
          </SelectContent>
        </Select>
        <span className="block text-xs text-muted-foreground italic">Você poderá customizar essa opção em breve</span>
      </div>

      <Separator />

      <div className="space-y-4">
        <Label>Temperatura</Label>
        <Slider 
          min={0}
          max={1}
          step={0.1}
        />
        <span className="block text-xs text-muted-foreground italic leading-relaxed">
          Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.
        </span>
      </div>

      <Separator />

      <Button type="submit" className="w-full text-slate-50">
        Executar
        <Wand2 className="w-4 h-4 ml-2"/>
      </Button>

    </form>
  )
}