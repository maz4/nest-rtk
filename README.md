# NEST-RTK

<!-- ![NestJS](https://docs.nestjs.com/assets/logo-small.svg) -->

<img src="https://docs.nestjs.com/assets/logo-small.svg" alt="NestJS" width="40" height="40"/>
<img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png" alt="Swagger" width="40" height="40"/>
<img src="https://redux.js.org/img/redux.svg" alt="RTK Query" width="40" height="40"/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2tHGmbh1QR77hDW52PzJ5ClQCooKU-WRhzl_JHpQU&s" alt="NextJS" width="120" height="35"/>

Test project to check how to use NestJS framework together with RTK-Query on the frontend to eliminate problem of keeping track of types on the back end and front end

Everything starts with DTOs created for the endpoint. The DTOs need to have proper types and decorators.
In the controller define used and returned data with @ApiParam, @ApiProperty and @ApiBody swagger decorators. This data will be used to generate detailed swagger file.

After configuring the redux in the web directory run `npx @rtk-query/codegen-openapi openapi-config.ts` in terminal to generate hooks for data fetching.
As you can see from the command this consumes the swagger file and uses all fo the data generated form the DTOs

`users.gen.ts` is an auto generated file with hooks ready to use on the frontend [web/src/store/api/gen/users.gen.ts](web/src/store/api/gen/users.gen.ts)

Note
Ideal setup would be to have a code generation to create entity files based on the prisma models and use it to extend or pick from theme in the DTOs.

## Core technologies:

- server:
  - NestJS
    - generate swagger-spec.json
  - Prisma
  - Postgres
- web
  - NextJS
  - RTK-Query
    - auto gen code
      - consume swagger-spec.json to generate react hooks to fetch data.

## How to run it

### BACKEND Start NestJS server

Run one terminal in `./server` directory and run `npm run start:dev`

### FRONTEND Start NextJS server

Run second terminal in `./web` directory and run `npm run dev`

## How to run auto gen

will add soon
