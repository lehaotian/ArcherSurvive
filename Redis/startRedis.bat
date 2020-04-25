@echo off
cd /d ./Redis-7001
start "7001" cmd /k call redisStart.bat
cd ..
cd /d ./Redis-7002
start "7002" cmd /k call redisStart.bat
cd ..
cd /d ./Redis-7003
start "7003" cmd /k call redisStart.bat
cd ..
cd /d ./Redis-7004
start "7004" cmd /k call redisStart.bat
cd ..
cd /d ./Redis-7005
start "7005" cmd /k call redisStart.bat
cd ..
cd /d ./Redis-7006
start "7006" cmd /k call redisStart.bat
cd ..
exit