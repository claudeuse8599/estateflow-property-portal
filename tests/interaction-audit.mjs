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
  "portfolio",
  "uiKit"
];

const expectedActions = [
  "add-tenant",
  "add-property",
  "action-center",
  "ask-ai-new-chat",
  "ask-ai-suggestion",
  "ack-complaint",
  "ack-suggestion",
  "approve-cash",
  "approve-cheque",
  "approve-contract",
  "approve-renewal",
  "cancel-complaint",
  "cancel-maintenance",
  "cancel-suggestion",
  "clear-ask-ai",
  "clear-notifications",
  "close-modal",
  "close-ask-ai",
  "confirm-action-center",
  "confirm-demo-payment",
  "confirm-reset-data",
  "dismiss-toast",
  "download-doc",
  "download-receipt",
  "download-receipts",
  "export-tenants",
  "logout",
  "maintenance-status",
  "notify",
  "open-ui-kit",
  "open-portfolio-map",
  "portfolio-back",
  "portfolio-map-pan",
  "portfolio-map-reset",
  "portfolio-map-zoom",
  "property-location-preset",
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
  "select-ask-ai-session",
  "select-property",
  "set-portfolio-map-filter",
  "template-late",
  "template-renewal",
  "toast-example",
  "toggle-ask-ai",
  "toggle-ask-ai-expanded",
  "toggle-theme",
  "view-all-receipts",
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
  assert.ok(app.includes(`id: "${page}"`) || page === "dashboard" || page === "uiKit", `Expected page is missing from navigation/data: ${page}`);
}

