import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllPendings = query({
  handler: async (ctx) => {
    const result = await ctx.db.query("pendings").collect()
    return result
  }
})

export const getPendingById = query({
  args: { _id: v.id("pendings") },
  handler: async (ctx, { _id }) => {
                    console.log(_id)
    
    return ctx.db.query("pendings").filter((q) => q.eq(q.field("_id"), _id)).first()
  }
})

export const createPending = mutation({
  args: { 
    nome: v.string(),
    categoria: v.string(),
    unidade: v.string(),
    quantidade: v.number(),
   },
  handler: async (ctx, args) => {
    const existed = await ctx.db.query("pendings").filter((q) => q.eq(q.field("nome"), args.nome)).first()
    if (existed) return
    return ctx.db.insert("pendings", args)
  }
})

export const uptadePending = mutation({
  args: { 
    _id: v.id("pendings"),
    nome: v.string(),
    categoria: v.string(),
    unidade: v.string(),
    quantidade: v.number(),
   },
  handler: async (ctx, args) => {
    const existed = await ctx.db.query("pendings").filter((q) => q.eq(q.field("_id"), args._id)).first()
    if (!existed) return
    return ctx.db.patch(args._id, args)
  }
})

export const deletePending = mutation({
  args: { _id: v.id("pendings") },
  handler: async (ctx, {_id}) => {
    const existed = await ctx.db.query("pendings").filter((q) => q.eq(q.field("_id"), _id)).first()
    if (!existed) return
    return ctx.db.delete(existed._id)
  }
})

export const restoreFromHsitory = mutation({
  args: { historyId: v.id("history") },
  handler: async (ctx, {historyId}) => {
    const history = await ctx.db.get(historyId)
    if (!history) return
    for (const product of history.products) {
      await ctx.db.insert("pendings", product)
    }
    return ctx.db.delete(historyId)
  }
})