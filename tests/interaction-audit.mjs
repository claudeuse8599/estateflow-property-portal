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
assert.match(app, /pullToReset:\s*\{/, "Portal should track pull-to-reset gesture state.");
assert.match(app, /const PULL_RESET_TOP_TOLERANCE = 2;/, "Pull-to-reset should use a tight top tolerance.");
assert.match(app, /const PULL_RESET_START_DISTANCE = 52;/, "Pull-to-reset should require a deliberate pull before showing progress.");
assert.match(app, /const PULL_RESET_THRESHOLD = 190;/, "Pull-to-reset should use a stronger release threshold to avoid Mac momentum triggers.");
assert.match(app, /const PULL_RESET_WHEEL_IDLE_DELAY = 480;/, "Trackpad pull-to-reset should wait for wheel idle before allowing a new top pull.");
assert.match(app, /const PULL_RESET_TOP_STABILITY_MS = 420;/, "Pull-to-reset should require the page to be stable at the top.");
assert.match(app, /const PULL_RESET_WHEEL_STEP_MAX = 18;/, "Trackpad pull-to-reset should accumulate cautiously per wheel event.");
assert.match(app, /const PULL_RESET_WHEEL_RESISTANCE = 0\.26;/, "Trackpad pull-to-reset should apply resistance against momentum scrolling.");
assert.match(app, /gestureStartedAtTop:\s*false/, "Pull-to-reset should track whether the gesture started at the top.");
assert.match(app, /isEligibleForPullReset:\s*false/, "Pull-to-reset should track eligibility separately from visual pulling.");
assert.match(app, /wheelSessionStartedAtTop:\s*false/, "Pull-to-reset should track whether a wheel session began at the top.");
assert.match(app, /lastNonTopScrollTime:\s*0/, "Pull-to-reset should remember recent non-top scrolling.");
assert.match(app, /function openResetDataModal/, "Reset modal opening should be reusable across button and gesture flows.");
assert.match(app, /function resetDemoData/, "Demo data reset should use one shared reset helper.");
assert.match(app, /if \(action === "reset-data"\) \{\s+openResetDataModal\(\);/, "Reset Data button should use the shared reset modal helper.");
assert.match(app, /if \(action === "confirm-reset-data"\) \{\s+resetDemoData\(\);/, "Reset confirmation should use the shared reset helper.");
assert.match(app, /openResetDataModal\(\{ fromPull: true \}\)/, "Pull-to-reset should open the same reset confirmation modal.");
assert.match(app, /function canUsePullToReset/, "Pull-to-reset should guard when the gesture is allowed.");
assert.match(app, /state\.modal \|\| state\.notificationPanelOpen/, "Pull-to-reset should not start while modal or notification UI is active.");
assert.match(app, /isAtPullResetStart\(\)/, "Pull-to-reset should only activate at the top of the page.");
assert.match(app, /now - pull\.lastNonTopScrollTime < PULL_RESET_TOP_STABILITY_MS/, "Pull-to-reset should block momentum immediately after non-top scrolling.");
assert.match(app, /pull\.wheelSessionActive && !pull\.wheelSessionStartedAtTop/, "Pull-to-reset should reject wheel sessions that started away from the top.");
assert.match(app, /isPullResetBlockedTarget\(event\.target\)/, "Pull-to-reset should avoid forms, buttons, tables, and nested controls.");
assert.match(app, /pull\.wheelSessionStartedAtTop = atTop/, "Wheel pull-to-reset should record the starting top state for the full session.");
assert.match(app, /if \(!pull\.wheelSessionStartedAtTop\)/, "Wheel pull-to-reset should block sessions that did not start at the top.");
assert.match(app, /state\.pullToReset\.wheelSessionActive = false/, "Wheel pull-to-reset should reset session state after idle.");
assert.match(app, /window\.addEventListener\("touchstart", handlePullResetTouchStart, \{ passive: true \}\)/, "Pull-to-reset should support touch start.");
assert.match(app, /window\.addEventListener\("touchmove", handlePullResetTouchMove, \{ passive: false \}\)/, "Pull-to-reset should support cancellable touch movement.");
assert.match(app, /window\.addEventListener\("wheel", handlePullResetWheel, \{ passive: false \}\)/, "Pull-to-reset should support cautious trackpad overscroll.");
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
assert.match(app, /valueLabel:\s*actionCount === 1 \? "tenant action" : "tenant actions"/, "Tenant Action Center focus count label should be data-aware.");
assert.match(app, /valueClassName:\s*"attention-count"/, "Tenant Action Center focus count should use a dedicated emphasis class.");
assert.match(app, /class="action-group action-group-\$\{escapeHtml\(group\.key\)\}"/, "Action Center groups should expose reusable group styling hooks.");
assert.match(app, /function actionCardPresentation/, "Action Center cards should use data-driven presentation copy.");
assert.match(app, /function renderActionMeta/, "Action Center metadata should be rendered conditionally.");
assert.match(app, /function isDismissibleActionItem/, "Action Center cards should expose a reusable dismissibility rule.");
assert.match(app, /state\.role === "tenant" \|\| item\.type === "Message"/, "Tenant Action Center cards and message-type cards should be dismissible.");
assert.match(app, /dismissedBy\?\.includes\(state\.role\)/, "Dismissed Action Center items should be hidden for the current role.");
assert.match(app, /class="action-state-row"/, "Action Center cards should place state badges in a dedicated row.");
assert.match(app, /class="action-card-topline"/, "Action Center cards should use a top row for status and dismiss controls.");
assert.match(app, /data-item-id="\$\{escapeHtml\(item\.id\)\}"/, "Action Center cards should expose stable item ids for viewport anchoring.");
assert.match(app, /<h3 class="action-item-title">/, "Action Center item headings should use a reusable title class.");
assert.match(app, /data-command="dismiss-card"/, "Dismissible Action Center cards should render a close command.");
assert.match(app, /aria-label="Dismiss update"/, "Dismissible Action Center cards should expose an accessible close label.");
assert.match(app, /command === "dismiss-card"/, "Action Center should handle card dismiss commands.");
assert.match(app, /function renderPreservingScroll/, "Dismiss flows should be able to preserve the current viewport.");
assert.match(app, /function actionCardViewportAnchor/, "Dismiss flows should capture the next card position before rerendering.");
assert.match(app, /actionCardViewportAnchor\(actionButton\)/, "Action Center dismiss clicks should pass a viewport anchor.");
assert.match(app, /anchorItemId/, "Dismiss scroll restoration should align the next available card.");
assert.match(app, /window\.requestAnimationFrame\(restoreScroll\)/, "Dismiss scroll restoration should run after browser scroll anchoring.");
assert.match(app, /showToast\("Update dismissed\."\);\s+renderPreservingScroll\(options\.viewportAnchor \|\| \{\}\);/, "Dismissing an Action Center card should preserve scroll without keeping stale list height.");
assert.doesNotMatch(app, /renderPreservingScroll\(\{ preserveActionListHeight: true, \.\.\.\(options\.viewportAnchor \|\| \{\}\) \}\);/, "Dismissing an Action Center card should not leave old list height behind.");
assert.match(app, /showToast\("Update dismissed\."\)/, "Dismissing an update should give clear feedback.");
assert.doesNotMatch(app, /<span class="action-type">\$\{escapeHtml\(item\.type\)\}<\/span>/, "Action Center cards should not show a generic static type pill.");
assert.doesNotMatch(app, /item\.tenant \|\| "N\/A"/, "Action Center metadata should not render blank tenant placeholders.");
assert.doesNotMatch(app, /item\.property \|\| "N\/A"/, "Action Center metadata should not render blank property placeholders.");
assert.match(app, /label:\s*"Mark as read"/, "Unread Action Center items should expose a clear Mark as read action.");
assert.match(app, /showToast\("Marked as read\."\)/, "Mark as read should give clear feedback.");
assert.doesNotMatch(app, /body:\s*"Track requests, rent updates, messages, and company responses\."/, "Tenant Action Center focus card should not render the extra descriptive copy.");
assert.doesNotMatch(app, /Your requests, rent updates, messages, and company responses\./, "Tenant Action Center page should not render the removed supporting copy elsewhere.");
assert.doesNotMatch(app, /meta:\s*\["Requests", "Payment updates", "Status history"\]/, "Tenant Action Center focus card should not reserve space for removed metadata chips.");
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
assert.match(app, /function contractHealthClass\(endDate\)/, "Tenant contract status should be derived from the contract end date.");
assert.match(app, /class="contract-health \$\{contractHealth\}"/, "Tenant dashboard contract fact should render a health color class.");
assert.match(app, /function paymentHealthClass\(summary\)/, "Tenant payment status should be derived from due date and payment state.");
assert.match(app, /daysRemaining <= 1\) return "metric-status-critical"/, "Tenant payment status should turn critical when overdue or one day from due.");
assert.match(app, /daysRemaining <= 7\) return "metric-status-warning"/, "Tenant payment status should turn warning when close to due.");
assert.match(app, /metricStatusPaid|metric-status-paid|className: "metric-status-paid"/, "Tenant paid payment status should render the paid metric class.");
assert.match(app, /metric-status-warning/, "Tenant payment status should support a near-due warning class.");
assert.match(app, /metric-status-critical/, "Tenant payment status should support an overdue or one-day critical class.");
assert.match(app, /tenant-dashboard-lower/, "Tenant dashboard should arrange actions and activity in a balanced lower grid.");
assert.doesNotMatch(app, /<h2>\$\{escapeHtml\(profile\.name\.split\(" "\)\[0\]\)\}, \$\{escapeHtml\(summary\.title\)\}<\/h2>/, "Tenant dashboard should not lead with the rent-review welcome sentence.");
assert.match(styles, /\.quick-grid\.tenant-action-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/, "Tenant quick actions should render as two-column mini cards.");
assert.match(styles, /\.quick-grid\.tenant-action-grid > \.quick-card\s*\{[\s\S]*min-height:\s*112px/, "Tenant quick action cards should be compact mini cards.");
assert.match(styles, /\.button\.secondary\s*\{[\s\S]*background:\s*var\(--primary-soft\)/, "Secondary buttons should use a visible gray background.");
assert.match(styles, /\.screen-focus-side > strong\.attention-count\s*\{[\s\S]*font-size:\s*clamp\(48px, 5\.6vw, 72px\)/, "Action Center attention count should make the number visually prominent.");
assert.match(styles, /\.action-group-waiting \.action-item-title,\s*\.action-group-closed \.action-item-title\s*\{[\s\S]*font-size:\s*clamp\(20px, 1\.85vw, 24px\)/, "Waiting and completed Action Center item titles should share the larger reusable title styling.");
assert.match(styles, /\.action-card-topline\s*\{[\s\S]*justify-content:\s*space-between/, "Action Center card header should reserve space for the dismiss control.");
assert.match(styles, /\.action-dismiss\s*\{[\s\S]*width:\s*30px;[\s\S]*height:\s*30px/, "Message dismiss button should use a compact icon-button size.");
assert.match(styles, /\.action-state-row\s*\{[\s\S]*display:\s*flex;[\s\S]*gap:\s*8px/, "Action Center status and unread labels should be aligned in a calmer top row.");
assert.match(styles, /\.action-meta-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(auto-fit, minmax\(170px, 1fr\)\)/, "Action Center metadata should use a responsive compact grid.");
assert.match(styles, /\.action-center-item\s*\{[\s\S]*gap:\s*var\(--space-4\);[\s\S]*padding:\s*var\(--space-5\)/, "Action Center cards should keep token-based internal spacing.");
assert.match(styles, /\.quick-grid\.tenant-action-grid > \.quick-card:hover\s*\{[\s\S]*background:\s*var\(--surface-soft\)/, "Tenant quick action hover state should resolve to a gray surface.");
assert.match(styles, /\.tenant-action-grid \.metric-icon\s*\{[\s\S]*width:\s*34px;[\s\S]*height:\s*34px;/, "Tenant quick action icons should be easier to scan.");
assert.match(styles, /\.quick-card::after\s*\{[\s\S]*display:\s*inline-flex;[\s\S]*align-items:\s*center;[\s\S]*justify-content:\s*center;/, "Tenant quick action Open affordance should center its label.");
assert.match(styles, /\.tenant-action-grid \.quick-card::after\s*\{[^}]*top:\s*14px;[^}]*right:\s*14px;/, "Tenant quick action Open affordance should align to the shared card inset.");
assert.match(styles, /\.tenant-action-grid \.quick-card:last-child:nth-child\(odd\)::after\s*\{[^}]*position:\s*absolute/, "Tenant quick action Open affordance should remain aligned across all cards.");
assert.doesNotMatch(styles, /\.tenant-action-grid \.quick-card:last-child:nth-child\(odd\)::after\s*\{[^}]*position:\s*static/, "Tenant quick action Open affordance should not use the misaligned static layout.");
assert.match(styles, /--apple-green:\s*#34c759/, "Apple green should be available for paid tenant states.");
assert.match(styles, /\.metric-card\.metric-status-paid\s*\{[\s\S]*border:\s*1px solid var\(--apple-green-border\);[\s\S]*background:\s*var\(--apple-green-soft\)/, "Paid payment metric should use the Apple-green paid treatment.");
assert.match(styles, /\.metric-card\.metric-status-warning\s*\{[\s\S]*border:\s*1px solid var\(--apple-orange-border\);[\s\S]*background:\s*var\(--apple-orange-soft\)/, "Near-due payment metric should use the Apple-orange warning treatment.");
assert.match(styles, /\.metric-card\.metric-status-critical\s*\{[\s\S]*border:\s*1px solid var\(--apple-red-border\);[\s\S]*background:\s*var\(--apple-red-soft\)/, "Overdue payment metric should use the Apple-red critical treatment.");
assert.match(styles, /\.tenant-summary-facts \.contract-warning/, "Contract health should include the orange warning state.");
assert.match(styles, /\.tenant-summary-facts \.contract-critical/, "Contract health should include the red critical state.");
assert.match(styles, /--space-4:\s*16px/, "Shared spacing tokens should be defined.");
assert.match(styles, /\.modal-header h2/, "Modal headers should use the shared typography scale.");
assert.match(styles, /\.notification-panel\s*\{[\s\S]*border-radius:\s*var\(--radius-lg\)/, "Notification panel should use the shared radius.");
assert.match(app, /class="empty-table-row"/, "Empty table rows should use a dedicated row class.");
assert.match(app, /class="empty-table-cell"/, "Empty table cells should remove default table padding.");
assert.match(styles, /\.table-empty-state\s*\{[\s\S]*min-height:\s*86px;[\s\S]*background:\s*var\(--surface\)/, "Empty table states should be compact and visually integrated with the table.");
assert.doesNotMatch(app, /Choose the closest category and priority\./, "Tenant maintenance should not show the removed guidance card copy.");
assert.match(app, /class="content-stack maintenance-stack"/, "Tenant maintenance should use the compact maintenance stack.");
assert.match(app, /class="form-grid maintenance-form"/, "Tenant maintenance issue form should use the compact form layout.");
assert.match(app, /class="layout-two maintenance-followup-grid"/, "Tenant maintenance complaint and suggestion flows should be grouped with their statuses.");
assert.match(app, /const complaintStatusSection = complaintRows\.length/, "Tenant complaint status card should render only after a complaint exists.");
assert.match(app, /const suggestionStatusSection = suggestionRows\.length/, "Tenant suggestion status card should render only after a suggestion exists.");
assert.doesNotMatch(app, /maintenance-flow-column/, "Tenant maintenance follow-up cards should use direct grid placement for equal row heights.");
assert.match(styles, /\.field select\s*\{[\s\S]*appearance:\s*none;[\s\S]*background-position:\s*right 13px center/, "Select dropdown arrows should use a custom inset arrow.");
assert.match(styles, /\.maintenance-form\s*\{[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/, "Tenant maintenance form should use a compact multi-column desktop grid.");
assert.match(styles, /\.maintenance-followup-grid\s*\{[\s\S]*align-items:\s*stretch/, "Tenant maintenance follow-up cards should stretch to equal heights by row.");
assert.match(styles, /\.suggestion-status-section\s*\{[\s\S]*grid-column:\s*2/, "Suggestion status card should align under the suggestion form when visible.");
assert.match(styles, /\.maintenance-status-section table\s*\{[\s\S]*min-width:\s*0;[\s\S]*table-layout:\s*fixed/, "Tenant maintenance status tables should fit within narrow status cards.");
assert.match(styles, /\.complaint-status-section th:nth-child\(4\),\s*\.complaint-status-section td:nth-child\(4\)\s*\{[\s\S]*width:\s*19%/, "Complaint action column should stay inside the status card.");
assert.match(styles, /\.maintenance-status-section \.table-empty-state\s*\{[\s\S]*min-height:\s*72px/, "Tenant maintenance status tables should use shorter empty states.");
assert.match(styles, /\.pull-reset-indicator\s*\{[\s\S]*position:\s*fixed/, "Pull-to-reset should render a lightweight fixed indicator.");
assert.match(styles, /\.main-area\.pull-reset-active > :not\(\.pull-reset-indicator\)/, "Pull-to-reset should shift only main content, not the sidebar.");
assert.match(index, /oneui2-20260615-46/g, "Index should load the latest cache-busted assets.");

console.log("Interaction audit checks passed.");
