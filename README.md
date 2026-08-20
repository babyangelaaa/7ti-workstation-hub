# 7TI Workstation Hub

Create a 7TI-branded membership workstation dashboard inspired by the attached GHL membership home dashboard, but redesign it completely with a pixel-art, digital workstation feel.

Important: Use the attached screenshot only as layout reference. Do not copy its plain SaaS styling. The final result should feel like a 7TI operating system for remote professionals.

Brand:

- Brand name: 7TI

- Product/page name: 7TI Workstation

- Font: Space Mono throughout

- Colors:

  - Black: #000000

  - White: #ffffff

  - Main electric blue: #0100fe

  - Accent yellow: #ffff01

  - Accent magenta: #ff00ff

  - Accent green: #a6f445

  - Accent orange: #ff7504

- Overall mood: bold, pixel-like, high-contrast, digital, energetic, remote-work focused, structured but playful.

- Use 7TI messaging cues: “Empowering Lives Digitally,” “Unlock Your Potential,” “Fast-Track Your Growth,” and “Build a Future-Proof Career.”

Build a responsive web app dashboard with:

1. A left sidebar

   - Top pixel-style 7TI logo/avatar block

   - Title: “7TI Workstation”

   - Navigation items:

     - Home

     - Join a Group

     - Take a Course

     - My Progress

     - Shared Files

     - Manage Subscriptions

   - Each nav item should use a simple icon and a pixel-arrow indicator.

   - Active state should use electric blue with black pixel border and offset shadow.

2. A top utility bar

   - Small home icon on the far left for mobile/tablet

   - Right side: app grid icon, notification bell, user initials “T1”

   - Keep it minimal, like a workstation HUD.

3. Main dashboard content

   - Greeting: “Hi, Test 1”

   - Main heading: “Welcome to 7TI Workstation”

   - Add a small pixel badge beside/under the heading: “Empowering Lives Digitally”

   - Use a two-column desktop layout and single-column mobile layout.

4. Course Progress module

   - Pixel-window card with sharp edges, 2px black border, and offset black shadow.

   - Title: “Course Progress”

   - Text: “You marked 0/40 lessons complete for ‘AI-Trained Executive Assistant Certification’”

   - Add a segmented pixel progress bar with 40 tiny blocks, currently empty.

   - Primary button: “Continue Course”

   - Button should be electric blue with black border, white text, and hard offset shadow.

   - Add tiny accent pixels using yellow, magenta, green, and orange.

5. Shared Files module

   - Pixel-window card titled “Shared Files”

   - Button: “Add Files”

   - Empty state should show a pixel folder illustration, not a smooth modern folder.

   - Empty state text: “No files uploaded yet.”

   - Add a secondary CTA: “Open File Vault”

6. Extra workstation widgets

   Add 2-3 smaller cards below the main row:

   - “Next Mission” with a course task checklist

   - “Growth Tracker” showing remote-career readiness stats

   - “Community Signal” showing group activity or announcements

   These should make the dashboard feel more useful than the original screenshot.

Visual design requirements:

- Strong pixel aesthetic: square corners or max 4px radius, 1-2px black outlines, hard shadows, blocky dividers, checker/grid details, pixel-style icons.

- Do not use soft gradients, glassmorphism, blur, pastel SaaS cards, oversized rounded corners, or generic corporate dashboard styling.

- Use white and black as the base with electric blue as the dominant brand color. Use yellow, magenta, green, and orange only as accents.

- Add subtle pixel-grid background details, but keep content readable.

- Make the app feel premium and intentional, not childish.

- Use Space Mono for all text.

- Ensure all text fits on mobile and desktop without overlap.

- Use clean spacing and strong hierarchy.

Technical requirements:

- Build as a React + Tailwind app.

- Use reusable components for Sidebar, TopBar, PixelCard, ProgressBlocks, CourseProgress, SharedFiles, and DashboardWidget.

- Use mock data only.

- Make buttons and nav states interactive with hover/focus states.

- Ensure responsive behavior:

  - Desktop: fixed left sidebar, top bar, two-column dashboard grid.

  - Tablet/mobile: collapsible sidebar or stacked navigation, single-column cards.

- Prioritize polished UI over backend complexity.

Final output should be a complete, usable 7TI Workstation home dashboard, not a landing page.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/34b84f46-5497-4bac-9fbb-30869876e132).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
