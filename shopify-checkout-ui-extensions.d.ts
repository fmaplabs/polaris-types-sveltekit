/**
 * TypeScript Type Definitions for Shopify Checkout UI Extensions (2025-10)
 * Compatible with SvelteKit
 *
 * @packageDocumentation
 * @module ShopifyCheckoutUIExtensions
 */

// ============================================================================
// Base Types
// ============================================================================

/**
 * Size units for dimensions
 */
type CheckoutSizeUnits = `${number}px` | `${number}%` | "0";

/**
 * Size with auto option
 */
type CheckoutSizeUnitsOrAuto = CheckoutSizeUnits | "auto";

/**
 * Size with none option
 */
type CheckoutSizeUnitsOrNone = CheckoutSizeUnits | "none";

/**
 * Spacing scale keywords
 */
type CheckoutSizeKeyword =
  | "none"
  | "small"
  | "small-100"
  | "small-200"
  | "base"
  | "large"
  | "large-100"
  | "large-200"
  | "large-300"
  | "large-400"
  | "large-500";

/**
 * Accessibility role options
 */
type CheckoutAccessibilityRole =
  | "main"
  | "header"
  | "footer"
  | "section"
  | "aside"
  | "navigation"
  | "ordered-list"
  | "list-item"
  | "list-item-separator"
  | "unordered-list"
  | "separator"
  | "status"
  | "alert"
  | "generic"
  | "presentation"
  | "none";

/**
 * Border radius options
 */
type CheckoutBorderRadius =
  | "none"
  | "small-100"
  | "small"
  | "base"
  | "large"
  | "large-100"
  | "max";

/**
 * Border style options
 */
type CheckoutBorderStyle = "auto" | "none" | "solid" | "dashed";

/**
 * Command action types
 */
type CheckoutCommandAction = "--auto" | "--show" | "--hide" | "--toggle" | "--copy";

// ============================================================================
// Checkout-Specific Components
// ============================================================================

/**
 * ConsentCheckbox component attributes
 * Checkbox for marketing consent with policy integration
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/consentcheckbox
 */
interface SConsentCheckboxAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Checked state */
  checked?: boolean;
  /** Command action */
  command?: CheckoutCommandAction;
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Default checked state */
  "default-checked"?: boolean;
  defaultChecked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Form field name */
  name?: string;
  /** Marketing policy type */
  policy?: "sms-marketing";
  /** Value when checked */
  value?: string;
}

/**
 * ConsentPhoneField component attributes
 * Phone input with marketing consent policy
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/consentphonefield
 */
interface SConsentPhoneFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility for screen readers */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Form field name */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Marketing policy type */
  policy?: "sms-marketing";
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Phone type */
  type?: "mobile" | "";
  /** Current value */
  value?: string;
}

/**
 * PhoneField component attributes
 * Phone number input
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/phonefield
 */
interface SPhoneFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility for screen readers */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Form field name */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Phone type */
  type?: "mobile" | "";
  /** Current value */
  value?: string;
}

/**
 * Map component attributes
 * Interactive map display
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/map
 */
interface SMapAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Google Maps API key */
  "api-key"?: string;
  apiKey?: string;
  /** Map height */
  "block-size"?: string;
  blockSize?: string;
  /** Unique identifier */
  id?: string;
  /** Map width */
  "inline-size"?: string;
  inlineSize?: string;
  /** Center latitude */
  latitude?: number;
  /** Center longitude */
  longitude?: number;
  /** Max map height */
  "max-block-size"?: string;
  maxBlockSize?: string;
  /** Max map width */
  "max-inline-size"?: string;
  maxInlineSize?: string;
  /** Maximum zoom level */
  "max-zoom"?: number;
  maxZoom?: number;
  /** Min map height */
  "min-block-size"?: string;
  minBlockSize?: string;
  /** Min map width */
  "min-inline-size"?: string;
  minInlineSize?: string;
  /** Minimum zoom level */
  "min-zoom"?: number;
  minZoom?: number;
  /** Current zoom level */
  zoom?: number;
}

/**
 * MapMarker component attributes
 * Marker for Map component
 */
interface SMapMarkerAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Marker height */
  "block-size"?: string;
  blockSize?: string;
  /** Whether marker can be clustered */
  clusterable?: boolean;
  /** Command action */
  command?: CheckoutCommandAction;
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Marker width */
  "inline-size"?: string;
  inlineSize?: string;
  /** Marker latitude */
  latitude?: number;
  /** Marker longitude */
  longitude?: number;
}

/**
 * Modal component attributes
 * Dialog overlay
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/modal
 */
interface SCheckoutModalAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Modal heading */
  heading?: string;
  /** Unique identifier */
  id?: string;
  /** Modal padding */
  padding?: "base" | "none";
  /** Modal size */
  size?: "small" | "large" | "base" | "small-100" | "large-100" | "max";
}

/**
 * Sheet component attributes
 * Slide-in panel overlay
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/sheet
 */
interface SSheetAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Whether open by default */
  "default-open"?: boolean;
  defaultOpen?: boolean;
  /** Sheet heading */
  heading?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * Progress component attributes
 * Progress indicator
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/progress
 */
interface SProgressAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Unique identifier */
  id?: string;
  /** Maximum value */
  max?: number;
  /** Semantic tone */
  tone?: "auto" | "critical";
  /** Current value */
  value?: number;
}

/**
 * QRCode component attributes
 * QR code generator
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/qrcode
 */
