import os

path = r"D:\creatcraft\Creat\src\app\data\newsData.tsx"

with open(path, "r", encoding="utf-8") as f:
    text = f.read()

target = "</>"
replacement = '''                {/* Journey Banner Injected */}
                <img src="/journey-banner.png" alt="Quy trình trải nghiệm Creat Craft" className="w-full mt-12 mb-4 rounded-sm shadow-xl border border-[#C8963E]/20" />
            </>'''

text = text.replace(target, replacement)

with open(path, "w", encoding="utf-8") as f:
    f.write(text)

print("Replacement done!")
