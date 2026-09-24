import os

def remove_bom(filepath):
    if not os.path.exists(filepath):
        return
    with open(filepath, 'rb') as f:
        content = f.read()
    if content.startswith(b'\xef\xbb\xbf'):
        content = content[3:]
        with open(filepath, 'wb') as f:
            f.write(content)
        print(f"Removed BOM from {filepath}")
    else:
        print(f"No BOM found in {filepath}")

remove_bom("src/app/globals.css")
remove_bom("tailwind.config.js")
remove_bom("postcss.config.js")