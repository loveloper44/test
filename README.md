### 레포지토리 생성

```sh
github.com/modusign/lambda-nestjs-template/generate
```

브라우저에서 해당 엔드포인트를 통해 접속하면 템플릿을 통해 레포지토리가 생성됩니다.

### 사용법

레포지토리가 생성되면 우선 package.json 및 package-lock.json의 이름을 수정해주세요.
`lambda-nestjs-template`을 서비스에 맞게 수정하시면 됩니다!

# 로컬 테스트

로컬 테스트를 진행하기 위해서는 먼저 도커 컴포즈를 통해 람다를 실행 해야 합니다.

```sh
npm run compose
```

그 다음 아래를 참고하셔서 람다 호출을 하시면 됩니다!

```sh
curl -X POST -d "{}" http://localhost:9000/2015-03-31/functions/function/invocations
```
