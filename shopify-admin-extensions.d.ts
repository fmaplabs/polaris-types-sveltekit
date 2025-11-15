/**
 * TypeScript Type Definitions for Shopify Admin Extensions (2025-10)
 * Compatible with SvelteKit
 *
 * @packageDocumentation
 * @module ShopifyAdminExtensions
 */

// ============================================================================
// Admin Extension Specific Components
// ============================================================================

/**
 * AdminAction component attributes
 * Used to configure modal for admin action extensions
 * @see https://shopify.dev/docs/api/admin-extensions/components/adminaction
 */
interface SAdminActionAttributes {
  /** The text to use as the Action modal's title. If not provided, the extension name will be used */
  heading?: string;
  /** Whether the action is in a loading state. When true, prevents user interaction */
  loading?: boolean;
}

/**
 * AdminBlock component attributes
 * Used for block extensions that render inline on resource pages
 * @see https://shopify.dev/docs/api/admin-extensions/components/adminblock
 */
interface SAdminBlockAttributes {
  /** The summary to display when collapsed. Max 30 characters before truncation */
  "collapsed-summary"?: string;
  /** The summary to display when collapsed. Max 30 characters before truncation */
  collapsedSummary?: string;
  /** The text to use as the Block title. If not provided, the extension name will be used */
  heading?: string;
}

/**
 * AdminPrintAction component attributes
 * Used for admin print action extensions to denote a URL to print
 * @see https://shopify.dev/docs/api/admin-extensions/components/adminprintaction
 */
interface SAdminPrintActionAttributes {
  /** URL of the preview/document to print. HTML, PDFs and images are supported */
  src?: string;
}

/**
 * FunctionSettings component attributes
 * Used for configuring metafield configuration of a Shopify Function
 * @see https://shopify.dev/docs/api/admin-extensions/components/functionsettings
 */
interface SFunctionSettingsAttributes {
  // Events handled via on:submit and on:reset
}

// ============================================================================
// Polaris Web Component Attributes (Admin Extensions Variant)
// ============================================================================

/**
 * Button component attributes for admin extensions
 */
interface SAdminButtonAttributes {
  /** A label for screen readers */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Command action to take when clicked */
  command?: "--auto" | "--show" | "--hide" | "--toggle";
  /** ID of element to control with command */
  "command-for"?: string;
  commandFor?: string;
  /** Disables the button */
  disabled?: boolean;
  /** Filename for download */
  download?: string;
  /** URL to navigate to */
  href?: string;
  /** Icon to display */
  icon?: string;
  /** ID of element responding to interest */
  "interest-for"?: string;
  interestFor?: string;
  /** Shows loading indicator */
  loading?: boolean;
  /** Where to display linked URL */
  target?: "auto" | "_blank" | "_self" | "_parent" | "_top" | string;
  /** Semantic tone */
  tone?: "critical" | "auto" | "neutral";
  /** Button behavior type */
  type?: "button" | "reset" | "submit";
  /** Visual appearance */
  variant?: "auto" | "primary" | "secondary" | "tertiary";
}

/**
 * TextField component attributes for admin extensions
 */
interface SAdminTextFieldAttributes {
  /** Autofill hint */
  autocomplete?: string;
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Helper text */
  details?: string;
  /** Disables the field */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Icon to display */
  icon?: string;
  /** Unique identifier */
  id?: string;
  /** Field label */
  label?: string;
  /** Label visibility for screen readers */
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
  /** Current value */
  value?: string;
}

/**
 * NumberField component attributes for admin extensions
 */
interface SAdminNumberFieldAttributes extends SAdminTextFieldAttributes {
  /** Maximum value */
  max?: number;
  /** Minimum value */
  min?: number;
  /** Step increment */
  step?: number;
}

/**
 * TextArea component attributes for admin extensions
 */
interface SAdminTextAreaAttributes {
  /** Default value */
  "default-value"?: string;
  defaultValue?: string;
  /** Helper text */
  details?: string;
  /** Disables the field */
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
  /** Number of visible rows */
  rows?: number;
  /** Current value */
  value?: string;
}

/**
 * Select component attributes for admin extensions
 */
interface SAdminSelectAttributes {
  /** Helper text */
  details?: string;
  /** Disables the select */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Icon to display */
  icon?: string;
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
  /** Required field */
  required?: boolean;
  /** Selected value */
  value?: string;
}