interface SQRCodeAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** QR code border */
  border?: "base" | "none";
  /** Data to encode */
  content?: string;
  /** Unique identifier */
  id?: string;
  /** Logo image URL */
  logo?: string;
  /** QR code size */
  size?: "base" | "fill";
}

/**
 * Announcement component attributes
 * Important announcements
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/announcement
 */
interface SAnnouncementAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * Abbreviation component attributes
 * Abbreviated text with full title
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/abbreviation
 */
interface SAbbreviationAttributes {
  /** Unique identifier */
  id?: string;
  /** Full text shown on hover */
  title?: string;
}

/**
 * Time component attributes
 * Datetime display
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/time
 */
interface STimeAttributes {
  /** Datetime value (ISO format) */
  "date-time"?: string;
  dateTime?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * PaymentIcon component attributes
 * Payment method icon
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/paymenticon
 */
interface SPaymentIconAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Unique identifier */
  id?: string;
  /** Payment method type (visa, mastercard, amex, paypal, etc.) */
  type?: string;
}

/**
 * ProductThumbnail component attributes
 * Product image with badge
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/productthumbnail
 */
interface SProductThumbnailAttributes {
  /** Alt text */
  alt?: string;
  /** Thumbnail size */
  size?: "small" | "base" | "small-100";
  /** Responsive sizes */
  sizes?: string;
  /** Image source URL */
  src?: string;
  /** Source set for responsive images */
  "src-set"?: string;
  srcSet?: string;
  /** Total items badge number */
  "total-items"?: number;
  totalItems?: number;
}

/**
 * ClipboardItem component attributes
 * Copyable text content
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/clipboarditem
 */
interface SClipboardItemAttributes {
  /** Unique identifier */
  id?: string;
  /** Text to copy */
  text?: string;
}

/**
 * Details component attributes
 * Expandable/collapsible content
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/details
 */
interface SDetailsAttributes {
  /** Default open state */
  "default-open"?: boolean;
  defaultOpen?: boolean;
  /** Unique identifier */
  id?: string;
  /** Current open state */
  open?: boolean;
  /** Toggle animation */
  "toggle-transition"?: "none" | "auto";
  toggleTransition?: "none" | "auto";
}

/**
 * Summary component attributes (for Details)
 */
interface SSummaryAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * PressButton component attributes
 * Toggle button that can be pressed
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/pressbutton
 */
interface SPressButtonAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Default pressed state */
  "default-pressed"?: boolean;
  defaultPressed?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
  /** Button width */
  "inline-size"?: "auto" | "fill" | "fit-content";
  inlineSize?: "auto" | "fill" | "fit-content";
  /** Language code */
  lang?: string;
  /** Loading state */
  loading?: boolean;
  /** Current pressed state */
  pressed?: boolean;
}

/**
 * SkeletonParagraph component attributes
 * Loading placeholder for text
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/skeletonparagraph
 */
interface SSkeletonParagraphAttributes {
  /** Skeleton content pattern */
  content?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * ScrollBox component attributes
 * Scrollable container
 * @see https://shopify.dev/docs/api/checkout-ui-extensions/components/scrollbox
 */
interface SScrollBoxAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Semantic role */
  "accessibility-role"?: CheckoutAccessibilityRole;
  accessibilityRole?: CheckoutAccessibilityRole;
  /** Visibility for a11y tree */
  "accessibility-visibility"?: "visible" | "hidden" | "exclusive";
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Background color */
  background?: "base" | "subdued" | "transparent";
  /** Block size */
  "block-size"?: string;
  blockSize?: string;
  /** Border shorthand */
  border?: string;
  /** Border color */
  "border-color"?: "" | "base";
  borderColor?: "" | "base";
  /** Border radius */
  "border-radius"?: string;
  borderRadius?: string;
  /** Border style */
  "border-style"?: string;
  borderStyle?: string;
  /** Border width */
  "border-width"?: string;
  borderWidth?: string;
  /** Display mode */
  display?: string;
  /** Unique identifier */
  id?: string;
  /** Inline size */
  "inline-size"?: string;
  inlineSize?: string;
  /** Max block size */
  "max-block-size"?: string;
  maxBlockSize?: string;
  /** Max inline size */
  "max-inline-size"?: string;
  maxInlineSize?: string;
  /** Min block size */
  "min-block-size"?: string;
  minBlockSize?: string;
  /** Min inline size */
  "min-inline-size"?: string;
  minInlineSize?: string;
  /** Overflow behavior */
  overflow?: string;
  /** Padding */
  padding?: string;
  /** Block padding */
  "padding-block"?: string;
  paddingBlock?: string;
  /** Block-end padding */
  "padding-block-end"?: string;
  paddingBlockEnd?: string;
  /** Block-start padding */
  "padding-block-start"?: string;
  paddingBlockStart?: string;
  /** Inline padding */
  "padding-inline"?: string;
  paddingInline?: string;
  /** Inline-end padding */
  "padding-inline-end"?: string;
  paddingInlineEnd?: string;
  /** Inline-start padding */
  "padding-inline-start"?: string;
  paddingInlineStart?: string;
}

// ============================================================================
// Standard Polaris Components (Checkout Variant)
// ============================================================================

/**
 * Badge component attributes for checkout
 */
