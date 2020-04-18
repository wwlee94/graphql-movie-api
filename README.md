# graphql-movie-api
This is Movie API with GraphQL

### 어썸한 영화API를 만들 예정 !
어떻게? GraphQL 기본 원리를 일단 이해하고 GraphQL Yoga를 사용하여 NodeJS + GraphQL 서버를 만든다.

### GraphQL 요즘 엄청 핫한 이유?
#### `REST API` 의 단점을 해결 !

1. `Over-fetching` 해결
    - 요청한 영역의 정보보다, 많은 정보를 서버에서 받게 되는 것
2. `Under-fetching` 해결
    - REST에서 하나를 완성하려고 많은 소스를 요청하는 것
    - 예를 들어, `회원`, `포스트`, `팔로워` 정보를 서버로 요청하고 싶은 경우

#### `REST API` 의 경우 원하는 데이터를 받기 위해 3번의 API 호출이 필요하다.

    /users/<id> : 회원 정보 요청  
    /users/<id>/posts : 회원이 등록한 게시글 요청  
    /users/<id>/followers : 회원을 팔로우하는 유저 정보

#### 반면에, `GraphQL` 의 경우 1번의 API 호출로 원하는 정보를 가져올 수 있다.

    query{
      user(id : 1){
        name
        posts{
          title
        }
        followers(last : 3){
          name
        }
      }
    }

### GraphQL 개발 이후 얻은 것
1. 기초적인 수준이지만 graphQL 기본기에 대하여 이해하게 된다.
2. graphQL를 활용해서 간단한 서버를 만들수 있다.

### GraphQL Playground
<image src="./images/graphql_playground.png">