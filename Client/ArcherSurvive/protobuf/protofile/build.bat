protoc.exe ./Event.proto --java_out=java
protoc.exe ./Common.proto --java_out=java
protoc.exe ./GameResp.proto --java_out=java
protoc.exe ./GameReq.proto --java_out=java
protogen  -i:Event.proto -o:./cs/Event.cs  
protogen  -i:Common.proto -o:./cs/Common.cs  
protogen  -i:GameResp.proto -o:./cs/GameResp.cs  
protogen  -i:GameReq.proto -o:./cs/GameReq.cs  