interface SCheckoutBadgeAttributes {
  /** Color intensity */
  color?: "base" | "subdued";
  /** Icon type */
  icon?: string;
  /** Icon position */
  "icon-position"?: "start" | "end";
  iconPosition?: "start" | "end";
  /** Unique identifier */
  id?: string;
  /** Badge size */
  size?: "small" | "base" | "small-100";
  /** Semantic tone */
  tone?: "auto" | "neutral" | "critical";
}

/**
 * Banner component attributes for checkout
 */
interface SCheckoutBannerAttributes {
  /** Collapsible state */
  collapsible?: boolean;
  /** Dismissible state */
  dismissible?: boolean;
  /** Banner heading */
  heading?: string;
  /** Hidden state */
  hidden?: boolean;
  /** Unique identifier */
  id?: string;
  /** Semantic tone */
  tone?: "success" | "info" | "auto" | "warning" | "critical";
}

/**
 * Box component attributes for checkout
 */
interface SCheckoutBoxAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Semantic role */
  "accessibility-role"?: CheckoutAccessibilityRole;
  accessibilityRole?: CheckoutAccessibilityRole;
  /** Visibility for a11y tree */
  "accessibility-visibility"?: "visible" | "hidden" | "exclusive";
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Background color */
  background?: "base" | "subdued" | "transparent";
  /** Block size */
  "block-size"?: string;
  blockSize?: string;
  /** Border shorthand */
  border?: string;
  /** Border radius */
  "border-radius"?: string;
  borderRadius?: string;
  /** Border style */
  "border-style"?: string;
  borderStyle?: string;
  /** Border width */
  "border-width"?: string;
  borderWidth?: string;
  /** Display mode */
  display?: string;
  /** Unique identifier */
  id?: string;
  /** Inline size */
  "inline-size"?: string;
  inlineSize?: string;
  /** Max block size */
  "max-block-size"?: string;
  maxBlockSize?: string;
  /** Max inline size */
  "max-inline-size"?: string;
  maxInlineSize?: string;
  /** Min block size */
  "min-block-size"?: string;
  minBlockSize?: string;
  /** Min inline size */
  "min-inline-size"?: string;
  minInlineSize?: string;
  /** Overflow behavior */
  overflow?: string;
  /** Padding */
  padding?: string;
  /** Block padding */
  "padding-block"?: string;
  paddingBlock?: string;
  /** Block-end padding */
  "padding-block-end"?: string;
  paddingBlockEnd?: string;
  /** Block-start padding */
  "padding-block-start"?: string;
  paddingBlockStart?: string;
  /** Inline padding */
  "padding-inline"?: string;
  paddingInline?: string;
  /** Inline-end padding */
  "padding-inline-end"?: string;
  paddingInlineEnd?: string;
  /** Inline-start padding */
  "padding-inline-start"?: string;
  paddingInlineStart?: string;
}

/**
 * Button component attributes for checkout
 */
interface SCheckoutButtonAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Command action */
  command?: CheckoutCommandAction;
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Disabled state */
  disabled?: boolean;
  /** URL to navigate to */
  href?: string;
  /** Unique identifier */
  id?: string;
  /** Button width */
  "inline-size"?: "auto" | "fill" | "fit-content";
  inlineSize?: "auto" | "fill" | "fit-content";
  /** Interest target ID */
  "interest-for"?: string;
  interestFor?: string;
  /** Loading state */
  loading?: boolean;
  /** Target window */
  target?: "auto" | "_blank";
  /** Semantic tone */
  tone?: "auto" | "neutral" | "critical";
  /** Button type */
  type?: "submit" | "button";
  /** Visual variant */
  variant?: "auto" | "primary" | "secondary";
}

/**
 * Checkbox component attributes for checkout
 */
interface SCheckoutCheckboxAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Checked state */
  checked?: boolean;
  /** Command action */
  command?: CheckoutCommandAction;
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Default checked state */
  "default-checked"?: boolean;
  defaultChecked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Form field name */
  name?: string;
  /** Required field */
  required?: boolean;
  /** Value when checked */
  value?: string;
}

/**
 * Chip component attributes for checkout
 */
interface SCheckoutChipAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * ChoiceList component attributes for checkout
 */
interface SCheckoutChoiceListAttributes {
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Allow multiple selections */
  multiple?: boolean;
  /** Form field name */
  name?: string;
  /** Selected values */
  values?: string[];
  /** Layout variant */
  variant?: "auto" | "list" | "inline" | "block" | "grid";
}

/**
 * Choice component attributes
 */
interface SCheckoutChoiceAttributes {
  /** Default selected state */
  "default-selected"?: boolean;
  defaultSelected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
  /** Selected state */
  selected?: boolean;
  /** Choice value */
  value?: string;
}

/**
 * Clickable component attributes for checkout
 */
