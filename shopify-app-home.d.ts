/**
 * TypeScript Type Definitions for Shopify App Home Web Components
 * Compatible with SvelteKit
 *
 * @packageDocumentation
 * @module ShopifyAppHome
 */

// ============================================================================
// Base Types and Common Interfaces
// ============================================================================

/**
 * Polaris icon names
 * @see https://shopify.dev/docs/api/app-home/polaris-components/icon
 */
type PolarisIconName =
  | ""
  | "replace"
  | "search"
  | "split"
  | "link"
  | "edit"
  | "product"
  | "variant"
  | "collection"
  | "select"
  | "info"
  | "incomplete"
  | "complete"
  | "color"
  | "money"
  | "adjust"
  | "affiliate"
  | "airplane"
  | "alert-bubble"
  | "alert-circle"
  | "alert-diamond"
  | "alert-location"
  | "alert-octagon"
  | "alert-octagon-filled"
  | "alert-triangle"
  | "alert-triangle-filled"
  | "app-extension"
  | "apps"
  | "archive"
  | "arrow-down"
  | "arrow-down-circle"
  | "arrow-down-right"
  | "arrow-left"
  | "arrow-left-circle"
  | "arrow-right"
  | "arrow-right-circle"
  | "arrow-up"
  | "arrow-up-circle"
  | "arrow-up-right"
  | "arrows-in-horizontal"
  | "arrows-out-horizontal"
  | "asterisk"
  | "attachment"
  | "automation"
  | "backspace"
  | "bag"
  | "bank"
  | "barcode"
  | "battery-low"
  | "bill"
  | "blank"
  | "blog"
  | "bolt"
  | "bolt-filled"
  | "book"
  | "book-open"
  | "bug"
  | "bullet"
  | "business-entity"
  | "button"
  | "button-press"
  | "calculator"
  | "calendar"
  | "calendar-check"
  | "calendar-compare"
  | "calendar-list"
  | "calendar-time"
  | "camera"
  | "camera-flip"
  | "caret-down"
  | "caret-left"
  | "caret-right"
  | "caret-up"
  | "cart"
  | "cart-abandoned"
  | "cart-discount"
  | "cart-down"
  | "cart-filled"
  | "cart-sale"
  | "cart-send"
  | "cart-up"
  | "cash-dollar"
  | "cash-euro"
  | "cash-pound"
  | "cash-rupee"
  | "cash-yen"
  | "catalog-product"
  | "categories"
  | "channels"
  | "chart-cohort"
  | "chart-donut"
  | "chart-funnel"
  | "chart-histogram-first"
  | "chart-histogram-first-last"
  | "chart-histogram-flat"
  | "chart-histogram-full"
  | "chart-histogram-growth"
  | "chart-histogram-last"
  | "chart-histogram-second-last"
  | "chart-horizontal"
  | "chart-line"
  | "chart-popular"
  | "chart-stacked"
  | "chart-vertical"
  | "chat"
  | "chat-new"
  | "chat-referral"
  | "check"
  | "check-circle"
  | "check-circle-filled"
  | "checkbox"
  | "chevron-down"
  | "chevron-down-circle"
  | "chevron-left"
  | "chevron-left-circle"
  | "chevron-right"
  | "chevron-right-circle"
  | "chevron-up"
  | "chevron-up-circle"
  | "circle"
  | "circle-dashed"
  | "clipboard"
  | "clipboard-check"
  | "clipboard-checklist"
  | "clock"
  | "clock-list"
  | "clock-revert"
  | "code"
  | "code-add"
  | "collection-featured"
  | "collection-list"
  | "collection-reference"
  | "color-none"
  | "compass"
  | "compose"
  | "confetti"
  | "connect"
  | "content"
  | "contract"
  | "corner-pill"
  | "corner-round"
  | "corner-square"
  | "credit-card"
  | "credit-card-cancel"
  | "credit-card-percent"
  | "credit-card-reader"
  | "credit-card-reader-chip"
  | "credit-card-reader-tap"
  | "credit-card-secure"
  | "credit-card-tap-chip"
  | "crop"
  | "currency-convert"
  | "cursor"
  | "cursor-banner"
  | "cursor-option"
  | "data-presentation"
  | "data-table"
  | "database"
  | "database-add"
  | "database-connect"
  | "delete"
  | "delivered"
  | "delivery"
  | "desktop"
  | "disabled"
  | "disabled-filled"
  | "discount"
  | "discount-add"
  | "discount-automatic"
  | "discount-code"
  | "discount-remove"
  | "dns-settings"
  | "dock-floating"
  | "dock-side"
  | "domain"
  | "domain-landing-page"
  | "domain-new"
  | "domain-redirect"
  | "download"
  | "drag-drop"
  | "drag-handle"
  | "drawer"
  | "duplicate"
  | "email"
  | "email-follow-up"
  | "email-newsletter"
  | "empty"
  | "enabled"
  | "enter"
  | "envelope"
  | "envelope-soft-pack"
  | "eraser"
  | "exchange"
  | "exit"
  | "export"
  | "external"
  | "eye-check-mark"
  | "eye-dropper"
  | "eye-dropper-list"
  | "eye-first"
  | "eyeglasses"
  | "fav"
  | "favicon"
  | "file"
  | "file-list"
  | "filter"
  | "filter-active"
  | "flag"
  | "flip-horizontal"
  | "flip-vertical"
  | "flower"
  | "folder"
  | "folder-add"
  | "folder-down"
  | "folder-remove"
  | "folder-up"
  | "food"
  | "foreground"
  | "forklift"
  | "forms"
  | "games"
  | "gauge"
  | "geolocation"
  | "gift"
  | "gift-card"
  | "git-branch"
  | "git-commit"
  | "git-repository"
  | "globe"
  | "globe-asia"
  | "globe-europe"
  | "globe-lines"
  | "globe-list"
  | "graduation-hat"
  | "grid"
  | "hashtag"
  | "hashtag-decimal"
  | "hashtag-list"
  | "heart"
  | "hide"
  | "hide-filled"
  | "home"
  | "home-filled"
  | "icons"
  | "identity-card"
  | "image"
  | "image-add"
  | "image-alt"
  | "image-explore"
  | "image-magic"
  | "image-none"
  | "image-with-text-overlay"
  | "images"
  | "import"
  | "in-progress"
  | "incentive"
  | "incoming"
  | "info-filled"
  | "inheritance"
  | "inventory"
  | "inventory-edit"
  | "inventory-list"
  | "inventory-transfer"
  | "inventory-updated"
  | "iq"
  | "key"
  | "keyboard"
  | "keyboard-filled"
  | "keyboard-hide"
  | "keypad"
  | "label-printer"
  | "language"
  | "language-translate"
  | "layout-block"
  | "layout-buy-button"
  | "layout-buy-button-horizontal"
  | "layout-buy-button-vertical"
  | "layout-column-1"
  | "layout-columns-2"
  | "layout-columns-3"
  | "layout-footer"
  | "layout-header"
  | "layout-logo-block"
  | "layout-popup"
  | "layout-rows-2"
  | "layout-section"
  | "layout-sidebar-left"
  | "layout-sidebar-right"
  | "lightbulb"
  | "link-list"
  | "list-bulleted"
  | "list-bulleted-filled"
  | "list-numbered"
  | "live"
  | "live-critical"
  | "live-none"
  | "location"
  | "location-none"
  | "lock"
  | "map"
  | "markets"
  | "markets-euro"
  | "markets-rupee"
  | "markets-yen"
  | "maximize"
  | "measurement-size"
  | "measurement-size-list"
  | "measurement-volume"
  | "measurement-volume-list"
  | "measurement-weight"
  | "measurement-weight-list"
  | "media-receiver"
  | "megaphone"
  | "mention"
  | "menu"
  | "menu-filled"
  | "menu-horizontal"
  | "menu-vertical"
  | "merge"
  | "metafields"
  | "metaobject"
  | "metaobject-list"
  | "metaobject-reference"
  | "microphone"
  | "microphone-muted"
  | "minimize"
  | "minus"
  | "minus-circle"
  | "mobile"
  | "money-none"
  | "money-split"
  | "moon"
  | "nature"
  | "note"
  | "note-add"
  | "notification"
  | "number-one"
  | "order"
  | "order-batches"
  | "order-draft"
  | "order-filled"
  | "order-first"
  | "order-fulfilled"
  | "order-repeat"
  | "order-unfulfilled"
  | "orders-status"
  | "organization"
  | "outdent"
  | "outgoing"
  | "package"
  | "package-cancel"
  | "package-fulfilled"
  | "package-on-hold"
  | "package-reassign"
  | "package-returned"
  | "page"
  | "page-add"
  | "page-attachment"
  | "page-clock"
  | "page-down"
  | "page-heart"
  | "page-list"
  | "page-reference"
  | "page-remove"
  | "page-report"
  | "page-up"
  | "pagination-end"
  | "pagination-start"
  | "paint-brush-flat"
  | "paint-brush-round"
  | "paper-check"
  | "partially-complete"
  | "passkey"
  | "paste"
  | "pause-circle"
  | "payment"
  | "payment-capture"
  | "payout"
  | "payout-dollar"
  | "payout-euro"
  | "payout-pound"
  | "payout-rupee"
  | "payout-yen"
  | "person"
  | "person-add"
  | "person-exit"
  | "person-filled"
  | "person-list"
  | "person-lock"
  | "person-remove"
  | "person-segment"
  | "personalized-text"
  | "phablet"
  | "phone"
  | "phone-down"
  | "phone-down-filled"
  | "phone-in"
  | "phone-out"
  | "pin"
  | "pin-remove"
  | "plan"
  | "play"
  | "play-circle"
  | "plus"
  | "plus-circle"
  | "plus-circle-down"
  | "plus-circle-filled"
  | "plus-circle-up"
  | "point-of-sale"
  | "point-of-sale-register"
  | "price-list"
  | "print"
  | "product-add"
  | "product-cost"
  | "product-filled"
  | "product-list"
  | "product-reference"
  | "product-remove"
  | "product-return"
  | "product-unavailable"
  | "profile"
  | "profile-filled"
  | "question-circle"
  | "question-circle-filled"
  | "radio-control"
  | "receipt"
  | "receipt-dollar"
  | "receipt-euro"
  | "receipt-folded"
  | "receipt-paid"
  | "receipt-pound"
  | "receipt-refund"
  | "receipt-rupee"
  | "receipt-yen"
  | "receivables"
  | "redo"
  | "referral-code"
  | "refresh"
  | "remove-background"
  | "reorder"
  | "replay"
  | "reset"
  | "return"
  | "reward"
  | "rocket"
  | "rotate-left"
  | "rotate-right"
  | "sandbox"
  | "save"
  | "savings"
  | "scan-qr-code"
  | "search-add"
  | "search-list"
  | "search-recent"
  | "search-resource"
  | "send"
  | "settings"
  | "share"
  | "shield-check-mark"
  | "shield-none"
  | "shield-pending"
  | "shield-person"
  | "shipping-label"
  | "shipping-label-cancel"
  | "shopcodes"
  | "slideshow"
  | "smiley-happy"
  | "smiley-joy"
  | "smiley-neutral"
  | "smiley-sad"
  | "social-ad"
  | "social-post"
  | "sort"
  | "sort-ascending"
  | "sort-descending"
  | "sound"
  | "sports"
  | "star"
  | "star-circle"
  | "star-filled"
  | "star-half"
  | "star-list"
  | "status"
  | "status-active"
  | "stop-circle"
  | "store"
  | "store-import"
  | "store-managed"
  | "store-online"
  | "sun"
  | "table"
  | "table-masonry"
  | "tablet"
  | "target"
  | "tax"
  | "team"
  | "text"
  | "text-align-center"
  | "text-align-left"
  | "text-align-right"
  | "text-block"
  | "text-bold"
  | "text-color"
  | "text-font"
  | "text-font-list"
  | "text-grammar"
  | "text-in-columns"
  | "text-in-rows"
  | "text-indent"
  | "text-indent-remove"
  | "text-italic"
  | "text-quote"
  | "text-title"
  | "text-underline"
  | "text-with-image"
  | "theme"
  | "theme-edit"
  | "theme-store"
  | "theme-template"
  | "three-d-environment"
  | "thumbs-down"
  | "thumbs-up"
  | "tip-jar"
  | "toggle-off"
  | "toggle-on"
  | "transaction"
  | "transaction-fee-add"
  | "transaction-fee-dollar"
  | "transaction-fee-euro"
  | "transaction-fee-pound"
  | "transaction-fee-rupee"
  | "transaction-fee-yen"
  | "transfer"
  | "transfer-in"
  | "transfer-internal"
  | "transfer-out"
  | "truck"
  | "undo"
  | "unknown-device"
  | "unlock"
  | "upload"
  | "variant-list"
  | "video"
  | "video-list"
  | "view"
  | "viewport-narrow"
  | "viewport-short"
  | "viewport-tall"
  | "viewport-wide"
  | "wallet"
  | "wand"
  | "watch"
  | "wifi"
  | "work"
  | "work-list"
  | "wrench"
  | "x"
  | "x-circle"
  | "x-circle-filled";

