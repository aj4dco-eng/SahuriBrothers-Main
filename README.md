# Sahuri Brothers Web App

## Overview
This is the Sahuri Brothers company website and admin portal, built with React, TypeScript, and Vite. It supports multi-language (Hebrew, Arabic, English), RTL/LTR, customer/admin sign-in, and CRM integration.

---

## Supabase Setup
1. Create a project at https://app.supabase.com
2. Copy your project URL and anon/public key.
3. Create a `.env` file in the project root:
   ```env
   VITE_SUPABASE_URL=your-supabase-url
   VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key
   ```
4. Ensure your Supabase tables (e.g. `clients`) exist and have RLS enabled as needed.
5. For local dev, restart after editing `.env`.

---

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the dev server:**
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:5173

3. **Build for production:**
   ```bash
   npm run build
   ```
   Output is in the `dist/` folder.

---

## Lovable Cloud Deployment

1. **Push your code to GitHub.**
2. **Create a new project on Lovable.**
3. **Connect your GitHub repo or upload the code.**
4. **Set build command:**
   ```bash
   npm run build
   ```
5. **Set publish directory:**
   ```
   dist
   ```
6. **Add environment variables** (if needed, e.g. for Supabase, etc). Never commit `.env` to the repo.
7. **Deploy!**

---

## Authentication
- Visitors can browse the site without an account.
- Click "Sign In" in the header to log in as admin or customer.
- Demo credentials:
  - **Admin:** `admin@sahuri.test` / `admin123`
  - **Customer:** `customer@sahuri.test` / `cust123`

---

## CRM Integration
- Admins can access the CRM via the "CRM" button in the header.
- The CRM is currently embedded as an iframe (default: GitHub repo). For production, deploy the CRM and update the iframe URL.
- For a full code merge, see the CRM repo: https://github.com/aj4dco-eng/sahouri-crm-erp

---

## Tech Stack
- React 18, TypeScript, Vite
- Custom i18n, RTL/LTR, context-based role/auth
- CRM integration via iframe (or merge option)

---

## Security
- Do not commit `.env` or secrets.
- See `SECURITY_AUDIT_REPORT.md` for audit details.

---

## Contact
For help, contact Sahuri Brothers or your developer.