interface SCheckoutClickableAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Visibility for a11y tree */
  "accessibility-visibility"?: "visible" | "hidden" | "exclusive";
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Background color */
  background?: "base" | "subdued" | "transparent";
  /** Block size */
  "block-size"?: string;
  blockSize?: string;
  /** Border shorthand */
  border?: string;
  /** Border radius */
  "border-radius"?: string;
  borderRadius?: string;
  /** Border style */
  "border-style"?: string;
  borderStyle?: string;
  /** Border width */
  "border-width"?: string;
  borderWidth?: string;
  /** Command action */
  command?: CheckoutCommandAction;
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Display mode */
  display?: string;
  /** Unique identifier */
  id?: string;
  /** Inline size */
  "inline-size"?: string;
  inlineSize?: string;
  /** Interest target ID */
  "interest-for"?: string;
  interestFor?: string;
  /** Max block size */
  "max-block-size"?: string;
  maxBlockSize?: string;
  /** Max inline size */
  "max-inline-size"?: string;
  maxInlineSize?: string;
  /** Min block size */
  "min-block-size"?: string;
  minBlockSize?: string;
  /** Min inline size */
  "min-inline-size"?: string;
  minInlineSize?: string;
  /** Overflow behavior */
  overflow?: string;
  /** Padding */
  padding?: string;
  /** Block padding */
  "padding-block"?: string;
  paddingBlock?: string;
  /** Block-end padding */
  "padding-block-end"?: string;
  paddingBlockEnd?: string;
  /** Block-start padding */
  "padding-block-start"?: string;
  paddingBlockStart?: string;
  /** Inline padding */
  "padding-inline"?: string;
  paddingInline?: string;
  /** Inline-end padding */
  "padding-inline-end"?: string;
  paddingInlineEnd?: string;
  /** Inline-start padding */
  "padding-inline-start"?: string;
  paddingInlineStart?: string;
}

/**
 * ClickableChip component attributes for checkout
 */
interface SCheckoutClickableChipAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Hidden state */
  hidden?: boolean;
  /** URL to navigate to */
  href?: string;
  /** Unique identifier */
  id?: string;
  /** Removable state */
  removable?: boolean;
}

/**
 * DateField component attributes for checkout
 */
interface SCheckoutDateFieldAttributes {
  /** Allowed dates (YYYY-MM-DD format) */
  allow?: string;
  /** Allowed days of week */
  "allow-days"?: string;
  allowDays?: string;
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Default calendar view */
  "default-view"?: string;
  defaultView?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Disallowed dates */
  disallow?: string;
  /** Disallowed days of week */
  "disallow-days"?: string;
  disallowDays?: string;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Form field name */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Current value */
  value?: string;
  /** Current calendar view */
  view?: string;
}

/**
 * DatePicker component attributes for checkout
 */
interface SCheckoutDatePickerAttributes {
  /** Allowed dates */
  allow?: string;
  /** Allowed days */
  "allow-days"?: string;
  allowDays?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Default view */
  "default-view"?: string;
  defaultView?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Disallowed dates */
  disallow?: string;
  /** Disallowed days */
  "disallow-days"?: string;
  disallowDays?: string;
  /** Unique identifier */
  id?: string;
  /** Form field name */
  name?: string;
  /** Selection type */
  type?: "single" | "multiple" | "range";
  /** Current value */
  value?: string;
  /** Current view */
  view?: string;
}

/**
 * Divider component attributes for checkout
 */
interface SCheckoutDividerAttributes {
  /** Divider direction */
  direction?: "inline" | "block";
  /** Unique identifier */
  id?: string;
}

/**
 * DropZone component attributes for checkout
 */
interface SCheckoutDropZoneAttributes {
  /** Accepted file types */
  accept?: string;
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Allow multiple files */
  multiple?: boolean;
  /** Form field name */
  name?: string;
  /** Required field */
  required?: boolean;
  /** Current value */
  value?: string;
}

/**
 * EmailField component attributes for checkout
 */
interface SCheckoutEmailFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Max character count */
  "max-length"?: number;
  maxLength?: number;
  /** Min character count */
  "min-length"?: number;
  minLength?: number;
  /** Form field name */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Current value */
  value?: string;
}

/**
 * Form component attributes for checkout
 */
interface SCheckoutFormAttributes {
  /** Disabled state */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
}

/**
 * Grid component attributes for checkout
 */
interface SCheckoutGridAttributes extends SCheckoutBoxAttributes {
  /** Align content */
  "align-content"?: string;
  alignContent?: string;
  /** Align items */
  "align-items"?: string;
  alignItems?: string;
  /** Column gap */
  "column-gap"?: string;
  columnGap?: string;
  /** Gap between items */
  gap?: string;
  /** Grid auto columns */
  "grid-auto-columns"?: string;
  gridAutoColumns?: string;
  /** Grid auto flow */
  "grid-auto-flow"?: string;
  gridAutoFlow?: string;
  /** Grid auto rows */
  "grid-auto-rows"?: string;
  gridAutoRows?: string;
  /** Grid template columns */
  "grid-template-columns"?: string;
  gridTemplateColumns?: string;
  /** Grid template rows */
  "grid-template-rows"?: string;
  gridTemplateRows?: string;
  /** Justify content */
  "justify-content"?: string;
  justifyContent?: string;
  /** Justify items */
  "justify-items"?: string;
  justifyItems?: string;
  /** Row gap */
  "row-gap"?: string;
  rowGap?: string;
}

/**
 * GridItem component attributes
 */