/**
 * Spacing scale keywords for gap, padding, and margins
 */
type SpacingKeyword =
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
 * Color keywords for backgrounds and borders
 */
type ColorKeyword = "subdued" | "base" | "strong";

/**
 * Background color options
 */
type BackgroundColorKeyword = "transparent" | ColorKeyword;

/**
 * Size units for dimensions
 */
type SizeUnits = `${number}px` | `${number}%` | "0";

/**
 * Size units including auto
 */
type SizeUnitsOrAuto = SizeUnits | "auto";

/**
 * Size units including none
 */
type SizeUnitsOrNone = SizeUnits | "none";

/**
 * Accessibility role options
 */
type AccessibilityRole =
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
 * Accessibility visibility options
 */
type AccessibilityVisibility = "visible" | "hidden" | "exclusive";

/**
 * Label accessibility visibility options
 */
type LabelAccessibilityVisibility = "visible" | "exclusive";

/**
 * Command action types for controlling other components
 */
type CommandAction = "--auto" | "--show" | "--hide" | "--toggle";

/**
 * Button variant options
 */
type ButtonVariant = "auto" | "primary" | "secondary" | "tertiary";

/**
 * Button type options
 */
type ButtonType = "button" | "reset" | "submit";

/**
 * Tone options for conveying semantic meaning
 */
