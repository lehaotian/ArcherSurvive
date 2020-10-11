@echo off
for %%n in (*.proto) do (
protoc.exe ./%%n --java_out=D:\egret\ArcherSurvive\Server\ArcherSurvive\common\pojo\src\main\java
)