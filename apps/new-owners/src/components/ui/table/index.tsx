import React, { ReactNode } from 'react'

export interface TableColumn<T = any> {
  key: string
  header: ReactNode
  cell?: (item: T, index: number) => ReactNode
  className?: string
}

export interface TableProps<T = any> {
  data: T[]
  columns: TableColumn<T>[]
  isLoading?: boolean
  loadingIndicator?: ReactNode
  emptyState?: ReactNode
  error?: Error | null
  errorState?: ReactNode
  className?: string
  tableClassName?: string
  theadClassName?: string
  tbodyClassName?: string
  trClassName?: string
  thClassName?: string
  tdClassName?: string
}

export const Table = <T extends object>({
  data,
  columns,
  isLoading = false,
  loadingIndicator,
  emptyState,
  error,
  errorState,
  className = 'overflow-x-auto shadow-md rounded-lg',
  tableClassName = 'min-w-full bg-white',
  theadClassName = 'bg-gray-100',
  tbodyClassName = 'divide-y divide-gray-200',
  trClassName = 'hover:bg-gray-50',
  thClassName = 'py-3 px-4 text-left font-semibold text-gray-700',
  tdClassName = 'py-3 px-4',
}: TableProps<T>) => {
  // Default loading indicator
  const defaultLoadingIndicator = (
    <div className="flex justify-center items-center h-40">
      <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-gray-900"></div>
    </div>
  )

  // Default empty state
  const defaultEmptyState = (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
      <p className="text-yellow-700">No data found</p>
    </div>
  )

  // Default error state
  const defaultErrorState = (
    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
      <p>{error?.message || 'An error occurred'}</p>
    </div>
  )

  if (isLoading) {
    return loadingIndicator || defaultLoadingIndicator
  }

  if (error) {
    return errorState || defaultErrorState
  }

  if (!data || data.length === 0) {
    return emptyState || defaultEmptyState
  }

  return (
    <div className={className}>
      <table className={tableClassName}>
        <thead className={theadClassName}>
          <tr>
            {columns.map((column) => (
              <th
                key={column.key}
                className={column.className || thClassName}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={tbodyClassName}>
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className={trClassName}>
              {columns.map((column) => (
                <td
                  key={`${rowIndex}-${column.key}`}
                  className={column.className || tdClassName}
                >
                  {column.cell
                    ? column.cell(item, rowIndex)
                    : (item as any)[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
