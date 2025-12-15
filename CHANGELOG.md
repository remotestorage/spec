# draft-dejong-remotestorage-14.txt

No changes, just extended the expiry date by 6 months.

# draft-dejong-remotestorage-13.txt

No changes, just extended the expiry date by 6 months.

# draft-dejong-remotestorage-12.txt

## Breaking for clients and servers:

* a document and a subfolder within the same folder cannot have the same
  name

# draft-dejong-remotestorage-11.txt

## Breaking for servers:

* last-modified date should now be included for document items in a folder
  description.

## Non-breaking:

* The list of http response codes was ordered by code, increasing.
* A duplicate paragraph was removed.
* The use of the 412 Precondition Failed response code was  clarified.

# draft-dejong-remotestorage-10.txt

No changes, just extended the expiry date by 6 months.

# draft-dejong-remotestorage-09.txt

## Breaking for clients:

* The content-type header value on a PUT request is now explicitly required
  to be a valid Content-Type. This is only to align with the HTTP spec, and
  server implementations are encouraged to still just treat it as an opaque
  ASCII string, rather than comparing it to some whitelist of valid values.

# draft-dejong-remotestorage-08.txt

No changes, just extended the expiry date by 6 months.

# draft-dejong-remotestorage-07.txt

## Breaking for servers:

* The app manifest is no longer guaranteed to contain a 'datastores-access'
  field.

## Breaking for clients:

* Zero-click login when the app is opened through the `remotestorage=` URL
  fragment parameter (the storage-first flow) is no longer allowed, the app
  should now ask for user confirmation before proceeding to connect. Also, if a
  `remotestorage=` parameter is present, the `access_token=` and `scope=`
  parameters should be ignored.

# draft-dejong-remotestorage-06.txt

## Breaking for servers as well as clients:

* The difference between 401 and 403 http response status was clarified to match
  the way they are defined by the Bearer token spec.
* Content-Range headers are no longer allowed on PUT requests.
* The Expires: 0 header was replaced by Cache-Control: no-cache.
* The WebFinger examples were updated to conform to the WebFinger spec. This
  includes changing `false` values to `null`, for example.

## Breaking for servers:

* Apart from GET requests, HEAD requests are also allowed without Authorization
  request header on public documents.
* Servers that support range requests should now announce this not only through
  WebFinger, but also through the HTTP 'Accept-Ranges' header.

## Breaking for clients:

* Apart from acct:me@mydomain.com ('me@mydomain.com' in UI), http://mydomain.com/
  ('mydomain.com' in UI) is now allowed as a user address for WebFinger discovery.
* Access-Control-Allow-Origin: * is now also allowed on requests with preflight.
  This was changed in the CORS spec, and has already been implemented by all major
  browsers.
* Item names '.' and '..' are no longer allowed.

# draft-dejong-remotestorage-05.txt

## Breaking for servers as well as clients:
* The link relation in the WebFinger announcement was updated from 'remotestorage'
  to 'http://tools.ietf.org/id/draft-dejong-remotestorage' (issue #78).
* The version string in the WebFinger announcement was updated from -04 to -05.

## Breaking for clients:
* Servers MAY respond with a 4xx response code if the Content-Type is not an
  ASCII string, is too long, is missing altogether, etc. (issues #84
  and #86).

# draft-dejong-remotestorage-04.txt

## Breaking for servers as well as clients:
* The version string in the WebFinger announcement was updated from -03 to -04
* Implicit auth is now indicated with a `null` <auth-dialog> property instead of `false`.
* The way to announce support for query parameter bearer tokens and range requests has changed, both for servers that do support it, and servers that don't.

## Non-breaking:
* Servers may now offer any extension features they want.
* Several mistakes in the text and wire examples were fixed.
* Several confusing formulations in the text were improved.
* Mention "group accounts", to which multiple human users have access.

# draft-dejong-remotestorage-03.txt

## Breaking for servers as well as clients:

* The content-type for folder listings was corrected to application/ld+json
* The version string in the WebFinger announcement was updated from -02 to -03
* Switch to the datastores-access syntax in open web app manifest format

## Breaking for servers:

* Serving a 404 for a folder is no longer allowed; serve a folder description with zero items instead.
* Servers MUST now comply with all of HTTP/1.1, including chunked uploads

## Breaking for clients:

* Servers MAY now expire access tokens, in line with the OAuth spec.
* Servers MAY now use Kerberos instead of OAuth.

## Non-breaking:

* The option to offer a manual way to create access tokens is now mentioned
* The fact that strong ETags make gzipping impossible is now mentioned
* Several small changes to clarify and correct the spec text
* A build script and this changelog were added to the git repo on github.

# draft-dejong-remotestorage-02.txt

## Breaking for servers as well as clients:

* The root scope was renamed from 'root' to '*'

## Breaking for servers:

* The 'Expires: 0' caching header became obligatory on successful GET requests
