# Basis-Image
FROM openjdk:17

# Arbeitsverzeichnis im Container
WORKDIR /app

# Kopieren der JAR-Datei in das Arbeitsverzeichnis
COPY target/studienarbeit-0.0.1-SNAPSHOT.jar app.jar

# Exponieren des Ports
EXPOSE 8080

# Startbefehl
CMD ["java", "-jar", "app.jar"]
