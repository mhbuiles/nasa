# NASA

## How to run the project:

### 1. Clone project from GitHub.
### 2. Move to project's root directory.
### 3. Install all dependencies using *yarn install* command in a terminal.
### 4. Add a *.env* file to root directory (see variables to add below).
### 5. Run command: *yarn dev*.
### 6. Open *localhost://3000* in the browser.

## Tech stack:

### NextJS.
### TypeScript.
### TailwindCSS.
### TanStack/React Query.
### Used HeadlessUI unstyled components (Select, Switch and Tabs), custom styles added using Tailwind. It's important to mention that custom components were created as wrappers for the external lybrary's components, so they're not used directly out of the box inside the components and pages files created for this app.

## *.env* file variables:

### 1. NEXT_PUBLIC_API_URL="https://api.nasa.gov/mars-photos/api/v1/rovers"
### 2. NEXT_PUBLIC_NASA_API_KEY="yourCustomNasaApiKey"

### Make sure to add your own NASA API KEY, its pretty easy to get one by signing up in their site: https://api.nasa.gov
