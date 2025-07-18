# Git 2025-07-17

버전 관리 시작

```bash
cd (project-diretory)
git init
git config --global --list
git config --global core.autocrlf true
```

최초 버전 생성

```bash
git add . # 스테이지 업로드 (스테이징)
git status # 상태 확인
git commit -m "message" # 커밋 생성
git log
```

원격 저장소 추가

```bash
# git remote add 원격저장소별칭 원격저장소주소
git remote add origin https://github.com/username/repositoryname.git
```

원격 저장소 업로드

```bash
# git push 별칭 브랜치이름
git push origin main
```

원격 저장소 복제

```bash
# git clone 원격저장소주소
git clone https://github.com/username/repositoryname.git
```

원격 저장소 다운로드

```bash
# git pull 별칭 브랜치이름
git pull origin main
```
