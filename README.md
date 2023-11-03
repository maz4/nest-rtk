# NEST-RTK

Test project to check how to use NestJS framework together with RTK-Query on the frontend to eliminate problem of keeping track of types on the back end and front end

Everything starts with DTOs created for the endpoint. The DTOs need to have proper types and decorators.
In the controller define used and returned data with @ApiParam, @ApiProperty and @ApiBody swagger decorators. This data will be used to generate detailed swagger file.

After configuring the redux in the web directory run `npx @rtk-query/codegen-openapi openapi-config.ts` in terminal to generate hooks for data fetching.
As you can see from the command this consumes the swagger file and uses all fo the data generated form the DTOs

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
