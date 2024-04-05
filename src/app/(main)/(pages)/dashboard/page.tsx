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
import { Checkbox } from "@/components/ui/checkbox"


const DashboardPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date())

  return (
    <Layout><div className="flex flex-col gap-4 relative overflow-auto">

      <h1 className="text-4xl sticky top-0 z-[10] p-6 bg-background/50 backdrop-blur-lg flex items-center border-b">
        Dashboard
      </h1>
      <div className="flex w-screen pl-20 gap-20">
        <div className="border grow-0 shrink-0 rounded-md w-60">
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
        <div className="grow-0 shrink-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border"
          />
        </div>
        <div className = "flex-col border rounded-md p-4 grow-0 shrink-0 w-60">
          
          <div className="flex gap-1.5 leading-none pt-3">
            <Checkbox id="terms1" />
            <label
              htmlFor="terms1"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Task 1
            </label>
          
          </div>
          
          <div className="flex gap-1.5 leading-none pt-3">
            <Checkbox id="terms2" />
            <label
              htmlFor="terms2"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Task 2
            </label>
          
          </div>
          
          <div className="flex gap-1.5 leading-none pt-3">
            <Checkbox id="terms3" />
            <label
              htmlFor="terms3"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Task 3
            </label>
          
          </div>
          
          <div className="flex gap-1.5 leading-none pt-3">
            <Checkbox id="terms4" />
            <label
              htmlFor="terms4"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Task 4
            </label>
          
          </div>
          
          <div className="flex gap-1.5 leading-none pt-3">
            <Checkbox id="terms5" />
            <label
              htmlFor="terms5"
              className="leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Task 5
            </label>
          
          </div>
          
        </div>
          <div className="grow-0 shrink-0">
            <DemoPage />
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default DashboardPage