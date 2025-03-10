import { DocumentNode, gql } from '@apollo/client'
import { beforeEach, describe, expect, it } from 'vitest'
import { FieldNode, Kind, OperationTypeNode } from 'graphql'

import { replaceLanguage } from './replace-language'

describe('change-document-language', () => {
  it('is defined', () => {
    expect(replaceLanguage).toBeDefined()
  })

  describe('when document has no translatable field', () => {
    let document: DocumentNode

    beforeEach(() => {
      document = gql`
        query get_some_entity($id: ID!) {
          someEntity(id: $id) {
            ...some_entity_with_no_multilang
          }
        }

        fragment some_entity_with_no_multilang on SomeEntityNoMultLang {
          id
          name
        }
      `
    })

    it('creates a valid document', () => {
      expect(document).toBeDefined()
    })

    it('returns the same document', () => {
      expect(replaceLanguage(document, 'fr', 'value')).toEqual(document)
    })
  })

  describe('when document has a translatable field', () => {
    let document: DocumentNode

    beforeEach(() => {
      document = gql`
        query get_some_entity($id: ID!) {
          someEntity(id: $id) {
            ...some_entity_with_multilang
          }
        }

        fragment some_entity_with_multilang on SomeEntityWithMultiLang {
          id
          name {
            value: en
          }
          description {
            value: en
          }
        }
      `
    })

    it('is not the same', () => {
      const changedDocument = replaceLanguage(document, 'fr', 'value')

      expect(changedDocument).not.toEqual(document)
    })
  })

  describe('when the document has a inlined multilanguage field', () => {
    let doc: DocumentNode

    beforeEach(() => {
      doc = gql`
        query get_super_hero($id: ID!) {
          super_hero_by_pk(id: $id) {
            id
            name {
              value: en
            }
          }
        }
      `
    })

    describe('and replacement language is different', () => {
      let replaced: DocumentNode

      beforeEach(() => {
        replaced = replaceLanguage(doc, 'fr', 'value')
      })

      it('modifies the document', () => {
        expect(replaced).not.toEqual(doc)
      })

      it('keeps the same number of fields', () => {
        const selections = eval(
          'replaced.definitions[0].selectionSet.selections[0].selectionSet.selections',
        )
        expect(selections.length).toEqual(2)
      })

      describe('replaced selection', () => {
        let multilanguageFieldSelection: FieldNode

        beforeEach(() => {
          multilanguageFieldSelection = eval(
            'replaced.definitions[0].selectionSet.selections[0].selectionSet.selections[1].selectionSet.selections[0]',
          )
        })

        it('changes the to replaced language', () => {
          expect(multilanguageFieldSelection.name.value).toEqual('fr')
        })

        it('does not replace the alias name', () => {
          expect(multilanguageFieldSelection.alias?.value).toEqual('value')
        })
      })
    })
  })

  describe('when the document has a fragment spread field', () => {
    let doc: DocumentNode

    beforeEach(() => {
      doc = gql`
        query get_super_hero($id: ID!) {
          super_hero_by_pk(id: $id) {
            id
            name {
              ...multilanguage_text
            }
          }
        }

        fragment multilanguage_text on MultilanguageText {
          value: en
        }
      `
    })

    describe('and the replacement langua', () => {
      let replaced: DocumentNode

      beforeEach(() => {
        replaced = replaceLanguage(doc, 'fr', 'value')
      })

      it('modifies the document', () => {
        expect(replaced).not.toEqual(doc)
      })

      it('keeps the same number of fields', () => {
        const selections = eval(
          'replaced.definitions[1].selectionSet.selections',
        )
        expect(selections.length).toEqual(1)
      })

      describe('replaced selection', () => {
        let multilanguageFieldSelection: FieldNode

        beforeEach(() => {
          multilanguageFieldSelection = eval(
            'replaced.definitions[1].selectionSet.selections[0]',
          )
        })

        it('changes the to replaced language', () => {
          expect(multilanguageFieldSelection.name.value).toEqual('fr')
        })

        it('does not replace the alias name', () => {
          expect(multilanguageFieldSelection.alias?.value).toEqual('value')
        })
      })
    })
  })

  describe('when documents have other types of definitions', () => {
    let doc: DocumentNode

    beforeEach(() => {
      doc = {
        kind: Kind.DOCUMENT,
        definitions: [
          {
            kind: Kind.SCHEMA_DEFINITION,
            operationTypes: [],
          },
          {
            kind: Kind.OPERATION_DEFINITION,
            operation: OperationTypeNode.QUERY,
            name: { kind: Kind.NAME, value: 'get_super_hero' },
            selectionSet: {
              kind: Kind.SELECTION_SET,
              selections: [
                {
                  kind: Kind.FIELD,
                  name: { kind: Kind.NAME, value: 'super_hero_by_pk' },
                },
                {
                  kind: Kind.FIELD,
                  name: { kind: Kind.NAME, value: 'super_hero_by_pk' },
                  selectionSet: {
                    kind: Kind.SELECTION_SET,
                    selections: [
                      {
                        kind: Kind.FIELD,
                        name: { kind: Kind.NAME, value: 'id' },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      }
    })

    it('does not modify the document', () => {
      expect(replaceLanguage(doc, 'fr', 'value')).toEqual(doc)
    })
  })
})
