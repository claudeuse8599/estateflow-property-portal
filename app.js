const lineIcon = (body) =>
  `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${body}</svg>`;

const icon = {
  home: lineIcon('<path d="M4 10.6 12 4l8 6.6V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1v-9.4Z"/><path d="M9.5 21h5"/>'),
  wallet: lineIcon('<rect x="3.5" y="6.5" width="17" height="12.5" rx="2.5"/><path d="M3.8 9.5h16.4"/><path d="M16.8 13h.01"/>'),
  file: lineIcon('<path d="M7 3.75h6.25L18 8.5v11.75H7z"/><path d="M13 3.75V9h5"/><path d="M9.5 13h5"/><path d="M9.5 16.5h5"/>'),
  tool: lineIcon('<rect x="3.5" y="8.25" width="17" height="10.5" rx="2.5"/><path d="M8.5 8.25V6.8A1.8 1.8 0 0 1 10.3 5h3.4a1.8 1.8 0 0 1 1.8 1.8v1.45"/><path d="M3.75 12.25h16.5"/><path d="M12 11.25v3"/>'),
  refresh: lineIcon('<path d="M20 12a8 8 0 1 1-2.35-5.65"/><path d="M20 4v5h-5"/>'),
  users: lineIcon('<circle cx="12" cy="8.6" r="3.4"/><path d="M6.6 20a5.4 5.4 0 0 1 10.8 0"/><path d="M18.6 19a3.8 3.8 0 0 0-2.4-3.4"/><path d="M5.4 19a3.8 3.8 0 0 1 2.4-3.4"/>'),
  chart: lineIcon('<path d="M4 19.5V5"/><path d="M4 19.5h16"/><path d="M8 16v-4"/><path d="M12 16V8"/><path d="M16 16v-6"/>'),
  building: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 21V4h9v17M14 9h5v12" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8h3M8 12h3M8 16h3M17 13h.01M17 17h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  bell: lineIcon('<path d="M18 9.8a6 6 0 1 0-12 0c0 5.4-1.9 6.3-1.9 8.2h15.8c0-1.9-1.9-2.8-1.9-8.2Z"/><path d="M10 21h4"/>'),
  sun: lineIcon('<circle cx="12" cy="12" r="4"/><path d="M12 2.8v2"/><path d="M12 19.2v2"/><path d="M4.5 4.5l1.4 1.4"/><path d="M18.1 18.1l1.4 1.4"/><path d="M2.8 12h2"/><path d="M19.2 12h2"/><path d="M4.5 19.5l1.4-1.4"/><path d="M18.1 5.9l1.4-1.4"/>'),
  moon: lineIcon('<path d="M20.2 15.2A8.2 8.2 0 0 1 8.8 3.8a8.8 8.8 0 1 0 11.4 11.4Z"/>'),
  compose: lineIcon('<path d="M12 5H6.8A2.8 2.8 0 0 0 4 7.8v9.4A2.8 2.8 0 0 0 6.8 20h9.4a2.8 2.8 0 0 0 2.8-2.8V12"/><path d="M15.4 4.9 19.1 8.6 11 16.7H7.3V13z"/>'),
  send: lineIcon('<path d="m21 3.5-7.3 17-3.2-7-7-3.2z"/><path d="m10.5 13.5 4.1-4.1"/>'),
  plus: lineIcon('<path d="M12 5v14"/><path d="M5 12h14"/>'),
  mic: lineIcon('<rect x="9" y="3.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0"/><path d="M12 17.5V21"/><path d="M9 21h6"/>'),
  waveform: lineIcon('<path d="M5 10v4"/><path d="M9 6.5v11"/><path d="M13 9v6"/><path d="M17 5v14"/><path d="M21 10v4"/>'),
  search: lineIcon('<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>'),
  check: lineIcon('<path d="m5 12 4.2 4.2L19 6.5"/>'),
  download: lineIcon('<path d="M12 4v10.5"/><path d="m7.5 10 4.5 4.5 4.5-4.5"/><path d="M5 20h14"/>'),
  expand: lineIcon('<path d="M8.5 4H4v4.5"/><path d="M15.5 4H20v4.5"/><path d="M8.5 20H4v-4.5"/><path d="M15.5 20H20v-4.5"/><path d="m4 4 5.5 5.5"/><path d="M20 4 14.5 9.5"/><path d="m4 20 5.5-5.5"/><path d="m20 20-5.5-5.5"/>'),
  collapse: lineIcon('<path d="M10 4v6H4"/><path d="M14 4v6h6"/><path d="M10 20v-6H4"/><path d="M14 20v-6h6"/>'),
  close: lineIcon('<path d="m6 6 12 12"/><path d="M18 6 6 18"/>')
};

function defaultFilters() {
  return {
    tenantSearch: "",
    tenantProperty: "All",
    tenantRent: "All",
    chequeStatus: "All",
    documentSearch: "",
    documentType: "All",
    documentStatus: "All",
    actionSearch: "",
    actionStatus: "All",
    actionType: "All",
    actionSort: "Newest",
    portfolioView: "summary",
    portfolioMapFilter: "All",
    portfolioCity: "All",
    portfolioSelectedPropertyId: "",
    portfolioMapZoom: "1"
  };
}

const DATA_STORE_KEY = "estateflow-demo-data-v1";
const DATA_STORE_VERSION = 1;
const ASK_AI_MESSAGE_LIMIT = 24;
const ASK_AI_SESSION_LIMIT = 12;
const ASK_AI_TYPING_DELAY = 720;
const ASK_AI_NUDGE_CONFIG = {
  initialDelayMs: 12000,
  minIntervalMs: 35000,
  maxIntervalMs: 55000,
  visibleDurationMs: 6000,
  dismissCooldownMs: 30000,
  busyRetryMs: 8000
};
const ASK_AI_NUDGE_PROMPTS = [
  "I can handle this faster.",
  "Want me to do it?",
  "You could save 5 minutes here.",
  "Need help with this page?",
  "Let me summarize this.",
  "I can find that for you.",
  "Want a shortcut?",
  "I can help with the next step."
];
const ASK_AI_GENERAL_NUDGE_MESSAGES = [
  { id: "general_shortcut", text: "Want a shortcut?", intent: "general_help", suggestedPrompt: "Help me with this page." },
  { id: "general_save_time", text: "I can save you a few clicks.", intent: "general_help", suggestedPrompt: "What can you help me with here?" },
  { id: "general_next_step", text: "Need the next step?", intent: "general_help", suggestedPrompt: "What should I do next?" },
  { id: "general_find_faster", text: "Let me find that faster.", intent: "general_help", suggestedPrompt: "Help me find what I need." }
];
const ASK_AI_NUDGE_MESSAGES = {
  tenant: {
    general: [
      { id: "tenant_general_guide", text: "Want me to guide you?", intent: "tenant_help", suggestedPrompt: "Guide me through this page." },
      { id: "tenant_general_receipt", text: "Need your latest receipt?", intent: "tenant_receipt_help", suggestedPrompt: "Help me find my latest receipt." }
    ],
    dashboard: [
      { id: "tenant_dashboard_rent_overdue", priority: "urgent", condition: (ctx) => ctx.rent?.urgency === "overdue", text: "Your rent is overdue. Need help?", intent: "tenant_pay_rent", suggestedPrompt: "Help me pay my overdue rent.", actionTarget: "rent" },
      { id: "tenant_dashboard_rent_due", priority: "urgent", condition: (ctx) => ctx.rent?.urgency === "dueSoon", text: "Rent is due soon. Need help?", intent: "tenant_pay_rent", suggestedPrompt: "Explain my rent payment options.", actionTarget: "rent" },
      { id: "tenant_dashboard_renewal", condition: (ctx) => ctx.contract?.renewalSoon, text: "Renewal coming up. Want help?", intent: "tenant_contract_renewal", suggestedPrompt: "Help me review my renewal.", actionTarget: "renewal" },
      { id: "tenant_dashboard_actions", condition: (ctx) => ctx.actions?.count > 0, text: "Pending actions waiting. Sort them?", intent: "tenant_action_summary", suggestedPrompt: "Summarize my pending actions.", actionTarget: "actionCenter" },
      { id: "tenant_dashboard_general", text: "Want help with this dashboard?", intent: "tenant_dashboard_help", suggestedPrompt: "What should I check first?" }
    ],
    rent: [
      { id: "tenant_rent_overdue", priority: "urgent", condition: (ctx) => ctx.rent?.urgency === "overdue", text: "Your rent is overdue. Need help?", intent: "tenant_pay_rent", suggestedPrompt: "Help me pay my overdue rent.", actionTarget: "rent" },
      { id: "tenant_rent_help", text: "Want help with rent payment?", intent: "tenant_rent_help", suggestedPrompt: "Explain my rent payment options.", actionTarget: "rent" }
    ],
    maintenance: [
      { id: "tenant_maintenance_pending", condition: (ctx) => ctx.maintenance?.openCount > 0, text: "Maintenance is open. Need an update?", intent: "tenant_maintenance_update", suggestedPrompt: "Summarize my maintenance request.", actionTarget: "maintenance" },
      { id: "tenant_maintenance_report", text: "Want help reporting an issue?", intent: "tenant_report_maintenance", suggestedPrompt: "Help me submit a maintenance request.", actionTarget: "maintenance" }
    ],
    complaints: [
      { id: "tenant_complaint_help", text: "Want help writing this clearly?", intent: "tenant_file_complaint", suggestedPrompt: "Help me write a complaint.", actionTarget: "maintenance" }
    ],
    contracts: [
      { id: "tenant_contract_renewal", condition: (ctx) => ctx.contract?.renewalSoon || ctx.contract?.hasRequest, text: "Want help with your contract?", intent: "tenant_contract_help", suggestedPrompt: "Help me review my contract request.", actionTarget: "renewal" }
    ],
    documents: [
      { id: "tenant_documents_receipt", text: "Need a document or receipt?", intent: "tenant_document_help", suggestedPrompt: "Help me find a tenant document.", actionTarget: "documents" }
    ],
    "action-center": [
      { id: "tenant_actions_sort", condition: (ctx) => ctx.actions?.count > 0, text: "Pending actions waiting. Sort them?", intent: "tenant_action_summary", suggestedPrompt: "Summarize my pending actions.", actionTarget: "actionCenter" },
      { id: "tenant_actions_clear", text: "You are caught up. Need anything?", intent: "tenant_action_help", suggestedPrompt: "What can you help me with?" }
    ]
  },
  manager: {
    general: [
      { id: "manager_general_ops", text: "Want a quick ops summary?", intent: "management_ops_summary", suggestedPrompt: "Summarize the management dashboard." },
      { id: "manager_general_prioritize", text: "Want urgent follow-ups first?", intent: "management_prioritize", suggestedPrompt: "Show urgent follow-ups first." }
    ],
    dashboard: [
      { id: "manager_dashboard_queue", priority: "urgent", condition: (ctx) => ctx.queue?.totalActions > 0, text: "{count} actions waiting. Summarize?", count: (ctx) => ctx.queue.totalActions, intent: "management_action_summary", suggestedPrompt: "Summarize today's action queue.", actionTarget: "actionCenter" },
      { id: "manager_dashboard_ops", text: "Want a quick ops summary?", intent: "management_ops_summary", suggestedPrompt: "Summarize the management dashboard." }
    ],
    "tenant-management": [
      { id: "manager_tenants_followup", text: "Want tenant follow-ups first?", intent: "management_tenant_followups", suggestedPrompt: "Show tenant follow-ups.", actionTarget: "tenants" }
    ],
    rent: [
      { id: "manager_rent_followups", priority: "urgent", condition: (ctx) => ctx.rent?.pendingFollowUps > 0, text: "{count} rent follow-ups waiting.", count: (ctx) => ctx.rent.pendingFollowUps, intent: "management_rent_followups", suggestedPrompt: "Summarize rent follow-ups.", actionTarget: "rentTracking" },
      { id: "manager_rent_review", text: "Want overdue rent first?", intent: "management_rent_review", suggestedPrompt: "Show overdue rent first.", actionTarget: "rentTracking" }
    ],
    "payment-review": [
      { id: "manager_payment_review", priority: "urgent", condition: (ctx) => ctx.payments?.pendingCount > 0, text: "{count} payments need review.", count: (ctx) => ctx.payments.pendingCount, intent: "management_payment_review", suggestedPrompt: "Summarize payment reviews.", actionTarget: "chequeReview" }
    ],
    maintenance: [
      { id: "manager_maintenance_open", priority: "urgent", condition: (ctx) => ctx.maintenance?.openCount > 0, text: "{count} maintenance requests open.", count: (ctx) => ctx.maintenance.openCount, intent: "management_maintenance_summary", suggestedPrompt: "Summarize open maintenance requests.", actionTarget: "maintenanceMgmt" },
      { id: "manager_maintenance_review", text: "Want urgent requests first?", intent: "management_maintenance_review", suggestedPrompt: "Show urgent maintenance requests.", actionTarget: "maintenanceMgmt" }
    ],
    contracts: [
      { id: "manager_renewals_pending", priority: "urgent", condition: (ctx) => ctx.renewals?.pendingCount > 0, text: "{count} renewals need decision.", count: (ctx) => ctx.renewals.pendingCount, intent: "management_renewal_review", suggestedPrompt: "Summarize pending renewals.", actionTarget: "renewalsMgmt" }
    ],
    documents: [
      { id: "manager_documents_review", condition: (ctx) => ctx.documents?.pendingReviews > 0, text: "{count} documents need review.", count: (ctx) => ctx.documents.pendingReviews, intent: "management_document_review", suggestedPrompt: "Summarize document reviews.", actionTarget: "docsMgmt" }
    ],
    finance: [
      { id: "manager_finance_summary", text: "Want finance summarized?", intent: "management_finance_summary", suggestedPrompt: "Summarize the financial overview.", actionTarget: "financial" }
    ],
    portfolio: [
      { id: "manager_portfolio_summary", text: "Want portfolio highlights?", intent: "management_portfolio_summary", suggestedPrompt: "Summarize portfolio health.", actionTarget: "portfolio" }
    ],
    "action-center": [
      { id: "manager_action_queue", condition: (ctx) => ctx.queue?.totalActions > 0, text: "{count} actions in queue. Sort them?", count: (ctx) => ctx.queue.totalActions, intent: "management_action_summary", suggestedPrompt: "Summarize today's action queue.", actionTarget: "actionCenter" },
      { id: "manager_action_clear", text: "Queue is clear. Need anything?", intent: "management_action_help", suggestedPrompt: "What can you help me with?" }
    ]
  }
};

function defaultAskAINudgeState() {
  return {
    isVisible: false,
    id: "",
    message: "",
    intent: "",
    suggestedPrompt: "",
    actionTarget: "",
    context: null,
    recentlyShownIds: [],
    lastShownAt: null,
    startedAt: null,
    durationMs: ASK_AI_NUDGE_CONFIG.visibleDurationMs,
    dismissedAt: 0,
    phase: "idle",
    hasScheduled: false
  };
}

const ACTIVITY_FEED_PREVIEW_LIMIT = 6;
const ACTIVITY_STORE_LIMIT = 40;
const CONTRACT_REQUEST_PREVIEW_LIMIT = 3;
const PORTFOLIO_MAP_CENTER = [24.65, 54.78];
const PORTFOLIO_MAP_DEFAULT_ZOOM = 7;
const PORTFOLIO_MAP_TILE_URL = "https://tile.openstreetmap.org/{z}/{x}/{y}.png";
const PORTFOLIO_MAP_ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
const PORTFOLIO_MAP_COLORS = {
  success: "#34c759",
  warning: "#ff9500",
  danger: "#ff3b30",
  info: "#007aff",
  neutral: "#6e6e73"
};

const state = {
  auth: false,
  selectedRole: "tenant",
  role: null,
  page: "dashboard",
  modal: null,
  theme: storedTheme(),
  filters: defaultFilters(),
  confirmations: {},
  notificationPanelOpen: false,
  notificationClearedIds: [],
  askAI: {
    isOpen: false,
    messages: [],
    inputValue: "",
    isTyping: false,
    error: null,
    isExpanded: false,
    activationState: "idle",
    sessions: [],
    activeSessionId: "",
    search: "",
    contextPrompt: "",
    nudgeContext: null,
    nudge: defaultAskAINudgeState()
  },
  sequence: 0,
  data: {}
};

let lastFocusedElement = null;
let portfolioLeafletMap = null;
let portfolioLeafletMarkerLayer = null;
let askAIScrollLockY = 0;
let askAINudgeTimer = 0;
let askAINudgeAutoTimer = 0;
let askAINudgeRevealTimer = 0;
let askAINudgePromptCursor = 0;
let askAINudgeLastActivityAt = 0;
let askAINotchPointer = { x: -1, y: -1 };

const seedData = {
  tenant: {
    profile: {
      name: "Ahmed Khan",
      initials: "AK",
      photo: "assets/tenant-ahmed.svg",
      email: "ahmed.khan@example.com",
      unit: "1204",
      property: "Marina Heights Residence",
      contractStatus: "Active",
      contractStart: "01 Jan 2026",
      contractEnd: "31 Dec 2026",
      rent: "AED 8,500",
      renewalStatus: "Pending"
    },
    rentHistory: [
      { month: "June 2026", amount: "AED 8,500", dueDate: "05 Jun 2026", status: "Pending", receipt: "Awaiting payment" },
      { month: "May 2026", amount: "AED 8,500", dueDate: "05 May 2026", status: "Paid", receipt: "REC-0526" },
      { month: "April 2026", amount: "AED 8,500", dueDate: "05 Apr 2026", status: "Paid", receipt: "REC-0426" },
      { month: "March 2026", amount: "AED 8,500", dueDate: "05 Mar 2026", status: "Paid", receipt: "REC-0326" }
    ],
    receipts: [
      { id: "rec-0526", month: "May 2026", amount: "AED 8,500", receipt: "REC-0526", date: "05 May 2026", status: "Available" },
      { id: "rec-0426", month: "April 2026", amount: "AED 8,500", receipt: "REC-0426", date: "05 Apr 2026", status: "Available" }
    ],
    cashRequests: [],
    paymentSubmissions: [
      { type: "Cheque", amount: "AED 8,500", dueDate: "05 Jun 2026", status: "In Review", submittedOn: "10 Jun 2026", chequeNumber: "CHQ-782114", bank: "Emirates NBD" },
      { type: "Bank Transfer", amount: "AED 8,500", dueDate: "05 May 2026", status: "Approved", submittedOn: "03 May 2026", chequeNumber: "-", bank: "ADCB" }
    ],
    maintenanceRequests: [
      { id: "tm1", issue: "AC cooling issue", category: "AC", priority: "High", date: "09 Jun 2026", status: "In Progress", description: "Living room AC is not cooling properly during the afternoon.", photo: "AC vent photo attached" },
      { id: "tm2", issue: "Kitchen sink leak", category: "Plumbing", priority: "Medium", date: "18 May 2026", status: "Completed", description: "Small leak under the kitchen sink cabinet.", photo: "Sink photo attached" }
    ],
    contractRequests: [],
    complaints: [],
    suggestions: [],
    documents: [
      { name: "Tenancy Contract", status: "Uploaded", lastUpdated: "01 Jan 2026" },
      { name: "Emirates ID", status: "Approved", lastUpdated: "02 Jan 2026" },
      { name: "Cheque Copy", status: "In Review", lastUpdated: "10 Jun 2026" },
      { name: "Payment Receipts", status: "Uploaded", lastUpdated: "05 May 2026" }
    ],
    activities: [
      { title: "Payment proof submitted", detail: "Waiting for company review.", time: "10 Jun 2026" },
      { title: "Maintenance updated", detail: "AC request is in progress", time: "Yesterday" },
      { title: "Renewal reminder", detail: "Contract ends 31 Dec 2026", time: "2 days ago" },
      { title: "Document received", detail: "Cheque copy is available.", time: "10 Jun 2026" }
    ]
  },
  manager: {
    profile: {
      name: "Noura Property Co.",
      initials: "NP",
      email: "operations@nouraproperty.ae"
    },
    tenants: [
      { id: "t1", name: "Ahmed Khan", unit: "1204", property: "Marina Heights Residence", contractStatus: "Active", rentStatus: "Pending", documentStatus: "In Review", phone: "+971 50 241 9001", email: "ahmed.khan@example.com", rent: "AED 8,500", contract: "01 Jan 2026 - 31 Dec 2026", cheque: "CHQ-782114 / Emirates NBD" },
      { id: "t2", name: "Sara Malik", unit: "805", property: "Palm View Tower", contractStatus: "Active", rentStatus: "Paid", documentStatus: "Approved", phone: "+971 52 112 4408", email: "sara.malik@example.com", rent: "AED 7,200", contract: "15 Feb 2026 - 14 Feb 2027", cheque: "CHQ-449122 / ADCB" },
      { id: "t3", name: "Omar Hassan", unit: "403", property: "Creekside Court", contractStatus: "Expiring Soon", rentStatus: "Late", documentStatus: "Uploaded", phone: "+971 55 901 3370", email: "omar.hassan@example.com", rent: "AED 6,900", contract: "01 Jul 2025 - 30 Jun 2026", cheque: "CHQ-199024 / FAB" },
      { id: "t4", name: "Lina Farah", unit: "1502", property: "Marina Heights Residence", contractStatus: "Active", rentStatus: "Paid", documentStatus: "Approved", phone: "+971 54 782 6631", email: "lina.farah@example.com", rent: "AED 9,300", contract: "01 Mar 2026 - 28 Feb 2027", cheque: "CHQ-621004 / Emirates Islamic" },
      { id: "t5", name: "Bilal Qureshi", unit: "210", property: "Jumeirah Garden Homes", contractStatus: "Active", rentStatus: "Pending", documentStatus: "Approved", phone: "+971 56 118 0022", email: "bilal.qureshi@example.com", rent: "AED 5,800", contract: "01 Apr 2026 - 31 Mar 2027", cheque: "CHQ-882100 / Mashreq" }
    ],
    rentRows: [
      { id: "r1", tenant: "Ahmed Khan", unit: "1204", property: "Marina Heights Residence", amount: "AED 8,500", dueDate: "05 Jun 2026", status: "Pending" },
      { id: "r2", tenant: "Sara Malik", unit: "805", property: "Palm View Tower", amount: "AED 7,200", dueDate: "05 Jun 2026", status: "Paid" },
      { id: "r3", tenant: "Omar Hassan", unit: "403", property: "Creekside Court", amount: "AED 6,900", dueDate: "01 Jun 2026", status: "Late" },
      { id: "r4", tenant: "Lina Farah", unit: "1502", property: "Marina Heights Residence", amount: "AED 9,300", dueDate: "10 Jun 2026", status: "Paid" },
      { id: "r5", tenant: "Bilal Qureshi", unit: "210", property: "Jumeirah Garden Homes", amount: "AED 5,800", dueDate: "12 Jun 2026", status: "Pending" }
    ],
    chequeReviews: [
      { id: "c1", tenant: "Ahmed Khan", unit: "1204", chequeNumber: "CHQ-782114", bank: "Emirates NBD", amount: "AED 8,500", dueDate: "05 Jun 2026", status: "Pending", notes: "Tenant uploaded cheque copy and receipt reference." },
      { id: "c2", tenant: "Sara Malik", unit: "805", chequeNumber: "CHQ-449122", bank: "ADCB", amount: "AED 7,200", dueDate: "05 Jun 2026", status: "Approved", notes: "Matched against lease schedule." },
      { id: "c3", tenant: "Omar Hassan", unit: "403", chequeNumber: "CHQ-199024", bank: "FAB", amount: "AED 6,900", dueDate: "01 Jun 2026", status: "Rejected", notes: "Cheque number mismatch. Tenant asked to resubmit." },
      { id: "c4", tenant: "Bilal Qureshi", unit: "210", chequeNumber: "CHQ-882100", bank: "Mashreq", amount: "AED 5,800", dueDate: "12 Jun 2026", status: "Pending", notes: "Awaiting finance review." }
    ],
    maintenanceRequests: [
      { id: "m1", tenant: "Ahmed Khan", unit: "1204", issue: "AC", description: "Living room AC is not cooling properly.", priority: "High", date: "09 Jun 2026", status: "In Progress" },
      { id: "m2", tenant: "Sara Malik", unit: "805", issue: "Electrical", description: "Kitchen outlet trips intermittently.", priority: "Medium", date: "11 Jun 2026", status: "New" },
      { id: "m3", tenant: "Omar Hassan", unit: "403", issue: "Plumbing", description: "Bathroom drain is slow.", priority: "Low", date: "07 Jun 2026", status: "Scheduled" },
      { id: "m4", tenant: "Lina Farah", unit: "1502", issue: "Cleaning", description: "Balcony deep cleaning requested.", priority: "Low", date: "20 May 2026", status: "Completed" }
    ],
    renewals: [
      { id: "n1", tenant: "Omar Hassan", unit: "403", property: "Creekside Court", endDate: "30 Jun 2026", currentRent: "AED 6,900", status: "Pending", startDate: "01 Jul 2025" },
      { id: "n2", tenant: "Ahmed Khan", unit: "1204", property: "Marina Heights Residence", endDate: "31 Dec 2026", currentRent: "AED 8,500", status: "Pending", startDate: "01 Jan 2026" },
      { id: "n3", tenant: "Sara Malik", unit: "805", property: "Palm View Tower", endDate: "14 Feb 2027", currentRent: "AED 7,200", status: "Approved", startDate: "15 Feb 2026" },
      { id: "n4", tenant: "Karim Abbas", unit: "612", property: "Palm View Tower", endDate: "30 Apr 2026", currentRent: "AED 7,000", status: "Rejected", startDate: "01 May 2025" }
    ],
    documents: [
      { id: "d1", tenant: "Ahmed Khan", unit: "1204", type: "Cheque Copy", status: "In Review", lastUpdated: "10 Jun 2026" },
      { id: "d2", tenant: "Sara Malik", unit: "805", type: "Tenancy Contract", status: "Approved", lastUpdated: "15 Feb 2026" },
      { id: "d3", tenant: "Omar Hassan", unit: "403", type: "Emirates ID", status: "Uploaded", lastUpdated: "01 Jun 2026" },
      { id: "d4", tenant: "Lina Farah", unit: "1502", type: "Payment Receipt", status: "Approved", lastUpdated: "10 Jun 2026" },
      { id: "d5", tenant: "Bilal Qureshi", unit: "210", type: "Tenancy Contract", status: "Approved", lastUpdated: "01 Apr 2026" }
    ],
    notifications: [
      { tenant: "Omar Hassan", type: "Late payment reminder", message: "Submit rent proof.", date: "11 Jun 2026", status: "Sent" },
      { tenant: "Ahmed Khan", type: "Maintenance update", message: "AC request assigned.", date: "10 Jun 2026", status: "Sent" }
    ],
    cashRequests: [],
    contractRequests: [],
    complaints: [],
    suggestions: [],
    properties: [
      {
        id: "p1",
        propertyName: "Marina Heights Residence",
        propertyType: "Apartment",
        city: "Dubai",
        area: "Dubai Marina",
        address: "Marina Walk, Dubai Marina",
        unitCount: 84,
        occupiedUnits: 81,
        vacantUnits: 3,
        occupancyStatus: "occupied",
        assetValue: 94000000,
        monthlyRentPotential: 735000,
        currentMonthlyRent: 714000,
        latitude: 25.0800,
        longitude: 55.1400,
        notes: "Premium waterfront residential tower.",
        maintenance: "2 open requests",
        createdAt: "2026-01-01T09:00:00+04:00",
        updatedAt: "2026-06-01T09:00:00+04:00"
      },
      {
        id: "p2",
        propertyName: "Downtown Executive Tower",
        propertyType: "Mixed Use",
        city: "Dubai",
        area: "Downtown Dubai",
        address: "Sheikh Mohammed bin Rashid Boulevard, Downtown Dubai",
        unitCount: 58,
        occupiedUnits: 55,
        vacantUnits: 3,
        occupancyStatus: "occupied",
        assetValue: 72000000,
        monthlyRentPotential: 520000,
        currentMonthlyRent: 498000,
        latitude: 25.1972,
        longitude: 55.2744,
        notes: "Executive tower near business and retail amenities.",
        maintenance: "1 scheduled",
        createdAt: "2026-01-01T09:00:00+04:00",
        updatedAt: "2026-06-01T09:00:00+04:00"
      },
      {
        id: "p3",
        propertyName: "Saadiyat Garden Villas",
        propertyType: "Villa",
        city: "Abu Dhabi",
        area: "Saadiyat Island",
        address: "Saadiyat Island, Abu Dhabi",
        unitCount: 42,
        occupiedUnits: 34,
        vacantUnits: 8,
        occupancyStatus: "mixed",
        assetValue: 56000000,
        monthlyRentPotential: 320000,
        currentMonthlyRent: 289800,
        latitude: 24.5420,
        longitude: 54.4350,
        notes: "Villa community with near-term leasing availability.",
        maintenance: "3 open requests",
        createdAt: "2026-01-01T09:00:00+04:00",
        updatedAt: "2026-06-01T09:00:00+04:00"
      },
      {
        id: "p4",
        propertyName: "Al Majaz Waterfront Apartments",
        propertyType: "Apartment",
        city: "Sharjah",
        area: "Al Majaz",
        address: "Al Majaz Waterfront, Sharjah",
        unitCount: 36,
        occupiedUnits: 18,
        vacantUnits: 18,
        occupancyStatus: "vacant",
        assetValue: 26000000,
        monthlyRentPotential: 225000,
        currentMonthlyRent: 112500,
        latitude: 25.3270,
        longitude: 55.3920,
        notes: "Leasing focus for the next operating cycle.",
        maintenance: "Ready for leasing",
        createdAt: "2026-01-01T09:00:00+04:00",
        updatedAt: "2026-06-01T09:00:00+04:00"
      }
    ],
    financial: {
      income: "AED 1.71M",
      pending: "AED 147K",
      expenses: "AED 312K",
      operational: "AED 118K",
      net: "AED 1.28M"
    }
  }
};

const SUPPLEMENTAL_TENANT_RECORDS = [
  {
    id: "t6",
    fullName: "Priya Menon",
    email: "priya.menon@example.com",
    phone: "+971 50 774 1190",
    nationality: "Indian",
    idNumber: "784-1988-1122334-5",
    propertyName: "Creekside Court",
    unitNumber: "1102",
    propertyAddress: "Dubai Creek Harbour",
    parkingBay: "B2-18",
    occupancyStatus: "Occupied",
    contractStartDate: "2026-02-01",
    contractEndDate: "2027-01-31",
    monthlyRent: 7400,
    securityDeposit: 7400,
    contractStatus: "Active",
    renewalStatus: "Not Requested",
    rentPaymentStatus: "paid",
    nextDueDate: "2026-07-05",
    lastPaymentDate: "2026-06-04",
    paymentMethod: "Bank Transfer",
    pendingBalance: 0,
    emergencyContactName: "Ravi Menon",
    emergencyContactPhone: "+971 55 410 9920",
    emergencyContactRelationship: "Spouse",
    notes: "Prefers email updates.",
    documentStatus: "Approved",
    createdAt: "2026-02-01T08:30:00+04:00",
    updatedAt: "2026-06-04T11:15:00+04:00"
  },
  {
    id: "t7",
    fullName: "Daniel Roberts",
    email: "daniel.roberts@example.com",
    phone: "+971 52 600 1442",
    nationality: "British",
    idNumber: "P-54882219",
    propertyName: "Palm View Tower",
    unitNumber: "1706",
    propertyAddress: "Palm Jumeirah",
    parkingBay: "P1-44",
    occupancyStatus: "Occupied",
    contractStartDate: "2025-08-15",
    contractEndDate: "2026-08-14",
    monthlyRent: 10200,
    securityDeposit: 10200,
    contractStatus: "Active",
    renewalStatus: "Not Requested",
    rentPaymentStatus: "due_soon",
    nextDueDate: "2026-06-20",
    lastPaymentDate: "2026-05-20",
    paymentMethod: "Cheque",
    pendingBalance: 10200,
    emergencyContactName: "Maya Roberts",
    emergencyContactPhone: "+971 50 820 1133",
    emergencyContactRelationship: "Sister",
    notes: "Cheque collection scheduled with concierge.",
    documentStatus: "Uploaded",
    createdAt: "2025-08-15T09:00:00+04:00",
    updatedAt: "2026-06-10T09:20:00+04:00"
  },
  {
    id: "t8",
    fullName: "Fatima Noor",
    email: "fatima.noor@example.com",
    phone: "+971 56 332 7610",
    nationality: "Emirati",
    idNumber: "784-1992-7766554-1",
    propertyName: "Jumeirah Garden Homes",
    unitNumber: "118",
    propertyAddress: "Jumeirah Village Circle",
    parkingBay: "G-08",
    occupancyStatus: "Occupied",
    contractStartDate: "2025-12-01",
    contractEndDate: "2026-11-30",
    monthlyRent: 6100,
    securityDeposit: 6100,
    contractStatus: "Active",
    renewalStatus: "Pending",
    rentPaymentStatus: "pending",
    nextDueDate: "2026-06-12",
    lastPaymentDate: "2026-05-12",
    paymentMethod: "Bank Transfer",
    pendingBalance: 6100,
    emergencyContactName: "Hessa Noor",
    emergencyContactPhone: "+971 50 221 4567",
    emergencyContactRelationship: "Mother",
    notes: "Renewal discussion requested for November.",
    documentStatus: "In Review",
    createdAt: "2025-12-01T10:00:00+04:00",
    updatedAt: "2026-06-12T14:00:00+04:00"
  },
  {
    id: "t9",
    fullName: "Khalid Mansour",
    email: "khalid.mansour@example.com",
    phone: "+971 55 710 4455",
    nationality: "Jordanian",
    idNumber: "P-32994588",
    propertyName: "Marina Heights Residence",
    unitNumber: "2201",
    propertyAddress: "Dubai Marina",
    parkingBay: "M3-21",
    occupancyStatus: "Occupied",
    contractStartDate: "2026-05-01",
    contractEndDate: "2027-04-30",
    monthlyRent: 11800,
    securityDeposit: 11800,
    contractStatus: "Active",
    renewalStatus: "Not Requested",
    rentPaymentStatus: "paid",
    nextDueDate: "2026-07-01",
    lastPaymentDate: "2026-06-01",
    paymentMethod: "Cheque",
    pendingBalance: 0,
    emergencyContactName: "Amina Mansour",
    emergencyContactPhone: "+971 50 770 1414",
    emergencyContactRelationship: "Spouse",
    notes: "Premium unit tenant.",
    documentStatus: "Approved",
    createdAt: "2026-05-01T08:45:00+04:00",
    updatedAt: "2026-06-01T13:10:00+04:00"
  },
  {
    id: "t10",
    fullName: "Mariam Ali",
    email: "mariam.ali@example.com",
    phone: "+971 52 980 3344",
    nationality: "Lebanese",
    idNumber: "784-1995-2244668-0",
    propertyName: "Creekside Court",
    unitNumber: "706",
    propertyAddress: "Dubai Creek Harbour",
    parkingBay: "B1-12",
    occupancyStatus: "Occupied",
    contractStartDate: "2025-07-01",
    contractEndDate: "2026-06-30",
    monthlyRent: 6900,
    securityDeposit: 6900,
    contractStatus: "Expiring Soon",
    renewalStatus: "Pending",
    rentPaymentStatus: "overdue",
    nextDueDate: "2026-06-01",
    lastPaymentDate: "2026-05-01",
    paymentMethod: "Cheque",
    pendingBalance: 6900,
    emergencyContactName: "Zaid Ali",
    emergencyContactPhone: "+971 55 668 2190",
    emergencyContactRelationship: "Brother",
    notes: "Pending renewal and rent follow-up.",
    documentStatus: "Uploaded",
    createdAt: "2025-07-01T09:30:00+04:00",
    updatedAt: "2026-06-14T09:10:00+04:00"
  },
  {
    id: "t11",
    fullName: "James Carter",
    email: "james.carter@example.com",
    phone: "+971 50 447 8002",
    nationality: "American",
    idNumber: "P-88441102",
    propertyName: "Palm View Tower",
    unitNumber: "302",
    propertyAddress: "Palm Jumeirah",
    parkingBay: "P2-07",
    occupancyStatus: "Occupied",
    contractStartDate: "2026-03-10",
    contractEndDate: "2027-03-09",
    monthlyRent: 7800,
    securityDeposit: 7800,
    contractStatus: "Active",
    renewalStatus: "Not Requested",
    rentPaymentStatus: "paid",
    nextDueDate: "2026-07-10",
    lastPaymentDate: "2026-06-10",
    paymentMethod: "Card",
    pendingBalance: 0,
    emergencyContactName: "Laura Carter",
    emergencyContactPhone: "+971 52 301 6671",
    emergencyContactRelationship: "Spouse",
    notes: "",
    documentStatus: "Approved",
    createdAt: "2026-03-10T10:20:00+04:00",
    updatedAt: "2026-06-10T10:15:00+04:00"
  },
  {
    id: "t12",
    fullName: "Noor Haddad",
    email: "noor.haddad@example.com",
    phone: "+971 54 112 9008",
    nationality: "Syrian",
    idNumber: "P-66190027",
    propertyName: "Jumeirah Garden Homes",
    unitNumber: "224",
    propertyAddress: "Jumeirah Village Circle",
    parkingBay: "G-18",
    occupancyStatus: "Occupied",
    contractStartDate: "2026-01-20",
    contractEndDate: "2027-01-19",
    monthlyRent: 5900,
    securityDeposit: 5900,
    contractStatus: "Active",
    renewalStatus: "Not Requested",
    rentPaymentStatus: "pending",
    nextDueDate: "2026-06-18",
    lastPaymentDate: "2026-05-18",
    paymentMethod: "Bank Transfer",
    pendingBalance: 5900,
    emergencyContactName: "Rana Haddad",
    emergencyContactPhone: "+971 55 991 1020",
    emergencyContactRelationship: "Sister",
    notes: "Awaiting June transfer confirmation.",
    documentStatus: "In Review",
    createdAt: "2026-01-20T12:00:00+04:00",
    updatedAt: "2026-06-13T16:30:00+04:00"
  }
];

const PROPERTY_LOCATION_PRESETS = [
  { label: "Dubai Marina", city: "Dubai", area: "Dubai Marina", address: "Dubai Marina, Dubai", latitude: 25.0800, longitude: 55.1400 },
  { label: "Downtown Dubai", city: "Dubai", area: "Downtown Dubai", address: "Downtown Dubai, Dubai", latitude: 25.1972, longitude: 55.2744 },
  { label: "Business Bay", city: "Dubai", area: "Business Bay", address: "Business Bay, Dubai", latitude: 25.1853, longitude: 55.2728 },
  { label: "Jumeirah Village Circle", city: "Dubai", area: "Jumeirah Village Circle", address: "Jumeirah Village Circle, Dubai", latitude: 25.0600, longitude: 55.2040 },
  { label: "Abu Dhabi Corniche", city: "Abu Dhabi", area: "Corniche", address: "Corniche Road, Abu Dhabi", latitude: 24.4764, longitude: 54.3705 },
  { label: "Saadiyat Island", city: "Abu Dhabi", area: "Saadiyat Island", address: "Saadiyat Island, Abu Dhabi", latitude: 24.5420, longitude: 54.4350 },
  { label: "Sharjah Al Majaz", city: "Sharjah", area: "Al Majaz", address: "Al Majaz Waterfront, Sharjah", latitude: 25.3270, longitude: 55.3920 }
];

const LEGACY_PROPERTY_PRESETS = {
  "Marina Heights Residence": PROPERTY_LOCATION_PRESETS[0],
  "Palm View Tower": { label: "Palm Jumeirah", city: "Dubai", area: "Palm Jumeirah", address: "Palm Jumeirah, Dubai", latitude: 25.1124, longitude: 55.1390 },
  "Creekside Court": { label: "Dubai Creek Harbour", city: "Dubai", area: "Dubai Creek Harbour", address: "Dubai Creek Harbour, Dubai", latitude: 25.1970, longitude: 55.3490 },
  "Jumeirah Garden Homes": PROPERTY_LOCATION_PRESETS[3],
  "Downtown Executive Tower": PROPERTY_LOCATION_PRESETS[1],
  "Saadiyat Garden Villas": PROPERTY_LOCATION_PRESETS[5],
  "Al Majaz Waterfront Apartments": PROPERTY_LOCATION_PRESETS[6]
};

const UAE_MAP_BOUNDS = {
  minLat: 22.4,
  maxLat: 26.5,
  minLng: 51.4,
  maxLng: 56.7
};

const nav = {
  tenant: [
    { id: "dashboard", label: "Dashboard", icon: "home", group: "Overview" },
    { id: "actionCenter", label: "Action Center", icon: "bell", group: "Overview" },
    { id: "rent", label: "Rent", icon: "wallet", group: "Money" },
    { id: "maintenance", label: "Maintenance", icon: "tool", group: "Requests" },
    { id: "renewal", label: "Renewal", icon: "refresh", group: "Requests" },
    { id: "documents", label: "Documents", icon: "file", group: "Records" }
  ],
  manager: [
    { id: "dashboard", label: "Dashboard", icon: "home", group: "Overview" },
    { id: "actionCenter", label: "Action Center", icon: "bell", group: "Overview" },
    { id: "tenants", label: "Tenant Management", icon: "users", group: "Operations" },
    { id: "rentTracking", label: "Rent Tracking", icon: "wallet", group: "Operations" },
    { id: "chequeReview", label: "Payment Review", icon: "file", group: "Operations" },
    { id: "maintenanceMgmt", label: "Maintenance", icon: "tool", group: "Operations" },
    { id: "renewalsMgmt", label: "Renewals", icon: "refresh", group: "Operations" },
    { id: "docsMgmt", label: "Documents", icon: "file", group: "Administration" },
    { id: "notifications", label: "Notifications", icon: "send", group: "Administration" },
    { id: "financial", label: "Finance", icon: "chart", group: "Portfolio" },
    { id: "portfolio", label: "Portfolio", icon: "building", group: "Portfolio" }
  ]
};

const utilityPages = ["uiKit"];

const pageMeta = {
  tenant: {
    dashboard: ["Tenant Dashboard", "Account overview and next actions."],
    actionCenter: ["Action Center", "Review updates and complete next actions."],
    rent: ["Rent", "Check balance and payment status."],
    maintenance: ["Maintenance", "Report an issue in a few fields."],
    renewal: ["Renewal", "Review terms and request renewal."],
    documents: ["Documents", "View contracts, IDs, cheques, and receipts."],
    uiKit: ["UI Kit", "Reusable dashboard tokens, components, and states."]
  },
  manager: {
    dashboard: ["Management Dashboard", "Today's priorities and portfolio health."],
    actionCenter: ["Action Center", "Resolve requests, approvals, and tenant updates."],
    tenants: ["Tenant Management", "Search profiles, leases, payments, and documents."],
    rentTracking: ["Rent Tracking", "Track paid, pending, and late rent."],
    chequeReview: ["Payment Review", "Approve or reject submitted proof."],
    maintenanceMgmt: ["Maintenance", "Review and update work orders."],
    renewalsMgmt: ["Renewals", "Review renewal decisions."],
    docsMgmt: ["Documents", "Find tenant documents fast."],
    notifications: ["Notifications", "Send tenant updates."],
    financial: ["Finance", "Income, costs, and net position."],
    portfolio: ["Portfolio", "Properties, occupancy, and income."],
    uiKit: ["UI Kit", "Reusable dashboard tokens, components, and states."]
  }
};

function cloneData() {
  return JSON.parse(JSON.stringify(seedData));
}

function toDateInputValue(value) {
  const raw = String(value || "").trim();
  if (!raw) return "";
  if (/^\d{4}-\d{2}-\d{2}$/.test(raw)) return raw;
  const parsed = parseDemoDate(raw);
  if (!parsed) return "";
  const year = parsed.getFullYear();
  const month = String(parsed.getMonth() + 1).padStart(2, "0");
  const day = String(parsed.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function displayDateValue(value) {
  const date = toDateInputValue(value);
  return date ? formatDateInput(date) : "";
}

function contractDateParts(row = {}) {
  const [start = "", end = ""] = String(row.contract || "").split(/\s+-\s+/);
  return {
    start: toDateInputValue(row.contractStartDate || start),
    end: toDateInputValue(row.contractEndDate || end)
  };
}

function normalizeContractStatus(value, endDate) {
  const direct = String(value || "").trim();
  if (direct) return direct;
  const daysRemaining = endDate ? daysUntilDate(displayDateValue(endDate)) : Number.POSITIVE_INFINITY;
  if (daysRemaining < 0) return "Expired";
  if (daysRemaining <= 30) return "Expiring Soon";
  return "Active";
}

function normalizeRentPaymentStatus(value) {
  const status = String(value || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  if (["paid", "approved", "confirmed"].includes(status)) return "paid";
  if (["late", "overdue", "payment_overdue"].includes(status)) return "overdue";
  if (["due_soon", "soon", "due"].includes(status)) return "due_soon";
  if (["pending", "submitted", "in_review", "under_review"].includes(status)) return "pending";
  return status || "pending";
}

function rentPaymentStatusLabel(value) {
  const status = normalizeRentPaymentStatus(value);
  const labels = {
    paid: "Paid",
    pending: "Pending",
    overdue: "Overdue",
    due_soon: "Due Soon"
  };
  return labels[status] || String(value || "Pending");
}

function rentRowStatusFromTenantStatus(value) {
  const status = normalizeRentPaymentStatus(value);
  if (status === "paid") return "Paid";
  if (status === "overdue") return "Late";
  return "Pending";
}

function occupancyStatusLabel(value) {
  const status = String(value || "Occupied").trim();
  if (!status) return "Occupied";
  return status.charAt(0).toUpperCase() + status.slice(1).replaceAll("_", " ");
}

function defaultTenantCreatedAt(index = 0) {
  return `2026-01-${String(Math.min(index + 1, 28)).padStart(2, "0")}T09:00:00+04:00`;
}

function normalizeTenantRecord(row = {}, index = 0) {
  const dates = contractDateParts(row);
  const fullName = String(row.fullName || row.name || "").trim() || `Tenant ${index + 1}`;
  const propertyName = String(row.propertyName || row.property || "").trim();
  const unitNumber = String(row.unitNumber || row.unit || "").trim();
  const monthlyRent = amountNumber(row.monthlyRent ?? row.rent);
  const securityDeposit = amountNumber(row.securityDeposit);
  const pendingBalance = amountNumber(row.pendingBalance);
  const rentPaymentStatus = normalizeRentPaymentStatus(row.rentPaymentStatus || row.rentStatus);
  const createdAt = row.createdAt || defaultTenantCreatedAt(index);
  const updatedAt = row.updatedAt || createdAt;
  const contractStatus = normalizeContractStatus(row.contractStatus, dates.end);
  const renewalStatus = String(row.renewalStatus || "Not Requested").trim();
  const documentStatus = row.documentStatus || "Uploaded";

  return {
    ...row,
    id: row.id || `tenant-${index + 1}-${unitNumber || fullName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    fullName,
    name: fullName,
    email: String(row.email || "").trim(),
    phone: String(row.phone || "").trim(),
    nationality: String(row.nationality || "").trim(),
    idNumber: String(row.idNumber || row.emiratesId || "").trim(),
    propertyName,
    property: propertyName,
    unitNumber,
    unit: unitNumber,
    propertyAddress: String(row.propertyAddress || "").trim(),
    parkingBay: String(row.parkingBay || "").trim(),
    occupancyStatus: occupancyStatusLabel(row.occupancyStatus),
    contractStartDate: dates.start,
    contractEndDate: dates.end,
    contract: dates.start && dates.end ? `${formatDateInput(dates.start)} - ${formatDateInput(dates.end)}` : String(row.contract || ""),
    monthlyRent,
    rent: formatAed(monthlyRent),
    securityDeposit,
    contractStatus,
    renewalStatus,
    rentPaymentStatus,
    rentStatus: rentPaymentStatusLabel(rentPaymentStatus),
    nextDueDate: toDateInputValue(row.nextDueDate),
    lastPaymentDate: toDateInputValue(row.lastPaymentDate),
    paymentMethod: String(row.paymentMethod || "").trim(),
    pendingBalance,
    emergencyContactName: String(row.emergencyContactName || "").trim(),
    emergencyContactPhone: String(row.emergencyContactPhone || "").trim(),
    emergencyContactRelationship: String(row.emergencyContactRelationship || "").trim(),
    notes: String(row.notes || "").trim(),
    documentStatus,
    cheque: row.cheque || row.paymentMethod || "-",
    createdAt,
    updatedAt
  };
}

function ensureSeedTenantRecords(tenants) {
  const records = Array.isArray(tenants) ? tenants.map(normalizeTenantRecord) : [];
  const existingKeys = new Set(records.map((tenant) => `${tenant.id}|${tenant.email}|${tenant.unitNumber}`));
  SUPPLEMENTAL_TENANT_RECORDS.forEach((seed, index) => {
    const normalized = normalizeTenantRecord(seed, records.length + index);
    const key = `${normalized.id}|${normalized.email}|${normalized.unitNumber}`;
    if (!existingKeys.has(key) && !records.some((tenant) => tenant.id === normalized.id || (tenant.email && tenant.email === normalized.email))) {
      records.push(normalized);
      existingKeys.add(key);
    }
  });
  return records;
}

function normalizeOccupancyStatus(value, occupiedUnits = 0, vacantUnits = 0) {
  const status = String(value || "").trim().toLowerCase().replace(/[\s-]+/g, "_");
  if (["occupied", "vacant", "mixed"].includes(status)) return status;
  if (status === "reserved") return "mixed";
  if (status === "active") return "occupied";
  if (occupiedUnits > 0 && vacantUnits > 0) return "mixed";
  if (occupiedUnits > 0) return "occupied";
  if (vacantUnits > 0) return "vacant";
  return "mixed";
}

function propertyStatusLabel(status) {
  const labels = {
    occupied: "Occupied",
    vacant: "Vacant",
    mixed: "Mixed"
  };
  return labels[normalizeOccupancyStatus(status)] || "Mixed";
}

function propertyTypeLabel(value) {
  const type = String(value || "Apartment").trim();
  return type || "Apartment";
}

function normalizePropertyRecord(row = {}, index = 0) {
  const name = String(row.propertyName || row.name || "").trim() || `Property ${index + 1}`;
  const preset = LEGACY_PROPERTY_PRESETS[name] || PROPERTY_LOCATION_PRESETS.find((item) =>
    [row.area, row.location, row.city].filter(Boolean).some((value) => String(value).toLowerCase().includes(item.area.toLowerCase()) || String(value).toLowerCase().includes(item.label.toLowerCase()))
  ) || PROPERTY_LOCATION_PRESETS[0];
  const unitCount = Number(row.unitCount ?? row.units) || 0;
  const occupancyPercent = percentValue(row.occupancy);
  const occupiedUnits = Number(row.occupiedUnits) || (occupancyPercent ? Math.round(unitCount * (occupancyPercent / 100)) : 0);
  const vacantUnits = Number(row.vacantUnits) || Math.max(unitCount - occupiedUnits, 0);
  const occupancyStatus = normalizeOccupancyStatus(row.occupancyStatus || row.status, occupiedUnits, vacantUnits);
  const currentMonthlyRent = amountNumber(row.currentMonthlyRent ?? row.income);
  const monthlyRentPotential = Number(row.monthlyRentPotential) || Math.max(currentMonthlyRent, unitCount * 8500);
  const assetValue = amountNumber(row.assetValue) || Math.max(monthlyRentPotential * 130, unitCount * 650000);
  const latitude = Number(row.latitude ?? preset.latitude);
  const longitude = Number(row.longitude ?? preset.longitude);
  const occupancy = unitCount ? `${Math.round((occupiedUnits / unitCount) * 100)}%` : "0%";
  const city = String(row.city || preset.city || "").trim();
  const area = String(row.area || row.location || preset.area || "").trim();

  return {
    ...row,
    id: row.id || `property-${index + 1}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    propertyName: name,
    name,
    propertyType: propertyTypeLabel(row.propertyType),
    city,
    area,
    address: String(row.address || preset.address || area || city).trim(),
    location: area || city,
    unitCount,
    units: unitCount,
    occupiedUnits,
    vacantUnits,
    occupancyStatus,
    status: propertyStatusLabel(occupancyStatus),
    occupancy,
    assetValue,
    monthlyRentPotential,
    currentMonthlyRent,
    income: formatAed(currentMonthlyRent),
    latitude,
    longitude,
    notes: String(row.notes || "").trim(),
    amenities: String(row.amenities || "").trim(),
    maintenanceNotes: String(row.maintenanceNotes || "").trim(),
    managementRemarks: String(row.managementRemarks || "").trim(),
    maintenance: String(row.maintenance || "No open requests").trim(),
    createdAt: row.createdAt || defaultTenantCreatedAt(index),
    updatedAt: row.updatedAt || row.createdAt || defaultTenantCreatedAt(index)
  };
}

function ensureSeedPropertyRecords(properties) {
  if (!Array.isArray(properties) || !properties.length) {
    return cloneData().manager.properties.map(normalizePropertyRecord);
  }
  return properties.map(normalizePropertyRecord);
}

function getPortfolioSummary(properties = state.data.manager.properties) {
  const records = (properties || []).map(normalizePropertyRecord);
  const sum = (key) => records.reduce((total, property) => total + (Number(property[key]) || 0), 0);
  const occupiedProperties = records.filter((property) => property.occupancyStatus === "occupied" || property.occupiedUnits > 0).length;
  const vacantProperties = records.filter((property) => property.occupancyStatus === "vacant" || property.vacantUnits > 0).length;

  return {
    totalProperties: records.length,
    occupiedProperties,
    vacantProperties,
    totalUnits: sum("unitCount"),
    occupiedUnits: sum("occupiedUnits"),
    vacantUnits: sum("vacantUnits"),
    totalAssetValue: sum("assetValue"),
    currentMonthlyRent: sum("currentMonthlyRent"),
    monthlyRentPotential: sum("monthlyRentPotential")
  };
}

function normalizeData(data) {
  const base = cloneData();
  const normalized = {
    ...base,
    ...data,
    tenant: {
      ...base.tenant,
      ...(data?.tenant || {})
    },
    manager: {
      ...base.manager,
      ...(data?.manager || {})
    }
  };

  for (const key of ["rentHistory", "receipts", "cashRequests", "paymentSubmissions", "maintenanceRequests", "contractRequests", "complaints", "suggestions", "documents", "activities"]) {
    if (!Array.isArray(normalized.tenant[key])) normalized.tenant[key] = base.tenant[key] || [];
  }

  for (const key of ["tenants", "rentRows", "chequeReviews", "maintenanceRequests", "renewals", "documents", "notifications", "cashRequests", "contractRequests", "complaints", "suggestions", "properties"]) {
    if (!Array.isArray(normalized.manager[key])) normalized.manager[key] = base.manager[key] || [];
  }

  normalized.manager.financial = {
    ...base.manager.financial,
    ...(normalized.manager.financial || {})
  };

  normalized.manager.tenants = ensureSeedTenantRecords(normalized.manager.tenants);
  normalized.manager.properties = ensureSeedPropertyRecords(normalized.manager.properties);

  normalized.manager.notifications.forEach((row, index) => {
    if (!row.id) row.id = `msg-seed-${index + 1}`;
  });

  normalized.tenant.maintenanceRequests.forEach((row, index) => {
    if (!row.id) row.id = `tm-${index + 1}`;
    if (!row.photo) row.photo = "Photo placeholder attached";
  });

  normalized.tenant.activities.forEach((row, index) => {
    if (!row.id) row.id = `activity-seed-${index + 1}`;
    if (!row.detail) row.detail = row.description || "";
    if (!row.time) row.time = row.date || "Current";
  });

  if (!normalized.tenant.receipts.length) {
    normalized.tenant.receipts = normalized.tenant.rentHistory
      .filter((row) => row.status === "Paid" && String(row.receipt || "").startsWith("REC"))
      .map((row, index) => ({
        id: `receipt-${index + 1}`,
        month: row.month,
        amount: row.amount,
        receipt: row.receipt,
        date: row.dueDate,
        status: "Available"
      }));
  }

  return normalized;
}

function loadStoredSnapshot() {
  try {
    const raw = localStorage.getItem(DATA_STORE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (parsed?.version !== DATA_STORE_VERSION || !parsed.data?.tenant || !parsed.data?.manager) {
      return null;
    }

    return {
      data: parsed.data,
      sequence: Number(parsed.sequence) || 0
    };
  } catch {
    return null;
  }
}

function saveData() {
  try {
    localStorage.setItem(
      DATA_STORE_KEY,
      JSON.stringify({
        version: DATA_STORE_VERSION,
        savedAt: new Date().toISOString(),
        sequence: state.sequence,
        data: state.data
      })
    );
  } catch {
    // The demo remains usable if browser storage is unavailable.
  }
}

function askAIStorageRole(role = state.role) {
  return role === "manager" ? "management" : "tenant";
}

function askAIStorageKey(role = state.role) {
  return `estateflow-ask-ai-${askAIStorageRole(role)}-messages-v1`;
}

function askAISessionsStorageKey(role = state.role) {
  return `askAI:${askAIStorageRole(role)}:sessions`;
}

function normalizeAskAIMessage(message = {}) {
  return {
    id: message.id || nextId("ai-message"),
    role: message.role === "assistant" ? "assistant" : "user",
    content: String(message.content || "").trim(),
    createdAt: message.createdAt || new Date().toISOString(),
    status: message.status || "sent"
  };
}

function trimAskAIText(value, maxLength = 56) {
  const text = String(value || "").replace(/\s+/g, " ").trim();
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength - 1).trim()}...` : text;
}

function askAIChatTitle(messages = []) {
  const firstUserMessage = messages.find((message) => message.role === "user" && message.content)?.content;
  return trimAskAIText(firstUserMessage, 48) || "New chat";
}

function askAIChatPreview(messages = []) {
  const latest = [...messages].reverse().find((message) => message.content);
  return trimAskAIText(latest?.content, 74) || "No messages yet.";
}

function askAISessionDateLabel(session = {}) {
  const updatedAt = session.updatedAt || session.createdAt;
  if (!updatedAt) return "Now";
  const date = new Date(updatedAt);
  if (Number.isNaN(date.getTime())) return "Now";
  const today = new Date();
  const isToday = date.toDateString() === today.toDateString();
  if (isToday) {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }
  return date.toLocaleDateString([], { month: "short", day: "numeric" });
}

function createAskAISession(role = state.role, options = {}) {
  const createdAt = options.createdAt || new Date().toISOString();
  const messages = Array.isArray(options.messages)
    ? options.messages.map(normalizeAskAIMessage).filter((message) => message.content).slice(-ASK_AI_MESSAGE_LIMIT)
    : [];
  return {
    id: options.id || nextId("ai-chat"),
    title: trimAskAIText(options.title, 48) || askAIChatTitle(messages),
    role: askAIStorageRole(role),
    messages,
    inputValue: options.inputValue || "",
    createdAt,
    updatedAt: options.updatedAt || createdAt
  };
}

function normalizeAskAISession(session = {}, role = state.role) {
  const normalized = createAskAISession(role, session);
  normalized.title = askAIChatTitle(normalized.messages);
  normalized.updatedAt = session.updatedAt || normalized.updatedAt;
  return normalized;
}

function loadLegacyAskAIMessages(role = state.role) {
  try {
    const raw = localStorage.getItem(askAIStorageKey(role));
    if (!raw) return [];
    const messages = JSON.parse(raw);
    return Array.isArray(messages)
      ? messages.map(normalizeAskAIMessage).filter((message) => message.content).slice(-ASK_AI_MESSAGE_LIMIT)
      : [];
  } catch {
    return [];
  }
}

function loadAskAISessions(role = state.role) {
  try {
    const raw = localStorage.getItem(askAISessionsStorageKey(role));
    const sessions = raw ? JSON.parse(raw) : [];
    if (Array.isArray(sessions) && sessions.length) {
      return sessions
        .map((session) => normalizeAskAISession(session, role))
        .slice(0, ASK_AI_SESSION_LIMIT);
    }
  } catch {
    // Fall back to legacy storage below.
  }

  const legacyMessages = loadLegacyAskAIMessages(role);
  return legacyMessages.length
    ? [createAskAISession(role, { messages: legacyMessages, title: askAIChatTitle(legacyMessages) })]
    : [];
}

function saveAskAISessions(role = state.role) {
  try {
    localStorage.setItem(
      askAISessionsStorageKey(role),
      JSON.stringify(state.askAI.sessions.slice(0, ASK_AI_SESSION_LIMIT))
    );
  } catch {
    // Ask AI remains usable if browser storage is unavailable.
  }
}

function activeAskAISession() {
  return state.askAI.sessions.find((session) => session.id === state.askAI.activeSessionId)
    || state.askAI.sessions[0]
    || null;
}

function syncAskAIStateFromSession() {
  const session = activeAskAISession();
  state.askAI.activeSessionId = session?.id || "";
  state.askAI.messages = session?.messages || [];
  state.askAI.inputValue = session?.inputValue || "";
}

function moveAskAISessionToTop(session) {
  if (!session) return;
  state.askAI.sessions = [
    session,
    ...state.askAI.sessions.filter((item) => item.id !== session.id)
  ].slice(0, ASK_AI_SESSION_LIMIT);
}

function persistActiveAskAISession(role = state.role) {
  const session = activeAskAISession();
  if (!session) return;
  session.messages = state.askAI.messages
    .map(normalizeAskAIMessage)
    .filter((message) => message.content)
    .slice(-ASK_AI_MESSAGE_LIMIT);
  session.inputValue = state.askAI.inputValue;
  session.title = askAIChatTitle(session.messages);
  session.updatedAt = new Date().toISOString();
  moveAskAISessionToTop(session);
  state.askAI.activeSessionId = session.id;
  saveAskAISessions(role);
}

function loadAskAIMessages(role = state.role) {
  const sessions = loadAskAISessions(role);
  return sessions[0]?.messages || [];
}

function saveAskAIMessages(role = state.role) {
  persistActiveAskAISession(role);
  try {
    localStorage.setItem(
      askAIStorageKey(role),
      JSON.stringify(state.askAI.messages.slice(-ASK_AI_MESSAGE_LIMIT))
    );
  } catch {
    // Ask AI remains usable if browser storage is unavailable.
  }
}

function ensureAskAIMessages(role = state.role) {
  const sessions = loadAskAISessions(role);
  state.askAI.sessions = sessions.length ? sessions : [createAskAISession(role)];
  if (!state.askAI.activeSessionId || !state.askAI.sessions.some((session) => session.id === state.askAI.activeSessionId)) {
    state.askAI.activeSessionId = state.askAI.sessions[0].id;
  }
  syncAskAIStateFromSession();
  saveAskAISessions(role);
}

function selectAskAISession(sessionId) {
  persistActiveAskAISession();
  const session = state.askAI.sessions.find((item) => item.id === sessionId);
  if (!session) return;
  state.askAI.activeSessionId = session.id;
  state.askAI.error = null;
  state.askAI.isTyping = false;
  syncAskAIStateFromSession();
}

function startNewAskAIChat() {
  persistActiveAskAISession();
  const session = createAskAISession(state.role, { title: "New chat" });
  state.askAI.sessions = [session, ...state.askAI.sessions].slice(0, ASK_AI_SESSION_LIMIT);
  state.askAI.activeSessionId = session.id;
  state.askAI.messages = [];
  state.askAI.inputValue = "";
  state.askAI.error = null;
  state.askAI.isTyping = false;
  state.askAI.search = "";
  state.askAI.contextPrompt = "";
  state.askAI.nudgeContext = null;
  saveAskAISessions();
}

function filteredAskAISessions() {
  const query = state.askAI.search.trim().toLowerCase();
  if (!query) return state.askAI.sessions;
  return state.askAI.sessions.filter((session) => {
    const firstUser = session.messages.find((message) => message.role === "user")?.content || "";
    const latestAssistant = [...session.messages].reverse().find((message) => message.role === "assistant")?.content || "";
    const haystack = [
      session.title,
      firstUser,
      latestAssistant,
      askAIChatPreview(session.messages),
      askAISessionDateLabel(session)
    ].join(" ").toLowerCase();
    return haystack.includes(query);
  });
}

function buildAskAIContext(message) {
  const role = state.role || state.selectedRole;
  const profile = role === "tenant" ? state.data.tenant?.profile : state.data.manager?.profile;
  const pageMetaCopy = pageMeta[role]?.[state.page] || ["Dashboard", ""];
  return {
    message,
    role,
    pageContext: {
      page: state.page,
      title: pageMetaCopy[0],
      subtitle: pageMetaCopy[1]
    },
    dashboardData: {
      profile,
      tenant: role === "tenant" ? tenantRentSummary() : null,
      management: role === "manager" ? getManagementDashboardSummary() : null,
      actionCount: actionCenterCountForRole(role)
    },
    askAIContext: state.askAI.nudgeContext,
    suggestedPrompt: state.askAI.contextPrompt,
    history: state.askAI.messages.slice(-ASK_AI_MESSAGE_LIMIT),
    conversationHistory: state.askAI.messages.slice(-ASK_AI_MESSAGE_LIMIT),
    chatId: state.askAI.activeSessionId
  };
}

function mockAskAIResponse({ role, pageContext }) {
  const roleCopy = role === "manager"
    ? "Ask AI is ready to help summarize actions, rent follow-ups, maintenance, renewals, and portfolio status once an API is connected."
    : "Ask AI is ready to help with rent, maintenance, contracts, and receipts once an API is connected.";
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        id: nextId("ai"),
        role: "assistant",
        content: `${roleCopy} You are viewing ${pageContext.title}.`,
        tone: "demo",
        createdAt: new Date().toISOString()
      });
    }, ASK_AI_TYPING_DELAY);
  });
}

// Future API integration point. Do not connect an API yet.
async function askAI({ message, role, pageContext, dashboardData, history, conversationHistory, chatId }) {
  return mockAskAIResponse({ message, role, pageContext, dashboardData, history, conversationHistory, chatId });
}

const storedSnapshot = loadStoredSnapshot();
state.data = normalizeData(storedSnapshot?.data || cloneData());
state.sequence = storedSnapshot?.sequence || 0;

let toastCounter = 0;

// Design-system rule: add new dashboard UI patterns here first, then use them on pages.
const STATUS_VARIANT_MAP = {
  active: "info",
  approved: "success",
  available: "success",
  acknowledged: "warning",
  assigned: "info",
  canceled: "danger",
  cancelled: "danger",
  completed: "success",
  dueSoon: "warning",
  expiringSoon: "warning",
  expired: "danger",
  failed: "danger",
  high: "danger",
  infoRequested: "warning",
  inProgress: "warning",
  inReview: "warning",
  late: "danger",
  low: "neutral",
  medium: "warning",
  mixed: "info",
  new: "danger",
  occupied: "success",
  open: "danger",
  overdue: "danger",
  paid: "success",
  pending: "warning",
  read: "info",
  rejected: "danger",
  scheduled: "warning",
  sent: "info",
  submitted: "warning",
  success: "success",
  underReview: "warning",
  unread: "neutral",
  uploaded: "neutral",
  vacant: "warning"
};

const STATUS_LABELS = {
  "Info Requested": "Needs Info",
  dueSoon: "Due soon",
  inProgress: "In Progress",
  inReview: "In Review",
  underReview: "Under Review"
};

const TOAST_VARIANT_COPY = {
  success: { title: "Success", status: "status" },
  warning: { title: "Warning", status: "status" },
  error: { title: "Error", status: "alert" },
  info: { title: "Info", status: "status" },
  neutral: { title: "Update", status: "status" }
};

function nextId(prefix) {
  state.sequence += 1;
  return `${prefix}-${Date.now()}-${state.sequence}`;
}

function tenantProfile() {
  return state.data.tenant.profile;
}

function amountNumber(value) {
  const text = String(value || "").trim();
  const normalized = text.replace(/,/g, "");
  const match = normalized.match(/-?\d+(?:\.\d+)?/);
  const amount = match ? Number(match[0]) : 0;
  const suffix = normalized.match(/\b\d+(?:\.\d+)?\s*([kKmM])\b/);
  if (!Number.isFinite(amount)) return 0;
  if (suffix?.[1]?.toLowerCase() === "m") return amount * 1000000;
  if (suffix?.[1]?.toLowerCase() === "k") return amount * 1000;
  return amount;
}

function formatAed(amount, { compact = false } = {}) {
  const value = Number(amount) || 0;
  if (compact && value >= 1000000) {
    return `AED ${(value / 1000000).toFixed(2).replace(/\.?0+$/, "")}M`;
  }
  if (compact && value >= 100000) {
    return `AED ${Math.round(value / 1000)}K`;
  }
  return `AED ${value.toLocaleString("en-US")}`;
}

function currentTenantRent() {
  return state.data.tenant.rentHistory[0] || {
    month: "Current rent",
    amount: tenantProfile().rent,
    dueDate: "05 Jun 2026",
    status: "Pending",
    receipt: "Awaiting payment"
  };
}

function currentTenantPaymentSubmission() {
  const rent = currentTenantRent();
  return state.data.tenant.paymentSubmissions.find((row) =>
    row.amount === rent.amount && row.dueDate === rent.dueDate
  ) || null;
}

function currentTenantCashRequest() {
  const rent = currentTenantRent();
  return state.data.tenant.cashRequests.find((row) =>
    row.amount === rent.amount && row.dueDate === rent.dueDate && isOpenRequestStatus(row.status)
  ) || null;
}

function activeTenantMaintenance() {
  return state.data.tenant.maintenanceRequests.find((row) => isActiveRepeatableRequest(row));
}

function normalizeRequestText(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function isResolvedRepeatableRequest(status) {
  return ["approved", "rejected", "completed", "canceled", "cancelled", "resolved", "reviewed"].includes(normalizeRequestText(status));
}

function isActiveRepeatableRequest(row) {
  return !isResolvedRepeatableRequest(row?.status);
}

function isOpenRequestStatus(status) {
  return !["canceled", "cancelled", "rejected"].includes(normalizeRequestText(status));
}

function showDuplicateRequestToast(label) {
  showToast(`${label} already submitted.`, { variant: "warning" });
}

function renewalRequestAlreadySubmitted(profile = tenantProfile()) {
  const request = activeTenantRenewalRequest(profile);
  return Boolean(request && isActiveRepeatableRequest(request));
}

function contractRequestAlreadySubmitted(requestType) {
  const profile = tenantProfile();
  return state.data.tenant.contractRequests.some((row) =>
    row.tenant === profile.name &&
    row.unit === profile.unit &&
    row.requestType === requestType &&
    isActiveRepeatableRequest(row)
  );
}

function maintenanceRequestAlreadySubmitted(category, description) {
  const categoryKey = normalizeRequestText(category);
  const descriptionKey = normalizeRequestText(description);
  return state.data.tenant.maintenanceRequests.some((row) =>
    normalizeRequestText(row.category || row.issue) === categoryKey &&
    normalizeRequestText(row.description) === descriptionKey &&
    isActiveRepeatableRequest(row)
  );
}

function complaintAlreadySubmitted(description) {
  const descriptionKey = normalizeRequestText(description);
  return state.data.tenant.complaints.some((row) =>
    normalizeRequestText(row.description) === descriptionKey &&
    isActiveRepeatableRequest(row)
  );
}

function suggestionAlreadySubmitted(description) {
  const descriptionKey = normalizeRequestText(description);
  return state.data.tenant.suggestions.some((row) =>
    normalizeRequestText(row.description) === descriptionKey &&
    isActiveRepeatableRequest(row)
  );
}

function normalizePaymentWorkflow({ rent, payment, cashRequest }) {
  const rentStatus = String(rent?.status || "").toLowerCase();
  const paymentStatus = String(payment?.status || "").toLowerCase();
  const cashStatus = String(cashRequest?.status || "").toLowerCase();

  if (rentStatus === "paid" || ["approved", "paid", "confirmed"].includes(paymentStatus)) return "confirmed";
  if (paymentStatus === "rejected" || cashStatus === "rejected") return "rejected";
  if (cashRequest && cashStatus === "approved") return "cash_approved";
  if (cashRequest && ["pending", "submitted", "in review"].includes(cashStatus)) return "cash_requested";
  if (payment && ["submitted", "in review", "pending"].includes(paymentStatus)) return "under_review";
  if (payment) return "proof_submitted";
  return "not_started";
}

function rentUrgencyLabel(urgency, daysUntilDue) {
  if (urgency === "paid") return "Paid";
  if (urgency === "overdue") return "Overdue";
  if (urgency === "dueSoon") return daysUntilDue === 0 ? "Due today" : "Due soon";
  return "Not due yet";
}

function getRentDashboardState(rentCycle, today = new Date()) {
  const dueDate = parseDemoDate(rentCycle?.dueDate);
  const daysUntilDue = dueDate ? daysUntilDate(rentCycle.dueDate, today) : Number.POSITIVE_INFINITY;
  const workflow = rentCycle?.paymentStatus || "not_started";
  const isPaid = ["paid", "confirmed"].includes(workflow);
  const isRejected = workflow === "rejected";
  const isOverdue = !isPaid && daysUntilDue < 0;
  const isDueSoon = !isPaid && daysUntilDue >= 0 && daysUntilDue <= 7;
  const urgency = isPaid ? "paid" : isOverdue ? "overdue" : isDueSoon ? "dueSoon" : "healthy";
  const color = isPaid ? "green" : isRejected || isOverdue ? "red" : isDueSoon ? "orange" : "green";
  const metricClass = color === "red" ? "metric-status-critical" : color === "orange" ? "metric-status-warning" : "metric-status-paid";
  const dueCopy = `Due ${rentCycle.dueDate}`;
  const workflowCopy = {
    not_started: {
      label: "Payment not started",
      note: "Choose a payment method.",
      description: `${dueCopy}. Choose a payment method to complete rent.`,
      action: { label: "Pay Rent", icon: "wallet", modal: "payRent" },
      activityTitle: "Payment not started",
      activityDetail: `${rentCycle.amount} is due ${rentCycle.dueDate}.`
    },
    proof_needed: {
      label: "Proof needed",
      note: "Submit proof.",
      description: `${dueCopy}. Submit payment proof for company review.`,
      action: { label: "Pay Rent", icon: "wallet", modal: "payRent" },
      activityTitle: "Payment proof needed",
      activityDetail: `Submit proof for ${rentCycle.amount}.`
    },
    proof_submitted: {
      label: "Proof submitted",
      note: "Waiting for review.",
      description: `${dueCopy}. Your proof has been submitted and is waiting for company review.`,
      action: { label: "View rent", icon: "wallet", page: "rent" },
      activityTitle: "Payment proof submitted",
      activityDetail: "Waiting for company review."
    },
    under_review: {
      label: "Payment proof under review",
      note: "Waiting for company review.",
      description: `${dueCopy}. Your proof is waiting for company review.`,
      action: { label: "View rent", icon: "wallet", page: "rent" },
      activityTitle: "Payment proof submitted",
      activityDetail: "Waiting for company review."
    },
    cash_requested: {
      label: "Cash visit requested",
      note: "Waiting for approval.",
      description: `${dueCopy}. Waiting for the company to approve your visit time.`,
      action: { label: "View rent", icon: "wallet", page: "rent" },
      activityTitle: "Cash visit requested",
      activityDetail: "Waiting for company approval."
    },
    cash_approved: {
      label: "Cash visit approved",
      note: "Visit time approved.",
      description: `${dueCopy}. Visit the company at the approved time to complete payment.`,
      action: { label: "View rent", icon: "wallet", page: "rent" },
      activityTitle: "Cash visit approved",
      activityDetail: "Visit time approved by management."
    },
    paid: {
      label: "Paid",
      note: "No dues.",
      description: "Payment confirmed for this rent cycle.",
      action: { label: "View receipt", icon: "file", modal: "receiptPreview" },
      activityTitle: "Rent paid",
      activityDetail: "Payment confirmed for this rent cycle."
    },
    confirmed: {
      label: "Paid",
      note: "No dues.",
      description: "Payment confirmed for this rent cycle.",
      action: { label: "View receipt", icon: "file", modal: "receiptPreview" },
      activityTitle: "Rent paid",
      activityDetail: "Payment confirmed for this rent cycle."
    },
    rejected: {
      label: "Payment rejected",
      note: "Action needed.",
      description: `${dueCopy}. The company rejected the payment proof. Submit updated details or choose another method.`,
      action: { label: "Pay Rent", icon: "wallet", modal: "payRent" },
      activityTitle: "Payment proof rejected",
      activityDetail: "Submit updated payment details."
    }
  };
  const workflowState = workflowCopy[workflow] || workflowCopy.not_started;
  const urgencyCopy = urgency === "paid"
    ? "Payment confirmed."
    : urgency === "overdue"
      ? `${Math.abs(daysUntilDue)} days overdue.`
      : urgency === "dueSoon"
        ? daysUntilDue === 0 ? "Due today." : `Due in ${daysUntilDue} days.`
        : "No urgent action.";
  const titleByWorkflow = {
    under_review: urgency === "overdue" ? "Rent overdue - proof under review" : urgency === "dueSoon" ? "Rent due soon - proof under review" : "Payment proof under review",
    proof_submitted: urgency === "overdue" ? "Rent overdue - proof submitted" : urgency === "dueSoon" ? "Rent due soon - proof submitted" : "Payment proof submitted",
    cash_requested: urgency === "overdue" ? "Rent overdue - cash visit pending" : "Cash visit requested",
    cash_approved: urgency === "overdue" ? "Rent overdue - cash visit approved" : "Cash visit approved",
    rejected: urgency === "overdue" ? "Payment overdue - action needed" : "Payment proof rejected",
    paid: "Rent paid",
    confirmed: "Rent paid"
  };
  const defaultTitle = urgency === "overdue" ? "Rent overdue" : urgency === "dueSoon" ? "Rent due soon" : "Rent is up to date";
  const rentStatusCopy = {
    paid: {
      title: "Rent paid",
      body: "Payment is confirmed for this rent cycle.",
      label: "Paid",
      note: "No dues.",
      action: { label: "View receipt", icon: "file", modal: "receiptPreview" },
      secondaryAction: null,
      activityTitle: "Rent paid",
      activityDetail: "Payment confirmed for this rent cycle."
    },
    overdue: {
      title: "Rent overdue",
      body: `${rentCycle.amount} was due on ${rentCycle.dueDate}. Complete payment to update your rent status.`,
      label: "Payment overdue",
      note: "Payment overdue.",
      action: { label: "Pay Rent", icon: "wallet", modal: "payRent" },
      secondaryAction: { label: "View Rent", icon: "wallet", page: "rent" },
      activityTitle: "Rent overdue",
      activityDetail: `${rentCycle.amount} was due on ${rentCycle.dueDate}.`
    },
    dueSoon: {
      title: daysUntilDue === 0 ? "Rent due today" : "Rent due soon",
      body: `${rentCycle.amount} is due on ${rentCycle.dueDate}. Pay before the due date to keep your account current.`,
      label: daysUntilDue === 0 ? "Due today" : "Due soon",
      note: daysUntilDue === 0 ? "Due today." : `Due in ${daysUntilDue} days.`,
      action: { label: "Pay Rent", icon: "wallet", modal: "payRent" },
      secondaryAction: { label: "View Rent", icon: "wallet", page: "rent" },
      activityTitle: daysUntilDue === 0 ? "Rent due today" : "Rent due soon",
      activityDetail: `${rentCycle.amount} is due ${rentCycle.dueDate}.`
    },
    healthy: {
      title: "Rent on schedule",
      body: `${rentCycle.amount} is scheduled for ${rentCycle.dueDate}. No action is needed right now.`,
      label: "Not due yet",
      note: "No urgent action.",
      action: { label: "View Rent", icon: "wallet", page: "rent" },
      secondaryAction: null,
      activityTitle: "Rent on schedule",
      activityDetail: `${rentCycle.amount} is scheduled for ${rentCycle.dueDate}.`
    }
  };
  const statusState = rentStatusCopy[urgency] || rentStatusCopy.healthy;
  const useRentStatusCopy = urgency !== "paid" || ["not_started", "proof_submitted", "under_review", "rejected"].includes(workflow);

  return {
    urgency,
    color,
    metricClass,
    daysUntilDue,
    title: useRentStatusCopy ? statusState.title : titleByWorkflow[workflow] || defaultTitle,
    body: useRentStatusCopy ? statusState.body : workflowState.description,
    urgencyLabel: rentUrgencyLabel(urgency, daysUntilDue),
    urgencyNote: urgencyCopy,
    workflow,
    workflowLabel: useRentStatusCopy ? statusState.label : workflowState.label,
    workflowNote: useRentStatusCopy ? statusState.note : workflowState.note,
    primaryAction: useRentStatusCopy ? statusState.action : workflowState.action,
    secondaryAction: useRentStatusCopy ? statusState.secondaryAction : workflow === "under_review" || workflow === "proof_submitted" ? { label: "View rent", icon: "wallet", page: "rent" } : null,
    activityTitle: useRentStatusCopy ? statusState.activityTitle : workflowState.activityTitle,
    activityDetail: useRentStatusCopy ? statusState.activityDetail : workflowState.activityDetail,
    activityTime: rentCycle.submittedOn || "Current"
  };
}

function tenantRentSummary() {
  const rent = currentTenantRent();
  const payment = currentTenantPaymentSubmission();
  const cashRequest = currentTenantCashRequest();
  const status = rent.status === "Paid" ? "Paid" : payment?.status || rent.status || "Pending";
  const isPaid = status === "Paid" || status === "Approved";
  const maintenance = activeTenantMaintenance();
  const paymentWorkflow = normalizePaymentWorkflow({ rent, payment, cashRequest });
  const dashboardState = getRentDashboardState({
    amount: rent.amount,
    dueDate: rent.dueDate,
    paymentStatus: paymentWorkflow,
    submittedOn: payment?.submittedOn || cashRequest?.createdAt || ""
  });

  return {
    rent,
    payment,
    cashRequest,
    status,
    isPaid,
    title: dashboardState.title,
    body: dashboardState.body,
    dueAmount: isPaid ? "AED 0" : rent.amount,
    outstanding: isPaid ? "AED 0" : rent.amount,
    receipt: isPaid ? rent.receipt : "Receipt pending",
    paymentWorkflow,
    dashboardState,
    paymentNote: dashboardState.workflowNote,
    maintenanceStatus: maintenance?.status || "Completed",
    maintenanceNote: maintenance ? `${maintenance.category} request` : "No open requests"
  };
}

function managerRentStats() {
  const rows = state.data.manager.rentRows;
  const byStatus = (status) => rows.filter((row) => row.status === status);
  const sum = (items) => items.reduce((total, row) => total + amountNumber(row.amount), 0);
  const paidRows = byStatus("Paid");
  const pendingRows = byStatus("Pending");
  const lateRows = byStatus("Late");

  return {
    paidRows,
    pendingRows,
    lateRows,
    paidAmount: sum(paidRows),
    pendingAmount: sum(pendingRows),
    lateAmount: sum(lateRows),
    expectedAmount: sum(rows)
  };
}

function countStatus(rows, statuses) {
  const wanted = Array.isArray(statuses) ? statuses : [statuses];
  return rows.filter((row) => wanted.includes(row.status)).length;
}

function tenantDocumentStats() {
  const documents = state.data.tenant.documents || [];
  return {
    total: documents.length,
    approved: countStatus(documents, "Approved"),
    inReview: countStatus(documents, "In Review"),
    uploaded: countStatus(documents, "Uploaded")
  };
}

function managerPaymentReviewStats() {
  const activeStatuses = ["Pending", "Submitted", "In Review", "Info Requested"];
  const chequeRows = state.data.manager.chequeReviews || [];
  const cashRows = state.data.manager.cashRequests || [];
  return {
    pendingCount: countStatus(chequeRows, activeStatuses) + countStatus(cashRows, activeStatuses),
    approvedCount: countStatus(chequeRows, "Approved") + countStatus(cashRows, "Approved"),
    rejectedCount: countStatus(chequeRows, "Rejected") + countStatus(cashRows, "Rejected"),
    total: chequeRows.length + cashRows.length
  };
}

function managerMaintenanceStats(requests = state.data.manager.maintenanceRequests) {
  const rows = requests || [];
  const newCount = countStatus(rows, ["New", "Submitted"]);
  const scheduledCount = countStatus(rows, "Scheduled");
  const completedCount = countStatus(rows, ["Completed", "Canceled", "Cancelled", "Rejected"]);
  const inProgressCount = rows.filter((row) =>
    !["New", "Submitted", "Scheduled", "Completed", "Canceled", "Cancelled", "Rejected"].includes(row.status)
  ).length;

  return {
    newCount,
    inProgressCount,
    scheduledCount,
    completedCount,
    openCount: rows.length - completedCount,
    total: rows.length,
    byStatus: {
      New: newCount,
      "In Progress": inProgressCount,
      Scheduled: scheduledCount,
      Completed: completedCount
    }
  };
}

function managerRenewalStats(renewals = state.data.manager.renewals) {
  const rows = renewals || [];
  const activeStatuses = ["Pending", "Submitted", "In Review", "Info Requested"];
  const expiringSoonCount = rows.filter((row) => {
    if (!activeStatuses.includes(row.status)) return false;
    const daysRemaining = daysUntilDate(row.endDate);
    return daysRemaining >= 0 && daysRemaining <= 90;
  }).length;

  return {
    pendingCount: countStatus(rows, activeStatuses),
    approvedCount: countStatus(rows, "Approved"),
    rejectedCount: countStatus(rows, "Rejected"),
    expiringSoonCount,
    total: rows.length
  };
}

function managerDocumentStats(documents = state.data.manager.documents) {
  const rows = documents || [];
  return {
    total: rows.length,
    pendingReviews: countStatus(rows, "In Review"),
    approvedCount: countStatus(rows, "Approved"),
    uploadedCount: countStatus(rows, "Uploaded"),
    rejectedCount: countStatus(rows, "Rejected")
  };
}

function managerNotificationStats(notifications = state.data.manager.notifications) {
  const rows = notifications || [];
  return {
    total: rows.length,
    sentCount: countStatus(rows, "Sent")
  };
}

function managerFinanceStats() {
  const portfolio = getPortfolioSummary();
  const rent = managerRentStats();
  const financial = state.data.manager.financial || {};
  const rentalIncome = portfolio.currentMonthlyRent || amountNumber(financial.income);
  const rentalPotential = Math.max(portfolio.monthlyRentPotential || 0, rentalIncome);
  const vacancyGap = Math.max(0, rentalPotential - rentalIncome);
  const pendingReceivables = rent.pendingAmount + rent.lateAmount;
  const expenses = amountNumber(financial.expenses);
  const operationalCosts = amountNumber(financial.operational);
  const netIncome = Math.max(0, rentalIncome - expenses - operationalCosts);
  const rentalIncomePercent = rentalPotential ? Math.round((rentalIncome / rentalPotential) * 100) : 0;
  const vacancyGapPercent = Math.max(0, 100 - rentalIncomePercent);
  const paidTrackerPercent = rent.expectedAmount ? Math.round((rent.paidAmount / rent.expectedAmount) * 100) : 0;

  return {
    rentalIncome,
    rentalPotential,
    vacancyGap,
    pendingReceivables,
    expenses,
    operationalCosts,
    netIncome,
    rentalIncomePercent,
    vacancyGapPercent,
    paidTrackerPercent,
    pendingTrackerPercent: Math.max(0, 100 - paidTrackerPercent),
    timeframe: "This month"
  };
}

function managerActivityItems() {
  const profile = tenantProfile();
  const tenantRent = state.data.manager.rentRows.find((row) => row.tenant === profile.name && row.unit === profile.unit);
  const tenantReview = state.data.manager.chequeReviews.find((row) => row.tenant === profile.name && row.unit === profile.unit);
  const latestMaintenance = state.data.manager.maintenanceRequests[0];
  const latestRenewal = state.data.manager.renewals.find((row) => row.status === "Pending");
  const items = [];

  if (tenantRent?.status === "Paid") {
    items.push({ title: profile.name, detail: "Rent marked paid", time: "Just now" });
  } else if (tenantReview) {
    items.push({ title: profile.name, detail: tenantReview.status === "Pending" ? "Payment proof waiting for review" : `Payment ${tenantReview.status.toLowerCase()}`, time: "Today" });
  }

  if (latestMaintenance) {
    items.push({ title: latestMaintenance.tenant, detail: `${latestMaintenance.issue} request ${latestMaintenance.status.toLowerCase()}`, time: latestMaintenance.date });
  }

  if (latestRenewal) {
    items.push({ title: latestRenewal.tenant, detail: "Renewal pending review", time: latestRenewal.endDate });
  }

  return items.slice(0, 3);
}

function setManagerRentStatus(tenantName, unit, status) {
  const rentRow = state.data.manager.rentRows.find((row) => row.tenant === tenantName && row.unit === unit);
  if (rentRow) {
    rentRow.status = status;
  }

  const tenant = state.data.manager.tenants.find((row) => row.name === tenantName && row.unit === unit);
  if (tenant) {
    tenant.rentPaymentStatus = normalizeRentPaymentStatus(status);
    tenant.rentStatus = rentPaymentStatusLabel(status);
    tenant.pendingBalance = tenant.rentPaymentStatus === "paid" ? 0 : amountNumber(tenant.rent || tenant.monthlyRent);
    tenant.lastPaymentDate = tenant.rentPaymentStatus === "paid" ? toDateInputValue(new Date().toISOString().slice(0, 10)) : tenant.lastPaymentDate;
    tenant.updatedAt = new Date().toISOString();
  }
}

function setTenantCurrentRentStatus(status, receipt = "Awaiting payment") {
  const rent = currentTenantRent();
  rent.status = status;
  rent.receipt = receipt;
}

function recordTenantActivity(title, detail) {
  const activity = {
    id: nextId("activity"),
    title,
    detail,
    time: "Just now",
    createdAt: new Date().toISOString()
  };
  state.data.tenant.activities = [activity, ...state.data.tenant.activities].slice(0, ACTIVITY_STORE_LIMIT);
}

function activityTimestamp(item, now = Date.now()) {
  const createdAt = new Date(item?.createdAt || "");
  if (!Number.isNaN(createdAt.getTime())) return createdAt.getTime();

  const value = String(item?.time || item?.date || "").trim();
  const lowerValue = value.toLowerCase();
  if (!value || lowerValue === "current") return 0;
  if (lowerValue === "just now") return now;
  if (lowerValue === "today") return now - 60 * 60 * 1000;
  if (lowerValue === "yesterday") return now - 24 * 60 * 60 * 1000;

  const daysAgo = lowerValue.match(/^(\d+)\s+days?\s+ago$/);
  if (daysAgo) return now - Number(daysAgo[1]) * 24 * 60 * 60 * 1000;

  const demoDate = parseDemoDate(value);
  if (demoDate) return demoDate.getTime();

  const fallback = new Date(value);
  return Number.isNaN(fallback.getTime()) ? 0 : fallback.getTime();
}

function sortActivityItems(items) {
  const now = Date.now();
  return items
    .map((item, index) => ({ ...item, sortTime: activityTimestamp(item, now), sortIndex: index }))
    .sort((a, b) => b.sortTime - a.sortTime || a.sortIndex - b.sortIndex)
    .map(({ sortTime, sortIndex, ...item }) => item);
}

function actionSourceId(kind, id) {
  return `act-${kind}-${id}`;
}

function tenantRecordFor(tenantName, unit) {
  return state.data.manager.tenants.find((row) => row.name === tenantName && (!unit || row.unit === unit));
}

function propertyForTenant(tenantName, unit) {
  return tenantRecordFor(tenantName, unit)?.property || (tenantName === tenantProfile().name ? tenantProfile().property : "");
}

function demoDateIso(date, fallback = "09:00") {
  const value = String(date || "").trim();
  const match = value.match(/^(\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4})$/);
  if (!match) return new Date().toISOString();
  const months = { Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07", Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12" };
  return `${match[3]}-${months[match[2]]}-${match[1]}T${fallback}:00+04:00`;
}

function formatActionDate(value) {
  const date = new Date(value || Date.now());
  if (Number.isNaN(date.getTime())) return "Just now";
  return date.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function actionHistory(at, by, action, note) {
  return [{ at, by, action, note }];
}

function ensureActionList() {
  if (!Array.isArray(state.data.actions)) {
    state.data.actions = [];
    return true;
  }
  return false;
}

function findActionBySource(kind, id) {
  return (state.data.actions || []).find((item) => item.source?.kind === kind && item.source?.id === id);
}

function addActionItem(item) {
  ensureActionList();
  state.data.actions.unshift(item);
  return item;
}

function ensureActionFromChequeReview(row) {
  const existing = findActionBySource("chequeReview", row.id);
  if (existing) return existing;
  const createdAt = demoDateIso(row.dueDate, "10:00");
  return addActionItem({
    id: actionSourceId("cheque", row.id),
    type: "Rent Payment",
    title: `${row.tenant} payment confirmation`,
    description: `${row.amount} due ${row.dueDate}. ${row.notes || "Payment proof submitted."}`,
    tenant: row.tenant,
    unit: row.unit,
    property: propertyForTenant(row.tenant, row.unit),
    amount: row.amount,
    createdAt,
    updatedAt: createdAt,
    status: row.status === "Approved" ? "Approved" : row.status === "Rejected" ? "Rejected" : "Pending",
    source: { kind: "chequeReview", id: row.id },
    readBy: [],
    history: actionHistory(createdAt, row.tenant, "Payment confirmation submitted", row.notes || `${row.amount} submitted for review.`)
  });
}

function ensureActionFromMaintenance(row) {
  const existing = findActionBySource("maintenance", row.id);
  if (existing) return existing;
  const createdAt = demoDateIso(row.date, "11:00");
  return addActionItem({
    id: actionSourceId("maintenance", row.id),
    type: "Maintenance",
    title: `${row.issue} request`,
    description: row.description || "Maintenance request submitted.",
    tenant: row.tenant,
    unit: row.unit,
    property: propertyForTenant(row.tenant, row.unit),
    createdAt,
    updatedAt: createdAt,
    status: row.status,
    priority: row.priority,
    source: { kind: "maintenance", id: row.id },
    readBy: [],
    history: actionHistory(createdAt, row.tenant, "Maintenance request created", row.description || row.issue)
  });
}

function ensureActionFromRenewal(row) {
  const existing = findActionBySource("renewal", row.id);
  if (existing) return existing;
  const createdAt = demoDateIso(row.endDate, "09:30");
  return addActionItem({
    id: actionSourceId("renewal", row.id),
    type: "Contract Renewal",
    title: `${row.tenant} renewal request`,
    description: `Contract ends ${row.endDate}. Current rent ${row.currentRent}.`,
    tenant: row.tenant,
    unit: row.unit,
    property: row.property,
    amount: row.currentRent,
    createdAt,
    updatedAt: createdAt,
    status: row.status,
    source: { kind: "renewal", id: row.id },
    readBy: [],
    history: actionHistory(createdAt, row.tenant, "Renewal request created", `Contract end date ${row.endDate}.`)
  });
}

function ensureActionFromNotification(row, index = 0) {
  let changed = false;
  if (!row.id) {
    row.id = `seed-note-${index}`;
    changed = true;
  }
  const existing = findActionBySource("notification", row.id);
  if (existing) return { item: existing, changed };
  const createdAt = demoDateIso(row.date, "12:00");
  const item = addActionItem({
    id: actionSourceId("notification", row.id),
    type: "Message",
    title: `${row.type} sent`,
    description: row.message,
    tenant: row.tenant,
    unit: tenantRecordFor(row.tenant)?.unit || "",
    property: tenantRecordFor(row.tenant)?.property || "",
    createdAt,
    updatedAt: createdAt,
    status: row.status || "Sent",
    source: { kind: "notification", id: row.id },
    readBy: ["manager"],
    history: actionHistory(createdAt, "Property Management", "Message sent", row.message)
  });
  return { item, changed: true };
}

function ensureActionFromCashRequest(row) {
  const existing = findActionBySource("cashRequest", row.id);
  if (existing) return existing;
  const createdAt = row.createdAt || new Date().toISOString();
  return addActionItem({
    id: actionSourceId("cash", row.id),
    type: "Cash Payment",
    title: `${row.tenant} cash payment request`,
    description: `${row.amount} visit requested for ${row.preferredTime}.`,
    tenant: row.tenant,
    unit: row.unit,
    property: row.property,
    amount: row.amount,
    createdAt,
    updatedAt: createdAt,
    status: row.status,
    source: { kind: "cashRequest", id: row.id },
    readBy: ["tenant"],
    history: actionHistory(createdAt, row.tenant, "Cash visit requested", row.notes || row.preferredTime)
  });
}

function ensureActionFromContractRequest(row) {
  const existing = findActionBySource("contractRequest", row.id);
  if (existing) return existing;
  const createdAt = row.createdAt || new Date().toISOString();
  return addActionItem({
    id: actionSourceId("contract", row.id),
    type: row.requestType,
    title: `${row.tenant} ${row.requestType.toLowerCase()}`,
    description: row.notes || `${row.requestType} for Unit ${row.unit}.`,
    tenant: row.tenant,
    unit: row.unit,
    property: row.property,
    amount: row.currentRent,
    createdAt,
    updatedAt: createdAt,
    status: row.status,
    source: { kind: "contractRequest", id: row.id },
    readBy: ["tenant"],
    history: actionHistory(createdAt, row.tenant, `${row.requestType} created`, row.notes || "Contract request submitted.")
  });
}

function ensureActionFromComplaint(row) {
  const existing = findActionBySource("complaint", row.id);
  if (existing) return existing;
  const createdAt = row.createdAt || new Date().toISOString();
  return addActionItem({
    id: actionSourceId("complaint", row.id),
    type: "Complaint",
    title: `${row.tenant} complaint`,
    description: row.description,
    tenant: row.tenant,
    unit: row.unit,
    property: row.property,
    createdAt,
    updatedAt: createdAt,
    status: row.status,
    source: { kind: "complaint", id: row.id },
    readBy: ["tenant"],
    history: actionHistory(createdAt, row.tenant, "Complaint filed", row.description)
  });
}

function ensureActionFromSuggestion(row) {
  const existing = findActionBySource("suggestion", row.id);
  if (existing) return existing;
  const createdAt = row.createdAt || new Date().toISOString();
  return addActionItem({
    id: actionSourceId("suggestion", row.id),
    type: "Suggestion",
    title: `${row.tenant} suggestion`,
    description: row.description,
    tenant: row.tenant,
    unit: row.unit,
    property: row.property,
    createdAt,
    updatedAt: createdAt,
    status: row.status,
    source: { kind: "suggestion", id: row.id },
    readBy: ["tenant"],
    history: actionHistory(createdAt, row.tenant, "Suggestion filed", row.description)
  });
}

function ensureActionCenterData({ persist = false } = {}) {
  let changed = ensureActionList();
  const before = state.data.actions.length;

  state.data.manager.chequeReviews.forEach((row) => ensureActionFromChequeReview(row));
  state.data.manager.maintenanceRequests.forEach((row) => ensureActionFromMaintenance(row));
  state.data.manager.renewals.forEach((row) => ensureActionFromRenewal(row));
  state.data.manager.notifications.forEach((row, index) => {
    const result = ensureActionFromNotification(row, index);
    changed = changed || result.changed;
  });
  state.data.manager.cashRequests.forEach((row) => ensureActionFromCashRequest(row));
  state.data.manager.contractRequests.forEach((row) => ensureActionFromContractRequest(row));
  state.data.manager.complaints.forEach((row) => ensureActionFromComplaint(row));
  state.data.manager.suggestions.forEach((row) => ensureActionFromSuggestion(row));

  changed = changed || state.data.actions.length !== before;
  if (changed && persist) saveData();
  return changed;
}

function actionItemById(id) {
  return (state.data.actions || []).find((item) => item.id === id);
}

function appendActionHistory(item, by, action, note) {
  item.history = Array.isArray(item.history) ? item.history : [];
  item.history.push({ at: new Date().toISOString(), by, action, note });
}

function restoreClearedNotifications(...ids) {
  const idSet = new Set(ids.filter(Boolean));
  if (!idSet.size) return;
  state.notificationClearedIds = (state.notificationClearedIds || []).filter((id) => !idSet.has(id));
}

function setActionStatus(item, status, byRole, action, note) {
  item.status = status;
  item.updatedAt = new Date().toISOString();
  item.updatedBy = byRole;
  item.readBy = [byRole];
  if (byRole === "manager") restoreClearedNotifications(item.id);
  appendActionHistory(item, byRole === "manager" ? "Property Management" : tenantProfile().name, action, note);
}

function markActionRead(item, role = state.role) {
  item.readBy = Array.isArray(item.readBy) ? item.readBy : [];
  if (!item.readBy.includes(role)) item.readBy.push(role);
  if (item.type === "Message" && role === "tenant") {
    item.status = "Read";
  }
  item.updatedAt = new Date().toISOString();
}

function isTenantAction(item) {
  const profile = tenantProfile();
  return item.tenant === profile.name && (!item.unit || item.unit === profile.unit);
}

function sourceRowForAction(item) {
  if (!item?.source) return null;
  if (item.source.kind === "chequeReview") {
    return state.data.manager.chequeReviews.find((row) => row.id === item.source.id);
  }
  if (item.source.kind === "maintenance") {
    return state.data.manager.maintenanceRequests.find((row) => row.id === item.source.id);
  }
  if (item.source.kind === "renewal") {
    return state.data.manager.renewals.find((row) => row.id === item.source.id);
  }
  if (item.source.kind === "notification") {
    return state.data.manager.notifications.find((row) => row.id === item.source.id);
  }
  if (item.source.kind === "cashRequest") {
    return state.data.manager.cashRequests.find((row) => row.id === item.source.id);
  }
  if (item.source.kind === "contractRequest") {
    return state.data.manager.contractRequests.find((row) => row.id === item.source.id);
  }
  if (item.source.kind === "complaint") {
    return state.data.manager.complaints.find((row) => row.id === item.source.id);
  }
  if (item.source.kind === "suggestion") {
    return state.data.manager.suggestions.find((row) => row.id === item.source.id);
  }
  return null;
}

function actionSourcePage(item) {
  const pages = {
    "Rent Payment": state.role === "tenant" ? "rent" : "chequeReview",
    "Cash Payment": state.role === "tenant" ? "rent" : "chequeReview",
    Maintenance: state.role === "tenant" ? "maintenance" : "maintenanceMgmt",
    "Contract Renewal": state.role === "tenant" ? "renewal" : "renewalsMgmt",
    "Contract Cancellation": state.role === "tenant" ? "renewal" : "renewalsMgmt",
    "Contract Amendment": state.role === "tenant" ? "renewal" : "renewalsMgmt",
    "Contract Change": state.role === "tenant" ? "renewal" : "renewalsMgmt",
    Complaint: state.role === "tenant" ? "maintenance" : "notifications",
    Suggestion: state.role === "tenant" ? "maintenance" : "notifications",
    Message: state.role === "tenant" ? "actionCenter" : "notifications"
  };
  return pages[item.type] || "actionCenter";
}

function visibleActionItems() {
  ensureActionCenterData();
  const items = state.role === "tenant"
    ? state.data.actions.filter(isTenantAction)
    : [...state.data.actions];
  return items.filter((item) => !item.dismissedBy?.includes(state.role));
}

function roleCanActOnItem(item) {
  if (state.role === "tenant") return isTenantAction(item);
  return state.role === "manager";
}

function actionButtonsForItem(item) {
  if (!roleCanActOnItem(item)) return [];
  const status = item.status;

  if (state.role === "tenant") {
    const actions = [];
    if (item.type === "Rent Payment" || item.type === "Cash Payment") {
      actions.push({ label: status === "Rejected" || status === "Info Requested" ? "Pay rent" : "View rent", page: "rent", variant: status === "Rejected" || status === "Info Requested" ? "primary" : "secondary" });
    } else if (item.type === "Maintenance") {
      actions.push({ label: status === "Info Requested" ? "Add details" : "View request", page: "maintenance", variant: status === "Info Requested" ? "primary" : "secondary" });
    } else if (item.type.startsWith("Contract")) {
      actions.push({ label: "View contract", page: "renewal", variant: status === "Info Requested" ? "primary" : "secondary" });
    } else if (item.type === "Complaint" || item.type === "Suggestion") {
      actions.push({ label: "View request", page: "maintenance", variant: status === "Info Requested" ? "primary" : "secondary" });
    }
    if (!item.readBy?.includes("tenant")) {
      actions.push({ label: "Mark as read", command: "mark-read", variant: "ghost" });
    }
    return actions;
  }

  if (item.type === "Rent Payment") {
    if (["Pending", "Submitted", "In Review", "Info Requested"].includes(status)) {
      return [
        { label: "Approve", command: "approve-payment", variant: "success" },
        { label: "Reject", command: "reject-payment", variant: "danger" },
        { label: "Request info", command: "request-payment-info", variant: "secondary" }
      ];
    }
    return [{ label: "View review", page: "chequeReview", variant: "secondary" }];
  }

  if (item.type === "Cash Payment") {
    if (["Pending", "Submitted", "In Review", "Info Requested"].includes(status)) {
      return [
        { label: "Approve time", command: "approve-cash", variant: "success" },
        { label: "Reject time", command: "reject-cash", variant: "danger" },
        { label: "Request info", command: "request-cash-info", variant: "secondary" }
      ];
    }
    return [{ label: "View request", page: "chequeReview", variant: "secondary" }];
  }

  if (item.type === "Maintenance") {
    if (["New", "Submitted"].includes(status)) {
      return [
        { label: "Acknowledge", command: "ack-maintenance", variant: "primary" },
        { label: "Assign", command: "assign-maintenance", variant: "secondary" },
        { label: "Request info", command: "request-maintenance-info", variant: "ghost" }
      ];
    }
    if (["Acknowledged", "Assigned", "In Progress", "Info Requested"].includes(status)) {
      return [
        { label: "Schedule", command: "schedule-maintenance", variant: "secondary" },
        { label: "Mark resolved", command: "resolve-maintenance", variant: "success" },
        { label: "Request info", command: "request-maintenance-info", variant: "ghost" }
      ];
    }
    if (status === "Scheduled") {
      return [{ label: "Mark resolved", command: "resolve-maintenance", variant: "success" }];
    }
    return [{ label: "View request", page: "maintenanceMgmt", variant: "secondary" }];
  }

  if (item.type === "Contract Renewal") {
    if (["Pending", "Submitted", "In Review", "Info Requested"].includes(status)) {
      return [
        { label: "Approve", command: "approve-renewal", variant: "success" },
        { label: "Reject", command: "reject-renewal", variant: "danger" },
        { label: "Request info", command: "request-renewal-info", variant: "secondary" }
      ];
    }
    return [{ label: "View renewal", page: "renewalsMgmt", variant: "secondary" }];
  }

  if (item.type.startsWith("Contract")) {
    if (["Pending", "Submitted", "In Review", "Info Requested"].includes(status)) {
      return [
        { label: "Approve", command: "approve-contract", variant: "success" },
        { label: "Reject", command: "reject-contract", variant: "danger" },
        { label: "Request info", command: "request-contract-info", variant: "secondary" }
      ];
    }
    return [{ label: "View request", page: "renewalsMgmt", variant: "secondary" }];
  }

  if (item.type === "Complaint") {
    if (!["Completed", "Rejected"].includes(status)) {
      return [
        { label: "Acknowledge", command: "ack-complaint", variant: "primary" },
        { label: "Resolve", command: "resolve-complaint", variant: "success" },
        { label: "Reject", command: "reject-complaint", variant: "danger" }
      ];
    }
    return [{ label: "View complaint", page: "notifications", variant: "secondary" }];
  }

  if (item.type === "Suggestion") {
    if (!["Completed", "Rejected"].includes(status)) {
      return [
        { label: "Acknowledge", command: "ack-suggestion", variant: "primary" },
        { label: "Mark reviewed", command: "resolve-suggestion", variant: "success" }
      ];
    }
    return [{ label: "View suggestion", page: "notifications", variant: "secondary" }];
  }

  if (!item.readBy?.includes("manager")) {
    return [{ label: "Mark as read", command: "mark-read", variant: "secondary" }];
  }
  return [];
}

function isDismissibleActionItem(item) {
  return roleCanActOnItem(item) && (state.role === "tenant" || item.type === "Message");
}

function actionNeedsAttention(item, role = state.role) {
  if (!item.readBy?.includes(role)) return true;
  return actionButtonsForItem(item).some((action) => action.command && action.command !== "mark-read");
}

function actionCenterCountForRole(role = state.role) {
  const previousRole = state.role;
  state.role = role;
  const count = visibleActionItems().filter((item) => actionNeedsAttention(item, role)).length;
  state.role = previousRole;
  return count;
}

function managementActionItemsNeedingAttention() {
  const previousRole = state.role;
  try {
    state.role = "manager";
    return visibleActionItems().filter((item) => actionNeedsAttention(item, "manager"));
  } finally {
    state.role = previousRole;
  }
}

function countItemsByType(items, matcher) {
  return items.filter(matcher).length;
}

function getManagementQueueSummary() {
  const attentionItems = managementActionItemsNeedingAttention();
  const pendingPayments = countItemsByType(attentionItems, (item) => item.type === "Rent Payment" || item.type === "Cash Payment");
  const openMaintenance = countItemsByType(attentionItems, (item) => item.type === "Maintenance");
  const pendingRenewals = countItemsByType(attentionItems, (item) => item.type.startsWith("Contract"));
  const complaintFollowups = countItemsByType(attentionItems, (item) => item.type === "Complaint");
  const suggestionFollowups = countItemsByType(attentionItems, (item) => item.type === "Suggestion");
  const messageFollowups = countItemsByType(attentionItems, (item) => item.type === "Message");
  const otherActionItems = Math.max(
    0,
    attentionItems.length - pendingPayments - openMaintenance - pendingRenewals - complaintFollowups - suggestionFollowups - messageFollowups
  );

  const categories = [
    {
      type: "payments",
      label: "Payments",
      singularLabel: "Payment",
      count: pendingPayments,
      page: "chequeReview",
      priority: 1,
      title: "Review payment proof",
      description: "Finance review",
      badgeStatus: "Pending",
      badgeLabel: "Needs Review"
    },
    {
      type: "maintenance",
      label: "Maintenance",
      singularLabel: "Maintenance",
      count: openMaintenance,
      page: "maintenanceMgmt",
      priority: 2,
      title: "Update maintenance status",
      description: "Status update needed",
      badgeStatus: "In Progress",
      badgeLabel: "Active"
    },
    {
      type: "renewals",
      label: "Renewals",
      singularLabel: "Renewal",
      count: pendingRenewals,
      page: "renewalsMgmt",
      priority: 3,
      title: "Review renewal requests",
      description: "Awaiting decision",
      badgeStatus: "Pending",
      badgeLabel: "Needs Decision"
    },
    {
      type: "complaints",
      label: "Complaints",
      singularLabel: "Complaint",
      count: complaintFollowups,
      page: "notifications",
      priority: 4,
      title: "Review complaints",
      description: "Review tenant complaint",
      badgeStatus: "Pending",
      badgeLabel: "Follow Up"
    },
    {
      type: "suggestions",
      label: "Suggestions",
      singularLabel: "Suggestion",
      count: suggestionFollowups,
      page: "notifications",
      priority: 5,
      title: "Review suggestions",
      description: "Review tenant suggestion",
      badgeStatus: "Pending",
      badgeLabel: "Follow Up"
    },
    {
      type: "messages",
      label: "Other updates",
      singularLabel: "Other update",
      count: messageFollowups + otherActionItems,
      page: "actionCenter",
      priority: 6,
      title: "Review remaining updates",
      description: "Open in Action Center",
      badgeStatus: "Submitted",
      badgeLabel: "Queue"
    }
  ];
  const activeCategories = categories
    .filter((category) => category.count > 0)
    .sort((a, b) => a.priority - b.priority);

  return {
    totalActions: attentionItems.length,
    categories: activeCategories,
    primaryAction: { label: "Open Action Center", icon: "bell", page: "actionCenter", variant: "primary" },
    secondaryAction: { label: "Track Rent", icon: "wallet", page: "rentTracking", variant: "secondary" }
  };
}

function percentValue(value) {
  return Number(String(value || "").replace(/[^\d.]/g, "")) || 0;
}

function getManagementDashboardSummary() {
  const data = state.data.manager;
  const rent = managerRentStats();
  const properties = data.properties || [];
  const portfolioSummary = getPortfolioSummary(properties);
  const maintenance = managerMaintenanceStats(data.maintenanceRequests);
  const renewals = managerRenewalStats(data.renewals);
  const documents = managerDocumentStats(data.documents);
  const finance = managerFinanceStats();
  const rentFollowUps = data.rentRows.filter((row) => row.status !== "Paid");
  const activeTenantCount = Math.max(portfolioSummary.occupiedUnits, data.tenants.length);

  return {
    tenants: {
      total: activeTenantCount,
      records: data.tenants.length,
      label: "From occupied units"
    },
    rent: {
      collectedAmount: rent.paidAmount,
      collectedCount: rent.paidRows.length,
      pendingAmount: rent.pendingAmount + rent.lateAmount,
      followUps: rentFollowUps,
      cycleLabel: "This cycle"
    },
    maintenance: {
      openCount: maintenance.openCount,
      byStatus: maintenance.byStatus
    },
    renewals: {
      pendingCount: renewals.pendingCount
    },
    portfolio: {
      totalProperties: portfolioSummary.totalProperties,
      totalUnits: portfolioSummary.totalUnits,
      occupiedUnits: portfolioSummary.occupiedUnits,
      vacantUnits: portfolioSummary.vacantUnits,
      totalAssetValue: portfolioSummary.totalAssetValue
    },
    documents: {
      pendingReviews: documents.pendingReviews
    },
    finance,
    updates: managerActivityItems()
  };
}

function filteredActionItems() {
  const search = state.filters.actionSearch.toLowerCase().trim();
  const status = state.filters.actionStatus;
  const type = state.filters.actionType;
  const sort = state.filters.actionSort;

  return visibleActionItems()
    .filter((item) => {
      const haystack = `${item.type} ${item.title} ${item.description} ${item.tenant} ${item.property} ${item.unit} ${item.status}`.toLowerCase();
      return (!search || haystack.includes(search)) &&
        (status === "All" || item.status === status) &&
        (type === "All" || item.type === type);
    })
    .sort((a, b) => {
      const aTime = new Date(a.updatedAt || a.createdAt).getTime();
      const bTime = new Date(b.updatedAt || b.createdAt).getTime();
      return sort === "Oldest" ? aTime - bTime : bTime - aTime;
    });
}

function actionFilterOptions(field, items) {
  const values = [...new Set(items.map((item) => item[field]).filter(Boolean))].sort();
  return ["All", ...values];
}

function updatePaymentReceiptDocuments() {
  const tenantReceipt = state.data.tenant.documents.find((doc) => doc.name === "Payment Receipts");
  if (tenantReceipt) {
    tenantReceipt.status = "Uploaded";
    tenantReceipt.lastUpdated = "12 Jun 2026";
  }

  const profile = tenantProfile();
  const managerReceipt = state.data.manager.documents.find((doc) =>
    doc.tenant === profile.name && doc.unit === profile.unit && doc.type === "Payment Receipt"
  );
  if (managerReceipt) {
    managerReceipt.status = "Approved";
    managerReceipt.lastUpdated = "12 Jun 2026";
  } else {
    state.data.manager.documents.unshift({
      id: nextId("d"),
      tenant: profile.name,
      unit: profile.unit,
      type: "Payment Receipt",
      status: "Approved",
      lastUpdated: "12 Jun 2026"
    });
  }
}

function nextReceiptNumber() {
  const yearMonth = "0626";
  const count = state.data.tenant.receipts.length + 1;
  return `REC-${yearMonth}-${String(count).padStart(2, "0")}`;
}

function upsertReceiptRecord({ receipt, month, amount, date, source }) {
  if (!receipt || !String(receipt).startsWith("REC")) return;
  const existing = state.data.tenant.receipts.find((item) => item.receipt === receipt);
  if (existing) {
    existing.status = "Available";
    return;
  }
  state.data.tenant.receipts.unshift({
    id: nextId("rec"),
    month,
    amount,
    receipt,
    date,
    status: "Available",
    source
  });
}

function tenantReceiptByReference(reference) {
  const value = String(reference || "").trim();
  if (!value) return null;
  return state.data.tenant.receipts.find((item) => item.id === value || item.receipt === value) || null;
}

function receiptSortTime(receipt) {
  const parsed = parseDemoDate(receipt?.date || receipt?.month);
  return parsed ? parsed.getTime() : 0;
}

function latestTenantReceipt() {
  return [...state.data.tenant.receipts].sort((a, b) => receiptSortTime(b) - receiptSortTime(a))[0] || null;
}

function tenantReceiptForPreview(reference = "") {
  const summary = tenantRentSummary();
  const currentReceipt = summary.isPaid ? tenantReceiptByReference(summary.receipt) : null;
  const receipt = tenantReceiptByReference(reference) || currentReceipt || latestTenantReceipt();
  if (receipt) return receipt;
  if (!summary.isPaid) return null;

  return {
    id: "current-receipt",
    month: summary.rent.month,
    amount: summary.rent.amount,
    receipt: summary.receipt,
    date: summary.rent.dueDate,
    status: "Available",
    source: summary.payment?.type || "Demo payment"
  };
}

function markTenantRentPaid({ receipt = "REC-DEMO-0626", source = "Demo payment" } = {}) {
  const profile = tenantProfile();
  const rent = currentTenantRent();
  const paymentStatus = source === "Demo payment" ? "Submitted" : "Approved";
  setTenantCurrentRentStatus("Paid", receipt);
  setManagerRentStatus(profile.name, profile.unit, "Paid");

  const payment = currentTenantPaymentSubmission();
  if (payment) {
    payment.type = source;
    payment.status = paymentStatus;
    payment.submittedOn = "12 Jun 2026";
    payment.bank = source === "Card payment" ? "Demo Card" : payment.bank;
  } else {
    state.data.tenant.paymentSubmissions.unshift({
      type: source,
      amount: rent.amount,
      dueDate: rent.dueDate,
      status: paymentStatus,
      submittedOn: "12 Jun 2026",
      chequeNumber: "DEMO-PAY-0626",
      bank: "Demo Gateway"
    });
  }

  let review = state.data.manager.chequeReviews.find((row) =>
    row.tenant === profile.name && row.unit === profile.unit && row.amount === rent.amount && row.dueDate === rent.dueDate
  );
  if (!review) {
    review = {
      id: nextId("c"),
      tenant: profile.name,
      unit: profile.unit,
      chequeNumber: "DEMO-PAY-0626",
      bank: "Demo Gateway",
      amount: rent.amount,
      dueDate: rent.dueDate,
      status: "Pending",
      notes: "Demo payment recorded from tenant portal. Verify before closing."
    };
    state.data.manager.chequeReviews.unshift(review);
  }
  if (review) {
    review.status = source === "Demo payment" ? "Pending" : "Approved";
    review.notes = source === "Demo payment" ? "Demo payment recorded from tenant portal. Verify before closing." : review.notes;
    const action = ensureActionFromChequeReview(review);
    if (source === "Demo payment") {
      setActionStatus(action, "Pending", "tenant", "Rent marked paid", `${rent.amount} marked paid from tenant portal.`);
    }
  }

  updatePaymentReceiptDocuments();
  upsertReceiptRecord({ receipt, month: rent.month, amount: rent.amount, date: rent.dueDate, source });
  recordTenantActivity("Rent paid", `${rent.amount} recorded for ${rent.month}.`);
}

function upsertManagerRenewalRequest() {
  const profile = tenantProfile();
  const createdAt = new Date().toISOString();
  const existing = state.data.manager.renewals.find((row) =>
    row.tenant === profile.name &&
    row.unit === profile.unit &&
    isActiveRepeatableRequest(row)
  );
  if (existing) {
    existing.status = "Pending";
    existing.updatedAt = createdAt;
    if (!existing.createdAt) existing.createdAt = createdAt;
    return existing;
  }

  const renewal = {
    id: nextId("n"),
    tenant: profile.name,
    unit: profile.unit,
    property: profile.property,
    endDate: profile.contractEnd,
    currentRent: profile.rent,
    status: "Pending",
    startDate: profile.contractStart,
    createdAt,
    updatedAt: createdAt
  };
  state.data.manager.renewals.unshift(renewal);
  return renewal;
}

function syncTenantPaymentStatus(review) {
  const profile = tenantProfile();
  const nextRentStatus = review.status === "Approved" ? "Paid" : "Pending";
  setManagerRentStatus(review.tenant, review.unit, nextRentStatus);
  if (review.tenant !== profile.name || review.unit !== profile.unit) return;

  const payment = state.data.tenant.paymentSubmissions.find((row) =>
    row.chequeNumber === review.chequeNumber ||
    (row.amount === review.amount && row.dueDate === review.dueDate)
  );
  if (payment) {
    payment.status = review.status;
  }

  if (review.status === "Approved") {
    markTenantRentPaid({ receipt: "REC-0626", source: "Manager approval" });
  } else if (review.status === "Rejected") {
    setTenantCurrentRentStatus("Pending", "Awaiting payment");
    recordTenantActivity("Payment proof rejected", "Submit updated payment details.");
  }
}

function syncTenantMaintenanceStatus(request) {
  const profile = tenantProfile();
  if (request.tenant !== profile.name || request.unit !== profile.unit) return;

  const tenantRequest = state.data.tenant.maintenanceRequests.find((row) =>
    row.date === request.date && (row.category === request.issue || row.issue.includes(request.issue))
  );
  if (tenantRequest) {
    tenantRequest.status = request.status;
  }
}

function syncTenantRenewalStatus(renewal) {
  const profile = tenantProfile();
  if (renewal.tenant !== profile.name || renewal.unit !== profile.unit) return;
  profile.renewalStatus = renewal.status;
  if (renewal.status === "Approved" || renewal.status === "Rejected") {
    state.confirmations.renewal = true;
  }
}

function syncTenantCashRequestStatus(request) {
  const profile = tenantProfile();
  if (request.tenant !== profile.name || request.unit !== profile.unit) return;
  const tenantRequest = state.data.tenant.cashRequests.find((row) => row.id === request.id);
  if (tenantRequest) {
    tenantRequest.status = request.status;
    tenantRequest.decisionNote = request.decisionNote || "";
  }
  recordTenantActivity("Cash payment updated", `Cash visit ${request.status.toLowerCase()}.`);
}

function syncTenantContractRequestStatus(request) {
  const profile = tenantProfile();
  if (request.tenant !== profile.name || request.unit !== profile.unit) return;
  const tenantRequest = state.data.tenant.contractRequests.find((row) => row.id === request.id);
  if (tenantRequest) {
    tenantRequest.status = request.status;
    tenantRequest.decisionNote = request.decisionNote || "";
    tenantRequest.updatedAt = request.updatedAt || new Date().toISOString();
  }
  if (request.requestType === "Contract Renewal") {
    profile.renewalStatus = request.status;
  }
  recordTenantActivity("Contract request updated", `${request.requestType} ${request.status.toLowerCase()}.`);
}

function contractRequestDisplayName(requestType) {
  const labels = {
    "Contract Cancellation": "Cancel Contract",
    "Contract Amendment": "Amendment",
    "Contract Change": "Amendment",
    "Contract Renewal": "Renewal"
  };
  return labels[requestType] || String(requestType || "Contract").replace(/^Contract\s+/i, "");
}

function contractRequestSubmittedTitle(requestType) {
  const name = contractRequestDisplayName(requestType);
  return `${name} Request Submitted`;
}

function contractRequestSortTime(row) {
  const date = new Date(row?.updatedAt || row?.createdAt || "");
  return Number.isNaN(date.getTime()) ? 0 : date.getTime();
}

function tenantContractRequestHistory(profile = tenantProfile()) {
  const renewalRequests = state.data.manager.renewals
    .filter((row) => row.tenant === profile.name && row.unit === profile.unit)
    .filter((row) => row.createdAt || row.updatedAt || row.status !== "Pending" || profile.renewalStatus !== "Pending")
    .map((row) => {
      const requestedAt = row.createdAt || row.updatedAt || demoDateIso(row.endDate, "09:30");
      return {
        id: `renewal-${row.id}`,
        requestType: "Contract Renewal",
        details: `Contract renewal requested for ${row.endDate}.`,
        status: row.status || profile.renewalStatus || "Submitted",
        notes: row.decisionNote || (["Approved", "Rejected"].includes(row.status) ? `Renewal request ${row.status.toLowerCase()}.` : "Awaiting management review"),
        createdAt: requestedAt,
        updatedAt: row.updatedAt || requestedAt,
        summaryStatus: row.status === "Pending" ? "Submitted" : row.status || profile.renewalStatus || "Submitted"
      };
    });

  const contractRequests = state.data.tenant.contractRequests
    .filter((row) => (!row.tenant || row.tenant === profile.name) && (!row.unit || row.unit === profile.unit))
    .map((row) => ({
      id: row.id,
      requestType: row.requestType,
      details: row.notes || `${row.requestType} requested from tenant portal.`,
      status: row.status || "Pending",
      notes: row.decisionNote || "Awaiting management review",
      createdAt: row.createdAt || row.updatedAt || new Date().toISOString(),
      updatedAt: row.updatedAt || row.createdAt || ""
    }));

  return [...renewalRequests, ...contractRequests].sort((a, b) => contractRequestSortTime(b) - contractRequestSortTime(a));
}

function contractRequestHistoryRows(items) {
  return items.map((row) => `
    <tr>
      <td>${escapeHtml(contractRequestDisplayName(row.requestType))}</td>
      <td>${escapeHtml(row.details)}</td>
      <td>${escapeHtml(formatActionDate(row.createdAt))}</td>
      <td>${badge(row.status)}</td>
      <td>${escapeHtml(row.notes)}</td>
    </tr>
  `);
}

function contractRequestSummaryStatus(request, fallbackStatus = "Pending") {
  if (!request) return fallbackStatus;

  const status = request.summaryStatus || request.status || fallbackStatus;
  const inReviewStatuses = ["Pending", "Submitted"];
  const requestedLabels = {
    "Contract Cancellation": "Cancellation Requested",
    "Contract Amendment": "Amendment Requested",
    "Contract Change": "Amendment Requested",
    "Contract Renewal": "Renewal Requested"
  };
  const nounLabels = {
    "Contract Cancellation": "Cancellation",
    "Contract Amendment": "Amendment",
    "Contract Change": "Amendment",
    "Contract Renewal": "Renewal"
  };

  if (inReviewStatuses.includes(status)) return requestedLabels[request.requestType] || status;
  if (["Approved", "Rejected"].includes(status)) {
    const noun = nounLabels[request.requestType] || contractRequestDisplayName(request.requestType);
    return `${noun} ${status}`;
  }

  return status;
}

function activeTenantRenewalRequest(profile) {
  const renewal = state.data.manager.renewals.find((row) => row.tenant === profile.name && row.unit === profile.unit);
  const hasTenantInitiatedRenewal = Boolean(renewal?.createdAt || state.confirmations.renewal || profile.renewalStatus !== "Pending");
  if (renewal?.status === "Pending" && !hasTenantInitiatedRenewal) return null;
  if (!renewal && profile.renewalStatus === "Pending" && !state.confirmations.renewal) return null;
  return {
    requestType: "Contract Renewal",
    status: renewal?.status || profile.renewalStatus || "Submitted",
    createdAt: renewal?.createdAt || "",
    updatedAt: renewal?.updatedAt || "",
    summaryStatus: profile.renewalStatus === "Pending" ? "Submitted" : profile.renewalStatus
  };
}

function latestTenantContractRequest(profile) {
  return tenantContractRequestHistory(profile)[0] || null;
}

function requestTimelineStatuses(request) {
  const status = request?.status || "Pending";
  const finalStatus = ["Approved", "Rejected"].includes(status) ? status : "Pending";
  const reviewStatus = finalStatus !== "Pending"
    ? "Completed"
    : status === "Info Requested"
      ? "Info Requested"
      : "In Review";

  return {
    submitted: "Submitted",
    review: reviewStatus,
    decision: finalStatus
  };
}

function syncTenantComplaintStatus(complaint) {
  const profile = tenantProfile();
  if (complaint.tenant !== profile.name || complaint.unit !== profile.unit) return;
  const tenantComplaint = state.data.tenant.complaints.find((row) => row.id === complaint.id);
  if (tenantComplaint) tenantComplaint.status = complaint.status;
  recordTenantActivity("Complaint updated", `Complaint ${complaint.status.toLowerCase()}.`);
}

function syncTenantSuggestionStatus(suggestion) {
  const profile = tenantProfile();
  if (suggestion.tenant !== profile.name || suggestion.unit !== profile.unit) return;
  const tenantSuggestion = state.data.tenant.suggestions.find((row) => row.id === suggestion.id);
  if (tenantSuggestion) tenantSuggestion.status = suggestion.status;
  recordTenantActivity("Suggestion updated", `Suggestion ${suggestion.status.toLowerCase()}.`);
}

function addNotification(tenant, type, message) {
  const notification = {
    id: nextId("msg"),
    tenant,
    type,
    message,
    date: "12 Jun 2026",
    status: "Sent"
  };
  state.data.manager.notifications.unshift(notification);
  return notification;
}

function downloadDemoDocument(title, owner) {
  const safeTitle = String(title || "Document").replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "document";
  const body = [
    "EstateFlow Demo Document",
    `Document: ${title || "Document"}`,
    `Owner: ${owner || "Demo tenant"}`,
    "This static MVP does not include live document storage."
  ].join("\n");
  const blob = new Blob([body], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeTitle}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadDemoReceipt(reference) {
  const receipt = tenantReceiptForPreview(reference);
  const profile = tenantProfile();
  const rent = currentTenantRent();
  const receiptNumber = receipt?.receipt || reference || "Receipt";
  const safeTitle = String(receiptNumber).replace(/[^a-z0-9]+/gi, "-").replace(/^-|-$/g, "").toLowerCase() || "receipt";
  const body = [
    "EstateFlow Demo Receipt",
    `Receipt: ${receiptNumber}`,
    `Tenant: ${profile.name}`,
    `Property: ${profile.property}`,
    `Unit: ${profile.unit}`,
    `Cycle: ${receipt?.month || rent.month}`,
    `Amount: ${receipt?.amount || rent.amount}`,
    `Payment date: ${receipt?.date || rent.dueDate}`,
    `Payment method: ${receipt?.source || currentTenantPaymentSubmission()?.type || "Demo payment"}`,
    "Status: Paid",
    "This static MVP does not include live receipt storage."
  ].join("\n");
  const blob = new Blob([body], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${safeTitle}.txt`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function tenantReceiptDownloadRows() {
  const rowsByReceipt = new Map();
  state.data.tenant.rentHistory.forEach((row) => {
    if (row.status === "Paid" && String(row.receipt || "").startsWith("REC")) {
      rowsByReceipt.set(row.receipt, {
        receipt: row.receipt,
        month: row.month,
        amount: row.amount,
        date: row.dueDate,
        status: "Available",
        source: "Rent history"
      });
    }
  });
  state.data.tenant.receipts.forEach((receipt) => {
    if (String(receipt.receipt || "").startsWith("REC")) {
      rowsByReceipt.set(receipt.receipt, {
        ...rowsByReceipt.get(receipt.receipt),
        ...receipt
      });
    }
  });
  return [...rowsByReceipt.values()].sort((a, b) => receiptSortTime(b) - receiptSortTime(a));
}

function downloadTenantReceipts() {
  const receipts = tenantReceiptDownloadRows();
  if (!receipts.length) return false;
  const header = ["Receipt", "Month", "Amount", "Payment date", "Status", "Source"];
  const bodyRows = receipts.map((receipt) => [
    receipt.receipt,
    receipt.month,
    receipt.amount,
    receipt.date,
    receipt.status || "Available",
    receipt.source || "Demo payment"
  ]);
  const csv = [header, ...bodyRows].map((row) => row.map(csvCell).join(",")).join("\n");
  const filename = `tenant-receipts-${new Date().toISOString().slice(0, 10)}.csv`;
  downloadBlob(new Blob([csv], { type: "text/csv" }), filename);
  return true;
}

function app() {
  let root = document.querySelector("#app");
  if (!root) {
    root = document.createElement("div");
    root.id = "app";
    document.body.prepend(root);
  }
  return root;
}

function modalRoot() {
  let root = document.querySelector("#modal-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "modal-root";
    document.body.appendChild(root);
  }
  return root;
}

function toastRoot() {
  let root = document.querySelector("#toast-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "toast-root";
    root.setAttribute("aria-live", "polite");
    root.setAttribute("aria-atomic", "true");
    document.body.appendChild(root);
  }
  return root;
}

function askAINotchRoot() {
  let root = document.querySelector("#ask-ai-notch-root");
  if (!root) {
    root = document.createElement("div");
    root.id = "ask-ai-notch-root";
    document.body.appendChild(root);
  }
  return root;
}

function ensureAskAINudgeState() {
  if (!state.askAI.nudge) {
    state.askAI.nudge = defaultAskAINudgeState();
  }
  return state.askAI.nudge;
}

function prefersReducedAskAIMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches === true;
}

function askAINudgeDelay() {
  const { minIntervalMs, maxIntervalMs } = ASK_AI_NUDGE_CONFIG;
  return Math.round(minIntervalMs + Math.random() * (maxIntervalMs - minIntervalMs));
}

function getAskAIPageType(route = state.page) {
  const value = String(route || "").toLowerCase();
  if (value.includes("action")) return "action-center";
  if (value === "rent" || value.includes("renttracking")) return "rent";
  if (value.includes("cheque") || value.includes("payment")) return "payment-review";
  if (value.includes("maintenance")) return "maintenance";
  if (value.includes("complaint")) return "complaints";
  if (value.includes("renewal") || value.includes("contract")) return "contracts";
  if (value.includes("tenant")) return "tenant-management";
  if (value.includes("financial") || value.includes("finance")) return "finance";
  if (value.includes("portfolio")) return "portfolio";
  if (value.includes("document") || value.includes("docs")) return "documents";
  if (value.includes("dashboard")) return "dashboard";
  return "general";
}

function getAskAIContext(options = {}) {
  const role = options.role || state.role || state.selectedRole || "tenant";
  const route = options.route || state.page || "dashboard";
  const pageType = getAskAIPageType(route);
  const pageMetaCopy = pageMeta[role]?.[route] || ["Dashboard", ""];
  const context = {
    role,
    route,
    pageType,
    pageTitle: options.pageTitle || pageMetaCopy[0],
    relevantCounts: {},
    urgentItems: [],
    suggestedCapabilities: [],
    primaryAction: null
  };

  if (!state.auth) return context;

  if (role === "tenant" && state.data.tenant) {
    const profile = tenantProfile();
    const rent = tenantRentSummary();
    const maintenanceOpenCount = state.data.tenant.maintenanceRequests.filter(isActiveRepeatableRequest).length;
    const contractDaysRemaining = daysUntilDate(profile.contractEnd);
    const latestContractRequest = latestTenantContractRequest(profile);
    const actionCount = actionCenterCountForRole("tenant");
    context.rent = {
      urgency: rent.dashboardState?.urgency || "healthy",
      daysUntilDue: rent.dashboardState?.daysUntilDue,
      status: rent.status,
      isPaid: rent.isPaid
    };
    context.contract = {
      daysRemaining: contractDaysRemaining,
      renewalSoon: contractDaysRemaining >= 0 && contractDaysRemaining <= 60,
      hasRequest: Boolean(latestContractRequest),
      status: latestContractRequest?.status || profile.renewalStatus
    };
    context.maintenance = {
      openCount: maintenanceOpenCount,
      status: activeTenantMaintenance()?.status || "Completed"
    };
    context.actions = { count: actionCount };
    context.relevantCounts = {
      actions: actionCount,
      maintenance: maintenanceOpenCount
    };
    if (context.rent.urgency === "overdue") context.urgentItems.push("rent-overdue");
    if (context.rent.urgency === "dueSoon") context.urgentItems.push("rent-due-soon");
    if (actionCount > 0) context.urgentItems.push("tenant-actions");
    return context;
  }

  if (role === "manager" && state.data.manager) {
    const queue = getManagementQueueSummary();
    const rent = managerRentStats();
    const payments = managerPaymentReviewStats();
    const maintenance = managerMaintenanceStats();
    const renewals = managerRenewalStats();
    const documents = managerDocumentStats();
    context.queue = queue;
    context.rent = {
      pendingFollowUps: rent.pendingRows.length + rent.lateRows.length,
      lateCount: rent.lateRows.length,
      pendingCount: rent.pendingRows.length
    };
    context.payments = { pendingCount: payments.pendingCount };
    context.maintenance = { openCount: maintenance.openCount };
    context.renewals = { pendingCount: renewals.pendingCount };
    context.documents = { pendingReviews: documents.pendingReviews };
    context.relevantCounts = {
      actions: queue.totalActions,
      rent: context.rent.pendingFollowUps,
      payments: payments.pendingCount,
      maintenance: maintenance.openCount,
      renewals: renewals.pendingCount,
      documents: documents.pendingReviews
    };
    if (queue.totalActions > 0) context.urgentItems.push("management-actions");
  }

  return context;
}

function askAINudgeMessageApplies(message, context) {
  if (!message?.condition) return true;
  try {
    return Boolean(message.condition(context));
  } catch {
    return false;
  }
}

function askAINudgeMessageCount(message, context) {
  if (typeof message.count !== "function") return context.relevantCounts?.actions || 0;
  const count = Number(message.count(context));
  return Number.isFinite(count) ? count : 0;
}

function hydrateAskAINudgeMessage(message, context) {
  const count = askAINudgeMessageCount(message, context);
  const text = String(message.text || "Ask AI can help.").replace(/\{count\}/g, String(count)).trim();
  return {
    id: message.id || `ask-ai-nudge-${askAINudgePromptCursor}`,
    text,
    intent: message.intent || "general_help",
    actionLabel: message.actionLabel || "",
    actionTarget: message.actionTarget || "",
    suggestedPrompt: message.suggestedPrompt || "Help me with this page.",
    priority: message.priority || "normal",
    context
  };
}

function askAINudgeRoleMessages(context) {
  return ASK_AI_NUDGE_MESSAGES[context.role] || ASK_AI_NUDGE_MESSAGES.tenant;
}

function askAINudgeCandidates(context) {
  const roleMessages = askAINudgeRoleMessages(context);
  const roleGroups = Object.entries(roleMessages).filter(([group]) => group !== "general");
  const urgent = roleGroups
    .flatMap(([, messages]) => messages)
    .filter((message) => message.priority === "urgent" && askAINudgeMessageApplies(message, context));
  const pageSpecific = [
    ...(roleMessages[context.pageType] || []),
    ...(context.pageType !== "dashboard" && context.route === "dashboard" ? roleMessages.dashboard || [] : [])
  ].filter((message) => askAINudgeMessageApplies(message, context));
  const roleGeneral = (roleMessages.general || []).filter((message) => askAINudgeMessageApplies(message, context));
  const general = ASK_AI_GENERAL_NUDGE_MESSAGES.filter((message) => askAINudgeMessageApplies(message, context));

  if (urgent.length) return urgent.map((message) => hydrateAskAINudgeMessage(message, context));
  if (Math.random() < 0.3 && general.length) return general.map((message) => hydrateAskAINudgeMessage(message, context));
  const contextual = [...pageSpecific, ...roleGeneral];
  return (contextual.length ? contextual : general).map((message) => hydrateAskAINudgeMessage(message, context));
}

function selectAskAINudgeMessage(candidates, nudge = ensureAskAINudgeState()) {
  const pool = candidates.length
    ? candidates
    : [{ id: "general_fallback", text: "Want help with this page?", intent: "general_help", suggestedPrompt: "Help me with this page.", context: getAskAIContext() }];
  const recentIds = nudge.recentlyShownIds || [];
  const freshPool = pool.filter((message) => !recentIds.includes(message.id));
  const usablePool = freshPool.length ? freshPool : pool.filter((message) => message.id !== recentIds[0]);
  const finalPool = usablePool.length ? usablePool : pool;
  const message = finalPool[askAINudgePromptCursor % finalPool.length] || finalPool[0];
  askAINudgePromptCursor += 1;
  return message;
}

function getAskAINotchMessage(context = getAskAIContext()) {
  return selectAskAINudgeMessage(askAINudgeCandidates(context));
}

function applyAskAINudgeMessage(nudge, message) {
  nudge.id = message.id;
  nudge.message = message.text;
  nudge.intent = message.intent;
  nudge.suggestedPrompt = message.suggestedPrompt;
  nudge.actionTarget = message.actionTarget;
  nudge.context = message.context;
  nudge.lastShownAt = Date.now();
  nudge.recentlyShownIds = [message.id, ...(nudge.recentlyShownIds || []).filter((id) => id !== message.id)].slice(0, 3);
}

function clearAskAINudgeTimers() {
  if (askAINudgeTimer) {
    window.clearTimeout(askAINudgeTimer);
    askAINudgeTimer = 0;
  }
  if (askAINudgeAutoTimer) {
    window.clearTimeout(askAINudgeAutoTimer);
    askAINudgeAutoTimer = 0;
  }
  if (askAINudgeRevealTimer) {
    window.clearTimeout(askAINudgeRevealTimer);
    askAINudgeRevealTimer = 0;
  }
}

function beginAskAINudgeReveal() {
  const nudge = ensureAskAINudgeState();
  if (!nudge.isVisible) return;
  if (askAINudgeRevealTimer) {
    window.clearTimeout(askAINudgeRevealTimer);
    askAINudgeRevealTimer = 0;
  }
  nudge.phase = prefersReducedAskAIMotion() ? "visible" : "entering";
  syncAskAINotchLauncher();
  if (nudge.phase === "visible") return;
  askAINudgeRevealTimer = window.setTimeout(() => {
    askAINudgeRevealTimer = 0;
    const currentNudge = ensureAskAINudgeState();
    if (!currentNudge.isVisible || currentNudge.phase !== "entering") return;
    currentNudge.phase = "visible";
    syncAskAINotchLauncher();
  }, 180);
}

function clearAskAINudge(options = {}) {
  const { schedule = true, setCooldown = false } = options;
  const nudge = ensureAskAINudgeState();
  clearAskAINudgeTimers();
  if (setCooldown) nudge.dismissedAt = Date.now();
  nudge.isVisible = false;
  nudge.id = "";
  nudge.message = "";
  nudge.intent = "";
  nudge.suggestedPrompt = "";
  nudge.actionTarget = "";
  nudge.context = null;
  nudge.startedAt = null;
  nudge.durationMs = ASK_AI_NUDGE_CONFIG.visibleDurationMs;
  nudge.phase = "idle";
  syncAskAINotchLauncher();
  if (schedule) scheduleAskAINudge(setCooldown ? ASK_AI_NUDGE_CONFIG.dismissCooldownMs : askAINudgeDelay());
}

function dismissAskAINudge(options = {}) {
  const { manual = false } = options;
  const nudge = ensureAskAINudgeState();
  if (!nudge.isVisible) return;
  nudge.dismissedAt = Date.now();
  clearAskAINudge({ schedule: true, setCooldown: manual });
}

function isUserWorkingInField() {
  const activeElement = document.activeElement;
  if (!activeElement || activeElement === document.body) return false;
  return Boolean(activeElement.closest?.("input, textarea, select, form, [contenteditable='true']"));
}

function hasBlockingOverlayForAskAINudge() {
  return Boolean(
    state.modal ||
      state.notificationPanelOpen ||
      document.querySelector(".modal-backdrop, [role='menu'], [data-menu-open='true'], .toast-error, .toast-warning")
  );
}

function canShowAskAINudge() {
  const nudge = ensureAskAINudgeState();
  const now = Date.now();
  return Boolean(
    state.auth &&
      !state.askAI.isOpen &&
      !state.askAI.isExpanded &&
      state.askAI.activationState !== "activating" &&
      !isUserWorkingInField() &&
      !hasBlockingOverlayForAskAINudge() &&
      document.visibilityState === "visible" &&
      now - nudge.dismissedAt >= ASK_AI_NUDGE_CONFIG.dismissCooldownMs &&
      now - askAINudgeLastActivityAt >= 1200
  );
}

function scheduleAskAINudge(delayMs = askAINudgeDelay()) {
  clearAskAINudgeTimers();
  const nudge = ensureAskAINudgeState();
  if (!state.auth || state.askAI.isOpen || state.askAI.activationState === "activating") return;
  nudge.hasScheduled = true;
  askAINudgeTimer = window.setTimeout(showAskAINudge, delayMs);
}

function ensureAskAINudgeScheduler() {
  const nudge = ensureAskAINudgeState();
  if (!state.auth) {
    clearAskAINudgeTimers();
    nudge.hasScheduled = false;
    return;
  }
  if (nudge.isVisible || askAINudgeTimer || state.askAI.isOpen || state.askAI.activationState === "activating") return;
  scheduleAskAINudge(nudge.hasScheduled ? askAINudgeDelay() : ASK_AI_NUDGE_CONFIG.initialDelayMs);
}

function showAskAINudge() {
  askAINudgeTimer = 0;
  const nudge = ensureAskAINudgeState();
  if (!canShowAskAINudge()) {
    scheduleAskAINudge(ASK_AI_NUDGE_CONFIG.busyRetryMs);
    return;
  }

  nudge.isVisible = true;
  applyAskAINudgeMessage(nudge, getAskAINotchMessage(getAskAIContext()));
  nudge.startedAt = Date.now();
  nudge.durationMs = prefersReducedAskAIMotion() ? ASK_AI_NUDGE_CONFIG.visibleDurationMs : ASK_AI_NUDGE_CONFIG.visibleDurationMs;
  beginAskAINudgeReveal();
  askAINudgeAutoTimer = window.setTimeout(() => dismissAskAINudge({ manual: false }), nudge.durationMs);
}

function triggerAskAINudge() {
  if (!state.auth || state.askAI.isOpen || state.askAI.activationState === "activating") return;
  const nudge = ensureAskAINudgeState();
  clearAskAINudgeTimers();
  nudge.isVisible = true;
  applyAskAINudgeMessage(nudge, getAskAINotchMessage(getAskAIContext()));
  nudge.startedAt = Date.now();
  nudge.durationMs = ASK_AI_NUDGE_CONFIG.visibleDurationMs;
  nudge.hasScheduled = true;
  beginAskAINudgeReveal();
  askAINudgeAutoTimer = window.setTimeout(() => dismissAskAINudge({ manual: false }), nudge.durationMs);
}

function markAskAINudgeActivity() {
  askAINudgeLastActivityAt = Date.now();
}

function syncAskAINotchHoverState() {
  const shell = document.querySelector("#ask-ai-notch-shell");
  if (!shell) return;
  const target = document.elementFromPoint?.(askAINotchPointer.x, askAINotchPointer.y);
  shell.dataset.hover = target?.closest?.("#ask-ai-notch-shell") ? "true" : "false";
}

function syncAskAINotchLauncher() {
  const root = askAINotchRoot();
  if (!state.auth) {
    clearAskAINudgeTimers();
    root.innerHTML = "";
    delete document.body.dataset.askAiNotchState;
    return;
  }

  let shell = root.querySelector("#ask-ai-notch-shell");
  let button = root.querySelector("#ask-ai-notch");
  if (!shell || !button) {
    root.innerHTML = renderAskAINotchLauncher();
    shell = root.querySelector("#ask-ai-notch-shell");
    button = root.querySelector("#ask-ai-notch");
  }

  const closeButton = root.querySelector("[data-action='dismiss-ask-ai-nudge']");
  const messageLabel = root.querySelector(".ask-ai-notch-launcher__label--message");
  const nudge = ensureAskAINudgeState();
  const isActive = state.askAI.isOpen || state.askAI.activationState === "activating";
  const displayState = isActive ? "active" : nudge.isVisible ? "nudge" : "idle";
  document.body.dataset.askAiNotchState = displayState;
  if (shell) {
    shell.dataset.state = displayState;
    shell.dataset.nudgePhase = nudge.phase || "idle";
  }
  button.dataset.state = displayState;
  button.dataset.nudgePhase = nudge.phase || "idle";
  button.setAttribute("aria-expanded", state.askAI.isOpen ? "true" : "false");
  button.setAttribute("aria-label", nudge.isVisible ? `Open Ask AI: ${nudge.message}` : "Open Ask AI");
  if (messageLabel) {
    messageLabel.textContent = nudge.message || "";
    messageLabel.removeAttribute("title");
  }
  if (closeButton) {
    closeButton.hidden = !nudge.isVisible;
    closeButton.style.setProperty("--ask-ai-nudge-duration", `${nudge.durationMs}ms`);
  }
  syncAskAINotchHoverState();
}

function storedTheme() {
  try {
    return localStorage.getItem("estateflow-theme") === "dark" ? "dark" : "light";
  } catch {
    return "light";
  }
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.style.colorScheme = state.theme;
}

function saveTheme() {
  try {
    localStorage.setItem("estateflow-theme", state.theme);
  } catch {
    // Demo can continue even if browser storage is unavailable.
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function statusKey(status) {
  return String(status || "neutral")
    .trim()
    .replaceAll(" / ", " ")
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, letter) => letter.toUpperCase())
    .replace(/^[A-Z]/, (letter) => letter.toLowerCase()) || "neutral";
}

function statusSlug(status) {
  return String(status || "neutral").toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-");
}

function statusVariant(status) {
  return STATUS_VARIANT_MAP[statusKey(status)] || STATUS_VARIANT_MAP[statusSlug(status)] || "neutral";
}

function statusClass(status) {
  return `${statusSlug(status)} status-${statusVariant(status)}`;
}

function parseDemoDate(value) {
  const monthIndex = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11
  };
  const match = String(value || "").match(/^(\d{1,2}) ([A-Z][a-z]{2}) (\d{4})$/);
  if (match && monthIndex[match[2]] !== undefined) {
    return new Date(Number(match[3]), monthIndex[match[2]], Number(match[1]));
  }
  const fallback = new Date(value);
  return Number.isNaN(fallback.getTime()) ? null : fallback;
}

function daysUntilDate(value, now = new Date()) {
  const target = parseDemoDate(value);
  if (!target) return Number.POSITIVE_INFINITY;
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const end = new Date(target.getFullYear(), target.getMonth(), target.getDate());
  return Math.ceil((end.getTime() - today.getTime()) / 86400000);
}

function contractHealthClass(endDate) {
  const daysRemaining = daysUntilDate(endDate);
  if (daysRemaining < 0) return "contract-critical";
  if (daysRemaining <= 30) return "contract-warning";
  return "contract-safe";
}

function paymentHealthClass(summary) {
  return summary.dashboardState?.metricClass || "";
}

function statusLabel(status) {
  return STATUS_LABELS[status] || status;
}

function actionStatusLabel(status) {
  const labels = {
    Pending: "Pending Review",
    Submitted: "Pending Review",
    New: "New Request",
    "Info Requested": "Needs Info"
  };
  return labels[status] || statusLabel(status);
}

function actionTitleState(status) {
  const states = {
    Pending: "sent",
    Submitted: "sent",
    New: "sent",
    Sent: "sent",
    Read: "sent",
    "In Review": "under review",
    "Info Requested": "needs more information",
    Acknowledged: "acknowledged",
    Assigned: "assigned",
    "In Progress": "in progress",
    Scheduled: "scheduled",
    Approved: "approved",
    Rejected: "rejected",
    Completed: "completed",
    Canceled: "canceled"
  };
  return states[status] || String(status || "").toLowerCase();
}

function sentenceText(value) {
  const text = String(value || "").trim();
  if (!text) return "";
  return text.endsWith(".") ? text : `${text}.`;
}

function maintenanceRequestLabel(item) {
  const source = sourceRowForAction(item);
  const rawSubject = String(source?.issue || item.title || "Maintenance").replace(/\s+request$/i, "").trim();
  const subject = rawSubject || "Maintenance";
  const categorySubjects = ["ac", "plumbing", "electrical", "cleaning", "general"];
  if (categorySubjects.includes(subject.toLowerCase())) {
    return `${subject} maintenance request`;
  }
  return `${subject} request`;
}

function actionStatusDescription(item) {
  const status = item.status;
  if (status === "Info Requested") return "More details are needed before this can continue.";
  if (status === "In Review") return "The company is reviewing this item.";
  if (["Acknowledged", "Assigned", "In Progress"].includes(status)) return "The company is working on this request.";
  if (status === "Scheduled") return "A visit has been scheduled.";
  if (status === "Approved") return "This item has been approved.";
  if (status === "Rejected") return "This item was rejected.";
  if (status === "Completed") return "This item is complete.";
  if (status === "Canceled") return "This item was canceled.";
  return state.role === "tenant" ? "Your request is waiting for company review." : "Ready for company review.";
}

function messageActionPresentation(item) {
  const source = sourceRowForAction(item);
  const sourceType = String(source?.type || item.title || "Message").toLowerCase();
  const message = String(source?.message || item.description || "");

  if (sourceType.includes("maintenance")) {
    return {
      title: "Maintenance request update sent",
      description: message.toLowerCase().includes("assigned")
        ? "Your maintenance request has been assigned for review."
        : sentenceText(message || "The company sent an update about your request.")
    };
  }

  if (sourceType.includes("late payment")) {
    return {
      title: "Rent reminder sent",
      description: sentenceText(message || "Rent proof reminder has been sent.")
    };
  }

  if (sourceType.includes("contract")) {
    return {
      title: "Contract reminder sent",
      description: sentenceText(message || "The company sent a contract update.")
    };
  }

  return {
    title: `${source?.type || "Message"} sent`,
    description: sentenceText(message || item.description || "The company sent an update.")
  };
}

function actionCardPresentation(item) {
  const stateLabel = actionTitleState(item.status);

  if (item.type === "Message") return messageActionPresentation(item);

  if (item.type === "Maintenance") {
    return {
      title: `${maintenanceRequestLabel(item)} ${stateLabel}`,
      description: actionStatusDescription(item)
    };
  }

  if (item.type === "Rent Payment") {
    const descriptions = {
      Approved: "Payment has been verified.",
      Rejected: "Payment proof needs correction.",
      "Info Requested": "More payment details are needed.",
      Pending: "The company has received the payment update.",
      Submitted: "The company has received the payment update."
    };
    return {
      title: `Payment confirmation ${stateLabel}`,
      description: descriptions[item.status] || "The company has received the payment update."
    };
  }

  if (item.type === "Cash Payment") {
    return {
      title: `Cash payment request ${stateLabel}`,
      description: actionStatusDescription(item)
    };
  }

  if (String(item.type || "").startsWith("Contract")) {
    return {
      title: `${item.type} request ${stateLabel}`,
      description: actionStatusDescription(item)
    };
  }

  if (item.type === "Complaint") {
    return {
      title: item.status === "Completed" ? "Complaint resolved" : `Complaint ${item.status === "Rejected" ? "rejected" : "submitted"}`,
      description: item.status === "Completed" ? "The complaint has been resolved." : "The company is reviewing your complaint."
    };
  }

  if (item.type === "Suggestion") {
    return {
      title: item.status === "Completed" ? "Suggestion reviewed" : `Suggestion ${item.status === "Rejected" ? "rejected" : "submitted"}`,
      description: item.status === "Completed" ? "The suggestion has been reviewed." : "The company is reviewing your suggestion."
    };
  }

  return {
    title: item.title || item.type || "Action item",
    description: sentenceText(item.description || actionStatusDescription(item))
  };
}

function badge(status, label = statusLabel(status)) {
  const variant = statusVariant(status);
  return `<span class="status ${statusClass(status)}" data-status="${escapeHtml(statusSlug(status))}" data-status-variant="${escapeHtml(variant)}">${escapeHtml(label)}</span>`;
}

function badgeSlot(status, label) {
  return `<span class="status-slot">${badge(status, label)}</span>`;
}

function detailBadge(status, label) {
  return `<strong class="detail-status-only">${badge(status, label)}</strong>`;
}

function brand(options = {}) {
  const content = `
    <span class="brand-mark">${icon.building}</span>
    <span>EstateFlow</span>
  `;

  if (options.clickable) {
    return `
      <button class="brand brand-button" type="button" data-page="dashboard" aria-label="Go to dashboard">
        ${content}
      </button>
    `;
  }

  return `
    <div class="brand">
      ${content}
    </div>
  `;
}

function navIcon(name) {
  return `<span class="nav-icon">${icon[name] || icon.file}</span>`;
}

function navBadge(item) {
  if (item.id === "actionCenter") {
    const count = actionCenterCountForRole();
    return count ? `<span class="nav-count">${count}</span>` : "";
  }

  const notificationCount = notificationCountForPage(item.id);
  return notificationCount ? `<span class="nav-notification-dot" aria-hidden="true"></span>` : "";
}

function buttonIcon(name) {
  return `<span class="button-icon">${icon[name] || ""}</span>`;
}

function askAIIcon() {
  return `
    <svg class="ask-ai-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2.9c.45 3.58 2.42 5.76 6.1 6.72-3.68.96-5.65 3.14-6.1 6.72-.45-3.58-2.42-5.76-6.1-6.72 3.68-.96 5.65-3.14 6.1-6.72Z" fill="currentColor"/>
      <path d="M18.8 14.2c.22 1.66 1.18 2.62 2.8 2.96-1.62.34-2.58 1.3-2.8 2.96-.22-1.66-1.18-2.62-2.8-2.96 1.62-.34 2.58-1.3 2.8-2.96ZM5.2 4.6c.15 1.06.78 1.69 1.84 1.84-1.06.15-1.69.78-1.84 1.84-.15-1.06-.78-1.69-1.84-1.84 1.06-.15 1.69-.78 1.84-1.84Z" fill="currentColor" opacity=".58"/>
    </svg>
  `;
}

function askAICopy() {
  const contextPrompt = state.askAI.contextPrompt;
  if (state.role === "manager") {
    const suggestions = ["What needs action today?", "Show rent follow-ups.", "Which maintenance requests are open?", "What renewals need review?", "Summarize portfolio status."];
    return {
      helper: "Ask about actions, rent, tenants, maintenance, renewals, documents, or portfolio status.",
      placeholder: "Ask AI about today's operations...",
      suggestions: contextPrompt ? [contextPrompt, ...suggestions.filter((prompt) => prompt !== contextPrompt)] : suggestions
    };
  }

  const suggestions = ["How do I pay rent?", "Where is my receipt?", "How do I request maintenance?", "How do I view my contract?", "What needs my attention?"];
  return {
    helper: "Ask about rent, receipts, contracts, maintenance, requests, or documents.",
    placeholder: "Ask AI about your rent or requests...",
    suggestions: contextPrompt ? [contextPrompt, ...suggestions.filter((prompt) => prompt !== contextPrompt)] : suggestions
  };
}

function renderAskAIMessage(message) {
  const isUser = message.role === "user";
  return `
    <div class="ask-ai-message ${isUser ? "user" : "assistant"}">
      <span class="ask-ai-message-role">${isUser ? "You" : "Ask AI"}</span>
      <p>${escapeHtml(message.content)}</p>
    </div>
  `;
}

function renderAskAITypingMessage() {
  return `<div class="ask-ai-message assistant typing"><span class="ask-ai-message-role">Ask AI</span><p><span></span><span></span><span></span></p></div>`;
}

function renderAskAISuggestionButton(prompt) {
  return `<button type="button" data-action="ask-ai-suggestion" data-prompt="${escapeHtml(prompt)}">${escapeHtml(prompt)}</button>`;
}

function renderAskAISessionItem(session) {
  const active = session.id === state.askAI.activeSessionId;
  return `
    <button class="ask-ai-session-item ${active ? "active" : ""}" type="button" data-action="select-ask-ai-session" data-id="${escapeHtml(session.id)}" aria-current="${active ? "true" : "false"}">
      <span>${escapeHtml(session.title || askAIChatTitle(session.messages))}</span>
    </button>
  `;
}

function renderAskAIComposer({ placeholder, hasInput, clearDisabled, askAIState, isWorkspace = false }) {
  const composerClass = classNames("ask-ai-form", isWorkspace && "ask-ai-workspace-form", "ask-ai-composer");
  return `
    <div class="ask-ai-composer-shell ${isWorkspace ? "workspace" : "panel"}">
      <form class="${composerClass}" data-form="ask-ai">
        <button class="ask-ai-composer-control ask-ai-attach" type="button" aria-label="Add context">${icon.plus}</button>
        <label class="sr-only" for="ask-ai-input">Ask AI about this dashboard</label>
        <textarea
          id="ask-ai-input"
          name="message"
          rows="1"
          data-ask-ai-input
          placeholder="${escapeHtml(placeholder)}"
          ${askAIState.isTyping ? "disabled" : ""}
        >${escapeHtml(askAIState.inputValue)}</textarea>
        <div class="ask-ai-composer-trailing">
          <button class="ask-ai-composer-control ask-ai-mic" type="button" aria-label="Voice input">${icon.mic}</button>
          <button class="ask-ai-send" type="submit" aria-label="Send Ask AI message" ${!hasInput || askAIState.isTyping ? "disabled" : ""}>${icon.waveform}</button>
        </div>
      </form>
      <button class="ask-ai-clear" type="button" data-action="clear-ask-ai" ${clearDisabled ? "disabled" : ""}>Clear chat</button>
    </div>
  `;
}

function renderAskAIWorkspace({ helper, placeholder, suggestions, hasInput, clearDisabled }) {
  const askAIState = state.askAI;
  const activeSession = activeAskAISession();
  const filteredSessions = filteredAskAISessions();
  const recentSessions = filteredSessions.filter((session) => session.messages.some((message) => message.role === "user" && message.content));
  const sessionItems = recentSessions.length
    ? recentSessions.map(renderAskAISessionItem).join("")
    : `<div class="ask-ai-session-empty">${askAIState.search.trim() ? "No chats found." : "No recent chats yet."}</div>`;
  const title = activeSession?.title || "New chat";
  const hasMessages = askAIState.messages.length > 0;
  const messageContent = hasMessages
    ? askAIState.messages.map(renderAskAIMessage).join("")
    : `
      <section class="ask-ai-workspace-empty">
        <h3>Where should we begin?</h3>
        <p>${escapeHtml(helper)}</p>
        <div class="ask-ai-empty-prompts" aria-label="Suggested Ask AI prompts">
          ${suggestions.map(renderAskAISuggestionButton).join("")}
        </div>
      </section>
    `;

  return `
    <aside id="ask-ai-panel" class="ask-ai-panel expanded ask-ai-workspace" role="dialog" aria-modal="true" aria-label="Expanded Ask AI chat workspace">
      <div class="ask-ai-workspace-sidebar">
        <div class="ask-ai-workspace-brand">
          <h3>Ask AI</h3>
        </div>
        <div class="ask-ai-workspace-menu" aria-label="Ask AI actions">
          <button class="ask-ai-menu-item ask-ai-new-chat" type="button" data-action="ask-ai-new-chat">${icon.compose}<span>New chat</span></button>
          <label class="ask-ai-menu-item ask-ai-chat-search" for="ask-ai-session-search">
            <span class="sr-only">Search chats</span>
            ${icon.search}
            <input id="ask-ai-session-search" type="search" value="${escapeHtml(askAIState.search)}" data-ask-ai-session-search placeholder="Search chats" autocomplete="off" />
          </label>
        </div>
        <div class="ask-ai-session-heading">Recents</div>
        <div class="ask-ai-session-list" role="list" aria-label="Previous Ask AI chats">
          ${sessionItems}
        </div>
      </div>
      <div class="ask-ai-workspace-main">
        <header class="ask-ai-workspace-header">
          <div>
            <h3>${escapeHtml(title)}</h3>
          </div>
          <div class="ask-ai-panel-actions">
            <button class="ask-ai-control ask-ai-close" type="button" data-action="close-ask-ai" aria-label="Close Ask AI">${icon.close}</button>
          </div>
        </header>
        <div class="ask-ai-messages ask-ai-workspace-messages ${hasMessages ? "" : "empty"}" aria-live="polite">
          ${messageContent}
          ${askAIState.isTyping ? renderAskAITypingMessage() : ""}
          ${askAIState.error ? `<div class="ask-ai-error" role="alert">${escapeHtml(askAIState.error)}</div>` : ""}
        </div>
        ${renderAskAIComposer({ placeholder, hasInput, clearDisabled, askAIState, isWorkspace: true })}
      </div>
    </aside>
  `;
}

function renderAskAINotchLauncher() {
  const askAIState = state.askAI;
  const isActive = askAIState.isOpen || askAIState.activationState === "activating";
  const nudge = ensureAskAINudgeState();
  const displayState = isActive ? "active" : nudge.isVisible ? "nudge" : "idle";
  const messageLabel = nudge.message || "";
  return `
    <div id="ask-ai-notch-shell" class="ask-ai-notch-shell" data-state="${displayState}" data-nudge-phase="${nudge.phase || "idle"}">
      <button
        id="ask-ai-notch"
        class="ask-ai-notch-launcher"
        type="button"
        data-action="toggle-ask-ai"
        data-state="${displayState}"
        data-nudge-phase="${nudge.phase || "idle"}"
        aria-label="${nudge.isVisible ? `Open Ask AI: ${escapeHtml(messageLabel)}` : "Open Ask AI"}"
        aria-expanded="${askAIState.isOpen ? "true" : "false"}"
        aria-controls="ask-ai-panel"
      >
        <span class="ask-ai-notch-launcher__glow" aria-hidden="true"></span>
        <span class="ask-ai-notch-launcher__content">
          <span class="ask-ai-notch-launcher__icon">${askAIIcon()}</span>
          <span class="ask-ai-notch-label-stack">
            <span class="ask-ai-notch-launcher__label ask-ai-notch-launcher__label--rest" aria-hidden="${nudge.isVisible ? "true" : "false"}">Ask AI</span>
            <span class="ask-ai-notch-launcher__label ask-ai-notch-launcher__label--message" aria-live="polite">${escapeHtml(messageLabel)}</span>
          </span>
        </span>
      </button>
      <button
        class="ask-ai-nudge-close"
        type="button"
        data-action="dismiss-ask-ai-nudge"
        aria-label="Dismiss Ask AI suggestion"
        style="--ask-ai-nudge-duration: ${nudge.durationMs}ms"
        ${nudge.isVisible ? "" : "hidden"}
      >
        ${icon.close}
      </button>
    </div>
  `;
}

function renderAskAIPanel() {
  const askAIState = state.askAI;
  if (!askAIState.isOpen) return "";
  if (!askAIState.sessions.length) ensureAskAIMessages();
  const { helper, placeholder, suggestions } = askAICopy();
  const hasInput = askAIState.inputValue.trim().length > 0;
  const clearDisabled = askAIState.messages.length === 0 && !askAIState.inputValue.trim();
  return renderAskAIWorkspace({ helper, placeholder, suggestions, hasInput, clearDisabled });
}

function classNames(...parts) {
  return parts.flat().filter(Boolean).join(" ");
}

function extraAttributes(attributes = {}) {
  return Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== false)
    .map(([key, value]) => value === true ? key : `${key}="${escapeHtml(value)}"`)
    .join(" ");
}

function renderButton({
  label,
  variant = "secondary",
  size = "",
  iconName = "",
  className = "",
  type = "button",
  page = "",
  modal = "",
  action = "",
  id = "",
  tenant = "",
  command = "",
  form = "",
  disabled = false,
  loading = false,
  ariaLabel = "",
  attrs = {}
}) {
  const classes = classNames("button", variant, size, className, loading && "is-loading");
  const attributes = {
    type,
    ...(page ? { "data-page": page } : {}),
    ...(modal ? { "data-modal": modal } : {}),
    ...(action ? { "data-action": action } : {}),
    ...(id ? { "data-id": id } : {}),
    ...(tenant ? { "data-tenant": tenant } : {}),
    ...(command ? { "data-command": command } : {}),
    ...(form ? { form } : {}),
    ...(disabled ? { disabled: true, "aria-disabled": "true" } : {}),
    ...(loading ? { "aria-busy": "true" } : {}),
    ...(ariaLabel ? { "aria-label": ariaLabel } : {}),
    ...attrs
  };

  return `<button class="${classes}" ${extraAttributes(attributes)}>${iconName ? buttonIcon(iconName) : ""}<span>${escapeHtml(label)}</span></button>`;
}

function renderSectionHeader({ eyebrow = "", title, description = "", action = "", count = "" }) {
  return `
    <div class="section-header">
      <div>
        ${eyebrow ? `<span class="dashboard-section-label">${escapeHtml(eyebrow)}</span>` : ""}
        <h2>${escapeHtml(title)}</h2>
        ${description ? `<p>${escapeHtml(description)}</p>` : ""}
      </div>
      ${count ? `<span class="badge-count">${escapeHtml(count)}</span>` : ""}
      ${action}
    </div>
  `;
}

function renderEmptyState({ title = "No records found", description = "Try a different filter.", action = "" } = {}) {
  return `
    <div class="empty-state">
      <strong>${escapeHtml(title)}</strong>
      <span>${escapeHtml(description)}</span>
      ${action ? `<div class="empty-state-actions">${action}</div>` : ""}
    </div>
  `;
}

function renderLoadingState(label = "Loading dashboard data") {
  return `
    <div class="loading-state" aria-label="${escapeHtml(label)}" aria-busy="true">
      <span class="skeleton-line wide"></span>
      <span class="skeleton-line"></span>
      <span class="skeleton-line short"></span>
    </div>
  `;
}

function renderMetadataGrid(items = [], className = "metadata-grid") {
  const rows = items.filter((item) => String(item?.value || "").trim());
  if (!rows.length) return "";
  return `
    <div class="${escapeHtml(className)}">
      ${rows.map((row) => `<span><strong>${escapeHtml(row.label)}</strong>${escapeHtml(row.value)}</span>`).join("")}
    </div>
  `;
}

function renderActivityItem(item) {
  return `
    <li class="activity-item">
      <span class="activity-dot"></span>
      <div>
        <strong>${escapeHtml(item.title)}</strong>
        <span>${escapeHtml(item.detail || item.description || "")}</span>
      </div>
      <span>${escapeHtml(item.time || item.date || "")}</span>
    </li>
  `;
}

function renderProgressBar({ label, value, width = value } = {}) {
  return `
    <div class="bar-row">
      <div class="bar-label"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>
      <div class="bar-track"><div class="bar-fill" style="width: ${Math.max(0, Math.min(Number(width) || 0, 100))}%"></div></div>
    </div>
  `;
}

function renderNotificationCard({ title, description, status, unread = false, metadata = [], actions = "", dismissible = false, id = "", history = "" } = {}) {
  const dismissButton = dismissible && id
    ? `<button class="action-dismiss" type="button" data-action="action-center" data-command="dismiss-card" data-id="${escapeHtml(id)}" aria-label="Dismiss update">${icon.close}</button>`
    : "";
  return `
    <article class="action-center-item ${unread ? "unread" : ""}" ${id ? `data-item-id="${escapeHtml(id)}"` : ""}>
      <div class="action-card-topline">
        <div class="action-state-row">
          ${badge(status, actionStatusLabel(status))}
          ${unread ? `<span class="unread-dot">Unread</span>` : ""}
        </div>
        ${dismissButton}
      </div>
      <div class="action-item-main">
        <h3 class="action-item-title">${escapeHtml(title)}</h3>
        ${description ? `<p>${escapeHtml(description)}</p>` : ""}
      </div>
      ${renderMetadataGrid(metadata, "action-meta-grid")}
      ${history}
      <div class="action-center-actions">
        ${actions || `<span class="action-muted">No action needed</span>`}
      </div>
    </article>
  `;
}

function metricActionLabel(targetPage) {
  const labels = {
    actionCenter: "Open actions",
    rent: "View rent",
    maintenance: "Open request",
    renewal: "View renewal",
    documents: "View files",
    tenants: "View tenants",
    rentTracking: "Track rent",
    chequeReview: "Review payments",
    maintenanceMgmt: "Open queue",
    renewalsMgmt: "Review renewals",
    docsMgmt: "View docs",
    notifications: "Send update",
    financial: "Open finance",
    portfolio: "View portfolio"
  };
  return labels[targetPage] || "Open";
}

function renderAvatar(profile, modifier = "") {
  const classes = ["avatar"];
  if (profile.photo) classes.push("avatar-photo");
  if (modifier) classes.push(modifier);

  return profile.photo
    ? `<span class="${classes.join(" ")}"><img src="${escapeHtml(profile.photo)}" alt="${escapeHtml(profile.name)} profile image" /></span>`
    : `<span class="${classes.join(" ")}">${escapeHtml(profile.initials)}</span>`;
}

function metricIcon(name) {
  return `<span class="metric-icon">${icon[name] || icon.chart}</span>`;
}

function roleLabel() {
  return state.role === "tenant" ? "Tenant" : "Property Management";
}

function profileForRole() {
  return state.role === "tenant" ? state.data.tenant.profile : state.data.manager.profile;
}

function pageContext() {
  if (state.role === "tenant") {
    const profile = state.data.tenant.profile;
    return [
      `Unit ${profile.unit}`,
      profile.property,
      `Contract ${profile.contractEnd}`
    ];
  }

  const portfolio = getPortfolioSummary();
  return [`${portfolio.totalProperties} properties`, `${portfolio.totalUnits} units`, formatAed(portfolio.totalAssetValue, { compact: true })];
}

function isRentNotification(row) {
  const text = `${row?.type || ""} ${row?.message || ""}`.toLowerCase();
  return text.includes("rent") || text.includes("payment");
}

function notificationItems() {
  const clearedIds = new Set(state.notificationClearedIds || []);
  const rows = state.data.manager.notifications
    .filter(isRentNotification)
    .filter((row) => !clearedIds.has(row.id));
  const scopedRows = state.role === "tenant"
    ? rows.filter((row) => row.tenant === tenantProfile().name)
    : rows;

  const rentItems = scopedRows.map((row) => ({
    id: row.id,
    title: row.type || "Rent notification",
    detail: state.role === "tenant" ? row.message : `${row.tenant}: ${row.message}`,
    status: row.status || "Sent",
    page: state.role === "tenant" ? "rent" : "notifications"
  }));

  return state.role === "tenant"
    ? [...tenantActionNotificationItems(clearedIds), ...rentItems].sort((a, b) => (b.sortTime || 0) - (a.sortTime || 0))
    : rentItems;
}

function notificationCountForPage(page) {
  if (!page || page === "actionCenter") return 0;
  return notificationItems().filter((item) => item.page === page).length;
}

function tenantActionNotificationItems(clearedIds = new Set(state.notificationClearedIds || [])) {
  const profile = tenantProfile();
  return (state.data.actions || [])
    .filter((item) =>
      item.updatedBy === "manager" &&
      item.type !== "Message" &&
      item.tenant === profile.name &&
      (!item.unit || item.unit === profile.unit) &&
      !item.readBy?.includes("tenant") &&
      !clearedIds.has(item.id)
    )
    .map((item) => {
      const latestHistory = [...(item.history || [])].reverse().find((entry) => entry.by === "Property Management") || {};
      const status = item.status || "Updated";
      return {
        id: item.id,
        title: tenantActionNotificationTitle(item),
        detail: latestHistory.note || item.description || "Property Management updated your request.",
        status,
        page: actionSourcePage(item),
        recent: true,
        sortTime: Date.parse(item.updatedAt || item.createdAt || "") || 0
      };
    });
}

function tenantActionNotificationTitle(item) {
  const status = String(item.status || "updated").toLowerCase();
  if (item.type === "Contract Renewal") return `Renewal ${status}`;
  if (item.type === "Cash Payment") return `Cash payment ${status}`;
  if (item.type === "Rent Payment") return `Payment ${status}`;
  if (item.type === "Maintenance") return `Maintenance ${status}`;
  if (item.type === "Complaint") return `Complaint ${status}`;
  if (item.type === "Suggestion") return `Suggestion ${status}`;
  if (item.type?.startsWith("Contract")) return `${item.type} ${status}`;
  return `${item.title || "Request"} ${status}`;
}

function groupedNavItems() {
  return nav[state.role].reduce((groups, item) => {
    const group = item.group || "Navigation";
    if (!groups.some((entry) => entry.label === group)) {
      groups.push({ label: group, items: [] });
    }
    groups.find((entry) => entry.label === group).items.push(item);
    return groups;
  }, []);
}

function availablePages(role = state.role) {
  return [...nav[role].map((item) => item.id), ...utilityPages];
}

function isAskAIExpandedOverlayOpen() {
  return Boolean(state.auth && state.askAI.isOpen && state.askAI.isExpanded);
}

function syncAskAIScrollLock() {
  const locked = isAskAIExpandedOverlayOpen();
  const alreadyLocked = document.body.classList.contains("ask-ai-scroll-locked");

  if (locked && !alreadyLocked) {
    askAIScrollLockY = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    document.body.style.setProperty("--ask-ai-scroll-y", `-${askAIScrollLockY}px`);
    document.documentElement.classList.add("ask-ai-scroll-locked");
    document.body.classList.add("ask-ai-scroll-locked");
  } else if (!locked && alreadyLocked) {
    document.documentElement.classList.remove("ask-ai-scroll-locked");
    document.body.classList.remove("ask-ai-scroll-locked");
    document.body.style.removeProperty("--ask-ai-scroll-y");
    window.scrollTo({ top: askAIScrollLockY, left: 0 });
    askAIScrollLockY = 0;
  }
}

function render() {
  applyTheme();
  stopPortfolioMapMotion();

  if (!state.auth) {
    state.notificationPanelOpen = false;
    state.askAI.isOpen = false;
    state.askAI.isExpanded = false;
    clearAskAINudge({ schedule: false, setCooldown: false });
    syncAskAIScrollLock();
    app().innerHTML = renderLogin();
    modalRoot().innerHTML = "";
    syncAskAINotchLauncher();
    cleanupPortfolioLeafletMap();
    return;
  }

  const pages = availablePages();
  if (!pages.includes(state.page)) {
    state.page = "dashboard";
  }
  ensureActionCenterData();

  app().innerHTML = renderPortal();
  renderModal();
  syncAskAINotchLauncher();
  ensureAskAINudgeScheduler();
  syncAskAIScrollLock();
  runPostRenderEffects();
}

function renderAtTop() {
  render();
  window.scrollTo({ top: 0, left: 0 });
}

function renderPreservingScroll(options = {}) {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  const actionList = options.preserveActionListHeight ? document.querySelector(".action-center-list") : null;
  const actionListHeight = actionList ? actionList.offsetHeight : 0;

  render();

  if (actionListHeight) {
    const nextActionList = document.querySelector(".action-center-list");
    if (nextActionList) nextActionList.style.minHeight = `${actionListHeight}px`;
  }

  const restoreScroll = () => {
    if (options.anchorItemId && typeof options.anchorTop === "number") {
      const anchorCard = document.querySelector(`.action-center-item[data-item-id="${options.anchorItemId}"]`);
      if (anchorCard) {
        window.scrollBy({ top: anchorCard.getBoundingClientRect().top - options.anchorTop, left: 0 });
        return;
      }
    }
    const maxScrollY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    window.scrollTo({ top: Math.min(scrollY, maxScrollY), left: scrollX });
  };

  restoreScroll();
  window.requestAnimationFrame(restoreScroll);
}

function actionCardViewportAnchor(actionButton) {
  const card = actionButton.closest(".action-center-item");
  if (!card) return null;
  const sibling = card.nextElementSibling?.classList.contains("action-center-item")
    ? card.nextElementSibling
    : card.previousElementSibling?.classList.contains("action-center-item")
      ? card.previousElementSibling
      : null;
  return {
    anchorTop: card.getBoundingClientRect().top,
    anchorItemId: sibling?.dataset.itemId || ""
  };
}

function renderPreservingControl(control) {
  const id = control.id;
  const selectionStart = typeof control.selectionStart === "number" ? control.selectionStart : null;
  const selectionEnd = typeof control.selectionEnd === "number" ? control.selectionEnd : null;

  render();

  if (!id) return;
  const nextControl = document.getElementById(id);
  if (!nextControl) return;

  nextControl.focus({ preventScroll: true });
  if (selectionStart !== null && selectionEnd !== null && typeof nextControl.setSelectionRange === "function") {
    nextControl.setSelectionRange(selectionStart, selectionEnd);
  }
}

function runPostRenderEffects() {
  window.requestAnimationFrame(initializePortfolioLeafletMap);
}

function stopPortfolioMapMotion() {
  if (!portfolioLeafletMap) return;
  try {
    portfolioLeafletMap.stop?.();
    portfolioLeafletMap.closePopup?.();
  } catch (error) {
    // Leaflet can still be resolving a transition while the demo UI re-renders.
  }
}

function cleanupPortfolioLeafletMap() {
  if (!portfolioLeafletMap) return;
  stopPortfolioMapMotion();
  try {
    portfolioLeafletMap.remove();
  } catch (error) {
    // Treat cleanup as best-effort because the map container may already be gone.
  }
  portfolioLeafletMap = null;
  portfolioLeafletMarkerLayer = null;
}

function portfolioMapPoint(property) {
  const latitude = Number(property.latitude);
  const longitude = Number(property.longitude);
  if (!Number.isFinite(latitude) || !Number.isFinite(longitude)) return null;
  return [latitude, longitude];
}

function portfolioMarkerColor(property) {
  return PORTFOLIO_MAP_COLORS[statusVariant(property.status)] || PORTFOLIO_MAP_COLORS.neutral;
}

function updatePortfolioLeafletMarkers(properties) {
  if (!portfolioLeafletMap || !portfolioLeafletMarkerLayer || !window.L) return;
  portfolioLeafletMarkerLayer.clearLayers();
  const selectedId = state.filters.portfolioSelectedPropertyId;

  properties.forEach((property) => {
    const point = portfolioMapPoint(property);
    if (!point) return;
    const selected = property.id === selectedId;
    const color = portfolioMarkerColor(property);
    const marker = window.L.circleMarker(point, {
      radius: selected ? 9 : 7,
      color,
      fillColor: color,
      fillOpacity: selected ? 0.94 : 0.82,
      opacity: 0.95,
      weight: selected ? 3 : 2,
      className: selected ? "portfolio-leaflet-marker selected" : "portfolio-leaflet-marker"
    }).addTo(portfolioLeafletMarkerLayer);

    marker.bindPopup(`
      <strong>${escapeHtml(property.name)}</strong><br>
      ${escapeHtml(`${property.area}, ${property.city}`)}<br>
      ${escapeHtml(`${property.occupiedUnits} occupied · ${property.vacantUnits} vacant`)}
    `);
    marker.on("click", () => {
      state.filters.portfolioSelectedPropertyId = property.id;
      render();
    });
    if (selected) marker.openPopup();
  });
}

function fitPortfolioLeafletMap(properties) {
  if (!portfolioLeafletMap || !window.L) return;
  const selected = properties.find((property) => property.id === state.filters.portfolioSelectedPropertyId);
  const selectedPoint = selected ? portfolioMapPoint(selected) : null;
  const points = properties.map(portfolioMapPoint).filter(Boolean);

  if (selectedPoint) {
    portfolioLeafletMap.setView(selectedPoint, Math.max(portfolioLeafletMap.getZoom() || PORTFOLIO_MAP_DEFAULT_ZOOM, 11), { animate: false });
    return;
  }

  if (points.length > 1) {
    portfolioLeafletMap.fitBounds(window.L.latLngBounds(points), { padding: [34, 34], maxZoom: 11, animate: false });
    return;
  }

  if (points.length === 1) {
    portfolioLeafletMap.setView(points[0], 11, { animate: false });
    return;
  }

  portfolioLeafletMap.setView(PORTFOLIO_MAP_CENTER, PORTFOLIO_MAP_DEFAULT_ZOOM, { animate: false });
}

function initializePortfolioLeafletMap() {
  const container = document.getElementById("portfolioPropertyMap");
  if (!container) {
    cleanupPortfolioLeafletMap();
    return;
  }

  const shell = container.closest(".portfolio-map-shell");
  const fallback = shell?.querySelector("[data-portfolio-map-fallback]");
  if (!window.L) {
    shell?.classList.add("is-unavailable");
    if (fallback) {
      fallback.hidden = false;
      fallback.querySelector("strong").textContent = "Map library unavailable";
      fallback.querySelector("span").textContent = "Check your connection and reload to show OpenStreetMap.";
    }
    return;
  }

  if (portfolioLeafletMap && portfolioLeafletMap.getContainer() !== container) {
    cleanupPortfolioLeafletMap();
  }

  if (!portfolioLeafletMap) {
    portfolioLeafletMap = window.L.map(container, {
      zoomControl: true,
      attributionControl: true,
      scrollWheelZoom: false,
      zoomAnimation: false,
      fadeAnimation: false,
      markerZoomAnimation: false,
      inertia: false
    }).setView(PORTFOLIO_MAP_CENTER, PORTFOLIO_MAP_DEFAULT_ZOOM);
    window.L.tileLayer(PORTFOLIO_MAP_TILE_URL, {
      maxZoom: 19,
      attribution: PORTFOLIO_MAP_ATTRIBUTION
    }).addTo(portfolioLeafletMap);
    portfolioLeafletMarkerLayer = window.L.layerGroup().addTo(portfolioLeafletMap);
  }

  shell?.classList.remove("is-unavailable");
  shell?.classList.add("leaflet-ready");
  if (fallback) fallback.hidden = true;
  const properties = filteredPortfolioProperties();
  updatePortfolioLeafletMarkers(properties);
  fitPortfolioLeafletMap(properties);
  window.setTimeout(() => portfolioLeafletMap?.invalidateSize(), 80);
}

function scrollToPortfolioMapCard() {
  window.requestAnimationFrame(() => {
    document.getElementById("portfolio-map-card")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function historySnapshot() {
  return {
    app: "estateflow",
    auth: state.auth,
    selectedRole: state.selectedRole,
    role: state.role,
    page: state.page,
    modal: state.modal,
    filters: { ...state.filters }
  };
}

function replaceHistoryEntry() {
  window.history.replaceState(historySnapshot(), "", window.location.href);
}

function pushHistoryEntry() {
  window.history.pushState(historySnapshot(), "", window.location.href);
}

function navigateToPage(page) {
  const isSamePage = state.auth && state.page === page && !state.modal;
  state.page = page;
  state.modal = null;
  state.notificationPanelOpen = false;
  if (page === "dashboard" || page === "actionCenter") {
    ensureActionCenterData({ persist: true });
  }
  renderAtTop();

  if (isSamePage) {
    replaceHistoryEntry();
  } else {
    pushHistoryEntry();
  }
}

function restoreFromHistory(snapshot) {
  if (!snapshot || snapshot.app !== "estateflow") return;

  state.auth = Boolean(snapshot.auth);
  state.selectedRole = snapshot.selectedRole === "manager" ? "manager" : "tenant";
  state.role = snapshot.role === "manager" || snapshot.role === "tenant" ? snapshot.role : null;
  if (state.auth && !state.role) {
    state.role = state.selectedRole;
  }
  state.page = snapshot.page || "dashboard";
  state.modal = snapshot.modal || null;
  state.filters = {
    ...defaultFilters(),
    ...(snapshot.filters || {})
  };
  state.notificationPanelOpen = false;
  renderAtTop();
}

function closeModal({ replaceHistory = true } = {}) {
  state.modal = null;
  state.notificationPanelOpen = false;
  render();
  if (lastFocusedElement && document.contains(lastFocusedElement)) {
    lastFocusedElement.focus({ preventScroll: true });
  }
  lastFocusedElement = null;
  if (replaceHistory) {
    replaceHistoryEntry();
  }
}

function trapModalFocus(event) {
  const modal = modalRoot().querySelector(".modal");
  if (!modal) return;
  const focusable = [...modal.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')]
    .filter((element) => !element.disabled && element.offsetParent !== null);
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
}

function renderLogin() {
  const tenantActive = state.selectedRole === "tenant" ? "active" : "";
  const managerActive = state.selectedRole === "manager" ? "active" : "";

  return `
    <main class="login-page">
      <div class="login-actions">
        ${renderThemeToggle()}
      </div>
      <section class="login-visual" aria-label="Premium residential property">
        <img src="assets/login-hero.jpg" alt="Premium residential lobby with modern property architecture" />
        <div class="login-copy">
          <div class="eyebrow">Property operations</div>
          <h1>Manage properties and tenants.</h1>
          <p>Track rent, renewals, maintenance, and documents in one portal.</p>
        </div>
      </section>
      <section class="login-panel">
        <form class="login-card" data-form="login">
          ${brand()}
          <h2>Welcome back</h2>
          <p>Select a role to continue.</p>
          <div class="role-selector" aria-label="Select portal role">
            <button class="role-option ${tenantActive}" type="button" data-role-option="tenant">Tenant</button>
            <button class="role-option ${managerActive}" type="button" data-role-option="manager">Property Management</button>
          </div>
          <div class="form-grid">
            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="email" value="${state.selectedRole === "tenant" ? "ahmed.khan@example.com" : "operations@nouraproperty.ae"}" autocomplete="email" />
            </div>
            <div class="field">
              <label for="password">Password</label>
              <input id="password" type="password" value="demo1234" autocomplete="current-password" />
            </div>
            <button class="button primary" type="submit">${buttonIcon("check")}Log in</button>
          </div>
          <div class="hint">Demo only. Any email and password work.</div>
        </form>
      </section>
    </main>
  `;
}

function renderThemeToggle() {
  const isDark = state.theme === "dark";
  const nextTheme = isDark ? "light" : "dark";
  return `
    <button class="theme-toggle" type="button" data-action="toggle-theme" aria-label="Switch to ${nextTheme} mode" aria-pressed="${isDark}">
      <span class="theme-toggle-icon">${isDark ? icon.moon : icon.sun}</span>
      <span>${isDark ? "Dark" : "Light"}</span>
    </button>
  `;
}

function renderNotificationPanel() {
  const items = notificationItems();
  const countLabel = `${items.length} ${items.length === 1 ? "notification" : "notifications"}`;
  const hasNotifications = items.length > 0;

  return `
    <div class="notifications-menu">
      <button class="notification-button ${state.notificationPanelOpen ? "active" : ""}" type="button" data-action="notify" aria-label="${state.notificationPanelOpen ? "Hide" : "Show"} notifications" aria-expanded="${state.notificationPanelOpen}" aria-controls="notification-panel">
        ${icon.bell}${hasNotifications ? `<span aria-hidden="true"></span>` : ""}
      </button>
      ${state.notificationPanelOpen
        ? `<section class="notification-panel" id="notification-panel" role="region" aria-label="Notifications">
            <div class="notification-panel-header">
              <div>
                <strong>Notifications</strong>
                <span>${escapeHtml(countLabel)}</span>
              </div>
              <button class="button secondary compact" type="button" data-action="clear-notifications" ${hasNotifications ? "" : "disabled"}>Clear all</button>
            </div>
            <div class="notification-list">
              ${hasNotifications
                ? items
                  .map(
                    (item) => `
                    <button class="notification-item ${item.recent ? "recent" : ""}" type="button" data-page="${escapeHtml(item.page)}" aria-label="Open notification for ${escapeHtml(item.title)}">
                      <span class="notification-item-copy">
                        <strong>${escapeHtml(item.title)}</strong>
                        <span>${escapeHtml(item.detail)}</span>
                      </span>
                      ${badgeSlot(item.status)}
                    </button>
                  `
                  )
                  .join("")
                : `<div class="notification-empty">
                    <strong>No new notifications.</strong>
                  </div>`}
            </div>
          </section>`
        : ""}
    </div>
  `;
}

function renderPortal() {
  const profile = profileForRole();
  const meta = pageMeta[state.role][state.page];
  const isDashboardPage = state.page === "dashboard";
  return `
    <div class="portal-layout">
      ${renderSidebar(profile)}
      <main class="main-area standard-main-area">
        <header class="topbar">
          <div class="topbar-copy">
            <p class="page-kicker">${state.role === "tenant" ? "Tenant Portal" : "Management Portal"}</p>
            <h1>${escapeHtml(meta[0])}</h1>
            ${meta[1] ? `<p>${escapeHtml(meta[1])}</p>` : ""}
          </div>
          <div class="top-actions">
            ${state.page !== "dashboard" ? `<button class="button secondary compact dashboard-return" type="button" data-page="dashboard">${buttonIcon("home")}Dashboard</button>` : ""}
            ${renderThemeToggle()}
            ${renderNotificationPanel()}
          </div>
        </header>
        ${renderScreenFocus()}
        ${renderRouteChips()}
        ${state.role === "tenant" ? renderTenantPage() : renderManagerPage()}
      </main>
      ${renderAskAIPanel()}
      ${renderMobileNav()}
    </div>
  `;
}

function renderSidebar(profile) {
  const label = roleLabel();
  return `
    <aside class="sidebar">
      <div class="sidebar-top">
        ${brand({ clickable: true })}
        <div class="sidebar-profile">
          ${renderAvatar(profile)}
          <div>
            <strong>${escapeHtml(profile.name)}</strong>
            <span>${state.role === "tenant" ? profile.property : profile.email}</span>
          </div>
        </div>
      </div>
      <nav class="sidebar-nav" aria-label="${label} navigation">
        ${groupedNavItems()
          .map(
            (group) => `
              <div class="nav-group">
                <div class="nav-group-label">${escapeHtml(group.label)}</div>
                ${group.items
                  .map(
                    (item) => `
                      <button class="nav-link ${state.page === item.id ? "active" : ""}" type="button" data-page="${item.id}" ${state.page === item.id ? 'aria-current="page"' : ""}>
                        ${navIcon(item.icon)}
                        <span>${escapeHtml(item.label)}</span>
                        ${navBadge(item)}
                      </button>
                    `
                  )
                  .join("")}
              </div>
            `
          )
          .join("")}
      </nav>
      <div class="sidebar-footer">
        <div class="sidebar-note">
          <strong>Demo data</strong>
          <span>No live records</span>
        </div>
        <div class="sidebar-actions">
          <button class="button secondary" type="button" data-action="trigger-ask-ai-nudge">${buttonIcon("bell")}AI notification trigger</button>
          <button class="button secondary" type="button" data-action="reset-data">${buttonIcon("refresh")}Reset data</button>
          <button class="button secondary" type="button" data-action="logout">${buttonIcon("close")}Logout</button>
          <button class="button secondary" type="button" data-action="open-ui-kit">${buttonIcon("file")}UI Kit</button>
        </div>
      </div>
    </aside>
  `;
}

function shortNavLabel(label) {
  const labels = {
    "Action Center": "Actions",
    "Maintenance": "Maintain",
    "Renewal": "Renewal",
    "Tenant Records": "Tenants",
    "Rent Tracking": "Rent",
    "Payment Review": "Review",
    "Maintenance": "Maintain",
    "Renewals": "Renewals",
    "Documents": "Docs",
    "Notifications": "Notify",
    "Finance": "Finance",
    "Portfolio": "Portfolio",
    "UI Kit": "UI Kit"
  };
  return labels[label] || label;
}

function primaryMobileNavItems() {
  const primaryIds = state.role === "tenant"
    ? ["dashboard", "actionCenter", "rent", "maintenance", "renewal"]
    : ["dashboard", "actionCenter", "tenants", "rentTracking", "maintenanceMgmt"];
  return nav[state.role].filter((item) => primaryIds.includes(item.id));
}

function secondaryMobileNavItems() {
  const primaryIds = new Set(primaryMobileNavItems().map((item) => item.id));
  return nav[state.role].filter((item) => !primaryIds.has(item.id));
}

function renderRouteChips() {
  const secondaryItems = secondaryMobileNavItems();
  if (!secondaryItems.length) return "";
  return `
    <nav class="route-chips" aria-label="More ${roleLabel()} destinations">
      ${secondaryItems
        .map(
          (item) => `
            <button class="route-chip ${state.page === item.id ? "active" : ""}" type="button" data-page="${item.id}" ${state.page === item.id ? 'aria-current="page"' : ""}>
              ${navIcon(item.icon)}
              <span>${escapeHtml(shortNavLabel(item.label))}</span>
              ${navBadge(item)}
            </button>
          `
        )
        .join("")}
    </nav>
  `;
}

function renderMobileNav() {
  const label = roleLabel();
  return `
    <nav class="mobile-nav" aria-label="${label} reachable navigation">
      ${primaryMobileNavItems()
        .map(
          (item) => `
            <button class="mobile-nav-link ${state.page === item.id ? "active" : ""}" type="button" data-page="${item.id}" ${state.page === item.id ? 'aria-current="page"' : ""}>
              ${navIcon(item.icon)}
              <span>${escapeHtml(shortNavLabel(item.label))}</span>
              ${navBadge(item)}
            </button>
      `
        )
        .join("")}
    </nav>
  `;
}

function actionAttrs(action) {
  const parts = ['type="button"'];
  if (action.page) parts.push(`data-page="${escapeHtml(action.page)}"`);
  if (action.modal) parts.push(`data-modal="${escapeHtml(action.modal)}"`);
  if (action.action) parts.push(`data-action="${escapeHtml(action.action)}"`);
  if (action.id) parts.push(`data-id="${escapeHtml(action.id)}"`);
  if (action.tenant) parts.push(`data-tenant="${escapeHtml(action.tenant)}"`);
  return parts.join(" ");
}

function renderActionButtons(actions = [], className = "focus-actions") {
  if (!actions.length) return "";
  return `
    <div class="${className}">
      ${actions.map((action) => renderButton({
        label: action.label,
        variant: action.variant || "secondary",
        iconName: action.icon,
        page: action.page,
        modal: action.modal,
        action: action.action,
        id: action.id,
        tenant: action.tenant,
        ariaLabel: action.ariaLabel || ""
      })).join("")}
    </div>
  `;
}

function renderFocusMetaItem(item) {
  if (typeof item === "string") return `<span>${escapeHtml(item)}</span>`;
  const label = item?.label || "";
  if (!label) return "";
  if (item.page) {
    return `<button type="button" data-page="${escapeHtml(item.page)}">${escapeHtml(label)}</button>`;
  }
  return `<span>${escapeHtml(label)}</span>`;
}

function pageFocus() {
  if (state.role === "tenant") {
    const profile = state.data.tenant.profile;
    const summary = tenantRentSummary();
    const maintenance = activeTenantMaintenance();
    const activeMaintenanceCount = state.data.tenant.maintenanceRequests.filter(isActiveRepeatableRequest).length;
    const documentStats = tenantDocumentStats();
    const actionCount = actionCenterCountForRole("tenant");
    const latestContractRequest = latestTenantContractRequest(profile);
    const contractSummaryStatus = contractRequestSummaryStatus(latestContractRequest, profile.renewalStatus || "Pending");
    const map = {
      dashboard: {
        eyebrow: "Next step",
        title: summary.title,
        body: summary.body,
        value: summary.dashboardState.urgencyLabel,
        meta: [summary.rent.amount, `Due ${summary.rent.dueDate}`, summary.dashboardState.workflowLabel],
        actions: [
          { ...summary.dashboardState.primaryAction, variant: "primary" },
          ...(summary.dashboardState.secondaryAction ? [{ ...summary.dashboardState.secondaryAction, variant: "secondary" }] : [])
        ]
      },
      actionCenter: {
        eyebrow: "Action Center",
        title: actionCount ? `${actionCount} items need attention` : "No open tenant actions",
        body: "",
        value: String(actionCount),
        valueLabel: actionCount === 1 ? "tenant action" : "tenant actions",
        valueClassName: "attention-count",
        className: "action-center-focus",
        meta: [],
        actions: [{ label: "View rent", icon: "wallet", page: "rent", variant: "secondary" }]
      },
      rent: {
        eyebrow: "Rent status",
        title: summary.dashboardState.title,
        body: summary.dashboardState.body,
        value: summary.outstanding,
        meta: [summary.dashboardState.urgencyLabel, summary.receipt],
        actions: summary.isPaid ? [] : [{ ...summary.dashboardState.primaryAction, variant: "primary" }]
      },
      maintenance: {
        eyebrow: "Maintenance",
        title: "Report the issue",
        body: "Add the category, priority, and a short note.",
        value: `${activeMaintenanceCount} ${activeMaintenanceCount === 1 ? "active" : "active"}`,
        meta: [maintenance ? `${maintenance.category || maintenance.issue} request ${String(maintenance.status || "").toLowerCase()}` : "No open requests", `${state.data.tenant.maintenanceRequests.length} total requests`],
        actions: []
      },
      renewal: {
        eyebrow: "Contract renewal",
        title: `Contract ends ${profile.contractEnd}`,
        body: "Request renewal when ready.",
        value: contractSummaryStatus,
        meta: [`Current rent ${profile.rent}`, `Unit ${profile.unit}`],
        actions: [{ label: "Request renewal", icon: "refresh", action: "request-renewal", variant: "primary", ariaLabel: "Request renewal from summary" }]
      },
      documents: {
        eyebrow: "Documents",
        title: "Tenancy files",
        body: "View contracts, ID, cheques, and receipts.",
        value: `${documentStats.total} ${documentStats.total === 1 ? "file" : "files"}`,
        meta: [`${documentStats.approved} approved`, `${documentStats.inReview} in review`],
        actions: []
      },
      uiKit: {
        eyebrow: "UI Kit",
        title: "Component Demo",
        body: "Generic examples for dashboard buttons, cards, forms, tables, and states.",
        value: "UI Kit",
        valueLabel: "Demo page",
        meta: ["Buttons", "Cards", "States"],
        actions: []
      }
    };
    return map[state.page] || map.dashboard;
  }

  const data = state.data.manager;
  const rentStats = managerRentStats();
  const paymentStats = managerPaymentReviewStats();
  const maintenanceStats = managerMaintenanceStats();
  const renewalStats = managerRenewalStats();
  const documentStats = managerDocumentStats();
  const notificationStats = managerNotificationStats();
  const financeStats = managerFinanceStats();
  const portfolioStats = getPortfolioSummary();
  const queueSummary = getManagementQueueSummary();
  const pendingPayments = paymentStats.pendingCount;
  const openMaintenance = maintenanceStats.openCount;
  const pendingRenewals = renewalStats.pendingCount;
  const managerActionCount = queueSummary.totalActions;
  const map = {
    dashboard: {
      eyebrow: "Operations summary",
      title: managerActionCount ? `${managerActionCount} ${managerActionCount === 1 ? "action" : "actions"} need response` : "You're all caught up",
      body: managerActionCount ? "Review payments, maintenance, and renewals from one queue." : "No management actions need a response right now.",
      value: String(managerActionCount),
      meta: queueSummary.categories.map((category) => ({ label: `${category.count} ${category.label.toLowerCase()}`, page: category.page })),
      actions: [queueSummary.primaryAction, queueSummary.secondaryAction]
    },
    actionCenter: {
      eyebrow: "Action Center",
      title: managerActionCount ? `${managerActionCount} actions in queue` : "Action queue is clear",
      body: "Resolve approvals, maintenance updates, tenant messages, and requests.",
      value: String(managerActionCount),
      meta: [`${pendingPayments} payment reviews`, `${openMaintenance} maintenance`, `${pendingRenewals} renewals`],
      actions: [{ label: "Review rent", icon: "wallet", page: "rentTracking", variant: "secondary" }]
    },
    tenants: {
      eyebrow: "Tenant management",
      title: "Manage Tenants",
      body: "Search by tenant, unit, or property.",
      value: `${data.tenants.length} records`,
      meta: [`${data.tenants.length} records`, "Linked documents"],
      actions: [{ label: "Add tenant", icon: "users", action: "add-tenant", variant: "primary" }]
    },
    rentTracking: {
      eyebrow: "Rent tracking",
      title: "Prioritize pending rent",
      body: "Open a record or send a reminder.",
      value: formatAed(rentStats.pendingAmount + rentStats.lateAmount),
      meta: [`${rentStats.pendingRows.length} pending`, `${rentStats.lateRows.length} late`],
      actions: [{ label: "Send reminder", icon: "send", page: "notifications", variant: "primary" }]
    },
    chequeReview: {
      eyebrow: "Approval queue",
      title: `${pendingPayments} payments pending`,
      body: "Review proof, then approve or reject.",
      value: `${pendingPayments} pending`,
      meta: ["Approve", "Reject", "Proof preview"],
      actions: []
    },
    maintenanceMgmt: {
      eyebrow: "Maintenance",
      title: `${openMaintenance} requests open`,
      body: "Open a request and update the status.",
      value: `${openMaintenance} open`,
      meta: [`${maintenanceStats.newCount} new`, `${maintenanceStats.inProgressCount} in progress`, `${maintenanceStats.scheduledCount} scheduled`],
      actions: []
    },
    renewalsMgmt: {
      eyebrow: "Renewals",
      title: `${pendingRenewals} renewals pending`,
      body: "Check lease dates before deciding.",
      value: `${pendingRenewals} pending`,
      meta: [`${renewalStats.expiringSoonCount} expiring soon`, `${renewalStats.approvedCount} approved`],
      actions: []
    },
    docsMgmt: {
      eyebrow: "Documents",
      title: "Find tenant documents",
      body: "Filter by tenant, type, or status.",
      value: `${documentStats.total} records`,
      meta: [`${documentStats.pendingReviews} in review`, `${documentStats.approvedCount} approved`],
      actions: []
    },
    notifications: {
      eyebrow: "Reminders",
      title: "Send tenant updates",
      body: "Use a template or write a short message.",
      value: `${notificationStats.sentCount} sent`,
      meta: [`${notificationStats.total} total`, "Tenant messages"],
      actions: []
    },
    financial: {
      eyebrow: "Finance",
      title: "Income is on track",
      body: "Follow up on pending rent.",
      value: formatAed(financeStats.netIncome),
      meta: [formatAed(rentStats.paidAmount), `${formatAed(rentStats.pendingAmount + rentStats.lateAmount)} pending`],
      actions: [{ label: "Track rent", icon: "wallet", page: "rentTracking", variant: "primary" }]
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: `${portfolioStats.totalProperties} Properties`,
      body: "Open the map, inspect assets, and add properties.",
      value: formatAed(portfolioStats.totalAssetValue, { compact: true }),
      meta: [`${portfolioStats.occupiedUnits} occupied`, `${portfolioStats.vacantUnits} vacant`],
      actions: [{ label: "Open map", icon: "building", action: "open-portfolio-map", variant: "primary" }]
    },
    uiKit: {
      eyebrow: "UI Kit",
      title: "Component Demo",
      body: "Generic examples for dashboard buttons, cards, forms, tables, and states.",
      value: "UI Kit",
      valueLabel: "Demo page",
      meta: ["Buttons", "Cards", "States"],
      actions: []
    }
  };
  return map[state.page] || map.dashboard;
}

function renderScreenFocus() {
  const focus = pageFocus();
  const classes = ["screen-focus"];
  if (focus.className) classes.push(focus.className);
  const meta = focus.meta || [];
  const valueClass = focus.valueClassName ? ` class="${escapeHtml(focus.valueClassName)}"` : "";
  const valueLabel = focus.valueLabel || (state.role === "tenant" ? "Tenant action" : "Operating focus");
  return `
    <section class="${classes.join(" ")}" aria-label="Current task summary">
      <div class="screen-focus-copy">
        <span class="focus-eyebrow">${escapeHtml(focus.eyebrow)}</span>
        <h2>${escapeHtml(focus.title)}</h2>
        ${focus.body ? `<p>${escapeHtml(focus.body)}</p>` : ""}
        ${meta.length ? `<div class="focus-meta">${meta.map(renderFocusMetaItem).join("")}</div>` : ""}
      </div>
      <div class="screen-focus-side">
        <strong${valueClass}>${escapeHtml(focus.value)}</strong>
        <span>${escapeHtml(valueLabel)}</span>
        ${renderActionButtons(focus.actions)}
      </div>
    </section>
  `;
}

function metricCard(label, value, note, iconName, targetPage = "", options = {}) {
  const tag = targetPage ? "button" : "article";
  const attributes = targetPage
    ? `type="button" data-page="${escapeHtml(targetPage)}" aria-label="Open ${escapeHtml(label)} details"`
    : "";
  const classes = ["metric-card"];
  if (targetPage) classes.push("metric-link");
  if (options.className) classes.push(options.className);

  return `
    <${tag} class="${classes.join(" ")}" ${attributes}>
      <div class="metric-top">
        <span class="label">${escapeHtml(label)}</span>
        ${metricIcon(iconName)}
      </div>
      <p class="metric-value">${escapeHtml(value)}</p>
      ${(note || (targetPage && !options.hideActionLabel))
        ? `<div class="metric-foot">${note ? `<span class="metric-note">${escapeHtml(note)}</span>` : "<span></span>"}${targetPage && !options.hideActionLabel ? `<span class="metric-action">${escapeHtml(options.actionLabel || metricActionLabel(targetPage))}</span>` : ""}</div>`
        : ""}
    </${tag}>
  `;
}

function quickActionAttributes(action) {
  if (action.modal) return `data-modal="${escapeHtml(action.modal)}"`;
  if (action.page) return `data-page="${escapeHtml(action.page)}"`;
  if (action.action) return `data-action="${escapeHtml(action.action)}"`;
  return "";
}

function renderTenantQuickAction(action) {
  return `
    <button class="quick-card" type="button" ${quickActionAttributes(action)}>
      ${metricIcon(action.icon || "file")}
      <strong>${escapeHtml(action.title || action.label)}</strong>
      <span>${escapeHtml(action.detail || "")}</span>
    </button>
  `;
}

function tenantDashboardQuickActions(summary) {
  const rentState = summary.dashboardState;
  const actions = [
    {
      ...rentState.primaryAction,
      title: rentState.primaryAction.label,
      detail: rentState.workflowNote
    }
  ];

  if (rentState.secondaryAction) {
    actions.push({
      ...rentState.secondaryAction,
      title: rentState.secondaryAction.label,
      detail: "Open rent details."
    });
  }

  actions.push(
    { title: "Request Maintenance", detail: "Open request.", icon: "tool", page: "maintenance" },
    { title: "Request Renewal", detail: "Ask to renew.", icon: "refresh", page: "renewal" },
    { title: "View Documents", detail: "Open files.", icon: "file", page: "documents" }
  );

  return actions;
}

function tenantDashboardActivities(summary) {
  const paymentTitles = new Set([
    "Rent due",
    "Rent paid",
    "Payment proof sent",
    "Payment proof submitted",
    "Payment proof rejected",
    "Payment not started",
    "Payment proof needed",
    "Cash visit requested",
    "Cash visit approved"
  ]);
  const currentPaymentActivity = {
    title: summary.dashboardState.activityTitle,
    detail: summary.dashboardState.activityDetail,
    time: summary.dashboardState.activityTime || "Current"
  };
  const supportingItems = state.data.tenant.activities.filter((item) => !paymentTitles.has(item.title));
  return sortActivityItems([currentPaymentActivity, ...supportingItems]);
}

function renderTenantRentOverview(summary) {
  const rentState = summary.dashboardState;
  const actions = [
    { ...rentState.primaryAction, variant: "primary" },
    ...(rentState.secondaryAction ? [{ ...rentState.secondaryAction, variant: "secondary" }] : [])
  ];

  return `
    <article class="tenant-rent-overview ${escapeHtml(rentState.metricClass)}" aria-label="Primary rent overview">
      <div class="rent-overview-main">
        <div class="rent-overview-copy">
          <span class="rent-overview-label">Rent overview</span>
          <h2>${escapeHtml(rentState.title)}</h2>
          <p>${escapeHtml(rentState.body)}</p>
        </div>
        <div class="rent-overview-amount">
          <span>Amount</span>
          <strong>${escapeHtml(summary.rent.amount)}</strong>
        </div>
      </div>
      <div class="rent-overview-facts" aria-label="Rent details">
        <span><strong>Cycle</strong><em>${escapeHtml(summary.rent.month)}</em></span>
        <span><strong>Due date</strong><em>${escapeHtml(summary.rent.dueDate)}</em></span>
        <span><strong>Status</strong><em>${escapeHtml(rentState.workflowLabel)}</em></span>
      </div>
      ${renderActionButtons(actions, "rent-overview-actions")}
    </article>
  `;
}

function renderTenantStatusCard(card) {
  return `
    <button class="tenant-status-card ${escapeHtml(card.className || "")}" type="button" data-page="${escapeHtml(card.page)}" aria-label="${escapeHtml(card.ariaLabel || card.title)}">
      <div class="tenant-status-card-top">
        <span>${escapeHtml(card.label)}</span>
        ${metricIcon(card.icon)}
      </div>
      <strong>${escapeHtml(card.title)}</strong>
      <p>${escapeHtml(card.detail)}</p>
      <em>${escapeHtml(card.actionLabel)}</em>
    </button>
  `;
}

function table(headers, rows, options = {}) {
  const countLabel = options.countLabel || `${rows.length} ${rows.length === 1 ? "record" : "records"}`;
  const emptyTitle = options.emptyTitle || "No records found";
  const emptyBody = options.emptyBody || "Adjust search or filters.";

  return `
    <div class="table-shell">
      ${options.hideMeta ? "" : `
        <div class="table-meta">
          <span>${escapeHtml(countLabel)}</span>
          <span>${escapeHtml(options.meta || "Demo data")}</span>
        </div>
      `}
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows.length
              ? rows.join("")
              : `<tr class="empty-table-row"><td class="empty-table-cell" colspan="${headers.length}">${renderEmptyState({ title: emptyTitle, description: emptyBody }).replace('class="empty-state"', 'class="empty-state table-empty-state"')}</td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderActionCenterButtons(item) {
  const actions = actionButtonsForItem(item);
  const sourcePage = actionSourcePage(item);
  const reviewAction = state.role === "manager" && sourcePage !== "actionCenter" && !actions.some((action) => action.page)
    ? [{ label: "View record", page: sourcePage, variant: "ghost" }]
    : [];
  const visibleActions = [...actions, ...reviewAction];

  if (!visibleActions.length) return `<span class="action-muted">No action needed</span>`;

  return visibleActions
    .map((action) => {
      if (action.page) {
        return renderButton({
          label: action.label,
          variant: action.variant || "secondary",
          size: "compact",
          page: action.page
        });
      }
      return renderButton({
        label: action.label,
        variant: action.variant || "secondary",
        size: "compact",
        action: "action-center",
        command: action.command,
        id: item.id
      });
    })
    .join("");
}

function actionCenterCommandNeedsConfirmation(command) {
  return [
    "approve-payment",
    "reject-payment",
    "approve-cash",
    "reject-cash",
    "resolve-maintenance",
    "approve-renewal",
    "reject-renewal",
    "approve-contract",
    "reject-contract",
    "resolve-complaint",
    "reject-complaint",
    "resolve-suggestion"
  ].includes(command);
}

function actionCenterConfirmationCopy(item, command) {
  const copies = {
    "approve-payment": {
      title: "Approve payment?",
      subtitle: "This will mark the payment proof as approved.",
      body: "Tenant rent and management records will be updated together.",
      label: "Approve payment",
      variant: "success"
    },
    "reject-payment": {
      title: "Reject payment?",
      subtitle: "This will send the payment back to the tenant.",
      body: "The tenant will need to submit corrected payment details.",
      label: "Reject payment",
      variant: "danger"
    },
    "approve-cash": {
      title: "Approve cash visit?",
      subtitle: "This confirms the tenant's requested office visit.",
      body: "The tenant cash request and Action Center status will be updated.",
      label: "Approve visit",
      variant: "success"
    },
    "reject-cash": {
      title: "Reject cash visit?",
      subtitle: "This asks the tenant to choose another visit time.",
      body: "The cash request will be marked rejected and the tenant will need to resubmit.",
      label: "Reject visit",
      variant: "danger"
    },
    "resolve-maintenance": {
      title: "Resolve maintenance request?",
      subtitle: "This closes the maintenance item.",
      body: "The tenant and management maintenance records will both be marked complete.",
      label: "Mark resolved",
      variant: "success"
    },
    "approve-renewal": {
      title: "Approve renewal?",
      subtitle: "This approves the tenant renewal request.",
      body: "The renewal queue and tenant renewal status will be updated together.",
      label: "Approve renewal",
      variant: "success"
    },
    "reject-renewal": {
      title: "Reject renewal?",
      subtitle: "This rejects the tenant renewal request.",
      body: "The renewal queue and tenant renewal status will be updated together.",
      label: "Reject renewal",
      variant: "danger"
    },
    "approve-contract": {
      title: "Approve contract request?",
      subtitle: "This approves the submitted contract change.",
      body: "The contract request and Action Center item will both be marked approved.",
      label: "Approve request",
      variant: "success"
    },
    "reject-contract": {
      title: "Reject contract request?",
      subtitle: "This rejects the submitted contract change.",
      body: "The contract request and Action Center item will both be marked rejected.",
      label: "Reject request",
      variant: "danger"
    },
    "resolve-complaint": {
      title: "Resolve complaint?",
      subtitle: "This closes the tenant complaint.",
      body: "The complaint will move to completed in the Action Center and notification records.",
      label: "Resolve complaint",
      variant: "success"
    },
    "reject-complaint": {
      title: "Reject complaint?",
      subtitle: "This rejects the tenant complaint.",
      body: "The complaint will move to rejected in the Action Center and notification records.",
      label: "Reject complaint",
      variant: "danger"
    },
    "resolve-suggestion": {
      title: "Mark suggestion reviewed?",
      subtitle: "This closes the suggestion follow-up.",
      body: "The suggestion will move to completed in the Action Center and notification records.",
      label: "Mark reviewed",
      variant: "success"
    }
  };

  return copies[command] || {
    title: "Confirm action?",
    subtitle: `This updates ${item.type.toLowerCase()}.`,
    body: "The linked record and Action Center status will be updated together.",
    label: "Confirm",
    variant: "primary"
  };
}

function renderActionHistory(item) {
  const history = Array.isArray(item.history) ? item.history : [];
  if (!history.length) return "";
  return `
    <details class="action-history">
      <summary>History</summary>
      <ul>
        ${history
          .slice()
          .reverse()
          .map((entry) => `<li><span>${escapeHtml(formatActionDate(entry.at))}</span><strong>${escapeHtml(entry.action)}</strong><em>${escapeHtml(entry.note || entry.by || "")}</em></li>`)
          .join("")}
      </ul>
    </details>
  `;
}

function renderActionMeta(item) {
  const rows = [];
  const add = (label, value) => {
    const cleanValue = String(value || "").trim();
    if (cleanValue) rows.push({ label, value: cleanValue });
  };
  const propertyUnit = [item.property, item.unit ? `Unit ${item.unit}` : ""].filter(Boolean).join(" · ");

  add("Tenant", item.tenant);
  add("Property / Unit", propertyUnit);
  add("Amount", item.amount);
  add("Priority", item.priority);
  add("Created", item.createdAt ? formatActionDate(item.createdAt) : "");

  if (!rows.length) return "";
  return renderMetadataGrid(rows, "action-meta-grid");
}

function renderActionCenterItem(item) {
  const unread = !item.readBy?.includes(state.role);
  const presentation = actionCardPresentation(item);
  const dismissButton = isDismissibleActionItem(item)
    ? `<button class="action-dismiss" type="button" data-action="action-center" data-command="dismiss-card" data-id="${escapeHtml(item.id)}" aria-label="Dismiss update">${icon.close}</button>`
    : "";
  return `
    <article class="action-center-item ${unread ? "unread" : ""}" data-item-id="${escapeHtml(item.id)}">
      <div class="action-card-topline">
        <div class="action-state-row">
          ${badge(item.status, actionStatusLabel(item.status))}
          ${unread ? `<span class="unread-dot">Unread</span>` : ""}
        </div>
        ${dismissButton}
      </div>
      <div class="action-item-main">
        <h3 class="action-item-title">${escapeHtml(presentation.title)}</h3>
        ${presentation.description ? `<p>${escapeHtml(presentation.description)}</p>` : ""}
      </div>
      ${renderActionMeta(item)}
      ${renderActionHistory(item)}
      <div class="action-center-actions">
        ${renderActionCenterButtons(item)}
      </div>
    </article>
  `;
}

function actionGroupKey(item) {
  const closed = ["Approved", "Completed", "Read"];
  if (state.role === "tenant") {
    if (["Rejected", "Info Requested"].includes(item.status)) return "needsResponse";
    if (closed.includes(item.status)) return "closed";
    return "waiting";
  }
  if (["Approved", "Completed", "Rejected", "Read"].includes(item.status)) return "closed";
  if (["Acknowledged", "Assigned", "In Progress", "Scheduled", "Sent"].includes(item.status)) return "inProgress";
  return "needsReview";
}

function actionGroupDefinitions() {
  if (state.role === "tenant") {
    return [
      { key: "needsResponse", title: "Needs your response", body: "Items where the company needs updated details." },
      { key: "waiting", title: "Waiting on company", body: "Submitted items currently being reviewed or worked on." },
      { key: "closed", title: "Completed", body: "Resolved requests and final decisions." }
    ];
  }
  return [
    { key: "needsReview", title: "Needs review", body: "Approvals, new requests, and items waiting for a decision." },
    { key: "inProgress", title: "In progress", body: "Requests already acknowledged, assigned, or scheduled." },
    { key: "closed", title: "Completed", body: "Resolved requests and final decisions." }
  ];
}

function renderActionCenterGroups(items) {
  return actionGroupDefinitions()
    .map((group) => {
      const groupItems = items.filter((item) => actionGroupKey(item) === group.key);
      if (!groupItems.length) return "";
      return `
        <section class="action-group action-group-${escapeHtml(group.key)}" aria-label="${escapeHtml(group.title)}">
          <div class="action-group-header">
            <div>
              <h3>${escapeHtml(group.title)}</h3>
              <p>${escapeHtml(group.body)}</p>
            </div>
            <span>${groupItems.length}</span>
          </div>
          ${groupItems.map(renderActionCenterItem).join("")}
        </section>
      `;
    })
    .join("");
}

function renderActionCenter() {
  ensureActionCenterData();
  const allItems = visibleActionItems();
  const filtered = filteredActionItems();
  const openItems = allItems.filter((item) => !["Approved", "Completed", "Rejected", "Read"].includes(item.status));
  const unreadItems = allItems.filter((item) => !item.readBy?.includes(state.role));
  const actionItems = allItems.filter((item) => actionButtonsForItem(item).some((action) => action.command && action.command !== "mark-read"));
  const typeOptions = actionFilterOptions("type", allItems);
  const statusOptions = actionFilterOptions("status", allItems);

  return `
    <div class="content-stack">
      <section class="metric-grid">
        ${metricCard("Needs Action", String(actionItems.length), "Available actions", "check")}
        ${metricCard("Unread", String(unreadItems.length), "New updates", "bell")}
        ${metricCard("Open Items", String(openItems.length), "In progress", "refresh")}
        ${metricCard("Total Items", String(allItems.length), "Visible to you", "file")}
      </section>

      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Action Center</h2>
            <p>${state.role === "tenant" ? "Search and filter your current action items." : "Search and filter tenant action items."}</p>
          </div>
        </div>
        <div class="control-row">
          <div class="field">
            <label for="actionSearch">Search</label>
            <input id="actionSearch" value="${escapeHtml(state.filters.actionSearch)}" data-filter="actionSearch" placeholder="Tenant, unit, type, or detail" />
          </div>
          <div class="field">
            <label for="actionType">Type</label>
            <select id="actionType" data-filter="actionType">
              ${typeOptions.map((type) => `<option ${state.filters.actionType === type ? "selected" : ""}>${escapeHtml(type)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="actionStatus">Status</label>
            <select id="actionStatus" data-filter="actionStatus">
              ${statusOptions.map((status) => `<option value="${escapeHtml(status)}" ${state.filters.actionStatus === status ? "selected" : ""}>${escapeHtml(status === "All" ? "All" : actionStatusLabel(status))}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="actionSort">Sort</label>
            <select id="actionSort" data-filter="actionSort">
              ${["Newest", "Oldest"].map((sort) => `<option ${state.filters.actionSort === sort ? "selected" : ""}>${sort}</option>`).join("")}
            </select>
          </div>
        </div>
      </section>

      <section class="action-center-list" aria-label="Action Center items">
        ${filtered.length
          ? renderActionCenterGroups(filtered)
          : `<div class="empty-state"><strong>No action items found</strong><span>Adjust filters or check back after a new request, payment, or update.</span></div>`}
      </section>
    </div>
  `;
}

function updateTenantPaymentForInfoRequest(item, note) {
  const payment = currentTenantPaymentSubmission();
  if (item.tenant === tenantProfile().name && payment) {
    payment.status = "Info Requested";
    setTenantCurrentRentStatus("Pending", "Needs clarification");
    recordTenantActivity("Payment info requested", note);
  }
}

function updateTenantRenewalForInfoRequest(item, note) {
  if (item.tenant === tenantProfile().name && item.unit === tenantProfile().unit) {
    tenantProfile().renewalStatus = "Info Requested";
    recordTenantActivity("Renewal info requested", note);
  }
}

function applyActionCenterCommand(itemId, command, options = {}) {
  const item = actionItemById(itemId);
  if (!item || !roleCanActOnItem(item)) {
    showToast("Action unavailable.");
    return;
  }

  const source = sourceRowForAction(item);
  const role = state.role;

  if (command === "mark-read") {
    markActionRead(item, role);
    saveData();
    showToast("Marked as read.");
    render();
    return;
  }

  if (command === "dismiss-card") {
    if (!isDismissibleActionItem(item)) {
      showToast("Action unavailable.");
      return;
    }
    item.dismissedBy = Array.isArray(item.dismissedBy) ? item.dismissedBy : [];
    if (!item.dismissedBy.includes(role)) item.dismissedBy.push(role);
    markActionRead(item, role);
    appendActionHistory(item, role === "manager" ? "Property Management" : tenantProfile().name, "Update dismissed", "Hidden from Action Center.");
    saveData();
    showToast("Update dismissed.");
    renderPreservingScroll(options.viewportAnchor || {});
    return;
  }

  if (role !== "manager") {
    showToast("Action unavailable for this role.");
    return;
  }

  if (command === "approve-payment" && source) {
    source.status = "Approved";
    syncTenantPaymentStatus(source);
    setActionStatus(item, "Approved", "manager", "Payment approved", `${item.amount || "Payment"} verified.`);
    saveData();
    showToast("Payment approved.");
    render();
    return;
  }

  if (command === "reject-payment" && source) {
    source.status = "Rejected";
    syncTenantPaymentStatus(source);
    setActionStatus(item, "Rejected", "manager", "Payment rejected", "Tenant needs to submit updated proof.");
    saveData();
    showToast("Payment rejected.");
    render();
    return;
  }

  if (command === "request-payment-info") {
    if (source) {
      source.status = "Info Requested";
      source.updatedAt = new Date().toISOString();
      syncTenantPaymentStatus(source);
    }
    updateTenantPaymentForInfoRequest(item, "Company requested more payment information.");
    setActionStatus(item, "Info Requested", "manager", "More info requested", "Tenant must clarify the payment details.");
    saveData();
    showToast("Information requested.");
    render();
    return;
  }

  if (command === "approve-cash" && source) {
    source.status = "Approved";
    source.decisionNote = "Visit time approved.";
    syncTenantCashRequestStatus(source);
    setActionStatus(item, "Approved", "manager", "Cash visit approved", `${source.preferredTime} approved.`);
    saveData();
    showToast("Cash visit approved.");
    render();
    return;
  }

  if (command === "reject-cash" && source) {
    source.status = "Rejected";
    source.decisionNote = "Tenant should choose another visit time.";
    syncTenantCashRequestStatus(source);
    setActionStatus(item, "Rejected", "manager", "Cash visit rejected", "Tenant should submit another time.");
    saveData();
    showToast("Cash visit rejected.");
    render();
    return;
  }

  if (command === "request-cash-info" && source) {
    source.status = "Info Requested";
    source.decisionNote = "Company requested more visit details.";
    syncTenantCashRequestStatus(source);
    setActionStatus(item, "Info Requested", "manager", "More info requested", "Tenant must clarify cash visit details.");
    saveData();
    showToast("Information requested.");
    render();
    return;
  }

  if (command === "ack-maintenance" && source) {
    source.status = "In Progress";
    syncTenantMaintenanceStatus(source);
    setActionStatus(item, "Acknowledged", "manager", "Request acknowledged", "Maintenance team acknowledged the request.");
    saveData();
    showToast("Request acknowledged.");
    render();
    return;
  }

  if (command === "assign-maintenance" && source) {
    source.status = "In Progress";
    syncTenantMaintenanceStatus(source);
    setActionStatus(item, "Assigned", "manager", "Technician assigned", "Maintenance request assigned to operations.");
    saveData();
    showToast("Technician assigned.");
    render();
    return;
  }

  if (command === "schedule-maintenance" && source) {
    source.status = "Scheduled";
    syncTenantMaintenanceStatus(source);
    setActionStatus(item, "Scheduled", "manager", "Visit scheduled", "Maintenance visit scheduled.");
    saveData();
    showToast("Maintenance scheduled.");
    render();
    return;
  }

  if (command === "resolve-maintenance" && source) {
    source.status = "Completed";
    syncTenantMaintenanceStatus(source);
    setActionStatus(item, "Completed", "manager", "Request resolved", "Maintenance request marked resolved.");
    saveData();
    showToast("Maintenance resolved.");
    render();
    return;
  }

  if (command === "request-maintenance-info" && source) {
    source.status = "Info Requested";
    syncTenantMaintenanceStatus(source);
    setActionStatus(item, "Info Requested", "manager", "More info requested", "Tenant must add more maintenance details.");
    saveData();
    showToast("Information requested.");
    render();
    return;
  }

  if (command === "approve-renewal" && source) {
    source.status = "Approved";
    source.updatedAt = new Date().toISOString();
    syncTenantRenewalStatus(source);
    setActionStatus(item, "Approved", "manager", "Renewal approved", "Renewal request approved.");
    saveData();
    showToast("Renewal approved.");
    render();
    return;
  }

  if (command === "reject-renewal" && source) {
    source.status = "Rejected";
    source.updatedAt = new Date().toISOString();
    syncTenantRenewalStatus(source);
    setActionStatus(item, "Rejected", "manager", "Renewal rejected", "Renewal request rejected.");
    saveData();
    showToast("Renewal rejected.");
    render();
    return;
  }

  if (command === "request-renewal-info") {
    if (source) {
      source.status = "Info Requested";
      source.updatedAt = new Date().toISOString();
      syncTenantRenewalStatus(source);
    }
    updateTenantRenewalForInfoRequest(item, "Company requested renewal clarification.");
    setActionStatus(item, "Info Requested", "manager", "More info requested", "Tenant must clarify renewal details.");
    saveData();
    showToast("Information requested.");
    render();
    return;
  }

  if (command === "approve-contract" && source) {
    source.status = "Approved";
    source.updatedAt = new Date().toISOString();
    source.decisionNote = "Contract request approved.";
    syncTenantContractRequestStatus(source);
    setActionStatus(item, "Approved", "manager", "Contract request approved", source.requestType);
    saveData();
    showToast("Contract request approved.");
    render();
    return;
  }

  if (command === "reject-contract" && source) {
    source.status = "Rejected";
    source.updatedAt = new Date().toISOString();
    source.decisionNote = "Contract request rejected.";
    syncTenantContractRequestStatus(source);
    setActionStatus(item, "Rejected", "manager", "Contract request rejected", source.requestType);
    saveData();
    showToast("Contract request rejected.");
    render();
    return;
  }

  if (command === "request-contract-info" && source) {
    source.status = "Info Requested";
    source.updatedAt = new Date().toISOString();
    source.decisionNote = "Company requested more contract details.";
    syncTenantContractRequestStatus(source);
    setActionStatus(item, "Info Requested", "manager", "More info requested", "Tenant must clarify contract request details.");
    saveData();
    showToast("Information requested.");
    render();
    return;
  }

  if (command === "ack-complaint" && source) {
    source.status = "In Review";
    syncTenantComplaintStatus(source);
    setActionStatus(item, "In Review", "manager", "Complaint acknowledged", "Complaint is under review.");
    saveData();
    showToast("Complaint acknowledged.");
    render();
    return;
  }

  if (command === "resolve-complaint" && source) {
    source.status = "Completed";
    syncTenantComplaintStatus(source);
    setActionStatus(item, "Completed", "manager", "Complaint resolved", "Complaint marked resolved.");
    saveData();
    showToast("Complaint resolved.");
    render();
    return;
  }

  if (command === "reject-complaint" && source) {
    source.status = "Rejected";
    syncTenantComplaintStatus(source);
    setActionStatus(item, "Rejected", "manager", "Complaint rejected", "Complaint rejected after review.");
    saveData();
    showToast("Complaint rejected.");
    render();
    return;
  }

  if (command === "ack-suggestion" && source) {
    source.status = "In Review";
    syncTenantSuggestionStatus(source);
    setActionStatus(item, "In Review", "manager", "Suggestion acknowledged", "Suggestion is under review.");
    saveData();
    showToast("Suggestion acknowledged.");
    render();
    return;
  }

  if (command === "resolve-suggestion" && source) {
    source.status = "Completed";
    syncTenantSuggestionStatus(source);
    setActionStatus(item, "Completed", "manager", "Suggestion reviewed", "Suggestion marked reviewed.");
    saveData();
    showToast("Suggestion reviewed.");
    render();
    return;
  }

  showToast("Action unavailable.");
}

function renderDesignSystemShowcase() {
  const sampleRows = [
    `<tr><td>Primary row</td><td>Supporting detail</td><td>${badge("Pending")}</td><td>${renderButton({ label: "Table Button", variant: "secondary", size: "compact" })}</td></tr>`,
    `<tr><td>Secondary row</td><td>Supporting detail</td><td>${badge("Paid")}</td><td>${renderButton({ label: "Ghost Button", variant: "ghost", size: "compact" })}</td></tr>`
  ];
  const statusSamples = ["Paid", "Pending", "In Review", "Completed", "Rejected", "Uploaded", "Sent"];

  return `
    <div class="content-stack ui-kit-page">
      <section class="screen-focus ui-kit-hero" aria-label="Design system overview">
        <div class="screen-focus-copy">
          <span class="focus-eyebrow">Internal design system</span>
          <h2>UI Kit Component Demo</h2>
          <p>Shared tokens, states, spacing, badges, forms, cards, lists, tables, modals, and feedback patterns for the dashboard portal.</p>
          <div class="focus-meta">
            <span>Light and dark themes</span>
            <span>Status-driven color</span>
            <span>Reusable CSS variables</span>
          </div>
        </div>
        <div class="screen-focus-side">
          <strong>53</strong>
          <span>Component states covered</span>
          ${renderButton({ label: "Hero Button", iconName: "home", variant: "primary" })}
        </div>
      </section>

      <section class="section-band">
        ${renderSectionHeader({ eyebrow: "Actions", title: "Buttons", description: "Consistent height, radius, focus, disabled, loading, and icon spacing." })}
        <div class="component-row">
          ${renderButton({ label: "Primary Button", variant: "primary", iconName: "check" })}
          ${renderButton({ label: "Secondary Button", variant: "secondary", iconName: "file" })}
          ${renderButton({ label: "Ghost Button", variant: "ghost", iconName: "bell" })}
          ${renderButton({ label: "Danger Button", variant: "danger", iconName: "close" })}
          ${renderButton({ label: "Loading Button", variant: "secondary", loading: true, disabled: true })}
          ${renderButton({ label: "Disabled Button", variant: "secondary", disabled: true })}
        </div>
      </section>

      <section class="section-band">
        ${renderSectionHeader({ eyebrow: "Status", title: "Badges and Chips", description: "Every app status maps to success, warning, danger, info, or neutral." })}
        <div class="component-row">
          ${statusSamples.map((status) => badge(status)).join("")}
          <span class="chip">Default Chip</span>
          <span class="chip selected">Selected</span>
          <span class="badge-count">12</span>
        </div>
      </section>

      <section class="section-band ai-style-showcase">
        ${renderSectionHeader({ eyebrow: "AI System", title: "Ask AI surfaces", description: "The assistant uses a top notch launcher, roomy nudge state, full chat workspace, and the same neutral dashboard structure." })}
        <div class="ai-style-grid">
          <div class="ai-style-card">
            <span class="ui-kit-ai-notch-preview">
              ${askAIIcon()}
              <strong>Ask AI</strong>
            </span>
            <span class="ui-kit-ai-nudge-preview">
              ${askAIIcon()}
              <strong>I can handle this faster.</strong>
              <em>6s</em>
            </span>
          </div>
          <div class="ai-style-card ai-style-rules">
            <span class="chip selected">Top notch</span>
            <span class="chip">Smart nudge</span>
            <span class="chip">Full workspace</span>
            <span class="chip">Reduced motion</span>
          </div>
          <div class="ai-style-card ui-kit-ai-chat-preview">
            <div class="ui-kit-ai-message user">What needs action?</div>
            <div class="ui-kit-ai-message assistant">12 actions need response. Start with payment proof and renewal decisions.</div>
          </div>
        </div>
      </section>

      <section class="metric-grid compact-metrics" aria-label="Stat card examples">
        ${metricCard("Metric Card", "24", "Primary metric with context", "wallet")}
        ${metricCard("Alert Metric", "3", "Requires attention", "tool")}
        ${metricCard("Review Metric", "1", "Waiting for review", "file")}
        ${metricCard("Trend Metric", "92%", "Current period", "chart")}
      </section>

      <section class="layout-two">
        <div class="section-band">
          ${renderSectionHeader({ eyebrow: "Cards", title: "Notification Card", description: "Notification cards share status, metadata, unread state, history, and optional controls." })}
          ${renderNotificationCard({
            id: "ui-kit-card",
            title: "Notification card title",
            description: "Use this pattern for a dashboard item that needs status, details, and optional controls.",
            status: "Pending",
            unread: true,
            metadata: [
              { label: "Label", value: "Primary value" },
              { label: "Detail", value: "Secondary value" },
              { label: "Time", value: "Today, 10:00" }
            ],
            actions: `${renderButton({ label: "Success Button", variant: "success", size: "compact" })}${renderButton({ label: "Secondary Button", variant: "secondary", size: "compact" })}`
          })}
        </div>

        <div class="section-band">
          ${renderSectionHeader({ eyebrow: "Forms", title: "Fields and Feedback", description: "Labels, helper copy, error state, disabled state, and upload surfaces use one rhythm." })}
          <form class="form-grid">
            <div class="field">
              <label for="uiKitInput">Text field</label>
              <input id="uiKitInput" value="Text field value" />
            </div>
            <div class="field field-error">
              <label for="uiKitError">Required field</label>
              <input id="uiKitError" value="" aria-describedby="uiKitErrorText" />
              <span id="uiKitErrorText" class="form-message">This field is required.</span>
            </div>
            <div class="field">
              <label for="uiKitSelect">Select menu</label>
              <select id="uiKitSelect">
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
              </select>
            </div>
            <div class="upload-box">Upload surface</div>
          </form>
        </div>
      </section>

      <section class="layout-two">
        <div class="section-band">
          ${renderSectionHeader({ eyebrow: "Tables", title: "Records Table", description: "Shared row height, hover, empty state, and compact actions." })}
          ${table(["Item", "Detail", "Status", "Control"], sampleRows, { countLabel: "2 records", meta: "UI kit sample" })}
        </div>
        <div class="section-band">
          ${renderSectionHeader({ eyebrow: "State", title: "Empty and Loading", description: "Stable placeholders avoid blank or jumpy dashboard sections." })}
          ${renderEmptyState({
            title: "Empty state title",
            description: "Use this state when a dashboard section has no records to show yet.",
            action: renderButton({ label: "Empty State Button", variant: "secondary", size: "compact" })
          })}
          ${renderLoadingState("Loading dashboard cards")}
        </div>
      </section>

      <section class="layout-two">
        <div class="section-band">
          ${renderSectionHeader({ eyebrow: "Activity", title: "Activity Items", description: "Compact list rows for repeated dashboard updates." })}
          <ul class="activity-list">
            ${renderActivityItem({ title: "Activity item title", detail: "Short supporting activity detail.", time: "Today" })}
            ${renderActivityItem({ title: "Second activity item", detail: "Use this pattern for repeated updates.", time: "Yesterday" })}
          </ul>
        </div>
        <div class="section-band">
          ${renderSectionHeader({ eyebrow: "Progress", title: "Status Bars and Variant Buttons", description: "Simple progress bars and visual button variants." })}
          <div class="financial-bars">
            ${renderProgressBar({ label: "Primary progress", value: "92%", width: 92 })}
            ${renderProgressBar({ label: "Secondary progress", value: "78%", width: 78 })}
          </div>
          <div class="component-row toast-demo-row">
            ${["success", "warning", "error", "info"].map((variant) => renderButton({
              label: `${variant[0].toUpperCase()}${variant.slice(1)} Button`,
              variant: variant === "error" ? "danger" : variant === "warning" ? "warning" : variant === "success" ? "success" : "secondary",
              size: "compact"
            })).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderTenantPage() {
  switch (state.page) {
    case "uiKit":
      return renderDesignSystemShowcase();
    case "actionCenter":
      return renderActionCenter();
    case "rent":
      return renderTenantRent();
    case "maintenance":
      return renderTenantMaintenance();
    case "renewal":
      return renderTenantRenewal();
    case "documents":
      return renderTenantDocuments();
    default:
      return renderTenantDashboard();
  }
}

function renderTenantDashboard() {
  const tenant = state.data.tenant;
  const profile = tenant.profile;
  const summary = tenantRentSummary();
  const quickActions = tenantDashboardQuickActions(summary);
  const activityItems = tenantDashboardActivities(summary);
  const visibleActivityItems = activityItems.slice(0, ACTIVITY_FEED_PREVIEW_LIMIT);
  const hiddenActivityCount = Math.max(0, activityItems.length - ACTIVITY_FEED_PREVIEW_LIMIT);
  const activityModalLabel = `Show all (${activityItems.length})`;
  const contractHealth = contractHealthClass(profile.contractEnd);
  const secondaryCards = [
    {
      label: "Contract expiry",
      title: profile.contractEnd,
      detail: "Renewal available",
      icon: "file",
      page: "renewal",
      actionLabel: "View renewal",
      className: contractHealth,
      ariaLabel: "Open contract expiry renewal details"
    },
    {
      label: "Maintenance status",
      title: summary.maintenanceStatus,
      detail: summary.maintenanceNote,
      icon: "tool",
      page: "maintenance",
      actionLabel: "Open request",
      ariaLabel: "Open maintenance request"
    }
  ];
  return `
    <div class="content-stack">
      <section class="tenant-dashboard-flow" aria-label="Tenant dashboard status">
        ${renderTenantRentOverview(summary)}
        <div class="tenant-secondary-status-grid">
          ${secondaryCards.map(renderTenantStatusCard).join("")}
        </div>
      </section>

      <div class="layout-two tenant-dashboard-lower">
        <section class="section-band action-section">
          <div class="section-header">
            <div>
              <h2>Quick Actions</h2>
              <p>Open the next task.</p>
            </div>
          </div>
          <div class="quick-grid action-grid tenant-action-grid">
            ${quickActions.map(renderTenantQuickAction).join("")}
          </div>
        </section>

        <section class="section-band">
          <div class="section-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest tenant updates.</p>
            </div>
            ${hiddenActivityCount ? `<button class="button ghost compact activity-toggle-button" type="button" data-modal="activityHistory">${escapeHtml(activityModalLabel)}</button>` : ""}
          </div>
          <ul class="activity-list">
            ${visibleActivityItems.map(renderActivityItem).join("")}
          </ul>
        </section>
      </div>
    </div>
  `;
}

function rentReceiptCell(row) {
  return String(row.receipt || "").startsWith("REC")
    ? `<button class="button ghost compact" type="button" data-action="download-receipt" data-receipt="${escapeHtml(row.receipt)}">${escapeHtml(row.receipt)}</button>`
    : escapeHtml(row.receipt);
}

function rentHistoryRows(rows) {
  return rows.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.month)}</td>
        <td>${escapeHtml(row.amount)}</td>
        <td>${escapeHtml(row.dueDate)}</td>
        <td>${badge(row.status)}</td>
        <td>${rentReceiptCell(row)}</td>
      </tr>
    `
  );
}

function renderTenantRent() {
  const summary = tenantRentSummary();
  const rentState = summary.dashboardState;
  const paymentHealth = paymentHealthClass(summary);
  const currentRow = currentTenantRent();
  const recentPaidRows = state.data.tenant.rentHistory.filter((row) => row.status === "Paid" && row !== currentRow).slice(0, 2);
  const visibleHistory = [currentRow, ...recentPaidRows];
  const hiddenHistoryCount = Math.max(0, state.data.tenant.rentHistory.length - visibleHistory.length);
  const rentRows = rentHistoryRows(visibleHistory);

  return `
    <div class="content-stack">
      <section class="metric-grid">
        ${metricCard("Monthly Rent", summary.rent.amount, "Contract rent", "wallet")}
        ${metricCard("Outstanding Balance", summary.outstanding, "Current cycle", "chart")}
        ${metricCard("Next Due Date", summary.rent.dueDate, "Due date", "file")}
        ${metricCard("Payment Workflow", rentState.workflowLabel, rentState.workflowNote, "refresh", "", paymentHealth ? { className: paymentHealth } : {})}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Payment History</h2>
            <p>Recent paid rents and current balance.</p>
          </div>
          <span class="cell-actions">
            ${hiddenHistoryCount ? `<button class="button ghost" type="button" data-modal="rentHistory">Show full history</button>` : ""}
            ${summary.isPaid ? "" : `<button class="button secondary" type="button" data-modal="payRent">${buttonIcon("wallet")}Pay rent</button>`}
          </span>
        </div>
        ${table(["Month", "Amount", "Due Date", "Status", "Receipt"], rentRows)}
      </section>
    </div>
  `;
}

function renderTenantMaintenance() {
  const rows = state.data.tenant.maintenanceRequests.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.issue)}</td>
        <td>${badge(row.priority)}</td>
        <td>${escapeHtml(row.date)}</td>
        <td>${badge(row.status)}</td>
        <td>
          ${["Submitted", "New", "In Progress", "Scheduled", "Info Requested"].includes(row.status)
            ? `<button class="button ghost compact" type="button" data-action="cancel-maintenance" data-id="${escapeHtml(row.id)}">Cancel</button>`
            : `<span class="action-muted">No action</span>`}
        </td>
      </tr>
    `
  );
  const activeFollowupStatuses = ["Pending", "In Review"];
  const activeComplaints = state.data.tenant.complaints.filter((row) => activeFollowupStatuses.includes(row.status));
  const previousComplaints = state.data.tenant.complaints.filter((row) => !activeFollowupStatuses.includes(row.status));
  const activeSuggestions = state.data.tenant.suggestions.filter((row) => activeFollowupStatuses.includes(row.status));
  const previousSuggestions = state.data.tenant.suggestions.filter((row) => !activeFollowupStatuses.includes(row.status));
  const activeStatusSectionCount = Number(activeComplaints.length > 0) + Number(activeSuggestions.length > 0);
  const activeStatusSectionClass = activeStatusSectionCount === 1 ? " maintenance-status-single" : "";
  const complaintRows = activeComplaints.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.description)}</td>
        <td>${escapeHtml(row.attachment || "Attached placeholder")}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button ghost compact" type="button" data-action="cancel-complaint" data-id="${escapeHtml(row.id)}">Cancel</button></td>
      </tr>
    `
  );
  const suggestionRows = activeSuggestions.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.description)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button ghost compact" type="button" data-action="cancel-suggestion" data-id="${escapeHtml(row.id)}">Cancel</button></td>
      </tr>
    `
  );
  const historyRows = [
    ...previousComplaints.map((row) => `
      <tr>
        <td>Complaint</td>
        <td>${escapeHtml(row.description)}</td>
        <td>${badge(row.status)}</td>
      </tr>
    `),
    ...previousSuggestions.map((row) => `
      <tr>
        <td>Suggestion</td>
        <td>${escapeHtml(row.description)}</td>
        <td>${badge(row.status)}</td>
      </tr>
    `)
  ];
  const complaintStatusSection = complaintRows.length
    ? `
      <div class="section-band maintenance-status-section complaint-status-section${activeStatusSectionClass}">
        <div class="section-header">
          <div>
            <h2>Complaints</h2>
            <p>Status of submitted complaints.</p>
          </div>
        </div>
        ${table(["Complaint", "Supporting File", "Status", "Action"], complaintRows, {
          emptyTitle: "No complaints filed",
          emptyBody: "Submitted complaints will appear here."
        })}
      </div>
    `
    : "";
  const suggestionStatusSection = suggestionRows.length
    ? `
      <div class="section-band maintenance-status-section suggestion-status-section${activeStatusSectionClass}">
        <div class="section-header">
          <div>
            <h2>Suggestions</h2>
            <p>Status of submitted suggestions.</p>
          </div>
        </div>
        ${table(["Suggestion", "Status", "Action"], suggestionRows, {
          emptyTitle: "No suggestions filed",
          emptyBody: "Submitted suggestions will appear here."
        })}
      </div>
    `
    : "";
  const historySection = historyRows.length
    ? `
      <div class="section-band maintenance-status-section maintenance-history-section">
        <div class="section-header">
          <div>
            <h2>Previous Submissions</h2>
            <p>Closed complaints and suggestions.</p>
          </div>
        </div>
        ${table(["Type", "Details", "Status"], historyRows, {
          countLabel: `${historyRows.length} ${historyRows.length === 1 ? "item" : "items"}`,
          meta: "History"
        })}
      </div>
    `
    : "";
  const confirmed = state.confirmations.maintenance ? `<div class="confirmation">Request submitted.</div>` : "";

  return `
    <div class="content-stack maintenance-stack">
      <section class="section-band maintenance-report-section">
        <div class="section-header">
          <div>
            <h2>Report an Issue</h2>
            <p>Short details help assign the right technician.</p>
          </div>
        </div>
        ${confirmed}
        <form class="form-grid maintenance-form" data-form="tenant-maintenance">
          <div class="field">
            <label for="unitNumber">Unit number</label>
            <input id="unitNumber" name="unitNumber" value="1204" />
          </div>
          <div class="field">
            <label for="issueCategory">Issue category</label>
            <select id="issueCategory" name="issueCategory">
              <option>Plumbing</option>
              <option>Electrical</option>
              <option selected>AC</option>
              <option>Cleaning</option>
              <option>General</option>
            </select>
          </div>
          <div class="field">
            <label for="priority">Priority</label>
            <select id="priority" name="priority">
              <option>Low</option>
              <option selected>Medium</option>
              <option>High</option>
            </select>
          </div>
          <div class="field maintenance-field-wide">
            <label for="description">Description</label>
            <textarea id="description" name="description">Bedroom AC makes a loud noise after 20 minutes.</textarea>
          </div>
          <div class="field">
            <label>Upload image</label>
            <div class="upload-box">Attach issue photo.</div>
          </div>
          <button class="button primary" type="submit">${buttonIcon("send")}Submit request</button>
        </form>
      </section>
      <section class="section-band maintenance-requests-section">
        <div class="section-header">
          <div>
            <h2>Previous Requests</h2>
            <p>Maintenance history.</p>
          </div>
        </div>
        ${table(["Issue", "Priority", "Date", "Status", "Action"], rows)}
      </section>
      <section class="layout-two maintenance-followup-grid">
        <div class="section-band maintenance-form-section maintenance-complaint-form-section">
          <div class="section-header">
            <div>
              <h2>File Complaint</h2>
              <p>Submit a complaint for management review.</p>
            </div>
          </div>
          <form class="form-grid maintenance-secondary-form" data-form="tenant-complaint">
            <div class="field">
              <label for="complaintText">Complaint</label>
              <textarea id="complaintText" name="description">Noise complaint from nearby unit after midnight.</textarea>
            </div>
            <div class="field">
              <label>Supporting file</label>
              <div class="upload-box">Attach photo or document.</div>
            </div>
            <button class="button primary" type="submit">${buttonIcon("send")}Submit complaint</button>
          </form>
        </div>
        <div class="section-band maintenance-form-section maintenance-suggestion-form-section">
          <div class="section-header">
            <div>
              <h2>File Suggestion</h2>
              <p>Share an improvement idea.</p>
            </div>
          </div>
          <form class="form-grid maintenance-secondary-form" data-form="tenant-suggestion">
            <div class="field">
              <label for="suggestionText">Suggestion</label>
              <textarea id="suggestionText" name="description">Add parcel pickup hours to the tenant portal.</textarea>
            </div>
            <div class="field">
              <label>Supporting file</label>
              <div class="upload-box">Attach photo or document.</div>
            </div>
            <button class="button primary" type="submit">${buttonIcon("send")}Submit suggestion</button>
          </form>
        </div>
        ${complaintStatusSection}
        ${suggestionStatusSection}
        ${historySection}
      </section>
    </div>
  `;
}

function renderTenantRenewal() {
  const profile = state.data.tenant.profile;
  const contractHistory = tenantContractRequestHistory(profile);
  const visibleContractHistory = contractHistory.slice(0, CONTRACT_REQUEST_PREVIEW_LIMIT);
  const hiddenContractHistoryCount = Math.max(0, contractHistory.length - visibleContractHistory.length);
  const latestRequest = latestTenantContractRequest(profile);
  const status = latestRequest?.summaryStatus || latestRequest?.status || profile.renewalStatus;
  const timelineStatuses = latestRequest ? requestTimelineStatuses(latestRequest) : null;
  const isFinalDecision = ["Approved", "Rejected"].includes(timelineStatuses?.decision);
  const requestName = latestRequest ? contractRequestDisplayName(latestRequest.requestType) : "Renewal";
  const timelineHeading = latestRequest ? "Request Timeline" : "Renewal Timeline";
  const timelineSubtitle = latestRequest ? `${requestName} status and decision.` : "Request status and decision.";
  const renewalTimeline = latestRequest
    ? `
          <ul class="timeline">
            <li class="timeline-item done"><span class="timeline-marker">1</span><strong>${escapeHtml(contractRequestSubmittedTitle(latestRequest.requestType))}</strong>${badge(timelineStatuses.submitted)}</li>
            <li class="timeline-item ${isFinalDecision ? "done" : "current"}"><span class="timeline-marker">2</span><strong>Review</strong>${badge(timelineStatuses.review)}</li>
            <li class="timeline-item ${isFinalDecision ? "current" : ""}"><span class="timeline-marker">3</span><strong>Decision</strong>${badge(timelineStatuses.decision)}</li>
          </ul>
        `
    : `
          <div class="empty-state renewal-timeline-empty">
            <strong>No renewal timeline yet</strong>
            <span>Request renewal to view the timeline.</span>
          </div>
        `;
  const requestRows = contractRequestHistoryRows(visibleContractHistory);

  return `
    <div class="content-stack">
      <section class="layout-two renewal-contract-layout">
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>Current Contract</h2>
              <p>Your tenancy summary.</p>
            </div>
          </div>
          <div class="detail-grid">
            <div class="detail-item"><span>Tenant name</span><strong>${escapeHtml(profile.name)}</strong></div>
            <div class="detail-item"><span>Unit</span><strong>${escapeHtml(profile.unit)}</strong></div>
            <div class="detail-item"><span>Start date</span><strong>${escapeHtml(profile.contractStart)}</strong></div>
            <div class="detail-item"><span>End date</span><strong>${escapeHtml(profile.contractEnd)}</strong></div>
            <div class="detail-item"><span>Current rent</span><strong>${escapeHtml(profile.rent)}</strong></div>
            <div class="detail-item"><span>${latestRequest ? "Request status" : "Renewal status"}</span>${detailBadge(status)}</div>
          </div>
          <div class="section-actions contract-action-row">
            <button class="button primary" type="button" data-action="request-renewal" aria-label="Request renewal from current contract">${buttonIcon("refresh")}Request Renewal</button>
            <button class="button secondary" type="button" data-action="view-doc" data-doc-title="Tenancy Contract" data-doc-owner="${escapeHtml(profile.name)}">${buttonIcon("file")}View Contract PDF</button>
            <button class="button danger contract-action-button" type="button" data-action="request-contract" data-contract-type="Contract Cancellation">Cancel Contract</button>
            <button class="button secondary contract-action-button" type="button" data-action="request-contract" data-contract-type="Contract Amendment">Request Amendment</button>
          </div>
        </div>
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>${timelineHeading}</h2>
              <p>${escapeHtml(timelineSubtitle)}</p>
            </div>
          </div>
          ${renewalTimeline}
        </div>
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Contract Request History</h2>
            <p>Latest renewal, cancellation, and amendment records.</p>
          </div>
          ${hiddenContractHistoryCount ? `<button class="button ghost" type="button" data-modal="contractHistory">View all contract requests</button>` : ""}
        </div>
        ${table(["Request", "Details", "Request made", "Status", "Notes"], requestRows, {
          countLabel: contractHistory.length ? `${visibleContractHistory.length} of ${contractHistory.length} requests` : "0 requests",
          meta: hiddenContractHistoryCount ? `${hiddenContractHistoryCount} more in history` : "Latest requests",
          emptyTitle: "No contract requests",
          emptyBody: "Submitted renewal, cancellation, and amendment requests will appear here."
        })}
      </section>
    </div>
  `;
}

function renderTenantDocuments() {
  const profile = tenantProfile();
  return `
    <div class="content-stack">
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Document Center</h2>
            <p>Tenancy files and receipts.</p>
          </div>
        </div>
        <div class="document-grid">
          ${state.data.tenant.documents
            .map(
              (doc) => `
                <article class="document-card">
                  <div class="card-title-row">
                    ${metricIcon("file")}
                    ${badgeSlot(doc.status)}
                  </div>
                  <h3>${escapeHtml(doc.name)}</h3>
                  <div class="document-meta">
                    <span>Last updated ${escapeHtml(doc.lastUpdated)}</span>
                  </div>
                  <div class="document-actions">
                    <button class="button secondary compact" type="button" data-action="view-doc" data-doc-title="${escapeHtml(doc.name)}" data-doc-owner="${escapeHtml(profile.name)}">View</button>
                    <button class="button ghost compact" type="button" data-action="download-doc" data-doc-title="${escapeHtml(doc.name)}" data-doc-owner="${escapeHtml(profile.name)}">Download</button>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

function renderManagerPage() {
  switch (state.page) {
    case "uiKit":
      return renderDesignSystemShowcase();
    case "actionCenter":
      return renderActionCenter();
    case "tenants":
      return renderTenantRecords();
    case "rentTracking":
      return renderRentTracking();
    case "chequeReview":
      return renderChequeReview();
    case "maintenanceMgmt":
      return renderMaintenanceManagement();
    case "renewalsMgmt":
      return renderRenewalsManagement();
    case "docsMgmt":
      return renderDocumentManagement();
    case "notifications":
      return renderNotifications();
    case "financial":
      return renderFinancial();
    case "portfolio":
      return renderPortfolio();
    default:
      return renderManagerDashboard();
  }
}

function renderDashboardGroupHeader(label, copy, actions = []) {
  return `
    <div class="dashboard-group-header">
      <div>
        <span class="dashboard-section-label">${escapeHtml(label)}</span>
        <p>${escapeHtml(copy)}</p>
      </div>
      ${actions.length ? renderActionButtons(actions, "inline-actions dashboard-group-actions") : ""}
    </div>
  `;
}

function renderDashboardSnapshotItem(item) {
  return `
    <button class="dashboard-snapshot-item" type="button" data-page="${escapeHtml(item.page)}" aria-label="Open ${escapeHtml(item.label)}">
      ${metricIcon(item.icon)}
      <span class="dashboard-snapshot-copy">
        <span>${escapeHtml(item.label)}</span>
        <strong>${escapeHtml(String(item.value))}</strong>
        <em>${escapeHtml(item.note)}</em>
      </span>
      <span class="dashboard-snapshot-action">${escapeHtml(item.actionLabel || metricActionLabel(item.page))}</span>
    </button>
  `;
}

function renderDashboardSnapshotCard(label, copy, items, className = "") {
  return `
    <section class="dashboard-snapshot-card ${escapeHtml(className)}">
      ${renderDashboardGroupHeader(label, copy)}
      <div class="dashboard-snapshot-grid">
        ${items.map(renderDashboardSnapshotItem).join("")}
      </div>
    </section>
  `;
}

function renderManagerDashboard() {
  const summary = getManagementDashboardSummary();
  const maintenanceCounts = summary.maintenance.byStatus;
  const maintenanceTotal = Math.max(Object.values(maintenanceCounts).reduce((total, count) => total + count, 0), 1);
  const maintenancePercent = (count) => Math.max(8, Math.round((count / maintenanceTotal) * 100));
  return `
    <div class="content-stack">
      ${renderDashboardSnapshotCard("Operations Snapshot", "Key portfolio, rent, and request numbers for today.", [
        { label: "Active Tenants", value: summary.tenants.total, note: summary.tenants.label, icon: "users", page: "tenants", actionLabel: "Manage tenants" },
        { label: "Rent Collected", value: formatAed(summary.rent.collectedAmount), note: `${summary.rent.cycleLabel} · ${summary.rent.collectedCount} ${summary.rent.collectedCount === 1 ? "payment" : "payments"}`, icon: "wallet", page: "financial", actionLabel: "Open finance" },
        { label: "Pending Rent", value: formatAed(summary.rent.pendingAmount), note: "Requires follow-up", icon: "refresh", page: "rentTracking", actionLabel: "Track rent" },
        { label: "Open Maintenance", value: summary.maintenance.openCount, note: "Active requests", icon: "tool", page: "maintenanceMgmt", actionLabel: "Open queue" },
        { label: "Pending Renewals", value: summary.renewals.pendingCount, note: "Awaiting decision", icon: "file", page: "renewalsMgmt", actionLabel: "Review renewals" },
        { label: "Total Properties", value: summary.portfolio.totalProperties, note: "Current portfolio", icon: "building", page: "portfolio", actionLabel: "View portfolio" }
      ], "operations-snapshot-card")}

      ${renderDashboardSnapshotCard("Portfolio and Documents", "Unit availability and pending document checks.", [
        { label: "Occupied Units", value: summary.portfolio.occupiedUnits, note: `${summary.portfolio.totalUnits} total units`, icon: "building", page: "portfolio", actionLabel: "View portfolio" },
        { label: "Vacant Units", value: summary.portfolio.vacantUnits, note: "Available or inactive", icon: "home", page: "portfolio", actionLabel: "View portfolio" },
        { label: "Document Reviews", value: summary.documents.pendingReviews, note: `${summary.documents.pendingReviews === 1 ? "Pending review" : "Pending reviews"}`, icon: "file", page: "docsMgmt", actionLabel: "View docs" }
      ], "portfolio-documents-card")}

      <section class="layout-three">
        <div class="section-band">
          <div class="section-header">
            <div>
              <span class="dashboard-section-label">Tenant Management</span>
              <h2>Latest Tenant Updates</h2>
              <p>Recent changes across rent, maintenance, and renewals.</p>
            </div>
          </div>
          <ul class="activity-list">
            ${summary.updates
              .map((item) => `<li class="activity-item"><span class="activity-dot"></span><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.detail)}</span></div><span>${escapeHtml(item.time)}</span></li>`)
              .join("")}
          </ul>
        </div>
        <div class="section-band">
          <div class="section-header">
            <div>
              <span class="dashboard-section-label">Rent Management</span>
              <h2>Rent Follow-ups</h2>
              <p>Tenants with pending or late rent.</p>
            </div>
          </div>
          <ul class="activity-list">
            ${summary.rent.followUps
              .map((row) => `<li class="activity-item"><span class="activity-dot"></span><div><strong>${escapeHtml(row.tenant)}</strong><span>${escapeHtml(row.amount)} due ${escapeHtml(row.dueDate)}</span></div>${badgeSlot(row.status)}</li>`)
              .join("")}
          </ul>
        </div>
        <div class="section-band">
          <div class="section-header">
            <div>
              <span class="dashboard-section-label">Operations Queue</span>
              <h2>Maintenance Status</h2>
              <p>Open work orders by current stage.</p>
            </div>
          </div>
          <div class="financial-bars">
            ${bar("New", maintenancePercent(maintenanceCounts.New), String(maintenanceCounts.New))}
            ${bar("In Progress", maintenancePercent(maintenanceCounts["In Progress"]), String(maintenanceCounts["In Progress"]))}
            ${bar("Scheduled", maintenancePercent(maintenanceCounts.Scheduled), String(maintenanceCounts.Scheduled))}
            ${bar("Completed", maintenancePercent(maintenanceCounts.Completed), `${maintenanceCounts.Completed} closed`)}
          </div>
        </div>
      </section>

      <section class="section-band">
        <div class="section-header">
          <div>
            <span class="dashboard-section-label">Finance</span>
            <h2>Financial Snapshot</h2>
            <p>Monthly income, expense, and operating performance.</p>
          </div>
        </div>
        <div class="metric-grid compact-metrics">
          ${metricCard("Rental income", formatAed(summary.finance.rentalIncome), `${summary.finance.timeframe} · occupied units`, "chart", "financial", { hideActionLabel: true })}
          ${metricCard("Expenses", formatAed(summary.finance.expenses), "Service costs", "wallet", "financial", { hideActionLabel: true })}
          ${metricCard("Net income", formatAed(summary.finance.netIncome), "Income after costs", "chart", "financial", { hideActionLabel: true })}
          ${metricCard("Operational costs", formatAed(summary.finance.operationalCosts), "Ops spend", "tool", "financial", { hideActionLabel: true })}
        </div>
      </section>
    </div>
  `;
}

function renderTenantRecords() {
  const properties = ["All", ...new Set(state.data.manager.tenants.map((tenant) => tenant.propertyName || tenant.property).filter(Boolean))];
  const rentStatuses = ["All", "Paid", "Pending", "Overdue", "Due Soon"];
  const filtered = state.data.manager.tenants.filter((tenant) => {
    const search = state.filters.tenantSearch.toLowerCase().trim();
    const searchHaystack = [
      tenant.fullName,
      tenant.name,
      tenant.email,
      tenant.phone,
      tenant.propertyName,
      tenant.property,
      tenant.unitNumber,
      tenant.unit,
      tenant.contractStatus,
      tenant.rentStatus,
      tenant.rentPaymentStatus
    ].join(" ").toLowerCase();
    const searchMatch = !search || searchHaystack.includes(search);
    const propertyMatch = state.filters.tenantProperty === "All" || (tenant.propertyName || tenant.property) === state.filters.tenantProperty;
    const rentMatch = state.filters.tenantRent === "All" || rentPaymentStatusLabel(tenant.rentPaymentStatus || tenant.rentStatus) === state.filters.tenantRent;
    return searchMatch && propertyMatch && rentMatch;
  });
  const rows = filtered.map(
    (tenant) => `
      <tr>
        <td><strong>${escapeHtml(tenant.fullName || tenant.name)}</strong><br><span class="table-subtext">${escapeHtml(tenant.email || tenant.phone)}</span></td>
        <td>${escapeHtml(tenant.unitNumber || tenant.unit)}</td>
        <td>${escapeHtml(tenant.propertyName || tenant.property)}</td>
        <td>${escapeHtml(formatAed(tenant.monthlyRent || amountNumber(tenant.rent)))}</td>
        <td>${badge(rentPaymentStatusLabel(tenant.rentPaymentStatus || tenant.rentStatus))}</td>
        <td>${badge(tenant.contractStatus)}</td>
        <td>${escapeHtml(displayDateValue(tenant.contractEndDate) || "Not set")}</td>
        <td><button class="button secondary compact" type="button" data-modal="tenantDetail" data-id="${tenant.id}">View</button></td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Tenant Database</h2>
            <p>Search, add, and export tenant records.</p>
          </div>
        </div>
        <div class="control-row">
          <div class="field">
            <label for="tenantSearch">Search tenant</label>
            <input id="tenantSearch" value="${escapeHtml(state.filters.tenantSearch)}" data-filter="tenantSearch" placeholder="Name, email, phone, unit, or status" />
          </div>
          <div class="field">
            <label for="tenantProperty">Filter by property</label>
            <select id="tenantProperty" data-filter="tenantProperty">
              ${properties.map((property) => `<option ${state.filters.tenantProperty === property ? "selected" : ""}>${escapeHtml(property)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="tenantRent">Filter by rent status</label>
            <select id="tenantRent" data-filter="tenantRent">
              ${rentStatuses.map((status) => `<option ${state.filters.tenantRent === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
            </select>
          </div>
          <button class="button secondary" type="button" data-action="export-tenants">${buttonIcon("download")}Export Excel</button>
          <button class="button secondary" type="button" data-action="add-tenant">${buttonIcon("users")}Add Tenant Record</button>
        </div>
        ${table(["Tenant", "Unit", "Property", "Monthly Rent", "Rent Status", "Contract Status", "Contract End", "Action"], rows, {
          emptyTitle: "No tenant records found.",
          emptyBody: "Try another search or add a tenant record."
        })}
        ${!filtered.length ? `<div class="section-actions"><button class="button secondary compact" type="button" data-action="add-tenant">${buttonIcon("users")}Add Tenant Record</button></div>` : ""}
      </section>
    </div>
  `;
}

function renderRentTracking() {
  const data = state.data.manager.rentRows;
  const stats = managerRentStats();
  const rows = data.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.property)}</td>
        <td>${escapeHtml(row.amount)}</td>
        <td>${escapeHtml(row.dueDate)}</td>
        <td>${badge(row.status)}</td>
        <td>
          <span class="cell-actions">
            <button class="button secondary compact" type="button" data-modal="rentDetail" data-id="${row.id}">View</button>
            <button class="button ghost compact" type="button" data-action="send-reminder" data-tenant="${escapeHtml(row.tenant)}" aria-label="Send reminder to ${escapeHtml(row.tenant)}">Send reminder</button>
          </span>
        </td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="metric-grid">
        ${metricCard("Paid Rent", formatAed(stats.paidAmount), `${stats.paidRows.length} paid`, "wallet")}
        ${metricCard("Pending Rent", formatAed(stats.pendingAmount), `${stats.pendingRows.length} pending`, "refresh")}
        ${metricCard("Late Rent", formatAed(stats.lateAmount), `${stats.lateRows.length} late`, "file")}
        ${metricCard("Expected Rent", formatAed(stats.expectedAmount), "Sample total", "chart")}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Rent Status</h2>
            <p>Paid, pending, and late rent.</p>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Property", "Rent Amount", "Due Date", "Status", "Action"], rows)}
      </section>
    </div>
  `;
}

function renderChequeReview() {
  const tabs = ["All", "Pending", "Approved", "Rejected"];
  const filtered = state.data.manager.chequeReviews.filter((row) => state.filters.chequeStatus === "All" || row.status === state.filters.chequeStatus);
  const rows = filtered.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.chequeNumber)}</td>
        <td>${escapeHtml(row.bank)}</td>
        <td>${escapeHtml(row.amount)}</td>
        <td>${escapeHtml(row.dueDate)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button secondary compact" type="button" data-modal="chequeReview" data-id="${row.id}">Review</button></td>
      </tr>
    `
  );
  const cashRows = state.data.manager.cashRequests.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.amount)}</td>
        <td>${escapeHtml(row.preferredTime)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button secondary compact" type="button" data-modal="cashReview" data-id="${row.id}">Review</button></td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Review Queue</h2>
            <p>Approve or reject payment proof.</p>
          </div>
        </div>
        <div class="tabs">
          ${tabs.map((tab) => `<button class="tab-button ${state.filters.chequeStatus === tab ? "active" : ""}" type="button" data-tab="chequeStatus" data-value="${tab}">${tab}</button>`).join("")}
        </div>
        ${table(["Tenant", "Unit", "Cheque Number", "Bank", "Amount", "Due Date", "Status", "Review"], rows)}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Cash Payment Requests</h2>
            <p>Approve or reject requested visit times.</p>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Amount", "Preferred Time", "Status", "Review"], cashRows, {
          emptyTitle: "No cash payment requests",
          emptyBody: "Tenant cash visit requests will appear here."
        })}
      </section>
    </div>
  `;
}

function renderMaintenanceManagement() {
  const stats = managerMaintenanceStats();
  const rows = state.data.manager.maintenanceRequests.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.issue)}</td>
        <td>${badge(row.priority)}</td>
        <td>${escapeHtml(row.date)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button secondary compact" type="button" data-modal="maintenanceDetail" data-id="${row.id}">Open request</button></td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="metric-grid">
        ${metricCard("New Requests", String(stats.newCount), "Triage", "tool")}
        ${metricCard("In Progress", String(stats.inProgressCount), "Active work", "refresh")}
        ${metricCard("Scheduled", String(stats.scheduledCount), "Visit booked", "file")}
        ${metricCard("Completed", String(stats.completedCount), "Closed", "check")}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Maintenance Requests</h2>
            <p>Open and update requests.</p>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Issue", "Priority", "Date", "Status", "Action"], rows)}
      </section>
    </div>
  `;
}

function renderRenewalsManagement() {
  const stats = managerRenewalStats();
  const rows = state.data.manager.renewals.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.property)}</td>
        <td>${escapeHtml(row.endDate)}</td>
        <td>${escapeHtml(row.currentRent)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button secondary compact" type="button" data-modal="renewalDetail" data-id="${row.id}">Open renewal</button></td>
      </tr>
    `
  );
  const contractRows = state.data.manager.contractRequests.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.requestType)}</td>
        <td>${escapeHtml(row.notes)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button secondary compact" type="button" data-modal="contractRequestDetail" data-id="${row.id}">Review</button></td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="metric-grid">
        ${metricCard("Pending Renewals", String(stats.pendingCount), "Need decision", "refresh")}
        ${metricCard("Approved Renewals", String(stats.approvedCount), "Approved", "check")}
        ${metricCard("Rejected Renewals", String(stats.rejectedCount), "Rejected", "close")}
        ${metricCard("Expiring Soon", String(stats.expiringSoonCount), "Within 90 days", "file")}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Renewal Requests</h2>
            <p>Review and decide.</p>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Property", "Contract End Date", "Current Rent", "Status", "Action"], rows)}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Contract Requests</h2>
            <p>Cancellation, amendment, and contract change requests.</p>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Type", "Details", "Status", "Action"], contractRows, {
          emptyTitle: "No contract requests",
          emptyBody: "Tenant contract requests will appear here."
        })}
      </section>
    </div>
  `;
}

function renderDocumentManagement() {
  const types = ["All", "Tenancy Contract", "Emirates ID", "Cheque Copy", "Payment Receipt"];
  const statuses = ["All", "Approved", "Uploaded", "In Review", "Rejected"];
  const filtered = state.data.manager.documents.filter((doc) => {
    const search = state.filters.documentSearch.toLowerCase();
    const searchMatch = !search || `${doc.tenant} ${doc.unit}`.toLowerCase().includes(search);
    const typeMatch = state.filters.documentType === "All" || doc.type === state.filters.documentType;
    const statusMatch = state.filters.documentStatus === "All" || doc.status === state.filters.documentStatus;
    return searchMatch && typeMatch && statusMatch;
  });
  const rows = filtered.map(
    (doc) => `
      <tr>
        <td>${escapeHtml(doc.tenant)}</td>
        <td>${escapeHtml(doc.unit)}</td>
        <td>${escapeHtml(doc.type)}</td>
        <td>${badge(doc.status)}</td>
        <td>${escapeHtml(doc.lastUpdated)}</td>
        <td><span class="cell-actions"><button class="button secondary compact" type="button" data-action="view-doc" data-doc-title="${escapeHtml(doc.type)}" data-doc-owner="${escapeHtml(doc.tenant)}">View</button><button class="button ghost compact" type="button" data-action="download-doc" data-doc-title="${escapeHtml(doc.type)}" data-doc-owner="${escapeHtml(doc.tenant)}">Download</button></span></td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Document Center</h2>
            <p>Search by tenant, type, or status.</p>
          </div>
        </div>
        <div class="control-row">
          <div class="field">
            <label for="documentSearch">Search tenant</label>
            <input id="documentSearch" value="${escapeHtml(state.filters.documentSearch)}" data-filter="documentSearch" placeholder="Tenant or unit" />
          </div>
          <div class="field">
            <label for="documentType">Filter document type</label>
            <select id="documentType" data-filter="documentType">
              ${types.map((type) => `<option ${state.filters.documentType === type ? "selected" : ""}>${escapeHtml(type)}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="documentStatus">Filter status</label>
            <select id="documentStatus" data-filter="documentStatus">
              ${statuses.map((status) => `<option ${state.filters.documentStatus === status ? "selected" : ""}>${escapeHtml(status)}</option>`).join("")}
            </select>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Document Type", "Status", "Last Updated", "Action"], rows)}
      </section>
    </div>
  `;
}

function renderNotifications() {
  const rows = state.data.manager.notifications.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.type)}</td>
        <td>${escapeHtml(row.message)}</td>
        <td>${escapeHtml(row.date)}</td>
        <td>${badge(row.status)}</td>
      </tr>
    `
  );
  const complaintRows = state.data.manager.complaints.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.description)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button secondary compact" type="button" data-modal="complaintDetail" data-id="${row.id}">Review</button></td>
      </tr>
    `
  );
  const suggestionRows = state.data.manager.suggestions.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.tenant)}</td>
        <td>${escapeHtml(row.unit)}</td>
        <td>${escapeHtml(row.description)}</td>
        <td>${badge(row.status)}</td>
        <td><button class="button secondary compact" type="button" data-modal="suggestionDetail" data-id="${row.id}">Review</button></td>
      </tr>
    `
  );
  const confirmed = state.confirmations.notification ? `<div class="confirmation">Notification sent.</div>` : "";

  return `
    <div class="content-stack">
      <section class="layout-two">
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>Send Reminder</h2>
              <p>Choose a tenant and message type.</p>
            </div>
          </div>
          ${confirmed}
          <form class="form-grid" data-form="notification">
            <div class="field">
              <label for="tenantSelect">Select tenant</label>
              <select id="tenantSelect" name="tenant">
                ${state.data.manager.tenants.map((tenant) => `<option>${escapeHtml(tenant.name)}</option>`).join("")}
              </select>
            </div>
            <div class="field">
              <label for="reminderType">Reminder type</label>
              <select id="reminderType" name="type">
                <option>Late payment reminder</option>
                <option>Contract renewal reminder</option>
                <option>Maintenance update</option>
                <option>General update</option>
              </select>
            </div>
            <div class="field">
              <label for="message">Message</label>
              <textarea id="message" name="message">Please review the latest portal update.</textarea>
            </div>
            <button class="button primary" type="submit">${buttonIcon("send")}Send</button>
          </form>
        </div>
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>Templates</h2>
              <p>Use a short preset.</p>
            </div>
          </div>
          <div class="quick-grid single">
            <button class="quick-card" type="button" data-action="template-late"><strong>Late payment reminder</strong><span>Ask for payment proof.</span></button>
            <button class="quick-card" type="button" data-action="template-renewal"><strong>Contract renewal reminder</strong><span>Ask for a renewal response.</span></button>
          </div>
        </div>
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Notification History</h2>
            <p>Sent tenant messages.</p>
          </div>
        </div>
        ${table(["Tenant", "Type", "Message", "Date", "Status"], rows)}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Complaint Reviews</h2>
            <p>Tenant complaints submitted from the portal.</p>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Complaint", "Status", "Action"], complaintRows, {
          emptyTitle: "No complaints",
          emptyBody: "Tenant complaints will appear here."
        })}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Suggestion Reviews</h2>
            <p>Tenant suggestions submitted from the portal.</p>
          </div>
        </div>
        ${table(["Tenant", "Unit", "Suggestion", "Status", "Action"], suggestionRows, {
          emptyTitle: "No suggestions",
          emptyBody: "Tenant suggestions will appear here."
        })}
      </section>
    </div>
  `;
}

function renderFinancial() {
  const finance = managerFinanceStats();
  const stats = managerRentStats();
  const expenseBreakdown = [["Maintenance", 38, "AED 119K"], ["Utilities", 24, "AED 75K"], ["Vendors", 20, "AED 62K"], ["Other", 18, "AED 56K"]];
  const operationalBreakdown = [["Admin", 34, "AED 40K"], ["Security", 28, "AED 33K"], ["Cleaning", 22, "AED 26K"], ["Transport", 16, "AED 19K"]];
  return `
    <div class="content-stack">
      <section class="metric-grid five">
        ${metricCard("Total Rental Income", formatAed(finance.rentalIncome), "Current occupied rent", "chart")}
        ${metricCard("Pending Rent", formatAed(finance.pendingReceivables), `${stats.pendingRows.length + stats.lateRows.length} tracked follow-ups`, "wallet")}
        ${metricCard("Monthly Expenses", formatAed(finance.expenses), "Service spend", "file")}
        ${metricCard("Operational Costs", formatAed(finance.operationalCosts), "Ops costs", "tool")}
        ${metricCard("Net Income", formatAed(finance.netIncome), "Income after costs", "chart")}
      </section>
      <section class="visual-grid">
        ${visualCard("Rental income", [["Current rent", finance.rentalIncomePercent, formatAed(finance.rentalIncome)], ["Vacancy gap", finance.vacancyGapPercent, formatAed(finance.vacancyGap)]])}
        ${visualCard("Rent tracker", [["Paid", finance.paidTrackerPercent, formatAed(stats.paidAmount)], ["Pending / Late", finance.pendingTrackerPercent, formatAed(finance.pendingReceivables)]])}
        ${visualCard("Expenses", expenseBreakdown)}
        ${visualCard("Operational costs", operationalBreakdown)}
        ${visualCard("Mortgage", [["Serviced", 72, "AED 410K"], ["Remaining", 28, "AED 160K"]])}
        ${visualCard("Insurance", [["Annual allocation", 48, "AED 92K"], ["Paid to date", 34, "AED 64K"]])}
        ${visualCard("Tax payments", [["Provisioned", 60, "AED 76K"], ["Filed", 30, "AED 38K"]])}
        ${visualCard("Transportation costs", [["Vendor trips", 46, "AED 18K"], ["Inspections", 22, "AED 9K"]])}
      </section>
    </div>
  `;
}

function portfolioSummaryCard(label, value, note, iconName, filter = "All", options = {}) {
  return `
    <button class="metric-card metric-link" type="button" data-action="open-portfolio-map" data-filter="${escapeHtml(filter)}" data-focus="${escapeHtml(options.focus || "")}" aria-label="Open ${escapeHtml(label)} on map">
      <div class="metric-top">
        <span class="label">${escapeHtml(label)}</span>
        ${metricIcon(iconName)}
      </div>
      <p class="metric-value">${escapeHtml(value)}</p>
      <div class="metric-foot">
        <span class="metric-note">${escapeHtml(note)}</span>
        <span class="metric-action">Open map</span>
      </div>
    </button>
  `;
}

function portfolioMapTitle(filter = state.filters.portfolioMapFilter) {
  const titles = {
    All: "All Properties",
    Occupied: "Occupied Properties",
    Vacant: "Properties With Vacancy",
    Mixed: "Mixed Properties"
  };
  return titles[filter] || "All Properties";
}

function portfolioFilterMatches(property, filter = state.filters.portfolioMapFilter) {
  if (filter === "Occupied") return property.occupiedUnits > 0 || property.occupancyStatus === "occupied";
  if (filter === "Vacant") return property.vacantUnits > 0 || property.occupancyStatus === "vacant";
  if (filter === "Mixed") return property.occupancyStatus === "mixed";
  return true;
}

function filteredPortfolioProperties() {
  const city = state.filters.portfolioCity;
  return state.data.manager.properties
    .map(normalizePropertyRecord)
    .filter((property) => portfolioFilterMatches(property))
    .filter((property) => city === "All" || property.city === city);
}

function propertyMapPosition(property) {
  const x = ((property.longitude - UAE_MAP_BOUNDS.minLng) / (UAE_MAP_BOUNDS.maxLng - UAE_MAP_BOUNDS.minLng)) * 100;
  const y = ((UAE_MAP_BOUNDS.maxLat - property.latitude) / (UAE_MAP_BOUNDS.maxLat - UAE_MAP_BOUNDS.minLat)) * 100;
  return {
    x: Math.min(96, Math.max(4, x)),
    y: Math.min(92, Math.max(8, y))
  };
}

function selectedPortfolioProperty(properties) {
  return properties.find((property) => property.id === state.filters.portfolioSelectedPropertyId) || properties[0] || null;
}

function renderPortfolioMarker(property, selectedId) {
  const position = propertyMapPosition(property);
  const selected = property.id === selectedId;
  return `
    <button
      class="property-marker status-${escapeHtml(statusVariant(property.status))} ${selected ? "selected" : ""}"
      type="button"
      style="left:${position.x}%; top:${position.y}%"
      data-action="select-property"
      data-id="${escapeHtml(property.id)}"
      aria-label="Select ${escapeHtml(property.name)}"
    >
      <span></span>
      <strong>${escapeHtml(property.name)}</strong>
    </button>
  `;
}

function renderPortfolioMapBase(properties, selectedId) {
  return `
    <div class="portfolio-map-shell portfolio-leaflet-shell" aria-label="Interactive property map">
      <div class="portfolio-map-toolbar" aria-label="Map controls">
        <button class="button secondary compact" type="button" data-action="portfolio-map-pan" data-direction="left" aria-label="Pan map left">←</button>
        <button class="button secondary compact" type="button" data-action="portfolio-map-pan" data-direction="up" aria-label="Pan map up">↑</button>
        <button class="button secondary compact" type="button" data-action="portfolio-map-pan" data-direction="down" aria-label="Pan map down">↓</button>
        <button class="button secondary compact" type="button" data-action="portfolio-map-pan" data-direction="right" aria-label="Pan map right">→</button>
        <button class="button secondary compact" type="button" data-action="portfolio-map-zoom" data-direction="out" aria-label="Zoom map out">-</button>
        <span>OSM</span>
        <button class="button secondary compact" type="button" data-action="portfolio-map-zoom" data-direction="in" aria-label="Zoom map in">+</button>
        <button class="button ghost compact" type="button" data-action="portfolio-map-reset">Reset</button>
      </div>
      <div
        id="portfolioPropertyMap"
        class="portfolio-leaflet-map"
        data-property-count="${escapeHtml(String(properties.length))}"
        data-selected-id="${escapeHtml(selectedId)}"
      ></div>
      <div class="portfolio-map-fallback" data-portfolio-map-fallback>
        <strong>Loading property map</strong>
        <span>Leaflet and OpenStreetMap tiles will appear here.</span>
      </div>
    </div>
  `;
}

function renderPortfolioMapCard({ showBack = false } = {}) {
  const properties = filteredPortfolioProperties();
  const selected = selectedPortfolioProperty(properties);
  const selectedId = selected?.id || "";
  const allCities = ["All", ...new Set(state.data.manager.properties.map((property) => normalizePropertyRecord(property).city).filter(Boolean))];
  const filterButtons = ["All", "Occupied", "Vacant", "Mixed"];

  return `
    <section class="section-band portfolio-map-card" id="portfolio-map-card">
      <div class="section-header portfolio-map-header">
        <div>
          <h2>Property Map</h2>
          <p>${escapeHtml(`${properties.length} ${properties.length === 1 ? "property" : "properties"} shown with live OpenStreetMap tiles.`)}</p>
        </div>
        <div class="section-actions contract-action-row">
          ${showBack ? `<button class="button ghost compact" type="button" data-action="portfolio-back">${buttonIcon("home")}Back to Portfolio</button>` : ""}
          <button class="button secondary compact" type="button" data-action="add-property">${buttonIcon("building")}Add Property</button>
        </div>
      </div>
      <div class="control-row portfolio-map-controls">
        <div class="tabs" aria-label="Portfolio map filters">
          ${filterButtons.map((filter) => `<button class="tab-button ${state.filters.portfolioMapFilter === filter ? "active" : ""}" type="button" data-action="set-portfolio-map-filter" data-filter="${filter}">${filter}</button>`).join("")}
        </div>
        <div class="field portfolio-city-field">
          <label class="sr-only" for="portfolioCity">City</label>
          <select id="portfolioCity" data-filter="portfolioCity">
            ${allCities.map((city) => `<option ${state.filters.portfolioCity === city ? "selected" : ""}>${escapeHtml(city)}</option>`).join("")}
          </select>
        </div>
      </div>
      <div class="portfolio-map-layout">
        ${renderPortfolioMapBase(properties, selectedId)}
        ${renderPortfolioDetailPanel(selected)}
      </div>
      ${renderPortfolioPropertyList(properties, selectedId)}
    </section>
  `;
}

function renderPortfolioDetailPanel(property) {
  if (!property) {
    return renderEmptyState({
      title: "No properties added yet.",
      description: "Add your first property to start building the portfolio map.",
      action: `<button class="button secondary compact" type="button" data-action="add-property">${buttonIcon("building")}Add Property</button>`
    });
  }

  return `
    <aside class="property-detail-panel" aria-label="Selected property details">
      <div class="card-title-row">
        ${metricIcon("building")}
        ${badge(property.status)}
      </div>
      <h3>${escapeHtml(property.name)}</h3>
      <p>${escapeHtml(property.propertyType)} · ${escapeHtml(property.area)}, ${escapeHtml(property.city)}</p>
      <div class="detail-grid">
        <div class="detail-item"><span>Address</span><strong>${escapeHtml(property.address)}</strong></div>
        <div class="detail-item"><span>Units</span><strong>${escapeHtml(`${property.occupiedUnits} occupied · ${property.vacantUnits} vacant`)}</strong></div>
        <div class="detail-item"><span>Asset value</span><strong>${escapeHtml(formatAed(property.assetValue, { compact: true }))}</strong></div>
        <div class="detail-item"><span>Monthly rent</span><strong>${escapeHtml(formatAed(property.currentMonthlyRent))}</strong></div>
        <div class="detail-item"><span>Coordinates</span><strong>${escapeHtml(`${property.latitude.toFixed(4)}, ${property.longitude.toFixed(4)}`)}</strong></div>
        <div class="detail-item"><span>Maintenance</span><strong>${escapeHtml(property.maintenance)}</strong></div>
      </div>
      <div class="property-notes">
        <strong>Notes</strong>
        <span>${escapeHtml(property.notes || "No property notes yet.")}</span>
      </div>
      <div class="section-actions contract-action-row">
        <button class="button secondary compact" type="button" data-modal="propertyDetail" data-id="${escapeHtml(property.id)}">View Details</button>
      </div>
    </aside>
  `;
}

function renderPortfolioPropertyList(properties, selectedId) {
  if (!properties.length) {
    return renderEmptyState({
      title: `No ${state.filters.portfolioMapFilter.toLowerCase()} properties found.`,
      description: "Clear the filter or add a property.",
      action: `<button class="button secondary compact" type="button" data-action="set-portfolio-map-filter" data-filter="All">Clear filter</button>`
    });
  }

  return `
    <div class="portfolio-property-list" aria-label="Mapped properties">
      ${properties.map((property) => `
        <button class="portfolio-property-row ${property.id === selectedId ? "selected" : ""}" type="button" data-action="select-property" data-id="${escapeHtml(property.id)}">
          <span>
            <strong>${escapeHtml(property.name)}</strong>
            <em>${escapeHtml(property.area)}, ${escapeHtml(property.city)}</em>
          </span>
          ${badgeSlot(property.status)}
        </button>
      `).join("")}
    </div>
  `;
}

function renderPortfolioMapView() {
  return `
    <div class="content-stack portfolio-map-view">
      ${renderPortfolioMapCard({ showBack: true })}
    </div>
  `;
}

function renderPortfolio() {
  const properties = state.data.manager.properties.map(normalizePropertyRecord);
  const summary = getPortfolioSummary(properties);
  const rows = properties.map(
    (property) => `
      <tr>
        <td><strong>${escapeHtml(property.name)}</strong><br><span class="table-subtext">${escapeHtml(`${property.area}, ${property.city}`)}</span></td>
        <td>${escapeHtml(property.propertyType)}</td>
        <td>${escapeHtml(property.unitCount)}</td>
        <td>${escapeHtml(`${property.occupiedUnits} / ${property.vacantUnits}`)}</td>
        <td>${escapeHtml(formatAed(property.currentMonthlyRent))}</td>
        <td class="portfolio-status-cell">${badge(property.status)}</td>
        <td><button class="button secondary compact" type="button" data-action="open-portfolio-map" data-filter="All" data-id="${escapeHtml(property.id)}">Map</button></td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="metric-grid five">
        ${portfolioSummaryCard("Total Properties", String(summary.totalProperties), "Properties", "building", "All")}
        ${portfolioSummaryCard("Occupied Properties", String(summary.occupiedProperties), `${summary.occupiedUnits} occupied units`, "users", "Occupied")}
        ${portfolioSummaryCard("Properties With Vacancy", String(summary.vacantProperties), `${summary.vacantUnits} vacant units`, "file", "Vacant")}
        ${portfolioSummaryCard("Total Units", String(summary.totalUnits), "Managed units", "home", "All")}
        ${portfolioSummaryCard("Total Assets", formatAed(summary.totalAssetValue, { compact: true }), "Portfolio value", "chart", "All", { focus: "assets" })}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Properties</h2>
            <p>Portfolio summary and map entry points.</p>
          </div>
          <button class="button secondary compact" type="button" data-action="add-property">${buttonIcon("building")}Add Property</button>
        </div>
        ${properties.length ? `
          <div class="property-grid">
            ${properties
              .map(
                (property) => `
                  <button class="property-card" type="button" data-action="open-portfolio-map" data-filter="All" data-id="${escapeHtml(property.id)}">
                    <div class="card-title-row">
                      ${metricIcon("building")}
                      ${badgeSlot(property.status)}
                    </div>
                    <h3>${escapeHtml(property.name)}</h3>
                    <div class="property-meta">
                      <span>${escapeHtml(property.area)}, ${escapeHtml(property.city)}</span>
                      <span>${escapeHtml(property.unitCount)} units · ${escapeHtml(property.occupancy)} occupied</span>
                      <span>Monthly income ${escapeHtml(formatAed(property.currentMonthlyRent))}</span>
                      <span>Maintenance: ${escapeHtml(property.maintenance)}</span>
                    </div>
                  </button>
                `
              )
              .join("")}
          </div>
        ` : renderEmptyState({
          title: "No properties added yet.",
          description: "Add your first property to start building the portfolio map.",
          action: `<button class="button secondary compact" type="button" data-action="add-property">${buttonIcon("building")}Add Property</button>`
        })}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Property Table</h2>
            <p>Key portfolio metrics.</p>
          </div>
        </div>
        ${table(["Property", "Type", "Units", "Occupied / Vacant", "Monthly Income", "Status", "Action"], rows, {
          emptyTitle: "No properties added yet.",
          emptyBody: "Add a property to populate the portfolio table."
        })}
      </section>
      ${renderPortfolioMapCard()}
    </div>
  `;
}

function bar(label, width, value) {
  return `
    <div class="bar-row">
      <div class="bar-label"><span>${escapeHtml(label)}</span><strong>${escapeHtml(value)}</strong></div>
      <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
    </div>
  `;
}

function visualCard(title, bars) {
  return `
    <article class="visual-card">
      <h3>${escapeHtml(title)}</h3>
      <div class="financial-bars">
        ${bars.map(([label, width, value]) => bar(label, width, value)).join("")}
      </div>
    </article>
  `;
}

function renderModal() {
  if (!state.modal) {
    modalRoot().innerHTML = "";
    return;
  }

  const modal = modalContent(state.modal);
  const modalClassName = ["modal", modal.large ? "large" : "", modal.className || ""]
    .filter(Boolean)
    .map(escapeHtml)
    .join(" ");
  modalRoot().innerHTML = `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="${modalClassName}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div class="modal-header">
          <div>
            <h2 id="modal-title">${escapeHtml(modal.title)}</h2>
            <p>${escapeHtml(modal.subtitle)}</p>
          </div>
          <button class="modal-close" type="button" data-action="close-modal" aria-label="Close modal">${icon.close}</button>
        </div>
        <div class="modal-body">${modal.body}</div>
        ${modal.actions ? `<div class="modal-actions">${modal.actions}</div>` : ""}
      </section>
    </div>
  `;
  window.requestAnimationFrame(() => {
    (modalRoot().querySelector("[data-autofocus]") || modalRoot().querySelector(".modal-close"))?.focus({ preventScroll: true });
  });
}

function defaultTenantRecordValues() {
  return {
    fullName: "",
    email: "",
    phone: "",
    nationality: "",
    idNumber: "",
    propertyName: "",
    unitNumber: "",
    propertyAddress: "",
    parkingBay: "",
    occupancyStatus: "Occupied",
    contractStartDate: "2026-06-01",
    contractEndDate: "2027-05-31",
    monthlyRent: "",
    securityDeposit: "",
    contractStatus: "Active",
    renewalStatus: "Not Requested",
    rentPaymentStatus: "paid",
    nextDueDate: "2026-07-05",
    lastPaymentDate: "",
    paymentMethod: "Bank Transfer",
    pendingBalance: "0",
    emergencyContactName: "",
    emergencyContactPhone: "",
    emergencyContactRelationship: "",
    notes: ""
  };
}

function tenantRecordValue(values, name) {
  return String(values?.[name] ?? defaultTenantRecordValues()[name] ?? "");
}

function tenantRecordField({ values, errors, name, label, type = "text", required = false, options = null, textarea = false, step = "", min = "" }) {
  const id = `tenantRecord-${name}`;
  const value = tenantRecordValue(values, name);
  const error = errors?.[name] || "";
  const invalidAttrs = error ? ` aria-invalid="true" aria-describedby="${id}-error"` : "";
  const requiredAttrs = required ? " required" : "";
  const typeAttrs = type ? ` type="${escapeHtml(type)}"` : "";
  const stepAttr = step ? ` step="${escapeHtml(step)}"` : "";
  const minAttr = min !== "" ? ` min="${escapeHtml(min)}"` : "";
  const fieldClass = `field${error ? " field-error" : ""}`;
  const labelCopy = `${label}${required ? " *" : ""}`;

  if (options) {
    return `
      <div class="${fieldClass}">
        <label for="${id}">${escapeHtml(labelCopy)}</label>
        <select id="${id}" name="${escapeHtml(name)}"${requiredAttrs}${invalidAttrs}>
          ${options.map((option) => `<option value="${escapeHtml(option.value)}" ${value === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
        ${error ? `<span id="${id}-error" class="form-message">${escapeHtml(error)}</span>` : ""}
      </div>
    `;
  }

  if (textarea) {
    return `
      <div class="${fieldClass}">
        <label for="${id}">${escapeHtml(labelCopy)}</label>
        <textarea id="${id}" name="${escapeHtml(name)}"${requiredAttrs}${invalidAttrs}>${escapeHtml(value)}</textarea>
        ${error ? `<span id="${id}-error" class="form-message">${escapeHtml(error)}</span>` : ""}
      </div>
    `;
  }

  return `
    <div class="${fieldClass}">
      <label for="${id}">${escapeHtml(labelCopy)}</label>
      <input id="${id}" name="${escapeHtml(name)}" value="${escapeHtml(value)}"${typeAttrs}${requiredAttrs}${stepAttr}${minAttr}${invalidAttrs}${name === "fullName" ? " data-autofocus" : ""} />
      ${error ? `<span id="${id}-error" class="form-message">${escapeHtml(error)}</span>` : ""}
    </div>
  `;
}

function tenantRecordFormSection(title, description, fields) {
  return `
    <section class="section-band">
      <div class="section-header">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
        </div>
      </div>
      <div class="detail-grid">${fields.join("")}</div>
    </section>
  `;
}

function tenantRecordModal(values = {}, errors = {}) {
  const field = (config) => tenantRecordField({ values, errors, ...config });
  const occupancyOptions = ["Occupied", "Vacant", "Reserved"].map((value) => ({ value, label: value }));
  const contractOptions = ["Active", "Expiring Soon", "Expired", "In Review"].map((value) => ({ value, label: value }));
  const renewalOptions = ["Not Requested", "Pending", "Approved", "Rejected"].map((value) => ({ value, label: value }));
  const rentOptions = [
    { value: "paid", label: "Paid" },
    { value: "pending", label: "Pending" },
    { value: "overdue", label: "Overdue" },
    { value: "due_soon", label: "Due Soon" }
  ];

  return {
    large: true,
    title: "Add Tenant Record",
    subtitle: "Create a persisted management record.",
    body: `
      <form class="form-grid" id="tenantRecordForm" data-form="tenant-record" novalidate>
        ${Object.keys(errors || {}).length ? `<div class="confirmation warning">Fix the highlighted fields before saving.</div>` : ""}
        ${tenantRecordFormSection("Personal Information", "Required contact details for the tenant profile.", [
          field({ name: "fullName", label: "Full name", required: true }),
          field({ name: "email", label: "Email", type: "email", required: true }),
          field({ name: "phone", label: "Phone number", type: "tel", required: true }),
          field({ name: "nationality", label: "Nationality" }),
          field({ name: "idNumber", label: "ID / Passport number" })
        ])}
        ${tenantRecordFormSection("Property and Unit", "Link the tenant to the managed property and unit.", [
          field({ name: "propertyName", label: "Property name", required: true }),
          field({ name: "unitNumber", label: "Unit number", required: true }),
          field({ name: "propertyAddress", label: "Property address" }),
          field({ name: "parkingBay", label: "Parking bay" }),
          field({ name: "occupancyStatus", label: "Occupancy status", options: occupancyOptions })
        ])}
        ${tenantRecordFormSection("Contract Details", "Lease dates, rent, and renewal state.", [
          field({ name: "contractStartDate", label: "Contract start date", type: "date", required: true }),
          field({ name: "contractEndDate", label: "Contract end date", type: "date", required: true }),
          field({ name: "monthlyRent", label: "Monthly rent amount", type: "number", required: true, min: "1", step: "100" }),
          field({ name: "securityDeposit", label: "Security deposit", type: "number", min: "0", step: "100" }),
          field({ name: "contractStatus", label: "Contract status", options: contractOptions }),
          field({ name: "renewalStatus", label: "Renewal status", options: renewalOptions })
        ])}
        ${tenantRecordFormSection("Payment Details", "Current rent state and finance follow-up fields.", [
          field({ name: "rentPaymentStatus", label: "Rent payment status", required: true, options: rentOptions }),
          field({ name: "nextDueDate", label: "Next due date", type: "date" }),
          field({ name: "lastPaymentDate", label: "Last payment date", type: "date" }),
          field({ name: "paymentMethod", label: "Payment method" }),
          field({ name: "pendingBalance", label: "Pending balance", type: "number", min: "0", step: "100" })
        ])}
        ${tenantRecordFormSection("Emergency Contact", "Optional fallback contact for urgent situations.", [
          field({ name: "emergencyContactName", label: "Contact name" }),
          field({ name: "emergencyContactPhone", label: "Contact phone", type: "tel" }),
          field({ name: "emergencyContactRelationship", label: "Relationship" })
        ])}
        <section class="section-band">
          <div class="section-header">
            <div>
              <h3>Notes</h3>
              <p>Internal management notes.</p>
            </div>
          </div>
          ${field({ name: "notes", label: "Notes", textarea: true })}
        </section>
      </form>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Cancel</button>
      <button class="button success" type="submit" form="tenantRecordForm">${buttonIcon("users")}Add Tenant Record</button>
    `
  };
}

function tenantRecordValuesFromForm(form) {
  const formData = new FormData(form);
  const values = defaultTenantRecordValues();
  Object.keys(values).forEach((key) => {
    values[key] = String(formData.get(key) || "").trim();
  });
  return values;
}

function validateTenantRecord(values) {
  const errors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const monthlyRent = Number(values.monthlyRent);
  const securityDeposit = values.securityDeposit === "" ? 0 : Number(values.securityDeposit);
  const pendingBalance = values.pendingBalance === "" ? 0 : Number(values.pendingBalance);
  const startDate = values.contractStartDate ? new Date(`${values.contractStartDate}T00:00:00`) : null;
  const endDate = values.contractEndDate ? new Date(`${values.contractEndDate}T00:00:00`) : null;

  if (!values.fullName) errors.fullName = "Full name is required.";
  if (!values.email) {
    errors.email = "Email is required.";
  } else if (!emailPattern.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.phone) errors.phone = "Phone number is required.";
  if (!values.propertyName) errors.propertyName = "Property name is required.";
  if (!values.unitNumber) errors.unitNumber = "Unit number is required.";
  if (!values.contractStartDate) errors.contractStartDate = "Start date is required.";
  if (!values.contractEndDate) errors.contractEndDate = "End date is required.";
  if (!Number.isFinite(monthlyRent) || monthlyRent <= 0) errors.monthlyRent = "Monthly rent must be greater than zero.";
  if (!values.rentPaymentStatus) errors.rentPaymentStatus = "Rent status is required.";
  if (startDate && endDate && endDate < startDate) errors.contractEndDate = "End date cannot be before start date.";
  if (!Number.isFinite(securityDeposit) || securityDeposit < 0) errors.securityDeposit = "Security deposit cannot be negative.";
  if (!Number.isFinite(pendingBalance) || pendingBalance < 0) errors.pendingBalance = "Pending balance cannot be negative.";

  return errors;
}

function addTenantRecord(values) {
  const now = new Date().toISOString();
  const record = normalizeTenantRecord({
    ...values,
    id: nextId("tenant"),
    monthlyRent: Number(values.monthlyRent),
    securityDeposit: values.securityDeposit === "" ? 0 : Number(values.securityDeposit),
    pendingBalance: values.pendingBalance === "" ? 0 : Number(values.pendingBalance),
    documentStatus: "Uploaded",
    createdAt: now,
    updatedAt: now
  }, state.data.manager.tenants.length);

  state.data.manager.tenants.unshift(record);
  state.data.manager.rentRows.unshift({
    id: nextId("r"),
    tenant: record.name,
    unit: record.unit,
    property: record.property,
    amount: formatAed(record.monthlyRent),
    dueDate: displayDateValue(record.nextDueDate) || "05 Jun 2026",
    status: rentRowStatusFromTenantStatus(record.rentPaymentStatus)
  });
  state.data.manager.documents.unshift({
    id: nextId("d"),
    tenant: record.name,
    unit: record.unit,
    type: "Tenancy Contract",
    status: "Uploaded",
    lastUpdated: displayDateValue(record.createdAt) || "12 Jun 2026"
  });
  return record;
}

function xmlEscape(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function columnLetter(index) {
  let value = index;
  let output = "";
  while (value > 0) {
    value -= 1;
    output = String.fromCharCode(65 + (value % 26)) + output;
    value = Math.floor(value / 26);
  }
  return output;
}

function excelDateSerial(value) {
  const dateValue = toDateInputValue(value);
  if (!dateValue) return null;
  const date = new Date(`${dateValue}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return null;
  return Math.round(date.getTime() / 86400000 + 25569);
}

function xlsxCell(rowIndex, columnIndex, value, { style = 0, type = "string" } = {}) {
  const ref = `${columnLetter(columnIndex)}${rowIndex}`;
  const styleAttr = style ? ` s="${style}"` : "";
  if (value === null || value === undefined || value === "") return `<c r="${ref}"${styleAttr}/>`;
  if (type === "number") return `<c r="${ref}"${styleAttr}><v>${Number(value) || 0}</v></c>`;
  return `<c r="${ref}" t="inlineStr"${styleAttr}><is><t>${xmlEscape(value)}</t></is></c>`;
}

function tenantExportColumns() {
  return [
    { key: "id", label: "Tenant ID", width: 24 },
    { key: "fullName", label: "Full Name", width: 22 },
    { key: "email", label: "Email", width: 28 },
    { key: "phone", label: "Phone", width: 18 },
    { key: "nationality", label: "Nationality", width: 16 },
    { key: "idNumber", label: "ID / Passport Number", width: 22 },
    { key: "propertyName", label: "Property Name", width: 26 },
    { key: "unitNumber", label: "Unit Number", width: 13 },
    { key: "propertyAddress", label: "Property Address", width: 28 },
    { key: "occupancyStatus", label: "Occupancy Status", width: 18 },
    { key: "contractStartDate", label: "Contract Start Date", width: 18, type: "date" },
    { key: "contractEndDate", label: "Contract End Date", width: 18, type: "date" },
    { key: "contractStatus", label: "Contract Status", width: 18 },
    { key: "renewalStatus", label: "Renewal Status", width: 18 },
    { key: "monthlyRent", label: "Monthly Rent", width: 16, type: "currency" },
    { key: "securityDeposit", label: "Security Deposit", width: 18, type: "currency" },
    { key: "rentPaymentStatus", label: "Rent Payment Status", width: 20, type: "rentStatus" },
    { key: "nextDueDate", label: "Next Due Date", width: 16, type: "date" },
    { key: "lastPaymentDate", label: "Last Payment Date", width: 18, type: "date" },
    { key: "paymentMethod", label: "Payment Method", width: 18 },
    { key: "pendingBalance", label: "Pending Balance", width: 18, type: "currency" },
    { key: "emergencyContactName", label: "Emergency Contact Name", width: 24 },
    { key: "emergencyContactPhone", label: "Emergency Contact Phone", width: 24 },
    { key: "emergencyContactRelationship", label: "Emergency Contact Relationship", width: 28 },
    { key: "notes", label: "Notes", width: 34, type: "wrap" },
    { key: "createdAt", label: "Created At", width: 18, type: "date" },
    { key: "updatedAt", label: "Updated At", width: 18, type: "date" }
  ];
}

function tenantExportValue(record, key) {
  const values = {
    propertyName: record.propertyName || record.property,
    unitNumber: record.unitNumber || record.unit,
    rentPaymentStatus: rentPaymentStatusLabel(record.rentPaymentStatus || record.rentStatus)
  };
  return values[key] ?? record[key] ?? "";
}

function rentStatusExportStyle(value) {
  const status = normalizeRentPaymentStatus(value);
  if (status === "paid") return 5;
  if (status === "overdue") return 7;
  if (status === "pending" || status === "due_soon") return 6;
  return 0;
}

function buildTenantRecordsWorksheet(records) {
  const columns = tenantExportColumns();
  const lastCell = `${columnLetter(columns.length)}${records.length + 1}`;
  const columnXml = columns
    .map((column, index) => `<col min="${index + 1}" max="${index + 1}" width="${column.width}" customWidth="1"/>`)
    .join("");
  const headerRow = `<row r="1" ht="22" customHeight="1">${columns.map((column, index) => xlsxCell(1, index + 1, column.label, { style: 1 })).join("")}</row>`;
  const bodyRows = records.map((record, rowIndex) => {
    const rowNumber = rowIndex + 2;
    const cells = columns.map((column, columnIndex) => {
      const value = tenantExportValue(record, column.key);
      if (column.type === "date") {
        const serial = excelDateSerial(value);
        return xlsxCell(rowNumber, columnIndex + 1, serial, { style: 2, type: serial === null ? "string" : "number" });
      }
      if (column.type === "currency") {
        return xlsxCell(rowNumber, columnIndex + 1, Number(value) || 0, { style: 3, type: "number" });
      }
      if (column.type === "rentStatus") {
        return xlsxCell(rowNumber, columnIndex + 1, value, { style: rentStatusExportStyle(value) });
      }
      if (column.type === "wrap") {
        return xlsxCell(rowNumber, columnIndex + 1, value, { style: 4 });
      }
      return xlsxCell(rowNumber, columnIndex + 1, value);
    }).join("");
    return `<row r="${rowNumber}">${cells}</row>`;
  }).join("");

  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <dimension ref="A1:${lastCell}"/>
  <sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews>
  <sheetFormatPr defaultRowHeight="18"/>
  <cols>${columnXml}</cols>
  <sheetData>${headerRow}${bodyRows}</sheetData>
  <autoFilter ref="A1:${lastCell}"/>
  <pageMargins left="0.7" right="0.7" top="0.75" bottom="0.75" header="0.3" footer="0.3"/>
</worksheet>`;
}

function buildTenantRecordsStyles() {
  return `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main">
  <numFmts count="2">
    <numFmt numFmtId="164" formatCode="dd mmm yyyy"/>
    <numFmt numFmtId="165" formatCode="&quot;AED&quot; #,##0"/>
  </numFmts>
  <fonts count="2">
    <font><sz val="11"/><color theme="1"/><name val="Aptos"/><family val="2"/></font>
    <font><b/><sz val="11"/><color rgb="FFFFFFFF"/><name val="Aptos"/><family val="2"/></font>
  </fonts>
  <fills count="6">
    <fill><patternFill patternType="none"/></fill>
    <fill><patternFill patternType="gray125"/></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FF111111"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFEAF7EE"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFF4DE"/><bgColor indexed="64"/></patternFill></fill>
    <fill><patternFill patternType="solid"><fgColor rgb="FFFFECE8"/><bgColor indexed="64"/></patternFill></fill>
  </fills>
  <borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>
  <cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>
  <cellXfs count="8">
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/>
    <xf numFmtId="0" fontId="1" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="center"/></xf>
    <xf numFmtId="164" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="165" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1"/>
    <xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1" vertical="top"/></xf>
    <xf numFmtId="0" fontId="0" fillId="3" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1"/>
    <xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1"/>
  </cellXfs>
  <cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>
</styleSheet>`;
}

function uint16(value) {
  const bytes = new Uint8Array(2);
  new DataView(bytes.buffer).setUint16(0, value, true);
  return bytes;
}

function uint32(value) {
  const bytes = new Uint8Array(4);
  new DataView(bytes.buffer).setUint32(0, value >>> 0, true);
  return bytes;
}

const CRC32_TABLE = Array.from({ length: 256 }, (_, index) => {
  let crc = index;
  for (let bit = 0; bit < 8; bit += 1) {
    crc = crc & 1 ? 0xedb88320 ^ (crc >>> 1) : crc >>> 1;
  }
  return crc >>> 0;
});

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) {
    crc = CRC32_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function concatBytes(parts) {
  const totalLength = parts.reduce((total, part) => total + part.length, 0);
  const output = new Uint8Array(totalLength);
  let offset = 0;
  parts.forEach((part) => {
    output.set(part, offset);
    offset += part.length;
  });
  return output;
}

function createZipBlob(files) {
  const encoder = new TextEncoder();
  const localParts = [];
  const centralParts = [];
  let offset = 0;

  files.forEach((file) => {
    const nameBytes = encoder.encode(file.name);
    const dataBytes = typeof file.content === "string" ? encoder.encode(file.content) : file.content;
    const checksum = crc32(dataBytes);
    const localHeader = concatBytes([
      uint32(0x04034b50),
      uint16(20),
      uint16(0),
      uint16(0),
      uint16(0),
      uint16(0),
      uint32(checksum),
      uint32(dataBytes.length),
      uint32(dataBytes.length),
      uint16(nameBytes.length),
      uint16(0),
      nameBytes
    ]);
    const centralHeader = concatBytes([
      uint32(0x02014b50),
      uint16(20),
      uint16(20),
      uint16(0),
      uint16(0),
      uint16(0),
      uint16(0),
      uint32(checksum),
      uint32(dataBytes.length),
      uint32(dataBytes.length),
      uint16(nameBytes.length),
      uint16(0),
      uint16(0),
      uint16(0),
      uint16(0),
      uint32(0),
      uint32(offset),
      nameBytes
    ]);

    localParts.push(localHeader, dataBytes);
    centralParts.push(centralHeader);
    offset += localHeader.length + dataBytes.length;
  });

  const centralDirectory = concatBytes(centralParts);
  const localDirectory = concatBytes(localParts);
  const endRecord = concatBytes([
    uint32(0x06054b50),
    uint16(0),
    uint16(0),
    uint16(files.length),
    uint16(files.length),
    uint32(centralDirectory.length),
    uint32(localDirectory.length),
    uint16(0)
  ]);

  return new Blob([localDirectory, centralDirectory, endRecord], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
}

function tenantRecordsWorkbook(records) {
  const now = new Date().toISOString();
  return createZipBlob([
    {
      name: "[Content_Types].xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/docProps/app.xml" ContentType="application/vnd.openxmlformats-officedocument.extended-properties+xml"/>
  <Override PartName="/docProps/core.xml" ContentType="application/vnd.openxmlformats-package.core-properties+xml"/>
  <Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/>
  <Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>
  <Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>
</Types>`
    },
    {
      name: "_rels/.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties" Target="docProps/core.xml"/>
  <Relationship Id="rId3" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties" Target="docProps/app.xml"/>
</Relationships>`
    },
    {
      name: "docProps/core.xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<cp:coreProperties xmlns:cp="http://schemas.openxmlformats.org/package/2006/metadata/core-properties" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:dcterms="http://purl.org/dc/terms/" xmlns:dcmitype="http://purl.org/dc/dcmitype/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <dc:title>Tenant Records</dc:title>
  <dc:creator>EstateFlow Demo</dc:creator>
  <cp:lastModifiedBy>EstateFlow Demo</cp:lastModifiedBy>
  <dcterms:created xsi:type="dcterms:W3CDTF">${now}</dcterms:created>
  <dcterms:modified xsi:type="dcterms:W3CDTF">${now}</dcterms:modified>
</cp:coreProperties>`
    },
    {
      name: "docProps/app.xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Properties xmlns="http://schemas.openxmlformats.org/officeDocument/2006/extended-properties" xmlns:vt="http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes">
  <Application>EstateFlow Demo</Application>
  <DocSecurity>0</DocSecurity>
  <ScaleCrop>false</ScaleCrop>
  <HeadingPairs><vt:vector size="2" baseType="variant"><vt:variant><vt:lpstr>Worksheets</vt:lpstr></vt:variant><vt:variant><vt:i4>1</vt:i4></vt:variant></vt:vector></HeadingPairs>
  <TitlesOfParts><vt:vector size="1" baseType="lpstr"><vt:lpstr>Tenant Records</vt:lpstr></vt:vector></TitlesOfParts>
</Properties>`
    },
    {
      name: "xl/workbook.xml",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships">
  <sheets><sheet name="Tenant Records" sheetId="1" r:id="rId1"/></sheets>
</workbook>`
    },
    {
      name: "xl/_rels/workbook.xml.rels",
      content: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/>
  <Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>`
    },
    { name: "xl/styles.xml", content: buildTenantRecordsStyles() },
    { name: "xl/worksheets/sheet1.xml", content: buildTenantRecordsWorksheet(records) }
  ]);
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function exportTenantRecordsToExcel() {
  const records = state.data.manager.tenants.map(normalizeTenantRecord);
  if (!records.length) {
    showToast("No tenant records to export.");
    return;
  }
  try {
    const filename = `tenant-records-${new Date().toISOString().slice(0, 10)}.xlsx`;
    downloadBlob(tenantRecordsWorkbook(records), filename);
    showToast("Tenant records exported.");
  } catch {
    showToast("Tenant export failed.", { variant: "error" });
  }
}

function defaultPropertyRecordValues() {
  const preset = PROPERTY_LOCATION_PRESETS[0];
  return {
    locationPreset: preset.label,
    propertyName: "",
    propertyType: "Apartment",
    city: preset.city,
    area: preset.area,
    address: preset.address,
    latitude: String(preset.latitude),
    longitude: String(preset.longitude),
    occupancyStatus: "mixed",
    unitCount: "",
    occupiedUnits: "0",
    vacantUnits: "0",
    assetValue: "",
    currentMonthlyRent: "",
    monthlyRentPotential: "",
    notes: ""
  };
}

function propertyRecordValue(values, name) {
  return String(values?.[name] ?? defaultPropertyRecordValues()[name] ?? "");
}

function propertyRecordField({ values, errors, name, label, type = "text", required = false, options = null, textarea = false, step = "", min = "", helper = "" }) {
  const id = `propertyRecord-${name}`;
  const value = propertyRecordValue(values, name);
  const error = errors?.[name] || "";
  const invalidAttrs = error ? ` aria-invalid="true" aria-describedby="${id}-message"` : helper ? ` aria-describedby="${id}-message"` : "";
  const requiredAttrs = required ? " required" : "";
  const stepAttr = step ? ` step="${escapeHtml(step)}"` : "";
  const minAttr = min !== "" ? ` min="${escapeHtml(min)}"` : "";
  const fieldClass = `field${error ? " field-error" : ""}`;
  const labelCopy = `${label}${required ? " *" : ""}`;
  const message = error || helper;

  if (options) {
    const actionAttr = name === "locationPreset" ? ' data-action="property-location-preset"' : "";
    return `
      <div class="${fieldClass}">
        <label for="${id}">${escapeHtml(labelCopy)}</label>
        <select id="${id}" name="${escapeHtml(name)}"${requiredAttrs}${invalidAttrs}${actionAttr}>
          ${options.map((option) => `<option value="${escapeHtml(option.value)}" ${value === option.value ? "selected" : ""}>${escapeHtml(option.label)}</option>`).join("")}
        </select>
        ${message ? `<span id="${id}-message" class="form-message ${error ? "" : "form-helper"}">${escapeHtml(message)}</span>` : ""}
      </div>
    `;
  }

  if (textarea) {
    return `
      <div class="${fieldClass}">
        <label for="${id}">${escapeHtml(labelCopy)}</label>
        <textarea id="${id}" name="${escapeHtml(name)}"${requiredAttrs}${invalidAttrs}>${escapeHtml(value)}</textarea>
        ${message ? `<span id="${id}-message" class="form-message ${error ? "" : "form-helper"}">${escapeHtml(message)}</span>` : ""}
      </div>
    `;
  }

  return `
    <div class="${fieldClass}">
      <label for="${id}">${escapeHtml(labelCopy)}</label>
      <input id="${id}" name="${escapeHtml(name)}" value="${escapeHtml(value)}" type="${escapeHtml(type)}"${requiredAttrs}${stepAttr}${minAttr}${invalidAttrs}${name === "propertyName" ? " data-autofocus" : ""} />
      ${message ? `<span id="${id}-message" class="form-message ${error ? "" : "form-helper"}">${escapeHtml(message)}</span>` : ""}
    </div>
  `;
}

function propertyRecordFormSection(title, description, fields) {
  return `
    <section class="section-band">
      <div class="section-header">
        <div>
          <h3>${escapeHtml(title)}</h3>
          <p>${escapeHtml(description)}</p>
        </div>
      </div>
      <div class="detail-grid">${fields.join("")}</div>
    </section>
  `;
}

function propertyRecordModal(values = {}, errors = {}) {
  const field = (config) => propertyRecordField({ values, errors, ...config });
  const typeOptions = ["Apartment", "Villa", "Commercial", "Mixed Use"].map((value) => ({ value, label: value }));
  const statusOptions = [
    { value: "occupied", label: "Occupied" },
    { value: "vacant", label: "Vacant" },
    { value: "mixed", label: "Mixed" }
  ];
  const presetOptions = PROPERTY_LOCATION_PRESETS.map((preset) => ({ value: preset.label, label: preset.label }));

  return {
    large: true,
    title: "Add Property",
    subtitle: "Create a persisted portfolio property and map marker.",
    body: `
      <form class="form-grid" id="propertyRecordForm" data-form="property-record" novalidate>
        ${Object.keys(errors || {}).length ? `<div class="confirmation warning">Fix the highlighted fields before saving.</div>` : ""}
        ${propertyRecordFormSection("Property", "Core identity and location.", [
          field({ name: "propertyName", label: "Property name", required: true }),
          field({ name: "propertyType", label: "Property type", required: true, options: typeOptions }),
          field({ name: "locationPreset", label: "Location preset", options: presetOptions, helper: "Choose a UAE area to autofill city, address, and coordinates." }),
          field({ name: "city", label: "City", required: true }),
          field({ name: "area", label: "Area", required: true }),
          field({ name: "address", label: "Address", required: true })
        ])}
        ${propertyRecordFormSection("Map Location", "Coordinates place the marker on the UAE map.", [
          field({ name: "latitude", label: "Latitude", type: "number", required: true, min: "22", step: "0.0001", helper: "Use a UAE latitude between 22 and 27." }),
          field({ name: "longitude", label: "Longitude", type: "number", required: true, min: "51", step: "0.0001", helper: "Use a UAE longitude between 51 and 57." })
        ])}
        ${propertyRecordFormSection("Portfolio Details", "Unit mix, occupancy, and asset value.", [
          field({ name: "occupancyStatus", label: "Occupancy status", required: true, options: statusOptions }),
          field({ name: "unitCount", label: "Unit count", type: "number", required: true, min: "1", step: "1" }),
          field({ name: "occupiedUnits", label: "Occupied units", type: "number", required: true, min: "0", step: "1" }),
          field({ name: "vacantUnits", label: "Vacant units", type: "number", required: true, min: "0", step: "1" }),
          field({ name: "assetValue", label: "Asset value", type: "number", required: true, min: "0", step: "100000" }),
          field({ name: "currentMonthlyRent", label: "Current monthly rent", type: "number", min: "0", step: "1000" }),
          field({ name: "monthlyRentPotential", label: "Monthly rent potential", type: "number", min: "0", step: "1000" })
        ])}
        <section class="section-band">
          <div class="section-header">
            <div>
              <h3>Notes</h3>
              <p>Optional management context.</p>
            </div>
          </div>
          ${field({ name: "notes", label: "Notes", textarea: true })}
        </section>
      </form>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Cancel</button>
      <button class="button success" type="submit" form="propertyRecordForm">${buttonIcon("building")}Add Property</button>
    `
  };
}

function propertyValuesFromForm(form) {
  const formData = new FormData(form);
  const values = defaultPropertyRecordValues();
  Object.keys(values).forEach((key) => {
    values[key] = String(formData.get(key) || "").trim();
  });
  return values;
}

function validatePropertyRecord(values) {
  const errors = {};
  const unitCount = Number(values.unitCount);
  const occupiedUnits = Number(values.occupiedUnits);
  const vacantUnits = Number(values.vacantUnits);
  const assetValue = Number(values.assetValue);
  const currentMonthlyRent = values.currentMonthlyRent === "" ? 0 : Number(values.currentMonthlyRent);
  const monthlyRentPotential = values.monthlyRentPotential === "" ? 0 : Number(values.monthlyRentPotential);
  const latitude = Number(values.latitude);
  const longitude = Number(values.longitude);

  if (!values.propertyName) errors.propertyName = "Property name is required.";
  if (!values.propertyType) errors.propertyType = "Property type is required.";
  if (!values.city) errors.city = "City is required.";
  if (!values.area) errors.area = "Area is required.";
  if (!values.address) errors.address = "Address is required.";
  if (!Number.isFinite(latitude) || latitude < 22 || latitude > 27) errors.latitude = "Enter a UAE latitude between 22 and 27.";
  if (!Number.isFinite(longitude) || longitude < 51 || longitude > 57) errors.longitude = "Enter a UAE longitude between 51 and 57.";
  if (!values.occupancyStatus) errors.occupancyStatus = "Occupancy status is required.";
  if (!Number.isFinite(unitCount) || unitCount <= 0) errors.unitCount = "Unit count must be greater than zero.";
  if (!Number.isFinite(occupiedUnits) || occupiedUnits < 0) errors.occupiedUnits = "Occupied units cannot be negative.";
  if (!Number.isFinite(vacantUnits) || vacantUnits < 0) errors.vacantUnits = "Vacant units cannot be negative.";
  if (Number.isFinite(unitCount) && Number.isFinite(occupiedUnits) && Number.isFinite(vacantUnits) && occupiedUnits + vacantUnits > unitCount) {
    errors.vacantUnits = "Occupied and vacant units cannot exceed total units.";
  }
  if (!Number.isFinite(assetValue) || assetValue < 0) errors.assetValue = "Asset value cannot be negative.";
  if (!Number.isFinite(currentMonthlyRent) || currentMonthlyRent < 0) errors.currentMonthlyRent = "Current monthly rent cannot be negative.";
  if (!Number.isFinite(monthlyRentPotential) || monthlyRentPotential < 0) errors.monthlyRentPotential = "Monthly rent potential cannot be negative.";

  return errors;
}

function addPropertyRecord(values) {
  const now = new Date().toISOString();
  const record = normalizePropertyRecord({
    ...values,
    id: nextId("property"),
    unitCount: Number(values.unitCount),
    occupiedUnits: Number(values.occupiedUnits),
    vacantUnits: Number(values.vacantUnits),
    assetValue: Number(values.assetValue),
    currentMonthlyRent: values.currentMonthlyRent === "" ? 0 : Number(values.currentMonthlyRent),
    monthlyRentPotential: values.monthlyRentPotential === "" ? 0 : Number(values.monthlyRentPotential),
    latitude: Number(values.latitude),
    longitude: Number(values.longitude),
    createdAt: now,
    updatedAt: now
  }, state.data.manager.properties.length);
  state.data.manager.properties.unshift(record);
  return record;
}

function applyPropertyPresetToForm(label) {
  const preset = PROPERTY_LOCATION_PRESETS.find((item) => item.label === label);
  if (!preset) return;
  const assignments = {
    city: preset.city,
    area: preset.area,
    address: preset.address,
    latitude: String(preset.latitude),
    longitude: String(preset.longitude)
  };
  Object.entries(assignments).forEach(([name, value]) => {
    const input = document.querySelector(`#propertyRecord-${name}`);
    if (input) input.value = value;
  });
}

function propertyById(id) {
  const row = state.data.manager.properties.find((property) => property.id === id);
  return row ? normalizePropertyRecord(row) : null;
}

function propertyDetailModal(id) {
  const property = propertyById(id);
  if (!property) return modalContent({ type: "fallback" });
  return {
    large: true,
    title: property.name,
    subtitle: `${property.area}, ${property.city}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Type</span><strong>${escapeHtml(property.propertyType)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(property.status)}</div>
        <div class="detail-item"><span>Address</span><strong>${escapeHtml(property.address)}</strong></div>
        <div class="detail-item"><span>Coordinates</span><strong>${escapeHtml(`${property.latitude.toFixed(4)}, ${property.longitude.toFixed(4)}`)}</strong></div>
        <div class="detail-item"><span>Total units</span><strong>${escapeHtml(String(property.unitCount))}</strong></div>
        <div class="detail-item"><span>Occupied / Vacant</span><strong>${escapeHtml(`${property.occupiedUnits} / ${property.vacantUnits}`)}</strong></div>
        <div class="detail-item"><span>Asset value</span><strong>${escapeHtml(formatAed(property.assetValue, { compact: true }))}</strong></div>
        <div class="detail-item"><span>Current monthly rent</span><strong>${escapeHtml(formatAed(property.currentMonthlyRent))}</strong></div>
        <div class="detail-item"><span>Rent potential</span><strong>${escapeHtml(formatAed(property.monthlyRentPotential))}</strong></div>
        <div class="detail-item"><span>Maintenance</span><strong>${escapeHtml(property.maintenance)}</strong></div>
      </div>
      <div class="section-band">
        <div class="section-header"><div><h3>Property Notes</h3><p>Saved management notes.</p></div></div>
        <div class="detail-grid">
          <div class="detail-item"><span>Notes</span><strong>${escapeHtml(property.notes || "No notes")}</strong></div>
          <div class="detail-item"><span>Amenities</span><strong>${escapeHtml(property.amenities || "No amenities added")}</strong></div>
          <div class="detail-item"><span>Maintenance notes</span><strong>${escapeHtml(property.maintenanceNotes || "No maintenance notes")}</strong></div>
          <div class="detail-item"><span>Management remarks</span><strong>${escapeHtml(property.managementRemarks || "No remarks")}</strong></div>
        </div>
      </div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
    `
  };
}

function receiptPreviewModal(reference = "") {
  const summary = tenantRentSummary();
  const receipt = tenantReceiptForPreview(reference);
  if (!receipt) {
    return {
      title: "Receipt Unavailable",
      subtitle: "No paid receipt is available for this rent cycle yet.",
      body: `<div class="confirmation warning">Complete rent payment or wait for approval before viewing a receipt.</div>`,
      actions: `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
    };
  }

  const profile = tenantProfile();
  const paymentMethod = receipt.source || summary.payment?.type || "Demo payment";
  const receiptNumber = receipt.receipt || summary.receipt;
  const receiptMonth = receipt.month || summary.rent.month;
  const paymentDate = receipt.date || summary.rent.dueDate;
  const amount = receipt.amount || summary.rent.amount;
  const recentReceipts = state.data.tenant.receipts.length ? state.data.tenant.receipts.slice(0, 3) : [receipt];

  return {
    large: true,
    title: "Receipt Preview",
    subtitle: `${receiptNumber} · ${receiptMonth}`,
    body: `
      <section class="receipt-preview-card" aria-label="Most recent rent receipt">
        <div class="receipt-preview-top">
          <div class="receipt-preview-brand">
            <span class="receipt-kicker">Rent receipt</span>
            <strong>EstateFlow Property Management</strong>
            <em>Demo invoice preview</em>
          </div>
          <div class="receipt-preview-id">
            <span>Receipt no.</span>
            <strong>${escapeHtml(receiptNumber)}</strong>
            ${badge("Paid")}
          </div>
        </div>

        <div class="receipt-preview-parties">
          <div class="receipt-preview-box">
            <span>Billed to</span>
            <strong>${escapeHtml(profile.name)}</strong>
            <em>Unit ${escapeHtml(profile.unit)} · ${escapeHtml(profile.property)}</em>
          </div>
          <div class="receipt-preview-box">
            <span>Payment details</span>
            <strong>${escapeHtml(paymentMethod)}</strong>
            <em>${escapeHtml(paymentDate)}</em>
          </div>
        </div>

        <div class="receipt-preview-lines" role="table" aria-label="Receipt line items">
          <div class="receipt-line" role="row">
            <span role="cell">
              <strong>Monthly rent</strong>
              <em>${escapeHtml(receiptMonth)} rent cycle</em>
            </span>
            <strong role="cell">${escapeHtml(amount)}</strong>
          </div>
          <div class="receipt-line muted" role="row">
            <span role="cell">
              <strong>Service fee</strong>
              <em>Included in contract rent</em>
            </span>
            <strong role="cell">AED 0</strong>
          </div>
          <div class="receipt-line total" role="row">
            <span role="cell">Total paid</span>
            <strong role="cell">${escapeHtml(amount)}</strong>
          </div>
        </div>

        <div class="receipt-note">
          <span>${icon.check}</span>
          <p>This demo receipt reflects the latest paid rent record in the tenant portal.</p>
        </div>
      </section>

      <section class="receipt-mini-list" aria-label="Recent receipts">
        <div class="receipt-mini-header">
          <span>Recent receipts</span>
          <strong>${recentReceipts.length}</strong>
        </div>
        ${recentReceipts
          .map((item) => `
            <div class="receipt-mini-row">
              <span>
                <strong>${escapeHtml(item.receipt)}</strong>
                <em>${escapeHtml(item.month)} · ${escapeHtml(item.date || "Payment date")}</em>
              </span>
              <strong>${escapeHtml(item.amount)}</strong>
            </div>
          `)
          .join("")}
      </section>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="view-all-receipts">${buttonIcon("file")}View all receipts</button>
      <button class="button secondary" type="button" data-action="download-receipt" data-receipt="${escapeHtml(receiptNumber)}">${buttonIcon("download")}Download receipt</button>
      <button class="button primary" type="button" data-action="close-modal">Done</button>
    `
  };
}

function activityHistoryModal() {
  const items = tenantDashboardActivities(tenantRentSummary());
  return {
    large: true,
    className: "activity-history-modal",
    title: "Recent Activity",
    subtitle: `${items.length} tenant ${items.length === 1 ? "update" : "updates"}`,
    body: `
      <section class="activity-history-panel" aria-label="All recent tenant activity">
        <div class="activity-history-summary">
          <span>Activity history</span>
          <strong>${items.length}</strong>
        </div>
        ${
          items.length
            ? `<ul class="activity-list activity-history-list">${items.map(renderActivityItem).join("")}</ul>`
            : `<div class="empty-state"><strong>No activity yet</strong><span>Submitted requests and rent updates will appear here.</span></div>`
        }
      </section>
    `,
    actions: `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
  };
}

function rentHistoryModal() {
  const rows = rentHistoryRows(state.data.tenant.rentHistory);
  const receiptCount = tenantReceiptDownloadRows().length;
  return {
    large: true,
    className: "activity-history-modal payment-history-modal",
    title: "Payment History",
    subtitle: `${state.data.tenant.rentHistory.length} rent ${state.data.tenant.rentHistory.length === 1 ? "cycle" : "cycles"}`,
    body: `
      <section class="activity-history-panel payment-history-panel" aria-label="Full rent payment history">
        <div class="activity-history-summary">
          <span>Payment history</span>
          <strong>${state.data.tenant.rentHistory.length}</strong>
        </div>
        ${table(["Month", "Amount", "Due Date", "Status", "Receipt"], rows, {
          hideMeta: true,
          emptyTitle: "No payment history",
          emptyBody: "Rent cycles will appear here after they are created."
        })}
      </section>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button secondary" type="button" data-action="download-receipts" ${receiptCount ? "" : "disabled"}>${buttonIcon("download")}Download receipts</button>
    `
  };
}

function contractHistoryModal() {
  const items = tenantContractRequestHistory();
  const rows = contractRequestHistoryRows(items);
  return {
    large: true,
    className: "activity-history-modal payment-history-modal contract-history-modal",
    title: "Contract Request History",
    subtitle: `${items.length} contract ${items.length === 1 ? "request" : "requests"}`,
    body: `
      <section class="activity-history-panel payment-history-panel contract-history-panel" aria-label="Full contract request history">
        <div class="activity-history-summary">
          <span>Contract requests</span>
          <strong>${items.length}</strong>
        </div>
        ${table(["Request", "Details", "Request made", "Status", "Notes"], rows, {
          hideMeta: true,
          emptyTitle: "No contract requests",
          emptyBody: "Submitted renewal, cancellation, and amendment requests will appear here."
        })}
      </section>
    `,
    actions: `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
  };
}

function modalContent(current) {
  switch (current.type) {
    case "payRent": {
      const summary = tenantRentSummary();
      return {
        title: summary.isPaid ? "Rent Already Paid" : "Choose Payment Method",
        subtitle: summary.isPaid ? "June rent is recorded as paid." : "Select card payment or request a cash visit.",
        body: `
          <div class="detail-grid">
            <div class="detail-item"><span>Amount</span><strong>${escapeHtml(summary.rent.amount)}</strong></div>
            <div class="detail-item"><span>Status</span>${detailBadge(summary.status)}</div>
            <div class="detail-item"><span>Receipt</span><strong>${escapeHtml(summary.receipt)}</strong></div>
            <div class="detail-item"><span>Next due date</span><strong>${escapeHtml(summary.rent.dueDate)}</strong></div>
          </div>
          <div class="upload-box">${summary.isPaid ? "Tenant and management rent records are already updated." : "Demo mode only. No real gateway, bank, or email service is connected."}</div>
        `,
        actions: summary.isPaid
          ? `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
          : `
              <button class="button ghost" type="button" data-action="close-modal">Cancel</button>
              <button class="button secondary" type="button" data-modal="cashPayment">${buttonIcon("wallet")}Pay by cash</button>
              <button class="button success" type="button" data-modal="cardPayment">${buttonIcon("check")}Pay by card</button>
            `
      };
    }
    case "cardPayment": {
      const summary = tenantRentSummary();
      return {
        title: "Card Payment",
        subtitle: "Demo card details only. No real payment is processed.",
        body: `
          <form class="form-grid" id="cardPaymentForm" data-form="card-payment">
            <div class="detail-item"><span>Amount due</span><strong>${escapeHtml(summary.rent.amount)}</strong></div>
            <div class="field">
              <label for="cardName">Name on card</label>
              <input id="cardName" name="cardName" value="Ahmed Khan" />
            </div>
            <div class="field">
              <label for="cardNumber">Card number</label>
              <input id="cardNumber" name="cardNumber" value="4242 4242 4242 4242" inputmode="numeric" />
            </div>
            <div class="field">
              <label for="cardExpiry">Expiry</label>
              <input id="cardExpiry" name="cardExpiry" value="12/28" />
            </div>
            <div class="field">
              <label for="cardCvc">CVC</label>
              <input id="cardCvc" name="cardCvc" value="123" inputmode="numeric" />
            </div>
          </form>
        `,
        actions: `
          <button class="button ghost" type="button" data-modal="payRent">Back</button>
          <button class="button success" type="submit" form="cardPaymentForm">${buttonIcon("check")}Pay demo</button>
        `
      };
    }
    case "cashPayment": {
      const summary = tenantRentSummary();
      return {
        title: "Cash Payment Visit",
        subtitle: "Request a preferred visit time for management approval.",
        body: `
          <form class="form-grid" id="cashPaymentForm" data-form="cash-payment">
            <div class="detail-item"><span>Amount due</span><strong>${escapeHtml(summary.rent.amount)}</strong></div>
            <div class="field">
              <label for="cashVisitTime">Preferred visit time</label>
              <input id="cashVisitTime" name="preferredTime" type="datetime-local" value="2026-06-16T10:30" />
            </div>
            <div class="field">
              <label for="cashNotes">Notes</label>
              <textarea id="cashNotes" name="notes">I would like to visit the office to pay June rent in cash.</textarea>
            </div>
          </form>
        `,
        actions: `
          <button class="button ghost" type="button" data-modal="payRent">Back</button>
          <button class="button primary" type="submit" form="cashPaymentForm">${buttonIcon("send")}Submit request</button>
        `
      };
    }
    case "paymentSuccess":
      return {
        title: "Rent Marked Paid",
        subtitle: "No real transaction was processed.",
        body: `<div class="confirmation">Tenant and management records are updated.</div>`,
        actions: `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
      };
    case "receiptPreview":
      return receiptPreviewModal(current.id);
    case "activityHistory":
      return activityHistoryModal();
    case "rentHistory":
      return rentHistoryModal();
    case "contractHistory":
      return contractHistoryModal();
    case "documentPreview":
      return {
        title: current.docTitle || "Document",
        subtitle: current.docOwner ? `${current.docOwner} · Demo preview` : "Demo preview",
        body: `
          <div class="upload-box">
            <strong>${escapeHtml(current.docTitle || "Document")}</strong><br>
            Static preview for ${escapeHtml(current.docOwner || "demo tenant")}. Live document storage is not connected in this MVP.
          </div>
        `,
        actions: `
          <button class="button ghost" type="button" data-action="download-doc" data-doc-title="${escapeHtml(current.docTitle || "Document")}" data-doc-owner="${escapeHtml(current.docOwner || "Demo tenant")}">Download</button>
          <button class="button secondary" type="button" data-action="close-modal">Close</button>
        `
      };
    case "resetData":
      return {
        title: "Reset demo data?",
        subtitle: "This restores the tenant and company portals to the original demo state.",
        body: `
          <div class="confirmation warning">
            This clears saved demo changes in this browser, including payments, requests, statuses, filters, and Action Center history.
          </div>
        `,
        actions: `
          <button class="button ghost" type="button" data-action="close-modal">Cancel</button>
          <button class="button danger" type="button" data-action="confirm-reset-data">${buttonIcon("refresh")}Reset data</button>
        `
      };
    case "actionConfirm": {
      const item = actionItemById(current.id);
      if (!item) return modalContent({ type: "fallback" });
      const copy = actionCenterConfirmationCopy(item, current.command);
      const presentation = actionCardPresentation(item);
      const metadata = [
        { label: "Type", value: item.type },
        { label: "Tenant", value: item.tenant },
        { label: "Property / Unit", value: [item.property, item.unit ? `Unit ${item.unit}` : ""].filter(Boolean).join(" · ") },
        { label: "Current status", value: actionStatusLabel(item.status) }
      ];
      return {
        title: copy.title,
        subtitle: copy.subtitle,
        body: `
          <div class="confirmation action-confirmation">
            <strong>${escapeHtml(presentation.title)}</strong>
            <span>${escapeHtml(copy.body)}</span>
          </div>
          ${renderMetadataGrid(metadata)}
        `,
        actions: `
          <button class="button ghost" type="button" data-action="close-modal">Cancel</button>
          <button class="button ${escapeHtml(copy.variant)}" type="button" data-action="confirm-action-center" data-id="${escapeHtml(item.id)}" data-command="${escapeHtml(current.command)}">${escapeHtml(copy.label)}</button>
        `
      };
    }
    case "tenantRecord":
      return tenantRecordModal(current.values || {}, current.errors || {});
    case "propertyRecord":
      return propertyRecordModal(current.values || {}, current.errors || {});
    case "propertyDetail":
      return propertyDetailModal(current.id);
    case "tenantDetail":
      return tenantDetailModal(current.id);
    case "rentDetail":
      return rentDetailModal(current.id);
    case "chequeReview":
      return chequeReviewModal(current.id);
    case "maintenanceDetail":
      return maintenanceDetailModal(current.id);
    case "renewalDetail":
      return renewalDetailModal(current.id);
    case "cashReview":
      return cashReviewModal(current.id);
    case "contractRequestDetail":
      return contractRequestModal(current.id);
    case "complaintDetail":
      return complaintDetailModal(current.id);
    case "suggestionDetail":
      return suggestionDetailModal(current.id);
    default:
      return {
        title: "Demo",
        subtitle: "Demo state.",
        body: `<div class="confirmation">This demo state is available.</div>`,
        actions: `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
      };
  }
}

function tenantDetailModal(id) {
  const sourceTenant = state.data.manager.tenants.find((item) => item.id === id);
  if (!sourceTenant) return modalContent({ type: "fallback" });
  const tenant = normalizeTenantRecord(sourceTenant);
  const rentHistory = state.data.manager.rentRows.filter((row) => row.tenant === tenant.name);
  const maintenance = state.data.manager.maintenanceRequests.filter((row) => row.tenant === tenant.name);
  const docs = state.data.manager.documents.filter((row) => row.tenant === tenant.name);
  return {
    large: true,
    title: tenant.name,
    subtitle: "Profile, lease, rent, requests, and documents.",
    body: `
      <div class="tenant-detail-modal">
        <div class="detail-grid">
          <div class="detail-item"><span>Profile</span><strong>${escapeHtml(tenant.email)}<br>${escapeHtml(tenant.phone)}</strong></div>
          <div class="detail-item"><span>Identity</span><strong>${escapeHtml([tenant.nationality, tenant.idNumber].filter(Boolean).join(" · ") || "Not provided")}</strong></div>
          <div class="detail-item"><span>Unit</span><strong>Unit ${escapeHtml(tenant.unit)} · ${escapeHtml(tenant.property)}</strong></div>
          <div class="detail-item"><span>Property address</span><strong>${escapeHtml(tenant.propertyAddress || "Not provided")}</strong></div>
          <div class="detail-item"><span>Contract</span><strong class="detail-value-line"><span class="detail-value-text">${escapeHtml(tenant.contract)}</span>${badge(tenant.contractStatus)}</strong></div>
          <div class="detail-item"><span>Renewal</span><strong class="detail-status-only">${badge(tenant.renewalStatus)}</strong></div>
          <div class="detail-item"><span>Current rent</span><strong class="detail-value-line"><span class="detail-value-text">${escapeHtml(tenant.rent)}</span>${badge(tenant.rentStatus)}</strong></div>
          <div class="detail-item"><span>Pending balance</span><strong>${escapeHtml(formatAed(tenant.pendingBalance))}</strong></div>
          <div class="detail-item"><span>Emergency contact</span><strong>${escapeHtml([tenant.emergencyContactName, tenant.emergencyContactPhone, tenant.emergencyContactRelationship].filter(Boolean).join(" · ") || "Not provided")}</strong></div>
          <div class="detail-item"><span>Notes</span><strong>${escapeHtml(tenant.notes || "No notes")}</strong></div>
        </div>
        <div class="section-band">
          <div class="section-header"><div><h3>Rent history</h3><p>Latest rent record.</p></div></div>
          ${table(["Tenant", "Amount", "Due Date", "Status"], rentHistory.map((row) => `<tr><td>${escapeHtml(row.tenant)}</td><td>${escapeHtml(row.amount)}</td><td>${escapeHtml(row.dueDate)}</td><td>${badge(row.status)}</td></tr>`))}
        </div>
        <div class="section-band">
          <div class="section-header"><div><h3>Maintenance history</h3><p>Recent requests.</p></div></div>
          ${table(["Issue", "Priority", "Date", "Status"], maintenance.map((row) => `<tr><td>${escapeHtml(row.issue)}</td><td>${badge(row.priority)}</td><td>${escapeHtml(row.date)}</td><td>${badge(row.status)}</td></tr>`))}
        </div>
        <div class="section-band">
          <div class="section-header"><div><h3>Documents</h3><p>Document records.</p></div></div>
          ${table(["Document Type", "Status", "Last Updated"], docs.map((doc) => `<tr><td>${escapeHtml(doc.type)}</td><td>${badge(doc.status)}</td><td>${escapeHtml(doc.lastUpdated)}</td></tr>`))}
        </div>
      </div>
    `,
    actions: `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
  };
}

function rentDetailModal(id) {
  const row = state.data.manager.rentRows.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  return {
    title: "Rent Record",
    subtitle: `${row.tenant} · Unit ${row.unit}`,
    body: `
      <div class="rent-detail-modal">
        <div class="detail-grid">
          <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)}</strong></div>
          <div class="detail-item"><span>Unit</span><strong>${escapeHtml(row.unit)}</strong></div>
          <div class="detail-item"><span>Property</span><strong>${escapeHtml(row.property)}</strong></div>
          <div class="detail-item"><span>Rent amount</span><strong>${escapeHtml(row.amount)}</strong></div>
          <div class="detail-item"><span>Due date</span><strong>${escapeHtml(row.dueDate)}</strong></div>
          <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
        </div>
      </div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button secondary" type="button" data-action="send-reminder" data-tenant="${escapeHtml(row.tenant)}" aria-label="Send reminder from rent record for ${escapeHtml(row.tenant)}">Send reminder</button>
    `
  };
}

function chequeReviewModal(id) {
  const row = state.data.manager.chequeReviews.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  return {
    title: "Payment Review",
    subtitle: `${row.tenant} · Unit ${row.unit}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant name</span><strong>${escapeHtml(row.tenant)}</strong></div>
        <div class="detail-item"><span>Amount</span><strong>${escapeHtml(row.amount)}</strong></div>
        <div class="detail-item"><span>Bank</span><strong>${escapeHtml(row.bank)}</strong></div>
        <div class="detail-item"><span>Cheque number</span><strong>${escapeHtml(row.chequeNumber)}</strong></div>
        <div class="detail-item"><span>Due date</span><strong>${escapeHtml(row.dueDate)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
      </div>
      <div class="upload-box">Proof preview: cheque copy and receipt.</div>
      <div class="detail-item"><span>Notes</span><strong>${escapeHtml(row.notes)}</strong></div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button danger" type="button" data-action="reject-cheque" data-id="${row.id}">Reject</button>
      <button class="button success" type="button" data-action="approve-cheque" data-id="${row.id}">${buttonIcon("check")}Approve</button>
    `
  };
}

function maintenanceDetailModal(id) {
  const row = state.data.manager.maintenanceRequests.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  const statuses = ["New", "In Progress", "Scheduled", "Completed"];
  return {
    title: "Maintenance Request",
    subtitle: `${row.tenant} · Unit ${row.unit}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)}</strong></div>
        <div class="detail-item"><span>Unit</span><strong>${escapeHtml(row.unit)}</strong></div>
        <div class="detail-item"><span>Issue</span><strong>${escapeHtml(row.issue)}</strong></div>
        <div class="detail-item"><span>Priority</span>${detailBadge(row.priority)}</div>
        <div class="detail-item"><span>Date</span><strong>${escapeHtml(row.date)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
      </div>
      <div class="detail-item"><span>Description</span><strong>${escapeHtml(row.description)}</strong></div>
      <div class="upload-box">Issue photo preview.</div>
      <div class="field">
        <label for="maintenanceStatus">Status</label>
        <select id="maintenanceStatus" data-action="maintenance-status" data-id="${row.id}">
          ${statuses.map((status) => `<option ${row.status === status ? "selected" : ""}>${status}</option>`).join("")}
        </select>
      </div>
    `,
    actions: `<button class="button secondary" type="button" data-action="close-modal">Close</button>`
  };
}

function renewalDetailModal(id) {
  const row = state.data.manager.renewals.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  return {
    title: "Renewal Request",
    subtitle: `${row.tenant} · ${row.property}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)} · Unit ${escapeHtml(row.unit)}</strong></div>
        <div class="detail-item"><span>Property</span><strong>${escapeHtml(row.property)}</strong></div>
        <div class="detail-item"><span>Contract dates</span><strong>${escapeHtml(row.startDate)} - ${escapeHtml(row.endDate)}</strong></div>
        <div class="detail-item"><span>Current rent</span><strong>${escapeHtml(row.currentRent)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
        <div class="detail-item"><span>Note</span><strong>Decision updates the tenant timeline.</strong></div>
      </div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button danger" type="button" data-action="reject-renewal" data-id="${row.id}">Reject</button>
      <button class="button success" type="button" data-action="approve-renewal" data-id="${row.id}">${buttonIcon("check")}Approve</button>
    `
  };
}

function cashReviewModal(id) {
  const row = state.data.manager.cashRequests.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  return {
    title: "Cash Payment Request",
    subtitle: `${row.tenant} · Unit ${row.unit}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)}</strong></div>
        <div class="detail-item"><span>Amount</span><strong>${escapeHtml(row.amount)}</strong></div>
        <div class="detail-item"><span>Preferred time</span><strong>${escapeHtml(row.preferredTime)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
      </div>
      <div class="detail-item"><span>Notes</span><strong>${escapeHtml(row.notes || "No notes")}</strong></div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button danger" type="button" data-action="reject-cash" data-id="${row.id}">Reject time</button>
      <button class="button success" type="button" data-action="approve-cash" data-id="${row.id}">${buttonIcon("check")}Approve time</button>
    `
  };
}

function contractRequestModal(id) {
  const row = state.data.manager.contractRequests.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  return {
    title: row.requestType,
    subtitle: `${row.tenant} · Unit ${row.unit}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)}</strong></div>
        <div class="detail-item"><span>Property</span><strong>${escapeHtml(row.property)}</strong></div>
        <div class="detail-item"><span>Current rent</span><strong>${escapeHtml(row.currentRent)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
      </div>
      <div class="detail-item"><span>Request details</span><strong>${escapeHtml(row.notes || "No notes")}</strong></div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button danger" type="button" data-action="reject-contract" data-id="${row.id}">Reject</button>
      <button class="button success" type="button" data-action="approve-contract" data-id="${row.id}">${buttonIcon("check")}Approve</button>
    `
  };
}

function complaintDetailModal(id) {
  const row = state.data.manager.complaints.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  return {
    title: "Complaint Review",
    subtitle: `${row.tenant} · Unit ${row.unit}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
        <div class="detail-item"><span>Supporting file</span><strong>${escapeHtml(row.attachment || "Attached placeholder")}</strong></div>
      </div>
      <div class="detail-item"><span>Complaint</span><strong>${escapeHtml(row.description)}</strong></div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button danger" type="button" data-action="reject-complaint" data-id="${row.id}">Reject</button>
      <button class="button secondary" type="button" data-action="ack-complaint" data-id="${row.id}">Acknowledge</button>
      <button class="button success" type="button" data-action="resolve-complaint" data-id="${row.id}">${buttonIcon("check")}Resolve</button>
    `
  };
}

function suggestionDetailModal(id) {
  const row = state.data.manager.suggestions.find((item) => item.id === id);
  if (!row) return modalContent({ type: "fallback" });
  return {
    title: "Suggestion Review",
    subtitle: `${row.tenant} · Unit ${row.unit}`,
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)}</strong></div>
        <div class="detail-item"><span>Status</span>${detailBadge(row.status)}</div>
      </div>
      <div class="detail-item"><span>Suggestion</span><strong>${escapeHtml(row.description)}</strong></div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button secondary" type="button" data-action="ack-suggestion" data-id="${row.id}">Acknowledge</button>
      <button class="button success" type="button" data-action="resolve-suggestion" data-id="${row.id}">${buttonIcon("check")}Mark reviewed</button>
    `
  };
}

function inferToastVariant(message) {
  const text = String(message || "").toLowerCase();
  if (text.includes("failed") || text.includes("error") || text.includes("rejected") || text.includes("unavailable")) return "error";
  if (text.includes("warning") || text.includes("requested") || text.includes("review") || text.includes("pending")) return "warning";
  if (text.includes("sent") || text.includes("download") || text.includes("mode")) return "info";
  if (text.includes("success") || text.includes("approved") || text.includes("submitted") || text.includes("resolved") || text.includes("updated")) return "success";
  return "neutral";
}

function showToast(message, options = {}) {
  toastCounter += 1;
  const id = `toast-${Date.now()}-${toastCounter}`;
  const variant = options.variant || inferToastVariant(message);
  const description = options.description || "";
  const node = document.createElement("div");
  node.className = `toast toast-${variant}`;
  node.id = id;
  node.dataset.toastVariant = variant;
  node.setAttribute("role", TOAST_VARIANT_COPY[variant]?.status || "status");
  node.innerHTML = `
    <span class="toast-dot" aria-hidden="true"></span>
    <span class="toast-copy">
      <strong>${escapeHtml(message)}</strong>
      ${description ? `<span>${escapeHtml(description)}</span>` : ""}
    </span>
    <button class="toast-dismiss" type="button" data-action="dismiss-toast" data-toast-id="${escapeHtml(id)}" aria-label="Dismiss notification">${icon.close}</button>
  `;
  const root = toastRoot();
  [...root.querySelectorAll(".toast")]
    .filter((toast) => toast.textContent === message)
    .forEach((toast) => toast.remove());
  root.prepend(node);
  const toasts = [...root.querySelectorAll(".toast")];
  toasts.slice(3).forEach((toast) => toast.remove());
  window.setTimeout(() => {
    const toast = document.getElementById(id);
    if (toast) toast.remove();
  }, 4200);
}

function openResetDataModal() {
  lastFocusedElement = document.activeElement;
  state.modal = { type: "resetData" };
  state.notificationPanelOpen = false;
  render();
  pushHistoryEntry();
}

function resetDemoData() {
  state.data = normalizeData(cloneData());
  state.sequence = 0;
  state.page = "dashboard";
  state.modal = null;
  state.confirmations = {};
  state.filters = defaultFilters();
  state.notificationClearedIds = [];
  state.notificationPanelOpen = false;
  ensureActionCenterData();
  saveData();
  renderAtTop();
  replaceHistoryEntry();
  showToast("Demo data reset.");
}

function focusAskAIInput() {
  window.requestAnimationFrame(() => {
    const input = document.querySelector("[data-ask-ai-input]");
    if (!input) return;
    input.focus({ preventScroll: true });
    input.setSelectionRange?.(input.value.length, input.value.length);
    const messages = document.querySelector(".ask-ai-messages");
    if (messages) messages.scrollTop = messages.scrollHeight;
  });
}

function focusAskAITrigger() {
  window.requestAnimationFrame(() => {
    document.querySelector("#ask-ai-notch")?.focus({ preventScroll: true });
  });
}

function openAskAI() {
  const nudge = ensureAskAINudgeState();
  const nudgeSuggestedPrompt = nudge.isVisible ? nudge.suggestedPrompt : "";
  const nudgeContext = nudge.isVisible ? nudge.context : null;
  ensureAskAIMessages();
  clearAskAINudge({ schedule: false, setCooldown: false });
  if (nudgeSuggestedPrompt && !state.askAI.inputValue.trim()) {
    state.askAI.inputValue = nudgeSuggestedPrompt;
  }
  state.askAI.contextPrompt = nudgeSuggestedPrompt || "";
  state.askAI.nudgeContext = nudgeContext;
  state.askAI.isOpen = true;
  state.askAI.isExpanded = true;
  state.askAI.activationState = "activating";
  state.askAI.error = null;
  state.notificationPanelOpen = false;
  render();
  focusAskAIInput();
}

function closeAskAI() {
  if (!state.askAI.isOpen) return;
  persistActiveAskAISession();
  state.askAI.isOpen = false;
  state.askAI.isExpanded = false;
  state.askAI.isTyping = false;
  state.askAI.error = null;
  state.askAI.contextPrompt = "";
  state.askAI.nudgeContext = null;
  state.askAI.activationState = "idle";
  render();
  ensureAskAINudgeScheduler();
  focusAskAITrigger();
}

function updateAskAISendState(input) {
  if (!input) return;
  const form = input.closest("form");
  const button = form?.querySelector(".ask-ai-send");
  if (button) button.disabled = !input.value.trim() || state.askAI.isTyping;
}

function applyAskAISuggestion(prompt) {
  state.askAI.inputValue = String(prompt || "").trim();
  const input = document.querySelector("[data-ask-ai-input]");
  if (input) {
    input.value = state.askAI.inputValue;
    updateAskAISendState(input);
    input.focus({ preventScroll: true });
  } else {
    render();
    focusAskAIInput();
  }
}

async function submitAskAIMessage(form) {
  if (state.askAI.isTyping) return;
  const formData = new FormData(form);
  const message = String(formData.get("message") || state.askAI.inputValue || "").trim();
  if (!message) {
    updateAskAISendState(form.querySelector("[data-ask-ai-input]"));
    return;
  }

  const userMessage = {
    id: nextId("ai-user"),
    role: "user",
    content: message,
    createdAt: new Date().toISOString()
  };

  if (!activeAskAISession()) ensureAskAIMessages();
  const submittedSessionId = state.askAI.activeSessionId;
  state.askAI.messages = [...state.askAI.messages, userMessage].slice(-ASK_AI_MESSAGE_LIMIT);
  state.askAI.inputValue = "";
  state.askAI.isTyping = true;
  state.askAI.error = null;
  persistActiveAskAISession();
  render();
  focusAskAIInput();

  try {
    const response = await askAI(buildAskAIContext(message));
    const submittedSession = state.askAI.sessions.find((session) => session.id === submittedSessionId);
    if (submittedSession && state.askAI.activeSessionId !== submittedSessionId) {
      submittedSession.messages = [...submittedSession.messages, response].slice(-ASK_AI_MESSAGE_LIMIT);
      submittedSession.title = askAIChatTitle(submittedSession.messages);
      submittedSession.updatedAt = new Date().toISOString();
      saveAskAISessions();
    } else {
      state.askAI.messages = [...state.askAI.messages, response].slice(-ASK_AI_MESSAGE_LIMIT);
      saveAskAIMessages();
    }
    state.askAI.isTyping = false;
    render();
    focusAskAIInput();
  } catch {
    state.askAI.isTyping = false;
    state.askAI.error = "AI response could not be loaded. Try again.";
    render();
    focusAskAIInput();
  }
}

function formatDateInput(value) {
  if (!value) return "12 Jun 2026";
  const [year, month, day] = value.split("-");
  const names = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${day} ${names[Number(month) - 1]} ${year}`;
}

function formatDateTimeInput(value) {
  if (!value) return "16 Jun 2026, 10:30";
  const [date, time = "10:30"] = String(value).split("T");
  return `${formatDateInput(date)}, ${time}`;
}

document.addEventListener("click", (event) => {
  const uiKitButton = event.target.closest('[data-action="open-ui-kit"]');
  if (!uiKitButton) return;
  event.preventDefault();
  event.stopPropagation();
  navigateToPage("uiKit");
}, true);

document.addEventListener("click", (event) => {
  const notificationShell = event.target.closest(".notifications-menu");
  const roleButton = event.target.closest("[data-role-option]");
  if (roleButton) {
    state.selectedRole = roleButton.dataset.roleOption;
    state.notificationPanelOpen = false;
    state.askAI.isOpen = false;
    state.askAI.isExpanded = false;
    state.askAI.activationState = "idle";
    state.askAI.contextPrompt = "";
    state.askAI.nudgeContext = null;
    render();
    replaceHistoryEntry();
    return;
  }

  const pageButton = event.target.closest("[data-page]");
  if (pageButton) {
    navigateToPage(pageButton.dataset.page);
    return;
  }

  const modalButton = event.target.closest("[data-modal]");
  if (modalButton) {
    lastFocusedElement = modalButton;
    state.modal = { type: modalButton.dataset.modal, id: modalButton.dataset.id };
    state.notificationPanelOpen = false;
    render();
    pushHistoryEntry();
    return;
  }

  const tab = event.target.closest("[data-tab]");
  if (tab) {
    state.filters[tab.dataset.tab] = tab.dataset.value;
    render();
    return;
  }

  const actionButton = event.target.closest("[data-action]");
  if (!actionButton) {
    if (state.notificationPanelOpen && !notificationShell) {
      state.notificationPanelOpen = false;
      render();
    }
    return;
  }

  const action = actionButton.dataset.action;

  if (action === "dismiss-toast") {
    document.getElementById(actionButton.dataset.toastId)?.remove();
    return;
  }

  if (action === "toast-example") {
    const variant = actionButton.dataset.toastVariant || "info";
    showToast(`${TOAST_VARIANT_COPY[variant]?.title || "Update"} toast`, {
      variant,
      description: "This uses the shared dashboard toast component."
    });
    return;
  }

  if (action === "open-ui-kit") {
    navigateToPage("uiKit");
    return;
  }

  if (action === "dismiss-ask-ai-nudge") {
    event.preventDefault();
    event.stopPropagation();
    dismissAskAINudge({ manual: true });
    return;
  }

  if (action === "trigger-ask-ai-nudge") {
    triggerAskAINudge();
    return;
  }

  if (action === "toggle-ask-ai") {
    state.askAI.isOpen ? closeAskAI() : openAskAI();
    return;
  }

  if (action === "close-ask-ai") {
    closeAskAI();
    return;
  }

  if (action === "ask-ai-new-chat") {
    startNewAskAIChat();
    render();
    focusAskAIInput();
    return;
  }

  if (action === "select-ask-ai-session") {
    selectAskAISession(actionButton.dataset.id);
    render();
    focusAskAIInput();
    return;
  }

  if (action === "ask-ai-suggestion") {
    applyAskAISuggestion(actionButton.dataset.prompt);
    return;
  }

  if (action === "clear-ask-ai") {
    state.askAI.messages = [];
    state.askAI.inputValue = "";
    state.askAI.error = null;
    state.askAI.isTyping = false;
    saveAskAIMessages();
    showToast("AI chat cleared.");
    render();
    focusAskAIInput();
    return;
  }

  if (action === "reset-data") {
    openResetDataModal();
    return;
  }

  if (action === "confirm-reset-data") {
    resetDemoData();
    return;
  }

  if (action === "close-modal") {
    if (event.target.classList.contains("modal-backdrop") || actionButton.closest(".modal-close") || actionButton.classList.contains("button")) {
      closeModal();
    }
    return;
  }

  if (action === "logout") {
    persistActiveAskAISession();
    state.auth = false;
    state.role = null;
    state.page = "dashboard";
    state.modal = null;
    state.notificationPanelOpen = false;
    state.askAI.isOpen = false;
    state.askAI.isExpanded = false;
    state.askAI.isTyping = false;
    state.askAI.error = null;
    state.askAI.contextPrompt = "";
    state.askAI.nudgeContext = null;
    state.askAI.activationState = "idle";
    renderAtTop();
    replaceHistoryEntry();
    return;
  }

  if (action === "toggle-theme") {
    state.theme = state.theme === "dark" ? "light" : "dark";
    state.notificationPanelOpen = false;
    saveTheme();
    render();
    showToast(`${state.theme === "dark" ? "Dark" : "Light"} mode on.`);
    return;
  }

  if (action === "notify") {
    state.notificationPanelOpen = !state.notificationPanelOpen;
    render();
    return;
  }

  if (action === "clear-notifications") {
    const ids = notificationItems().map((item) => item.id).filter(Boolean);
    state.notificationClearedIds = [...new Set([...(state.notificationClearedIds || []), ...ids])];
    showToast("Notifications cleared.");
    render();
    return;
  }

  if (action === "confirm-action-center") {
    state.modal = null;
    applyActionCenterCommand(actionButton.dataset.id, actionButton.dataset.command);
    replaceHistoryEntry();
    return;
  }

  if (action === "action-center") {
    const viewportAnchor = actionButton.dataset.command === "dismiss-card" ? actionCardViewportAnchor(actionButton) : null;
    if (state.role === "manager" && actionCenterCommandNeedsConfirmation(actionButton.dataset.command)) {
      const item = actionItemById(actionButton.dataset.id);
      if (!item || !roleCanActOnItem(item)) {
        showToast("Action unavailable.");
        return;
      }
      lastFocusedElement = actionButton;
      state.modal = { type: "actionConfirm", id: item.id, command: actionButton.dataset.command };
      state.notificationPanelOpen = false;
      render();
      pushHistoryEntry();
      return;
    }
    applyActionCenterCommand(actionButton.dataset.id, actionButton.dataset.command, { viewportAnchor });
    return;
  }

  if (action === "confirm-demo-payment") {
    markTenantRentPaid();
    state.modal = { type: "paymentSuccess" };
    saveData();
    render();
    replaceHistoryEntry();
    return;
  }

  if (action === "request-renewal") {
    if (renewalRequestAlreadySubmitted()) {
      showDuplicateRequestToast("Renewal request");
      return;
    }
    state.confirmations.renewal = true;
    state.data.tenant.profile.renewalStatus = "Submitted";
    const renewal = upsertManagerRenewalRequest();
    const item = ensureActionFromRenewal(renewal);
    setActionStatus(item, "Submitted", "tenant", "Renewal requested", "Tenant submitted a renewal request.");
    recordTenantActivity("Renewal requested", "Renewal request submitted for review.");
    saveData();
    showToast("Renewal request submitted.");
    render();
    replaceHistoryEntry();
    return;
  }

  if (action === "request-contract") {
    const profile = tenantProfile();
    const requestType = actionButton.dataset.contractType || "Contract Amendment";
    if (contractRequestAlreadySubmitted(requestType)) {
      showDuplicateRequestToast(contractRequestDisplayName(requestType));
      return;
    }
    const createdAt = new Date().toISOString();
    const request = {
      id: nextId("contract"),
      tenant: profile.name,
      unit: profile.unit,
      property: profile.property,
      requestType,
      currentRent: profile.rent,
      notes: `${requestType} requested from tenant portal.`,
      status: "Pending",
      createdAt,
      updatedAt: createdAt
    };
    state.data.tenant.contractRequests.unshift({ ...request });
    state.data.manager.contractRequests.unshift({ ...request });
    const item = ensureActionFromContractRequest(request);
    const submittedTitle = contractRequestSubmittedTitle(requestType);
    setActionStatus(item, "Pending", "tenant", submittedTitle, request.notes);
    recordTenantActivity("Contract request submitted", requestType);
    saveData();
    showToast(`${submittedTitle}.`);
    render();
    return;
  }

  if (action === "cancel-maintenance") {
    const profile = tenantProfile();
    const tenantRequest = state.data.tenant.maintenanceRequests.find((row) => row.id === actionButton.dataset.id);
    if (tenantRequest) {
      tenantRequest.status = "Canceled";
      const managerRequest = state.data.manager.maintenanceRequests.find((row) =>
        row.tenant === profile.name && row.unit === profile.unit && row.date === tenantRequest.date
      );
      if (managerRequest) {
        managerRequest.status = "Canceled";
        const item = ensureActionFromMaintenance(managerRequest);
        setActionStatus(item, "Canceled", "tenant", "Maintenance canceled", "Tenant canceled the request.");
      }
      recordTenantActivity("Maintenance canceled", tenantRequest.issue);
      saveData();
      showToast("Maintenance canceled.");
      render();
    }
    return;
  }

  if (action === "cancel-complaint") {
    const complaint = state.data.tenant.complaints.find((row) => row.id === actionButton.dataset.id);
    const managerComplaint = state.data.manager.complaints.find((row) => row.id === actionButton.dataset.id);
    if (complaint) complaint.status = "Canceled";
    if (managerComplaint) {
      managerComplaint.status = "Canceled";
      const item = ensureActionFromComplaint(managerComplaint);
      setActionStatus(item, "Canceled", "tenant", "Complaint canceled", "Tenant canceled the complaint.");
    }
    saveData();
    showToast("Complaint canceled.");
    render();
    return;
  }

  if (action === "cancel-suggestion") {
    const suggestion = state.data.tenant.suggestions.find((row) => row.id === actionButton.dataset.id);
    const managerSuggestion = state.data.manager.suggestions.find((row) => row.id === actionButton.dataset.id);
    if (suggestion) suggestion.status = "Canceled";
    if (managerSuggestion) {
      managerSuggestion.status = "Canceled";
      const item = ensureActionFromSuggestion(managerSuggestion);
      setActionStatus(item, "Canceled", "tenant", "Suggestion canceled", "Tenant canceled the suggestion.");
    }
    saveData();
    showToast("Suggestion canceled.");
    render();
    return;
  }

  if (action === "send-reminder") {
    addNotification(
      actionButton.dataset.tenant || "Tenant",
      "Late payment reminder",
      "Rent is pending. Submit payment proof for review."
    );
    saveData();
    showToast("Reminder sent.");
    render();
    return;
  }

  if (action === "approve-cheque" || action === "reject-cheque") {
    const row = state.data.manager.chequeReviews.find((item) => item.id === actionButton.dataset.id);
    if (row) {
      row.status = action === "approve-cheque" ? "Approved" : "Rejected";
      state.modal = null;
      syncTenantPaymentStatus(row);
      const item = ensureActionFromChequeReview(row);
      setActionStatus(
        item,
        row.status,
        "manager",
        `Payment ${row.status.toLowerCase()}`,
        row.status === "Approved" ? `${row.amount} verified.` : "Tenant needs to submit updated proof."
      );
      saveData();
      showToast(`Payment ${row.status.toLowerCase()}.`);
      render();
      replaceHistoryEntry();
    }
    return;
  }

  if (action === "approve-renewal" || action === "reject-renewal") {
    const row = state.data.manager.renewals.find((item) => item.id === actionButton.dataset.id);
    if (row) {
      row.status = action === "approve-renewal" ? "Approved" : "Rejected";
      row.updatedAt = new Date().toISOString();
      state.modal = null;
      syncTenantRenewalStatus(row);
      const item = ensureActionFromRenewal(row);
      setActionStatus(
        item,
        row.status,
        "manager",
        `Renewal ${row.status.toLowerCase()}`,
        row.status === "Approved" ? "Renewal request approved." : "Renewal request rejected."
      );
      saveData();
      showToast(`Renewal ${row.status.toLowerCase()}.`);
      render();
      replaceHistoryEntry();
    }
    return;
  }

  if (action === "approve-cash" || action === "reject-cash") {
    const row = state.data.manager.cashRequests.find((item) => item.id === actionButton.dataset.id);
    if (row) {
      row.status = action === "approve-cash" ? "Approved" : "Rejected";
      row.decisionNote = action === "approve-cash" ? "Visit time approved." : "Choose another visit time.";
      state.modal = null;
      syncTenantCashRequestStatus(row);
      const item = ensureActionFromCashRequest(row);
      setActionStatus(
        item,
        row.status,
        "manager",
        action === "approve-cash" ? "Cash visit approved" : "Cash visit rejected",
        row.decisionNote
      );
      saveData();
      showToast(action === "approve-cash" ? "Cash visit approved." : "Cash visit rejected.");
      render();
      replaceHistoryEntry();
    }
    return;
  }

  if (action === "approve-contract" || action === "reject-contract") {
    const row = state.data.manager.contractRequests.find((item) => item.id === actionButton.dataset.id);
    if (row) {
      row.status = action === "approve-contract" ? "Approved" : "Rejected";
      row.updatedAt = new Date().toISOString();
      row.decisionNote = action === "approve-contract" ? "Contract request approved." : "Contract request rejected.";
      state.modal = null;
      syncTenantContractRequestStatus(row);
      const item = ensureActionFromContractRequest(row);
      setActionStatus(item, row.status, "manager", row.decisionNote, row.requestType);
      saveData();
      showToast(row.decisionNote);
      render();
      replaceHistoryEntry();
    }
    return;
  }

  if (["ack-complaint", "resolve-complaint", "reject-complaint"].includes(action)) {
    const row = state.data.manager.complaints.find((item) => item.id === actionButton.dataset.id);
    if (row) {
      row.status = action === "ack-complaint" ? "In Review" : action === "resolve-complaint" ? "Completed" : "Rejected";
      state.modal = null;
      syncTenantComplaintStatus(row);
      const item = ensureActionFromComplaint(row);
      setActionStatus(item, row.status, "manager", `Complaint ${row.status.toLowerCase()}`, row.description);
      saveData();
      showToast(`Complaint ${row.status.toLowerCase()}.`);
      render();
      replaceHistoryEntry();
    }
    return;
  }

  if (["ack-suggestion", "resolve-suggestion"].includes(action)) {
    const row = state.data.manager.suggestions.find((item) => item.id === actionButton.dataset.id);
    if (row) {
      row.status = action === "ack-suggestion" ? "In Review" : "Completed";
      state.modal = null;
      syncTenantSuggestionStatus(row);
      const item = ensureActionFromSuggestion(row);
      setActionStatus(item, row.status, "manager", `Suggestion ${row.status.toLowerCase()}`, row.description);
      saveData();
      showToast(`Suggestion ${row.status.toLowerCase()}.`);
      render();
      replaceHistoryEntry();
    }
    return;
  }

  if (action === "view-doc") {
    lastFocusedElement = actionButton;
    state.modal = {
      type: "documentPreview",
      docTitle: actionButton.dataset.docTitle || "Document",
      docOwner: actionButton.dataset.docOwner || ""
    };
    render();
    pushHistoryEntry();
    return;
  }

  if (action === "download-receipt") {
    downloadDemoReceipt(actionButton.dataset.receipt);
    showToast("Receipt download started.");
    return;
  }

  if (action === "download-receipts") {
    if (downloadTenantReceipts()) {
      showToast("Receipts download started.");
    } else {
      showToast("No receipts to download.", { variant: "warning" });
    }
    return;
  }

  if (action === "view-all-receipts") {
    state.modal = { type: "rentHistory" };
    render();
    replaceHistoryEntry();
    return;
  }

  if (action === "download-doc") {
    downloadDemoDocument(actionButton.dataset.docTitle, actionButton.dataset.docOwner);
    showToast("Download started.");
    return;
  }

  if (action === "open-portfolio-map") {
    const filter = actionButton.dataset.filter || "All";
    const focus = actionButton.dataset.focus || "";
    const requestedId = actionButton.dataset.id || "";
    state.filters.portfolioView = "summary";
    state.filters.portfolioMapFilter = filter;
    state.filters.portfolioCity = "All";
    const scopedProperties = state.data.manager.properties
      .map(normalizePropertyRecord)
      .filter((property) => portfolioFilterMatches(property, filter));
    const selected = requestedId
      ? scopedProperties.find((property) => property.id === requestedId)
      : focus === "assets"
        ? [...scopedProperties].sort((a, b) => b.assetValue - a.assetValue)[0]
        : scopedProperties[0];
    state.filters.portfolioSelectedPropertyId = selected?.id || "";
    state.page = "portfolio";
    render();
    scrollToPortfolioMapCard();
    pushHistoryEntry();
    return;
  }

  if (action === "portfolio-back") {
    state.filters.portfolioView = "summary";
    state.filters.portfolioSelectedPropertyId = "";
    state.filters.portfolioMapFilter = "All";
    state.filters.portfolioCity = "All";
    state.filters.portfolioMapZoom = "1";
    renderAtTop();
    replaceHistoryEntry();
    return;
  }

  if (action === "set-portfolio-map-filter") {
    state.filters.portfolioView = "summary";
    state.filters.portfolioMapFilter = actionButton.dataset.filter || "All";
    state.filters.portfolioSelectedPropertyId = "";
    render();
    return;
  }

  if (action === "select-property") {
    state.filters.portfolioSelectedPropertyId = actionButton.dataset.id || "";
    render();
    return;
  }

  if (action === "portfolio-map-zoom") {
    const direction = actionButton.dataset.direction;
    if (portfolioLeafletMap) {
      stopPortfolioMapMotion();
      const currentZoom = portfolioLeafletMap.getZoom();
      const minZoom = portfolioLeafletMap.getMinZoom();
      const maxZoom = portfolioLeafletMap.getMaxZoom();
      const nextZoom = direction === "in" ? currentZoom + 1 : currentZoom - 1;
      portfolioLeafletMap.setZoom(Math.min(maxZoom, Math.max(minZoom, nextZoom)), { animate: false });
      return;
    }
    initializePortfolioLeafletMap();
    return;
  }

  if (action === "portfolio-map-pan") {
    const direction = actionButton.dataset.direction;
    const distance = 90;
    const movement = {
      left: [-distance, 0],
      right: [distance, 0],
      up: [0, -distance],
      down: [0, distance]
    }[direction] || [0, 0];
    stopPortfolioMapMotion();
    portfolioLeafletMap?.panBy(movement, { animate: false });
    return;
  }

  if (action === "portfolio-map-reset") {
    state.filters.portfolioSelectedPropertyId = "";
    render();
    return;
  }

  if (action === "add-property") {
    lastFocusedElement = actionButton;
    state.modal = { type: "propertyRecord", values: defaultPropertyRecordValues(), errors: {} };
    state.notificationPanelOpen = false;
    render();
    pushHistoryEntry();
    return;
  }

  if (action === "export-tenants") {
    exportTenantRecordsToExcel();
    return;
  }

  if (action === "add-tenant") {
    lastFocusedElement = actionButton;
    state.modal = { type: "tenantRecord", values: defaultTenantRecordValues(), errors: {} };
    state.notificationPanelOpen = false;
    render();
    pushHistoryEntry();
    return;
  }

  if (action === "template-late") {
    const message = document.querySelector("#message");
    if (message) message.value = "Rent is pending. Submit payment proof for review.";
    showToast("Late payment template applied.");
    return;
  }

  if (action === "template-renewal") {
    const message = document.querySelector("#message");
    if (message) message.value = "Renewal is due soon. Please confirm next steps.";
    showToast("Renewal template applied.");
  }
});

document.addEventListener("input", (event) => {
  const search = event.target.closest("[data-ask-ai-session-search]");
  if (search) {
    state.askAI.search = search.value;
    renderPreservingControl(search);
    return;
  }

  const input = event.target.closest("[data-ask-ai-input]");
  if (!input) return;
  state.askAI.inputValue = input.value;
  const session = activeAskAISession();
  if (session) {
    session.inputValue = state.askAI.inputValue;
    saveAskAISessions();
  }
  updateAskAISendState(input);
});

document.addEventListener("submit", async (event) => {
  const form = event.target.closest("form");
  if (!form) return;
  event.preventDefault();

  if (form.dataset.form === "login") {
    state.auth = true;
    state.role = state.selectedRole;
    state.page = "dashboard";
    state.confirmations = {};
    state.filters = defaultFilters();
    state.modal = null;
    state.notificationPanelOpen = false;
    state.askAI = {
      isOpen: false,
      messages: [],
      inputValue: "",
      isTyping: false,
      error: null,
      isExpanded: false,
      activationState: "idle",
      sessions: [],
      activeSessionId: "",
      search: "",
      contextPrompt: "",
      nudgeContext: null,
      nudge: defaultAskAINudgeState()
    };
    ensureAskAIMessages(state.role);
    ensureActionCenterData({ persist: true });
    renderAtTop();
    pushHistoryEntry();
    return;
  }

  if (form.dataset.form === "ask-ai") {
    await submitAskAIMessage(form);
    return;
  }

  if (form.dataset.form === "card-payment") {
    const formData = new FormData(form);
    const cardNumber = String(formData.get("cardNumber") || "").replace(/\D/g, "");
    const cardName = String(formData.get("cardName") || "").trim();
    const cardExpiry = String(formData.get("cardExpiry") || "").trim();
    const cardCvc = String(formData.get("cardCvc") || "").replace(/\D/g, "");
    if (!cardName || cardNumber.length < 12 || !cardExpiry || cardCvc.length < 3) {
      showToast("Enter demo card details.");
      return;
    }
    const receipt = nextReceiptNumber();
    markTenantRentPaid({ receipt, source: "Card payment" });
    state.modal = { type: "paymentSuccess" };
    saveData();
    showToast("Payment successful.");
    showToast("Email sent.");
    render();
    replaceHistoryEntry();
    return;
  }

  if (form.dataset.form === "cash-payment") {
    const formData = new FormData(form);
    const profile = tenantProfile();
    const summary = tenantRentSummary();
    if (currentTenantCashRequest()) {
      showDuplicateRequestToast("Cash visit request");
      return;
    }
    const request = {
      id: nextId("cash"),
      tenant: profile.name,
      unit: profile.unit,
      property: profile.property,
      amount: summary.rent.amount,
      dueDate: summary.rent.dueDate,
      preferredTime: formatDateTimeInput(formData.get("preferredTime")),
      notes: formData.get("notes") || "Cash payment visit requested.",
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    state.data.tenant.cashRequests.unshift({ ...request });
    state.data.manager.cashRequests.unshift({ ...request });
    const item = ensureActionFromCashRequest(request);
    setActionStatus(item, "Pending", "tenant", "Cash visit requested", request.preferredTime);
    recordTenantActivity("Cash visit requested", `${request.amount} on ${request.preferredTime}.`);
    state.modal = null;
    saveData();
    showToast("Cash visit requested.");
    render();
    replaceHistoryEntry();
    return;
  }

  if (form.dataset.form === "tenant-maintenance") {
    const formData = new FormData(form);
    const profile = tenantProfile();
    const category = formData.get("issueCategory");
    const description = formData.get("description");
    if (maintenanceRequestAlreadySubmitted(category, description)) {
      showDuplicateRequestToast("Maintenance request");
      return;
    }
    const request = {
      id: nextId("tm"),
      issue: `${category} issue`,
      category,
      priority: formData.get("priority"),
      date: "12 Jun 2026",
      status: "Submitted",
      description,
      photo: "Issue photo placeholder attached"
    };
    state.data.tenant.maintenanceRequests.unshift(request);
    const managerRequest = {
      id: nextId("m"),
      tenant: profile.name,
      unit: profile.unit,
      issue: category,
      description: request.description,
      priority: request.priority,
      date: request.date,
      status: "New"
    };
    state.data.manager.maintenanceRequests.unshift(managerRequest);
    const action = ensureActionFromMaintenance(managerRequest);
    setActionStatus(action, "New", "tenant", "Maintenance request submitted", request.description || `${category} issue submitted.`);
    recordTenantActivity("Maintenance requested", `${category} issue submitted.`);
    state.confirmations.maintenance = true;
    saveData();
    showToast("Request submitted.");
    render();
    return;
  }

  if (form.dataset.form === "tenant-complaint") {
    const formData = new FormData(form);
    const profile = tenantProfile();
    const description = formData.get("description");
    if (complaintAlreadySubmitted(description)) {
      showDuplicateRequestToast("Complaint");
      return;
    }
    const complaint = {
      id: nextId("complaint"),
      tenant: profile.name,
      unit: profile.unit,
      property: profile.property,
      description,
      attachment: "Supporting file placeholder",
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    state.data.tenant.complaints.unshift({ ...complaint });
    state.data.manager.complaints.unshift({ ...complaint });
    const item = ensureActionFromComplaint(complaint);
    setActionStatus(item, "Pending", "tenant", "Complaint filed", complaint.description);
    recordTenantActivity("Complaint filed", complaint.description);
    saveData();
    showToast("Complaint submitted.");
    render();
    return;
  }

  if (form.dataset.form === "tenant-suggestion") {
    const formData = new FormData(form);
    const profile = tenantProfile();
    const description = formData.get("description");
    if (suggestionAlreadySubmitted(description)) {
      showDuplicateRequestToast("Suggestion");
      return;
    }
    const suggestion = {
      id: nextId("suggestion"),
      tenant: profile.name,
      unit: profile.unit,
      property: profile.property,
      description,
      status: "Pending",
      createdAt: new Date().toISOString()
    };
    state.data.tenant.suggestions.unshift({ ...suggestion });
    state.data.manager.suggestions.unshift({ ...suggestion });
    const item = ensureActionFromSuggestion(suggestion);
    setActionStatus(item, "Pending", "tenant", "Suggestion filed", suggestion.description);
    recordTenantActivity("Suggestion filed", suggestion.description);
    saveData();
    showToast("Suggestion submitted.");
    render();
    return;
  }

  if (form.dataset.form === "tenant-record") {
    const values = tenantRecordValuesFromForm(form);
    const errors = validateTenantRecord(values);
    if (Object.keys(errors).length) {
      state.modal = { type: "tenantRecord", values, errors };
      showToast("Fix tenant record fields.", { variant: "warning" });
      render();
      return;
    }

    const record = addTenantRecord(values);
    state.filters.tenantSearch = "";
    state.filters.tenantProperty = "All";
    state.filters.tenantRent = "All";
    state.page = "tenants";
    state.modal = null;
    saveData();
    showToast("Tenant record added.");
    render();
    replaceHistoryEntry();
    window.requestAnimationFrame(() => {
      const selectorId = window.CSS?.escape ? CSS.escape(record.id) : String(record.id).replace(/"/g, '\\"');
      document.querySelector(`[data-modal="tenantDetail"][data-id="${selectorId}"]`)?.focus({ preventScroll: true });
    });
    return;
  }

  if (form.dataset.form === "property-record") {
    const values = propertyValuesFromForm(form);
    const errors = validatePropertyRecord(values);
    if (Object.keys(errors).length) {
      state.modal = { type: "propertyRecord", values, errors };
      showToast("Fix property fields.", { variant: "warning" });
      render();
      return;
    }

    const property = addPropertyRecord(values);
    state.filters.portfolioView = "summary";
    state.filters.portfolioMapFilter = "All";
    state.filters.portfolioCity = "All";
    state.filters.portfolioSelectedPropertyId = property.id;
    state.page = "portfolio";
    state.modal = null;
    saveData();
    showToast("Property added.");
    render();
    scrollToPortfolioMapCard();
    replaceHistoryEntry();
    return;
  }

  if (form.dataset.form === "notification") {
    const formData = new FormData(form);
    const notification = addNotification(formData.get("tenant"), formData.get("type"), formData.get("message"));
    const { item } = ensureActionFromNotification(notification);
    setActionStatus(item, "Sent", "manager", "Notification sent", notification.message);
    state.confirmations.notification = true;
    saveData();
    showToast("Notification sent.");
    render();
  }
});

document.addEventListener("input", (event) => {
  const filter = event.target.closest("[data-filter]");
  if (!filter) return;
  state.filters[filter.dataset.filter] = filter.value;
  renderPreservingControl(filter);
});

document.addEventListener("change", (event) => {
  const propertyPreset = event.target.closest('[data-action="property-location-preset"]');
  if (propertyPreset) {
    applyPropertyPresetToForm(propertyPreset.value);
    return;
  }

  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.filters[filter.dataset.filter] = filter.value;
    if (filter.dataset.filter === "portfolioCity") {
      state.filters.portfolioView = "summary";
      state.filters.portfolioSelectedPropertyId = "";
    }
    renderPreservingControl(filter);
    return;
  }

  const statusSelect = event.target.closest('[data-action="maintenance-status"]');
  if (statusSelect) {
    const row = state.data.manager.maintenanceRequests.find((item) => item.id === statusSelect.dataset.id);
    if (row) {
      row.status = statusSelect.value;
      syncTenantMaintenanceStatus(row);
      const item = ensureActionFromMaintenance(row);
      setActionStatus(item, row.status, "manager", "Maintenance status updated", `Status changed to ${row.status}.`);
      saveData();
      showToast("Maintenance status updated.");
      render();
      replaceHistoryEntry();
    }
  }
});

document.addEventListener("keydown", (event) => {
  const askAIInput = event.target.closest?.("[data-ask-ai-input]");
  if (askAIInput && event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    askAIInput.closest("form")?.requestSubmit();
    return;
  }

  if (event.key === "Tab" && state.modal) {
    trapModalFocus(event);
    return;
  }

  if (event.key === "Escape" && state.askAI.isOpen && !state.modal) {
    closeAskAI();
    return;
  }

  if (event.key === "Escape" && state.notificationPanelOpen) {
    state.notificationPanelOpen = false;
    render();
    return;
  }

  if (event.key === "Escape" && state.modal) {
    closeModal();
  }
});

window.addEventListener("scroll", markAskAINudgeActivity, { passive: true });
window.addEventListener("wheel", markAskAINudgeActivity, { passive: true });
window.addEventListener("touchmove", markAskAINudgeActivity, { passive: true });
document.addEventListener("input", markAskAINudgeActivity, true);
document.addEventListener("focusin", markAskAINudgeActivity, true);
document.addEventListener(
  "pointermove",
  (event) => {
    askAINotchPointer = { x: event.clientX, y: event.clientY };
    syncAskAINotchHoverState();
  },
  { passive: true }
);
document.addEventListener(
  "pointerleave",
  () => {
    askAINotchPointer = { x: -1, y: -1 };
    syncAskAINotchHoverState();
  },
  { passive: true }
);

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    clearAskAINudge({ schedule: false, setCooldown: false });
    return;
  }
  ensureAskAINudgeScheduler();
});

window.addEventListener("popstate", (event) => {
  restoreFromHistory(event.state);
});

window.addEventListener("storage", (event) => {
  if (event.key !== DATA_STORE_KEY) return;
  const snapshot = loadStoredSnapshot();
  if (!snapshot) return;
  state.data = normalizeData(snapshot.data);
  state.sequence = snapshot.sequence;
  render();
});

replaceHistoryEntry();
render();
