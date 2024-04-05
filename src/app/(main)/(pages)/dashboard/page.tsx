'use client'
import React from 'react'
import Layout from '@/components/mlayout';
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { DayPicker } from 'react-day-picker';
import TodayIcon from '@mui/icons-material/Today';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { DataTable } from '@/app/notes/data-table';
import DemoPage from '@/app/notes/page';


const DashboardPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Layout><div className="flex flex-col gap-4 relative overflow-auto">

      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Dashboard
      </h1>
      <div className="flex w-screen pl-20 gap-20">
        <div className="border grow-0 rounded-md w-60">
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem><TodayIcon />Calendar</CommandItem>
                <CommandItem><FormatListBulletedIcon />Todo List</CommandItem>
                <CommandItem><TextSnippetIcon />Notes List</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
        <div className="grow-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className = "flex border rounded-md p-4 grow-0">
          <div className="pr-5">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Task One</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Two</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">Task Three</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-four" id="option-four" />
                <Label htmlFor="option-four">Task Four</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-five" id="option-five" />
                <Label htmlFor="option-five">Task Five</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Six</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Seven</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Eight</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="pl-5">
            <RadioGroup defaultValue="option-one">
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Task One</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Two</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Three</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Four</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">Task Five</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Six</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Seven</Label>
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">Task Eight</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        
        </div>
      </div>
    </Layout>
  )
}
export default DashboardPage