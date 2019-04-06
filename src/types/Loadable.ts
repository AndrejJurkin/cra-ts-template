export default interface Loadable {
  // Indicates when data is being loaded or fetched
  isLoading: boolean;

  // Indicates that data has already been loaded in the past
  // it can be displayed immediately and async refreshed
  isLoaded?: boolean;

  // Error to be displayed when loading fails
  loadingError?: {
    // Error message that we could display on the UI
    message?: string;

    // Any other generic metadata that we may pass in
    meta?: any;
  } | null;
}
