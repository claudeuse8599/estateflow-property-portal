const icon = {
  home: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 10.8 12 4l8 6.8V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-9.2Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  wallet: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 7.5h15.5A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-14A2.5 2.5 0 0 1 3 17V6.5A2.5 2.5 0 0 1 5.5 4H18" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M17 13h.01" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg>',
  file: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3h7l4 4v14H7V3Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M14 3v5h5M9 13h6M9 17h6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  tool: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14.5 6.5a4 4 0 0 0 5 5L11 20l-5-5 8.5-8.5Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="m6 15 3 3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  refresh: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 12a8 8 0 1 1-2.34-5.66M20 4v6h-6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  users: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M16 20v-1.8c0-1.8-1.8-3.2-4-3.2s-4 1.4-4 3.2V20" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="12" cy="9" r="3.5" stroke="currentColor" stroke-width="1.8"/><path d="M20 20v-1.4c0-1.4-1.1-2.6-2.7-3M17 6.3a3 3 0 0 1 0 5.4M4 20v-1.4c0-1.4 1.1-2.6 2.7-3M7 6.3a3 3 0 0 0 0 5.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  chart: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19V5M4 19h16" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M8 16v-5M12 16V8M16 16v-3" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  building: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 21V4h9v17M14 9h5v12" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M8 8h3M8 12h3M8 16h3M17 13h.01M17 17h.01" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>',
  bell: '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M18 9a6 6 0 1 0-12 0c0 7-2 7-2 9h16c0-2-2-2-2-9Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><path d="M10 21h4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  sun: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="1.8"/><path d="M12 2.8v2M12 19.2v2M4.5 4.5l1.4 1.4M18.1 18.1l1.4 1.4M2.8 12h2M19.2 12h2M4.5 19.5l1.4-1.4M18.1 5.9l1.4-1.4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  moon: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.3 15.4A8.4 8.4 0 0 1 8.6 3.7a8.8 8.8 0 1 0 11.7 11.7Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  send: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m21 3-7 18-4-8-7-4 18-6Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/></svg>',
  search: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="1.8"/><path d="m20 20-4-4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>',
  check: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m5 12 4 4L19 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  close: '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
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
    rentHistoryView: "Recent"
  };
}

const DATA_STORE_KEY = "estateflow-demo-data-v1";
const DATA_STORE_VERSION = 1;
const PULL_RESET_TOP_TOLERANCE = 2;
const PULL_RESET_START_DISTANCE = 52;
const PULL_RESET_THRESHOLD = 190;
const PULL_RESET_MAX_DISTANCE = 230;
const PULL_RESET_COOLDOWN = 1200;
const PULL_RESET_WHEEL_RELEASE_DELAY = 260;
const PULL_RESET_WHEEL_IDLE_DELAY = 480;
const PULL_RESET_TOP_STABILITY_MS = 420;
const PULL_RESET_WHEEL_STEP_MAX = 18;
const PULL_RESET_WHEEL_RESISTANCE = 0.26;
const PULL_RESET_TOUCH_RESISTANCE = 0.72;
const PULL_RESET_WHEEL_DISTANCE_RESISTANCE = 0.56;

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
  pullToReset: {
    phase: "idle",
    tracking: false,
    thresholdReached: false,
    isResetting: false,
    distance: 0,
    rawDistance: 0,
    startX: 0,
    startY: 0,
    gestureStartedAtTop: false,
    isEligibleForPullReset: false,
    wheelSessionActive: false,
    wheelSessionStartedAtTop: false,
    lastNonTopScrollTime: 0,
    lastWheelTime: 0,
    cooldownUntil: 0,
    source: ""
  },
  sequence: 0,
  data: {}
};

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
      { name: "Marina Heights Residence", location: "Dubai Marina", units: 84, occupancy: "96%", income: "AED 714,000", status: "Occupied", maintenance: "2 open requests" },
      { name: "Palm View Tower", location: "Palm Jumeirah", units: 58, occupancy: "91%", income: "AED 498,000", status: "Occupied", maintenance: "1 scheduled" },
      { name: "Creekside Court", location: "Dubai Creek Harbour", units: 42, occupancy: "88%", income: "AED 289,800", status: "Occupied", maintenance: "3 open requests" },
      { name: "Jumeirah Garden Homes", location: "Jumeirah Village Circle", units: 36, occupancy: "83%", income: "AED 208,800", status: "Vacant", maintenance: "Ready for leasing" }
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