interface SCheckoutGridItemAttributes {
  /** Grid column */
  "grid-column"?: string;
  gridColumn?: string;
  /** Grid row */
  "grid-row"?: string;
  gridRow?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * Heading component attributes for checkout
 */
interface SCheckoutHeadingAttributes {
  /** Semantic role */
  "accessibility-role"?: "heading" | "none" | "presentation";
  accessibilityRole?: "heading" | "none" | "presentation";
  /** Unique identifier */
  id?: string;
}

/**
 * Icon component attributes for checkout
 */
interface SCheckoutIconAttributes {
  /** Unique identifier */
  id?: string;
  /** Icon size */
  size?: "small" | "large" | "base" | "small-200" | "small-100" | "large-100";
  /** Semantic tone */
  tone?: "custom" | "success" | "info" | "auto" | "neutral" | "warning" | "critical";
  /** Icon type */
  type?: string;
}

/**
 * Image component attributes for checkout
 */
interface SCheckoutImageAttributes {
  /** Semantic role */
  "accessibility-role"?: "img" | "none" | "presentation";
  accessibilityRole?: "img" | "none" | "presentation";
  /** Alt text */
  alt?: string;
  /** Aspect ratio */
  "aspect-ratio"?: string;
  aspectRatio?: string;
  /** Border shorthand */
  border?: string;
  /** Border radius */
  "border-radius"?: string;
  borderRadius?: string;
  /** Border style */
  "border-style"?: string;
  borderStyle?: string;
  /** Border width */
  "border-width"?: string;
  borderWidth?: string;
  /** Unique identifier */
  id?: string;
  /** Image width */
  "inline-size"?: string;
  inlineSize?: string;
  /** Loading behavior */
  loading?: "auto" | "lazy";
  /** Object fit */
  "object-fit"?: "contain" | "cover" | "fill" | "scale-down";
  objectFit?: "contain" | "cover" | "fill" | "scale-down";
  /** Responsive sizes */
  sizes?: string;
  /** Image source URL */
  src?: string;
  /** Source set */
  "src-set"?: string;
  srcSet?: string;
}

/**
 * Link component attributes for checkout
 */
interface SCheckoutLinkAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Command action */
  command?: CheckoutCommandAction;
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** URL to navigate to */
  href?: string;
  /** Unique identifier */
  id?: string;
  /** Interest target ID */
  "interest-for"?: string;
  interestFor?: string;
  /** Language code */
  lang?: string;
  /** Target window */
  target?: "auto" | "_blank";
  /** Semantic tone */
  tone?: "auto" | "neutral";
}

/**
 * MoneyField component attributes for checkout
 */
interface SCheckoutMoneyFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Maximum value */
  max?: number;
  /** Minimum value */
  min?: number;
  /** Form field name */
  name?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Step increment */
  step?: number;
  /** Current value */
  value?: string;
}

/**
 * NumberField component attributes for checkout
 */
interface SCheckoutNumberFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Control type */
  controls?: "auto" | "stepper" | "none";
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Icon type */
  icon?: string;
  /** Unique identifier */
  id?: string;
  /** Input mode */
  "input-mode"?: "decimal" | "numeric";
  inputMode?: "decimal" | "numeric";
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Maximum value */
  max?: number;
  /** Minimum value */
  min?: number;
  /** Form field name */
  name?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Step increment */
  step?: number;
  /** Current value */
  value?: string;
}

/**
 * OrderedList component attributes for checkout
 */
interface SCheckoutOrderedListAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * ListItem component attributes
 */
interface SCheckoutListItemAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * Paragraph component attributes for checkout
 */
interface SCheckoutParagraphAttributes {
  /** Visibility for a11y tree */
  "accessibility-visibility"?: "visible" | "hidden" | "exclusive";
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Text color */
  color?: "base" | "subdued";
  /** Text direction */
  dir?: "ltr" | "rtl" | "auto" | "";
  /** Unique identifier */
  id?: string;
  /** Language code */
  lang?: string;
  /** Semantic tone */
  tone?: "custom" | "success" | "info" | "auto" | "neutral" | "warning" | "critical";
  /** Paragraph type */
  type?: "paragraph" | "small";
}

/**
 * PasswordField component attributes for checkout
 */
interface SCheckoutPasswordFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Max character count */
  "max-length"?: number;
  maxLength?: number;
  /** Min character count */
  "min-length"?: number;
  minLength?: number;
  /** Form field name */
  name?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Current value */
  value?: string;
}

/**
 * Popover component attributes for checkout
 */
interface SCheckoutPopoverAttributes {
  /** Block size */
  "block-size"?: string;
  blockSize?: string;
  /** Unique identifier */
  id?: string;
  /** Inline size */
  "inline-size"?: string;
  inlineSize?: string;
  /** Max block size */
  "max-block-size"?: string;
  maxBlockSize?: string;
  /** Max inline size */
  "max-inline-size"?: string;
  maxInlineSize?: string;
  /** Min block size */
  "min-block-size"?: string;
  minBlockSize?: string;
  /** Min inline size */
  "min-inline-size"?: string;
  minInlineSize?: string;
}

/**
 * QueryContainer component attributes for checkout
 */
interface SCheckoutQueryContainerAttributes {
  /** Container name */
  "container-name"?: string;
  containerName?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * Section component attributes for checkout
 */
interface SCheckoutSectionAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Section heading */
  heading?: string;
  /** Unique identifier */
  id?: string;
}

/**
 * Select component attributes for checkout
 */
interface SCheckoutSelectAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Form field name */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Required field */
  required?: boolean;
  /** Selected value */
  value?: string;
}

/**
 * Option component attributes
 */
interface SCheckoutOptionAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Default selected state */
  "default-selected"?: boolean;
  defaultSelected?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
  /** Selected state */
  selected?: boolean;
  /** Option value */
  value?: string;
}

/**
 * Spinner component attributes for checkout
 */
interface SCheckoutSpinnerAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Unique identifier */
  id?: string;
  /** Spinner size */
  size?: "small" | "large" | "base" | "small-100" | "large-100";
}

/**
 * Stack component attributes for checkout
 */
