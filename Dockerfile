# syntax=docker/dockerfile:1

########## BUILD ##########
FROM oven/bun:1 AS build
WORKDIR /app
COPY package.json bun.lockb* ./
RUN bun install --frozen-lockfile
COPY . .
RUN bun run build

########## RUNTIME ##########
FROM node:20-alpine AS runtime
WORKDIR /srv
RUN npm i -g serve@14
COPY --from=build /app/dist ./dist

ENV PORT=80
EXPOSE 80

CMD ["sh", "-lc", "serve dist -l ${PORT}"]

