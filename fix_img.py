with open("src/app/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("vanclean_hero_1790110372640.jpg", "hero.jpg")

with open("src/app/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)

print("Fixed image path")
