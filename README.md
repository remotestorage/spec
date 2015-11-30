# Contributing

This repository is where we keep track of the versioning of the remoteStorage spec:

    https://tools.ietf.org/id/draft-dejong-remotestorage-**.txt

If you would like to suggest a change in the remoteStorage spec, you can open an issue
on https://github.com/remotestorage/spec/issues and discuss your proposal with the spec
authors.

# Versioning

Each six months (max 185 days), the output is checked using idnits, submitted to the IETF
as an Internet Draft, and published on the apps-discuss mailing list.

Authors of remoteStorage-based apps are encouraged to use a recent version of
[remotestorage.js](https://github.com/remotestorage/remotestorage.js), which aims to
support each new spec version on the day it is released, at the latest.

Implementers of remoteStorage servers and clients are encouraged to always offer support
for the latest three versions of the spec.

Storage providers should aim to expose the *previous* version of this spec, so that app
authors have six months to update their apps before they become potentially incompatible.

The latest three versions can be thought of as 'new', 'live', and 'old'. When for instance
version 03 was published, version 02 moved from 'new' to 'live', and version 01 moved from
'live' to 'old'.

So during the six months after version `k` is published, apps should add support for the 'new'
version `k`, while still supporting 'live' version `k-1` and 'old' version `k-2`.
Storage providers should aim to switch from 'old' version `k-2` to 'live' version `k-1` as soon
as possible after version `k` is released.

More info about remoteStorage in general can be found on http://remotestorage.io/


# Build

To build for instance version 04, run:

````
    node build.js > release/draft-dejong-remotestorage-04.txt
````

