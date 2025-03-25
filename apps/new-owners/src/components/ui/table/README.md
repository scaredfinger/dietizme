# Table Component

A reusable and configurable table component for displaying data.

## Usage

```tsx
import Table, { TableColumn } from '@/components/ui/table';

// Define your data type
interface User {
  id: number;
  name: string;
  email: string;
}

// Sample data
const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
];

// Define table columns
const columns: TableColumn<User>[] = [
  {
    key: 'id',
    header: 'ID',
  },
  {
    key: 'name',
    header: 'Name',
  },
  {
    key: 'email',
    header: 'Email',
  },
  {
    key: 'actions',
    header: 'Actions',
    cell: (user) => (
      <>
        <button onClick={() => console.log('Edit', user.id)}>Edit</button>
        <button onClick={() => console.log('Delete', user.id)}>Delete</button>
      </>
    ),
  },
];

// Using the Table component
const MyTable = () => {
  return (
    <Table
      data={users}
      columns={columns}
      isLoading={false}
      error={null}
    />
  );
};
```

## Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `data` | `T[]` | Array of data items to display | Required |
| `columns` | `TableColumn<T>[]` | Column definitions | Required |
| `isLoading` | `boolean` | Whether data is loading | `false` |
| `loadingIndicator` | `ReactNode` | Custom loading indicator | Default spinner |
| `emptyState` | `ReactNode` | Custom empty state | Default message |
| `error` | `Error \| null` | Error object | `null` |
| `errorState` | `ReactNode` | Custom error state | Default message |
| `className` | `string` | Class name for the table wrapper | `'overflow-x-auto shadow-md rounded-lg'` |
| `tableClassName` | `string` | Class name for the table element | `'min-w-full bg-white'` |
| `theadClassName` | `string` | Class name for the thead element | `'bg-gray-100'` |
| `tbodyClassName` | `string` | Class name for the tbody element | `'divide-y divide-gray-200'` |
| `trClassName` | `string` | Class name for tr elements | `'hover:bg-gray-50'` |
| `thClassName` | `string` | Class name for th elements | `'py-3 px-4 text-left font-semibold text-gray-700'` |
| `tdClassName` | `string` | Class name for td elements | `'py-3 px-4'` |

## Column Props

| Prop | Type | Description | Default |
|------|------|-------------|---------|
| `key` | `string` | Unique key for the column, also used for data access | Required |
| `header` | `ReactNode` | Header content | Required |
| `cell` | `(item: T, index: number) => ReactNode` | Custom cell renderer | Displays item[key] |
| `className` | `string` | Custom class name for this column | Default from table |
