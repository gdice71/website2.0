# Grace Dice - Portfolio Website

A premium, high-performance portfolio website with sophisticated animations and modern design aesthetics inspired by racing and high-performance engineering.

## Features

✨ **Premium Design**
- Custom cursor with smooth following animation
- Gradient orb backgrounds with parallax effects
- Smooth scroll animations and reveals
- Racing-inspired color palette (neon green accents on dark)

🎨 **Modern Aesthetics**
- Distinctive typography (Syne + IBM Plex Mono)
- Grid overlay with animated movement
- Staggered text reveals
- Hover effects and micro-interactions

⚡ **Performance Optimized**
- Pure CSS animations where possible
- Intersection Observer for scroll animations
- Reduced motion for low-end devices
- Optimized image loading

📱 **Fully Responsive**
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactions
- Mobile menu navigation

## Setup Instructions

### Option 1: Quick Start (No Installation Required)

1. Simply open `index.html` in any modern web browser
2. That's it! The site will work immediately

### Option 2: Using VS Code Live Server (Recommended)

1. **Install VS Code** (if you haven't already)
   - Download from: https://code.visualstudio.com/

2. **Install Live Server Extension**
   - Open VS Code
   - Click the Extensions icon (or press `Ctrl+Shift+X` / `Cmd+Shift+X`)
   - Search for "Live Server"
   - Click "Install" on the extension by Ritwick Dey

3. **Open the Project**
   - In VS Code: File → Open Folder
   - Select the folder containing these files

4. **Launch the Site**
   - Right-click on `index.html`
   - Select "Open with Live Server"
   - Your default browser will open with the site
   - Changes will auto-reload as you edit!

### Option 3: Using Python's Built-in Server

```bash
# Navigate to the project folder
cd path/to/your/project

# Python 3
python -m http.server 8000

# Then open http://localhost:8000 in your browser
```

### Option 4: Using Node.js

```bash
# Install http-server globally (one time only)
npm install -g http-server

# Navigate to project folder
cd path/to/your/project

# Start server
http-server

# Open the URL shown in terminal (usually http://localhost:8080)
```

## File Structure

```
portfolio/
│
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
└── README.md           # This file
```

## Customization Guide

### Colors
Edit the CSS variables in `styles.css` (lines 1-11):
```css
:root {
    --primary-bg: #0a0a0a;        /* Main background */
    --accent-color: #00ff88;      /* Neon green accent */
    --accent-secondary: #0099ff;  /* Blue accent */
    /* ... */
}
```

### Content
All content can be edited directly in `index.html`:
- Personal information in the hero section
- Story cards in the story section
- Work items in the work section
- Contact information at the bottom

### Images
Replace the image URL in `index.html` (line 62):
```html
<img src="YOUR_IMAGE_URL_HERE" alt="Grace Dice" class="hero-image">
```

### Fonts
Current fonts (can be changed in the `<head>` section):
- **Syne** - Display headings (bold, modern)
- **IBM Plex Mono** - Monospace for labels/code

To change fonts:
1. Visit [Google Fonts](https://fonts.google.com/)
2. Select your fonts
3. Replace the `<link>` tag in `index.html`
4. Update CSS variables in `styles.css`

## Browser Support

✅ Chrome (recommended)
✅ Firefox
✅ Safari
✅ Edge
✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

- Images are lazy-loaded for better performance
- Animations are GPU-accelerated using `transform` and `opacity`
- Reduced motion for users who prefer less animation
- Optimized for mobile and low-end devices

## Advanced Features

### Custom Cursor
The custom cursor follows your mouse with smooth easing. On mobile devices, it's automatically hidden.

### Scroll Animations
Elements fade and slide in as you scroll down the page using Intersection Observer API.

### Parallax Effects
- Background orbs move with mouse position
- Hero image has subtle parallax on scroll

### Smooth Navigation
Clicking nav links smoothly scrolls to sections with active state tracking.

## Troubleshooting

**Fonts not loading?**
- Check your internet connection (fonts load from Google Fonts)
- Clear browser cache and reload

**Animations not working?**
- Ensure JavaScript is enabled in your browser
- Check browser console for errors (F12)

**Image not showing?**
- Verify the image URL is correct and accessible
- Check if the image requires CORS headers

**Cursor not visible?**
- Custom cursor only appears on desktop devices
- Some browsers may require HTTPS for certain features

## Deployment

### GitHub Pages
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be live at `username.github.io/repository-name`

### Netlify (Recommended)
1. Visit [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Site goes live instantly!

### Vercel
1. Visit [vercel.com](https://vercel.com)
2. Import your project
3. Deploy with one click

## License

Free to use and modify for personal and commercial projects.

## Credits

Design inspired by high-performance racing aesthetics and modern web design trends.

Built with:
- Pure HTML5, CSS3, JavaScript (ES6+)
- Google Fonts (Syne, IBM Plex Mono)
- Modern CSS Grid & Flexbox
- Intersection Observer API
- RequestAnimationFrame for smooth animations

---

**Built with precision and intention** 💚

For questions or issues, contact: grcdice@gmail.com
# website
# website
