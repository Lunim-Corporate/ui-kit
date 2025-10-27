"use client"

import * as React from "react"
import { ArrowUpDown, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export interface Column<T> {
  key: keyof T
  label: string
  sortable?: boolean
  render?: (value: string | number | boolean | null, row: T) => React.ReactNode
}

export interface DataTableProps<T> {
  data: T[]
  columns: Column<T>[]
  searchKey?: keyof T
  searchPlaceholder?: string
  onRowSelect?: (selectedRows: T[]) => void
  className?: string
}

export function DataTable<T extends Record<string, string | number | boolean | null>>({
  data,
  columns,
  searchKey,
  searchPlaceholder = "Search...",
  onRowSelect,
  className,
}: DataTableProps<T>) {
  const [sortKey, setSortKey] = React.useState<keyof T | null>(null)
  const [sortDirection, setSortDirection] = React.useState<"asc" | "desc">("asc")
  const [searchValue, setSearchValue] = React.useState("")
  const [selectedRows, setSelectedRows] = React.useState<T[]>([])

  const filteredData = React.useMemo(() => {
    let filtered = data

    if (searchValue && searchKey) {
      filtered = data.filter((item) =>
        String(item[searchKey]).toLowerCase().includes(searchValue.toLowerCase())
      )
    }

    if (sortKey) {
      filtered = [...filtered].sort((a, b) => {
        const aVal = a[sortKey]
        const bVal = b[sortKey]
        
        if (aVal == null) return 1
        if (bVal == null) return -1
        
        if (aVal < bVal) return sortDirection === "asc" ? -1 : 1
        if (aVal > bVal) return sortDirection === "asc" ? 1 : -1
        return 0
      })
    }

    return filtered
  }, [data, searchValue, searchKey, sortKey, sortDirection])

  const handleSort = (key: keyof T) => {
    if (sortKey === key) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortKey(key)
      setSortDirection("asc")
    }
  }

  const handleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedRows(filteredData)
      onRowSelect?.(filteredData)
    } else {
      setSelectedRows([])
      onRowSelect?.([])
    }
  }

  const handleSelectRow = (row: T, checked: boolean) => {
    let newSelectedRows
    if (checked) {
      newSelectedRows = [...selectedRows, row]
    } else {
      newSelectedRows = selectedRows.filter((selectedRow) => selectedRow !== row)
    }
    setSelectedRows(newSelectedRows)
    onRowSelect?.(newSelectedRows)
  }

  const isAllSelected = selectedRows.length === filteredData.length && filteredData.length > 0
  const isIndeterminate = selectedRows.length > 0 && selectedRows.length < filteredData.length

  return (
    <div className={cn("space-y-4", className)}>
      {searchKey && (
        <div className="flex items-center space-x-2">
          <Input
            placeholder={searchPlaceholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="max-w-sm"
          />
        </div>
      )}
      
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {onRowSelect && (
                <TableHead className="w-12">
                  <Checkbox
                    checked={isAllSelected}
                    onCheckedChange={handleSelectAll}
                    ref={(el) => {
                      if (el) el.indeterminate = isIndeterminate
                    }}
                  />
                </TableHead>
              )}
              {columns.map((column) => (
                <TableHead key={String(column.key)}>
                  {column.sortable ? (
                    <Button
                      variant="ghost"
                      onClick={() => handleSort(column.key)}
                      className="h-auto p-0 font-semibold"
                    >
                      {column.label}
                      <ArrowUpDown className="ml-2 h-4 w-4" />
                    </Button>
                  ) : (
                    column.label
                  )}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={index}>
                {onRowSelect && (
                  <TableCell>
                    <Checkbox
                      checked={selectedRows.includes(row)}
                      onCheckedChange={(checked) => handleSelectRow(row, checked as boolean)}
                    />
                  </TableCell>
                )}
                {columns.map((column) => (
                  <TableCell key={String(column.key)}>
                    {column.key === "status" ? (
                      <Badge variant={row[column.key] === "Active" ? "default" : "secondary"}>
                        {String(row[column.key])}
                      </Badge>
                    ) : (
                      String(row[column.key])
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      {filteredData.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No data found.
        </div>
      )}
    </div>
  )
}
