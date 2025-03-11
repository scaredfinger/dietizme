import { Accepted } from './accept'
import { NoteAdded } from './add-note'
import { Created } from './create'
import { Rejected } from './reject'
import { Cancelled } from './cancel'

export * from './create'
export * from './accept'
export * from './add-note'
export * from './reject'
export * from './cancel'

export type BookingEvent = Created | Accepted | NoteAdded | Rejected | Cancelled