/**
 * Option component attributes
 */
interface SAdminOptionAttributes {
  /** Disabled state */
  disabled?: boolean;
  /** Selected state */
  selected?: boolean;
  /** Option value */
  value?: string;
}

/**
 * OptionGroup component attributes
 */
interface SAdminOptionGroupAttributes {
  /** Disabled state */
  disabled?: boolean;
  /** Group label */
  label?: string;
}

/**
 * Checkbox component attributes for admin extensions
 */
interface SAdminCheckboxAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Checked state */
  checked?: boolean;
  /** Default checked state */
  "default-checked"?: boolean;
  defaultChecked?: boolean;
  /** Indeterminate state */
  "default-indeterminate"?: boolean;
  defaultIndeterminate?: boolean;
  /** Helper text */
  details?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Unique identifier */
  id?: string;
  /** Indeterminate (tri-state) */
  indeterminate?: boolean;
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
 * Switch component attributes for admin extensions
 */
interface SAdminSwitchAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** On state */
  checked?: boolean;
  /** Default on state */
  "default-checked"?: boolean;
  defaultChecked?: boolean;
  /** Helper text */
  details?: string;
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
}

/**
 * ChoiceList component attributes for admin extensions
 */
interface SAdminChoiceListAttributes {
  /** Helper text */
  details?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Error message */
  error?: string;
  /** Field label */
  label?: string;
  /** Form field name */
  name?: string;
  /** Required field */
  required?: boolean;
  /** Behavior type */
  variant?: "checkboxes" | "radios";
}

/**
 * Choice component attributes
 */
interface SAdminChoiceAttributes {
  /** Helper text */
  details?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Choice label */
  label?: string;
  /** Choice value */
  value?: string;
}

/**
 * Stack component attributes for admin extensions
 */
interface SAdminStackAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Semantic role */
  "accessibility-role"?: string;
  accessibilityRole?: string;
  /** Visibility for a11y tree */
  "accessibility-visibility"?: "visible" | "hidden" | "exclusive";
  accessibilityVisibility?: "visible" | "hidden" | "exclusive";
  /** Align content along block axis */
  "align-content"?: string;
  alignContent?: string;
  /** Align items along block axis */
  "align-items"?: string;
  alignItems?: string;
  /** Background color */
  background?: "transparent" | "subdued" | "base" | "strong";
  /** Block size (height) */
  "block-size"?: string;
  blockSize?: string;
  /** Border shorthand */
  border?: string;
  /** Border color */
  "border-color"?: string;
  borderColor?: string;
  /** Border radius */
  "border-radius"?: string;
  borderRadius?: string;
  /** Border style */
  "border-style"?: string;
  borderStyle?: string;
  /** Border width */
  "border-width"?: string;
  borderWidth?: string;
  /** Column gap */
  "column-gap"?: string;
  columnGap?: string;
  /** Stack direction */
  direction?: "inline" | "block" | string;
  /** Display mode */
  display?: "auto" | "none" | string;
  /** Gap between elements */
  gap?: string;
  /** Inline size (width) */
  "inline-size"?: string;
  inlineSize?: string;
  /** Justify content along inline axis */
  "justify-content"?: string;
  justifyContent?: string;
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
  overflow?: "visible" | "hidden";
  /** Padding on all sides */
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
  /** Row gap */
  "row-gap"?: string;
  rowGap?: string;
}

/**
 * Box component attributes for admin extensions
 */
interface SAdminBoxAttributes extends SAdminStackAttributes {
  // Box inherits all Stack attributes
}

/**
 * Grid component attributes for admin extensions
 */
interface SAdminGridAttributes extends SAdminStackAttributes {
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
  /** Justify items */
  "justify-items"?: string;
  justifyItems?: string;
}

/**
 * GridItem component attributes
 */
