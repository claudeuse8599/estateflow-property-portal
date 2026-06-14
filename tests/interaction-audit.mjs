import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const app = readFileSync(new URL("../app.js", import.meta.url), "utf8");
const index = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const styles = readFileSync(new URL("../styles.css", import.meta.url), "utf8");

function uniqueMatches(pattern, source) {
  return [...new Set([...source.matchAll(pattern)].map((match) => match[1]))].sort();
}

const expectedPages = [
  "dashboard",
  "actionCenter",
  "rent",
  "payments",
  "maintenance",
  "renewal",
  "documents",
  "tenants",
  "rentTracking",
  "chequeReview",
  "maintenanceMgmt",
  "renewalsMgmt",
  "docsMgmt",
  "notifications",
  "financial",
  "portfolio"
];

const expectedActions = [
  "add-tenant",
  "action-center",
  "ack-complaint",
  "ack-suggestion",
  "approve-cash",
  "approve-cheque",
  "approve-contract",
  "approve-renewal",
  "cancel-complaint",
  "cancel-maintenance",
  "close-modal",
  "confirm-demo-payment",
  "confirm-reset-data",
  "download-doc",
  "logout",
  "maintenance-status",
  "notify",
  "reject-cash",
  "reject-cheque",
  "reject-complaint",
  "reject-contract",
  "reject-renewal",
  "request-contract",
  "reset-data",
  "request-renewal",
  "resolve-complaint",
  "resolve-suggestion",
  "send-reminder",
  "template-late",
  "template-renewal",
  "toggle-rent-history",
  "toggle-theme",
  "view-doc"
];

const pageTargets = uniqueMatches(/data-page="([^"$]+)"/g, app);
for (const page of pageTargets) {
  assert.ok(expectedPages.includes(page), `Unknown data-page target: ${page}`);
}

const actions = uniqueMatches(/data-action="([^"$]+)"/g, app);
for (const action of actions) {
  assert.ok(expectedActions.includes(action), `Unknown data-action target: ${action}`);
}

for (const page of expectedPages) {
  assert.ok(app.includes(`id: "${page}"`) || page === "dashboard", `Expected page is missing from navigation/data: ${page}`);
}

