# Chrome to Gnome-MPV

Here is a [video-demo](https://youtu.be/rXB-ScC8buQ)

## A bit hacky...

Adds context menu item to append `gnomempv://` to link url, selected text, or page url. 
You just need to add a url handler in your OS to open them.

In Linux it is pretty simple, just create a `.desktop` file in `~/.local/share/applications/`
* There is one in this repo
* I am sure you can google how to this on your operating system
* You need to delete `gnomempv://` before feeding url to your player

I am using gnome-mpv because it got `--enqueue` option, adds video to playlist, instead of opening new window.
Gnome-mpv uses mpv, and mpv uses youtube-dl, and it works with a *lot of sites, not just youtube.*

Add `--ytdl-raw-options=yes-playlist=` to gnome-mpv preferences, to make it work with youtube playlists.

## Hacky parts... fixable

* it opens new tab, and closes it on timeout, individual tab does not have unloaded event, and when `tabs.create()` calls back `tabs.remove()` closes tab before link being loaded.
* maybe it will trigger for iframe created in background.html, or even something like `document.createElement('a').click();`
* desktop file runs `echo %U | sed 's/gnomempv:\/\///g' | xargs gnome-mpv --enqueue`, is there a better way?

## Installing

It is not yet on chrome extensions, i doubt it ever will be.
So, download a zip and extract, go to `chrome://extensions/`, check 'Developer Mode', and click 'Load Unpacked Extension'