interface SCheckoutStackAttributes extends SCheckoutBoxAttributes {
  /** Align content */
  "align-content"?: string;
  alignContent?: string;
  /** Align items */
  "align-items"?: string;
  alignItems?: string;
  /** Column gap */
  "column-gap"?: string;
  columnGap?: string;
  /** Stack direction */
  direction?: "inline" | "block" | string;
  /** Gap between items */
  gap?: string;
  /** Justify content */
  "justify-content"?: string;
  justifyContent?: string;
  /** Row gap */
  "row-gap"?: string;
  rowGap?: string;
}

/**
 * Switch component attributes for checkout
 */
interface SCheckoutSwitchAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** On state */
  checked?: boolean;
  /** Command action */
  command?: CheckoutCommandAction;
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Default on state */
  "default-checked"?: boolean;
  defaultChecked?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Form field name */
  name?: string;
  /** Value when checked */
  value?: string;
}

/**
 * Text component attributes for checkout
 */
interface SCheckoutTextAttributes {
  /** Visibility for a11y tree */
  "accessibility-visibility"?: "visible" | "hidden" | "exclusive";
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Text color */
  color?: "base" | "subdued";
  /** Text direction */
  dir?: "ltr" | "rtl" | "auto" | "";
  /** Display mode */
  display?: string;
  /** Unique identifier */
  id?: string;
  /** Language code */
  lang?: string;
  /** Semantic tone */
  tone?: "custom" | "success" | "info" | "auto" | "neutral" | "warning" | "critical";
  /** Text type */
  type?: "small" | "address" | "mark" | "strong" | "generic" | "redundant" | "emphasis" | "offset";
}

/**
 * TextArea component attributes for checkout
 */
interface SCheckoutTextAreaAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Max character count */
  "max-length"?: number;
  maxLength?: number;
  /** Min character count */
  "min-length"?: number;
  minLength?: number;
  /** Form field name */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Number of rows */
  rows?: number;
  /** Current value */
  value?: string;
}

/**
 * TextField component attributes for checkout
 */
interface SCheckoutTextFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Icon type */
  icon?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Max character count */
  "max-length"?: number;
  maxLength?: number;
  /** Min character count */
  "min-length"?: number;
  minLength?: number;
  /** Form field name */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Text before input */
  prefix?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Text after input */
  suffix?: string;
  /** Input type */
  type?: "text" | "email" | "password" | "search" | "tel" | "url";
  /** Current value */
  value?: string;
}

/**
 * Tooltip component attributes for checkout
 */
interface SCheckoutTooltipAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * UnorderedList component attributes for checkout
 */
interface SCheckoutUnorderedListAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * URLField component attributes for checkout
 */
interface SCheckoutURLFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility */
  "label-accessibility-visibility"?: "visible" | "exclusive";
  labelAccessibilityVisibility?: "visible" | "exclusive";
  /** Max character count */
  "max-length"?: number;
  maxLength?: number;
  /** Min character count */
  "min-length"?: number;
  minLength?: number;
  /** Form field name */
  name?: string;
  /** Read-only state */
  "read-only"?: boolean;
  readOnly?: boolean;
  /** Required field */
  required?: boolean;
  /** Current value */
  value?: string;
}

// ============================================================================
// Event Types
// ============================================================================

/**
 * Callback event with typed currentTarget
 */
interface CheckoutCallbackEvent<T extends HTMLElement = HTMLElement> extends Event {
  currentTarget: T;
}

/**
 * Map bounds change event
 */
interface CheckoutMapBoundsChangeEvent extends Event {
  /** New map bounds */
  detail: {
    north: number;
    south: number;
    east: number;
    west: number;
  };
}

/**
 * Map view change event
 */
interface CheckoutMapViewChangeEvent extends Event {
  /** New map view */
  detail: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
}

// ============================================================================
// SvelteKit Module Augmentation
// ============================================================================

declare namespace svelteHTML {
  interface IntrinsicElements {
    // Checkout-Specific Components
    /** Marketing consent checkbox @see https://shopify.dev/docs/api/checkout-ui-extensions/components/consentcheckbox */
    "s-consent-checkbox": SConsentCheckboxAttributes;
    /** Marketing consent phone field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/consentphonefield */
    "s-consent-phone-field": SConsentPhoneFieldAttributes;
    /** Phone number input @see https://shopify.dev/docs/api/checkout-ui-extensions/components/phonefield */
    "s-phone-field": SPhoneFieldAttributes;
    /** Interactive map @see https://shopify.dev/docs/api/checkout-ui-extensions/components/map */
    "s-map": SMapAttributes;
    /** Map marker @see https://shopify.dev/docs/api/checkout-ui-extensions/components/map */
    "s-map-marker": SMapMarkerAttributes;
    /** Modal dialog @see https://shopify.dev/docs/api/checkout-ui-extensions/components/modal */
    "s-modal": SCheckoutModalAttributes;
    /** Sheet panel @see https://shopify.dev/docs/api/checkout-ui-extensions/components/sheet */
    "s-sheet": SSheetAttributes;
    /** Progress indicator @see https://shopify.dev/docs/api/checkout-ui-extensions/components/progress */
    "s-progress": SProgressAttributes;
    /** QR code generator @see https://shopify.dev/docs/api/checkout-ui-extensions/components/qrcode */
    "s-qr-code": SQRCodeAttributes;
    /** Announcement @see https://shopify.dev/docs/api/checkout-ui-extensions/components/announcement */
    "s-announcement": SAnnouncementAttributes;
    /** Abbreviated text @see https://shopify.dev/docs/api/checkout-ui-extensions/components/abbreviation */
    "s-abbreviation": SAbbreviationAttributes;
    /** Time display @see https://shopify.dev/docs/api/checkout-ui-extensions/components/time */
    "s-time": STimeAttributes;
    /** Payment method icon @see https://shopify.dev/docs/api/checkout-ui-extensions/components/paymenticon */
    "s-payment-icon": SPaymentIconAttributes;
    /** Product thumbnail @see https://shopify.dev/docs/api/checkout-ui-extensions/components/productthumbnail */
    "s-product-thumbnail": SProductThumbnailAttributes;
    /** Copyable content @see https://shopify.dev/docs/api/checkout-ui-extensions/components/clipboarditem */
    "s-clipboard-item": SClipboardItemAttributes;
    /** Expandable content @see https://shopify.dev/docs/api/checkout-ui-extensions/components/details */
    "s-details": SDetailsAttributes;
    /** Summary for Details @see https://shopify.dev/docs/api/checkout-ui-extensions/components/details */
    "s-summary": SSummaryAttributes;
    /** Toggle button @see https://shopify.dev/docs/api/checkout-ui-extensions/components/pressbutton */
    "s-press-button": SPressButtonAttributes;
    /** Loading skeleton @see https://shopify.dev/docs/api/checkout-ui-extensions/components/skeletonparagraph */
    "s-skeleton-paragraph": SSkeletonParagraphAttributes;
    /** Scrollable container @see https://shopify.dev/docs/api/checkout-ui-extensions/components/scrollbox */
    "s-scroll-box": SScrollBoxAttributes;

