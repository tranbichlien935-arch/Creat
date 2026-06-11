import os
import shutil

dir_path = "D:/creatcraft/Creat/public/images/products"
os.makedirs(dir_path, exist_ok=True)

try:
    shutil.copyfile("C:/Users/admin/Downloads/h.jpg", f"{dir_path}/signature_new.jpg")
    print("signature_new copied")
except Exception as e:
    print(e)

try:
    shutil.copyfile("C:/Users/admin/.gemini/antigravity/brain/586a564b-ef6d-4fb4-b8d2-0ce71b3365b3/uploaded_image_1_1781165439220.png", f"{dir_path}/bestseller_new.png")
except Exception as e:
    pass

try:
    shutil.copyfile("C:/Users/admin/.gemini/antigravity/brain/586a564b-ef6d-4fb4-b8d2-0ce71b3365b3/uploaded_image_2_1781165439220.png", f"{dir_path}/stout_new.png")
except Exception as e:
    pass

with open("D:/creatcraft/Creat/py_ok.txt", "w") as f:
    f.write("OK PYTHON WAS HERE")