interface SAdminGridItemAttributes {
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
 * Section component attributes for admin extensions
 */
interface SAdminSectionAttributes {
  /** Screen reader label when no heading */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Section heading */
  heading?: string;
  /** Padding control */
  padding?: "base" | "none";
}

/**
 * Badge component attributes for admin extensions
 */
interface SAdminBadgeAttributes {
  /** Color intensity */
  color?: "base" | "strong";
  /** Icon to display */
  icon?: string;
  /** Semantic tone */
  tone?: "info" | "success" | "caution" | "warning" | "critical";
}

/**
 * Banner component attributes for admin extensions
 */
interface SAdminBannerAttributes {
  /** Whether dismissible */
  dismissible?: boolean;
  /** Banner status */
  status?: "info" | "success" | "warning" | "critical";
  /** Banner title */
  title?: string;
}

/**
 * Avatar component attributes for admin extensions
 */
interface SAdminAvatarAttributes {
  /** Alt text */
  alt?: string;
  /** Fallback initials */
  initials?: string;
  /** Avatar size */
  size?: "small" | "small-200" | "base" | "large" | "large-200";
  /** Image source URL */
  src?: string;
}

/**
 * Icon component attributes for admin extensions
 */
interface SAdminIconAttributes {
  /** Color intensity */
  color?: "base" | "subdued";
  /** Unique identifier */
  id?: string;
  /** Interest target */
  "interest-for"?: string;
  interestFor?: string;
  /** Icon size */
  size?: "small" | "base";
  /** Semantic tone */
  tone?: "info" | "success" | "warning" | "caution" | "critical" | "auto" | "neutral";
  /** Icon type */
  type?: string;
}

/**
 * Image component attributes for admin extensions
 */
interface SAdminImageAttributes {
  /** Alt text */
  alt?: string;
  /** Image source URL */
  src?: string;
}

/**
 * Thumbnail component attributes for admin extensions
 */
interface SAdminThumbnailAttributes {
  /** Alt text */
  alt?: string;
  /** Thumbnail size */
  size?: "small" | "medium" | "large";
  /** Image source URL */
  src?: string;
}

/**
 * Link component attributes for admin extensions
 */
interface SAdminLinkAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Command action */
  command?: "--auto" | "--show" | "--hide" | "--toggle";
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Download filename */
  download?: string;
  /** URL to navigate to */
  href?: string;
  /** Relationship */
  rel?: string;
  /** Target window */
  target?: "auto" | "_blank" | "_self" | "_parent" | "_top" | string;
}

/**
 * Heading component attributes for admin extensions
 */
interface SAdminHeadingAttributes {
  /** Override heading level */
  "accessibility-level"?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  accessibilityLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Text component attributes for admin extensions
 */
interface SAdminTextAttributes {
  /** Semantic role */
  "accessibility-role"?: string;
  accessibilityRole?: string;
  /** Text color */
  color?: "subdued" | "base" | "strong";
  /** Text style type */
  type?: "strong" | "emphasis" | "subdued" | "code";
}

/**
 * Paragraph component attributes for admin extensions
 */
interface SAdminParagraphAttributes {
  // Paragraph has no specific attributes
}

/**
 * Divider component attributes for admin extensions
 */
interface SAdminDividerAttributes {
  // Divider has no specific attributes
}

/**
 * Spinner component attributes for admin extensions
 */
interface SAdminSpinnerAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Spinner size */
  size?: "small" | "large";
}

/**
 * Tooltip component attributes for admin extensions
 */
interface SAdminTooltipAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * Menu component attributes for admin extensions
 */
interface SAdminMenuAttributes {
  /** Unique identifier */
  id?: string;
}

/**
 * ButtonGroup component attributes for admin extensions
 */
interface SAdminButtonGroupAttributes {
  // Groups buttons together
}

/**
 * Clickable component attributes for admin extensions
 */
interface SAdminClickableAttributes {
  /** Screen reader label */
  "accessibility-label"?: string;
  accessibilityLabel?: string;
  /** Command action */
  command?: "--auto" | "--show" | "--hide" | "--toggle";
  /** Command target ID */
  "command-for"?: string;
  commandFor?: string;
  /** Disabled state */
  disabled?: boolean;
  /** URL to navigate to */
  href?: string;
  /** Target window */
  target?: "auto" | "_blank" | "_self" | "_parent" | "_top" | string;
}

/**
 * ClickableChip component attributes for admin extensions
 */
interface SAdminClickableChipAttributes {
  /** Disabled state */
  disabled?: boolean;
}

/**
 * Chip component attributes for admin extensions
 */
interface SAdminChipAttributes {
  // Displays keyword/tag
}

/**
 * Form component attributes for admin extensions
 */
interface SAdminFormAttributes {
  /** Disabled state */
  disabled?: boolean;
  /** Unique identifier */
  id?: string;
}

/**
 * ColorField component attributes for admin extensions
 */
