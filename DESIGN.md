# Design Brief

## Aesthetic Direction
Mobile-first e-commerce marketplace inspired by Daraz. Vibrant, energetic, action-oriented design with clean card layouts, minimal clutter, and fast-moving interactions. Playful yet professional tone optimized for quick browsing and purchasing.

## Color Palette

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| Primary | 0.62 0.22 39 | #FF6B35 | CTAs, badges, highlights, bottom nav active |
| Secondary | 0.85 0.02 240 | #D8D8D8 | Secondary actions, dividers |
| Neutral/BG | 0.98 0.01 240 | #F8F8F8 | Page backgrounds, secondary surfaces |
| Foreground | 0.18 0.01 240 | #2B2B2B | Primary text, headers |
| Card | 1.0 0.005 0 | #FFFFFF | Card backgrounds |
| Destructive | 0.55 0.19 25 | #EF4444 | Removal, delete actions |
| Success | 0.64 0.15 150 | #10B981 | Confirmations, success states |

## Typography

| Role | Font | Scale | Usage |
|------|------|-------|-------|
| Display | Bricolage Grotesque | 32px, 24px, 20px | Headers, section titles, product names |
| Body | DM Sans | 16px, 14px, 12px | Body copy, prices, descriptions |
| Mono | Geist Mono | 14px, 12px | Technical text, order numbers |

## Elevation & Depth

| Level | Shadow | Usage |
|-------|--------|-------|
| Card | `0 1px 3px rgba(0,0,0,0.08)` | Product cards, category chips |
| Elevated | `0 4px 12px rgba(0,0,0,0.12)` | Bottom nav, modals, popovers |
| None | — | Text, badges, flat elements |

## Structural Zones

| Zone | Treatment | Notes |
|------|-----------|-------|
| Header | White card + orange bottom border, `shadow-elevated` | App logo, search bar, minimal clutter |
| Content | `bg-neutral` with white card sections | Product grid, category list, banners |
| Bottom Nav | Fixed sticky, white background, `shadow-elevated`, orange active indicator | 5 tabs: Home, Categories, Cart, Favorites, Account |
| Product Card | White card, 8px radius, `shadow-card`, 16px padding | Image + title + stars + price (bold orange) + Add to Cart button |

## Spacing & Rhythm

- Base unit: 8px
- Padding: 16px (cards), 12px (compact), 20px (sections)
- Gaps: 12px (grid), 8px (compact elements)
- Mobile-first: 100% width minus 16px padding

## Component Patterns

- **Buttons**: 24px radius (full), orange primary, white secondary, disabled opacity
- **Cards**: 8px radius, white bg, subtle shadows, no borders
- **Input**: 8px radius, light grey bg, 12px padding, orange focus ring
- **Badges**: Orange bg, white text, 4px radius, small font
- **Product Images**: 0px radius (sharp edges for product focus)

## Motion & Interaction

- **Transitions**: 300ms cubic-bezier(0.4, 0, 0.2, 1) for all interactive elements
- **Hover**: Opacity shift (90%), slight scale down on press (95%)
- **Entrance**: Fade-in + slide-up for cards (300ms staggered)
- **Bottom nav**: Smooth tab switch with 200ms animation

## Responsive Strategy

Mobile-first (320px–600px). No tablet layout needed for MVP. Breakpoints: `sm: 640px`, `md: 768px`, `lg: 1024px` for future desktop support.

## Light/Dark Mode

Light mode default (designed for natural light). Dark mode available: charcoal bg (0.14), white text (0.92), orange accent unchanged.

## Key Differentiators

1. **Bottom navigation as primary UI**: No hamburger menu — tabs are always visible
2. **Orange accent throughput**: Every CTA, active state, and badge uses vibrant orange
3. **Card density**: Tight 12px gaps, full-width cards on mobile for maximum touch targets
4. **Fast visual feedback**: All interactive elements respond instantly (300ms max)
5. **Minimal decorations**: Clean typography, flat design, shadows only for elevation logic