const nav = {
  tenant: [
    { id: "dashboard", label: "Dashboard", icon: "home", group: "Overview" },
    { id: "actionCenter", label: "Action Center", icon: "bell", group: "Overview" },
    { id: "rent", label: "Rent", icon: "wallet", group: "Money" },
    { id: "payments", label: "Payment Proof", icon: "file", group: "Money" },
    { id: "maintenance", label: "Maintenance", icon: "tool", group: "Requests" },
    { id: "renewal", label: "Renewal", icon: "refresh", group: "Requests" },
    { id: "documents", label: "Documents", icon: "file", group: "Records" }
  ],
  manager: [
    { id: "dashboard", label: "Dashboard", icon: "home", group: "Overview" },
    { id: "actionCenter", label: "Action Center", icon: "bell", group: "Overview" },
    { id: "tenants", label: "Tenant Records", icon: "users", group: "Operations" },
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

const pageMeta = {
  tenant: {
    dashboard: ["Tenant Dashboard", "Rent, requests, renewals, and documents."],
    actionCenter: ["Action Center", "Review updates and complete next actions."],
    rent: ["Rent", "Check balance and payment status."],
    payments: ["Payment Proof", "Submit payment proof for review."],
    maintenance: ["Maintenance", "Report an issue in a few fields."],
    renewal: ["Renewal", "Review terms and request renewal."],
    documents: ["Documents", "View contracts, IDs, cheques, and receipts."]
  },
  manager: {
    dashboard: ["Management Dashboard", "Tenants, rent, renewals, and maintenance."],
    actionCenter: ["Action Center", "Resolve requests, approvals, and tenant updates."],
    tenants: ["Tenant Records", "Search profiles, leases, payments, and documents."],
    rentTracking: ["Rent Tracking", "Track paid, pending, and late rent."],
    chequeReview: ["Payment Review", "Approve or reject submitted proof."],
    maintenanceMgmt: ["Maintenance", "Review and update work orders."],
    renewalsMgmt: ["Renewals", "Review renewal decisions."],
    docsMgmt: ["Documents", "Find tenant documents fast."],
    notifications: ["Notifications", "Send tenant updates."],
    financial: ["Finance", "Income, costs, and net position."],
    portfolio: ["Portfolio", "Properties, occupancy, and income."]
  }
};

function cloneData() {
  return JSON.parse(JSON.stringify(seedData));
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

  normalized.tenant.maintenanceRequests.forEach((row, index) => {
    if (!row.id) row.id = `tm-${index + 1}`;
    if (!row.photo) row.photo = "Photo placeholder attached";
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

const storedSnapshot = loadStoredSnapshot();
state.data = normalizeData(storedSnapshot?.data || cloneData());
state.sequence = storedSnapshot?.sequence || 0;

let toastCounter = 0;

function nextId(prefix) {
  state.sequence += 1;
  return `${prefix}-${Date.now()}-${state.sequence}`;
}

function tenantProfile() {
  return state.data.tenant.profile;
}

function amountNumber(value) {
  return Number(String(value || "").replace(/[^\d.]/g, "")) || 0;
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
    row.amount === rent.amount && row.dueDate === rent.dueDate && row.status !== "Rejected"
  ) || null;
}

function activeTenantMaintenance() {
  return state.data.tenant.maintenanceRequests.find((row) => row.status !== "Completed");
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
      action: { label: "Pay rent", icon: "wallet", modal: "payRent" },
      activityTitle: "Payment not started",
      activityDetail: `${rentCycle.amount} is due ${rentCycle.dueDate}.`
    },
    proof_needed: {
      label: "Proof needed",
      note: "Submit proof.",
      description: `${dueCopy}. Submit payment proof for company review.`,
      action: { label: "Submit proof", icon: "file", page: "payments" },
      activityTitle: "Payment proof needed",
      activityDetail: `Submit proof for ${rentCycle.amount}.`
    },
    proof_submitted: {
      label: "Proof submitted",
      note: "Waiting for review.",
      description: `${dueCopy}. Your proof has been submitted and is waiting for company review.`,
      action: { label: "View proof", icon: "file", page: "payments" },
      activityTitle: "Payment proof submitted",
      activityDetail: "Waiting for company review."
    },
    under_review: {
      label: "Payment proof under review",
      note: "Waiting for company review.",
      description: `${dueCopy}. Your proof is waiting for company review.`,
      action: { label: "View proof", icon: "file", page: "payments" },
      activityTitle: "Payment proof submitted",
      activityDetail: "Waiting for company review."
    },
    cash_requested: {
      label: "Cash visit requested",
      note: "Waiting for approval.",
      description: `${dueCopy}. Waiting for the company to approve your visit time.`,
      action: { label: "View request", icon: "wallet", page: "payments" },
      activityTitle: "Cash visit requested",
      activityDetail: "Waiting for company approval."
    },
    cash_approved: {
      label: "Cash visit approved",
      note: "Visit time approved.",
      description: `${dueCopy}. Visit the company at the approved time to complete payment.`,
      action: { label: "View instructions", icon: "wallet", page: "payments" },
      activityTitle: "Cash visit approved",
      activityDetail: "Visit time approved by management."
    },
    paid: {
      label: "Paid",
      note: "No dues.",
      description: "Payment confirmed for this rent cycle.",
      action: { label: "View receipt", icon: "file", page: "rent" },
      activityTitle: "Rent paid",
      activityDetail: "Payment confirmed for this rent cycle."
    },
    confirmed: {
      label: "Paid",
      note: "No dues.",
      description: "Payment confirmed for this rent cycle.",
      action: { label: "View receipt", icon: "file", page: "rent" },
      activityTitle: "Rent paid",
      activityDetail: "Payment confirmed for this rent cycle."
    },
    rejected: {
      label: "Payment rejected",
      note: "Action needed.",
      description: `${dueCopy}. The company rejected the payment proof. Submit updated details or choose another method.`,
      action: { label: "Submit new proof", icon: "file", page: "payments" },
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

  return {
    urgency,
    color,
    metricClass,
    daysUntilDue,
    title: titleByWorkflow[workflow] || defaultTitle,
    body: workflowState.description,
    urgencyLabel: rentUrgencyLabel(urgency, daysUntilDue),
    urgencyNote: urgencyCopy,
    workflow,
    workflowLabel: workflowState.label,
    workflowNote: workflowState.note,
    primaryAction: workflowState.action,
    secondaryAction: workflow === "under_review" || workflow === "proof_submitted" ? { label: "View rent", icon: "wallet", page: "rent" } : null,
    activityTitle: workflowState.activityTitle,
    activityDetail: workflowState.activityDetail,
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
    tenant.rentStatus = status;
  }
}

function setTenantCurrentRentStatus(status, receipt = "Awaiting payment") {
  const rent = currentTenantRent();
  rent.status = status;
  rent.receipt = receipt;
}

function recordTenantActivity(title, detail) {
  const activity = { title, detail, time: "Just now" };
  state.data.tenant.activities = [
    activity,
    ...state.data.tenant.activities.filter((item) => item.title !== title || item.detail !== detail)
  ].slice(0, 6);
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

function setActionStatus(item, status, byRole, action, note) {
  item.status = status;
  item.updatedAt = new Date().toISOString();
  item.updatedBy = byRole;
  item.readBy = [byRole];
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
    "Rent Payment": state.role === "tenant" ? "payments" : "chequeReview",
    "Cash Payment": state.role === "tenant" ? "payments" : "chequeReview",
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
      actions.push({ label: status === "Rejected" || status === "Info Requested" ? "Submit proof" : "View payment", page: "payments", variant: status === "Rejected" || status === "Info Requested" ? "primary" : "secondary" });
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
  const existing = state.data.manager.renewals.find((row) => row.tenant === profile.name && row.unit === profile.unit);
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
  const renewal = activeTenantRenewalRequest(profile);
  const contract = state.data.tenant.contractRequests.find((row) => row.tenant === profile.name && row.unit === profile.unit);
  if (!renewal) return contract || null;
  if (!contract) return renewal;

  const renewalTime = Date.parse(renewal.updatedAt || renewal.createdAt || "") || 0;
  const contractTime = Date.parse(contract.updatedAt || contract.createdAt || "") || 0;
  return contractTime >= renewalTime ? contract : renewal;
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

function statusClass(status) {
  return String(status).toLowerCase().replaceAll(" / ", "-").replaceAll(" ", "-");
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
  if (daysRemaining <= 31) return "contract-critical";
  if (daysRemaining <= 244) return "contract-warning";
  return "contract-safe";
}

function paymentHealthClass(summary) {
  return summary.dashboardState?.metricClass || "";
}

function statusLabel(status) {
  const labels = {
    "Info Requested": "Needs Info"
  };
  return labels[status] || status;
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
  return `<span class="status ${statusClass(status)}">${escapeHtml(label)}</span>`;
}

function badgeSlot(status, label) {
  return `<span class="status-slot">${badge(status, label)}</span>`;
}

function brand() {
  return `
    <div class="brand">
      <span class="brand-mark">${icon.building}</span>
      <span>EstateFlow</span>
    </div>
  `;
}

function navIcon(name) {
  return `<span class="nav-icon">${icon[name] || icon.file}</span>`;
}

function navBadge(item) {
  if (item.id !== "actionCenter") return "";
  const count = actionCenterCountForRole();
  return count ? `<span class="nav-count">${count}</span>` : "";
}

function buttonIcon(name) {
  return `<span class="button-icon">${icon[name] || ""}</span>`;
}

function metricActionLabel(targetPage) {
  const labels = {
    actionCenter: "Open actions",
    rent: "View rent",
    payments: "Submit proof",
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

  return ["4 properties", "220 units", "June 2026 snapshot"];
}

function notificationItems() {
  if (state.role === "tenant") {
    const profile = tenantProfile();
    const summary = tenantRentSummary();
    const maintenance = state.data.tenant.maintenanceRequests[0];
    const latestContractRequest = latestTenantContractRequest(profile);
    const renewalStatus = contractRequestSummaryStatus(latestContractRequest, profile.renewalStatus || "Pending");

    return [
      {
        title: "Rent payment",
        detail: summary.dashboardState.body,
        status: summary.dashboardState.workflowLabel,
        page: "payments"
      },
      {
        title: "Maintenance",
        detail: maintenance ? `${maintenance.category} request is ${maintenance.status.toLowerCase()}.` : "No active maintenance requests.",
        status: maintenance?.status || "Completed",
        page: "maintenance"
      },
      {
        title: "Renewal",
        detail: `Contract ends ${profile.contractEnd}.`,
        status: renewalStatus,
        page: "renewal"
      },
      {
        title: "Documents",
        detail: "Tenancy files and receipts are available.",
        status: "Uploaded",
        page: "documents"
      }
    ];
  }

  const data = state.data.manager;
  const pendingPayments = data.chequeReviews.filter((row) => row.status === "Pending").length;
  const openMaintenance = data.maintenanceRequests.filter((row) => row.status !== "Completed").length;
  const pendingRenewals = data.renewals.filter((row) => row.status === "Pending").length;
  const latestNotification = data.notifications[0];

  return [
    {
      title: "Payment reviews",
      detail: `${pendingPayments} submissions need a decision.`,
      status: pendingPayments ? "Pending" : "Completed",
      page: "chequeReview"
    },
    {
      title: "Maintenance queue",
      detail: `${openMaintenance} requests are still open.`,
      status: openMaintenance ? "In Progress" : "Completed",
      page: "maintenanceMgmt"
    },
    {
      title: "Renewals",
      detail: `${pendingRenewals} renewal requests need review.`,
      status: pendingRenewals ? "Pending" : "Completed",
      page: "renewalsMgmt"
    },
    {
      title: latestNotification?.tenant || "Notifications",
      detail: latestNotification?.message || "No tenant updates sent yet.",
      status: latestNotification?.status || "Pending",
      page: "notifications"
    }
  ];
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

function render() {
  applyTheme();

  if (!state.auth) {
    state.notificationPanelOpen = false;
    app().innerHTML = renderLogin();
    modalRoot().innerHTML = "";
    return;
  }

  const pages = nav[state.role].map((item) => item.id);
  if (!pages.includes(state.page)) {
    state.page = "dashboard";
  }
  ensureActionCenterData();

  app().innerHTML = renderPortal();
  renderModal();
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

function historySnapshot() {
  return {
    app: "estateflow",
    auth: state.auth,
    selectedRole: state.selectedRole,
    role: state.role,
    page: state.page,
    modal: state.modal
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
  state.notificationPanelOpen = false;
  renderAtTop();
}

function closeModal({ replaceHistory = true } = {}) {
  state.modal = null;
  state.notificationPanelOpen = false;
  render();
  if (replaceHistory) {
    replaceHistoryEntry();
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
  const countLabel = `${items.length} ${items.length === 1 ? "update" : "updates"}`;

  return `
    <div class="notifications-menu">
      <button class="notification-button ${state.notificationPanelOpen ? "active" : ""}" type="button" data-action="notify" aria-label="${state.notificationPanelOpen ? "Hide" : "Show"} notifications" aria-expanded="${state.notificationPanelOpen}" aria-controls="notification-panel">
        ${icon.bell}<span aria-hidden="true"></span>
      </button>
      ${state.notificationPanelOpen
        ? `<section class="notification-panel" id="notification-panel" role="region" aria-label="Notifications">
            <div class="notification-panel-header">
              <div>
                <strong>Notifications</strong>
                <span>${escapeHtml(countLabel)}</span>
              </div>
            </div>
            <div class="notification-list">
              ${items
                .map(
                  (item) => `
                    <button class="notification-item" type="button" data-page="actionCenter" aria-label="Open Action Center for ${escapeHtml(item.title)}">
                      <span class="notification-item-copy">
                        <strong>${escapeHtml(item.title)}</strong>
                        <span>${escapeHtml(item.detail)}</span>
                      </span>
                      ${badgeSlot(item.status)}
                    </button>
                  `
                )
                .join("")}
            </div>
            <div class="notification-panel-footer">
              <button class="button secondary compact" type="button" data-page="actionCenter">${buttonIcon("bell")}Open Action Center</button>
            </div>
          </section>`
        : ""}
    </div>
  `;
}

function renderPullToResetIndicator() {
  return `
    <div class="pull-reset-indicator" data-pull-reset aria-hidden="true" aria-live="polite">
      <span class="pull-reset-icon">${icon.refresh}</span>
      <span data-pull-reset-label>Pull to reset demo data</span>
    </div>
  `;
}

function renderPortal() {
  const profile = profileForRole();
  const meta = pageMeta[state.role][state.page];
  const showScreenFocus = !(state.role === "tenant" && state.page === "dashboard");
  return `
    <div class="portal-layout">
      ${renderSidebar(profile)}
      <main class="main-area">
        ${renderPullToResetIndicator()}
        <header class="topbar">
          <div class="topbar-copy">
            <p class="page-kicker">${state.role === "tenant" ? "Tenant Portal" : "Management Portal"}</p>
            <h1>${escapeHtml(meta[0])}</h1>
            <p>${escapeHtml(meta[1])}</p>
          </div>
          <div class="top-actions">
            ${state.page !== "dashboard" ? `<button class="button secondary compact dashboard-return" type="button" data-page="dashboard">${buttonIcon("home")}Dashboard</button>` : ""}
            ${renderThemeToggle()}
            ${renderNotificationPanel()}
            <div class="profile-badge">
              ${renderAvatar(profile)}
              <div>
                <strong>${escapeHtml(profile.name)}</strong>
                <span>${state.role === "tenant" ? "Tenant" : "Property Management"}</span>
              </div>
            </div>
          </div>
        </header>
        ${showScreenFocus ? renderScreenFocus() : ""}
        ${renderRouteChips()}
        ${state.role === "tenant" ? renderTenantPage() : renderManagerPage()}
      </main>
      ${renderMobileNav()}
    </div>
  `;
}

function renderSidebar(profile) {
  const label = roleLabel();
  return `
    <aside class="sidebar">
      <div class="sidebar-top">
        ${brand()}
        <div class="sidebar-role">${label}</div>
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
          <button class="button secondary" type="button" data-action="reset-data">${buttonIcon("refresh")}Reset data</button>
          <button class="button secondary" type="button" data-action="logout">${buttonIcon("close")}Logout</button>
        </div>
      </div>
    </aside>
  `;
}

function shortNavLabel(label) {
  const labels = {
    "Payment Proof": "Payment",
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
    "Portfolio": "Portfolio"
  };
  return labels[label] || label;
}

function primaryMobileNavItems() {
  const primaryIds = state.role === "tenant"
    ? ["dashboard", "actionCenter", "rent", "payments", "maintenance"]
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
      ${actions
        .map(
          (action) => `
            <button class="button ${action.variant || "secondary"}" ${actionAttrs(action)}>
              ${action.icon ? buttonIcon(action.icon) : ""}${escapeHtml(action.label)}
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function pageFocus() {
  if (state.role === "tenant") {
    const profile = state.data.tenant.profile;
    const summary = tenantRentSummary();
    const maintenance = activeTenantMaintenance();
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
      payments: {
        eyebrow: "Proof review",
        title: summary.dashboardState.workflowLabel,
        body: summary.dashboardState.body,
        value: summary.dashboardState.urgencyLabel,
        meta: [summary.paymentNote, "No payment gateway"],
        actions: []
      },
      maintenance: {
        eyebrow: "Maintenance",
        title: "Report the issue",
        body: "Add the category, priority, and a short note.",
        value: "1 active",
        meta: ["AC request in progress", "Average response 1 day"],
        actions: []
      },
      renewal: {
        eyebrow: "Contract renewal",
        title: "Contract ends 31 Dec 2026",
        body: "Request renewal when ready.",
        value: contractSummaryStatus,
        meta: ["Current rent AED 8,500", "Unit 1204"],
        actions: [{ label: "Request renewal", icon: "refresh", action: "request-renewal", variant: "primary" }]
      },
      documents: {
        eyebrow: "Documents",
        title: "Tenancy files",
        body: "View contracts, ID, cheques, and receipts.",
        value: "4 files",
        meta: ["2 approved", "1 in review"],
        actions: []
      }
    };
    return map[state.page] || map.dashboard;
  }

  const data = state.data.manager;
  const rentStats = managerRentStats();
  const pendingPayments = data.chequeReviews.filter((row) => row.status === "Pending").length;
  const openMaintenance = data.maintenanceRequests.filter((row) => row.status !== "Completed").length;
  const pendingRenewals = data.renewals.filter((row) => row.status === "Pending").length;
  const managerActionCount = actionCenterCountForRole("manager");
  const map = {
    dashboard: {
      eyebrow: "Operations today",
      title: `${pendingPayments + openMaintenance + pendingRenewals} items need action`,
      body: "Review payments, maintenance, and renewals.",
      value: `${pendingPayments} payments`,
      meta: [`${openMaintenance} maintenance`, `${pendingRenewals} renewals`, "June snapshot"],
      actions: [
        { label: "Review payments", icon: "check", page: "chequeReview", variant: "primary" },
        { label: "Open maintenance", icon: "tool", page: "maintenanceMgmt", variant: "secondary" }
      ]
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
      eyebrow: "Tenant records",
      title: "Find tenant records",
      body: "Search by tenant, unit, or property.",
      value: "156 tenants",
      meta: ["5 sample records", "Linked documents"],
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
      meta: ["New", "In progress", "Scheduled"],
      actions: []
    },
    renewalsMgmt: {
      eyebrow: "Renewals",
      title: `${pendingRenewals} renewals pending`,
      body: "Check lease dates before deciding.",
      value: `${pendingRenewals} pending`,
      meta: ["Expiring soon", "Decision needed"],
      actions: []
    },
    docsMgmt: {
      eyebrow: "Documents",
      title: "Find tenant documents",
      body: "Filter by tenant, type, or status.",
      value: "5 records",
      meta: ["Cheque copies", "Contracts", "IDs"],
      actions: []
    },
    notifications: {
      eyebrow: "Reminders",
      title: "Send tenant updates",
      body: "Use a template or write a short message.",
      value: "2 sent",
      meta: ["Late payment", "Maintenance", "Renewal"],
      actions: []
    },
    financial: {
      eyebrow: "Finance",
      title: "Income is on track",
      body: "Follow up on pending rent.",
      value: data.financial.net,
      meta: [formatAed(rentStats.paidAmount), `${formatAed(rentStats.pendingAmount + rentStats.lateAmount)} pending`],
      actions: [{ label: "Track rent", icon: "wallet", page: "rentTracking", variant: "primary" }]
    },
    portfolio: {
      eyebrow: "Portfolio",
      title: "Four properties, 220 units, 92% occupied",
      body: "Scan occupancy, income, and maintenance.",
      value: "AED 248M",
      meta: ["203 occupied", "17 vacant"],
      actions: [{ label: "View tenants", icon: "users", page: "tenants", variant: "primary" }]
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
        ${meta.length ? `<div class="focus-meta">${meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
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
      ${(note || targetPage)
        ? `<div class="metric-foot">${note ? `<span class="metric-note">${escapeHtml(note)}</span>` : "<span></span>"}${targetPage ? `<span class="metric-action">${escapeHtml(options.actionLabel || metricActionLabel(targetPage))}</span>` : ""}</div>`
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
  return [currentPaymentActivity, ...supportingItems].slice(0, 6);
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
      <div class="table-meta">
        <span>${escapeHtml(countLabel)}</span>
        <span>${escapeHtml(options.meta || "Demo data")}</span>
      </div>
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${rows.length
              ? rows.join("")
              : `<tr class="empty-table-row"><td class="empty-table-cell" colspan="${headers.length}"><div class="empty-state table-empty-state"><strong>${escapeHtml(emptyTitle)}</strong><span>${escapeHtml(emptyBody)}</span></div></td></tr>`}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderActionCenterButtons(item) {
  const actions = actionButtonsForItem(item);
  if (!actions.length) return `<span class="action-muted">No action needed</span>`;

  return actions
    .map((action) => {
      if (action.page) {
        return `<button class="button ${action.variant || "secondary"} compact" type="button" data-page="${escapeHtml(action.page)}">${escapeHtml(action.label)}</button>`;
      }
      return `<button class="button ${action.variant || "secondary"} compact" type="button" data-action="action-center" data-command="${escapeHtml(action.command)}" data-id="${escapeHtml(item.id)}">${escapeHtml(action.label)}</button>`;
    })
    .join("");
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
  return `
    <div class="action-meta-grid">
      ${rows.map((row) => `<span><strong>${escapeHtml(row.label)}</strong>${escapeHtml(row.value)}</span>`).join("")}
    </div>
  `;
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
    if (source) source.status = "In Review";
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
    if (source) source.status = "In Review";
    if (source) source.updatedAt = new Date().toISOString();
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

function renderTenantPage() {
  switch (state.page) {
    case "actionCenter":
      return renderActionCenter();
    case "rent":
      return renderTenantRent();
    case "payments":
      return renderTenantPayments();
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
  const rentState = summary.dashboardState;
  const quickActions = tenantDashboardQuickActions(summary);
  const activityItems = tenantDashboardActivities(summary);
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
      ariaLabel: "Open contract renewal details"
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
      <section class="tenant-summary-strip" aria-label="Tenant overview">
        <div class="tenant-summary-profile">
          ${renderAvatar(profile, "hero-avatar")}
          <div>
            <h2>${escapeHtml(profile.name)}</h2>
            <p>Unit ${escapeHtml(profile.unit)} · ${escapeHtml(profile.property)}</p>
          </div>
        </div>
        <div class="tenant-summary-facts">
          <span class="contract-health ${contractHealth}">
            <strong>Contract</strong>
            <em>Active until ${escapeHtml(profile.contractEnd)}</em>
          </span>
          <span>
            <strong>Rent cycle</strong>
            <em>${escapeHtml(summary.rent.month)} · ${escapeHtml(rentState.urgencyLabel)}</em>
          </span>
          <span>
            <strong>Maintenance</strong>
            <em>${escapeHtml(summary.maintenanceStatus)}</em>
          </span>
        </div>
      </section>

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
          </div>
          <ul class="activity-list">
            ${activityItems
              .map(
                (item) => `
                  <li class="activity-item">
                    <span class="activity-dot"></span>
                    <div>
                      <strong>${escapeHtml(item.title)}</strong>
                      <span>${escapeHtml(item.detail)}</span>
                    </div>
                    <span>${escapeHtml(item.time)}</span>
                  </li>
                `
              )
              .join("")}
          </ul>
        </section>
      </div>
    </div>
  `;
}

function renderTenantRent() {
  const summary = tenantRentSummary();
  const rentState = summary.dashboardState;
  const paymentHealth = paymentHealthClass(summary);
  const historyExpanded = state.filters.rentHistoryView === "All";
  const currentRow = currentTenantRent();
  const recentPaidRows = state.data.tenant.rentHistory.filter((row) => row.status === "Paid" && row !== currentRow).slice(0, 2);
  const visibleHistory = historyExpanded ? state.data.tenant.rentHistory : [currentRow, ...recentPaidRows];
  const rentRows = visibleHistory.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.month)}</td>
        <td>${escapeHtml(row.amount)}</td>
        <td>${escapeHtml(row.dueDate)}</td>
        <td>${badge(row.status)}</td>
        <td>
          ${String(row.receipt || "").startsWith("REC")
            ? `<button class="button ghost compact" type="button" data-action="download-doc" data-doc-title="${escapeHtml(row.receipt)}" data-doc-owner="${escapeHtml(row.month)}">${escapeHtml(row.receipt)}</button>`
            : escapeHtml(row.receipt)}
        </td>
      </tr>
    `
  );

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
            <p>${historyExpanded ? "Full monthly history." : "Recent paid rents and current balance."}</p>
          </div>
          <span class="cell-actions">
            <button class="button ghost" type="button" data-action="toggle-rent-history">${historyExpanded ? "Show recent" : "Show full history"}</button>
            ${summary.isPaid ? "" : `<button class="button secondary" type="button" data-modal="payRent">${buttonIcon("wallet")}Pay rent</button>`}
          </span>
        </div>
        ${table(["Month", "Amount", "Due Date", "Status", "Receipt"], rentRows)}
      </section>
    </div>
  `;
}

function renderTenantPayments() {
  const rows = state.data.tenant.paymentSubmissions.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.type)}</td>
        <td>${escapeHtml(row.amount)}</td>
        <td>${escapeHtml(row.dueDate)}</td>
        <td>${badge(row.status)}</td>
        <td>${escapeHtml(row.submittedOn)}</td>
      </tr>
    `
  );
  const cashRows = state.data.tenant.cashRequests.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.amount)}</td>
        <td>${escapeHtml(row.preferredTime)}</td>
        <td>${badge(row.status)}</td>
        <td>${escapeHtml(row.decisionNote || row.notes || "Awaiting company review")}</td>
      </tr>
    `
  );
  const confirmed = state.confirmations.payment ? `<div class="confirmation">Payment proof submitted.</div>` : "";

  return `
    <div class="content-stack">
      <section class="layout-two">
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>Submit Payment Proof</h2>
              <p>Submit proof for management review. No payment is processed.</p>
            </div>
          </div>
          ${confirmed}
          <form class="form-grid" data-form="tenant-payment">
            <div class="field">
              <label for="paymentType">Payment type</label>
              <select id="paymentType" name="paymentType">
                <option>Cheque</option>
                <option>Bank Transfer</option>
                <option>Cash Deposit</option>
              </select>
            </div>
            <div class="field">
              <label for="chequeNumber">Cheque number</label>
              <input id="chequeNumber" name="chequeNumber" value="CHQ-903112" />
            </div>
            <div class="field">
              <label for="bankName">Bank name</label>
              <input id="bankName" name="bankName" value="Emirates NBD" />
            </div>
            <div class="field">
              <label for="amount">Amount</label>
              <input id="amount" name="amount" value="AED 8,500" />
            </div>
            <div class="field">
              <label for="dueDate">Due date</label>
              <input id="dueDate" name="dueDate" type="date" value="2026-06-05" />
            </div>
            <div class="field">
              <label>Upload proof</label>
              <div class="upload-box">Upload receipt or cheque image.</div>
            </div>
            <div class="field">
              <label for="notes">Notes</label>
              <textarea id="notes" name="notes">June rent cheque copy attached.</textarea>
            </div>
            <button class="button primary" type="submit">${buttonIcon("send")}Submit proof</button>
          </form>
        </div>
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>Next Steps</h2>
              <p>Management reviews and updates status.</p>
            </div>
          </div>
          <ul class="timeline">
            <li class="timeline-item done"><span class="timeline-marker">1</span><strong>Proof sent</strong>${badge("Submitted")}</li>
            <li class="timeline-item current"><span class="timeline-marker">2</span><strong>Review</strong>${badge("In Review")}</li>
            <li class="timeline-item"><span class="timeline-marker">3</span><strong>Decision</strong>${badge("Pending")}</li>
          </ul>
        </div>
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Submission History</h2>
            <p>Recent payment proof.</p>
          </div>
        </div>
        ${table(["Type", "Amount", "Due Date", "Status", "Submitted On"], rows)}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Cash Visit Requests</h2>
            <p>Visit requests sent to management.</p>
          </div>
          <button class="button secondary" type="button" data-modal="cashPayment">${buttonIcon("wallet")}Request cash visit</button>
        </div>
        ${table(["Amount", "Preferred Time", "Status", "Notes"], cashRows, {
          emptyTitle: "No cash visit requests",
          emptyBody: "Use Pay rent to request a cash visit time."
        })}
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
  const requestRows = state.data.tenant.contractRequests.map(
    (row) => `
      <tr>
        <td>${escapeHtml(row.requestType)}</td>
        <td>${escapeHtml(row.notes)}</td>
        <td>${badge(row.status)}</td>
        <td>${escapeHtml(row.decisionNote || "Awaiting management review")}</td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="layout-two">
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
            <div class="detail-item"><span>${latestRequest ? "Request status" : "Renewal status"}</span><strong>${badge(status)}</strong></div>
          </div>
          <div class="section-actions contract-action-row">
            <button class="button primary" type="button" data-action="request-renewal">${buttonIcon("refresh")}Request Renewal</button>
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
            <h2>Contract Requests</h2>
            <p>Renewal, cancellation, and amendment requests.</p>
          </div>
        </div>
        ${table(["Type", "Details", "Status", "Notes"], requestRows, {
          emptyTitle: "No contract requests",
          emptyBody: "Submitted contract requests will appear here."
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

function renderManagerDashboard() {
  const data = state.data.manager;
  const rentStats = managerRentStats();
  const activityItems = managerActivityItems();
  const pendingPayments = data.chequeReviews.filter((row) => row.status === "Pending");
  const activeMaintenance = data.maintenanceRequests.filter((row) => row.status !== "Completed");
  const pendingRenewals = data.renewals.filter((row) => row.status === "Pending");
  const documentReviews = data.documents.filter((row) => row.status === "In Review").length;
  const maintenanceCounts = {
    New: data.maintenanceRequests.filter((row) => row.status === "New").length,
    "In Progress": data.maintenanceRequests.filter((row) => row.status === "In Progress").length,
    Scheduled: data.maintenanceRequests.filter((row) => row.status === "Scheduled").length,
    Completed: data.maintenanceRequests.filter((row) => row.status === "Completed").length
  };
  const maintenanceTotal = Math.max(data.maintenanceRequests.length, 1);
  const maintenancePercent = (count) => Math.max(8, Math.round((count / maintenanceTotal) * 100));
  return `
    <div class="content-stack">
      <section class="home-grid manager-home">
        <article class="focus-block primary-block">
          <span class="focus-eyebrow">Operations queue</span>
          <h2>Work that needs a response</h2>
          <p>Start with items that need approval, follow-up, or a status update.</p>
          <div class="workload-summary" aria-label="Dashboard work queue">
            <button type="button" data-page="chequeReview">
              <span>Payments awaiting review</span>
              <strong>${pendingPayments.length}</strong>
            </button>
            <button type="button" data-page="maintenanceMgmt">
              <span>Open maintenance requests</span>
              <strong>${activeMaintenance.length}</strong>
            </button>
            <button type="button" data-page="renewalsMgmt">
              <span>Renewals awaiting decision</span>
              <strong>${pendingRenewals.length}</strong>
            </button>
          </div>
          ${renderActionButtons([
            { label: "Open Action Center", icon: "bell", page: "actionCenter", variant: "primary" },
            { label: "Track rent", icon: "wallet", page: "rentTracking", variant: "secondary" }
          ], "inline-actions")}
        </article>
        <article class="focus-block queue-block">
          <div class="section-header">
            <div>
              <span class="focus-eyebrow">Need attention</span>
              <h3>Next company actions</h3>
            </div>
          </div>
          <div class="priority-list">
            <button class="priority-item" type="button" data-page="chequeReview">
              <span class="priority-copy">
                <strong>Review payment proof</strong>
                <em>${pendingPayments.length} waiting for a finance decision</em>
              </span>
              ${badgeSlot("Pending", "Needs Review")}
            </button>
            <button class="priority-item" type="button" data-page="maintenanceMgmt">
              <span class="priority-copy">
                <strong>Update maintenance status</strong>
                <em>${activeMaintenance.length} active tenant requests</em>
              </span>
              ${badgeSlot("In Progress")}
            </button>
            <button class="priority-item" type="button" data-page="renewalsMgmt">
              <span class="priority-copy">
                <strong>Review renewal requests</strong>
                <em>${pendingRenewals.length} leases need a response</em>
              </span>
              ${badgeSlot("Pending", "Needs Decision")}
            </button>
          </div>
        </article>
      </section>

      <section class="metric-grid dashboard-metrics insight-metrics">
        ${metricCard("Total Tenants", "156", "Active leases", "users", "tenants")}
        ${metricCard("Rent Collected", formatAed(rentStats.paidAmount), `${rentStats.paidRows.length} paid`, "wallet", "financial")}
        ${metricCard("Pending Rent", formatAed(rentStats.pendingAmount + rentStats.lateAmount), "Follow up", "refresh", "rentTracking")}
        ${metricCard("Open Maintenance", String(activeMaintenance.length), "Active requests", "tool", "maintenanceMgmt")}
        ${metricCard("Pending Renewals", String(pendingRenewals.length), "Need decision", "file", "renewalsMgmt")}
        ${metricCard("Total Properties", "4", "Managed portfolio", "building", "portfolio")}
      </section>
      <section class="summary-strip" aria-label="Secondary dashboard links">
        <button class="summary-link" type="button" data-page="portfolio">
          <span>Occupied Units</span>
          <strong>203</strong>
        </button>
        <button class="summary-link" type="button" data-page="portfolio">
          <span>Vacant Units</span>
          <strong>17</strong>
        </button>
        <button class="summary-link" type="button" data-page="docsMgmt">
          <span>Document Reviews</span>
          <strong>${documentReviews}</strong>
        </button>
      </section>

      <section class="layout-three">
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>Latest Tenant Updates</h2>
              <p>Recent changes across rent, maintenance, and renewals.</p>
            </div>
          </div>
          <ul class="activity-list">
            ${activityItems
              .map((item) => `<li class="activity-item"><span class="activity-dot"></span><div><strong>${escapeHtml(item.title)}</strong><span>${escapeHtml(item.detail)}</span></div><span>${escapeHtml(item.time)}</span></li>`)
              .join("")}
          </ul>
        </div>
        <div class="section-band">
          <div class="section-header">
            <div>
              <h2>Rent Follow-ups</h2>
              <p>Tenants with pending or late rent.</p>
            </div>
          </div>
          <ul class="activity-list">
            ${data.rentRows
              .filter((row) => row.status !== "Paid")
              .map((row) => `<li class="activity-item"><span class="activity-dot"></span><div><strong>${escapeHtml(row.tenant)}</strong><span>${escapeHtml(row.amount)} due ${escapeHtml(row.dueDate)}</span></div>${badgeSlot(row.status)}</li>`)
              .join("")}
          </ul>
        </div>
        <div class="section-band">
          <div class="section-header">
            <div>
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
            <h2>Financial Snapshot</h2>
            <p>Monthly operating view.</p>
          </div>
        </div>
        <div class="metric-grid compact-metrics">
          ${metricCard("Rental income", data.financial.income, "Collected and due", "chart", "financial")}
          ${metricCard("Expenses", data.financial.expenses, "Service costs", "wallet", "financial")}
          ${metricCard("Net income", data.financial.net, "After costs", "chart", "financial")}
          ${metricCard("Operational costs", data.financial.operational, "Ops spend", "tool", "financial")}
        </div>
      </section>
    </div>
  `;
}

function renderTenantRecords() {
  const properties = ["All", ...new Set(state.data.manager.tenants.map((tenant) => tenant.property))];
  const rentStatuses = ["All", "Paid", "Pending", "Late"];
  const filtered = state.data.manager.tenants.filter((tenant) => {
    const search = state.filters.tenantSearch.toLowerCase();
    const searchMatch = !search || `${tenant.name} ${tenant.unit} ${tenant.property}`.toLowerCase().includes(search);
    const propertyMatch = state.filters.tenantProperty === "All" || tenant.property === state.filters.tenantProperty;
    const rentMatch = state.filters.tenantRent === "All" || tenant.rentStatus === state.filters.tenantRent;
    return searchMatch && propertyMatch && rentMatch;
  });
  const rows = filtered.map(
    (tenant) => `
      <tr>
        <td>${escapeHtml(tenant.name)}</td>
        <td>${escapeHtml(tenant.unit)}</td>
        <td>${escapeHtml(tenant.property)}</td>
        <td>${badge(tenant.contractStatus)}</td>
        <td>${badge(tenant.rentStatus)}</td>
        <td>${badge(tenant.documentStatus)}</td>
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
            <p>Search and open tenant profiles.</p>
          </div>
        </div>
        <div class="control-row">
          <div class="field">
            <label for="tenantSearch">Search tenant</label>
            <input id="tenantSearch" value="${escapeHtml(state.filters.tenantSearch)}" data-filter="tenantSearch" placeholder="Name, unit, or property" />
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
          <button class="button secondary" type="button" data-action="add-tenant">${buttonIcon("users")}Add tenant</button>
        </div>
        ${table(["Tenant Name", "Unit", "Property", "Contract Status", "Rent Status", "Document Status", "Action"], rows)}
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
            <button class="button ghost compact" type="button" data-action="send-reminder" data-tenant="${escapeHtml(row.tenant)}">Send reminder</button>
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
        ${metricCard("New Requests", "1", "Triage", "tool")}
        ${metricCard("In Progress", "1", "Technician assigned", "refresh")}
        ${metricCard("Scheduled", "1", "Visit booked", "file")}
        ${metricCard("Completed", "1", "Closed", "check")}
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
        ${metricCard("Pending Renewals", "2", "Need decision", "refresh")}
        ${metricCard("Approved Renewals", "1", "Approved", "check")}
        ${metricCard("Rejected Renewals", "1", "Rejected", "close")}
        ${metricCard("Expiring Soon", "2", "Within 90 days", "file")}
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
  const financial = state.data.manager.financial;
  const stats = managerRentStats();
  const pendingReceivables = stats.pendingAmount + stats.lateAmount;
  const collectedPercent = stats.expectedAmount ? Math.round((stats.paidAmount / stats.expectedAmount) * 100) : 0;
  const pendingPercent = Math.max(0, 100 - collectedPercent);
  return `
    <div class="content-stack">
      <section class="metric-grid five">
        ${metricCard("Total Rental Income", formatAed(stats.paidAmount), "Recorded paid", "chart")}
        ${metricCard("Pending Rent", formatAed(pendingReceivables), "Receivables", "wallet")}
        ${metricCard("Monthly Expenses", financial.expenses, "Service spend", "file")}
        ${metricCard("Operational Costs", financial.operational, "Ops costs", "tool")}
        ${metricCard("Net Income", financial.net, "Estimate", "chart")}
      </section>
      <section class="visual-grid">
        ${visualCard("Rental income", [["Collected", collectedPercent, formatAed(stats.paidAmount)], ["Pending", pendingPercent, formatAed(pendingReceivables)]])}
        ${visualCard("Expenses", [["Maintenance", 38, "AED 119K"], ["Utilities", 24, "AED 75K"], ["Vendors", 20, "AED 62K"]])}
        ${visualCard("Operational costs", [["Admin", 34, "AED 40K"], ["Security", 28, "AED 33K"], ["Cleaning", 22, "AED 26K"]])}
        ${visualCard("Mortgage", [["Serviced", 72, "AED 410K"], ["Remaining", 28, "AED 160K"]])}
        ${visualCard("Insurance", [["Annual allocation", 48, "AED 92K"], ["Paid to date", 34, "AED 64K"]])}
        ${visualCard("Tax payments", [["Provisioned", 60, "AED 76K"], ["Filed", 30, "AED 38K"]])}
        ${visualCard("Transportation costs", [["Vendor trips", 46, "AED 18K"], ["Inspections", 22, "AED 9K"]])}
      </section>
    </div>
  `;
}

function renderPortfolio() {
  const totalProperties = state.data.manager.properties.length;
  const occupiedProperties = state.data.manager.properties.filter((property) => property.status === "Occupied").length;
  const vacantProperties = state.data.manager.properties.filter((property) => property.status === "Vacant").length;
  const rows = state.data.manager.properties.map(
    (property) => `
      <tr>
        <td>${escapeHtml(property.name)}</td>
        <td>${escapeHtml(property.location)}</td>
        <td>${escapeHtml(property.units)}</td>
        <td>${escapeHtml(property.occupancy)}</td>
        <td>${escapeHtml(property.income)}</td>
        <td>${badge(property.status)}</td>
      </tr>
    `
  );

  return `
    <div class="content-stack">
      <section class="metric-grid five">
        ${metricCard("Total Properties", String(totalProperties), "Assets", "building")}
        ${metricCard("Occupied Properties", String(occupiedProperties), "Active assets", "users")}
        ${metricCard("Vacant Properties", String(vacantProperties), "Needs leasing", "file")}
        ${metricCard("Total Units", "220", "Units", "home")}
        ${metricCard("Total Assets", "AED 248M", "Portfolio value", "chart")}
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Properties</h2>
            <p>Portfolio summary.</p>
          </div>
        </div>
        <div class="property-grid">
          ${state.data.manager.properties
            .map(
              (property) => `
                <article class="property-card">
                  <div class="card-title-row">
                    ${metricIcon("building")}
                    ${badgeSlot(property.status)}
                  </div>
                  <h3>${escapeHtml(property.name)}</h3>
                  <div class="property-meta">
                    <span>${escapeHtml(property.location)}</span>
                    <span>${escapeHtml(property.units)} units · ${escapeHtml(property.occupancy)} occupied</span>
                    <span>Monthly income ${escapeHtml(property.income)}</span>
                    <span>Maintenance: ${escapeHtml(property.maintenance)}</span>
                  </div>
                </article>
              `
            )
            .join("")}
        </div>
      </section>
      <section class="section-band">
        <div class="section-header">
          <div>
            <h2>Property Table</h2>
            <p>Key portfolio metrics.</p>
          </div>
        </div>
        ${table(["Property", "Location", "Units", "Occupancy", "Monthly Income", "Status"], rows)}
      </section>
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
  modalRoot().innerHTML = `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal ${modal.large ? "large" : ""}" role="dialog" aria-modal="true" aria-labelledby="modal-title">
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
    modalRoot().querySelector(".modal-close")?.focus({ preventScroll: true });
  });
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
            <div class="detail-item"><span>Status</span><strong>${badge(summary.status)}</strong></div>
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
  const tenant = state.data.manager.tenants.find((item) => item.id === id);
  if (!tenant) return modalContent({ type: "fallback" });
  const rentHistory = state.data.manager.rentRows.filter((row) => row.tenant === tenant.name);
  const maintenance = state.data.manager.maintenanceRequests.filter((row) => row.tenant === tenant.name);
  const docs = state.data.manager.documents.filter((row) => row.tenant === tenant.name);
  return {
    large: true,
    title: tenant.name,
    subtitle: "Profile, lease, rent, requests, and documents.",
    body: `
      <div class="detail-grid">
        <div class="detail-item"><span>Profile</span><strong>${escapeHtml(tenant.email)}<br>${escapeHtml(tenant.phone)}</strong></div>
        <div class="detail-item"><span>Unit</span><strong>Unit ${escapeHtml(tenant.unit)} · ${escapeHtml(tenant.property)}</strong></div>
        <div class="detail-item"><span>Contract</span><strong>${escapeHtml(tenant.contract)} · ${badge(tenant.contractStatus)}</strong></div>
        <div class="detail-item"><span>Cheque</span><strong>${escapeHtml(tenant.cheque)}</strong></div>
        <div class="detail-item"><span>Emirates ID</span><strong>${badge(tenant.documentStatus)}</strong></div>
        <div class="detail-item"><span>Current rent</span><strong>${escapeHtml(tenant.rent)} · ${badge(tenant.rentStatus)}</strong></div>
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
      <div class="detail-grid">
        <div class="detail-item"><span>Tenant</span><strong>${escapeHtml(row.tenant)}</strong></div>
        <div class="detail-item"><span>Unit</span><strong>${escapeHtml(row.unit)}</strong></div>
        <div class="detail-item"><span>Property</span><strong>${escapeHtml(row.property)}</strong></div>
        <div class="detail-item"><span>Rent amount</span><strong>${escapeHtml(row.amount)}</strong></div>
        <div class="detail-item"><span>Due date</span><strong>${escapeHtml(row.dueDate)}</strong></div>
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
      </div>
    `,
    actions: `
      <button class="button ghost" type="button" data-action="close-modal">Close</button>
      <button class="button secondary" type="button" data-action="send-reminder" data-tenant="${escapeHtml(row.tenant)}">Send reminder</button>
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
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
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
        <div class="detail-item"><span>Priority</span><strong>${badge(row.priority)}</strong></div>
        <div class="detail-item"><span>Date</span><strong>${escapeHtml(row.date)}</strong></div>
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
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
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
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
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
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
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
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
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
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
        <div class="detail-item"><span>Status</span><strong>${badge(row.status)}</strong></div>
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

function showToast(message) {
  toastCounter += 1;
  const id = `toast-${Date.now()}-${toastCounter}`;
  const node = document.createElement("div");
  node.className = "toast";
  node.id = id;
  node.setAttribute("role", "status");
  node.textContent = message;
  const root = toastRoot();
  [...root.querySelectorAll(".toast")]
    .filter((toast) => toast.textContent === message)
    .forEach((toast) => toast.remove());
  root.appendChild(node);
  const toasts = [...root.querySelectorAll(".toast")];
  toasts.slice(0, Math.max(0, toasts.length - 3)).forEach((toast) => toast.remove());
  window.setTimeout(() => {
    const toast = document.getElementById(id);
    if (toast) toast.remove();
  }, 4200);
}

function openResetDataModal({ fromPull = false } = {}) {
  if (fromPull) resetPullToResetState({ update: false });
  state.modal = { type: "resetData" };
  state.notificationPanelOpen = false;
  render();
  pushHistoryEntry();
}

function resetDemoData() {
  state.data = cloneData();
  state.sequence = 0;
  state.page = "dashboard";
  state.modal = null;
  state.confirmations = {};
  state.filters = defaultFilters();
  state.notificationPanelOpen = false;
  resetPullToResetState({ update: false });
  ensureActionCenterData();
  saveData();
  renderAtTop();
  replaceHistoryEntry();
  showToast("Demo data reset.");
}

function pullResetCopy() {
  const pull = state.pullToReset;
  if (pull.phase === "refreshing") return "Opening reset confirmation...";
  if (pull.phase === "complete") return "Demo data reset";
  return pull.thresholdReached ? "Release to reset demo data" : "Pull further to reset demo data";
}

function updatePullToResetIndicator({ settle = false } = {}) {
  const pull = state.pullToReset;
  const main = document.querySelector(".main-area");
  const indicator = document.querySelector("[data-pull-reset]");
  if (!main || !indicator) return;

  const visible = pull.phase !== "idle";
  const offset = visible ? Math.min(PULL_RESET_MAX_DISTANCE, Math.round(pull.distance * 0.52)) : 0;
  const progress = Math.min(1, pull.distance / PULL_RESET_THRESHOLD);

  main.style.setProperty("--pull-reset-offset", `${offset}px`);
  main.style.setProperty("--pull-reset-progress", progress.toFixed(2));
  main.classList.toggle("pull-reset-active", visible);
  main.classList.toggle("pull-reset-ready", Boolean(pull.thresholdReached));
  main.classList.toggle("pull-reset-settling", settle || pull.phase === "refreshing" || pull.phase === "complete");

  indicator.classList.toggle("visible", visible);
  indicator.dataset.state = pull.thresholdReached && pull.phase === "pulling" ? "ready" : pull.phase;
  indicator.setAttribute("aria-hidden", visible ? "false" : "true");
  const label = indicator.querySelector("[data-pull-reset-label]");
  if (label) label.textContent = pullResetCopy();
}

function resetPullToResetState({ update = true } = {}) {
  Object.assign(state.pullToReset, {
    phase: "idle",
    tracking: false,
    thresholdReached: false,
    isResetting: false,
    distance: 0,
    rawDistance: 0,
    startX: 0,
    startY: 0,
    gestureStartedAtTop: false,
    isEligibleForPullReset: false,
    source: ""
  });
  if (update) updatePullToResetIndicator({ settle: true });
}

function pullResetScrollTop() {
  return Math.max(window.scrollY, document.documentElement.scrollTop || 0, document.body.scrollTop || 0);
}

function isAtPullResetStart() {
  return pullResetScrollTop() <= PULL_RESET_TOP_TOLERANCE;
}

function isPullResetBlockedTarget(target) {
  return Boolean(
    target?.closest?.(
      [
        "input",
        "textarea",
        "select",
        "option",
        "button",
        "a",
        "form",
        "table",
        ".table-wrap",
        ".modal-backdrop",
        ".modal-card",
        ".notifications-menu",
        ".sidebar",
        ".mobile-nav",
        "[data-action]",
        "[data-page]",
        "[data-modal]",
        "[data-filter]",
        "[data-tab]",
        "[role='button']",
        "[contenteditable='true']"
      ].join(", ")
    )
  );
}

function hasNestedScrollableAncestor(target) {
  let node = target instanceof Element ? target : null;
  while (node && node !== document.body && node !== document.documentElement) {
    const style = window.getComputedStyle(node);
    const scrollable = /(auto|scroll|overlay)/.test(style.overflowY) && node.scrollHeight > node.clientHeight + 1;
    if (scrollable) return true;
    node = node.parentElement;
  }
  return false;
}

function canUsePullToReset(event) {
  const pull = state.pullToReset;
  const now = Date.now();
  if (!state.auth || state.modal || state.notificationPanelOpen) return false;
  if (pull.isResetting || now < pull.cooldownUntil) return false;
  if (!isAtPullResetStart()) return false;
  if (now - pull.lastNonTopScrollTime < PULL_RESET_TOP_STABILITY_MS) return false;
  if (pull.wheelSessionActive && !pull.wheelSessionStartedAtTop) return false;
  if (isPullResetBlockedTarget(event.target)) return false;
  if (hasNestedScrollableAncestor(event.target)) return false;
  return true;
}

function startPullToReset(source, startX, startY) {
  const gestureStartedAtTop = isAtPullResetStart();
  Object.assign(state.pullToReset, {
    phase: "idle",
    tracking: true,
    thresholdReached: false,
    isResetting: false,
    distance: 0,
    rawDistance: 0,
    startX,
    startY,
    gestureStartedAtTop,
    isEligibleForPullReset: gestureStartedAtTop,
    source
  });
}

function setPullToResetDistance(distance) {
  const pull = state.pullToReset;
  pull.phase = "pulling";
  pull.distance = Math.min(PULL_RESET_MAX_DISTANCE, Math.max(0, distance));
  pull.thresholdReached = pull.distance >= PULL_RESET_THRESHOLD;
  updatePullToResetIndicator();
}

function cancelPullToReset() {
  resetPullToResetState();
}

function triggerPullToReset() {
  if (state.pullToReset.isResetting || !state.pullToReset.isEligibleForPullReset) return;
  Object.assign(state.pullToReset, {
    phase: "refreshing",
    tracking: false,
    thresholdReached: true,
    isResetting: true,
    distance: PULL_RESET_THRESHOLD,
    cooldownUntil: Date.now() + PULL_RESET_COOLDOWN
  });
  updatePullToResetIndicator({ settle: true });
  window.setTimeout(() => openResetDataModal({ fromPull: true }), 180);
}

function finishPullToReset() {
  const pull = state.pullToReset;
  if (!pull.tracking && pull.phase !== "pulling") return;
  if (pull.isEligibleForPullReset && pull.thresholdReached) {
    triggerPullToReset();
  } else {
    cancelPullToReset();
  }
}

function handlePullResetTouchStart(event) {
  if (event.touches.length !== 1) return;
  if (!isAtPullResetStart()) state.pullToReset.lastNonTopScrollTime = Date.now();
  if (!canUsePullToReset(event)) return;
  const touch = event.touches[0];
  startPullToReset("touch", touch.clientX, touch.clientY);
}

function handlePullResetTouchMove(event) {
  const pull = state.pullToReset;
  if (!pull.tracking || pull.source !== "touch" || event.touches.length !== 1) return;
  if (!isAtPullResetStart()) {
    cancelPullToReset();
    return;
  }

  const touch = event.touches[0];
  const deltaY = touch.clientY - pull.startY;
  const deltaX = touch.clientX - pull.startX;
  if (Math.abs(deltaX) > Math.abs(deltaY) * 0.8) {
    cancelPullToReset();
    return;
  }

  if (deltaY <= PULL_RESET_START_DISTANCE) return;
  event.preventDefault();
  if (!pull.isEligibleForPullReset) return;
  setPullToResetDistance((deltaY - PULL_RESET_START_DISTANCE) * PULL_RESET_TOUCH_RESISTANCE);
}

function handlePullResetTouchEnd() {
  if (state.pullToReset.source === "touch") finishPullToReset();
}

let pullResetWheelTimer = null;
let pullResetWheelIdleTimer = null;

function handlePullResetWheel(event) {
  const pull = state.pullToReset;
  const now = Date.now();
  const atTop = isAtPullResetStart();

  if (!atTop) {
    pull.lastNonTopScrollTime = now;
  }

  const sessionExpired = !pull.wheelSessionActive || now - pull.lastWheelTime > PULL_RESET_WHEEL_IDLE_DELAY;
  if (sessionExpired) {
    pull.wheelSessionActive = true;
    pull.wheelSessionStartedAtTop = atTop;
  }
  pull.lastWheelTime = now;

  window.clearTimeout(pullResetWheelIdleTimer);
  pullResetWheelIdleTimer = window.setTimeout(() => {
    state.pullToReset.wheelSessionActive = false;
    state.pullToReset.wheelSessionStartedAtTop = false;
  }, PULL_RESET_WHEEL_IDLE_DELAY);

  if (event.deltaY >= 0) {
    if (pull.source === "wheel") cancelPullToReset();
    return;
  }
  if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;

  if (!pull.wheelSessionStartedAtTop) {
    if (pull.source === "wheel") cancelPullToReset();
    return;
  }

  if (pull.source === "wheel" && !atTop) {
    cancelPullToReset();
    return;
  }
  if (!pull.tracking && !canUsePullToReset(event)) return;

  if (!pull.tracking) startPullToReset("wheel", event.clientX, event.clientY);
  event.preventDefault();

  pull.rawDistance += Math.min(PULL_RESET_WHEEL_STEP_MAX, Math.abs(event.deltaY) * PULL_RESET_WHEEL_RESISTANCE);
  if (pull.rawDistance > PULL_RESET_START_DISTANCE) {
    setPullToResetDistance((pull.rawDistance - PULL_RESET_START_DISTANCE) * PULL_RESET_WHEEL_DISTANCE_RESISTANCE);
  }

  window.clearTimeout(pullResetWheelTimer);
  pullResetWheelTimer = window.setTimeout(() => {
    if (state.pullToReset.source === "wheel") finishPullToReset();
  }, PULL_RESET_WHEEL_RELEASE_DELAY);
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
  const notificationShell = event.target.closest(".notifications-menu");
  const roleButton = event.target.closest("[data-role-option]");
  if (roleButton) {
    state.selectedRole = roleButton.dataset.roleOption;
    state.notificationPanelOpen = false;
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
    state.auth = false;
    state.role = null;
    state.page = "dashboard";
    state.modal = null;
    state.notificationPanelOpen = false;
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

  if (action === "toggle-rent-history") {
    state.filters.rentHistoryView = state.filters.rentHistoryView === "All" ? "Recent" : "All";
    render();
    return;
  }

  if (action === "action-center") {
    const viewportAnchor = actionButton.dataset.command === "dismiss-card" ? actionCardViewportAnchor(actionButton) : null;
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
    state.modal = {
      type: "documentPreview",
      docTitle: actionButton.dataset.docTitle || "Document",
      docOwner: actionButton.dataset.docOwner || ""
    };
    render();
    pushHistoryEntry();
    return;
  }

  if (action === "download-doc") {
    downloadDemoDocument(actionButton.dataset.docTitle, actionButton.dataset.docOwner);
    showToast("Download started.");
    return;
  }

  if (action === "add-tenant") {
    showToast("Add tenant is demo-only.");
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

document.addEventListener("submit", (event) => {
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
    ensureActionCenterData({ persist: true });
    renderAtTop();
    pushHistoryEntry();
    return;
  }

  if (form.dataset.form === "tenant-payment") {
    const formData = new FormData(form);
    const profile = tenantProfile();
    const dueDate = formatDateInput(formData.get("dueDate"));
    const submission = {
      type: formData.get("paymentType"),
      amount: formData.get("amount"),
      dueDate,
      status: "Submitted",
      submittedOn: "12 Jun 2026",
      chequeNumber: formData.get("chequeNumber"),
      bank: formData.get("bankName")
    };
    state.data.tenant.paymentSubmissions.unshift(submission);
    const review = {
      id: nextId("c"),
      tenant: profile.name,
      unit: profile.unit,
      chequeNumber: submission.chequeNumber || "-",
      bank: submission.bank || "-",
      amount: submission.amount,
      dueDate: submission.dueDate,
      status: "Pending",
      notes: formData.get("notes") || "Tenant submitted payment proof."
    };
    state.data.manager.chequeReviews.unshift(review);
    setTenantCurrentRentStatus("Submitted", "Receipt pending");
    setManagerRentStatus(profile.name, profile.unit, "Pending");
    const action = ensureActionFromChequeReview(review);
    setActionStatus(action, "Pending", "tenant", "Payment proof submitted", `${submission.amount} sent for company review.`);
    recordTenantActivity("Payment proof sent", `${submission.amount} submitted for ${submission.dueDate}.`);
    state.confirmations.payment = true;
    saveData();
    showToast("Payment proof submitted.");
    render();
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
    const request = {
      id: nextId("tm"),
      issue: `${category} issue`,
      category,
      priority: formData.get("priority"),
      date: "12 Jun 2026",
      status: "Submitted",
      description: formData.get("description"),
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
    const complaint = {
      id: nextId("complaint"),
      tenant: profile.name,
      unit: profile.unit,
      property: profile.property,
      description: formData.get("description"),
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
    const suggestion = {
      id: nextId("suggestion"),
      tenant: profile.name,
      unit: profile.unit,
      property: profile.property,
      description: formData.get("description"),
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
  const filter = event.target.closest("[data-filter]");
  if (filter) {
    state.filters[filter.dataset.filter] = filter.value;
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
  if (event.key === "Escape" && state.notificationPanelOpen) {
    state.notificationPanelOpen = false;
    render();
    return;
  }

  if (event.key === "Escape" && state.modal) {
    closeModal();
  }
});

window.addEventListener("touchstart", handlePullResetTouchStart, { passive: true });
window.addEventListener("touchmove", handlePullResetTouchMove, { passive: false });
window.addEventListener("touchend", handlePullResetTouchEnd, { passive: true });
window.addEventListener("touchcancel", cancelPullToReset, { passive: true });
window.addEventListener("wheel", handlePullResetWheel, { passive: false });

window.addEventListener("popstate", (event) => {
  restoreFromHistory(event.state);
});

window.addEventListener("storage", (event) => {
  if (event.key !== DATA_STORE_KEY) return;
  const snapshot = loadStoredSnapshot();
  if (!snapshot) return;
  state.data = snapshot.data;
  state.sequence = snapshot.sequence;
  render();
});

replaceHistoryEntry();
render();