interface SAdminColorFieldAttributes extends SAdminTextFieldAttributes {
  // ColorField shares TextField attributes
}

/**
 * ColorPicker component attributes for admin extensions
 */
interface SAdminColorPickerAttributes {
  /** Selected color value */
  value?: string;
}

/**
 * DateField component attributes for admin extensions
 */
interface SAdminDateFieldAttributes extends SAdminTextFieldAttributes {
  /** Date input type */
  type?: "date";
}

/**
 * DatePicker component attributes for admin extensions
 */
interface SAdminDatePickerAttributes {
  /** Disabled state */
  disabled?: boolean;
  /** Field label */
  label?: string;
  /** Max selectable date */
  max?: string;
  /** Min selectable date */
  min?: string;
  /** Range selection */
  range?: boolean;
  /** Selected date value */
  value?: string;
}

/**
 * EmailField component attributes for admin extensions
 */
interface SAdminEmailFieldAttributes extends SAdminTextFieldAttributes {
  // EmailField shares TextField attributes
}

/**
 * PasswordField component attributes for admin extensions
 */
interface SAdminPasswordFieldAttributes extends SAdminTextFieldAttributes {
  // PasswordField shares TextField attributes
}

/**
 * SearchField component attributes for admin extensions
 */
interface SAdminSearchFieldAttributes extends SAdminTextFieldAttributes {
  // SearchField shares TextField attributes
}

/**
 * URLField component attributes for admin extensions
 */
interface SAdminURLFieldAttributes extends SAdminTextFieldAttributes {
  // URLField shares TextField attributes
}

/**
 * MoneyField component attributes for admin extensions
 */
interface SAdminMoneyFieldAttributes extends SAdminTextFieldAttributes {
  /** Currency code */
  currency?: string;
}

/**
 * Table component attributes for admin extensions
 */
interface SAdminTableAttributes {
  // Table uses standard HTML table structure
}

/**
 * OrderedList component attributes for admin extensions
 */
interface SAdminOrderedListAttributes {
  // Uses standard list items
}

/**
 * UnorderedList component attributes for admin extensions
 */
interface SAdminUnorderedListAttributes {
  // Uses standard list items
}

/**
 * QueryContainer component attributes for admin extensions
 */
interface SAdminQueryContainerAttributes {
  // Enables container query based responsive behavior
}

// ============================================================================
// Event Types
// ============================================================================

/**
 * Extendable event with waitUntil support
 */
interface AdminExtendableEvent extends Event {
  /** Provide a promise that signals the length and eventual success/failure of actions */
  waitUntil(promise: Promise<void>): void;
}

/**
 * Function settings submit event
 */
interface AdminFunctionSettingsSubmitEvent extends AdminExtendableEvent {
  currentTarget: HTMLElement;
}

/**
 * Function settings reset event
 */
interface AdminFunctionSettingsResetEvent extends Event {
  currentTarget: HTMLElement;
}

// ============================================================================
// SvelteKit Module Augmentation
// ============================================================================

declare namespace svelteHTML {
  interface IntrinsicElements {
    // Admin Extension Specific Components
    /** Admin action modal container @see https://shopify.dev/docs/api/admin-extensions/components/adminaction */
    "s-admin-action": SAdminActionAttributes;
    /** Admin block for inline resource page rendering @see https://shopify.dev/docs/api/admin-extensions/components/adminblock */
    "s-admin-block": SAdminBlockAttributes;
    /** Admin print action for print preview @see https://shopify.dev/docs/api/admin-extensions/components/adminprintaction */
    "s-admin-print-action": SAdminPrintActionAttributes;
    /** Function settings form with save bar integration @see https://shopify.dev/docs/api/admin-extensions/components/functionsettings */
    "s-function-settings": SFunctionSettingsAttributes;

    // Layout Components
    /** Stack layout @see https://shopify.dev/docs/api/admin-extensions/components/stack */
    "s-stack": SAdminStackAttributes;
    /** Box container @see https://shopify.dev/docs/api/admin-extensions/components/box */
    "s-box": SAdminBoxAttributes;
    /** Grid layout @see https://shopify.dev/docs/api/admin-extensions/components/grid */
    "s-grid": SAdminGridAttributes;
    /** Grid item @see https://shopify.dev/docs/api/admin-extensions/components/grid */
    "s-grid-item": SAdminGridItemAttributes;
    /** Section container @see https://shopify.dev/docs/api/admin-extensions/components/section */
    "s-section": SAdminSectionAttributes;
    /** Query container @see https://shopify.dev/docs/api/admin-extensions/components/querycontainer */
    "s-query-container": SAdminQueryContainerAttributes;
    /** Visual divider @see https://shopify.dev/docs/api/admin-extensions/components/divider */
    "s-divider": SAdminDividerAttributes;

