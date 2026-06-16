# EstateFlow Dashboard Design System

This portal uses a small internal dashboard design system. Before adding new UI, check whether an existing token, helper, or class already covers the need. If a new repeated pattern is required, add it to the design system first, then use it on the page.

## Tokens

Tokens live in `styles.css` under the final design-system token block.

- Color aliases: `--color-bg-page`, `--color-bg-surface`, `--color-bg-muted`, `--color-text-primary`, `--color-text-secondary`, `--color-border-subtle`, `--color-focus-ring`.
- Status colors: `--status-success-*`, `--status-warning-*`, `--status-danger-*`, `--status-info-*`, `--status-neutral-*`.
- Spacing: `--space-0` through `--space-16`.
- Typography: `--font-size-*`, `--line-height-*`, `--font-weight-*`, `--font-family-base`.
- Radius: `--radius-xs`, `--radius-sm`, `--radius-md`, `--radius-lg`, `--radius-xl`, `--radius-pill`.
- Layout: `--sidebar-width`, `--header-height`, `--content-max-width`, `--dashboard-gap`, `--card-padding`, `--table-row-height`.
- Motion: `--duration-fast`, `--duration-normal`, `--duration-slow`, `--ease-standard`.
- Layering: `--z-dropdown`, `--z-modal`, `--z-toast`.

Keep the palette neutral and Codex-like. Use color mainly for status, focus, warning, danger, success, and clear action feedback.

## JavaScript Components

Reusable render helpers live in `app.js`:

- `renderButton`
- `badge` / `badgeSlot`
- `renderSectionHeader`
- `metricCard`
- `renderNotificationCard`
- `renderEmptyState`
- `renderLoadingState`
- `renderMetadataGrid`
- `renderActivityItem`
- `renderProgressBar`
- `table`
- `showToast`

Use these helpers for repeated dashboard UI. Page-specific markup should only describe unique page composition.

## Status System

Statuses are centralized in `STATUS_VARIANT_MAP` and `STATUS_LABELS`.

Every status badge maps to one semantic variant:

- `success`: paid, approved, completed, occupied, available.
- `warning`: pending, submitted, in review, in progress, scheduled, info requested, expiring soon.
- `danger`: late, overdue, rejected, canceled, new, open, vacant, high.
- `info`: active, sent, assigned, read.
- `neutral`: uploaded, unread, low.

When adding a new app state, add it to `STATUS_VARIANT_MAP` before rendering it.

## Component Rules

- Buttons use `.button` plus variants: `primary`, `secondary`, `ghost`, `danger`, `success`, `warning`, `neutral`, `link`, `icon-only`.
- Cards use the shared card-like classes already used by `metricCard`, `quick-card`, `section-band`, `document-card`, `property-card`, and `action-center-item`.
- Forms use `.field`, labels, helper/error text, and shared focus/error states.
- Tables use `table(headers, rows, options)` for count labels, empty states, row spacing, and overflow behavior.
- Modals use `renderModal`, `modalContent`, shared `.modal-*` classes, Escape close, focus trap, and focus return.
- Toasts use `showToast(message, { variant, description })`; do not create page-specific toast DOM.
- Empty and loading states use `renderEmptyState` and `renderLoadingState`.

## Page-Specific CSS

Allowed:

- Unique page grids.
- Unique responsive arrangement.
- Page-specific section ordering.

Not allowed:

- New button, card, badge, toast, modal, table, form, shadow, radius, or status color systems.
- Hard-coded status colors in page CSS or page markup.
- Random spacing values when a token exists.
- One-off hover/focus/disabled states.

## UI Kit

Open the portal, log in as either role, then use the sidebar footer `UI kit` route. The route demonstrates buttons, badges, chips, stat cards, notification cards, forms, tables, empty/loading states, activity items, progress bars, toast variants, and theme behavior.

