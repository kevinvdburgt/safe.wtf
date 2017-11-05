FROM node:8

# Create the app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install the app dependencies
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app
RUN npm install --production

# Bundle the app source
COPY . /usr/src/app

# Expose the app port
EXPOSE 7000

# Start the app
CMD ["npm", "start"]
