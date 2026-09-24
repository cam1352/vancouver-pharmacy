with open('src/app/book/page.tsx', 'r', encoding='utf-8') as f:
    code = f.read()
code = code.replace("className={py-3 px-4", "className={`py-3 px-4")
code = code.replace("hover:border-slate-300'}", "hover:border-slate-300'}`")
code = code.replace("className={py-3 rounded", "className={`py-3 rounded")
with open('src/app/book/page.tsx', 'w', encoding='utf-8') as f:
    f.write(code)