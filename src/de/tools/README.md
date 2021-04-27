# Tools

## Video-/Audiobearbeitung

Die hier beschriebenen Tools lassen sich auf dem Mac mit [brew](https://brew.sh) installieren.

### ffmpeg

Mit folgendem Skript kann man aus einer mp3-Datei ein Video mit Standbild machen. Wozu? Wenn man zum Beispiel einen Podcast bei YouTube reinstellen möchte. Man braucht ein Video aus einer Audiodatei. Mit ffmpeg und diesem Skript geht das ohne zusätzliche Dienste!

```bash
#!/bin/bash

# Usage: ./pod2video.sh someaudio.mp3 mycover.png

# Tools ffmpeg and imagemagic are needed!
# Installation under maxOS using Homebrew: brew install ffmpeg

filename=$1
orig_cover=$2
output_dir=${3:-.}
bgcolor='#000000'
basename=`echo $(basename $filename)`
filename_without_ext=`echo "${basename}"|sed "s/\(.*\)\.\(.*\)/\1/"`
mkdir -p $output_dir
new_cover="${output_dir}/tmp_cover.jpg"
convert $orig_cover -background $bgcolor -gravity Center -resize 1280x720 -extent 1280x720 $new_cover
ffmpeg -loop 1 -r 1 -i $new_cover -i $filename -c:a aac -vcodec libx264 -shortest -pix_fmt yuv420p "$output_dir/$filename_without_ext.mp4"
rm -f $new_cover
```

### sox

Das ist ein cooles Tool, mit dem man sehr einfach über die Kommandozeile einzelne Audiodateien manipulieren bzw. konvertieren kann.

Zum Beispiel wollt ihr eine Datei aus dem WAV-Format in FLAC umwandeln. Warum? Weil FLAC die Datei verlustfrei komprimiert (anders als MP3), damit wird wenig Platz verbrauch, die Qualität bleibt erhalten. Wenn man z.B. viele Rohaufnahme für Podcasts auf der Festplatte liegen hat, wird sie schnell voll. Mit FLAC hat man die gleiche Qualität aber kleinere Dateien. Die Umwandlung mit *sox* geht so:

```bash
sox Rohaufnahme.WAV Rohaufnahme.flac
```

Mit *sox* wird noch das andere Programm installiert: *soxi*. Damit könnt ihr schnell die Informationen über eine Audiodatei anzeigen lassen:

```bash
> soxi 01-untitled.wav

Input File     : '01-untitled.wav'
Channels       : 1
Sample Rate    : 48000
Precision      : 25-bit
Duration       : 00:00:11.44 = 549075 samples ~ 857.93 CDDA sectors
File Size      : 2.20M
Bit Rate       : 1.54M
Sample Encoding: 32-bit Floating Point PCM
```