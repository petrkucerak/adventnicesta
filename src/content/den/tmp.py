# Parse inputs
with open("tmp.txt", "r", encoding="utf-8") as i:
    data = i.read()
    
    data = data.split("(Vstupní modlitba)")
    
    days = []
    for d in data:
        split = d.split("\n\n")
        
        # Remove empty strings
        el = []
        for e in split:
            if e != "":
                el.append(e)
        
        if len(el) > 5:
            day = {
                "dayName": el[0],
                "source": el[1],
                "quote": el[2],
                "content": el[3].replace("\n", "\n\n"),
                "author": el[4],
                "prayer": el[5],
                
            }
            days.append(day)

# print(days)




# Prepare outputs
for i in range(24):
    day = i + 1
    if i < 9:
        slug = f"2025-12-0{day}.md"
    else:
        slug = f"2025-12-{day}.md"

    dayName = days[day]["dayName"]
    author = days[day]["author"]
    quote = days[day]["quote"]
    source = days[day]["source"]
    prayer = days[day]["prayer"]
    content = days[day]["content"]

    with open(slug, "w+", encoding="utf-8") as f:
        text = f"""---
dayName: "{dayName}"
date: "{slug.replace(".md", "")}"
author: '{author}'
authorDetails: "details"

bibleQuote: "{quote}"
source: "{source}"

prayer: "{prayer}"

---

{content}


"""
        f.write(text)