    // Interactive Components
    /** Button @see https://shopify.dev/docs/api/admin-extensions/components/button */
    "s-button": SAdminButtonAttributes;
    /** Link @see https://shopify.dev/docs/api/admin-extensions/components/link */
    "s-link": SAdminLinkAttributes;
    /** Clickable container @see https://shopify.dev/docs/api/admin-extensions/components/clickable */
    "s-clickable": SAdminClickableAttributes;
    /** Button group @see https://shopify.dev/docs/api/admin-extensions/components/buttongroup */
    "s-button-group": SAdminButtonGroupAttributes;
    /** Menu @see https://shopify.dev/docs/api/admin-extensions/components/menu */
    "s-menu": SAdminMenuAttributes;

    // Form Components
    /** Text field @see https://shopify.dev/docs/api/admin-extensions/components/textfield */
    "s-text-field": SAdminTextFieldAttributes;
    /** Text area @see https://shopify.dev/docs/api/admin-extensions/components/textarea */
    "s-text-area": SAdminTextAreaAttributes;
    /** Number field @see https://shopify.dev/docs/api/admin-extensions/components/numberfield */
    "s-number-field": SAdminNumberFieldAttributes;
    /** Checkbox @see https://shopify.dev/docs/api/admin-extensions/components/checkbox */
    "s-checkbox": SAdminCheckboxAttributes;
    /** Switch @see https://shopify.dev/docs/api/admin-extensions/components/switch */
    "s-switch": SAdminSwitchAttributes;
    /** Select @see https://shopify.dev/docs/api/admin-extensions/components/select */
    "s-select": SAdminSelectAttributes;
    /** Option @see https://shopify.dev/docs/api/admin-extensions/components/select */
    "s-option": SAdminOptionAttributes;
    /** Option group @see https://shopify.dev/docs/api/admin-extensions/components/select */
    "s-option-group": SAdminOptionGroupAttributes;
    /** Choice list @see https://shopify.dev/docs/api/admin-extensions/components/choicelist */
    "s-choice-list": SAdminChoiceListAttributes;
    /** Choice @see https://shopify.dev/docs/api/admin-extensions/components/choicelist */
    "s-choice": SAdminChoiceAttributes;
    /** Email field @see https://shopify.dev/docs/api/admin-extensions/components/emailfield */
    "s-email-field": SAdminEmailFieldAttributes;
    /** Password field @see https://shopify.dev/docs/api/admin-extensions/components/passwordfield */
    "s-password-field": SAdminPasswordFieldAttributes;
    /** Search field @see https://shopify.dev/docs/api/admin-extensions/components/searchfield */
    "s-search-field": SAdminSearchFieldAttributes;
    /** URL field @see https://shopify.dev/docs/api/admin-extensions/components/urlfield */
    "s-url-field": SAdminURLFieldAttributes;
    /** Money field @see https://shopify.dev/docs/api/admin-extensions/components/moneyfield */
    "s-money-field": SAdminMoneyFieldAttributes;
    /** Color field @see https://shopify.dev/docs/api/admin-extensions/components/colorfield */
    "s-color-field": SAdminColorFieldAttributes;
    /** Color picker @see https://shopify.dev/docs/api/admin-extensions/components/colorpicker */
    "s-color-picker": SAdminColorPickerAttributes;
    /** Date field @see https://shopify.dev/docs/api/admin-extensions/components/datefield */
    "s-date-field": SAdminDateFieldAttributes;
    /** Date picker @see https://shopify.dev/docs/api/admin-extensions/components/datepicker */
    "s-date-picker": SAdminDatePickerAttributes;
    /** Form @see https://shopify.dev/docs/api/admin-extensions/components/form */
    "s-form": SAdminFormAttributes;

