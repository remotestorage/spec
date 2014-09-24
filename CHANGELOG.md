# draft-dejong-remotestorage-04.txt

## Breaking for servers as well as clients:
* The properties in the WebFinger announcement were changed to:
  https://github.com/remotestorage/spec/blob/cee9a26/draft-dejong-remotestorage-04.txt#L468-L474

## Non-breaking:
* Support for web-authoring was added as an optional feature.

# draft-dejong-remotestorage-03.txt

## Breaking for servers as well as clients:
* The content-type for folder listings was corrected to application/ld+json
* The version string in the webfinger announcement was updated from -02 to -03
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
