import re

with open('c:\\Users\\Sitasen\\Desktop\\Web site - Copy\\index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (
        r'<div class=\"image-placeholder profile-placeholder lightbox-trigger\"[\s\S]*?<span>Insert Profile Image</span>\s*</div>',
        '<img src=\"pic/SiRi_pic.jpg\" alt=\"Siriwimon Sitasen\" class=\"profile-img lightbox-trigger\" data-caption=\"Siriwimon Sitasen - Profile Image\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"CS3443: File Integrity Monitor\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/File_Integrity_present.jpg\" alt=\"CS3443: File Integrity Monitor\" class=\"project-img lightbox-trigger\" data-caption=\"CS3443: File Integrity Monitor\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\" data-caption=\"CS3773: Life Cal\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/LifeCal_present.jpg\" alt=\"CS3773: Life Cal\" class=\"project-img lightbox-trigger\" data-caption=\"CS3773: Life Cal\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"CS3513: CPR IoT System\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/CPR_present.jpg\" alt=\"CS3513: CPR IoT System\" class=\"project-img lightbox-trigger\" data-caption=\"CS3513: CPR IoT System\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"Database Management: Rescue Alert\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/RescueAlert_present.jpg\" alt=\"Rescue Alert\" class=\"project-img lightbox-trigger\" data-caption=\"Database Management: Rescue Alert\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"CS4773: Ghostly Garden\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/Ghostly garden_present.jpg\" alt=\"Ghostly Garden\" class=\"project-img lightbox-trigger\" data-caption=\"CS4773: Ghostly Garden\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"CS4773: Connect 4\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/Connect4_present.jpg\" alt=\"Connect 4\" class=\"project-img lightbox-trigger\" data-caption=\"CS4773: Connect 4\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"CS4473: Harmony Hotel\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/Harmony_present.jpg\" alt=\"Harmony Hotel\" class=\"project-img lightbox-trigger\" data-caption=\"CS4473: Harmony Hotel\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"CS3493: Personal Blog\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/PersonalBlog_present.jpg\" alt=\"Personal Blog\" class=\"project-img lightbox-trigger\" data-caption=\"CS3493: Personal Blog\">'
    ),
    (
        r'<div class=\"image-placeholder project-img lightbox-trigger\"\s*data-caption=\"Networking: Network Survey\">[\s\S]*?<span>Insert Image</span>\s*</div>',
        '<img src=\"pic/networkservey_present.jpg\" alt=\"Network Survey\" class=\"project-img lightbox-trigger\" data-caption=\"Networking: Network Survey\">'
    )
]

for pat, rep in replacements:
    content, count = re.subn(pat, rep, content)
    print(f"Replaced {count} times.")

with open('c:\\Users\\Sitasen\\Desktop\\Web site - Copy\\index.html', 'w', encoding='utf-8') as f:
    f.write(content)
