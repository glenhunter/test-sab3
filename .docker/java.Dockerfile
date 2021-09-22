FROM openjdk:11-slim as builder
COPY backend /src
WORKDIR /src
RUN ./mvnw clean package

FROM openjdk:11.0-jre-slim
COPY --from=builder /src/target/*.jar /app.jar
ENTRYPOINT ["java","-jar","/app.jar"]