type Tone = "auto" | "neutral" | "info" | "success" | "warning" | "caution" | "critical";

/**
 * Badge tone options
 */
type BadgeTone = "info" | "success" | "caution" | "warning" | "critical";

/**
 * Badge color options
 */
type BadgeColor = "base" | "strong";

/**
 * Page inline size options
 */
type PageInlineSize = "small" | "base" | "large";

/**
 * Section padding options
 */
type SectionPadding = "base" | "none";

/**
 * Stack direction options
 */
type StackDirection = "inline" | "block";

/**
 * Modal size options
 */
type ModalSize = "small" | "base" | "large";

/**
 * Avatar size options
 */
type AvatarSize = "small" | "small-200" | "base" | "large" | "large-200";

/**
 * Icon size options
 */
type IconSize = "small" | "base";

/**
 * Icon color options
 */
type IconColor = "base" | "subdued";

/**
 * Border radius options
 */
type BorderRadius = "small" | "small-100" | "small-200" | "base" | "large" | "large-100" | "large-200" | "none";

/**
 * Border style options
 */
type BorderStyle = "auto" | "none" | "solid" | "dashed";

/**
 * Border width options
 */
type BorderWidth = "small" | "small-100" | "base" | "large" | "large-100" | "none";

/**
 * Overflow options
 */
type Overflow = "visible" | "hidden";

/**
 * Display options
 */
type Display = "auto" | "none";

/**
 * Banner status options
 */
type BannerStatus = "info" | "success" | "warning" | "critical";

/**
 * Text autocomplete field values
 */
type TextAutocompleteField =
  | "on"
  | "off"
  | "language"
  | "organization"
  | "additional-name"
  | "address-level1"
  | "address-level2"
  | "address-level3"
  | "address-level4"
  | "address-line1"
  | "address-line2"
  | "address-line3"
  | "country-name"
  | "country"
  | "family-name"
  | "given-name"
  | "honorific-prefix"
  | "honorific-suffix"
  | "name"
  | "nickname"
  | "one-time-code"
  | "organization-title"
  | "postal-code"
  | "sex"
  | "street-address"
  | "transaction-currency"
  | "username"
  | "cc-additional-name"
  | "cc-family-name"
  | "cc-given-name"
  | "cc-name"
  | "cc-type";

/**
 * Link target options
 */
type LinkTarget = "auto" | "_blank" | "_self" | "_parent" | "_top" | (string & {});

// ============================================================================
// Polaris Web Component Attributes
// ============================================================================

/**
 * Button component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/button
 */
interface SButtonAttributes {
  /** A label that describes the purpose of the Button for screen readers */
  "accessibility-label"?: string;
  /** A label that describes the purpose of the Button for screen readers */
  accessibilityLabel?: string;
  /** The command action to take when clicked */
  command?: CommandAction;
  /** The ID of the element to control with the command */
  "command-for"?: string;
  /** The ID of the element to control with the command */
  commandFor?: string;
  /** Disables the button */
  disabled?: boolean;
  /** Filename for download when button acts as a link */
  download?: string;
  /** URL to navigate to when clicked */
  href?: string;
  /** Icon to display in the button */
  icon?: PolarisIconName;
  /** ID of element that should respond to interest (hover/focus) */
  "interest-for"?: string;
  /** ID of element that should respond to interest (hover/focus) */
  interestFor?: string;
  /** Shows a loading indicator and disables the button */
  loading?: boolean;
  /** Where to display the linked URL */
  target?: LinkTarget;
  /** Semantic tone of the button */
  tone?: "critical" | "auto" | "neutral";
  /** Button behavior type */
  type?: ButtonType;
  /** Visual appearance of the button */
  variant?: ButtonVariant;
}

/**
 * Link component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/link
 */
interface SLinkAttributes {
  /** A label that describes the purpose of the Link for screen readers */
  "accessibility-label"?: string;
  /** A label that describes the purpose of the Link for screen readers */
  accessibilityLabel?: string;
  /** The command action to take when clicked */
  command?: CommandAction;
  /** The ID of the element to control with the command */
  "command-for"?: string;
  /** The ID of the element to control with the command */
  commandFor?: string;
  /** Filename for download */
  download?: string;
  /** URL to navigate to */
  href?: string;
  /** Relationship between linked resource and current document */
  rel?: string;
  /** Where to display the linked URL */
  target?: LinkTarget;
}

/**
 * TextField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/textfield
 */
