# rust-calljs

이 글은 [Rust를 WebAssembly로 컴파일하기](https://developer.mozilla.org/ko/docs/WebAssembly/Rust_to_wasm)에 있는 문서가 원본이다. 

## wasm-pack 설치

wasm-pack을 설치하다가 오류가 나서 다음을 사용하여 다시 설치했다. [https://github.com/rustwasm/wasm-pack/issues/1026](https://github.com/rustwasm/wasm-pack/issues/1026)을 참고했다. 

```shell
cargo install wasm-pack --no-default-features
```

## toml 수정
**hello-wasm/src/Cargo.toml**    
```toml
[package]
name = "jirepos-hello-wasm"
version = "0.1.0"
edition = "2021"
authors = ["Jirepos <jirepos@gmail.com>"]


[lib]
crate-type = ["cdylib"]

# See more keys and their definitions at https://doc.rust-lang.org/cargo/reference/manifest.html

[dependencies]
wasm-bindgen = "0.2"
```

## 패키지 빌드하기 

먼저 다음을 빌드 먼저 실행한다. 
```shell
cd hello-wasm
cargo build
```


mynpmusername은 npm에 등록할 사용자 이름이다.
```shell

wasm-pack build --scope mynpmusername
```
빌드하다가 오류나서 Cargo.toml에 다음을 추가했다.
```toml
# `wasm-opt` is on by default in for the release profile, but it can be
# disabled by setting it to `false`
[package.metadata.wasm-pack.profile.release]
wasm-opt = false
```


webpack 실행 시 오류 
[Webpack build failing with ERR_OSSL_EVP_UNSUPPORTED duplicate](https://stackoverflow.com/questions/69394632/webpack-build-failing-with-err-ossl-evp-unsupported)을 참조한다. 


```shell
export NODE_OPTIONS=--openssl-legacy-provider
```

Power shell에서는 다음과 같이 한다. 
```shell
$env:NODE_OPTIONS="--openssl-legacy-provider" 
```