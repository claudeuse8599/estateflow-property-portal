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
- Ask AI: `--ai-gradient`, `--ai-gradient-highlight`, `--ai-gradient-soft`, `--ai-glow`, `--ai-glow-soft`, `--ai-focus-ring`, `--ai-notch-*`, and `--ai-workspace-groove-*`.

Keep the palette neutral and Codex-like. Use color mainly for status, focus, warning, danger, success, and clear action feedback.

## Ask AI Surfaces

Ask AI is the only branded gradient surface in the dashboard. Keep the gradient limited to assistant entry points and assistant-specific UI so the operational product stays calm.

- The top-center notch uses the shared `--ai-*` tokens, stays fixed at true center, and grows downward on hover, nudge, and active states.
- The nudge state must have enough width and height for the full message. Do not truncate nudge copy with ellipses.
- The expanded workspace uses a neutral dashboard shell with a carved top groove for the notch, a compact chat sidebar, centered empty state, and a centered composer.
- AI motion should feel smooth and lightweight, and every AI animation must be covered by the reduced-motion rules.
- The sidebar diagnostic button may trigger a nudge for demos, but it should not become a separate notification system.

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
- Ask AI surfaces use the shared `.ask-ai-*` classes plus the `--ai-*` tokens. Add new assistant UI to the UI Kit before reusing it in the portal.

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

Open the portal, log in as either role, then use the sidebar footer `UI kit` route. The route demonstrates buttons, badges, chips, Ask AI surfaces, stat cards, notification cards, forms, tables, empty/loading states, activity items, progress bars, toast variants, and theme behavior.
