with open("src/app/services/[slug]/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("service.title.lower()", "service.title.toLowerCase()")

with open("src/app/services/[slug]/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed toLowerCase typo")
