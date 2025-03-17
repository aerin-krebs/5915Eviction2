# Use Maven image as official base image
FROM maven AS build

# Sets working directory
WORKDIR /evictionEducation

COPY ./pom.xml /evictionEducation
COPY ./src /evictionEducation/src

# Build the application
RUN mvn -f pom.xml clean package -Dmaven.test.skip=true

# Create a new image for use with running
FROM openjdk:21-jdk

# Sets worki8ng directory
WORKDIR /evictionEducation

# Copies the built .jar file
COPY --from=build /evictionEducation/target/*.jar evictionEducation.jar

# Expose the port used to run the spring boot application
EXPOSE 8080

# Run the application
CMD [ "java", "-jar", "evictionEducation.jar"]