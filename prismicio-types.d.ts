// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type PageDocumentDataSlicesSlice = SectionSlice | HeroSlice | RichTextSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

type SignUpDocumentDataSlicesSlice = RichTextSlice | SectionSlice;

/**
 * Content for Sign up documents
 */
interface SignUpDocumentData {
  /**
   * title field in *Sign up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Sign up*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Sign up*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<SignUpDocumentDataSlicesSlice> /**
   * Meta Title field in *Sign up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: sign_up.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Sign up*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: sign_up.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Sign up*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: sign_up.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;
}

/**
 * Sign up document from Prismic
 *
 * - **API ID**: `sign_up`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SignUpDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SignUpDocumentData>,
    "sign_up",
    Lang
  >;

export type AllDocumentTypes = PageDocument | SignUpDocument;

/**
 * Primary content in *Hero → Default → Primary*
 */
export interface HeroSliceDefaultPrimary {
  /**
   * eyebrowHeadline field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.default.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.default.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Default variation for Hero Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Hero → Image Right → Primary*
 */
export interface HeroSliceImageRightPrimary {
  /**
   * eyebrowHeadline field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: Eyebrow
   * - **API ID Path**: hero.imageRight.primary.eyebrowHeadline
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  eyebrowHeadline: prismic.KeyTextField;

  /**
   * title field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;

  /**
   * description field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * image field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * callToActionLabel field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLabel
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  callToActionLabel: prismic.KeyTextField;

  /**
   * callToActionLink field in *Hero → Image Right → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero.imageRight.primary.callToActionLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  callToActionLink: prismic.LinkField;
}

/**
 * Image Right variation for Hero Slice
 *
 * - **API ID**: `imageRight`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSliceImageRight = prismic.SharedSliceVariation<
  "imageRight",
  Simplify<HeroSliceImageRightPrimary>,
  never
>;

/**
 * Slice variation for *Hero*
 */
type HeroSliceVariation = HeroSliceDefault | HeroSliceImageRight;

/**
 * Hero Shared Slice
 *
 * - **API ID**: `hero`
 * - **Description**: Hero
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroSlice = prismic.SharedSlice<"hero", HeroSliceVariation>;

/**
 * Primary content in *RichText → Default → Primary*
 */
export interface RichTextSliceDefaultPrimary {
  /**
   * Content field in *RichText → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: Lorem ipsum...
   * - **API ID Path**: rich_text.default.primary.content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for RichText Slice
 *
 * - **API ID**: `default`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<RichTextSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *RichText*
 */
type RichTextSliceVariation = RichTextSliceDefault;

/**
 * RichText Shared Slice
 *
 * - **API ID**: `rich_text`
 * - **Description**: RichText
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type RichTextSlice = prismic.SharedSlice<
  "rich_text",
  RichTextSliceVariation
>;

/**
 * Primary content in *Section → Default → Primary*
 */
export interface SectionSliceDefaultPrimary {
  /**
   * title field in *Section → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Section → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * options field in *Section → Default → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: section.default.primary.options
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  options: prismic.SelectField<"1" | "2">;

  /**
   * boolean field in *Section → Default → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: section.default.primary.boolean
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  boolean: prismic.BooleanField;
}

/**
 * Default variation for Section Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<SectionSliceDefaultPrimary>,
  never
>;

/**
 * Primary content in *Section → with background → Primary*
 */
export interface SectionSliceWithBackgroundPrimary {
  /**
   * title field in *Section → with background → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.withBackground.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Section → with background → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: section.withBackground.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * options field in *Section → with background → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: section.withBackground.primary.options
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  options: prismic.SelectField<"1" | "2">;

  /**
   * boolean field in *Section → with background → Primary*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: section.withBackground.primary.boolean
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  boolean: prismic.BooleanField;

  /**
   * background color field in *Section → with background → Primary*
   *
   * - **Field Type**: Color
   * - **Placeholder**: *None*
   * - **API ID Path**: section.withBackground.primary.background_color
   * - **Documentation**: https://prismic.io/docs/field#color
   */
  background_color: prismic.ColorField;
}

/**
 * with background variation for Section Slice
 *
 * - **API ID**: `withBackground`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionSliceWithBackground = prismic.SharedSliceVariation<
  "withBackground",
  Simplify<SectionSliceWithBackgroundPrimary>,
  never
>;

/**
 * Slice variation for *Section*
 */
type SectionSliceVariation = SectionSliceDefault | SectionSliceWithBackground;

/**
 * Section Shared Slice
 *
 * - **API ID**: `section`
 * - **Description**: Section
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type SectionSlice = prismic.SharedSlice<
  "section",
  SectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      SignUpDocument,
      SignUpDocumentData,
      SignUpDocumentDataSlicesSlice,
      AllDocumentTypes,
      HeroSlice,
      HeroSliceDefaultPrimary,
      HeroSliceImageRightPrimary,
      HeroSliceVariation,
      HeroSliceDefault,
      HeroSliceImageRight,
      RichTextSlice,
      RichTextSliceDefaultPrimary,
      RichTextSliceVariation,
      RichTextSliceDefault,
      SectionSlice,
      SectionSliceDefaultPrimary,
      SectionSliceWithBackgroundPrimary,
      SectionSliceVariation,
      SectionSliceDefault,
      SectionSliceWithBackground,
    };
  }
}
