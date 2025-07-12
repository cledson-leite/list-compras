import { defineSchema, defineTable } from 'convex/server'
import {v} from 'convex/values'

export default  defineSchema({
  pendings: defineTable({
    nome: v.string(),
    categoria: v.string(),
    unidade: v.string(),
    quantidade: v.number(),
  }),
  confirmed: defineTable({
    id: v.id("pendings"),
    nome: v.string(),
    categoria: v.string(),
    unidade: v.string(),
    quantidade: v.number(),
    price: v.number(),
  })
}) 