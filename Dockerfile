FROM amazon/aws-lambda-nodejs:12.2021.09.13.11 AS builder
# pre-defined LAMBDA_TASK_ROOT = /var/task
WORKDIR ${LAMBDA_TASK_ROOT}

COPY ./ ${LAMBDA_TASK_ROOT}

RUN mkdir -p /var/cache/npm

RUN npm ci

RUN npm run build

FROM amazon/aws-lambda-nodejs:12.2021.09.13.11

WORKDIR ${LAMBDA_TASK_ROOT}

COPY ./package*.json ${LAMBDA_TASK_ROOT}/
COPY ./tsconfig.json ${LAMBDA_TASK_ROOT}/

# Install dependencies
RUN npm install

# Copy dist from builder
COPY --from=builder ${LAMBDA_TASK_ROOT}/dist/ dist

CMD ["dist/main.handler"]
