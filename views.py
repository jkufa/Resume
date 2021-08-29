#!/usr/bin/python3
import requests
import subprocess
import locale
from time import sleep
VIDEO_ID_FILE = "videoIDs.txt"
BASE_URI = "https://www.youtube.com/watch?v="
FIRST = 'viewCount"'
SECOND = '","author'
VAR = "!REPLACE!"
def loadIDs():
    videoIDs = []
    with open(VIDEO_ID_FILE, 'r') as f:
        for line in f.readlines():
            videoIDs.append(line)
    return videoIDs

def getViewForVideo(postfix):
    response = requests.get(BASE_URI + postfix)
    response = response.text
    viewcount = response[response.find(FIRST) + len(FIRST) + 2:response.find(SECOND)]
    return int(viewcount)

def replaceTexFile(tot):
    tot = f"{tot:,}"
    subprocess.run('sed \'s/%s/%s/\' replaceme.tex > anderson-mark-resume.tex' % (VAR, str(tot)), shell=True)

def main():
    ids = loadIDs()
    tot = 0
    for postfix in ids:
        vidViews = getViewForVideo(postfix)
        tot = tot + vidViews 
        print("Video has %d views" % int(vidViews))
    print(tot)

    
        

if __name__ == "__main__":
    main()