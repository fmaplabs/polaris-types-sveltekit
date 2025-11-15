# @fmaplabs/shopify-app-home-types

TypeScript type definitions for Shopify App Home and UI Extension web components with full SvelteKit support.

## Features

- Complete type definitions for 100+ Shopify web components
- SvelteKit `svelteHTML.IntrinsicElements` augmentation for full editor support
- JSDoc annotations with links to official Shopify documentation
- Support for both kebab-case and camelCase attribute syntax
- Custom event types (e.g., `shopify:navigate`)
- Modular imports for different extension contexts

## Installation

### npm

```bash
npm install --save-dev @fmaplabs/shopify-app-home-types
```

### yarn

```bash
yarn add -D @fmaplabs/shopify-app-home-types
```

### pnpm

```bash
pnpm add -D @fmaplabs/shopify-app-home-types
```

### bun

```bash
bun add -d @fmaplabs/shopify-app-home-types
```

## SvelteKit Integration

### Option 1: Global Types (Recommended)

Add the package to your `tsconfig.json` or `jsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["@fmaplabs/shopify-app-home-types"]
  }
}
```

This will automatically provide types for all Shopify web components across your entire project.

### Option 2: Selective Module Import

Import only the types you need in your `app.d.ts` or a dedicated types file:

```typescript
// src/app.d.ts

// For App Home components (Polaris + App Bridge)
/// <reference types="@fmaplabs/shopify-app-home-types/app-home" />

// For Admin UI Extensions
/// <reference types="@fmaplabs/shopify-app-home-types/admin-extensions" />

// For Checkout UI Extensions
/// <reference types="@fmaplabs/shopify-app-home-types/checkout-extensions" />

// For Customer Account UI Extensions
/// <reference types="@fmaplabs/shopify-app-home-types/customer-account-extensions" />
```

### Option 3: Reference in Individual Files

Add triple-slash directives at the top of specific Svelte files:

```svelte
<!-- src/routes/+page.svelte -->
<script lang="ts">
  /// <reference types="@fmaplabs/shopify-app-home-types" />

  let loading = false;
</script>

<s-page heading="My App">
  <s-button variant="primary" {loading} on:click={() => loading = true}>
    Click me
  </s-button>
</s-page>
```

## Usage Examples

### App Home Components

```svelte
<script lang="ts">
  import { onMount } from 'svelte';

  let count = 0;
</script>

<svelte:window on:shopify:navigate={(e) => {
  console.log('Navigated to:', e.detail.path);
}} />

<s-app-window>
  <s-app-nav slot="nav" />

  <s-page heading="Dashboard" subtitle="Welcome to your app">
    <s-stack vertical spacing="400">
      <s-card>
        <s-text variant="headingMd">Counter: {count}</s-text>
        <s-button-group>
          <s-button on:click={() => count++}>Increment</s-button>
          <s-button variant="secondary" on:click={() => count = 0}>Reset</s-button>
        </s-button-group>
      </s-card>

      <s-banner tone="info" title="Information">
        <s-text>This is an informational banner.</s-text>
      </s-banner>

      <s-icon name="CheckCircleIcon" tone="success" />
    </s-stack>
  </s-page>
</s-app-window>
```

### Admin Extensions

```svelte
<s-admin-action heading="Bulk Edit Products">
  <s-admin-block heading="Settings" collapsed-summary="Configure options">
    <s-stack vertical spacing="300">
      <s-text-field label="Prefix" placeholder="Enter prefix..." />
      <s-checkbox>Apply to all variants</s-checkbox>
    </s-stack>
  </s-admin-block>

  <s-button variant="primary" slot="primary-action">
    Apply Changes
  </s-button>
</s-admin-action>
```

### Checkout Extensions

```svelte
<s-stack vertical spacing="300">
  <s-consent-checkbox policy="sms-marketing">
    I agree to receive SMS marketing messages
  </s-consent-checkbox>

  <s-phone-field
    label="Phone Number"
    country-code="US"
    required
  />

  <s-map
    api-key="your-api-key"
    latitude={40.7128}
    longitude={-74.0060}
    zoom={12}
    accessibility-label="Store location"
  >
    <s-map-marker
      latitude={40.7128}
      longitude={-74.0060}
      accessibility-label="Main store"
    />
  </s-map>

  <s-modal id="terms-modal" title="Terms and Conditions">
    <s-text>Your terms here...</s-text>
  </s-modal>
</s-stack>
```

### Customer Account Extensions

```svelte
<s-customer-account-page heading="Order History" subheading="View your past orders">
  <s-customer-account-section heading="Recent Orders">
    <s-stack vertical spacing="200">
      <s-menu>
        <s-menu-item on:click={() => console.log('Filter')}>
          Filter Orders
        </s-menu-item>
        <s-menu-item on:click={() => console.log('Export')}>
          Export to CSV
        </s-menu-item>
      </s-menu>

      <s-avatar initials="JD" name="John Doe" />

      <s-button-group>
        <s-button variant="primary">View All</s-button>
        <s-button variant="secondary">Download</s-button>
      </s-button-group>
    </s-stack>
  </s-customer-account-section>
</s-customer-account-page>
```

## Available Type Modules

| Module                        | Description                 | Components                                                                         |
| ----------------------------- | --------------------------- | ---------------------------------------------------------------------------------- |
| `app-home`                    | Core App Home types         | 48+ Polaris components, 4 App Bridge components, custom events                     |
| `admin-extensions`            | Admin UI Extensions         | AdminAction, AdminBlock, AdminPrintAction, FunctionSettings, plus Polaris variants |
| `checkout-extensions`         | Checkout UI Extensions      | 58+ components including Map, Modal, Sheet, Progress, QRCode, ConsentCheckbox      |
| `customer-account-extensions` | Customer Account Extensions | 7 components including Page, Section, Avatar, Menu                                 |

## Type Features

### Attribute Syntax Support

All components support both kebab-case and camelCase attributes:

```svelte
<!-- Both are valid and typed -->
<s-text-field
  accessibility-label="Email"
  accessibilityLabel="Email"
  auto-complete="email"
  autoComplete="email"
/>
```

### Custom Events

The package includes types for Shopify custom events:

```svelte
<svelte:window
  on:shopify:navigate={(event) => {
    // event is typed as ShopifyNavigateEvent
    console.log(event.detail.path);
  }}
/>
```

### LSP Documentation

All types include JSDoc comments that appear in your editor's hover documentation:

```typescript
interface SButtonAttributes {
  /**
   * The tone of the button.
   * @see https://shopify.dev/docs/api/app-home/components/button
   */
  tone?: "critical";

  /**
   * The variant of the button.
   * @see https://shopify.dev/docs/api/app-home/components/button
   */
  variant?: "primary" | "secondary" | "tertiary" | "plain";
}
```

## TypeScript Configuration

For optimal type checking, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler",
    "types": ["@fmaplabs/shopify-app-home-types"]
  }
}
```

## Compatibility

- TypeScript 4.7+
- SvelteKit 1.0+
- Svelte 3.0+ / 4.0+ / 5.0+

## Contributing

Contributions are welcome! Please ensure any new component types include:

1. Complete attribute interfaces with JSDoc comments
2. Both kebab-case and camelCase property variants
3. Element instance types
4. `svelteHTML.IntrinsicElements` augmentation

## License

MIT
