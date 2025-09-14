// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { RequestOptions } from '../internal/request-options';

export class Pdf extends APIResource {
  /**
   * Generate a single PDF
   */
  generate(params: PdfGenerateParams, options?: RequestOptions): APIPromise<PdfGenerateResponse> {
    const { sync, ...body } = params;
    return this._client.post('/pdf/generate', { query: { sync }, body, ...options });
  }
}

/**
 * Unified PDF generation success response
 */
export interface PdfGenerateResponse {
  /**
   * Data payload for synchronous PDF generation
   */
  data: PdfGenerateResponse.SyncPdfData | PdfGenerateResponse.AsyncPdfData;

  /**
   * Human-readable summary of the response
   */
  message: string;

  /**
   * Response mode - sync for immediate PDF generation, async for background
   * processing
   */
  mode: 'sync' | 'async';

  /**
   * Indicates if the request was successful
   */
  success: boolean;

  /**
   * Environment where the PDF was generated
   */
  environment?: 'development' | 'production';

  /**
   * Type of template used for PDF generation (present if applicable)
   */
  templateType?: 'react' | 'html' | 'url';
}

export namespace PdfGenerateResponse {
  /**
   * Data payload for synchronous PDF generation
   */
  export interface SyncPdfData {
    /**
     * Number of credits consumed for this PDF generation
     */
    creditsUsed: number;

    /**
     * Direct URL to the generated PDF file
     */
    url: string;
  }

  /**
   * Data payload for asynchronous PDF generation
   */
  export interface AsyncPdfData {
    /**
     * Status of the PDF generation job
     */
    status: 'accepted';
  }
}

export interface PdfGenerateParams {
  /**
   * Query param: Whether to generate the PDF synchronously. Not recomended for
   * production use
   */
  sync?: boolean;

  /**
   * Body param: Any data that use inside the template. Prefer metadata if you are
   * not planning to use that data inside template
   */
  data?: unknown;

  /**
   * Body param:
   */
  html?: string;

  /**
   * Body param: Data associated with this render but not used inside template.
   */
  metadata?: unknown;

  /**
   * Body param: Advanced rendering options for PDF generation
   */
  renderOptions?: PdfGenerateParams.RenderOptions;

  /**
   * Body param: Unique Id of your template you like to render
   */
  templateId?: string;

  /**
   * Body param:
   */
  templateType?: 'react' | 'html' | 'url';

  /**
   * Body param: You can pass a url directly and get the webpage rendered.
   */
  url?: string;
}

export namespace PdfGenerateParams {
  /**
   * Advanced rendering options for PDF generation
   */
  export interface RenderOptions {
    /**
     * Whether to display header and footer on each page
     */
    displayHeaderFooter?: boolean;

    /**
     * HTML template for the page footer. Use placeholders like {{pageNumber}},
     * {{totalPages}}, {{date}}, {{title}}
     */
    footerTemplate?: string;

    /**
     * Paper format for the PDF. Overrides width and height if specified
     */
    format?: 'Letter' | 'Legal' | 'Tabloid' | 'Ledger' | 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'A6';

    /**
     * HTML template for the page header. Use placeholders like {{pageNumber}},
     * {{totalPages}}, {{date}}, {{title}}
     */
    headerTemplate?: string;

    /**
     * Page height in CSS units (e.g., "11in", "29.7cm", "600px")
     */
    height?: string;

    /**
     * Whether to render pages in landscape orientation
     */
    landscape?: boolean;

    /**
     * Page margins in CSS units
     */
    margin?: RenderOptions.Margin;

    /**
     * Whether to omit the background graphics and only render the content
     */
    omitBackground?: boolean;

    /**
     * Page ranges to render (e.g., "1-3,5,8-10" or "1" for single page)
     */
    pageRanges?: string;

    /**
     * File path where the PDF should be saved (server-side only)
     */
    path?: string;

    /**
     * Whether to use CSS @page size instead of format/width/height
     */
    preferCSSPageSize?: boolean;

    /**
     * Whether to print CSS backgrounds and images
     */
    printBackground?: boolean;

    /**
     * Scale factor for the PDF rendering (1 = 100%, 0.5 = 50%, 2 = 200%)
     */
    scale?: number;

    /**
     * Maximum time in milliseconds to wait for page load before generating PDF
     */
    timeout?: number;

    /**
     * Page width in CSS units (e.g., "8.5in", "21cm", "800px")
     */
    width?: string;
  }

  export namespace RenderOptions {
    /**
     * Page margins in CSS units
     */
    export interface Margin {
      /**
       * Bottom margin (e.g., "1in", "2.54cm", "20px")
       */
      bottom?: string;

      /**
       * Left margin (e.g., "1in", "2.54cm", "20px")
       */
      left?: string;

      /**
       * Right margin (e.g., "1in", "2.54cm", "20px")
       */
      right?: string;

      /**
       * Top margin (e.g., "1in", "2.54cm", "20px")
       */
      top?: string;
    }
  }
}

export declare namespace Pdf {
  export { type PdfGenerateResponse as PdfGenerateResponse, type PdfGenerateParams as PdfGenerateParams };
}
