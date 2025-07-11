import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const getAllCofirmed = query({
  handler: async (ctx) => {
    const result = await ctx.db.query("confirmed").collect()
    return result
  }
})

export const getConfirmedById = query({
  args: { id: v.id("pendings") },
  handler: async (ctx, { id }) => ctx.db.query("confirmed").filter((q) => q.eq(q.field("id"), id)).first()
})

export const createConfirmed = mutation({
  args: { 
    id: v.id("pendings"),
    nome: v.string(),
    categoria: v.string(),
    unidade: v.string(),
    quantidade: v.number(),
    price: v.number(),
   },
  handler: async (ctx, args) => {
    const existed = await ctx.db.query("confirmed").filter((q) => q.eq(q.field("id"), args.id)).first()
    if (existed) return
    return ctx.db.insert("confirmed", args)
  }
})

export const deleteConfirmed = mutation({
  args: { id: v.id("pendings") },
  handler: async (ctx, {id}) => {
    const existed = await ctx.db.query("confirmed").filter((q) => q.eq(q.field("id"), id)).first()
    if (!existed) return
    return ctx.db.delete(existed._id)
  }
})