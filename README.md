# UncleSam Tours – Prototype

A 4-week proof-of-concept for the UncleSam Tours & Services booking platform.  
This repository contains a **monorepo** with two frontends (React + Vue) powered by a shared **Supabase backend** and deployed on **Vercel**.  
The goal is to demonstrate a responsive, mobile-optimized tour-booking experience for stakeholders.

---

## Features (Prototype Scope)

- **Responsive Landing & Tour Listings** – mobile-first layouts with Tailwind CSS  
- **User Authentication** – Supabase email/password sign-up & login  
- **Tour Details & Booking** – select dates, guest count, create a booking  
- **Admin Dashboard** – CRUD for tours and booking management (basic)  
- **Mock Payments** – simulated PayMongo/Stripe checkout flow  
- **Real-Time Updates** – Supabase subscriptions for live booking status  
- **Dual Frontend** – React (Next.js) desktop site and Vue (Vite) mobile-first app

---

## 🗂 Project Structure

unclesam-prototype/
├─ apps/
│ ├─ react-app/ # Next.js (desktop-first)
│ └─ vue-app/ # Vite + Vue 3 (mobile-first)
└─ README.md


---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Supabase account & project
- Vercel account (for deployment)
