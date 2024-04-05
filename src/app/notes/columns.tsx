"use client"

import { ColumnDef } from "@tanstack/react-table"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Note = {
  id: string
  TimesReviewed: number
  NoteTitle: string
  CreatedOn: string
}

export const columns: ColumnDef<Note>[] = [
  {
    accessorKey: "NoteTitle",
    header: "Note Title",
  },
  {
    accessorKey: "CreatedOn",
    header: "Created On",
  },
  {
    accessorKey: "TimesReviewed",
    header: "Times Reviewed",
  },
]