interface STextFieldAttributes {
  /** Hint for autofill behavior */
  autocomplete?: TextAutocompleteField | string;
  /** Default value for the field */
  "default-value"?: string;
  /** Default value for the field */
  defaultValue?: string;
  /** Additional helper text for the field */
  details?: string;
  /** Disables the field */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Icon to display in the field */
  icon?: PolarisIconName;
  /** Unique identifier */
  id?: string;
  /** Label for the field */
  label?: string;
  /** Changes the visibility of the label */
  "label-accessibility-visibility"?: LabelAccessibilityVisibility;
  /** Changes the visibility of the label */
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  /** Maximum number of characters allowed */
  "max-length"?: number;
  /** Maximum number of characters allowed */
  maxLength?: number;
  /** Minimum number of characters required */
  "min-length"?: number;
  /** Minimum number of characters required */
  minLength?: number;
  /** Form field identifier */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Text to display before the input */
  prefix?: string;
  /** Whether the field is read-only */
  "read-only"?: boolean;
  /** Whether the field is read-only */
  readOnly?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Text to display after the input */
  suffix?: string;
  /** Current value of the field */
  value?: string;
}

/**
 * TextArea component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/textarea
 */
interface STextAreaAttributes {
  /** Default value for the field */
  "default-value"?: string;
  /** Default value for the field */
  defaultValue?: string;
  /** Additional helper text for the field */
  details?: string;
  /** Disables the field */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Label for the field */
  label?: string;
  /** Changes the visibility of the label */
  "label-accessibility-visibility"?: LabelAccessibilityVisibility;
  /** Changes the visibility of the label */
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  /** Maximum number of characters allowed */
  "max-length"?: number;
  /** Maximum number of characters allowed */
  maxLength?: number;
  /** Minimum number of characters required */
  "min-length"?: number;
  /** Minimum number of characters required */
  minLength?: number;
  /** Form field identifier */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the field is read-only */
  "read-only"?: boolean;
  /** Whether the field is read-only */
  readOnly?: boolean;
  /** Whether the field is required */
  required?: boolean;
  /** Number of visible rows */
  rows?: number;
  /** Current value of the field */
  value?: string;
}

/**
 * Checkbox component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/checkbox
 */
interface SCheckboxAttributes {
  /** A label for screen readers when visual label is insufficient */
  "accessibility-label"?: string;
  /** A label for screen readers when visual label is insufficient */
  accessibilityLabel?: string;
  /** Whether the checkbox is checked */
  checked?: boolean;
  /** Whether the checkbox is checked by default */
  "default-checked"?: boolean;
  /** Whether the checkbox is checked by default */
  defaultChecked?: boolean;
  /** Whether the checkbox is in indeterminate state */
  "default-indeterminate"?: boolean;
  /** Whether the checkbox is in indeterminate state */
  defaultIndeterminate?: boolean;
  /** Additional helper text */
  details?: string;
  /** Disables the checkbox */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Whether the checkbox is in indeterminate state (tri-state) */
  indeterminate?: boolean;
  /** Label for the checkbox */
  label?: string;
  /** Form field identifier */
  name?: string;
  /** Whether the checkbox is required */
  required?: boolean;
  /** Value used in form data when checked */
  value?: string;
}

/**
 * Switch component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/switch
 */
interface SSwitchAttributes {
  /** A label for screen readers */
  "accessibility-label"?: string;
  /** A label for screen readers */
  accessibilityLabel?: string;
  /** Whether the switch is on */
  checked?: boolean;
  /** Whether the switch is on by default */
  "default-checked"?: boolean;
  /** Whether the switch is on by default */
  defaultChecked?: boolean;
  /** Additional helper text */
  details?: string;
  /** Disables the switch */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Label for the switch */
  label?: string;
  /** Form field identifier */
  name?: string;
}

/**
 * Select component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/select
 */
interface SSelectAttributes {
  /** Additional helper text */
  details?: string;
  /** Disables the select */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Icon to display */
  icon?: PolarisIconName;
  /** Unique identifier */
  id?: string;
  /** Label for the select */
  label?: string;
  /** Changes the visibility of the label */
  "label-accessibility-visibility"?: LabelAccessibilityVisibility;
  /** Changes the visibility of the label */
  labelAccessibilityVisibility?: LabelAccessibilityVisibility;
  /** Form field identifier */
  name?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Currently selected value */
  value?: string;
}

/**
 * Option component attributes (child of Select)
 */
interface SOptionAttributes {
  /** Whether the option is disabled */
  disabled?: boolean;
  /** Whether this option is selected */
  selected?: boolean;
  /** Value of the option */
  value?: string;
}

/**
 * OptionGroup component attributes (child of Select)
 */
interface SOptionGroupAttributes {
  /** Whether the group is disabled */
  disabled?: boolean;
  /** Label for the option group */
  label?: string;
}

/**
 * ChoiceList component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/choicelist
 */
interface SChoiceListAttributes {
  /** Additional helper text */
  details?: string;
  /** Disables the choice list */
  disabled?: boolean;
  /** Error message to display */
  error?: string;
  /** Label for the choice list */
  label?: string;
  /** Form field identifier */
  name?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Behavior type: checkboxes or radios */
  variant?: "checkboxes" | "radios";
}

/**
 * Choice component attributes (child of ChoiceList)
 */
interface SChoiceAttributes {
  /** Additional helper text */
  details?: string;
  /** Disables the choice */
  disabled?: boolean;
  /** Label for the choice */
  label?: string;
  /** Value of the choice */
  value?: string;
}

/**
 * Page component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/page
 */
interface SPageAttributes {
  /** The main page heading */
  heading?: string;
  /** The inline size of the page content */
  "inline-size"?: PageInlineSize;
  /** The inline size of the page content */
  inlineSize?: PageInlineSize;
}

/**
 * Section component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/section
 */
interface SSectionAttributes {
  /** A label for screen readers when no heading is provided */
  "accessibility-label"?: string;
  /** A label for screen readers when no heading is provided */
  accessibilityLabel?: string;
  /** Optional section heading */
  heading?: string;
  /** Padding control */
  padding?: SectionPadding;
}

/**
 * Stack component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/stack
 */
