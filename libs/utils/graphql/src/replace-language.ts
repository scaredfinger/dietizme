import { DocumentNode } from '@apollo/client'
import type { SelectionNode, SelectionSetNode } from 'graphql/language/ast'

export function replaceLanguage(document: DocumentNode, language: string, alias: string): DocumentNode {
  return {
    ...document,
    definitions: document.definitions.map(definition => {
      if (definition.kind === 'OperationDefinition') {
        return {
          ...definition,
          selectionSet: changeDocumentLanguageSelectionSet(definition.selectionSet, language, alias)
        };
      }

      if (definition.kind === 'FragmentDefinition') {
        return {
          ...definition,
          selectionSet: changeDocumentLanguageSelectionSet(definition.selectionSet, language, alias)
        }
      }

      return definition;
    })
  }
}

function changeDocumentLanguageSelectionSet(selectionSetNode: SelectionSetNode, language: string, alias: string): SelectionSetNode {
  return {
    ...selectionSetNode,
    selections: selectionSetNode.selections.map(s => changeDocumentLanguageSelect(s, language, alias))
  }
}

function changeDocumentLanguageSelect(selectionNode: SelectionNode, language: string, alias: string): SelectionNode {
  if (selectionNode.kind === 'Field'
    && selectionNode.name.value === 'en'
    && selectionNode.alias?.value === alias) {
    return {
      ...selectionNode,
      name: {
        ...selectionNode.name,
        value: language
      },
    }
  }

  if (selectionNode.kind === 'FragmentSpread') {
    return {
      ...selectionNode
    }
  }

  if (selectionNode.kind === 'Field' && selectionNode.selectionSet) {
    return {
      ...selectionNode,
      selectionSet: changeDocumentLanguageSelectionSet(selectionNode.selectionSet, language, alias)
    }
  }

  return selectionNode
}
