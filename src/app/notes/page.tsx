import { Note, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Note[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      TimesReviewed: 3,
      NoteTitle: "Limit Laws",
      CreatedOn: "15th March 2024",
    },
    {
      id: "ieoeooej",
      TimesReviewed: 1,
      NoteTitle: "Sorting Algorithms",
      CreatedOn: "3rd March 2024",
    },
    {
      id: "936484yu",
      TimesReviewed: 2,
      NoteTitle: "Matrices",
      CreatedOn: "2nd February 2024",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
