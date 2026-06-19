import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  estateflowSnapshots: defineTable({
    appId: v.string(),
    version: v.number(),
    sequence: v.number(),
    data: v.any(),
    clientUpdatedAt: v.optional(v.string()),
    updatedAt: v.string()
  }).index("by_app_id", ["appId"]),

  estateflowAiEvents: defineTable({
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
    response: v.string(),
    createdAt: v.string()
  })
    .index("by_app_id", ["appId"])
    .index("by_user_created", ["userId", "createdAt"]),

  estateflowAiUsage: defineTable({
    userId: v.string(),
    windowKey: v.string(),
    usedMs: v.number(),
    requestCount: v.number(),
    blockedCount: v.number(),
    updatedAt: v.string()
  }).index("by_user_window", ["userId", "windowKey"])
});
