import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const getSnapshot = query({
  args: {
    appId: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("estateflowSnapshots")
      .withIndex("by_app_id", (q) => q.eq("appId", args.appId))
      .unique();
  }
});

export const saveSnapshot = mutation({
  args: {
    appId: v.string(),
    version: v.number(),
    sequence: v.number(),
    data: v.any(),
    clientUpdatedAt: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const updatedAt = new Date().toISOString();
    const clientUpdatedAt = args.clientUpdatedAt || updatedAt;
    const existing = await ctx.db
      .query("estateflowSnapshots")
      .withIndex("by_app_id", (q) => q.eq("appId", args.appId))
      .unique();

    if (existing?.clientUpdatedAt && clientUpdatedAt < existing.clientUpdatedAt) {
      return existing;
    }

    const record = {
      appId: args.appId,
      version: args.version,
      sequence: args.sequence,
      data: args.data,
      clientUpdatedAt,
      updatedAt
    };

    if (existing) {
      await ctx.db.patch(existing._id, record);
      return { ...record, _id: existing._id };
    }

    const _id = await ctx.db.insert("estateflowSnapshots", record);
    return { ...record, _id };
  }
});

export const resetDemoState = mutation({
  args: {
    appId: v.string(),
    version: v.number(),
    sequence: v.number(),
    data: v.any(),
    clientUpdatedAt: v.optional(v.string())
  },
  handler: async (ctx, args) => {
    const updatedAt = new Date().toISOString();
    const clientUpdatedAt = args.clientUpdatedAt || updatedAt;
    const existing = await ctx.db
      .query("estateflowSnapshots")
      .withIndex("by_app_id", (q) => q.eq("appId", args.appId))
      .unique();

    const record = {
      appId: args.appId,
      version: args.version,
      sequence: args.sequence,
      data: args.data,
      clientUpdatedAt,
      updatedAt
    };

    const snapshotId = existing?._id || await ctx.db.insert("estateflowSnapshots", record);
    if (existing) {
      await ctx.db.patch(existing._id, record);
    }

    const aiEvents = await ctx.db
      .query("estateflowAiEvents")
      .withIndex("by_app_id", (q) => q.eq("appId", args.appId))
      .collect();
    for (const event of aiEvents) {
      await ctx.db.delete(event._id);
    }

    const aiUsage = await ctx.db.query("estateflowAiUsage").collect();
    for (const usage of aiUsage) {
      await ctx.db.delete(usage._id);
    }

    return {
      ...record,
      _id: snapshotId,
      clearedAiEvents: aiEvents.length,
      clearedAiUsage: aiUsage.length
    };
  }
});

export const saveAiEvent = mutation({
  args: {
    appId: v.string(),
    userId: v.optional(v.string()),
    role: v.string(),
    page: v.optional(v.string()),
    intent: v.optional(v.string()),
    blocked: v.optional(v.boolean()),
    reason: v.optional(v.string()),
    elapsedMs: v.optional(v.number()),
    messageKey: v.optional(v.string()),
    prompt: v.string(),
    response: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("estateflowAiEvents", {
      ...args,
      createdAt: new Date().toISOString()
    });
  }
});

export const recentAiEvents = query({
  args: {
    userId: v.string(),
    since: v.string()
  },
  handler: async (ctx, args) => {
    const rows = await ctx.db
      .query("estateflowAiEvents")
      .withIndex("by_user_created", (q) => q.eq("userId", args.userId))
      .collect();

    return rows
      .filter((row) => row.createdAt >= args.since)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .slice(0, 50);
  }
});

export const getAiUsage = query({
  args: {
    userId: v.string(),
    windowKey: v.string()
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("estateflowAiUsage")
      .withIndex("by_user_window", (q) => q.eq("userId", args.userId).eq("windowKey", args.windowKey))
      .unique();
  }
});

export const recordAiUsage = mutation({
  args: {
    userId: v.string(),
    windowKey: v.string(),
    elapsedMs: v.number(),
    blocked: v.optional(v.boolean())
  },
  handler: async (ctx, args) => {
    const updatedAt = new Date().toISOString();
    const existing = await ctx.db
      .query("estateflowAiUsage")
      .withIndex("by_user_window", (q) => q.eq("userId", args.userId).eq("windowKey", args.windowKey))
      .unique();

    const patch = {
      usedMs: (existing?.usedMs || 0) + Math.max(0, Math.round(args.elapsedMs)),
      requestCount: (existing?.requestCount || 0) + (args.blocked ? 0 : 1),
      blockedCount: (existing?.blockedCount || 0) + (args.blocked ? 1 : 0),
      updatedAt
    };

    if (existing) {
      await ctx.db.patch(existing._id, patch);
      return { ...existing, ...patch };
    }

    const record = {
      userId: args.userId,
      windowKey: args.windowKey,
      ...patch
    };
    const _id = await ctx.db.insert("estateflowAiUsage", record);
    return { ...record, _id };
  }
});
