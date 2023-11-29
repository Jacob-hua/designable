import { Engine } from '@designable/core'
import {
  transformToSchema,
  transformToTreeNode,
} from '@designable/formily-transformer'
import { message } from 'antd'

export const saveSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  message.success('Save Success')
  if ((window as any).__POWERED_BY_QIANKUN__) {
    window.parent.postMessage(
      JSON.stringify(transformToSchema(designer.getCurrentTree())),
      'http://localhost:8080'
    )
    // window.location.href = 'http://localhost:8080'
    window.history.pushState(null, '', 'http://localhost:8080')
  }
}

export const publishSchema = (designer: Engine) => {
  localStorage.setItem(
    'formily-schema',
    JSON.stringify(transformToSchema(designer.getCurrentTree()))
  )
  message.success('Save Success')
  if ((window as any).__POWERED_BY_QIANKUN__) {
    window.parent.postMessage(
      JSON.stringify(transformToSchema(designer.getCurrentTree())),
      'http://localhost:8080'
    )
    // window.location.href = 'http://localhost:8080'
    window.history.pushState(null, '', 'http://localhost:8080')
  }
}

export const loadInitialSchema = (designer: Engine) => {
  try {
    designer.setCurrentTree(
      transformToTreeNode(JSON.parse(localStorage.getItem('formily-schema')))
    )
  } catch {}
}
