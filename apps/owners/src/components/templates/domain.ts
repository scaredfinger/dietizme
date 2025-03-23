import { Multilanguage_Field_Input } from '@/data-access'
import { JSONSchema } from '../forms'

export interface Template {
    global?: JSONSchema
    pages: {
        [page: string]: JSONSchema
    }
}