    // Standard Components
    /** Badge @see https://shopify.dev/docs/api/checkout-ui-extensions/components/badge */
    "s-badge": SCheckoutBadgeAttributes;
    /** Banner @see https://shopify.dev/docs/api/checkout-ui-extensions/components/banner */
    "s-banner": SCheckoutBannerAttributes;
    /** Box container @see https://shopify.dev/docs/api/checkout-ui-extensions/components/box */
    "s-box": SCheckoutBoxAttributes;
    /** Button @see https://shopify.dev/docs/api/checkout-ui-extensions/components/button */
    "s-button": SCheckoutButtonAttributes;
    /** Checkbox @see https://shopify.dev/docs/api/checkout-ui-extensions/components/checkbox */
    "s-checkbox": SCheckoutCheckboxAttributes;
    /** Chip @see https://shopify.dev/docs/api/checkout-ui-extensions/components/chip */
    "s-chip": SCheckoutChipAttributes;
    /** Choice list @see https://shopify.dev/docs/api/checkout-ui-extensions/components/choicelist */
    "s-choice-list": SCheckoutChoiceListAttributes;
    /** Choice @see https://shopify.dev/docs/api/checkout-ui-extensions/components/choicelist */
    "s-choice": SCheckoutChoiceAttributes;
    /** Clickable container @see https://shopify.dev/docs/api/checkout-ui-extensions/components/clickable */
    "s-clickable": SCheckoutClickableAttributes;
    /** Clickable chip @see https://shopify.dev/docs/api/checkout-ui-extensions/components/clickablechip */
    "s-clickable-chip": SCheckoutClickableChipAttributes;
    /** Date field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/datefield */
    "s-date-field": SCheckoutDateFieldAttributes;
    /** Date picker @see https://shopify.dev/docs/api/checkout-ui-extensions/components/datepicker */
    "s-date-picker": SCheckoutDatePickerAttributes;
    /** Divider @see https://shopify.dev/docs/api/checkout-ui-extensions/components/divider */
    "s-divider": SCheckoutDividerAttributes;
    /** Drop zone @see https://shopify.dev/docs/api/checkout-ui-extensions/components/dropzone */
    "s-drop-zone": SCheckoutDropZoneAttributes;
    /** Email field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/emailfield */
    "s-email-field": SCheckoutEmailFieldAttributes;
    /** Form @see https://shopify.dev/docs/api/checkout-ui-extensions/components/form */
    "s-form": SCheckoutFormAttributes;
    /** Grid @see https://shopify.dev/docs/api/checkout-ui-extensions/components/grid */
    "s-grid": SCheckoutGridAttributes;
    /** Grid item @see https://shopify.dev/docs/api/checkout-ui-extensions/components/grid */
    "s-grid-item": SCheckoutGridItemAttributes;
    /** Heading @see https://shopify.dev/docs/api/checkout-ui-extensions/components/heading */
    "s-heading": SCheckoutHeadingAttributes;
    /** Icon @see https://shopify.dev/docs/api/checkout-ui-extensions/components/icon */
    "s-icon": SCheckoutIconAttributes;
    /** Image @see https://shopify.dev/docs/api/checkout-ui-extensions/components/image */
    "s-image": SCheckoutImageAttributes;
    /** Link @see https://shopify.dev/docs/api/checkout-ui-extensions/components/link */
    "s-link": SCheckoutLinkAttributes;
    /** Money field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/moneyfield */
    "s-money-field": SCheckoutMoneyFieldAttributes;
    /** Number field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/numberfield */
    "s-number-field": SCheckoutNumberFieldAttributes;
    /** Ordered list @see https://shopify.dev/docs/api/checkout-ui-extensions/components/orderedlist */
    "s-ordered-list": SCheckoutOrderedListAttributes;
    /** List item @see https://shopify.dev/docs/api/checkout-ui-extensions/components/orderedlist */
    "s-list-item": SCheckoutListItemAttributes;
    /** Paragraph @see https://shopify.dev/docs/api/checkout-ui-extensions/components/paragraph */
    "s-paragraph": SCheckoutParagraphAttributes;
    /** Password field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/passwordfield */
    "s-password-field": SCheckoutPasswordFieldAttributes;
    /** Popover @see https://shopify.dev/docs/api/checkout-ui-extensions/components/popover */
    "s-popover": SCheckoutPopoverAttributes;
    /** Query container @see https://shopify.dev/docs/api/checkout-ui-extensions/components/querycontainer */
    "s-query-container": SCheckoutQueryContainerAttributes;
    /** Section @see https://shopify.dev/docs/api/checkout-ui-extensions/components/section */
    "s-section": SCheckoutSectionAttributes;
    /** Select @see https://shopify.dev/docs/api/checkout-ui-extensions/components/select */
    "s-select": SCheckoutSelectAttributes;
    /** Option @see https://shopify.dev/docs/api/checkout-ui-extensions/components/select */
    "s-option": SCheckoutOptionAttributes;
    /** Spinner @see https://shopify.dev/docs/api/checkout-ui-extensions/components/spinner */
    "s-spinner": SCheckoutSpinnerAttributes;
    /** Stack @see https://shopify.dev/docs/api/checkout-ui-extensions/components/stack */
    "s-stack": SCheckoutStackAttributes;
    /** Switch @see https://shopify.dev/docs/api/checkout-ui-extensions/components/switch */
    "s-switch": SCheckoutSwitchAttributes;
    /** Text @see https://shopify.dev/docs/api/checkout-ui-extensions/components/text */
    "s-text": SCheckoutTextAttributes;
    /** Text area @see https://shopify.dev/docs/api/checkout-ui-extensions/components/textarea */
    "s-text-area": SCheckoutTextAreaAttributes;
    /** Text field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/textfield */
    "s-text-field": SCheckoutTextFieldAttributes;
    /** Tooltip @see https://shopify.dev/docs/api/checkout-ui-extensions/components/tooltip */
    "s-tooltip": SCheckoutTooltipAttributes;
    /** Unordered list @see https://shopify.dev/docs/api/checkout-ui-extensions/components/unorderedlist */
    "s-unordered-list": SCheckoutUnorderedListAttributes;
    /** URL field @see https://shopify.dev/docs/api/checkout-ui-extensions/components/urlfield */
    "s-url-field": SCheckoutURLFieldAttributes;
  }
}