interface SStackAttributes {
  /** A label for screen readers */
  "accessibility-label"?: string;
  /** A label for screen readers */
  accessibilityLabel?: string;
  /** Semantic role for assistive technologies */
  "accessibility-role"?: AccessibilityRole;
  /** Semantic role for assistive technologies */
  accessibilityRole?: AccessibilityRole;
  /** Visibility for accessibility tree */
  "accessibility-visibility"?: AccessibilityVisibility;
  /** Visibility for accessibility tree */
  accessibilityVisibility?: AccessibilityVisibility;
  /** Aligns content along the block axis */
  "align-content"?: string;
  /** Aligns content along the block axis */
  alignContent?: string;
  /** Aligns items along the block axis */
  "align-items"?: string;
  /** Aligns items along the block axis */
  alignItems?: string;
  /** Background color */
  background?: BackgroundColorKeyword;
  /** Block size (height in horizontal writing mode) */
  "block-size"?: SizeUnitsOrAuto;
  /** Block size (height in horizontal writing mode) */
  blockSize?: SizeUnitsOrAuto;
  /** Border shorthand */
  border?: string;
  /** Border color */
  "border-color"?: ColorKeyword | "";
  /** Border color */
  borderColor?: ColorKeyword | "";
  /** Border radius */
  "border-radius"?: string;
  /** Border radius */
  borderRadius?: string;
  /** Border style */
  "border-style"?: string;
  /** Border style */
  borderStyle?: string;
  /** Border width */
  "border-width"?: string;
  /** Border width */
  borderWidth?: string;
  /** Gap between columns */
  "column-gap"?: SpacingKeyword | "";
  /** Gap between columns */
  columnGap?: SpacingKeyword | "";
  /** Direction of the stack: inline (horizontal) or block (vertical) */
  direction?: StackDirection | string;
  /** Display mode */
  display?: Display | string;
  /** Gap between elements */
  gap?: SpacingKeyword | string;
  /** Inline size (width in horizontal writing mode) */
  "inline-size"?: SizeUnitsOrAuto;
  /** Inline size (width in horizontal writing mode) */
  inlineSize?: SizeUnitsOrAuto;
  /** Aligns items along the inline axis */
  "justify-content"?: string;
  /** Aligns items along the inline axis */
  justifyContent?: string;
  /** Maximum block size */
  "max-block-size"?: SizeUnitsOrNone;
  /** Maximum block size */
  maxBlockSize?: SizeUnitsOrNone;
  /** Maximum inline size */
  "max-inline-size"?: SizeUnitsOrNone;
  /** Maximum inline size */
  maxInlineSize?: SizeUnitsOrNone;
  /** Minimum block size */
  "min-block-size"?: SizeUnits;
  /** Minimum block size */
  minBlockSize?: SizeUnits;
  /** Minimum inline size */
  "min-inline-size"?: SizeUnits;
  /** Minimum inline size */
  minInlineSize?: SizeUnits;
  /** Overflow behavior */
  overflow?: Overflow;
  /** Padding on all sides */
  padding?: string;
  /** Block padding (top and bottom in horizontal writing mode) */
  "padding-block"?: string;
  /** Block padding (top and bottom in horizontal writing mode) */
  paddingBlock?: string;
  /** Block-end padding */
  "padding-block-end"?: string;
  /** Block-end padding */
  paddingBlockEnd?: string;
  /** Block-start padding */
  "padding-block-start"?: string;
  /** Block-start padding */
  paddingBlockStart?: string;
  /** Inline padding (left and right in horizontal writing mode) */
  "padding-inline"?: string;
  /** Inline padding (left and right in horizontal writing mode) */
  paddingInline?: string;
  /** Inline-end padding */
  "padding-inline-end"?: string;
  /** Inline-end padding */
  paddingInlineEnd?: string;
  /** Inline-start padding */
  "padding-inline-start"?: string;
  /** Inline-start padding */
  paddingInlineStart?: string;
  /** Gap between rows */
  "row-gap"?: SpacingKeyword | "";
  /** Gap between rows */
  rowGap?: SpacingKeyword | "";
}

/**
 * Box component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/box
 */
interface SBoxAttributes extends SStackAttributes {
  // Box inherits all Stack attributes
}

/**
 * Modal component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/modal
 */
interface SModalAttributes {
  /** A label for screen readers */
  "accessibility-label"?: string;
  /** A label for screen readers */
  accessibilityLabel?: string;
  /** Modal heading/title */
  heading?: string;
  /** Unique identifier (required for command control) */
  id?: string;
  /** Padding for modal content */
  padding?: SpacingKeyword;
  /** Size of the modal */
  size?: ModalSize;
}

/**
 * Badge component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/badge
 */
interface SBadgeAttributes {
  /** Color intensity of the badge */
  color?: BadgeColor;
  /** Icon to display in the badge */
  icon?: PolarisIconName;
  /** Semantic tone of the badge */
  tone?: BadgeTone;
}

/**
 * Banner component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/banner
 */
interface SBannerAttributes {
  /** Whether the banner can be dismissed */
  dismissible?: boolean;
  /** Status/tone of the banner */
  status?: BannerStatus;
  /** Title of the banner */
  title?: string;
}

/**
 * Avatar component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/avatar
 */
interface SAvatarAttributes {
  /** Alt text for the image */
  alt?: string;
  /** Initials to display when no image is available */
  initials?: string;
  /** Size of the avatar */
  size?: AvatarSize;
  /** Image source URL */
  src?: string;
}

/**
 * Icon component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/icon
 */
interface SIconAttributes {
  /** Color intensity of the icon */
  color?: IconColor;
  /** Unique identifier */
  id?: string;
  /** ID of element that responds to interest (hover/focus) on this icon */
  "interest-for"?: string;
  /** ID of element that responds to interest (hover/focus) on this icon */
  interestFor?: string;
  /** Size of the icon */
  size?: IconSize;
  /** Semantic tone of the icon */
  tone?: Tone;
  /** Type of icon to display */
  type?: PolarisIconName;
}

/**
 * Spinner component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/spinner
 */
interface SSpinnerAttributes {
  /** A label for screen readers */
  "accessibility-label"?: string;
  /** A label for screen readers */
  accessibilityLabel?: string;
  /** Size of the spinner */
  size?: "small" | "large";
}

/**
 * Thumbnail component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/thumbnail
 */
interface SThumbnailAttributes {
  /** Alt text for the image */
  alt?: string;
  /** Size of the thumbnail */
  size?: "small" | "medium" | "large";
  /** Image source URL */
  src?: string;
}

/**
 * Image component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/image
 */
interface SImageAttributes {
  /** Alt text for the image */
  alt?: string;
  /** Image source URL */
  src?: string;
}

/**
 * Heading component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/heading
 */
