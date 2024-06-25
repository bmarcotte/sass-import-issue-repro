ARG NODE_VERSION
ARG NODE_PLATFORM
FROM node:${NODE_VERSION}-${NODE_PLATFORM} as with_src

# Install dependencies
# -----------------------------------------------------------------------------
RUN apt-get install g++ make python3

COPY package.json package-lock.json /builder/

WORKDIR /builder

RUN --mount=type=cache,id=npm-cache,target=/root/.npm \
  npm install --no-audit --progress=false --no-optional --prefer-offline

COPY . /builder/

FROM with_src as build-diff-dist
# Build the apps which are impacted by the differences with the given base
# -----------------------------------------------------------------------------
 
CMD ["npx", "nx", "run-many", "--target=build", "--configuration=production", "--parallel=5"]