assert.match(app, /case "documentPreview"/, "Document preview modal should be handled.");
assert.match(app, /state\.data\.manager\.chequeReviews\.unshift/, "Tenant payment submissions should enter manager review.");
assert.match(app, /state\.data\.manager\.maintenanceRequests\.unshift/, "Tenant maintenance requests should enter manager queue.");
assert.match(app, /upsertManagerRenewalRequest\(\)/, "Tenant renewal request should enter manager queue.");
assert.match(app, /syncTenantPaymentStatus\(row\)/, "Manager payment decisions should update tenant records.");
assert.match(app, /syncTenantMaintenanceStatus\(row\)/, "Manager maintenance updates should update tenant records.");
assert.match(app, /syncTenantRenewalStatus\(row\)/, "Manager renewal decisions should update tenant records.");
assert.match(app, /DATA_STORE_KEY/, "Dashboard data should persist in local storage.");
assert.match(app, /function saveData\(\)/, "Data-changing flows should have a save helper.");
assert.match(app, /window\.addEventListener\("storage"/, "Open portals should listen for shared data changes.");
assert.match(app, /markTenantRentPaid\(\)/, "Demo rent payment should update tenant and manager records.");
assert.match(app, /setManagerRentStatus\(profile\.name, profile\.unit, "Paid"\)/, "Tenant payment should update manager rent tracking.");
assert.match(app, /data-form="card-payment"/, "Tenant card payment flow should collect demo card details.");
assert.match(app, /showToast\("Payment successful\."\);\s+showToast\("Email sent\."\);/, "Card payment should show payment and email feedback.");
assert.match(app, /data-form="cash-payment"/, "Tenant cash payment flow should collect a visit time.");
assert.match(app, /function ensureActionFromCashRequest/, "Cash payment requests should create Action Center items.");
assert.match(app, /data-modal="cashReview"/, "Management should review cash payment requests.");
assert.match(app, /data-action="approve-cash"/, "Management should approve cash visit times.");
assert.match(app, /data-action="reject-cash"/, "Management should reject cash visit times.");
assert.match(app, /id: "actionCenter"/, "Action Center should be available in navigation.");
assert.match(app, /function renderActionCenter\(\)/, "Action Center page should render.");
assert.match(app, /function ensureActionCenterData/, "Action Center should backfill persisted action records.");
assert.match(app, /function applyActionCenterCommand/, "Action Center should handle direct role-based actions.");
assert.match(app, /data-action="action-center"/, "Action Center buttons should be wired.");
assert.match(app, /data-action="reset-data"/, "Demo data reset should be available from the portal shell.");
assert.match(app, /state\.data = cloneData\(\)/, "Demo data reset should restore seed data.");
assert.match(app, /case "resetData"/, "Data reset should open a confirmation modal.");
assert.match(app, /data-action="confirm-reset-data"/, "Data reset confirmation should be wired.");
assert.match(app, /data-action="request-contract"/, "Tenant contract cancellation\/amendment\/change requests should be available.");
assert.match(app, /function ensureActionFromContractRequest/, "Contract requests should create Action Center items.");
assert.match(app, /data-form="tenant-complaint"/, "Tenant complaints should be submittable.");
assert.match(app, /data-form="tenant-suggestion"/, "Tenant suggestions should be submittable.");
assert.match(app, /data-action="cancel-maintenance"/, "Tenant should be able to cancel active maintenance requests.");
assert.match(app, /data-action="cancel-complaint"/, "Tenant should be able to cancel complaints.");
assert.match(app, /function ensureActionFromComplaint/, "Complaints should create Action Center items.");
assert.match(app, /function ensureActionFromSuggestion/, "Suggestions should create Action Center items.");
assert.match(app, /state\.role === "tenant"\s+\?\s+state\.data\.actions\.filter\(isTenantAction\)/, "Tenant Action Center should only show tenant-owned actions.");
assert.match(app, /function renderActionCenterGroups/, "Action Center should group actionable items by workflow state.");
assert.match(app, /data-page="actionCenter" aria-label="Open Action Center/, "Notification items should route to Action Center.");
assert.match(app, /function metricActionLabel/, "Dashboard cards should expose clearer action labels.");
assert.match(app, /actionStatus: "All"/, "Action Center should include a status filter.");
assert.match(app, /actionType: "All"/, "Action Center should include a type filter.");
assert.match(app, /actionSort: "Newest"/, "Action Center should include newest/oldest sorting.");
assert.match(app, /setActionStatus\(action, "Pending", "tenant", "Payment proof submitted"/, "Tenant payment proof should create a persisted action update.");
assert.match(app, /setActionStatus\(action, "New", "tenant", "Maintenance request submitted"/, "Tenant maintenance requests should create a persisted action update.");
assert.match(app, /setActionStatus\(item, "Approved", "manager", "Payment approved"/, "Company payment approvals should update Action Center status.");
assert.match(app, /setActionStatus\(item, "Acknowledged", "manager", "Request acknowledged"/, "Company maintenance acknowledgements should update Action Center status.");
assert.match(app, /setActionStatus\(item, "Completed", "manager", "Request resolved"/, "Company maintenance resolution should update Action Center status.");
assert.match(app, /setActionStatus\(item, "Approved", "manager", "Renewal approved"/, "Company renewal approvals should update Action Center status.");
assert.match(app, /saveData\(\);\s+showToast\("Payment approved\."\);\s+render\(\);/, "Action Center payment approval should save and finish the flow.");
assert.match(app, /window\.addEventListener\("storage"/, "Action Center should refresh from shared persisted data.");
assert.match(app, /notificationPanelOpen/, "Notification button should manage an open panel state.");
assert.match(app, /function renderNotificationPanel\(\)/, "Notification panel should render from the topbar.");
assert.match(app, /aria-expanded="\$\{state\.notificationPanelOpen\}"/, "Notification button should expose expanded state.");
assert.doesNotMatch(app, /showToast\("3 notifications\."\)/, "Notification button should not be toast-only.");
assert.match(app, /\.filter\(\(toast\) => toast\.textContent === message\)/, "Repeated toast messages should be deduplicated.");
assert.match(app, /function renderLogin\(\)[\s\S]*login-actions[\s\S]*renderThemeToggle\(\)/, "Login screen should include the theme toggle.");
assert.match(app, /const showScreenFocus = !\(state\.role === "tenant" && state\.page === "dashboard"\)/, "Tenant dashboard should not render the redundant global focus hero.");
assert.match(app, /tenant-summary-strip/, "Tenant dashboard should render the compact tenant overview strip.");
assert.match(app, /tenant-dashboard-lower/, "Tenant dashboard should arrange actions and activity in a balanced lower grid.");
assert.doesNotMatch(app, /<h2>\$\{escapeHtml\(profile\.name\.split\(" "\)\[0\]\)\}, \$\{escapeHtml\(summary\.title\)\}<\/h2>/, "Tenant dashboard should not lead with the rent-review welcome sentence.");
assert.match(styles, /\.quick-grid\.tenant-action-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/, "Tenant quick actions should render as two-column mini cards.");
assert.match(styles, /\.quick-grid\.tenant-action-grid > \.quick-card\s*\{[\s\S]*min-height:\s*112px/, "Tenant quick action cards should be compact mini cards.");
assert.match(styles, /\.quick-grid\.tenant-action-grid > \.quick-card:hover\s*\{[\s\S]*background:\s*var\(--surface-soft\)/, "Tenant quick action hover state should resolve to a gray surface.");
assert.match(styles, /\.tenant-action-grid \.metric-icon\s*\{[\s\S]*width:\s*34px;[\s\S]*height:\s*34px;/, "Tenant quick action icons should be easier to scan.");
assert.match(styles, /\.tenant-action-grid \.quick-card::after\s*\{[^}]*top:\s*14px;[^}]*right:\s*14px;/, "Tenant quick action Open affordance should align to the shared card inset.");
assert.match(styles, /\.tenant-action-grid \.quick-card:last-child:nth-child\(odd\)::after\s*\{[^}]*position:\s*absolute/, "Tenant quick action Open affordance should remain aligned across all cards.");
assert.doesNotMatch(styles, /\.tenant-action-grid \.quick-card:last-child:nth-child\(odd\)::after\s*\{[^}]*position:\s*static/, "Tenant quick action Open affordance should not use the misaligned static layout.");
assert.match(styles, /--space-4:\s*16px/, "Shared spacing tokens should be defined.");
assert.match(styles, /\.modal-header h2/, "Modal headers should use the shared typography scale.");
assert.match(styles, /\.notification-panel\s*\{[\s\S]*border-radius:\s*var\(--radius-lg\)/, "Notification panel should use the shared radius.");
assert.match(index, /oneui2-20260614-29/g, "Index should load the latest cache-busted assets.");

console.log("Interaction audit checks passed.");
