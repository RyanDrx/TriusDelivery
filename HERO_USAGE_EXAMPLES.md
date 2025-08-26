# Hero Component Usage Examples

The new `Hero.astro` component is extremely flexible and can be used on any page with customizable content, backgrounds, and overlays.

## Basic Usage

```astro
---
import Hero from '@components/Hero.astro';
---

<Hero>
    <h1 class="text-5xl font-bold text-white mb-6">About Trius</h1>
    <p class="text-xl text-white/90 max-w-2xl">
        Your trusted medical courier service since 2025.
    </p>
</Hero>
```

## With Background Image

```astro
<Hero 
    backgroundImage="/images/medical-courier-truck.jpg"
    overlayClass="bg-primary/60"
>
    <div class="text-center">
        <h1 class="text-6xl font-black text-white mb-8">Our Services</h1>
        <p class="text-2xl text-white/90 mb-8">
            Professional medical logistics you can trust
        </p>
        <button class="btn btn-secondary btn-lg">
            Learn More
        </button>
    </div>
</Hero>
```

## Custom Overlay & Height

```astro
<Hero 
    backgroundImage="/Banner/TRIUS_BANNER.webp"
    overlayClass="bg-gradient-to-r from-primary/80 via-transparent to-secondary/60"
    minHeight="min-h-[80vh]"
    class="relative"
>
    <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <h1 class="text-4xl lg:text-6xl font-black text-white mb-6">
                Emergency STAT Delivery
            </h1>
            <p class="text-xl text-white/90 mb-8">
                24/7 emergency medical courier services when every minute counts.
            </p>
        </div>
        <div class="text-center">
            <div class="bg-accent/20 backdrop-blur-sm rounded-3xl p-8">
                <h3 class="text-2xl font-bold text-white mb-4">Call Now</h3>
                <a href="tel:1-800-TRIUS-911" class="text-3xl font-black text-accent">
                    1-800-TRIUS-911
                </a>
            </div>
        </div>
    </div>
</Hero>
```

## No Background Image (Pattern Only)

```astro
<Hero 
    showOverlay={false}
    class="bg-gradient-to-br from-slate-50 via-primary/5 to-secondary/5"
>
    <div class="text-center">
        <h1 class="text-5xl font-bold text-neutral-dark mb-6">Contact Us</h1>
        <p class="text-xl text-neutral max-w-2xl mx-auto">
            Ready to improve your medical logistics? Get in touch today.
        </p>
    </div>
</Hero>
```

## Compact Hero

```astro
<Hero 
    minHeight="min-h-[40vh]"
    centerContent={false}
    class="bg-primary"
>
    <div class="pt-8">
        <nav class="text-white/80 mb-4">
            <a href="/">Home</a> / <span class="text-white">About</span>
        </nav>
        <h1 class="text-4xl font-bold text-white">About Trius</h1>
    </div>
</Hero>
```

## Parameters

- `backgroundImage`: URL to background image
- `showOverlay`: Boolean to show/hide overlay (default: true)
- `overlayClass`: CSS classes for overlay styling (default: 'bg-black/40')
- `class`: Additional CSS classes for the hero container
- `minHeight`: Minimum height (default: 'min-h-[60vh]')
- `centerContent`: Whether to center content vertically (default: true)
- Plus any additional HTML attributes

## Features

✅ **Flexible Content**: Pass any content via slots
✅ **Background Images**: Support for any image URL
✅ **Custom Overlays**: Full control over overlay styling
✅ **Responsive**: Mobile-optimized with performance considerations
✅ **Accessible**: Reduced motion and high contrast support
✅ **Theme Integration**: Works with your design system colors
