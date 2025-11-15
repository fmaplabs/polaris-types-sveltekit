/**
 * TypeScript Type Definitions for Shopify Customer Account UI Extensions (2025-10)
 * Compatible with SvelteKit
 *
 * @packageDocumentation
 * @module ShopifyCustomerAccountUIExtensions
 */

// ============================================================================
// Customer Account UI Extension Specific Components
// ============================================================================

/**
 * CustomerAccountAction component attributes
 * Modal for completing order action flows
 * @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/customeraccountaction
 */
interface SCustomerAccountActionAttributes {
  /** Sets the heading of the action container */
  heading?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * Page component attributes
 * Outer wrapper including page title, subtitle, and page-level actions
 * @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/page
 */
interface SCustomerAccountPageAttributes {
  /** The main page heading */
  heading?: string;
  /** Unique identifier */
  id?: string;
  /** The text to be used as subheading */
  subheading?: string;
}

/**
 * Section component attributes
 * Groups related content into thematic areas with contextual styling
 * @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/section
 */
interface SCustomerAccountSectionAttributes {
  /** Screen reader label when no heading is provided (required if no heading) */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Title that describes the section content */
  heading?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * Avatar component attributes
 * Shows thumbnail representation of individual or business
 * @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/avatar
 */
interface SCustomerAccountAvatarAttributes {
  /** Alt text describing the image or user */
  alt?: string;
  /** Unique identifier */
  id?: string;
  /** Fallback initials if src fails to load */
  initials?: string;
  /** Size of the avatar */
  size?: "small" | "large" | "base" | "small-200" | "large-200";
  /** URL or path to the image */
  src?: string;
}

/**
 * ButtonGroup component attributes
 * Displays multiple buttons in contextual layout
 * @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/buttongroup
 */
interface SCustomerAccountButtonGroupAttributes {
  /** Screen reader label describing the group content */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * ImageGroup component attributes
 * Displays up to 4 images in grid or stacked layout
 * @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/imagegroup
 */
interface SCustomerAccountImageGroupAttributes {
  /** Unique identifier */
  id?: string;
  /** Total number of items to calculate remaining count */
  "total-items"?: number;
  totalItems?: number;
}

/**
 * Menu component attributes
 * Displays list of actions in a popover
 * @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/menu
 */
interface SCustomerAccountMenuAttributes {
  /** Screen reader label describing the menu purpose */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Unique identifier */
  id?: string;
}

// ============================================================================
// Button Attributes for Slots
// ============================================================================

/**
 * Button properties for use within CustomerAccountAction and Page slots
 * Restricted set of properties compared to full button
 */
interface SCustomerAccountSlotButtonAttributes {
  /** Screen reader label for the button */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Command action to take when clicked */
  command?: "--auto" | "--show" | "--hide" | "--toggle" | "--copy";
  /** ID of element to control with command */
  "command-for"?: string;
  commandFor?: string;
  /** Disables the button */
  disabled?: boolean;
  /** URL to navigate to */
  href?: string;
  /** Unique identifier */
  id?: string;
  /** Shows loading indicator */
  loading?: boolean;
  /** Where to display linked URL */
  target?: "auto" | "_self" | "_blank";
  /** Semantic tone of the button */
  tone?: "auto" | "neutral" | "critical";
  /** Button behavior type */
  type?: "button" | "submit" | "reset";
}

/**
 * Breadcrumb button properties (more restricted)
 * Used in Page breadcrumb-actions slot
 */
interface SCustomerAccountBreadcrumbButtonAttributes {
  /** Screen reader label (required since children are discarded) */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** URL to navigate to */
  href?: string;
}

// ============================================================================
// Image Component for ImageGroup
// ============================================================================

/**
 * Image component attributes for use within ImageGroup
 */
interface SCustomerAccountImageAttributes {
  /** Alt text for the image */
  alt?: string;
  /** Unique identifier */
  id?: string;
  /** Image source URL */
  src?: string;
}

// ============================================================================
// Event Types
// ============================================================================

/**
 * Callback event with typed currentTarget
 */
interface CustomerAccountCallbackEvent<T extends HTMLElement = HTMLElement> extends Event {
  currentTarget: T;
}

// ============================================================================
// SvelteKit Module Augmentation
// ============================================================================

declare namespace svelteHTML {
  interface IntrinsicElements {
    // Customer Account Extension Specific Components
    /** Customer account action modal @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/customeraccountaction */
    "s-customer-account-action": SCustomerAccountActionAttributes;
    /** Page wrapper with title and actions @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/page */
    "s-page": SCustomerAccountPageAttributes;
    /** Section container @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/section */
    "s-section": SCustomerAccountSectionAttributes;
    /** Avatar component @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/avatar */
    "s-avatar": SCustomerAccountAvatarAttributes;
    /** Button group @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/buttongroup */
    "s-button-group": SCustomerAccountButtonGroupAttributes;
    /** Image group for displaying multiple images @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/imagegroup */
    "s-image-group": SCustomerAccountImageGroupAttributes;
    /** Menu for actions @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/menu */
    "s-menu": SCustomerAccountMenuAttributes;
    /** Image component for ImageGroup @see https://shopify.dev/docs/api/customer-account-ui-extensions/components/imagegroup */
    "s-image": SCustomerAccountImageAttributes;
  }
}

export {
  // Customer Account Extension Specific
  SCustomerAccountActionAttributes,
  SCustomerAccountPageAttributes,
  SCustomerAccountSectionAttributes,
  SCustomerAccountAvatarAttributes,
  SCustomerAccountButtonGroupAttributes,
  SCustomerAccountImageGroupAttributes,
  SCustomerAccountMenuAttributes,
  SCustomerAccountImageAttributes,

  // Button Slot Attributes
  SCustomerAccountSlotButtonAttributes,
  SCustomerAccountBreadcrumbButtonAttributes,

  // Event Types
  CustomerAccountCallbackEvent,
};
