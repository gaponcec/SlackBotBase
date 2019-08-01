FROM node:latest

ARG token
ENV slack_token=$token
RUN 
WORKDIR /starling-bot
RUN npm i && \
    sed "s@SLACK_API_TOKEN=@SLACK_API_TOKEN=${slack_token}@;" .env.example >.env

ENTRYPOINT ["/usr/local/bin/node"]
CMD ["index.js"]