assert.match(app, /const utilityPages = \["uiKit"\];/, "UI Kit should remain available as a utility page.");
assert.doesNotMatch(app, /group: "System"/, "UI Kit should not appear as a sidebar navigation group.");
assert.match(app, /function availablePages\(role = state\.role\)/, "Utility pages should be included in the page guard.");
assert.match(app, /renderSidebarAskAI\(\)[\s\S]*class="sidebar-actions"[\s\S]*data-action="reset-data"[\s\S]*data-action="logout"[\s\S]*data-action="open-ui-kit"/, "Ask AI should sit above Reset data and Logout while preserving the UI Kit utility action.");
assert.match(app, /button class="button secondary" type="button" data-action="open-ui-kit"/, "UI Kit footer action should use the same secondary button style.");
assert.match(app, /askAI:\s*\{[\s\S]*isOpen:\s*false[\s\S]*isExpanded:\s*false[\s\S]*activationState:\s*"idle"/, "Ask AI should have its own sidebar state.");
assert.match(app, /function renderSidebarAskAI\(\)/, "Ask AI sidebar launcher should render from a dedicated helper.");
assert.match(app, /function renderAskAIPanel\(\)/, "Ask AI should render the full chat in a dedicated main panel helper.");
assert.match(app, /renderAskAIPanel\(\)/, "Ask AI panel should be mounted with the portal shell instead of inside the sidebar.");
const sidebarAskAIBlock = app.slice(app.indexOf("function renderSidebarAskAI()"), app.indexOf("function renderAskAIPanel()"));
assert.doesNotMatch(sidebarAskAIBlock, /id="ask-ai-panel"/, "Ask AI sidebar should only contain the launcher, not the full chat panel.");
assert.doesNotMatch(app, /function renderAskAIActivationOverlay\(\)/, "Ask AI should not render a dashboard-level activation overlay.");
assert.match(app, /function askAIIcon\(\)/, "Ask AI should use an original inline SVG icon.");
assert.match(app, /function mockAskAIResponse/, "Ask AI demo response should be isolated from UI rendering.");
assert.match(app, /async function askAI\(\{ message, role, pageContext, dashboardData, history, conversationHistory, chatId \}\)/, "Ask AI should expose one future API integration function with chat session context.");
assert.doesNotMatch(app, /fetch\(/, "Ask AI UI-only demo should not make network fetch calls.");
assert.match(app, /data-form="ask-ai"/, "Ask AI should include a submittable assistant form.");
assert.match(app, /data-ask-ai-input/, "Ask AI should expose a focused question input.");
assert.match(app, /data-action="toggle-ask-ai"/, "Ask AI sidebar entry should toggle the panel.");
assert.match(app, /data-action="close-ask-ai"/, "Ask AI panel should expose an accessible close action.");
assert.match(app, /data-action="toggle-ask-ai-expanded"/, "Ask AI panel should expose an expand and collapse action.");
assert.match(app, /data-action="ask-ai-new-chat"/, "Expanded Ask AI should expose a New Chat action.");
assert.match(app, /data-action="select-ask-ai-session"/, "Expanded Ask AI should allow previous sessions to be selected.");
assert.match(app, /data-ask-ai-session-search/, "Expanded Ask AI should include local chat search.");
assert.match(app, /askAISessionsStorageKey\(role = state\.role\)[\s\S]*askAI:\$\{askAIStorageRole\(role\)\}:sessions/, "Ask AI sessions should persist separately for tenant and management roles.");
assert.match(app, /function renderAskAIWorkspace/, "Ask AI expanded mode should render through a dedicated workspace helper.");
assert.match(app, /class="ask-ai-panel expanded ask-ai-workspace"/, "Ask AI expanded mode should use a full chat workspace surface.");
assert.match(app, /function isAskAIExpandedOverlayOpen/, "Ask AI expanded workspace should expose a single overlay-open guard.");
assert.match(app, /function syncAskAIScrollLock/, "Ask AI expanded workspace should lock page scrolling behind the overlay.");
assert.match(app, /askAIScrollLockY = window\.scrollY/, "Ask AI scroll lock should preserve the dashboard scroll position.");
assert.match(app, /document\.body\.style\.setProperty\("--ask-ai-scroll-y"/, "Ask AI scroll lock should freeze the body at the stored dashboard position.");
assert.match(app, /window\.scrollTo\(\{ top: askAIScrollLockY, left: 0 \}\)/, "Ask AI scroll lock should restore the dashboard scroll position when closed.");
assert.match(app, /function startNewAskAIChat/, "Ask AI should create local new chat sessions.");
assert.match(app, /function filteredAskAISessions/, "Ask AI should filter chat sessions locally.");
assert.match(app, /No chats found\./, "Ask AI search should include an empty result state.");
assert.match(app, /Where should we begin\?/, "Ask AI expanded empty state should use a centered new-chat prompt.");
assert.match(app, /state\.askAI\.isExpanded = !state\.askAI\.isExpanded/, "Ask AI expand action should toggle expanded state.");
assert.match(app, /class="ask-ai-panel \$\{expanded \? "expanded" : ""\}"/, "Ask AI panel should apply an expanded class from state.");
assert.match(app, /data-action="ask-ai-suggestion"/, "Ask AI prompt chips should be wired.");
assert.match(app, /data-action="clear-ask-ai"/, "Ask AI panel should expose a focused clear chat action.");
assert.match(app, /event\.key === "Escape" && state\.askAI\.isOpen/, "Escape should close Ask AI when open.");
assert.match(app, /event\.key === "Enter" && !event\.shiftKey/, "Ask AI input should submit on Enter while allowing Shift+Enter.");
assert.match(styles, /\.ask-ai-entry/, "Ask AI sidebar entry should have dedicated styling.");
assert.match(styles, /\.ask-ai-entry[\s\S]*linear-gradient\(135deg, #6d5dfc 0%, #7c3aed 45%, #2563eb 100%\)/, "Ask AI launcher should use the requested purple-blue gradient treatment.");
assert.match(styles, /\.ask-ai-panel\.expanded[\s\S]*inset: 16px;[\s\S]*width: auto;/, "Ask AI expanded mode should fill the viewport without becoming a dedicated page.");
assert.match(styles, /\.ask-ai-panel\.expanded\.ask-ai-workspace[\s\S]*grid-template-columns: minmax\(260px, 292px\) minmax\(0, 1fr\)/, "Ask AI expanded workspace should use a chat-sidebar plus main-chat layout.");
assert.match(styles, /html\.ask-ai-scroll-locked,[\s\S]*body\.ask-ai-scroll-locked[\s\S]*overflow: hidden;/, "Ask AI expanded workspace should prevent background page scrolling.");
assert.match(styles, /body\.ask-ai-scroll-locked[\s\S]*position: fixed;[\s\S]*top: var\(--ask-ai-scroll-y, 0\);/, "Ask AI expanded workspace should freeze the page in place.");
assert.match(styles, /\.ask-ai-panel\.expanded[\s\S]*overscroll-behavior: contain;/, "Ask AI expanded workspace should contain trackpad and wheel momentum.");
assert.match(styles, /\.ask-ai-workspace-sidebar[\s\S]*border-right: 1px solid var\(--line\)/, "Ask AI workspace should have an internal chat history sidebar.");
assert.match(styles, /\.ask-ai-menu-item[\s\S]*grid-template-columns: 22px minmax\(0, 1fr\)/, "Ask AI workspace actions should render as minimal icon rows.");
assert.match(styles, /\.ask-ai-session-item\s*\{[\s\S]*display: block;[\s\S]*min-height: 34px/, "Ask AI recents should use compact title-only rows.");
assert.match(styles, /\.ask-ai-workspace-main[\s\S]*grid-template-rows: auto minmax\(0, 1fr\) auto/, "Ask AI workspace should keep the header, scrollable messages, and composer in stable rows.");
assert.match(styles, /\.ask-ai-workspace-form[\s\S]*width: min\(calc\(100% - 48px\), 900px\)/, "Ask AI expanded composer should be spacious and centered.");
assert.match(styles, /\.ask-ai-panel-actions/, "Ask AI panel controls should be grouped in the panel header.");
assert.match(styles, /\.ask-ai-panel[\s\S]*right: 24px;[\s\S]*width: clamp\(420px, 34vw, 520px\);/, "Ask AI desktop panel should open as a roomy right-side drawer.");
assert.match(styles, /\.ask-ai-panel[\s\S]*grid-template-rows: auto auto auto minmax\(0, 1fr\) auto;/, "Ask AI panel should reserve a flexible message area.");
assert.match(styles, /\.ask-ai-clear/, "Ask AI clear chat action should have panel styling.");
assert.doesNotMatch(styles, /\.ask-ai-activation/, "Ask AI activation overlay styles should be removed.");
assert.doesNotMatch(styles, /@keyframes ask-ai-sweep/, "Ask AI activation sweep animation should be removed.");
assert.doesNotMatch(styles, /@keyframes ask-ai-sparkle/, "Ask AI activation sparkle animation should be removed.");
assert.match(styles, /prefers-reduced-motion: reduce[\s\S]*ask-ai/, "Ask AI animation should respect reduced-motion preferences.");

assert.match(app, /case "documentPreview"/, "Document preview modal should be handled.");
assert.match(app, /SUPPLEMENTAL_TENANT_RECORDS/, "Tenant records should have a seeded demo dataset beyond the original sample rows.");
assert.match(app, /function normalizeTenantRecord/, "Tenant records should normalize legacy and full record fields.");
assert.match(app, /function ensureSeedTenantRecords/, "Tenant records should restore seeded demo records through shared data normalization.");
assert.match(app, /\{ id: "tenants", label: "Tenant Management"/, "Manager navigation should label tenant records as Tenant Management.");
assert.match(app, /tenants:\s*\["Tenant Management", "Search profiles, leases, payments, and documents\."\]/, "Manager tenant page heading should use Tenant Management.");
assert.match(app, /eyebrow:\s*"Tenant management"[\s\S]*title:\s*"Manage tenant records"/, "Tenant management focus copy should match the renamed page.");
assert.match(app, /data-action="add-tenant"/, "Tenant Management should expose an Add Tenant Record action.");
assert.match(app, /case "tenantRecord"/, "Add Tenant Record should open through the shared modal system.");
assert.match(app, /data-form="tenant-record"/, "Tenant record modal should submit a real form.");
assert.match(app, /function validateTenantRecord/, "Tenant record form should validate required fields.");
assert.match(app, /state\.data\.manager\.tenants\.unshift\(record\)/, "Tenant record form should persist records into the shared manager tenant list.");
assert.match(app, /state\.data\.manager\.rentRows\.unshift/, "New tenant records should create connected rent tracking rows.");
assert.match(app, /state\.data\.manager\.documents\.unshift/, "New tenant records should create connected document records.");
assert.match(app, /showToast\("Tenant record added\."\)/, "Tenant record creation should finish with a success toast.");
assert.match(app, /data-action="export-tenants"/, "Tenant Management should expose an Excel export action.");
assert.match(app, /function exportTenantRecordsToExcel/, "Tenant Management should generate an Excel export.");
assert.match(app, /tenant-records-\$\{new Date\(\)\.toISOString\(\)\.slice\(0, 10\)\}\.xlsx/, "Tenant export should use a dated .xlsx filename.");
assert.match(app, /sheet name="Tenant Records"/, "Tenant export should include a Tenant Records worksheet.");
assert.match(app, /<autoFilter ref="A1:/, "Tenant export should include an auto filter.");
assert.match(app, /<pane ySplit="1"/, "Tenant export should freeze the header row.");
assert.match(app, /formatCode="&quot;AED&quot; #,##0"/, "Tenant export should format currency columns.");
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
assert.match(app, /function getRentDashboardState/, "Tenant dashboard should use a shared rent urgency and payment workflow helper.");
assert.match(app, /function normalizePaymentWorkflow/, "Tenant dashboard should separate payment workflow from rent urgency.");
assert.match(app, /Payment proof under review/, "Tenant dashboard should describe proof review clearly.");
assert.match(app, /Rent overdue - proof under review/, "Tenant dashboard should combine overdue urgency with proof review status.");
assert.match(app, /rent-overview-facts/, "Tenant dashboard should group rent urgency and payment workflow inside one overview.");
assert.match(app, /renderTenantRentOverview\(summary\)/, "Tenant dashboard should render the grouped rent overview in the main flow.");
assert.match(app, /function tenantDashboardQuickActions/, "Tenant dashboard quick actions should be generated from payment state.");
assert.match(app, /const ACTIVITY_FEED_PREVIEW_LIMIT = 6;/, "Tenant recent activity should keep a compact default preview.");
assert.match(app, /const ACTIVITY_STORE_LIMIT = 40;/, "Tenant activity history should keep more records than the dashboard preview.");
assert.match(app, /function sortActivityItems/, "Tenant activity should sort by event time instead of fixed insertion copy.");
assert.match(app, /state\.data\.tenant\.activities = \[activity, \.\.\.state\.data\.tenant\.activities\]\.slice\(0, ACTIVITY_STORE_LIMIT\)/, "Tenant activity recording should keep repeated requests and only cap the backing history.");
assert.match(app, /data-modal="activityHistory"/, "Tenant dashboard should open full activity history in the shared modal instead of expanding inline.");
assert.match(app, /case "activityHistory"/, "Tenant activity history should render through the shared modal system.");
assert.match(app, /function activityHistoryModal/, "Tenant activity history should have a dedicated modal helper.");
assert.match(app, /className:\s*"activity-history-modal"/, "Tenant activity history should use a scoped modal class for fixed-height behavior.");
assert.match(app, /data-modal="rentHistory"/, "Tenant rent history should open full payment history in the shared modal instead of expanding inline.");
assert.match(app, /case "rentHistory"/, "Tenant rent history should render through the shared modal system.");
assert.match(app, /function rentHistoryModal/, "Tenant rent history should have a dedicated modal helper.");
assert.match(app, /className:\s*"activity-history-modal payment-history-modal"/, "Tenant rent history should reuse the fixed-height expanded-list modal shell.");
assert.match(app, /data-action="download-receipts"/, "Full tenant payment history should expose a Download receipts action.");
assert.match(app, /function tenantReceiptDownloadRows/, "Bulk receipt downloads should collect paid receipt rows from rent history and receipt records.");
assert.match(app, /function downloadTenantReceipts/, "Bulk receipt downloads should generate a tenant receipt export.");
assert.match(app, /tenant-receipts-\$\{new Date\(\)\.toISOString\(\)\.slice\(0, 10\)\}\.csv/, "Bulk receipt export should use a dated CSV filename.");
assert.match(app, /const modalClassName = \["modal", modal\.large \? "large" : "", modal\.className \|\| ""\]/, "Shared modal renderer should support scoped modal classes.");
assert.match(app, /visibleActivityItems = activityItems\.slice\(0, ACTIVITY_FEED_PREVIEW_LIMIT\)/, "Tenant dashboard should keep the recent activity preview capped at six items.");
assert.doesNotMatch(app, /data-action="toggle-tenant-activity"/, "Tenant activity history should not expand the dashboard height inline.");
assert.doesNotMatch(app, /data-action="toggle-rent-history"/, "Tenant rent history should not expand the dashboard height inline.");
assert.match(styles, /\.activity-history-list\s*\{[\s\S]*max-height:\s*min\(58vh, 560px\);[\s\S]*overflow-y:\s*auto/, "Tenant activity history modal should scroll internally.");
assert.match(styles, /\.modal\.activity-history-modal\s*\{[\s\S]*grid-template-rows:\s*auto minmax\(0, 1fr\) auto;[\s\S]*overflow:\s*hidden;/, "Tenant activity history modal shell should stay fixed while only the list scrolls.");
assert.match(styles, /\.modal\.activity-history-modal \.activity-history-list\s*\{[\s\S]*padding-right:\s*20px;[\s\S]*scrollbar-gutter:\s*stable;/, "Tenant activity history scrollbar should not overlap timestamps.");
assert.match(styles, /\.modal\.activity-history-modal \.payment-history-panel \.table-wrap\s*\{[\s\S]*overflow:\s*auto;[\s\S]*scrollbar-gutter:\s*stable;/, "Tenant payment history modal table should scroll internally without overlapping content.");
assert.match(app, /function showDuplicateRequestToast/, "Duplicate request feedback should be centralized.");
assert.match(app, /function isResolvedRepeatableRequest\(status\)/, "Repeatable tenant request guards should know when a request has reached a final decision.");
assert.match(app, /\["approved", "rejected", "completed", "canceled", "cancelled", "resolved", "reviewed"\]\.includes\(normalizeRequestText\(status\)\)/, "Approved, rejected, completed, and canceled requests should not permanently block a new tenant request.");
assert.match(app, /function isActiveRepeatableRequest\(row\)[\s\S]*!isResolvedRepeatableRequest\(row\?\.status\)/, "Duplicate guards should only block active repeatable requests.");
assert.match(app, /function renewalRequestAlreadySubmitted/, "Tenant renewal should remember an existing submitted request.");
assert.match(app, /renewalRequestAlreadySubmitted\(profile = tenantProfile\(\)\)[\s\S]*isActiveRepeatableRequest\(request\)/, "Tenant renewal should allow a fresh request after approval or rejection.");
assert.match(app, /const existing = state\.data\.manager\.renewals\.find\(\(row\) =>[\s\S]*isActiveRepeatableRequest\(row\)/, "Renewal resubmission should create a new manager request after a closed renewal decision.");
assert.match(app, /function contractRequestAlreadySubmitted/, "Tenant contract actions should prevent repeat submissions by request type.");
assert.match(app, /contractRequestAlreadySubmitted\(requestType\)[\s\S]*row\.requestType === requestType &&[\s\S]*isActiveRepeatableRequest\(row\)/, "Tenant contract actions should allow another request after the last one is closed.");
assert.match(app, /function maintenanceRequestAlreadySubmitted/, "Tenant maintenance should prevent repeat submissions of the same issue.");
assert.match(app, /maintenanceRequestAlreadySubmitted\(category, description\)[\s\S]*normalizeRequestText\(row\.description\) === descriptionKey &&[\s\S]*isActiveRepeatableRequest\(row\)/, "Tenant maintenance should only block duplicate open issues.");
assert.match(app, /function complaintAlreadySubmitted/, "Tenant complaints should prevent repeat submissions of the same text.");
assert.match(app, /complaintAlreadySubmitted\(description\)[\s\S]*normalizeRequestText\(row\.description\) === descriptionKey &&[\s\S]*isActiveRepeatableRequest\(row\)/, "Tenant complaints should allow a new matching complaint after the previous one is resolved, rejected, or canceled.");
assert.match(app, /function suggestionAlreadySubmitted/, "Tenant suggestions should prevent repeat submissions of the same text.");
assert.match(app, /suggestionAlreadySubmitted\(description\)[\s\S]*normalizeRequestText\(row\.description\) === descriptionKey &&[\s\S]*isActiveRepeatableRequest\(row\)/, "Tenant suggestions should allow a new matching suggestion after the previous one is reviewed, rejected, or canceled.");
assert.match(app, /function latestTenantReceipt/, "Tenant receipt preview should resolve the most recent available receipt.");
assert.match(app, /case "receiptPreview"/, "Tenant receipt preview should render through the shared modal system.");
assert.match(app, /modal:\s*"receiptPreview"/, "Paid rent overview should open the receipt preview modal.");
assert.match(app, /data-action="download-receipt"/, "Receipt preview should expose a download receipt action.");
assert.match(app, /function rentReceiptCell\(row\)[\s\S]*data-action="download-receipt"/, "Payment history receipt cells should use the receipt-specific download action.");
assert.match(app, /data-action="view-all-receipts"/, "Receipt preview should expose a view all receipts action.");
assert.match(app, /if \(action === "view-all-receipts"\) \{\s+state\.modal = \{ type: "rentHistory" \};/, "View all receipts should open the fixed-height payment history modal.");
assert.match(app, /if \(action === "download-receipts"\) \{[\s\S]*downloadTenantReceipts\(\)[\s\S]*Receipts download started\./, "Download receipts action should trigger the bulk receipt export with feedback.");
assert.match(styles, /\.receipt-preview-card/, "Receipt preview should have dedicated modal styling.");
assert.doesNotMatch(app, /id: "payments"/, "Tenant Payment Proof should be removed from navigation.");
assert.doesNotMatch(app, /case "payments"/, "Tenant Payment Proof route should be removed.");
assert.doesNotMatch(app, /function renderTenantPayments/, "Tenant Payment Proof page should be removed.");
assert.doesNotMatch(app, /data-page="payments"/, "No UI should route to the removed tenant Payment Proof page.");
assert.doesNotMatch(app, /View proof/, "Tenant dashboard should not link to the removed proof page.");
assert.doesNotMatch(app, /<strong>Submit Payment Proof<\/strong>/, "Tenant dashboard should not hard-code Submit Payment Proof when proof may already be under review.");
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
assert.match(app, /label:\s*"View record", page: sourcePage, variant:\s*"ghost"/, "Management Action Center items should offer a source-record review path before direct decisions.");
assert.match(app, /function actionCenterCommandNeedsConfirmation/, "Final management Action Center decisions should use a reusable confirmation rule.");
assert.match(app, /case "actionConfirm"/, "Action Center confirmations should render in the shared modal system.");
assert.match(app, /data-action="confirm-action-center"/, "Action Center confirmation modal should wire a confirm action.");
assert.match(app, /state\.modal = \{ type: "actionConfirm", id: item\.id, command: actionButton\.dataset\.command \}/, "Final Action Center decisions should open a confirmation modal before applying.");
assert.match(app, /data-action="reset-data"/, "Demo data reset should be available from the portal shell.");
assert.match(app, /state\.data = normalizeData\(cloneData\(\)\)/, "Demo data reset should restore normalized seed data.");
assert.match(app, /case "resetData"/, "Data reset should open a confirmation modal.");
assert.match(app, /data-action="confirm-reset-data"/, "Data reset confirmation should be wired.");
assert.match(app, /pullToReset:\s*\{/, "Portal should track pull-to-reset gesture state.");
assert.match(app, /const PULL_RESET_TOP_TOLERANCE = 2;/, "Pull-to-reset should use a tight top tolerance.");
assert.match(app, /const PULL_RESET_START_DISTANCE = 80;/, "Pull-to-reset should require a deliberate pull before showing progress.");
assert.match(app, /const PULL_RESET_THRESHOLD = 280;/, "Pull-to-reset should use a stronger release threshold to avoid Mac momentum triggers.");
assert.match(app, /const PULL_RESET_WHEEL_IDLE_DELAY = 1200;/, "Trackpad pull-to-reset should keep scroll sessions active long enough to reject momentum from lower on the page.");
assert.match(app, /const PULL_RESET_TOP_STABILITY_MS = 1200;/, "Pull-to-reset should require the page to be stable at the top.");
assert.match(app, /const PULL_RESET_WHEEL_STEP_MAX = 10;/, "Trackpad pull-to-reset should accumulate cautiously per wheel event.");
assert.match(app, /const PULL_RESET_WHEEL_RESISTANCE = 0\.18;/, "Trackpad pull-to-reset should apply resistance against momentum scrolling.");
assert.match(app, /gestureStartedAtTop:\s*false/, "Pull-to-reset should track whether the gesture started at the top.");
assert.match(app, /isEligibleForPullReset:\s*false/, "Pull-to-reset should track eligibility separately from visual pulling.");
assert.match(app, /wheelSessionStartedAtTop:\s*false/, "Pull-to-reset should track whether a wheel session began at the top.");
assert.match(app, /lastNonTopScrollTime:\s*0/, "Pull-to-reset should remember recent non-top scrolling.");
assert.match(app, /function openResetDataModal\(\)/, "Reset modal opening should remain available for the manual Reset data button.");
assert.match(app, /function resetDemoData/, "Demo data reset should use one shared reset helper.");
assert.match(app, /if \(action === "reset-data"\) \{\s+openResetDataModal\(\);/, "Reset Data button should use the shared reset modal helper.");
assert.match(app, /if \(action === "confirm-reset-data"\) \{\s+resetDemoData\(\);/, "Reset confirmation should use the shared reset helper.");
assert.match(app, /window\.setTimeout\(resetDemoData, 180\)/, "Pull-to-reset should reset directly after a deliberate pull.");
assert.doesNotMatch(app, /openResetDataModal\(\{ fromPull: true \}\)/, "Pull-to-reset should not open a confirmation modal.");
assert.match(app, /function canUsePullToReset/, "Pull-to-reset should guard when the gesture is allowed.");
assert.match(app, /state\.modal \|\| state\.notificationPanelOpen/, "Pull-to-reset should not start while modal or notification UI is active.");
assert.match(app, /isAtPullResetStart\(\)/, "Pull-to-reset should only activate at the top of the page.");
assert.match(app, /now - pull\.lastNonTopScrollTime < PULL_RESET_TOP_STABILITY_MS/, "Pull-to-reset should block momentum immediately after non-top scrolling.");
assert.match(app, /pull\.wheelSessionActive && !pull\.wheelSessionStartedAtTop/, "Pull-to-reset should reject wheel sessions that started away from the top.");
assert.match(app, /isPullResetBlockedTarget\(event\.target\)/, "Pull-to-reset should avoid forms, buttons, tables, and nested controls.");
assert.match(app, /function handlePullResetScroll\(\)[\s\S]*lastNonTopScrollTime = Date\.now\(\)/, "Pull-to-reset should record ordinary scroll movement away from the top.");
assert.match(app, /!isAtPullResetStart\(\) \|\| now - pull\.lastNonTopScrollTime < PULL_RESET_TOP_STABILITY_MS/, "Pull-to-reset should re-check top eligibility before opening reset confirmation.");
assert.match(app, /pull\.wheelSessionStartedAtTop = atTop/, "Wheel pull-to-reset should record the starting top state for the full session.");
assert.match(app, /if \(!pull\.wheelSessionStartedAtTop\)/, "Wheel pull-to-reset should block sessions that did not start at the top.");
assert.match(app, /state\.pullToReset\.wheelSessionActive = false/, "Wheel pull-to-reset should reset session state after idle.");
assert.match(app, /window\.addEventListener\("touchstart", handlePullResetTouchStart, \{ passive: true \}\)/, "Pull-to-reset should support touch start.");
assert.match(app, /window\.addEventListener\("touchmove", handlePullResetTouchMove, \{ passive: false \}\)/, "Pull-to-reset should support cancellable touch movement.");
assert.match(app, /window\.addEventListener\("scroll", handlePullResetScroll, \{ passive: true \}\)/, "Pull-to-reset should watch real page scroll position.");
assert.match(app, /window\.addEventListener\("wheel", handlePullResetWheel, \{ passive: false \}\)/, "Pull-to-reset should support cautious trackpad overscroll.");
assert.match(app, /data-action="request-contract"/, "Tenant contract cancellation and amendment requests should be available.");
assert.match(app, /class="section-actions contract-action-row"/, "Tenant renewal contract actions should use a dedicated button row.");
assert.match(app, /class="section-actions contract-action-row"[\s\S]*data-action="request-renewal"[\s\S]*data-action="view-doc"/, "Request Renewal should appear before View Contract PDF.");
assert.match(app, /button class="button danger contract-action-button"[^>]*Contract Cancellation/, "Cancel contract should render as a visible button.");
assert.match(app, /button class="button secondary contract-action-button"[^>]*Contract Amendment/, "Contract amendment should render as a visible button.");
assert.doesNotMatch(app, />Request Change</, "Duplicate Request Change action should be removed from the Renewal page.");
assert.match(app, /function latestTenantContractRequest/, "Tenant renewal timeline should use the latest request data.");
assert.match(app, /function tenantContractRequestHistory/, "Tenant renewal should merge renewal, cancellation, and amendment records into one contract request history.");
assert.match(app, /state\.data\.manager\.renewals[\s\S]*state\.data\.tenant\.contractRequests/, "Contract request history should include both renewal rows and tenant contract action rows.");
assert.match(app, /CONTRACT_REQUEST_PREVIEW_LIMIT/, "Tenant contract request history should cap the inline preview.");
assert.match(app, /visibleContractHistory = contractHistory\.slice\(0, CONTRACT_REQUEST_PREVIEW_LIMIT\)/, "Tenant renewal page should only show a compact contract request preview inline.");
assert.match(app, /data-modal="contractHistory"/, "Tenant renewal page should open full contract request history in the shared modal.");
assert.match(app, /function contractHistoryModal/, "Full contract request history should render through a dedicated modal helper.");
assert.match(app, /className:\s*"activity-history-modal payment-history-modal contract-history-modal"/, "Contract request history modal should reuse the fixed-height expanded-list modal shell.");
assert.match(app, /case "contractHistory"/, "Contract request history should render through the shared modal system.");
assert.match(app, /function requestTimelineStatuses/, "Tenant renewal timeline badges should derive from request status.");
assert.match(app, /function contractRequestSummaryStatus/, "Tenant renewal focus card should use request-aware status labels.");
assert.match(app, /"Contract Amendment": "Amendment Requested"/, "Amendment requests should update the tenant renewal focus status.");
assert.match(app, /"Contract Cancellation": "Cancellation Requested"/, "Cancellation requests should update the tenant renewal focus status.");
assert.match(app, /value: contractSummaryStatus/, "Tenant renewal focus card should reflect the latest contract request.");
assert.match(app, /"Contract Cancellation": "Cancel Contract"/, "Cancel contract timeline should show a request-specific submitted label.");
assert.match(app, /"Contract Amendment": "Amendment"/, "Amendment timeline should show a request-specific submitted label.");
assert.match(app, /Request renewal to view the timeline\./, "Tenant renewal timeline should show a clear empty state before request.");
assert.match(app, /function ensureActionFromContractRequest/, "Contract requests should create Action Center items.");
assert.match(app, /data-form="tenant-complaint"/, "Tenant complaints should be submittable.");
assert.match(app, /data-form="tenant-suggestion"/, "Tenant suggestions should be submittable.");
assert.match(app, /data-action="cancel-maintenance"/, "Tenant should be able to cancel active maintenance requests.");
assert.match(app, /data-action="cancel-complaint"/, "Tenant should be able to cancel complaints.");
assert.match(app, /function ensureActionFromComplaint/, "Complaints should create Action Center items.");
assert.match(app, /function ensureActionFromSuggestion/, "Suggestions should create Action Center items.");
assert.match(app, /state\.role === "tenant"\s+\?\s+state\.data\.actions\.filter\(isTenantAction\)/, "Tenant Action Center should only show tenant-owned actions.");
assert.match(app, /function renderActionCenterGroups/, "Action Center should group actionable items by workflow state.");
assert.match(app, /data-page="\$\{escapeHtml\(item\.page\)\}" aria-label="Open notification for/, "Notification items should route to their relevant rent or notification page.");
assert.doesNotMatch(app, /Open Rent/, "Notification panel should not show a separate Open Rent footer button.");
assert.doesNotMatch(app, /notification-panel-footer/, "Notification panel should not render a separate footer CTA.");
assert.match(app, /function brand\(options = \{\}\)/, "Brand renderer should support authenticated dashboard navigation.");
assert.match(app, /class="brand brand-button"[\s\S]*data-page="dashboard"[\s\S]*aria-label="Go to dashboard"/, "Sidebar EstateFlow brand should route back to the dashboard.");
assert.match(app, /\$\{brand\(\{ clickable: true \}\)\}/, "Authenticated sidebar should render the clickable brand home shortcut.");
assert.match(app, /const lineIcon = \(body\) =>/, "Dashboard SVG icons should share one rounded line icon primitive.");
assert.match(app, /tool:\s*lineIcon\('<rect x="3\.5" y="8\.25" width="17" height="10\.5" rx="2\.5"\/>/, "Maintenance should use the modern toolbox/work-order icon.");
assert.doesNotMatch(app, /M14\.5 6\.5a4 4 0 0 0 5 5L11 20l-5-5/, "Maintenance should not use the old angled wrench icon.");
assert.match(app, /building:\s*'<svg width="16" height="16"/, "EstateFlow/property mark should remain outside the broad icon redraw.");
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
assert.match(app, /function getManagementQueueSummary\(\)/, "Management dashboard should use a shared queue summary helper.");
assert.match(app, /function getManagementDashboardSummary\(\)/, "Management dashboard should use one shared summary helper for KPI, portfolio, document, and finance data.");
assert.match(app, /occupiedUnits = properties\.reduce/, "Management portfolio occupancy should be derived from property data.");
assert.match(app, /const UAE_MAP_BOUNDS = \{/, "Portfolio map should project real UAE coordinates into a bounded map view.");
assert.match(app, /PROPERTY_LOCATION_PRESETS/, "Add Property should offer UAE location presets for coordinate entry.");
assert.match(app, /function normalizePropertyRecord/, "Portfolio properties should normalize legacy and rich property records.");
assert.match(app, /function getPortfolioSummary/, "Portfolio counts and asset totals should come from a shared data helper.");
assert.match(app, /function renderPortfolioMapView/, "Portfolio should render a dedicated interactive map view.");
assert.match(app, /function renderPortfolioMarker/, "Portfolio map should render clickable property markers.");
assert.match(index, /leaflet@1\.9\.4\/dist\/leaflet\.css/, "Portfolio map should load Leaflet CSS.");
assert.match(index, /leaflet@1\.9\.4\/dist\/leaflet\.js/, "Portfolio map should load Leaflet JS.");
assert.match(app, /const PORTFOLIO_MAP_TILE_URL = "https:\/\/tile\.openstreetmap\.org\/\{z\}\/\{x\}\/\{y\}\.png"/, "Portfolio map should use the official OpenStreetMap tile URL.");
assert.match(app, /function initializePortfolioLeafletMap\(\)/, "Portfolio map should initialize a real Leaflet map after render.");
assert.match(app, /id="portfolioPropertyMap"/, "Portfolio should render an embedded map container.");
assert.match(app, /renderPortfolioMapCard\(\)/, "Portfolio should add the map card under the property table.");
assert.match(app, /data-action="open-portfolio-map"/, "Portfolio summary cards should open the map view.");
assert.match(app, /data-action="set-portfolio-map-filter"/, "Portfolio map should include working status filters.");
assert.match(app, /data-action="portfolio-map-zoom"/, "Portfolio map should expose zoom controls.");
assert.match(app, /data-action="portfolio-map-pan"/, "Portfolio map should expose pan controls.");
assert.match(app, /data-action="select-property"/, "Portfolio markers and rows should select property details.");
assert.match(app, /data-action="add-property"/, "Portfolio should expose a working Add Property action.");
assert.match(app, /case "propertyRecord"/, "Add Property should open through the shared modal system.");
assert.match(app, /data-form="property-record"/, "Add Property modal should submit a real form.");
assert.match(app, /function validatePropertyRecord/, "Add Property should validate required and numeric fields.");
assert.match(app, /state\.data\.manager\.properties\.unshift\(record\)/, "Add Property should persist into the shared manager property list.");
assert.match(app, /showToast\("Property added\."\)/, "Add Property should finish with a success toast.");
assert.doesNotMatch(app, /Add Extra Details/, "Property map should not expose the removed Add Extra Details workflow.");
assert.doesNotMatch(app, /case "propertyExtraDetails"/, "Removed property details workflow should not remain in the modal router.");
assert.doesNotMatch(app, /data-form="property-extra-details"/, "Removed property details workflow should not leave a dead form.");
assert.match(styles, /\.portfolio-map-shell \{[\s\S]*isolation: isolate;/, "Portfolio map should isolate Leaflet controls below modal overlays.");
assert.match(styles, /\.portfolio-property-row \{[\s\S]*grid-template-columns: minmax\(0, 1fr\) 132px;/, "Portfolio property status rows should reserve a fixed status column.");
assert.match(styles, /\.portfolio-property-row \.status,[\s\S]*\.portfolio-status-cell \.status \{[\s\S]*grid-template-columns: 7px minmax\(0, 1fr\);/, "Portfolio status tags should use a fixed dot column so dots align.");
assert.match(app, /rentFollowUps = data\.rentRows\.filter\(\(row\) => row\.status !== "Paid"\)/, "Management rent follow-ups should exclude paid tenants.");
assert.match(app, /totalActions:\s*attentionItems\.length/, "Management dashboard headline count should come from the Action Center attention queue.");
assert.match(app, /allCategories,\s*[\s\S]*categories:\s*activeCategories,\s*[\s\S]*actionMetricCards,/, "Management queue summary should expose stable category metrics and active priority categories.");
assert.match(app, /categories:\s*activeCategories/, "Management queue summary should keep active categories for the priority queue.");
assert.match(app, /priorityActions:\s*activeCategories\.slice\(0, 4\)/, "Management dashboard priority rows should use the same shared category data.");
assert.match(app, /function renderManagerActionCenterMetrics\(\)/, "Management Action Center should render category-specific action metric cards.");
assert.match(app, /label:\s*"Payment Reviews"[\s\S]*label:\s*"Maintenance Reviews"[\s\S]*label:\s*"Renewal Reviews"[\s\S]*label:\s*"Other Follow-ups"/, "Management Action Center should replace generic summary cards with action category cards.");
assert.match(app, /function renderTenantActionCenterMetrics\(\{ actionItems, unreadItems, openItems, allItems \}\)/, "Tenant Action Center should keep the existing personal action summary cards.");
assert.doesNotMatch(app, /renderManagementQueueChips\(queueSummary\)/, "Management dashboard should not render duplicate category chips under the actions-in-queue headline.");
assert.match(app, /renderManagementPriorityQueue\(queueSummary\)/, "Management dashboard should render one priority queue from shared data.");
assert.match(app, /data-page="\$\{escapeHtml\(action\.page\)\}"/, "Management priority rows should navigate to the category page.");
assert.match(app, /<h3>Actions that need priority<\/h3>/, "Management priority queue heading should use clearer priority-focused copy.");
assert.match(app, /function renderDashboardSnapshotCard\(label, copy, items, className = ""\)/, "Management dashboard should have a reusable one-card snapshot section.");
assert.match(app, /renderDashboardSnapshotCard\("Operations Snapshot", "Key portfolio, rent, and request numbers for today\."/ , "Management KPI row should be consolidated into one Operations Snapshot card.");
assert.match(app, /renderDashboardSnapshotCard\("Portfolio and Documents", "Unit availability and pending document checks\."/ , "Management secondary strip should be consolidated into one Portfolio and Documents card.");
assert.match(app, /dashboard-section-label">Tenant Management/, "Latest tenant updates should be labeled as tenant management.");
assert.match(app, /dashboard-section-label">Rent Management/, "Rent follow-ups should be labeled as rent management.");
assert.match(app, /dashboard-section-label">Operations Queue/, "Maintenance status should be labeled as operations queue.");
assert.match(app, /dashboard-section-label">Finance/, "Financial snapshot should be labeled as finance.");
assert.doesNotMatch(app, /metricCard\("Total Tenants", "156"/, "Management tenant KPI should not use the old hard-coded tenant total.");
assert.match(app, /targetPage && !options\.hideActionLabel/, "Clickable metric cards should support hidden action labels when the whole card is the action.");
assert.match(app, /metricCard\("Rental income", summary\.finance\.rentalIncome, `\$\{summary\.finance\.timeframe\} · collected and due`, "chart", "financial", \{ hideActionLabel: true \}\)/, "Financial Snapshot cards should click through to finance without repeated Open finance pills.");
assert.doesNotMatch(app, /label: "Open finance", icon: "chart", page: "financial"/, "Financial Snapshot should not keep a separate Open finance button when each card routes there.");
assert.doesNotMatch(app, /Work that needs a response/, "Management dashboard should not repeat the old workload section heading.");
assert.doesNotMatch(app, /Next company actions/, "Management dashboard should not keep a separate duplicate action list.");
assert.doesNotMatch(app, /Payments awaiting review/, "Management dashboard should remove the repeated payment count card copy.");
assert.doesNotMatch(app, /"June snapshot"/, "Operations Today should not show the non-actionable June snapshot tag.");
assert.match(app, /function renderFocusMetaItem\(item\)/, "Screen focus metadata should support actionable route chips.");
assert.match(app, /actionStatus: "All"/, "Action Center should include a status filter.");
assert.match(app, /actionType: "All"/, "Action Center should include a type filter.");
assert.match(app, /actionSort: "Newest"/, "Action Center should include newest/oldest sorting.");
assert.match(app, /const pendingPayments = countItemsByType\(attentionItems, \(item\) => item\.type === "Rent Payment" \|\| item\.type === "Cash Payment"\);/, "Management queue payment counts should use the Action Center attention queue as their source of truth.");
assert.match(app, /const openMaintenance = countItemsByType\(attentionItems, \(item\) => item\.type === "Maintenance"\);/, "Management queue maintenance counts should use the Action Center attention queue as their source of truth.");
assert.match(app, /const pendingRenewals = countItemsByType\(attentionItems, \(item\) => item\.type\.startsWith\("Contract"\)\);/, "Management queue renewal counts should use the Action Center attention queue as their source of truth.");
assert.doesNotMatch(app, /data-form="tenant-payment"/, "Tenant payment proof form should be removed.");
assert.match(app, /setActionStatus\(action, "New", "tenant", "Maintenance request submitted"/, "Tenant maintenance requests should create a persisted action update.");
assert.match(app, /setActionStatus\(item, "Approved", "manager", "Payment approved"/, "Company payment approvals should update Action Center status.");
assert.match(app, /setActionStatus\(item, "Acknowledged", "manager", "Request acknowledged"/, "Company maintenance acknowledgements should update Action Center status.");
assert.match(app, /setActionStatus\(item, "Completed", "manager", "Request resolved"/, "Company maintenance resolution should update Action Center status.");
assert.match(app, /setActionStatus\(item, "Approved", "manager", "Renewal approved"/, "Company renewal approvals should update Action Center status.");
assert.match(app, /if \(command === "request-payment-info"\) \{[\s\S]*source\.status = "Info Requested";[\s\S]*syncTenantPaymentStatus\(source\);[\s\S]*setActionStatus\(item, "Info Requested"/, "Action Center payment info requests should keep source and Action Center statuses aligned.");
assert.match(app, /if \(command === "request-renewal-info"\) \{[\s\S]*source\.status = "Info Requested";[\s\S]*syncTenantRenewalStatus\(source\);[\s\S]*setActionStatus\(item, "Info Requested"/, "Action Center renewal info requests should keep source and Action Center statuses aligned.");
assert.match(app, /saveData\(\);\s+showToast\("Payment approved\."\);\s+render\(\);/, "Action Center payment approval should save and finish the flow.");
assert.match(app, /window\.addEventListener\("storage"/, "Action Center should refresh from shared persisted data.");
assert.match(app, /notificationPanelOpen/, "Notification button should manage an open panel state.");
assert.match(app, /function renderNotificationPanel\(\)/, "Notification panel should render from the topbar.");
assert.match(app, /aria-expanded="\$\{state\.notificationPanelOpen\}"/, "Notification button should expose expanded state.");
assert.doesNotMatch(app, /showToast\("3 notifications\."\)/, "Notification button should not be toast-only.");
assert.match(app, /\.filter\(\(toast\) => toast\.textContent === message\)/, "Repeated toast messages should be deduplicated.");
assert.match(app, /notificationClearedIds:\s*\[\]/, "Notification inbox should track cleared rent reminders.");
assert.match(app, /function isRentNotification\(row\)/, "Notification panel should still identify explicit rent and payment notices.");
assert.match(app, /function tenantActionNotificationItems/, "Tenant notification bell should include unread manager-updated action items.");
assert.match(app, /item\.updatedBy === "manager"[\s\S]*!item\.readBy\?\.includes\("tenant"\)/, "Tenant bell action notifications should only show unread manager updates.");
assert.match(app, /if \(item\.type === "Contract Renewal"\) return `Renewal \$\{status\}`/, "Renewal decisions should render as tenant notification titles.");
assert.match(app, /function notificationCountForPage\(page\)/, "Navigation should be able to count unread notifications by destination page.");
assert.match(app, /notificationItems\(\)\.filter\(\(item\) => item\.page === page\)\.length/, "Page notification badges should share the notification panel source of truth.");
assert.match(app, /notificationCount = notificationCountForPage\(item\.id\)/, "Navigation badges should use per-page notification counts outside Action Center.");
assert.match(app, /<span class="nav-notification-dot" aria-hidden="true"><\/span>/, "Panel-level notifications should render as a dot instead of a numeric badge.");
assert.doesNotMatch(app, /nav-count nav-count-notification/, "Panel-level notifications should not reuse the numbered Action Center count pill.");
assert.match(app, /const countLabel = `\$\{items\.length\} \$\{items\.length === 1 \? "notification" : "notifications"\}`/, "Notification count copy should cover rent notices and workflow updates.");
assert.match(app, /class="notification-item \$\{item\.recent \? "recent" : ""\}"/, "Manager-updated workflow notifications should get the recent notification treatment.");
assert.match(app, /function restoreClearedNotifications/, "New manager updates should be able to re-surface cleared bell notifications.");
assert.match(app, /if \(byRole === "manager"\) restoreClearedNotifications\(item\.id\)/, "Manager decisions should restore the bell dot for newly updated items.");
assert.match(app, /data-action="clear-notifications"/, "Notification panel should expose a clear all action.");
assert.match(app, /state\.notificationClearedIds = \[\.\.\.new Set/, "Clear all should remove current bell notifications and dot state.");
assert.doesNotMatch(app, /recordToastNotification/, "Toasts should stay separate from the notification panel.");
assert.doesNotMatch(app, /uiNotifications/, "Portal toast notifications should not feed the notification panel.");
assert.match(app, /root\.prepend\(node\)/, "Newest toast should appear at the top of the toast stack.");
assert.match(styles, /#toast-root\s*\{[\s\S]*bottom:\s*22px;[\s\S]*align-content:\s*end;[\s\S]*width:\s*min\(420px, calc\(100vw - 44px\)\)/, "Toast stack should sit at the bottom right with a larger card width.");
assert.match(styles, /@keyframes toast-slide-in[\s\S]*translateX\(calc\(100% \+ 24px\)\)/, "Toasts should slide in from the right edge.");
assert.match(styles, /\.notification-item\s*\{[\s\S]*border:\s*var\(--border-subtle\);[\s\S]*background:\s*var\(--surface-soft\);/, "Notification panel items should render as mini cards.");
assert.match(styles, /\.nav-notification-dot\s*\{[\s\S]*width:\s*8px;[\s\S]*height:\s*8px;[\s\S]*background:\s*var\(--notice-dot\);/, "Page-level notification indicators should render as small dots using the existing notification token.");
assert.doesNotMatch(styles, /\.toast\s*\{[\s\S]*border-left-width:\s*3px;/, "Toast cards should not use a colored left border.");
assert.doesNotMatch(app, /<div class="profile-badge">/, "Topbar profile badge should be removed beside the notification icon.");
assert.match(app, /function renderLogin\(\)[\s\S]*login-actions[\s\S]*renderThemeToggle\(\)/, "Login screen should include the theme toggle.");
assert.match(app, /state\.role === "tenant" && state\.page === "dashboard"/, "Tenant dashboard should not render the redundant global focus hero.");
assert.match(app, /state\.role === "manager" && state\.page === "dashboard"/, "Management dashboard should use its own command center instead of the redundant global focus hero.");
assert.match(app, /tenant-summary-strip/, "Tenant dashboard should render the compact tenant overview strip.");
assert.match(app, /function contractHealthClass\(endDate\)/, "Tenant contract status should be derived from the contract end date.");
assert.match(app, /daysRemaining < 0\) return "contract-critical";[\s\S]*daysRemaining <= 30\) return "contract-warning"/, "Tenant contract health should stay green until the final month, warning in the last 30 days, and critical only after expiry.");
assert.match(app, /class="contract-health \$\{contractHealth\}"/, "Tenant dashboard contract fact should render a health color class.");
assert.match(app, /tenant-summary-facts[\s\S]*data-page="renewal"[\s\S]*Active until[\s\S]*data-page="rent"[\s\S]*Rent cycle[\s\S]*data-page="maintenance"[\s\S]*Maintenance/, "Tenant dashboard summary facts should route to renewal, rent, and maintenance.");
assert.match(app, /function paymentHealthClass\(summary\)/, "Tenant payment status should be derived from due date and payment state.");
assert.match(app, /daysUntilDue < 0/, "Tenant payment status should turn critical when overdue.");
assert.match(app, /daysUntilDue >= 0 && daysUntilDue <= 7/, "Tenant payment status should turn warning when close to due.");
assert.match(app, /const metricClass = color === "red" \? "metric-status-critical" : color === "orange" \? "metric-status-warning" : "metric-status-paid"/, "Tenant dashboard helper should map urgency colors to metric classes.");
assert.match(app, /metricStatusPaid|metric-status-paid|className: "metric-status-paid"/, "Tenant paid payment status should render the paid metric class.");
assert.match(app, /metric-status-warning/, "Tenant payment status should support a near-due warning class.");
assert.match(app, /metric-status-critical/, "Tenant payment status should support an overdue or one-day critical class.");
assert.match(app, /function renderTenantRentOverview/, "Tenant dashboard should render one primary rent overview card.");
assert.match(app, /aria-label="Primary rent overview"/, "Primary rent card should expose a clear accessible region label.");
assert.match(app, /title:\s*"Rent overdue"[\s\S]*body:\s*`\$\{rentCycle\.amount\} was due on \$\{rentCycle\.dueDate\}\. Complete payment to update your rent status\.`[\s\S]*action:\s*\{ label:\s*"Pay Rent", icon:\s*"wallet", modal:\s*"payRent" \}/, "Overdue tenant rent should use direct payment copy and open the existing pay-rent modal.");
assert.match(app, /secondaryAction:\s*\{ label:\s*"View Rent", icon:\s*"wallet", page:\s*"rent" \}/, "Overdue and due-soon rent states should keep View Rent as a secondary action.");
assert.match(app, /tenant-secondary-status-grid/, "Tenant dashboard should separate contract and maintenance into secondary status cards.");
assert.match(app, /secondaryCards\.map\(renderTenantStatusCard\)/, "Tenant secondary status cards should use reusable card rendering.");
assert.match(app, /tenant-dashboard-lower/, "Tenant dashboard should arrange actions and activity in a balanced lower grid.");
assert.doesNotMatch(app, /<h2>\$\{escapeHtml\(profile\.name\.split\(" "\)\[0\]\)\}, \$\{escapeHtml\(summary\.title\)\}<\/h2>/, "Tenant dashboard should not lead with the rent-review welcome sentence.");
assert.match(styles, /\.tenant-dashboard-flow\s*\{[\s\S]*grid-template-columns:\s*minmax\(0, 1\.35fr\) minmax\(320px, 0\.65fr\);[\s\S]*align-items:\s*stretch/, "Tenant dashboard status area should give the rent overview primary space and keep both columns aligned.");
assert.match(styles, /\.tenant-rent-overview\s*\{[\s\S]*padding:\s*22px/, "Tenant rent overview should have more internal breathing room.");
assert.match(styles, /--rent-green-card-bg:\s*var\(--surface\)/, "Tenant paid rent overview should keep a neutral surface while retaining green paid accents.");
assert.match(styles, /--rent-orange-card-bg:\s*var\(--surface\)/, "Tenant warning rent overview should keep a neutral surface while retaining orange warning accents.");
assert.match(styles, /--rent-red-card-bg:\s*var\(--surface\)/, "Tenant overdue rent card should keep a neutral surface while retaining red warning accents.");
assert.match(styles, /\.tenant-rent-overview\.metric-status-paid\s*\{[\s\S]*--rent-card-accent:\s*var\(--apple-green\);[\s\S]*--rent-card-bg:\s*var\(--rent-green-card-bg\);[\s\S]*--rent-card-border:\s*var\(--apple-green-border\)/, "Tenant paid rent overview should use green rail and border without a green card fill.");
assert.match(styles, /\.tenant-rent-overview\.metric-status-critical\s*\{[\s\S]*--rent-card-bg:\s*var\(--rent-red-card-bg\)/, "Tenant rent overview should keep refined status-color support for overdue states.");
assert.match(styles, /\.tenant-rent-overview\.metric-status-critical\s*\{[\s\S]*border-color:\s*var\(--apple-red-border\)/, "Tenant overdue rent overview should keep its red border before hover.");
assert.match(styles, /\.tenant-rent-overview\.metric-status-critical::after\s*\{[\s\S]*background:\s*var\(--apple-red\)/, "Tenant overdue rent overview should keep its red left rail before hover.");
assert.match(styles, /\.tenant-rent-overview::after\s*\{[\s\S]*background:\s*var\(--rent-card-accent, transparent\)/, "Tenant rent overview should use a subtle status accent line.");
assert.match(styles, /\.rent-overview-copy h2\s*\{[\s\S]*color:\s*var\(--text\)/, "Tenant rent overview title should remain primary text instead of status red.");
assert.match(styles, /\.rent-overview-facts span\s*\{[\s\S]*min-height:\s*54px;[\s\S]*padding:\s*9px 12px/, "Tenant rent overview detail chips should stay compact.");
assert.match(styles, /\.rent-overview-facts span:last-child em\s*\{[\s\S]*border:\s*1px solid var\(--rent-status-border, var\(--line\)\)/, "Tenant rent overview status should render as a small badge.");
assert.match(styles, /\.rent-overview-actions\s*\{[\s\S]*display:\s*grid;[\s\S]*grid-template-columns:\s*max-content max-content/, "Tenant rent overview actions should use compact dashboard-sized buttons.");
assert.match(styles, /\.rent-overview-actions \.button\s*\{[\s\S]*min-height:\s*38px;[\s\S]*min-width:\s*118px/, "Tenant rent overview buttons should be smaller than the global button size.");
assert.match(styles, /\.tenant-secondary-status-grid\s*\{[\s\S]*grid-template-rows:\s*repeat\(2, minmax\(0, 1fr\)\);[\s\S]*align-items:\s*stretch/, "Tenant secondary status cards should align as a balanced two-card stack.");
assert.match(styles, /\.tenant-status-card\s*\{[\s\S]*min-height:\s*0;[\s\S]*padding:\s*12px 14px/, "Tenant status cards should not create oversized dashboard-row spacing.");
assert.match(styles, /\.tenant-status-card em\s*\{[\s\S]*min-width:\s*112px;[\s\S]*min-height:\s*32px/, "Tenant secondary status card actions should not look squished.");
assert.match(styles, /\.tenant-dashboard-lower\s*\{[\s\S]*align-items:\s*stretch/, "Tenant dashboard lower row should avoid a blank bottom-right pocket.");
assert.match(styles, /\.tenant-dashboard-lower \.activity-list\s*\{[\s\S]*display:\s*flex;[\s\S]*justify-content:\s*space-between/, "Tenant recent activity should use the stretched lower card height gracefully.");
assert.match(styles, /\.quick-grid\.tenant-action-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/, "Tenant quick actions should render as two-column mini cards.");
assert.match(styles, /\.quick-grid\.tenant-action-grid > \.quick-card\s*\{[\s\S]*min-height:\s*112px/, "Tenant quick action cards should be compact mini cards.");
assert.match(styles, /\.button\.secondary\s*\{[\s\S]*background:\s*var\(--primary-soft\)/, "Secondary buttons should use a visible gray background.");
assert.match(styles, /\.screen-focus-side > strong\.attention-count\s*\{[\s\S]*font-size:\s*clamp\(48px, 5\.6vw, 72px\)/, "Action Center attention count should make the number visually prominent.");
assert.match(styles, /\.action-group-waiting \.action-item-title,\s*\.action-group-closed \.action-item-title\s*\{[\s\S]*font-size:\s*clamp\(20px, 1\.85vw, 24px\)/, "Waiting and completed Action Center item titles should share the larger reusable title styling.");
assert.match(styles, /\.action-card-topline\s*\{[\s\S]*justify-content:\s*space-between/, "Action Center card header should reserve space for the dismiss control.");
assert.match(styles, /\.action-dismiss\s*\{[\s\S]*width:\s*30px;[\s\S]*height:\s*30px/, "Message dismiss button should use a compact icon-button size.");
assert.match(styles, /\.action-state-row\s*\{[\s\S]*display:\s*flex;[\s\S]*gap:\s*8px/, "Action Center status and unread labels should be aligned in a calmer top row.");
assert.match(styles, /\.focus-meta span,\s*\.focus-meta button\s*\{[\s\S]*background:\s*var\(--surface-soft\)/, "Screen focus route chips should keep the same calm tag surface.");
assert.match(styles, /\.focus-meta button:hover\s*\{[\s\S]*background:\s*var\(--primary-soft\)/, "Clickable screen focus chips should have a subtle hover state.");
assert.match(styles, /\.dashboard-group-header\s*\{[\s\S]*display:\s*flex;[\s\S]*justify-content:\s*space-between/, "Management dashboard group labels should align with optional section actions.");
assert.match(styles, /\.dashboard-section-label\s*\{[\s\S]*text-transform:\s*uppercase/, "Management dashboard section labels should be compact and consistent.");
assert.match(styles, /\.dashboard-snapshot-card\s*\{[\s\S]*border:\s*1px solid var\(--line\)/, "Management dashboard snapshots should render as single-card sections.");
assert.match(styles, /\.dashboard-snapshot-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/, "Management dashboard snapshot cards should use compact internal stat grids.");
assert.match(styles, /\.dashboard-snapshot-item\s*\{[\s\S]*grid-template-columns:\s*auto minmax\(0, 1fr\) auto/, "Management dashboard snapshot items should align icon, content, and action consistently.");
assert.match(styles, /\.operations-chip-row\s*\{[\s\S]*display:\s*grid;[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/, "Management operations categories should use balanced route chips.");
assert.match(styles, /\.manager-command-grid\s*\{[\s\S]*align-items:\s*stretch/, "Management command cards should stretch to matching heights.");
assert.match(styles, /\.operations-summary-actions\s*\{[\s\S]*grid-template-columns:\s*repeat\(2, minmax\(0, 1fr\)\)/, "Management summary actions should use equal-width dashboard buttons.");
assert.match(styles, /\.operations-summary-card,\s*\.priority-queue-card\s*\{[\s\S]*padding:\s*22px/, "Management command cards should share consistent internal padding.");
assert.match(styles, /\.operations-summary-card\s*\{[\s\S]*height:\s*100%/, "Management summary card should match the priority queue card height.");
assert.match(styles, /\.operations-summary-actions \.button,\s*\.operations-summary-actions \.button\.primary\s*\{[\s\S]*width:\s*100%;[\s\S]*min-height:\s*40px/, "Management summary action buttons should share the same compact width and height.");
assert.match(styles, /\.operations-summary-actions\s*\{[\s\S]*align-self:\s*end;[\s\S]*margin-top:\s*auto/, "Management summary actions should occupy the matched card height intentionally.");
assert.match(styles, /\.priority-queue-card\s*\{[\s\S]*gap:\s*10px/, "Management priority queue card should use compact internal spacing.");
assert.match(styles, /\.priority-queue-card \.section-header\s*\{[\s\S]*display:\s*block;[\s\S]*margin-bottom:\s*6px/, "Management priority queue header should not add excess vertical space before rows.");
assert.match(styles, /\.priority-item\s*\{[\s\S]*grid-template-columns:\s*minmax\(0, 1fr\) minmax\(174px, 192px\)/, "Management priority rows should reserve a stable count and badge column.");
assert.match(styles, /\.management-priority-item\s*\{[\s\S]*min-height:\s*58px;[\s\S]*padding:\s*8px 12px/, "Management priority rows should stay compact while preserving scanability.");
assert.match(styles, /\.priority-detail\s*\{[\s\S]*display:\s*grid;[\s\S]*grid-template-columns:\s*28px minmax\(132px, 1fr\)/, "Management priority counts and tags should align in fixed internal columns.");
assert.match(styles, /\.priority-detail \.status\s*\{[\s\S]*width:\s*100%/, "Management priority tags should share a consistent tag width.");
assert.match(styles, /\.priority-detail \.status\s*\{[\s\S]*display:\s*grid;[\s\S]*grid-template-columns:\s*8px minmax\(0, 1fr\)/, "Management priority tag dots should align in a fixed badge column.");
assert.match(styles, /\.queue-empty\s*\{[\s\S]*background:\s*var\(--surface-soft\)/, "Management queue should include a compact empty state.");
assert.match(styles, /\.action-meta-grid\s*\{[\s\S]*grid-template-columns:\s*repeat\(auto-fit, minmax\(170px, 1fr\)\)/, "Action Center metadata should use a responsive compact grid.");
assert.match(styles, /\.action-center-item\s*\{[\s\S]*gap:\s*var\(--space-4\);[\s\S]*padding:\s*var\(--space-5\)/, "Action Center cards should keep token-based internal spacing.");
assert.doesNotMatch(styles, /\.ask-ai-entry:hover,\s*\.ask-ai-entry:focus-visible,\s*\.ask-ai-shell\.open \.ask-ai-entry/, "Ask AI open state should not keep the sidebar trigger in its hover treatment.");
assert.match(styles, /\.ask-ai-shell\.open \.ask-ai-entry\s*\{[\s\S]*transform:\s*none/, "Ask AI open state should return the sidebar trigger to its normal button position.");
assert.match(styles, /Shared dashboard icon scale/, "Dashboard icons should be governed by a shared icon scale.");
assert.match(styles, /\.metric-card \.metric-icon,\s*\.quick-card \.metric-icon,\s*\.dashboard-snapshot-item \.metric-icon\s*\{[\s\S]*width:\s*42px;[\s\S]*height:\s*42px/, "Dashboard card icons should render at the modern larger scale.");
assert.match(styles, /\.nav-icon svg,\s*\.button-icon svg,\s*\.metric-icon svg,\s*\.theme-toggle-icon svg,\s*\.notification-button > svg/, "Shared icon SVG sizing should cover dashboard navigation, buttons, metrics, theme, and notifications.");
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
assert.match(styles, /\.metric-grid > \.metric-card\.metric-status-paid\s*\{[\s\S]*border-color:\s*var\(--apple-green-border\)/, "Paid metric cards should keep their green border after final metric-grid polish.");
assert.match(styles, /\.metric-grid > \.metric-card\.metric-status-warning\s*\{[\s\S]*border-color:\s*var\(--apple-orange-border\)/, "Warning metric cards should keep their orange border after final metric-grid polish.");
assert.match(styles, /\.metric-grid > \.metric-card\.metric-status-critical\s*\{[\s\S]*border-color:\s*var\(--apple-red-border\)/, "Critical metric cards should keep their red border after final metric-grid polish.");
assert.match(styles, /\.tenant-summary-facts button\s*\{[\s\S]*cursor:\s*pointer/, "Tenant summary facts should be clickable chips without changing their visual treatment.");
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
assert.match(app, /const activeFollowupStatuses = \["Pending", "In Review"\]/, "Tenant maintenance follow-up status cards should show only active items.");
assert.match(app, /const activeStatusSectionCount = Number\(activeComplaints\.length > 0\) \+ Number\(activeSuggestions\.length > 0\)/, "Tenant maintenance should count visible follow-up status sections.");
assert.match(app, /maintenance-status-single/, "Single tenant maintenance status sections should get a compact full-row layout class.");
assert.match(app, /const historyRows = \[/, "Tenant maintenance should render closed complaints and suggestions in history.");
assert.match(app, /data-action="cancel-suggestion"/, "Tenant should be able to cancel suggestions.");
assert.match(app, /data-form="tenant-suggestion"[\s\S]*<label>Supporting file<\/label>[\s\S]*Attach photo or document\./, "Tenant suggestion form should include the same supporting file surface as complaints.");
assert.doesNotMatch(app, /maintenance-flow-column/, "Tenant maintenance follow-up cards should use direct grid placement for equal row heights.");
assert.match(styles, /\.field select\s*\{[\s\S]*appearance:\s*none;[\s\S]*background-position:\s*right 13px center/, "Select dropdown arrows should use a custom inset arrow.");
assert.match(styles, /\.maintenance-form\s*\{[\s\S]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)/, "Tenant maintenance form should use a compact multi-column desktop grid.");
assert.match(styles, /\.maintenance-followup-grid\s*\{[\s\S]*align-items:\s*stretch/, "Tenant maintenance follow-up cards should stretch to equal heights by row.");
assert.match(styles, /\.maintenance-complaint-form-section,\s*\.maintenance-suggestion-form-section\s*\{[\s\S]*min-height:\s*372px/, "Complaint and suggestion form cards should have more vertical breathing room.");
assert.match(styles, /\.suggestion-status-section\s*\{[\s\S]*grid-column:\s*2/, "Suggestion status card should align under the suggestion form when visible.");
assert.match(styles, /\.maintenance-status-single\s*\{[\s\S]*grid-column:\s*1 \/ -1/, "A single visible tenant maintenance status card should span the full row.");
assert.match(styles, /\.maintenance-secondary-form\s*\{[\s\S]*display:\s*flex;[\s\S]*flex-direction:\s*column/, "Tenant maintenance follow-up forms should align actions inside balanced cards.");
assert.match(styles, /\.maintenance-secondary-form textarea\s*\{[\s\S]*min-height:\s*104px/, "Tenant maintenance follow-up text areas should have a taller writing surface.");
assert.match(styles, /\.maintenance-secondary-form \.upload-box\s*\{[\s\S]*min-height:\s*96px/, "Tenant maintenance follow-up upload boxes should have matching breathing room.");
assert.match(styles, /\.maintenance-secondary-form \.button\.primary\s*\{[\s\S]*margin-top:\s*auto/, "Tenant maintenance follow-up form buttons should sit at the bottom of equal-height cards.");
assert.match(styles, /\.maintenance-history-section\s*\{[\s\S]*grid-column:\s*1 \/ -1/, "Maintenance history should span both follow-up columns.");
assert.match(styles, /\.maintenance-status-section table\s*\{[\s\S]*min-width:\s*0;[\s\S]*table-layout:\s*fixed/, "Tenant maintenance status tables should fit within narrow status cards.");
assert.match(styles, /\.complaint-status-section th:nth-child\(4\),\s*\.complaint-status-section td:nth-child\(4\)\s*\{[\s\S]*width:\s*19%/, "Complaint action column should stay inside the status card.");
assert.match(styles, /\.maintenance-status-section \.table-empty-state\s*\{[\s\S]*min-height:\s*72px/, "Tenant maintenance status tables should use shorter empty states.");
assert.match(styles, /\.pull-reset-indicator\s*\{[\s\S]*position:\s*fixed/, "Pull-to-reset should render a lightweight fixed indicator.");
assert.match(styles, /\.main-area\.pull-reset-active > :not\(\.pull-reset-indicator\)/, "Pull-to-reset should shift only main content, not the sidebar.");
assert.match(styles, /\.contract-action-row \.contract-action-button\s*\{[\s\S]*border-color:\s*var\(--line\);[\s\S]*background:\s*var\(--surface-soft\)/, "Renewal contract actions should have a visible button surface.");
assert.match(styles, /\.renewal-timeline-empty\s*\{[\s\S]*min-height:\s*122px/, "Renewal timeline empty state should keep the card compact.");
assert.match(index, /styles\.css\?v=dashboard-system-20260617-2/, "Index should load the latest cache-busted stylesheet.");
assert.match(index, /app\.js\?v=dashboard-system-20260617-4/, "Index should load the latest cache-busted app script.");

console.log("Interaction audit checks passed.");
