# Step 1: Use the official Node.js image as a base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of your application files
COPY . .

# Step 6: Expose the port the app will run on (default is 5000)
EXPOSE 5000

# Step 7: Run the application
CMD ["node", "app.js"]