interface SHeadingAttributes {
  /** Override the heading level for accessibility */
  "accessibility-level"?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  /** Override the heading level for accessibility */
  accessibilityLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Text component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/text
 */
interface STextAttributes {
  /** Semantic role for assistive technologies */
  "accessibility-role"?: AccessibilityRole;
  /** Semantic role for assistive technologies */
  accessibilityRole?: AccessibilityRole;
  /** Text color */
  color?: ColorKeyword;
  /** Text style type */
  type?: "strong" | "emphasis" | "subdued" | "code";
}

/**
 * Paragraph component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/paragraph
 */
interface SParagraphAttributes {
  // Paragraph has no specific attributes beyond children
}

/**
 * Divider component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/divider
 */
interface SDividerAttributes {
  // Divider has no specific attributes
}

/**
 * Tooltip component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/tooltip
 */
interface STooltipAttributes {
  /** Unique identifier (used with interestFor) */
  id?: string;
}

/**
 * Popover component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/popover
 */
interface SPopoverAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * Menu component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/menu
 */
interface SMenuAttributes {
  /** Unique identifier (used with commandFor) */
  id?: string;
}

/**
 * ButtonGroup component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/buttongroup
 */
interface SButtonGroupAttributes {
  // ButtonGroup has no specific attributes, it just groups buttons
}

/**
 * Clickable component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/clickable
 */
interface SClickableAttributes {
  /** A label for screen readers */
  "accessibility-label"?: string;
  /** A label for screen readers */
  accessibilityLabel?: string;
  /** The command action to take when clicked */
  command?: CommandAction;
  /** The ID of the element to control with the command */
  "command-for"?: string;
  /** The ID of the element to control with the command */
  commandFor?: string;
  /** Disables the clickable */
  disabled?: boolean;
  /** URL to navigate to */
  href?: string;
  /** Where to display the linked URL */
  target?: LinkTarget;
}

/**
 * Chip component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/chip
 */
interface SChipAttributes {
  // Chip displays its text content
}

/**
 * ClickableChip component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/clickablechip
 */
interface SClickableChipAttributes {
  /** Disables the clickable chip */
  disabled?: boolean;
}

/**
 * Grid component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/grid
 */
interface SGridAttributes {
  /** Gap between grid items */
  gap?: SpacingKeyword | string;
}

/**
 * GridItem component attributes
 */
interface SGridItemAttributes {
  /** Column span */
  "column-span"?: number;
  /** Column span */
  columnSpan?: number;
}

/**
 * NumberField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/numberfield
 */
interface SNumberFieldAttributes extends STextFieldAttributes {
  /** Maximum value */
  max?: number;
  /** Minimum value */
  min?: number;
  /** Step increment */
  step?: number;
}

/**
 * EmailField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/emailfield
 */
interface SEmailFieldAttributes extends STextFieldAttributes {
  // EmailField shares TextField attributes
}

/**
 * PasswordField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/passwordfield
 */
interface SPasswordFieldAttributes extends STextFieldAttributes {
  // PasswordField shares TextField attributes
}

/**
 * SearchField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/searchfield
 */
interface SSearchFieldAttributes extends STextFieldAttributes {
  // SearchField shares TextField attributes
}

/**
 * URLField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/urlfield
 */
interface SURLFieldAttributes extends STextFieldAttributes {
  // URLField shares TextField attributes
}

/**
 * MoneyField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/moneyfield
 */
interface SMoneyFieldAttributes extends STextFieldAttributes {
  /** Currency code */
  currency?: string;
}

/**
 * ColorField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/colorfield
 */
interface SColorFieldAttributes extends STextFieldAttributes {
  // ColorField shares TextField attributes
}

/**
 * DateField component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/datefield
 */
interface SDateFieldAttributes extends STextFieldAttributes {
  /** Date input type */
  type?: "date";
}

/**
 * DatePicker component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/datepicker
 */
interface SDatePickerAttributes {
  /** Disables the date picker */
  disabled?: boolean;
  /** Label for the date picker */
  label?: string;
  /** Maximum selectable date */
  max?: string;
  /** Minimum selectable date */
  min?: string;
  /** Whether range selection is enabled */
  range?: boolean;
  /** Selected date value */
  value?: string;
}

/**
 * ColorPicker component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/colorpicker
 */
interface SColorPickerAttributes {
  /** Selected color value */
  value?: string;
}

/**
 * Dropzone component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/dropzone
 */
interface SDropzoneAttributes {
  /** Accepted file types */
  accept?: string;
  /** Disables the dropzone */
  disabled?: boolean;
  /** Label for the dropzone */
  label?: string;
  /** Whether multiple files can be uploaded */
  multiple?: boolean;
}

/**
 * Table component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/table
 */
interface STableAttributes {
  // Table uses standard HTML table structure
}

/**
 * OrderedList component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/orderedlist
 */
interface SOrderedListAttributes {
  // Uses standard list items
}

/**
 * UnorderedList component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/unorderedlist
 */
interface SUnorderedListAttributes {
  // Uses standard list items
}

/**
 * QueryContainer component attributes
 * @see https://shopify.dev/docs/api/app-home/polaris-components/querycontainer
 */
interface SQueryContainerAttributes {
  // Enables container query based responsive behavior
}

// ============================================================================
// App Bridge Web Component Attributes
// ============================================================================

/**
 * App Navigation component attributes
 * @see https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-nav
 */
interface SAppNavAttributes {
  // Contains s-link children
}

/**
 * App Window component attributes
 * @see https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-window
 */
interface SAppWindowAttributes {
  /** Unique identifier for the app window (required) */
  id: string;
  /** URL of the content to display (required) */
  src: string;
}

// ============================================================================
// Event Types
// ============================================================================

/**
 * Custom event with typed currentTarget
 */
interface ShopifyCustomEvent<T extends HTMLElement = HTMLElement> extends Event {
  currentTarget: T;
}

/**
 * Change event for form fields
 */
interface ShopifyChangeEvent<T extends HTMLElement = HTMLElement> extends ShopifyCustomEvent<T> {
  currentTarget: T & { value: string; checked?: boolean };
}

/**
 * Input event for text fields
 */
interface ShopifyInputEvent<T extends HTMLElement = HTMLElement> extends ShopifyCustomEvent<T> {
  currentTarget: T & { value: string };
}

/**
 * Choice list change event with selected values
 */
interface ShopifyChoiceListChangeEvent extends ShopifyCustomEvent {
  currentTarget: HTMLElement & { values: string[] };
}

/**
 * Navigation event fired by Shopify when internal navigation occurs
 * @example
 * ```svelte
 * <svelte:window on:shopify:navigate={handleNavigate} />
 * ```
 * @example
 * ```typescript
 * const handleNavigate = (event: ShopifyNavigateEvent) => {
 *   const href = event.target?.getAttribute('href');
 *   if (href) navigate(href);
 * };
 * ```
 */
interface ShopifyNavigateEvent extends CustomEvent {
  /** The element that triggered the navigation (typically has an href attribute) */
  target: Element | null;
}

/**
 * Detail for shopify:navigate event
 */
interface ShopifyNavigateEventDetail {
  /** The URL to navigate to */
  url?: string;
}

// ============================================================================
// Global Event Map Augmentation
// ============================================================================

declare global {
  interface WindowEventMap {
    /** Shopify navigation event fired when internal app navigation occurs */
    "shopify:navigate": ShopifyNavigateEvent;
  }

  interface DocumentEventMap {
    /** Shopify navigation event fired when internal app navigation occurs */
    "shopify:navigate": ShopifyNavigateEvent;
  }
}

// ============================================================================
// Element Instance Types
// ============================================================================

/**
 * Modal element instance with methods
 */
interface SModalElement extends HTMLElement {
  /** Shows the modal */
  show(): Promise<void>;
  /** Hides the modal */
  hide(): Promise<void>;
  /** Toggles the modal visibility */
  toggle(): Promise<void>;
}

/**
 * App Window element instance with methods
 */
interface SAppWindowElement extends HTMLElement {
  /** Shows the app window */
  show(): Promise<void>;
  /** Hides the app window */
  hide(): Promise<void>;
  /** Toggles the app window visibility */
  toggle(): Promise<void>;
  /** Gets the Window object of the iframe */
  readonly contentWindow: Window | null;
  /** Gets/sets the source URL */
  src: string;
}

// ============================================================================
// SvelteKit Module Augmentation
// ============================================================================

declare namespace svelteHTML {
  interface IntrinsicElements {
    // Layout Components
    /** Page container with title bar support @see https://shopify.dev/docs/api/app-home/polaris-components/page */
    "s-page": SPageAttributes;
    /** Section container for grouping content @see https://shopify.dev/docs/api/app-home/polaris-components/section */
    "s-section": SSectionAttributes;
    /** Stack layout for horizontal or vertical arrangement @see https://shopify.dev/docs/api/app-home/polaris-components/stack */
    "s-stack": SStackAttributes;
    /** Generic box container @see https://shopify.dev/docs/api/app-home/polaris-components/box */
    "s-box": SBoxAttributes;
    /** Grid layout container @see https://shopify.dev/docs/api/app-home/polaris-components/grid */
    "s-grid": SGridAttributes;
    /** Grid item @see https://shopify.dev/docs/api/app-home/polaris-components/grid */
    "s-grid-item": SGridItemAttributes;
    /** Container for responsive queries @see https://shopify.dev/docs/api/app-home/polaris-components/querycontainer */
    "s-query-container": SQueryContainerAttributes;
    /** Visual divider @see https://shopify.dev/docs/api/app-home/polaris-components/divider */
    "s-divider": SDividerAttributes;