export {
  // Base Types
  CheckoutSizeUnits,
  CheckoutSizeUnitsOrAuto,
  CheckoutSizeUnitsOrNone,
  CheckoutSizeKeyword,
  CheckoutAccessibilityRole,
  CheckoutBorderRadius,
  CheckoutBorderStyle,
  CheckoutCommandAction,

  // Checkout-Specific Components
  SConsentCheckboxAttributes,
  SConsentPhoneFieldAttributes,
  SPhoneFieldAttributes,
  SMapAttributes,
  SMapMarkerAttributes,
  SCheckoutModalAttributes,
  SSheetAttributes,
  SProgressAttributes,
  SQRCodeAttributes,
  SAnnouncementAttributes,
  SAbbreviationAttributes,
  STimeAttributes,
  SPaymentIconAttributes,
  SProductThumbnailAttributes,
  SClipboardItemAttributes,
  SDetailsAttributes,
  SSummaryAttributes,
  SPressButtonAttributes,
  SSkeletonParagraphAttributes,
  SScrollBoxAttributes,

  // Standard Components
  SCheckoutBadgeAttributes,
  SCheckoutBannerAttributes,
  SCheckoutBoxAttributes,
  SCheckoutButtonAttributes,
  SCheckoutCheckboxAttributes,
  SCheckoutChipAttributes,
  SCheckoutChoiceListAttributes,
  SCheckoutChoiceAttributes,
  SCheckoutClickableAttributes,
  SCheckoutClickableChipAttributes,
  SCheckoutDateFieldAttributes,
  SCheckoutDatePickerAttributes,
  SCheckoutDividerAttributes,
  SCheckoutDropZoneAttributes,
  SCheckoutEmailFieldAttributes,
  SCheckoutFormAttributes,
  SCheckoutGridAttributes,
  SCheckoutGridItemAttributes,
  SCheckoutHeadingAttributes,
  SCheckoutIconAttributes,
  SCheckoutImageAttributes,
  SCheckoutLinkAttributes,
  SCheckoutMoneyFieldAttributes,
  SCheckoutNumberFieldAttributes,
  SCheckoutOrderedListAttributes,
  SCheckoutListItemAttributes,
  SCheckoutParagraphAttributes,
  SCheckoutPasswordFieldAttributes,
  SCheckoutPopoverAttributes,
  SCheckoutQueryContainerAttributes,
  SCheckoutSectionAttributes,
  SCheckoutSelectAttributes,
  SCheckoutOptionAttributes,
  SCheckoutSpinnerAttributes,
  SCheckoutStackAttributes,
  SCheckoutSwitchAttributes,
  SCheckoutTextAttributes,
  SCheckoutTextAreaAttributes,
  SCheckoutTextFieldAttributes,
  SCheckoutTooltipAttributes,
  SCheckoutUnorderedListAttributes,
  SCheckoutURLFieldAttributes,

  // Event Types
  CheckoutCallbackEvent,
  CheckoutMapBoundsChangeEvent,
  CheckoutMapViewChangeEvent,
};
