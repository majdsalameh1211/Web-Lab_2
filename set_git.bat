:: this bat file is used to set git repository
:: to run use .\set_git.bat
@echo off
:: add :: before the next row to initialize the repository
exit /b


echo "# Web-Lab_2" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/majdsalameh1211/Web-Lab_2.git
git push -u origin main