    // Button and Interactive Components
    /** Button for triggering actions @see https://shopify.dev/docs/api/app-home/polaris-components/button */
    "s-button": SButtonAttributes;
    /** Navigation link @see https://shopify.dev/docs/api/app-home/polaris-components/link */
    "s-link": SLinkAttributes;
    /** Generic clickable container @see https://shopify.dev/docs/api/app-home/polaris-components/clickable */
    "s-clickable": SClickableAttributes;
    /** Button group container @see https://shopify.dev/docs/api/app-home/polaris-components/buttongroup */
    "s-button-group": SButtonGroupAttributes;
    /** Action menu @see https://shopify.dev/docs/api/app-home/polaris-components/menu */
    "s-menu": SMenuAttributes;

    // Form Components
    /** Single-line text input @see https://shopify.dev/docs/api/app-home/polaris-components/textfield */
    "s-text-field": STextFieldAttributes;
    /** Multi-line text input @see https://shopify.dev/docs/api/app-home/polaris-components/textarea */
    "s-text-area": STextAreaAttributes;
    /** Checkbox control @see https://shopify.dev/docs/api/app-home/polaris-components/checkbox */
    "s-checkbox": SCheckboxAttributes;
    /** Toggle switch control @see https://shopify.dev/docs/api/app-home/polaris-components/switch */
    "s-switch": SSwitchAttributes;
    /** Dropdown select @see https://shopify.dev/docs/api/app-home/polaris-components/select */
    "s-select": SSelectAttributes;
    /** Select option @see https://shopify.dev/docs/api/app-home/polaris-components/select */
    "s-option": SOptionAttributes;
    /** Select option group @see https://shopify.dev/docs/api/app-home/polaris-components/select */
    "s-option-group": SOptionGroupAttributes;
    /** Radio or checkbox group @see https://shopify.dev/docs/api/app-home/polaris-components/choicelist */
    "s-choice-list": SChoiceListAttributes;
    /** Choice item in choice list @see https://shopify.dev/docs/api/app-home/polaris-components/choicelist */
    "s-choice": SChoiceAttributes;
    /** Number input @see https://shopify.dev/docs/api/app-home/polaris-components/numberfield */
    "s-number-field": SNumberFieldAttributes;
    /** Email input @see https://shopify.dev/docs/api/app-home/polaris-components/emailfield */
    "s-email-field": SEmailFieldAttributes;
    /** Password input @see https://shopify.dev/docs/api/app-home/polaris-components/passwordfield */
    "s-password-field": SPasswordFieldAttributes;
    /** Search input @see https://shopify.dev/docs/api/app-home/polaris-components/searchfield */
    "s-search-field": SSearchFieldAttributes;
    /** URL input @see https://shopify.dev/docs/api/app-home/polaris-components/urlfield */
    "s-url-field": SURLFieldAttributes;
    /** Currency input @see https://shopify.dev/docs/api/app-home/polaris-components/moneyfield */
    "s-money-field": SMoneyFieldAttributes;
    /** Color input @see https://shopify.dev/docs/api/app-home/polaris-components/colorfield */
    "s-color-field": SColorFieldAttributes;
    /** Date input @see https://shopify.dev/docs/api/app-home/polaris-components/datefield */
    "s-date-field": SDateFieldAttributes;
    /** Date picker calendar @see https://shopify.dev/docs/api/app-home/polaris-components/datepicker */
    "s-date-picker": SDatePickerAttributes;
    /** Color picker @see https://shopify.dev/docs/api/app-home/polaris-components/colorpicker */
    "s-color-picker": SColorPickerAttributes;
    /** File upload dropzone @see https://shopify.dev/docs/api/app-home/polaris-components/dropzone */
    "s-dropzone": SDropzoneAttributes;

