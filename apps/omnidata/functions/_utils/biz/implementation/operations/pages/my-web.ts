import {
  My_Web_Section_Save_Input,
  My_Web_Section_UpsertMutationVariables,
  Preload_My_Web_Section_SaveQuery,
} from '../../../../generated'
import { OperationRequest } from '@otiuming/biz-builder'

export function buildMyWebSave(
  {
    body: { organization_id, section_id, value },
  }: OperationRequest<My_Web_Section_Save_Input>,
  context: Preload_My_Web_Section_SaveQuery
): My_Web_Section_UpsertMutationVariables {
  return {
    section: {
      organization_id,
      section_id,
      value
    }
  }
}
