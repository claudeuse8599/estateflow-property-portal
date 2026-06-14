# EstateFlow Property Portal

Frontend MVP for a real estate property management portal with tenant and company dashboards, persistent demo data, an Action Center, document views, payment review flows, maintenance tracking, contract renewals, notifications, and dark/light mode.

## Run Locally

This is a static frontend demo. No backend, external APIs, real authentication, or real payment gateway is required.

```bash
python3 -m http.server 4181 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4181/
```

## Demo Roles

- Tenant
- Property Management

Any email and password will open the selected demo portal.

## Notes

- Demo data persists in browser local storage.
- The Data Reset button restores the original seeded data.
- Payment, document, notification, and request flows are demo-only.
