import urllib.request
import re

url = "https://chatgpt.com/s/m_6a292d55ee04819186fa381b0f2fd5af"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
try:
    html = urllib.request.urlopen(req).read().decode('utf-8')
    match = re.search(r'<meta property="og:image" content="(.*?)"', html)
    if match:
        print("FOUND:", match.group(1))
    else:
        print("NOT FOUND")
except Exception as e:
    print("ERROR:", e)