    // Display Components
    /** Heading @see https://shopify.dev/docs/api/admin-extensions/components/heading */
    "s-heading": SAdminHeadingAttributes;
    /** Text @see https://shopify.dev/docs/api/admin-extensions/components/text */
    "s-text": SAdminTextAttributes;
    /** Paragraph @see https://shopify.dev/docs/api/admin-extensions/components/paragraph */
    "s-paragraph": SAdminParagraphAttributes;
    /** Badge @see https://shopify.dev/docs/api/admin-extensions/components/badge */
    "s-badge": SAdminBadgeAttributes;
    /** Chip @see https://shopify.dev/docs/api/admin-extensions/components/chip */
    "s-chip": SAdminChipAttributes;
    /** Clickable chip @see https://shopify.dev/docs/api/admin-extensions/components/clickablechip */
    "s-clickable-chip": SAdminClickableChipAttributes;

    // Media Components
    /** Avatar @see https://shopify.dev/docs/api/admin-extensions/components/avatar */
    "s-avatar": SAdminAvatarAttributes;
    /** Icon @see https://shopify.dev/docs/api/admin-extensions/components/icon */
    "s-icon": SAdminIconAttributes;
    /** Image @see https://shopify.dev/docs/api/admin-extensions/components/image */
    "s-image": SAdminImageAttributes;
    /** Thumbnail @see https://shopify.dev/docs/api/admin-extensions/components/thumbnail */
    "s-thumbnail": SAdminThumbnailAttributes;

    // Feedback Components
    /** Spinner @see https://shopify.dev/docs/api/admin-extensions/components/spinner */
    "s-spinner": SAdminSpinnerAttributes;
    /** Banner @see https://shopify.dev/docs/api/admin-extensions/components/banner */
    "s-banner": SAdminBannerAttributes;
    /** Tooltip @see https://shopify.dev/docs/api/admin-extensions/components/tooltip */
    "s-tooltip": SAdminTooltipAttributes;

    // List Components
    /** Ordered list @see https://shopify.dev/docs/api/admin-extensions/components/orderedlist */
    "s-ordered-list": SAdminOrderedListAttributes;
    /** Unordered list @see https://shopify.dev/docs/api/admin-extensions/components/unorderedlist */
    "s-unordered-list": SAdminUnorderedListAttributes;
    /** Table @see https://shopify.dev/docs/api/admin-extensions/components/table */
    "s-table": SAdminTableAttributes;
  }
}

export {
  // Admin Extension Specific
  SAdminActionAttributes,
  SAdminBlockAttributes,
  SAdminPrintActionAttributes,
  SFunctionSettingsAttributes,

  // Polaris Components
  SAdminButtonAttributes,
  SAdminTextFieldAttributes,
  SAdminNumberFieldAttributes,
  SAdminTextAreaAttributes,
  SAdminSelectAttributes,
  SAdminOptionAttributes,
  SAdminOptionGroupAttributes,
  SAdminCheckboxAttributes,
  SAdminSwitchAttributes,
  SAdminChoiceListAttributes,
  SAdminChoiceAttributes,
  SAdminStackAttributes,
  SAdminBoxAttributes,
  SAdminGridAttributes,
  SAdminGridItemAttributes,
  SAdminSectionAttributes,
  SAdminBadgeAttributes,
  SAdminBannerAttributes,
  SAdminAvatarAttributes,
  SAdminIconAttributes,
  SAdminImageAttributes,
  SAdminThumbnailAttributes,
  SAdminLinkAttributes,
  SAdminHeadingAttributes,
  SAdminTextAttributes,
  SAdminParagraphAttributes,
  SAdminDividerAttributes,
  SAdminSpinnerAttributes,
  SAdminTooltipAttributes,
  SAdminMenuAttributes,
  SAdminButtonGroupAttributes,
  SAdminClickableAttributes,
  SAdminClickableChipAttributes,
  SAdminChipAttributes,
  SAdminFormAttributes,
  SAdminColorFieldAttributes,
  SAdminColorPickerAttributes,
  SAdminDateFieldAttributes,
  SAdminDatePickerAttributes,
  SAdminEmailFieldAttributes,
  SAdminPasswordFieldAttributes,
  SAdminSearchFieldAttributes,
  SAdminURLFieldAttributes,
  SAdminMoneyFieldAttributes,
  SAdminTableAttributes,
  SAdminOrderedListAttributes,
  SAdminUnorderedListAttributes,
  SAdminQueryContainerAttributes,

  // Event Types
  AdminExtendableEvent,
  AdminFunctionSettingsSubmitEvent,
  AdminFunctionSettingsResetEvent,
};