    // Text and Display Components
    /** Hierarchical heading @see https://shopify.dev/docs/api/app-home/polaris-components/heading */
    "s-heading": SHeadingAttributes;
    /** Inline text styling @see https://shopify.dev/docs/api/app-home/polaris-components/text */
    "s-text": STextAttributes;
    /** Block paragraph @see https://shopify.dev/docs/api/app-home/polaris-components/paragraph */
    "s-paragraph": SParagraphAttributes;
    /** Status badge @see https://shopify.dev/docs/api/app-home/polaris-components/badge */
    "s-badge": SBadgeAttributes;
    /** Keyword/tag chip @see https://shopify.dev/docs/api/app-home/polaris-components/chip */
    "s-chip": SChipAttributes;
    /** Clickable keyword/tag @see https://shopify.dev/docs/api/app-home/polaris-components/clickablechip */
    "s-clickable-chip": SClickableChipAttributes;

    // Media Components
    /** User avatar @see https://shopify.dev/docs/api/app-home/polaris-components/avatar */
    "s-avatar": SAvatarAttributes;
    /** Icon display @see https://shopify.dev/docs/api/app-home/polaris-components/icon */
    "s-icon": SIconAttributes;
    /** Image display @see https://shopify.dev/docs/api/app-home/polaris-components/image */
    "s-image": SImageAttributes;
    /** Small preview image @see https://shopify.dev/docs/api/app-home/polaris-components/thumbnail */
    "s-thumbnail": SThumbnailAttributes;

    // Overlay Components
    /** Dialog modal @see https://shopify.dev/docs/api/app-home/polaris-components/modal */
    "s-modal": SModalAttributes;
    /** Small overlay @see https://shopify.dev/docs/api/app-home/polaris-components/popover */
    "s-popover": SPopoverAttributes;
    /** Brief informational overlay @see https://shopify.dev/docs/api/app-home/polaris-components/tooltip */
    "s-tooltip": STooltipAttributes;

    // Feedback Components
    /** Loading spinner @see https://shopify.dev/docs/api/app-home/polaris-components/spinner */
    "s-spinner": SSpinnerAttributes;
    /** Informational banner @see https://shopify.dev/docs/api/app-home/polaris-components/banner */
    "s-banner": SBannerAttributes;

    // List Components
    /** Numbered list @see https://shopify.dev/docs/api/app-home/polaris-components/orderedlist */
    "s-ordered-list": SOrderedListAttributes;
    /** Bulleted list @see https://shopify.dev/docs/api/app-home/polaris-components/unorderedlist */
    "s-unordered-list": SUnorderedListAttributes;
    /** Data table @see https://shopify.dev/docs/api/app-home/polaris-components/table */
    "s-table": STableAttributes;

    // App Bridge Components
    /** App navigation menu @see https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-nav */
    "s-app-nav": SAppNavAttributes;
    /** Fullscreen app window @see https://shopify.dev/docs/api/app-home/app-bridge-web-components/app-window */
    "s-app-window": SAppWindowAttributes;
  }
}

export {
  // Base Types
  PolarisIconName,
  SpacingKeyword,
  ColorKeyword,
  BackgroundColorKeyword,
  SizeUnits,
  SizeUnitsOrAuto,
  SizeUnitsOrNone,
  AccessibilityRole,
  AccessibilityVisibility,
  LabelAccessibilityVisibility,
  CommandAction,
  ButtonVariant,
  ButtonType,
  Tone,
  BadgeTone,
  BadgeColor,
  PageInlineSize,
  SectionPadding,
  StackDirection,
  ModalSize,
  AvatarSize,
  IconSize,
  IconColor,
  BorderRadius,
  BorderStyle,
  BorderWidth,
  Overflow,
  Display,
  BannerStatus,
  TextAutocompleteField,
  LinkTarget,

  // Polaris Component Attributes
  SButtonAttributes,
  SLinkAttributes,
  STextFieldAttributes,
  STextAreaAttributes,
  SCheckboxAttributes,
  SSwitchAttributes,
  SSelectAttributes,
  SOptionAttributes,
  SOptionGroupAttributes,
  SChoiceListAttributes,
  SChoiceAttributes,
  SPageAttributes,
  SSectionAttributes,
  SStackAttributes,
  SBoxAttributes,
  SModalAttributes,
  SBadgeAttributes,
  SBannerAttributes,
  SAvatarAttributes,
  SIconAttributes,
  SSpinnerAttributes,
  SThumbnailAttributes,
  SImageAttributes,
  SHeadingAttributes,
  STextAttributes,
  SParagraphAttributes,
  SDividerAttributes,
  STooltipAttributes,
  SPopoverAttributes,
  SMenuAttributes,
  SButtonGroupAttributes,
  SClickableAttributes,
  SChipAttributes,
  SClickableChipAttributes,
  SGridAttributes,
  SGridItemAttributes,
  SNumberFieldAttributes,
  SEmailFieldAttributes,
  SPasswordFieldAttributes,
  SSearchFieldAttributes,
  SURLFieldAttributes,
  SMoneyFieldAttributes,
  SColorFieldAttributes,
  SDateFieldAttributes,
  SDatePickerAttributes,
  SColorPickerAttributes,
  SDropzoneAttributes,
  STableAttributes,
  SOrderedListAttributes,
  SUnorderedListAttributes,
  SQueryContainerAttributes,

  // App Bridge Component Attributes
  SAppNavAttributes,
  SAppWindowAttributes,

  // Event Types
  ShopifyCustomEvent,
  ShopifyChangeEvent,
  ShopifyInputEvent,
  ShopifyChoiceListChangeEvent,
  ShopifyNavigateEvent,
  ShopifyNavigateEventDetail,

  // Element Instance Types
  SModalElement,
  SAppWindowElement,
};
