import { useEffect, useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { api } from "@/lib/axios";

export function ModelSelect() {
  return(
    <Select disabled defaultValue="gpt3.5">
      <SelectTrigger>
        <SelectValue placeholder="Selecione um prompt..."/>
      </SelectTrigger>
      <SelectContent>
      <SelectItem value="gpt3.5">ChatGPT 3.5</SelectItem>
      </SelectContent>
    </Select>
  )
}