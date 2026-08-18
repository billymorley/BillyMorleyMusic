# Google Business Profile ↔ guitar lessons page

The website side is already updated in this folder.

## What was changed

- `guitar-lessons.html` now links directly to the Billy Morley Google Maps / Business Profile using its Place ID.
- A new **Reviews & photos on Google** panel appears under **Why learn with Billy?**.
- The panel now also includes a **Leave a Google review** button that opens Google’s review form for the same Place ID.
- The Service structured data now includes the Google profile in `sameAs`.
- No review count is hard-coded, so the page will not become out of date when more reviews arrive.

Google profile URL used:

`https://www.google.com/maps/search/?api=1&query=Billy+Morley%2C+32+Spring+Gardens+Pl%2C+Cardiff+CF24+1QZ&query_place_id=ChIJI3oQ200dbkgR9suO4BJjD-c`

## Link the Google Business Profile back to this page

While signed into the Google account that manages the profile:

1. Search Google for **Billy Morley** and open your Business Profile controls.
2. Choose **Edit profile**.
3. Open **Business information** (wording can vary slightly by device).
4. Find **Website** and enter:
   `https://billymorley.github.io/BillyMorleyMusic/guitar-lessons.html`
5. Save the change. Google may review the edit before it appears publicly.

## Leave-a-review button

The website currently uses this direct Google review-form URL:

`https://search.google.com/local/writereview?placeid=ChIJI3oQ200dbkgR9suO4BJjD-c`

You can also get Google’s own shareable review link while signed in to the profile:

1. Open your Business Profile.
2. Select **Read reviews**.
3. Select **Get more reviews**.
4. Copy the review link or QR code.

If Google ever changes the listing or Place ID, replace the website button URL with the fresh link from **Get more reviews**.

## Publishing this website update

Upload the files in this folder to the top level of the `BillyMorleyMusic` GitHub repository, replacing files with the same names. The only files changed for this update are:

- `guitar-lessons.html`
- `styles.css`

`GOOGLE-BUSINESS-LINKING.md` is just this instruction note and does not need to be published.
